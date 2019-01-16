/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Env from '../Env';
import DomQuery from './DomQuery';
import EventUtils from './EventUtils';
import Position from '../../dom/Position';
import Sizzle from './Sizzle';
import { StyleSheetLoader } from '../../dom/StyleSheetLoader';
import TreeWalker from './TreeWalker';
import TrimNode from '../../dom/TrimNode';
import Entities from '../html/Entities';
import Schema from '../html/Schema';
import { Styles } from '../html/Styles';
import Tools from '../util/Tools';
import NodeType from 'tinymce/core/dom/NodeType';
import { window, document } from '@ephox/dom-globals';
/**
 * Utility class for various DOM manipulation and retrieval functions.
 *
 * @class tinymce.dom.DOMUtils
 * @example
 * // Add a class to an element by id in the page
 * tinymce.DOM.addClass('someid', 'someclass');
 *
 * // Add a class to an element by id inside the editor
 * tinymce.activeEditor.dom.addClass('someid', 'someclass');
 */
// Shorten names
var each = Tools.each;
var grep = Tools.grep;
var isIE = Env.ie;
var simpleSelectorRe = /^([a-z0-9],?)+$/i;
var whiteSpaceRegExp = /^[ \t\r\n]*$/;
var setupAttrHooks = function (styles, settings, getContext) {
    var attrHooks = {};
    var keepValues = settings.keep_values;
    var keepUrlHook = {
        set: function ($elm, value, name) {
            if (settings.url_converter) {
                value = settings.url_converter.call(settings.url_converter_scope || getContext(), value, name, $elm[0]);
            }
            $elm.attr('data-mce-' + name, value).attr(name, value);
        },
        get: function ($elm, name) {
            return $elm.attr('data-mce-' + name) || $elm.attr(name);
        }
    };
    attrHooks = {
        style: {
            set: function ($elm, value) {
                if (value !== null && typeof value === 'object') {
                    $elm.css(value);
                    return;
                }
                if (keepValues) {
                    $elm.attr('data-mce-style', value);
                }
                $elm.attr('style', value);
            },
            get: function ($elm) {
                var value = $elm.attr('data-mce-style') || $elm.attr('style');
                value = styles.serialize(styles.parse(value), $elm[0].nodeName);
                return value;
            }
        }
    };
    if (keepValues) {
        attrHooks.href = attrHooks.src = keepUrlHook;
    }
    return attrHooks;
};
var updateInternalStyleAttr = function (styles, $elm) {
    var rawValue = $elm.attr('style');
    var value = styles.serialize(styles.parse(rawValue), $elm[0].nodeName);
    if (!value) {
        value = null;
    }
    $elm.attr('data-mce-style', value);
};
var findNodeIndex = function (node, normalized) {
    var idx = 0, lastNodeType, nodeType;
    if (node) {
        for (lastNodeType = node.nodeType, node = node.previousSibling; node; node = node.previousSibling) {
            nodeType = node.nodeType;
            // Normalize text nodes
            if (normalized && nodeType === 3) {
                if (nodeType === lastNodeType || !node.nodeValue.length) {
                    continue;
                }
            }
            idx++;
            lastNodeType = nodeType;
        }
    }
    return idx;
};
/**
 * Constructs a new DOMUtils instance. Consult the Wiki for more details on settings etc for this class.
 *
 * @constructor
 * @method DOMUtils
 * @param {Document} doc Document reference to bind the utility class to.
 * @param {settings} settings Optional settings collection.
 */
export function DOMUtils(doc, settings) {
    var _this = this;
    if (settings === void 0) { settings = {}; }
    var attrHooks;
    var addedStyles = {};
    var win = window;
    var files = {};
    var counter = 0;
    var stdMode = true;
    var boxModel = true;
    var styleSheetLoader = StyleSheetLoader(doc, { contentCssCors: settings.contentCssCors });
    var boundEvents = [];
    var schema = settings.schema ? settings.schema : Schema({});
    var styles = Styles({
        url_converter: settings.url_converter,
        url_converter_scope: settings.url_converter_scope
    }, settings.schema);
    var events = settings.ownEvents ? new EventUtils(settings.proxy) : EventUtils.Event;
    var blockElementsMap = schema.getBlockElements();
    var $ = DomQuery.overrideDefaults(function () {
        return {
            context: doc,
            element: self.getRoot()
        };
    });
    /**
     * Returns true/false if the specified element is a block element or not.
     *
     * @method isBlock
     * @param {Node/String} node Element/Node to check.
     * @return {Boolean} True/False state if the node is a block element or not.
     */
    var isBlock = function (node) {
        if (typeof node === 'string') {
            return !!blockElementsMap[node];
        }
        else if (node) {
            // This function is called in module pattern style since it might be executed with the wrong this scope
            var type = node.nodeType;
            // If it's a node then check the type and use the nodeName
            if (type) {
                return !!(type === 1 && blockElementsMap[node.nodeName]);
            }
        }
        return false;
    };
    var get = function (elm) {
        if (elm && doc && typeof elm === 'string') {
            var node = doc.getElementById(elm);
            // IE and Opera returns meta elements when they match the specified input ID, but getElementsByName seems to do the trick
            if (node && node.id !== elm) {
                return doc.getElementsByName(elm)[1];
            }
            else {
                return node;
            }
        }
        return elm;
    };
    var $$ = function (elm) {
        if (typeof elm === 'string') {
            elm = get(elm);
        }
        return $(elm);
    };
    var getAttrib = function (elm, name, defaultVal) {
        var hook, value;
        var $elm = $$(elm);
        if ($elm.length) {
            hook = attrHooks[name];
            if (hook && hook.get) {
                value = hook.get($elm, name);
            }
            else {
                value = $elm.attr(name);
            }
        }
        if (typeof value === 'undefined') {
            value = defaultVal || '';
        }
        return value;
    };
    var getAttribs = function (elm) {
        var node = get(elm);
        if (!node) {
            return [];
        }
        return node.attributes;
    };
    var setAttrib = function (elm, name, value) {
        var originalValue, hook;
        if (value === '') {
            value = null;
        }
        var $elm = $$(elm);
        originalValue = $elm.attr(name);
        if (!$elm.length) {
            return;
        }
        hook = attrHooks[name];
        if (hook && hook.set) {
            hook.set($elm, value, name);
        }
        else {
            $elm.attr(name, value);
        }
        if (originalValue !== value && settings.onSetAttrib) {
            settings.onSetAttrib({
                attrElm: $elm,
                attrName: name,
                attrValue: value
            });
        }
    };
    var clone = function (node, deep) {
        // TODO: Add feature detection here in the future
        if (!isIE || node.nodeType !== 1 || deep) {
            return node.cloneNode(deep);
        }
        // Make a HTML5 safe shallow copy
        if (!deep) {
            var clone_1 = doc.createElement(node.nodeName);
            // Copy attribs
            each(getAttribs(node), function (attr) {
                setAttrib(clone_1, attr.nodeName, getAttrib(node, attr.nodeName));
            });
            return clone_1;
        }
        return null;
    };
    var getRoot = function () {
        return settings.root_element || doc.body;
    };
    var getViewPort = function (argWin) {
        var actWin = !argWin ? win : argWin;
        var doc = actWin.document;
        var rootElm = boxModel ? doc.documentElement : doc.body;
        // Returns viewport size excluding scrollbars
        return {
            x: actWin.pageXOffset || rootElm.scrollLeft,
            y: actWin.pageYOffset || rootElm.scrollTop,
            w: actWin.innerWidth || rootElm.clientWidth,
            h: actWin.innerHeight || rootElm.clientHeight
        };
    };
    var getPos = function (elm, rootElm) {
        return Position.getPos(doc.body, get(elm), rootElm);
    };
    var setStyle = function (elm, name, value) {
        var $elm = $$(elm).css(name, value);
        if (settings.update_styles) {
            updateInternalStyleAttr(styles, $elm);
        }
    };
    var setStyles = function (elm, stylesArg) {
        var $elm = $$(elm).css(stylesArg);
        if (settings.update_styles) {
            updateInternalStyleAttr(styles, $elm);
        }
    };
    var getStyle = function (elm, name, computed) {
        var $elm = $$(elm);
        if (computed) {
            return $elm.css(name);
        }
        // Camelcase it, if needed
        name = name.replace(/-(\D)/g, function (a, b) {
            return b.toUpperCase();
        });
        if (name === 'float') {
            name = Env.ie && Env.ie < 12 ? 'styleFloat' : 'cssFloat';
        }
        return $elm[0] && $elm[0].style ? $elm[0].style[name] : undefined;
    };
    var getSize = function (elm) {
        var w, h;
        elm = get(elm);
        w = getStyle(elm, 'width');
        h = getStyle(elm, 'height');
        // Non pixel value, then force offset/clientWidth
        if (w.indexOf('px') === -1) {
            w = 0;
        }
        // Non pixel value, then force offset/clientWidth
        if (h.indexOf('px') === -1) {
            h = 0;
        }
        return {
            w: parseInt(w, 10) || elm.offsetWidth || elm.clientWidth,
            h: parseInt(h, 10) || elm.offsetHeight || elm.clientHeight
        };
    };
    var getRect = function (elm) {
        var pos, size;
        elm = get(elm);
        pos = getPos(elm);
        size = getSize(elm);
        return {
            x: pos.x, y: pos.y,
            w: size.w, h: size.h
        };
    };
    var is = function (elm, selector) {
        var i;
        if (!elm) {
            return false;
        }
        // If it isn't an array then try to do some simple selectors instead of Sizzle for to boost performance
        if (!Array.isArray(elm)) {
            // Simple all selector
            if (selector === '*') {
                return elm.nodeType === 1;
            }
            // Simple selector just elements
            if (simpleSelectorRe.test(selector)) {
                var selectors = selector.toLowerCase().split(/,/);
                var elmName = elm.nodeName.toLowerCase();
                for (i = selectors.length - 1; i >= 0; i--) {
                    if (selectors[i] === elmName) {
                        return true;
                    }
                }
                return false;
            }
            // Is non element
            if (elm.nodeType && elm.nodeType !== 1) {
                return false;
            }
        }
        var elms = !Array.isArray(elm) ? [elm] : elm;
        /*eslint new-cap:0 */
        return Sizzle(selector, elms[0].ownerDocument || elms[0], null, elms).length > 0;
    };
    var getParents = function (elm, selector, root, collect) {
        var result = [];
        var selectorVal;
        var node = get(elm);
        collect = collect === undefined;
        // Default root on inline mode
        root = root || (getRoot().nodeName !== 'BODY' ? getRoot().parentNode : null);
        // Wrap node name as func
        if (Tools.is(selector, 'string')) {
            selectorVal = selector;
            if (selector === '*') {
                selector = function (node) {
                    return node.nodeType === 1;
                };
            }
            else {
                selector = function (node) {
                    return is(node, selectorVal);
                };
            }
        }
        while (node) {
            if (node === root || !node.nodeType || node.nodeType === 9) {
                break;
            }
            if (!selector || (typeof selector === 'function' && selector(node))) {
                if (collect) {
                    result.push(node);
                }
                else {
                    return [node];
                }
            }
            node = node.parentNode;
        }
        return collect ? result : null;
    };
    var getParent = function (node, selector, root) {
        var parents = getParents(node, selector, root, false);
        return parents && parents.length > 0 ? parents[0] : null;
    };
    var _findSib = function (node, selector, name) {
        var func = selector;
        if (node) {
            // If expression make a function of it using is
            if (typeof selector === 'string') {
                func = function (node) {
                    return is(node, selector);
                };
            }
            // Loop all siblings
            for (node = node[name]; node; node = node[name]) {
                if (typeof func === 'function' && func(node)) {
                    return node;
                }
            }
        }
        return null;
    };
    var getNext = function (node, selector) {
        return _findSib(node, selector, 'nextSibling');
    };
    var getPrev = function (node, selector) {
        return _findSib(node, selector, 'previousSibling');
    };
    var select = function (selector, scope) {
        return Sizzle(selector, get(scope) || settings.root_element || doc, []);
    };
    var run = function (elm, func, scope) {
        var result;
        var node = typeof elm === 'string' ? get(elm) : elm;
        if (!node) {
            return false;
        }
        if (Tools.isArray(node) && (node.length || node.length === 0)) {
            result = [];
            each(node, function (elm, i) {
                if (elm) {
                    if (typeof elm === 'string') {
                        elm = get(elm);
                    }
                    result.push(func.call(scope, elm, i));
                }
            });
            return result;
        }
        var context = scope ? scope : _this;
        return func.call(context, node);
    };
    var setAttribs = function (elm, attrs) {
        $$(elm).each(function (i, node) {
            each(attrs, function (value, name) {
                setAttrib(node, name, value);
            });
        });
    };
    var setHTML = function (elm, html) {
        var $elm = $$(elm);
        if (isIE) {
            $elm.each(function (i, target) {
                if (target.canHaveHTML === false) {
                    return;
                }
                // Remove all child nodes, IE keeps empty text nodes in DOM
                while (target.firstChild) {
                    target.removeChild(target.firstChild);
                }
                try {
                    // IE will remove comments from the beginning
                    // unless you padd the contents with something
                    target.innerHTML = '<br>' + html;
                    target.removeChild(target.firstChild);
                }
                catch (ex) {
                    // IE sometimes produces an unknown runtime error on innerHTML if it's a div inside a p
                    DomQuery('<div></div>').html('<br>' + html).contents().slice(1).appendTo(target);
                }
                return html;
            });
        }
        else {
            $elm.html(html);
        }
    };
    var add = function (parentElm, name, attrs, html, create) {
        return run(parentElm, function (parentElm) {
            var newElm = typeof name === 'string' ? doc.createElement(name) : name;
            setAttribs(newElm, attrs);
            if (html) {
                if (typeof html !== 'string' && html.nodeType) {
                    newElm.appendChild(html);
                }
                else if (typeof html === 'string') {
                    setHTML(newElm, html);
                }
            }
            return !create ? parentElm.appendChild(newElm) : newElm;
        });
    };
    var create = function (name, attrs, html) {
        return add(doc.createElement(name), name, attrs, html, true);
    };
    var decode = Entities.decode;
    var encode = Entities.encodeAllRaw;
    var createHTML = function (name, attrs, html) {
        var outHtml = '', key;
        outHtml += '<' + name;
        for (key in attrs) {
            if (attrs.hasOwnProperty(key) && attrs[key] !== null && typeof attrs[key] !== 'undefined') {
                outHtml += ' ' + key + '="' + encode(attrs[key]) + '"';
            }
        }
        // A call to tinymce.is doesn't work for some odd reason on IE9 possible bug inside their JS runtime
        if (typeof html !== 'undefined') {
            return outHtml + '>' + html + '</' + name + '>';
        }
        return outHtml + ' />';
    };
    var createFragment = function (html) {
        var node;
        var container = doc.createElement('div');
        var frag = doc.createDocumentFragment();
        if (html) {
            container.innerHTML = html;
        }
        while ((node = container.firstChild)) {
            frag.appendChild(node);
        }
        return frag;
    };
    var remove = function (node, keepChildren) {
        var $node = $$(node);
        if (keepChildren) {
            $node.each(function () {
                var child;
                while ((child = this.firstChild)) {
                    if (child.nodeType === 3 && child.data.length === 0) {
                        this.removeChild(child);
                    }
                    else {
                        this.parentNode.insertBefore(child, this);
                    }
                }
            }).remove();
        }
        else {
            $node.remove();
        }
        return $node.length > 1 ? $node.toArray() : $node[0];
    };
    var removeAllAttribs = function (e) {
        return run(e, function (e) {
            var i;
            var attrs = e.attributes;
            for (i = attrs.length - 1; i >= 0; i--) {
                e.removeAttributeNode(attrs.item(i));
            }
        });
    };
    var parseStyle = function (cssText) {
        return styles.parse(cssText);
    };
    var serializeStyle = function (stylesArg, name) {
        return styles.serialize(stylesArg, name);
    };
    var addStyle = function (cssText) {
        var head, styleElm;
        // Prevent inline from loading the same styles twice
        if (self !== DOMUtils.DOM && doc === document) {
            if (addedStyles[cssText]) {
                return;
            }
            addedStyles[cssText] = true;
        }
        // Create style element if needed
        styleElm = doc.getElementById('mceDefaultStyles');
        if (!styleElm) {
            styleElm = doc.createElement('style');
            styleElm.id = 'mceDefaultStyles';
            styleElm.type = 'text/css';
            head = doc.getElementsByTagName('head')[0];
            if (head.firstChild) {
                head.insertBefore(styleElm, head.firstChild);
            }
            else {
                head.appendChild(styleElm);
            }
        }
        // Append style data to old or new style element
        if (styleElm.styleSheet) {
            styleElm.styleSheet.cssText += cssText;
        }
        else {
            styleElm.appendChild(doc.createTextNode(cssText));
        }
    };
    var loadCSS = function (url) {
        var head;
        // Prevent inline from loading the same CSS file twice
        if (self !== DOMUtils.DOM && doc === document) {
            DOMUtils.DOM.loadCSS(url);
            return;
        }
        if (!url) {
            url = '';
        }
        head = doc.getElementsByTagName('head')[0];
        each(url.split(','), function (url) {
            var link;
            url = Tools._addCacheSuffix(url);
            if (files[url]) {
                return;
            }
            files[url] = true;
            link = create('link', { rel: 'stylesheet', href: url });
            head.appendChild(link);
        });
    };
    var toggleClass = function (elm, cls, state) {
        $$(elm).toggleClass(cls, state).each(function () {
            if (this.className === '') {
                DomQuery(this).attr('class', null);
            }
        });
    };
    var addClass = function (elm, cls) {
        $$(elm).addClass(cls);
    };
    var removeClass = function (elm, cls) {
        toggleClass(elm, cls, false);
    };
    var hasClass = function (elm, cls) {
        return $$(elm).hasClass(cls);
    };
    var show = function (elm) {
        $$(elm).show();
    };
    var hide = function (elm) {
        $$(elm).hide();
    };
    var isHidden = function (elm) {
        return $$(elm).css('display') === 'none';
    };
    var uniqueId = function (prefix) {
        return (!prefix ? 'mce_' : prefix) + (counter++);
    };
    var getOuterHTML = function (elm) {
        var node = typeof elm === 'string' ? get(elm) : elm;
        return NodeType.isElement(node) ? node.outerHTML : DomQuery('<div></div>').append(DomQuery(node).clone()).html();
    };
    var setOuterHTML = function (elm, html) {
        $$(elm).each(function () {
            try {
                // Older FF doesn't have outerHTML 3.6 is still used by some organizations
                if ('outerHTML' in this) {
                    this.outerHTML = html;
                    return;
                }
            }
            catch (ex) {
                // Ignore
            }
            // OuterHTML for IE it sometimes produces an "unknown runtime error"
            remove(DomQuery(this).html(html), true);
        });
    };
    var insertAfter = function (node, reference) {
        var referenceNode = get(reference);
        return run(node, function (node) {
            var parent, nextSibling;
            parent = referenceNode.parentNode;
            nextSibling = referenceNode.nextSibling;
            if (nextSibling) {
                parent.insertBefore(node, nextSibling);
            }
            else {
                parent.appendChild(node);
            }
            return node;
        });
    };
    var replace = function (newElm, oldElm, keepChildren) {
        return run(oldElm, function (oldElm) {
            if (Tools.is(oldElm, 'array')) {
                newElm = newElm.cloneNode(true);
            }
            if (keepChildren) {
                each(grep(oldElm.childNodes), function (node) {
                    newElm.appendChild(node);
                });
            }
            return oldElm.parentNode.replaceChild(newElm, oldElm);
        });
    };
    var rename = function (elm, name) {
        var newElm;
        if (elm.nodeName !== name.toUpperCase()) {
            // Rename block element
            newElm = create(name);
            // Copy attribs to new block
            each(getAttribs(elm), function (attrNode) {
                setAttrib(newElm, attrNode.nodeName, getAttrib(elm, attrNode.nodeName));
            });
            // Replace block
            replace(newElm, elm, true);
        }
        return newElm || elm;
    };
    var findCommonAncestor = function (a, b) {
        var ps = a, pe;
        while (ps) {
            pe = b;
            while (pe && ps !== pe) {
                pe = pe.parentNode;
            }
            if (ps === pe) {
                break;
            }
            ps = ps.parentNode;
        }
        if (!ps && a.ownerDocument) {
            return a.ownerDocument.documentElement;
        }
        return ps;
    };
    var toHex = function (rgbVal) {
        return styles.toHex(Tools.trim(rgbVal));
    };
    var isEmpty = function (node, elements) {
        var i, attributes, type, whitespace, walker, name, brCount = 0;
        node = node.firstChild;
        if (node) {
            walker = new TreeWalker(node, node.parentNode);
            elements = elements || (schema ? schema.getNonEmptyElements() : null);
            whitespace = schema ? schema.getWhiteSpaceElements() : {};
            do {
                type = node.nodeType;
                if (NodeType.isElement(node)) {
                    // Ignore bogus elements
                    var bogusVal = node.getAttribute('data-mce-bogus');
                    if (bogusVal) {
                        node = walker.next(bogusVal === 'all');
                        continue;
                    }
                    // Keep empty elements like <img />
                    name = node.nodeName.toLowerCase();
                    if (elements && elements[name]) {
                        // Ignore single BR elements in blocks like <p><br /></p> or <p><span><br /></span></p>
                        if (name === 'br') {
                            brCount++;
                            node = walker.next();
                            continue;
                        }
                        return false;
                    }
                    // Keep elements with data-bookmark attributes or name attribute like <a name="1"></a>
                    attributes = getAttribs(node);
                    i = attributes.length;
                    while (i--) {
                        name = attributes[i].nodeName;
                        if (name === 'name' || name === 'data-mce-bookmark') {
                            return false;
                        }
                    }
                }
                // Keep comment nodes
                if (type === 8) {
                    return false;
                }
                // Keep non whitespace text nodes
                if (type === 3 && !whiteSpaceRegExp.test(node.nodeValue)) {
                    return false;
                }
                // Keep whitespace preserve elements
                if (type === 3 && node.parentNode && whitespace[node.parentNode.nodeName] && whiteSpaceRegExp.test(node.nodeValue)) {
                    return false;
                }
                node = walker.next();
            } while (node);
        }
        return brCount <= 1;
    };
    var createRng = function () {
        return doc.createRange();
    };
    var split = function (parentElm, splitElm, replacementElm) {
        var r = createRng(), bef, aft, pa;
        if (parentElm && splitElm) {
            // Get before chunk
            r.setStart(parentElm.parentNode, findNodeIndex(parentElm));
            r.setEnd(splitElm.parentNode, findNodeIndex(splitElm));
            bef = r.extractContents();
            // Get after chunk
            r = createRng();
            r.setStart(splitElm.parentNode, findNodeIndex(splitElm) + 1);
            r.setEnd(parentElm.parentNode, findNodeIndex(parentElm) + 1);
            aft = r.extractContents();
            // Insert before chunk
            pa = parentElm.parentNode;
            pa.insertBefore(TrimNode.trimNode(self, bef), parentElm);
            // Insert middle chunk
            if (replacementElm) {
                pa.insertBefore(replacementElm, parentElm);
                // pa.replaceChild(replacementElm, splitElm);
            }
            else {
                pa.insertBefore(splitElm, parentElm);
            }
            // Insert after chunk
            pa.insertBefore(TrimNode.trimNode(self, aft), parentElm);
            remove(parentElm);
            return replacementElm || splitElm;
        }
    };
    var bind = function (target, name, func, scope) {
        if (Tools.isArray(target)) {
            var i = target.length;
            while (i--) {
                target[i] = bind(target[i], name, func, scope);
            }
            return target;
        }
        // Collect all window/document events bound by editor instance
        if (settings.collect && (target === doc || target === win)) {
            boundEvents.push([target, name, func, scope]);
        }
        return events.bind(target, name, func, scope || self);
    };
    var unbind = function (target, name, func) {
        var i;
        if (Tools.isArray(target)) {
            i = target.length;
            while (i--) {
                target[i] = unbind(target[i], name, func);
            }
            return target;
        }
        // Remove any bound events matching the input
        if (boundEvents && (target === doc || target === win)) {
            i = boundEvents.length;
            while (i--) {
                var item = boundEvents[i];
                if (target === item[0] && (!name || name === item[1]) && (!func || func === item[2])) {
                    events.unbind(item[0], item[1], item[2]);
                }
            }
        }
        return events.unbind(target, name, func);
    };
    var fire = function (target, name, evt) {
        return events.fire(target, name, evt);
    };
    var getContentEditable = function (node) {
        if (node && NodeType.isElement(node)) {
            // Check for fake content editable
            var contentEditable = node.getAttribute('data-mce-contenteditable');
            if (contentEditable && contentEditable !== 'inherit') {
                return contentEditable;
            }
            // Check for real content editable
            return node.contentEditable !== 'inherit' ? node.contentEditable : null;
        }
        else {
            return null;
        }
    };
    var getContentEditableParent = function (node) {
        var root = getRoot();
        var state = null;
        for (; node && node !== root; node = node.parentNode) {
            state = getContentEditable(node);
            if (state !== null) {
                break;
            }
        }
        return state;
    };
    var destroy = function () {
        // Unbind all events bound to window/document by editor instance
        if (boundEvents) {
            var i = boundEvents.length;
            while (i--) {
                var item = boundEvents[i];
                events.unbind(item[0], item[1], item[2]);
            }
        }
        // Restore sizzle document to window.document
        // Since the current document might be removed producing "Permission denied" on IE see #6325
        if (Sizzle.setDocument) {
            Sizzle.setDocument();
        }
    };
    var isChildOf = function (node, parent) {
        while (node) {
            if (parent === node) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    var dumpRng = function (r) {
        return ('startContainer: ' + r.startContainer.nodeName +
            ', startOffset: ' + r.startOffset +
            ', endContainer: ' + r.endContainer.nodeName +
            ', endOffset: ' + r.endOffset);
    };
    var self = {
        doc: doc,
        settings: settings,
        win: win,
        files: files,
        stdMode: stdMode,
        boxModel: boxModel,
        styleSheetLoader: styleSheetLoader,
        boundEvents: boundEvents,
        styles: styles,
        schema: schema,
        events: events,
        isBlock: isBlock,
        $: $,
        $$: $$,
        root: null,
        clone: clone,
        /**
         * Returns the root node of the document. This is normally the body but might be a DIV. Parents like getParent will not
         * go above the point of this root node.
         *
         * @method getRoot
         * @return {Element} Root element for the utility class.
         */
        getRoot: getRoot,
        /**
         * Returns the viewport of the window.
         *
         * @method getViewPort
         * @param {Window} win Optional window to get viewport of.
         * @return {Object} Viewport object with fields x, y, w and h.
         */
        getViewPort: getViewPort,
        /**
         * Returns the rectangle for a specific element.
         *
         * @method getRect
         * @param {Element/String} elm Element object or element ID to get rectangle from.
         * @return {object} Rectangle for specified element object with x, y, w, h fields.
         */
        getRect: getRect,
        /**
         * Returns the size dimensions of the specified element.
         *
         * @method getSize
         * @param {Element/String} elm Element object or element ID to get rectangle from.
         * @return {object} Rectangle for specified element object with w, h fields.
         */
        getSize: getSize,
        /**
         * Returns a node by the specified selector function. This function will
         * loop through all parent nodes and call the specified function for each node.
         * If the function then returns true indicating that it has found what it was looking for, the loop execution will then end
         * and the node it found will be returned.
         *
         * @method getParent
         * @param {Node/String} node DOM node to search parents on or ID string.
         * @param {function} selector Selection function or CSS selector to execute on each node.
         * @param {Node} root Optional root element, never go beyond this point.
         * @return {Node} DOM Node or null if it wasn't found.
         */
        getParent: getParent,
        /**
         * Returns a node list of all parents matching the specified selector function or pattern.
         * If the function then returns true indicating that it has found what it was looking for and that node will be collected.
         *
         * @method getParents
         * @param {Node/String} node DOM node to search parents on or ID string.
         * @param {function} selector Selection function to execute on each node or CSS pattern.
         * @param {Node} root Optional root element, never go beyond this point.
         * @return {Array} Array of nodes or null if it wasn't found.
         */
        getParents: getParents,
        /**
         * Returns the specified element by ID or the input element if it isn't a string.
         *
         * @method get
         * @param {String/Element} n Element id to look for or element to just pass though.
         * @return {Element} Element matching the specified id or null if it wasn't found.
         */
        get: get,
        /**
         * Returns the next node that matches selector or function
         *
         * @method getNext
         * @param {Node} node Node to find siblings from.
         * @param {String/function} selector Selector CSS expression or function.
         * @return {Node} Next node item matching the selector or null if it wasn't found.
         */
        getNext: getNext,
        /**
         * Returns the previous node that matches selector or function
         *
         * @method getPrev
         * @param {Node} node Node to find siblings from.
         * @param {String/function} selector Selector CSS expression or function.
         * @return {Node} Previous node item matching the selector or null if it wasn't found.
         */
        getPrev: getPrev,
        // #ifndef jquery
        /**
         * Selects specific elements by a CSS level 3 pattern. For example "div#a1 p.test".
         * This function is optimized for the most common patterns needed in TinyMCE but it also performs well enough
         * on more complex patterns.
         *
         * @method select
         * @param {String} selector CSS level 3 pattern to select/find elements by.
         * @param {Object} scope Optional root element/scope element to search in.
         * @return {Array} Array with all matched elements.
         * @example
         * // Adds a class to all paragraphs in the currently active editor
         * tinymce.activeEditor.dom.addClass(tinymce.activeEditor.dom.select('p'), 'someclass');
         *
         * // Adds a class to all spans that have the test class in the currently active editor
         * tinymce.activeEditor.dom.addClass(tinymce.activeEditor.dom.select('span.test'), 'someclass')
         */
        select: select,
        /**
         * Returns true/false if the specified element matches the specified css pattern.
         *
         * @method is
         * @param {Node/NodeList} elm DOM node to match or an array of nodes to match.
         * @param {String} selector CSS pattern to match the element against.
         */
        is: is,
        // #endif
        /**
         * Adds the specified element to another element or elements.
         *
         * @method add
         * @param {String/Element/Array} parentElm Element id string, DOM node element or array of ids or elements to add to.
         * @param {String/Element} name Name of new element to add or existing element to add.
         * @param {Object} attrs Optional object collection with arguments to add to the new element(s).
         * @param {String} html Optional inner HTML contents to add for each element.
         * @param {Boolean} create Optional flag if the element should be created or added.
         * @return {Element/Array} Element that got created, or an array of created elements if multiple input elements
         * were passed in.
         * @example
         * // Adds a new paragraph to the end of the active editor
         * tinymce.activeEditor.dom.add(tinymce.activeEditor.getBody(), 'p', {title: 'my title'}, 'Some content');
         */
        add: add,
        /**
         * Creates a new element.
         *
         * @method create
         * @param {String} name Name of new element.
         * @param {Object} attrs Optional object name/value collection with element attributes.
         * @param {String} html Optional HTML string to set as inner HTML of the element.
         * @return {Element} HTML DOM node element that got created.
         * @example
         * // Adds an element where the caret/selection is in the active editor
         * var el = tinymce.activeEditor.dom.create('div', {id: 'test', 'class': 'myclass'}, 'some content');
         * tinymce.activeEditor.selection.setNode(el);
         */
        create: create,
        /**
         * Creates HTML string for element. The element will be closed unless an empty inner HTML string is passed in.
         *
         * @method createHTML
         * @param {String} name Name of new element.
         * @param {Object} attrs Optional object name/value collection with element attributes.
         * @param {String} html Optional HTML string to set as inner HTML of the element.
         * @return {String} String with new HTML element, for example: <a href="#">test</a>.
         * @example
         * // Creates a html chunk and inserts it at the current selection/caret location
         * tinymce.activeEditor.selection.setContent(tinymce.activeEditor.dom.createHTML('a', {href: 'test.html'}, 'some line'));
         */
        createHTML: createHTML,
        /**
         * Creates a document fragment out of the specified HTML string.
         *
         * @method createFragment
         * @param {String} html Html string to create fragment from.
         * @return {DocumentFragment} Document fragment node.
         */
        createFragment: createFragment,
        /**
         * Removes/deletes the specified element(s) from the DOM.
         *
         * @method remove
         * @param {String/Element/Array} node ID of element or DOM element object or array containing multiple elements/ids.
         * @param {Boolean} keepChildren Optional state to keep children or not. If set to true all children will be
         * placed at the location of the removed element.
         * @return {Element/Array} HTML DOM element that got removed, or an array of removed elements if multiple input elements
         * were passed in.
         * @example
         * // Removes all paragraphs in the active editor
         * tinymce.activeEditor.dom.remove(tinymce.activeEditor.dom.select('p'));
         *
         * // Removes an element by id in the document
         * tinymce.DOM.remove('mydiv');
         */
        remove: remove,
        /**
         * Sets the CSS style value on a HTML element. The name can be a camelcase string
         * or the CSS style name like background-color.
         *
         * @method setStyle
         * @param {String/Element/Array} elm HTML element/Array of elements to set CSS style value on.
         * @param {String} name Name of the style value to set.
         * @param {String} value Value to set on the style.
         * @example
         * // Sets a style value on all paragraphs in the currently active editor
         * tinymce.activeEditor.dom.setStyle(tinymce.activeEditor.dom.select('p'), 'background-color', 'red');
         *
         * // Sets a style value to an element by id in the current document
         * tinymce.DOM.setStyle('mydiv', 'background-color', 'red');
         */
        setStyle: setStyle,
        /**
         * Returns the current style or runtime/computed value of an element.
         *
         * @method getStyle
         * @param {String/Element} elm HTML element or element id string to get style from.
         * @param {String} name Style name to return.
         * @param {Boolean} computed Computed style.
         * @return {String} Current style or computed style value of an element.
         */
        getStyle: getStyle,
        /**
         * Sets multiple styles on the specified element(s).
         *
         * @method setStyles
         * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set styles on.
         * @param {Object} styles Name/Value collection of style items to add to the element(s).
         * @example
         * // Sets styles on all paragraphs in the currently active editor
         * tinymce.activeEditor.dom.setStyles(tinymce.activeEditor.dom.select('p'), {'background-color': 'red', 'color': 'green'});
         *
         * // Sets styles to an element by id in the current document
         * tinymce.DOM.setStyles('mydiv', {'background-color': 'red', 'color': 'green'});
         */
        setStyles: setStyles,
        /**
         * Removes all attributes from an element or elements.
         *
         * @method removeAllAttribs
         * @param {Element/String/Array} e DOM element, element id string or array of elements/ids to remove attributes from.
         */
        removeAllAttribs: removeAllAttribs,
        /**
         * Sets the specified attribute of an element or elements.
         *
         * @method setAttrib
         * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set attribute on.
         * @param {String} name Name of attribute to set.
         * @param {String} value Value to set on the attribute - if this value is falsy like null, 0 or '' it will remove
         * the attribute instead.
         * @example
         * // Sets class attribute on all paragraphs in the active editor
         * tinymce.activeEditor.dom.setAttrib(tinymce.activeEditor.dom.select('p'), 'class', 'myclass');
         *
         * // Sets class attribute on a specific element in the current page
         * tinymce.dom.setAttrib('mydiv', 'class', 'myclass');
         */
        setAttrib: setAttrib,
        /**
         * Sets two or more specified attributes of an element or elements.
         *
         * @method setAttribs
         * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set attributes on.
         * @param {Object} attrs Name/Value collection of attribute items to add to the element(s).
         * @example
         * // Sets class and title attributes on all paragraphs in the active editor
         * tinymce.activeEditor.dom.setAttribs(tinymce.activeEditor.dom.select('p'), {'class': 'myclass', title: 'some title'});
         *
         * // Sets class and title attributes on a specific element in the current page
         * tinymce.DOM.setAttribs('mydiv', {'class': 'myclass', title: 'some title'});
         */
        setAttribs: setAttribs,
        /**
         * Returns the specified attribute by name.
         *
         * @method getAttrib
         * @param {String/Element} elm Element string id or DOM element to get attribute from.
         * @param {String} name Name of attribute to get.
         * @param {String} defaultVal Optional default value to return if the attribute didn't exist.
         * @return {String} Attribute value string, default value or null if the attribute wasn't found.
         */
        getAttrib: getAttrib,
        /**
         * Returns the absolute x, y position of a node. The position will be returned in an object with x, y fields.
         *
         * @method getPos
         * @param {Element/String} elm HTML element or element id to get x, y position from.
         * @param {Element} rootElm Optional root element to stop calculations at.
         * @return {object} Absolute position of the specified element object with x, y fields.
         */
        getPos: getPos,
        /**
         * Parses the specified style value into an object collection. This parser will also
         * merge and remove any redundant items that browsers might have added. It will also convert non-hex
         * colors to hex values. Urls inside the styles will also be converted to absolute/relative based on settings.
         *
         * @method parseStyle
         * @param {String} cssText Style value to parse, for example: border:1px solid red;.
         * @return {Object} Object representation of that style, for example: {border: '1px solid red'}
         */
        parseStyle: parseStyle,
        /**
         * Serializes the specified style object into a string.
         *
         * @method serializeStyle
         * @param {Object} styles Object to serialize as string, for example: {border: '1px solid red'}
         * @param {String} name Optional element name.
         * @return {String} String representation of the style object, for example: border: 1px solid red.
         */
        serializeStyle: serializeStyle,
        /**
         * Adds a style element at the top of the document with the specified cssText content.
         *
         * @method addStyle
         * @param {String} cssText CSS Text style to add to top of head of document.
         */
        addStyle: addStyle,
        /**
         * Imports/loads the specified CSS file into the document bound to the class.
         *
         * @method loadCSS
         * @param {String} url URL to CSS file to load.
         * @example
         * // Loads a CSS file dynamically into the current document
         * tinymce.DOM.loadCSS('somepath/some.css');
         *
         * // Loads a CSS file into the currently active editor instance
         * tinymce.activeEditor.dom.loadCSS('somepath/some.css');
         *
         * // Loads a CSS file into an editor instance by id
         * tinymce.get('someid').dom.loadCSS('somepath/some.css');
         *
         * // Loads multiple CSS files into the current document
         * tinymce.DOM.loadCSS('somepath/some.css,somepath/someother.css');
         */
        loadCSS: loadCSS,
        /**
         * Adds a class to the specified element or elements.
         *
         * @method addClass
         * @param {String/Element/Array} elm Element ID string or DOM element or array with elements or IDs.
         * @param {String} cls Class name to add to each element.
         * @return {String/Array} String with new class value or array with new class values for all elements.
         * @example
         * // Adds a class to all paragraphs in the active editor
         * tinymce.activeEditor.dom.addClass(tinymce.activeEditor.dom.select('p'), 'myclass');
         *
         * // Adds a class to a specific element in the current page
         * tinymce.DOM.addClass('mydiv', 'myclass');
         */
        addClass: addClass,
        /**
         * Removes a class from the specified element or elements.
         *
         * @method removeClass
         * @param {String/Element/Array} elm Element ID string or DOM element or array with elements or IDs.
         * @param {String} cls Class name to remove from each element.
         * @return {String/Array} String of remaining class name(s), or an array of strings if multiple input elements
         * were passed in.
         * @example
         * // Removes a class from all paragraphs in the active editor
         * tinymce.activeEditor.dom.removeClass(tinymce.activeEditor.dom.select('p'), 'myclass');
         *
         * // Removes a class from a specific element in the current page
         * tinymce.DOM.removeClass('mydiv', 'myclass');
         */
        removeClass: removeClass,
        /**
         * Returns true if the specified element has the specified class.
         *
         * @method hasClass
         * @param {String/Element} elm HTML element or element id string to check CSS class on.
         * @param {String} cls CSS class to check for.
         * @return {Boolean} true/false if the specified element has the specified class.
         */
        hasClass: hasClass,
        /**
         * Toggles the specified class on/off.
         *
         * @method toggleClass
         * @param {Element} elm Element to toggle class on.
         * @param {[type]} cls Class to toggle on/off.
         * @param {[type]} state Optional state to set.
         */
        toggleClass: toggleClass,
        /**
         * Shows the specified element(s) by ID by setting the "display" style.
         *
         * @method show
         * @param {String/Element/Array} elm ID of DOM element or DOM element or array with elements or IDs to show.
         */
        show: show,
        /**
         * Hides the specified element(s) by ID by setting the "display" style.
         *
         * @method hide
         * @param {String/Element/Array} elm ID of DOM element or DOM element or array with elements or IDs to hide.
         * @example
         * // Hides an element by id in the document
         * tinymce.DOM.hide('myid');
         */
        hide: hide,
        /**
         * Returns true/false if the element is hidden or not by checking the "display" style.
         *
         * @method isHidden
         * @param {String/Element} elm Id or element to check display state on.
         * @return {Boolean} true/false if the element is hidden or not.
         */
        isHidden: isHidden,
        /**
         * Returns a unique id. This can be useful when generating elements on the fly.
         * This method will not check if the element already exists.
         *
         * @method uniqueId
         * @param {String} prefix Optional prefix to add in front of all ids - defaults to "mce_".
         * @return {String} Unique id.
         */
        uniqueId: uniqueId,
        /**
         * Sets the specified HTML content inside the element or elements. The HTML will first be processed. This means
         * URLs will get converted, hex color values fixed etc. Check processHTML for details.
         *
         * @method setHTML
         * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set HTML inside of.
         * @param {String} html HTML content to set as inner HTML of the element.
         * @example
         * // Sets the inner HTML of all paragraphs in the active editor
         * tinymce.activeEditor.dom.setHTML(tinymce.activeEditor.dom.select('p'), 'some inner html');
         *
         * // Sets the inner HTML of an element by id in the document
         * tinymce.DOM.setHTML('mydiv', 'some inner html');
         */
        setHTML: setHTML,
        /**
         * Returns the outer HTML of an element.
         *
         * @method getOuterHTML
         * @param {String/Element} elm Element ID or element object to get outer HTML from.
         * @return {String} Outer HTML string.
         * @example
         * tinymce.DOM.getOuterHTML(editorElement);
         * tinymce.activeEditor.getOuterHTML(tinymce.activeEditor.getBody());
         */
        getOuterHTML: getOuterHTML,
        /**
         * Sets the specified outer HTML on an element or elements.
         *
         * @method setOuterHTML
         * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set outer HTML on.
         * @param {Object} html HTML code to set as outer value for the element.
         * @example
         * // Sets the outer HTML of all paragraphs in the active editor
         * tinymce.activeEditor.dom.setOuterHTML(tinymce.activeEditor.dom.select('p'), '<div>some html</div>');
         *
         * // Sets the outer HTML of an element by id in the document
         * tinymce.DOM.setOuterHTML('mydiv', '<div>some html</div>');
         */
        setOuterHTML: setOuterHTML,
        /**
         * Entity decodes a string. This method decodes any HTML entities, such as &aring;.
         *
         * @method decode
         * @param {String} s String to decode entities on.
         * @return {String} Entity decoded string.
         */
        decode: decode,
        /**
         * Entity encodes a string. This method encodes the most common entities, such as <>"&.
         *
         * @method encode
         * @param {String} text String to encode with entities.
         * @return {String} Entity encoded string.
         */
        encode: encode,
        /**
         * Inserts an element after the reference element.
         *
         * @method insertAfter
         * @param {Element} node Element to insert after the reference.
         * @param {Element/String/Array} referenceNode Reference element, element id or array of elements to insert after.
         * @return {Element/Array} Element that got added or an array with elements.
         */
        insertAfter: insertAfter,
        /**
         * Replaces the specified element or elements with the new element specified. The new element will
         * be cloned if multiple input elements are passed in.
         *
         * @method replace
         * @param {Element} newElm New element to replace old ones with.
         * @param {Element/String/Array} oldElm Element DOM node, element id or array of elements or ids to replace.
         * @param {Boolean} keepChildren Optional keep children state, if set to true child nodes from the old object will be added
         * to new ones.
         */
        replace: replace,
        /**
         * Renames the specified element and keeps its attributes and children.
         *
         * @method rename
         * @param {Element} elm Element to rename.
         * @param {String} name Name of the new element.
         * @return {Element} New element or the old element if it needed renaming.
         */
        rename: rename,
        /**
         * Find the common ancestor of two elements. This is a shorter method than using the DOM Range logic.
         *
         * @method findCommonAncestor
         * @param {Element} a Element to find common ancestor of.
         * @param {Element} b Element to find common ancestor of.
         * @return {Element} Common ancestor element of the two input elements.
         */
        findCommonAncestor: findCommonAncestor,
        /**
         * Parses the specified RGB color value and returns a hex version of that color.
         *
         * @method toHex
         * @param {String} rgbVal RGB string value like rgb(1,2,3)
         * @return {String} Hex version of that RGB value like #FF00FF.
         */
        toHex: toHex,
        /**
         * Executes the specified function on the element by id or dom element node or array of elements/id.
         *
         * @method run
         * @param {String/Element/Array} elm ID or DOM element object or array with ids or elements.
         * @param {function} func Function to execute for each item.
         * @param {Object} scope Optional scope to execute the function in.
         * @return {Object/Array} Single object, or an array of objects if multiple input elements were passed in.
         */
        run: run,
        /**
         * Returns a NodeList with attributes for the element.
         *
         * @method getAttribs
         * @param {HTMLElement/string} elm Element node or string id to get attributes from.
         * @return {NodeList} NodeList with attributes.
         */
        getAttribs: getAttribs,
        /**
         * Returns true/false if the specified node is to be considered empty or not.
         *
         * @example
         * tinymce.DOM.isEmpty(node, {img: true});
         * @method isEmpty
         * @param {Object} elements Optional name/value object with elements that are automatically treated as non-empty elements.
         * @return {Boolean} true/false if the node is empty or not.
         */
        isEmpty: isEmpty,
        /**
         * Creates a new DOM Range object. This will use the native DOM Range API if it's
         * available. If it's not, it will fall back to the custom TinyMCE implementation.
         *
         * @method createRng
         * @return {DOMRange} DOM Range object.
         * @example
         * var rng = tinymce.DOM.createRng();
         * alert(rng.startContainer + "," + rng.startOffset);
         */
        createRng: createRng,
        /**
         * Returns the index of the specified node within its parent.
         *
         * @method nodeIndex
         * @param {Node} node Node to look for.
         * @param {boolean} normalized Optional true/false state if the index is what it would be after a normalization.
         * @return {Number} Index of the specified node.
         */
        nodeIndex: findNodeIndex,
        /**
         * Splits an element into two new elements and places the specified split
         * element or elements between the new ones. For example splitting the paragraph at the bold element in
         * this example <p>abc<b>abc</b>123</p> would produce <p>abc</p><b>abc</b><p>123</p>.
         *
         * @method split
         * @param {Element} parentElm Parent element to split.
         * @param {Element} splitElm Element to split at.
         * @param {Element} replacementElm Optional replacement element to replace the split element with.
         * @return {Element} Returns the split element or the replacement element if that is specified.
         */
        split: split,
        /**
         * Adds an event handler to the specified object.
         *
         * @method bind
         * @param {Element/Document/Window/Array} target Target element to bind events to.
         * handler to or an array of elements/ids/documents.
         * @param {String} name Name of event handler to add, for example: click.
         * @param {function} func Function to execute when the event occurs.
         * @param {Object} scope Optional scope to execute the function in.
         * @return {function} Function callback handler the same as the one passed in.
         */
        bind: bind,
        /**
         * Removes the specified event handler by name and function from an element or collection of elements.
         *
         * @method unbind
         * @param {Element/Document/Window/Array} target Target element to unbind events on.
         * @param {String} name Event handler name, for example: "click"
         * @param {function} func Function to remove.
         * @return {bool/Array} Bool state of true if the handler was removed, or an array of states if multiple input elements
         * were passed in.
         */
        unbind: unbind,
        /**
         * Fires the specified event name with object on target.
         *
         * @method fire
         * @param {Node/Document/Window} target Target element or object to fire event on.
         * @param {String} name Name of the event to fire.
         * @param {Object} evt Event object to send.
         * @return {Event} Event object.
         */
        fire: fire,
        // Returns the content editable state of a node
        getContentEditable: getContentEditable,
        getContentEditableParent: getContentEditableParent,
        /**
         * Destroys all internal references to the DOM to solve IE leak issues.
         *
         * @method destroy
         */
        destroy: destroy,
        isChildOf: isChildOf,
        dumpRng: dumpRng
    };
    attrHooks = setupAttrHooks(styles, settings, function () { return self; });
    return self;
}
(function (DOMUtils) {
    /**
     * Instance of DOMUtils for the current document.
     *
     * @static
     * @property DOM
     * @type tinymce.dom.DOMUtils
     * @example
     * // Example of how to add a class to some element by id
     * tinymce.DOM.addClass('someid', 'someclass');
     */
    DOMUtils.DOM = DOMUtils(document);
    DOMUtils.nodeIndex = findNodeIndex;
})(DOMUtils || (DOMUtils = {}));
export default DOMUtils;
//# sourceMappingURL=DOMUtils.js.map