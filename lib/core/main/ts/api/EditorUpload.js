/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Uploader from '../file/Uploader';
import ImageScanner from '../file/ImageScanner';
import BlobCache from './file/BlobCache';
import UploadStatus from '../file/UploadStatus';
import ErrorReporter from '../ErrorReporter';
import { Arr } from '@ephox/katamari';
import Settings from 'tinymce/core/api/Settings';
/**
 * Handles image uploads, updates undo stack and patches over various internal functions.
 *
 * @private
 * @class tinymce.EditorUpload
 */
export default function (editor) {
    var blobCache = BlobCache();
    var uploader, imageScanner;
    var uploadStatus = UploadStatus();
    var urlFilters = [];
    var aliveGuard = function (callback) {
        return function (result) {
            if (editor.selection) {
                return callback(result);
            }
            return [];
        };
    };
    var cacheInvalidator = function () {
        return '?' + (new Date()).getTime();
    };
    // Replaces strings without regexps to avoid FF regexp to big issue
    var replaceString = function (content, search, replace) {
        var index = 0;
        do {
            index = content.indexOf(search, index);
            if (index !== -1) {
                content = content.substring(0, index) + replace + content.substr(index + search.length);
                index += replace.length - search.length + 1;
            }
        } while (index !== -1);
        return content;
    };
    var replaceImageUrl = function (content, targetUrl, replacementUrl) {
        content = replaceString(content, 'src="' + targetUrl + '"', 'src="' + replacementUrl + '"');
        content = replaceString(content, 'data-mce-src="' + targetUrl + '"', 'data-mce-src="' + replacementUrl + '"');
        return content;
    };
    var replaceUrlInUndoStack = function (targetUrl, replacementUrl) {
        Arr.each(editor.undoManager.data, function (level) {
            if (level.type === 'fragmented') {
                level.fragments = Arr.map(level.fragments, function (fragment) {
                    return replaceImageUrl(fragment, targetUrl, replacementUrl);
                });
            }
            else {
                level.content = replaceImageUrl(level.content, targetUrl, replacementUrl);
            }
        });
    };
    var openNotification = function () {
        return editor.notificationManager.open({
            text: editor.translate('Image uploading...'),
            type: 'info',
            timeout: -1,
            progressBar: true
        });
    };
    var replaceImageUri = function (image, resultUri) {
        blobCache.removeByUri(image.src);
        replaceUrlInUndoStack(image.src, resultUri);
        editor.$(image).attr({
            'src': Settings.shouldReuseFileName(editor) ? resultUri + cacheInvalidator() : resultUri,
            'data-mce-src': editor.convertURL(resultUri, 'src')
        });
    };
    var uploadImages = function (callback) {
        if (!uploader) {
            uploader = Uploader(uploadStatus, {
                url: Settings.getImageUploadUrl(editor),
                basePath: Settings.getImageUploadBasePath(editor),
                credentials: Settings.getImagesUploadCredentials(editor),
                handler: Settings.getImagesUploadHandler(editor)
            });
        }
        return scanForImages().then(aliveGuard(function (imageInfos) {
            var blobInfos;
            blobInfos = Arr.map(imageInfos, function (imageInfo) {
                return imageInfo.blobInfo;
            });
            return uploader.upload(blobInfos, openNotification).then(aliveGuard(function (result) {
                var filteredResult = Arr.map(result, function (uploadInfo, index) {
                    var image = imageInfos[index].image;
                    if (uploadInfo.status && Settings.shouldReplaceBlobUris(editor)) {
                        replaceImageUri(image, uploadInfo.url);
                    }
                    else if (uploadInfo.error) {
                        ErrorReporter.uploadError(editor, uploadInfo.error);
                    }
                    return {
                        element: image,
                        status: uploadInfo.status
                    };
                });
                if (callback) {
                    callback(filteredResult);
                }
                return filteredResult;
            }));
        }));
    };
    var uploadImagesAuto = function (callback) {
        if (Settings.isAutomaticUploadsEnabled(editor)) {
            return uploadImages(callback);
        }
    };
    var isValidDataUriImage = function (imgElm) {
        if (Arr.forall(urlFilters, function (filter) { return filter(imgElm); }) === false) {
            return false;
        }
        if (imgElm.getAttribute('src').indexOf('data:') === 0) {
            var dataImgFilter = Settings.getImagesDataImgFilter(editor);
            return dataImgFilter(imgElm);
        }
        return true;
    };
    var addFilter = function (filter) {
        urlFilters.push(filter);
    };
    var scanForImages = function () {
        if (!imageScanner) {
            imageScanner = ImageScanner(uploadStatus, blobCache);
        }
        return imageScanner.findAll(editor.getBody(), isValidDataUriImage).then(aliveGuard(function (result) {
            result = Arr.filter(result, function (resultItem) {
                // ImageScanner internally converts images that it finds, but it may fail to do so if image source is inaccessible.
                // In such case resultItem will contain appropriate text error message, instead of image data.
                if (typeof resultItem === 'string') {
                    ErrorReporter.displayError(editor, resultItem);
                    return false;
                }
                return true;
            });
            Arr.each(result, function (resultItem) {
                replaceUrlInUndoStack(resultItem.image.src, resultItem.blobInfo.blobUri());
                resultItem.image.src = resultItem.blobInfo.blobUri();
                resultItem.image.removeAttribute('data-mce-src');
            });
            return result;
        }));
    };
    var destroy = function () {
        blobCache.destroy();
        uploadStatus.destroy();
        imageScanner = uploader = null;
    };
    var replaceBlobUris = function (content) {
        return content.replace(/src="(blob:[^"]+)"/g, function (match, blobUri) {
            var resultUri = uploadStatus.getResultUri(blobUri);
            if (resultUri) {
                return 'src="' + resultUri + '"';
            }
            var blobInfo = blobCache.getByUri(blobUri);
            if (!blobInfo) {
                blobInfo = Arr.foldl(editor.editorManager.get(), function (result, editor) {
                    return result || editor.editorUpload && editor.editorUpload.blobCache.getByUri(blobUri);
                }, null);
            }
            if (blobInfo) {
                var blob = blobInfo.blob();
                return 'src="data:' + blob.type + ';base64,' + blobInfo.base64() + '"';
            }
            return match;
        });
    };
    editor.on('setContent', function () {
        if (Settings.isAutomaticUploadsEnabled(editor)) {
            uploadImagesAuto();
        }
        else {
            scanForImages();
        }
    });
    editor.on('RawSaveContent', function (e) {
        e.content = replaceBlobUris(e.content);
    });
    editor.on('getContent', function (e) {
        if (e.source_view || e.format === 'raw') {
            return;
        }
        e.content = replaceBlobUris(e.content);
    });
    editor.on('PostRender', function () {
        editor.parser.addNodeFilter('img', function (images) {
            Arr.each(images, function (img) {
                var src = img.attr('src');
                if (blobCache.getByUri(src)) {
                    return;
                }
                var resultUri = uploadStatus.getResultUri(src);
                if (resultUri) {
                    img.attr('src', resultUri);
                }
            });
        });
    });
    return {
        blobCache: blobCache,
        addFilter: addFilter,
        uploadImages: uploadImages,
        uploadImagesAuto: uploadImagesAuto,
        scanForImages: scanForImages,
        destroy: destroy
    };
}
//# sourceMappingURL=EditorUpload.js.map