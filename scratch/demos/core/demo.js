/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/demo/ts/demo/Demos.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventListenerOptions", function() { return AddEventListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesCbcParams", function() { return AesCbcParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesCtrParams", function() { return AesCtrParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesDerivedKeyParams", function() { return AesDerivedKeyParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesGcmParams", function() { return AesGcmParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesKeyAlgorithm", function() { return AesKeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesKeyGenParams", function() { return AesKeyGenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Algorithm", function() { return Algorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyserOptions", function() { return AnalyserOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEventInit", function() { return AnimationEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionOptions", function() { return AssertionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBufferOptions", function() { return AudioBufferOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBufferSourceOptions", function() { return AudioBufferSourceOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContextInfo", function() { return AudioContextInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContextOptions", function() { return AudioContextOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioNodeOptions", function() { return AudioNodeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioParamDescriptor", function() { return AudioParamDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioProcessingEventInit", function() { return AudioProcessingEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTimestamp", function() { return AudioTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiquadFilterOptions", function() { return BiquadFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteLengthChunk", function() { return ByteLengthChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheQueryOptions", function() { return CacheQueryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMergerOptions", function() { return ChannelMergerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSplitterOptions", function() { return ChannelSplitterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientData", function() { return ClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientQueryOptions", function() { return ClientQueryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseEventInit", function() { return CloseEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionEventInit", function() { return CompositionEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmSiteSpecificExceptionsInformation", function() { return ConfirmSiteSpecificExceptionsInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantSourceOptions", function() { return ConstantSourceOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainBooleanParameters", function() { return ConstrainBooleanParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainDOMStringParameters", function() { return ConstrainDOMStringParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainDoubleRange", function() { return ConstrainDoubleRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainLongRange", function() { return ConstrainLongRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainVideoFacingModeParameters", function() { return ConstrainVideoFacingModeParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolverOptions", function() { return ConvolverOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventInit", function() { return CustomEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRectInit", function() { return DOMRectInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayOptions", function() { return DelayOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAccelerationDict", function() { return DeviceAccelerationDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceLightEventInit", function() { return DeviceLightEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotionEventInit", function() { return DeviceMotionEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOrientationEventInit", function() { return DeviceOrientationEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRotationRateDict", function() { return DeviceRotationRateDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleRange", function() { return DoubleRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicsCompressorOptions", function() { return DynamicsCompressorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcKeyAlgorithm", function() { return EcKeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcKeyGenParams", function() { return EcKeyGenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcKeyImportParams", function() { return EcKeyImportParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcdhKeyDeriveParams", function() { return EcdhKeyDeriveParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcdsaParams", function() { return EcdsaParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEventInit", function() { return ErrorEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventInit", function() { return EventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerOptions", function() { return EventListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModifierInit", function() { return EventModifierInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionInformation", function() { return ExceptionInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendableEventInit", function() { return ExtendableEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendableMessageEventInit", function() { return ExtendableMessageEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchEventInit", function() { return FetchEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusEventInit", function() { return FocusEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusNavigationEventInit", function() { return FocusNavigationEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusNavigationOrigin", function() { return FocusNavigationOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GainOptions", function() { return GainOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadEventInit", function() { return GamepadEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotificationOptions", function() { return GetNotificationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashChangeEventInit", function() { return HashChangeEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkdfParams", function() { return HkdfParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacImportParams", function() { return HmacImportParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacKeyAlgorithm", function() { return HmacKeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacKeyGenParams", function() { return HmacKeyGenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBIndexParameters", function() { return IDBIndexParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBObjectStoreParameters", function() { return IDBObjectStoreParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIRFilterOptions", function() { return IIRFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverEntryInit", function() { return IntersectionObserverEntryInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverInit", function() { return IntersectionObserverInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonWebKey", function() { return JsonWebKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyAlgorithm", function() { return KeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEventInit", function() { return KeyboardEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongRange", function() { return LongRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAccountInfo", function() { return MSAccountInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAudioLocalClientEvent", function() { return MSAudioLocalClientEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAudioRecvPayload", function() { return MSAudioRecvPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAudioRecvSignal", function() { return MSAudioRecvSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAudioSendPayload", function() { return MSAudioSendPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAudioSendSignal", function() { return MSAudioSendSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSConnectivity", function() { return MSConnectivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSCredentialFilter", function() { return MSCredentialFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSCredentialParameters", function() { return MSCredentialParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSCredentialSpec", function() { return MSCredentialSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDCCEventInit", function() { return MSDCCEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDSHEventInit", function() { return MSDSHEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDelay", function() { return MSDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDescription", function() { return MSDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOCredentialParameters", function() { return MSFIDOCredentialParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSIPAddressInfo", function() { return MSIPAddressInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSIceWarningFlags", function() { return MSIceWarningFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSJitter", function() { return MSJitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSLocalClientEventBase", function() { return MSLocalClientEventBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSNetwork", function() { return MSNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSNetworkConnectivityInfo", function() { return MSNetworkConnectivityInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSNetworkInterfaceType", function() { return MSNetworkInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSOutboundNetwork", function() { return MSOutboundNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSPacketLoss", function() { return MSPacketLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSPayloadBase", function() { return MSPayloadBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSPortRange", function() { return MSPortRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSRelayAddress", function() { return MSRelayAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSSignatureParameters", function() { return MSSignatureParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSTransportDiagnosticsStats", function() { return MSTransportDiagnosticsStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSUtilization", function() { return MSUtilization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSVideoPayload", function() { return MSVideoPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSVideoRecvPayload", function() { return MSVideoRecvPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSVideoResolutionDistribution", function() { return MSVideoResolutionDistribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSVideoSendPayload", function() { return MSVideoSendPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaElementAudioSourceOptions", function() { return MediaElementAudioSourceOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaEncryptedEventInit", function() { return MediaEncryptedEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyMessageEventInit", function() { return MediaKeyMessageEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySystemConfiguration", function() { return MediaKeySystemConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySystemMediaCapability", function() { return MediaKeySystemMediaCapability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamConstraints", function() { return MediaStreamConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamErrorEventInit", function() { return MediaStreamErrorEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamEventInit", function() { return MediaStreamEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrackEventInit", function() { return MediaStreamTrackEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTrackCapabilities", function() { return MediaTrackCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTrackConstraintSet", function() { return MediaTrackConstraintSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTrackConstraints", function() { return MediaTrackConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTrackSettings", function() { return MediaTrackSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTrackSupportedConstraints", function() { return MediaTrackSupportedConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEventInit", function() { return MessageEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEventInit", function() { return MouseEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsZoomToOptions", function() { return MsZoomToOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverInit", function() { return MutationObserverInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationEventInit", function() { return NotificationEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationOptions", function() { return NotificationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectURLOptions", function() { return ObjectURLOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineAudioCompletionEventInit", function() { return OfflineAudioCompletionEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OscillatorOptions", function() { return OscillatorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PannerOptions", function() { return PannerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCurrencyAmount", function() { return PaymentCurrencyAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsBase", function() { return PaymentDetailsBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsInit", function() { return PaymentDetailsInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsModifier", function() { return PaymentDetailsModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsUpdate", function() { return PaymentDetailsUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentItem", function() { return PaymentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodData", function() { return PaymentMethodData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptions", function() { return PaymentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequestUpdateEventInit", function() { return PaymentRequestUpdateEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentShippingOption", function() { return PaymentShippingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pbkdf2Params", function() { return Pbkdf2Params; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicWaveConstraints", function() { return PeriodicWaveConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicWaveOptions", function() { return PeriodicWaveOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEventInit", function() { return PointerEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopStateEventInit", function() { return PopStateEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionOptions", function() { return PositionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressEventInit", function() { return ProgressEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushEventInit", function() { return PushEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubscriptionChangeInit", function() { return PushSubscriptionChangeInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubscriptionOptionsInit", function() { return PushSubscriptionOptionsInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuingStrategy", function() { return QueuingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCConfiguration", function() { return RTCConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDTMFToneChangeEventInit", function() { return RTCDTMFToneChangeEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsFingerprint", function() { return RTCDtlsFingerprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsParameters", function() { return RTCDtlsParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidateAttributes", function() { return RTCIceCandidateAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidateComplete", function() { return RTCIceCandidateComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidateDictionary", function() { return RTCIceCandidateDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidateInit", function() { return RTCIceCandidateInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidatePair", function() { return RTCIceCandidatePair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidatePairStats", function() { return RTCIceCandidatePairStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGatherOptions", function() { return RTCIceGatherOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceParameters", function() { return RTCIceParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceServer", function() { return RTCIceServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCInboundRTPStreamStats", function() { return RTCInboundRTPStreamStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCMediaStreamTrackStats", function() { return RTCMediaStreamTrackStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCOfferOptions", function() { return RTCOfferOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCOutboundRTPStreamStats", function() { return RTCOutboundRTPStreamStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnectionIceEventInit", function() { return RTCPeerConnectionIceEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRTPStreamStats", function() { return RTCRTPStreamStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtcpFeedback", function() { return RTCRtcpFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtcpParameters", function() { return RTCRtcpParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpCapabilities", function() { return RTCRtpCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpCodecCapability", function() { return RTCRtpCodecCapability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpCodecParameters", function() { return RTCRtpCodecParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpContributingSource", function() { return RTCRtpContributingSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpEncodingParameters", function() { return RTCRtpEncodingParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpFecParameters", function() { return RTCRtpFecParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpHeaderExtension", function() { return RTCRtpHeaderExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpHeaderExtensionParameters", function() { return RTCRtpHeaderExtensionParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpParameters", function() { return RTCRtpParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpRtxParameters", function() { return RTCRtpRtxParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpUnhandled", function() { return RTCRtpUnhandled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSessionDescriptionInit", function() { return RTCSessionDescriptionInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSrtpKeyParam", function() { return RTCSrtpKeyParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSrtpSdesParameters", function() { return RTCSrtpSdesParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSsrcRange", function() { return RTCSsrcRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStats", function() { return RTCStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsReport", function() { return RTCStatsReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCTransportStats", function() { return RTCTransportStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationOptions", function() { return RegistrationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInit", function() { return RequestInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInit", function() { return ResponseInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaHashedImportParams", function() { return RsaHashedImportParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaHashedKeyAlgorithm", function() { return RsaHashedKeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaHashedKeyGenParams", function() { return RsaHashedKeyGenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaKeyAlgorithm", function() { return RsaKeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaKeyGenParams", function() { return RsaKeyGenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaOaepParams", function() { return RsaOaepParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaOtherPrimesInfo", function() { return RsaOtherPrimesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsaPssParams", function() { return RsaPssParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredentialDescriptor", function() { return ScopedCredentialDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredentialOptions", function() { return ScopedCredentialOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredentialParameters", function() { return ScopedCredentialParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPolicyViolationEventInit", function() { return SecurityPolicyViolationEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerMessageEventInit", function() { return ServiceWorkerMessageEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisEventInit", function() { return SpeechSynthesisEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StereoPannerOptions", function() { return StereoPannerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreExceptionsInformation", function() { return StoreExceptionsInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreSiteSpecificExceptionsInformation", function() { return StoreSiteSpecificExceptionsInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncEventInit", function() { return SyncEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecodeOptions", function() { return TextDecodeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoderOptions", function() { return TextDecoderOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventInit", function() { return TrackEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionEventInit", function() { return TransitionEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIEventInit", function() { return UIEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlyingSink", function() { return UnderlyingSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplayEventInit", function() { return VRDisplayEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRLayer", function() { return VRLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRStageParameters", function() { return VRStageParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveShaperOptions", function() { return WaveShaperOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthnExtensions", function() { return WebAuthnExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLContextAttributes", function() { return WebGLContextAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLContextEventInit", function() { return WebGLContextEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelEventInit", function() { return WheelEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitEntriesCallback", function() { return WebKitEntriesCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitErrorCallback", function() { return WebKitErrorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitFileCallback", function() { return WebKitFileCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_instanced_arrays", function() { return ANGLE_instanced_arrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortSignalEventMap", function() { return AbortSignalEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortSignal", function() { return AbortSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractWorkerEventMap", function() { return AbstractWorkerEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractWorker", function() { return AbstractWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesCfbParams", function() { return AesCfbParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AesCmacParams", function() { return AesCmacParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyserNode", function() { return AnalyserNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEffectReadOnly", function() { return AnimationEffectReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEvent", function() { return AnimationEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationKeyFrame", function() { return AnimationKeyFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationOptions", function() { return AnimationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPlaybackEvent", function() { return AnimationPlaybackEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPlaybackEventInit", function() { return AnimationPlaybackEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationTimeline", function() { return AnimationTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCacheEventMap", function() { return ApplicationCacheEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCache", function() { return ApplicationCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedNodesOptions", function() { return AssignedNodesOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attr", function() { return Attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBuffer", function() { return AudioBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBufferSourceNodeEventMap", function() { return AudioBufferSourceNodeEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBufferSourceNode", function() { return AudioBufferSourceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContextEventMap", function() { return AudioContextEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContextBase", function() { return AudioContextBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContext", function() { return AudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioDestinationNode", function() { return AudioDestinationNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioListener", function() { return AudioListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioNode", function() { return AudioNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioParam", function() { return AudioParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioProcessingEvent", function() { return AudioProcessingEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrack", function() { return AudioTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrackListEventMap", function() { return AudioTrackListEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrackList", function() { return AudioTrackList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarProp", function() { return BarProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeUnloadEvent", function() { return BeforeUnloadEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BhxBrowser", function() { return BhxBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiquadFilterNode", function() { return BiquadFilterNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return Blob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobPropertyBag", function() { return BlobPropertyBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastChannel", function() { return BroadcastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastChannelEventMap", function() { return BroadcastChannelEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteLengthQueuingStrategy", function() { return ByteLengthQueuingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDATASection", function() { return CDATASection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSConditionRule", function() { return CSSConditionRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSFontFaceRule", function() { return CSSFontFaceRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSGroupingRule", function() { return CSSGroupingRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSImportRule", function() { return CSSImportRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSKeyframeRule", function() { return CSSKeyframeRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSKeyframesRule", function() { return CSSKeyframesRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSMediaRule", function() { return CSSMediaRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSNamespaceRule", function() { return CSSNamespaceRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPageRule", function() { return CSSPageRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSRule", function() { return CSSRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSRuleList", function() { return CSSRuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSStyleDeclaration", function() { return CSSStyleDeclaration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSStyleRule", function() { return CSSStyleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSStyleSheet", function() { return CSSStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSSupportsRule", function() { return CSSSupportsRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheStorage", function() { return CacheStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas2DContextAttributes", function() { return Canvas2DContextAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGradient", function() { return CanvasGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPathMethods", function() { return CanvasPathMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPattern", function() { return CanvasPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderingContext2D", function() { return CanvasRenderingContext2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMergerNode", function() { return ChannelMergerNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSplitterNode", function() { return ChannelSplitterNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterData", function() { return CharacterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildNode", function() { return ChildNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRect", function() { return ClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRectList", function() { return ClientRectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardEvent", function() { return ClipboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardEventInit", function() { return ClipboardEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseEvent", function() { return CloseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionEvent", function() { return CompositionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputedTimingProperties", function() { return ComputedTimingProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatParams", function() { return ConcatParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentScriptGlobalScope", function() { return ContentScriptGlobalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolverNode", function() { return ConvolverNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountQueuingStrategy", function() { return CountQueuingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crypto", function() { return Crypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoKey", function() { return CryptoKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoKeyPair", function() { return CryptoKeyPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomElementRegistry", function() { return CustomElementRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvent", function() { return CustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMError", function() { return DOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMImplementation", function() { return DOMImplementation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOML2DeprecatedColorProperty", function() { return DOML2DeprecatedColorProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOML2DeprecatedSizeProperty", function() { return DOML2DeprecatedSizeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMParser", function() { return DOMParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRect", function() { return DOMRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRectList", function() { return DOMRectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRectReadOnly", function() { return DOMRectReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMSettableTokenList", function() { return DOMSettableTokenList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMStringList", function() { return DOMStringList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMStringMap", function() { return DOMStringMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMTokenList", function() { return DOMTokenList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCue", function() { return DataCue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransfer", function() { return DataTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferItem", function() { return DataTransferItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferItemList", function() { return DataTransferItemList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredPermissionRequest", function() { return DeferredPermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayNode", function() { return DelayNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAcceleration", function() { return DeviceAcceleration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceLightEvent", function() { return DeviceLightEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotionEvent", function() { return DeviceMotionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOrientationEvent", function() { return DeviceOrientationEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRotationRate", function() { return DeviceRotationRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DhImportKeyParams", function() { return DhImportKeyParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DhKeyAlgorithm", function() { return DhKeyAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DhKeyDeriveParams", function() { return DhKeyDeriveParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DhKeyGenParams", function() { return DhKeyGenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentEventMap", function() { return DocumentEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentEvent", function() { return DocumentEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFragment", function() { return DocumentFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentOrShadowRoot", function() { return DocumentOrShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragEvent", function() { return DragEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicsCompressorNode", function() { return DynamicsCompressorNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_blend_minmax", function() { return EXT_blend_minmax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_frag_depth", function() { return EXT_frag_depth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_sRGB", function() { return EXT_sRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_shader_texture_lod", function() { return EXT_shader_texture_lod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_texture_filter_anisotropic", function() { return EXT_texture_filter_anisotropic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementEventMap", function() { return ElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCSSInlineStyle", function() { return ElementCSSInlineStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCreationOptions", function() { return ElementCreationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementDefinitionOptions", function() { return ElementDefinitionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTraversal", function() { return ElementTraversal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEvent", function() { return ErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerObject", function() { return EventListenerObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSource", function() { return EventSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSourceInit", function() { return EventSourceInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionScriptApis", function() { return ExtensionScriptApis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "External", function() { return External; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileList", function() { return FileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePropertyBag", function() { return FilePropertyBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReaderEventMap", function() { return FileReaderEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReader", function() { return FileReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReaderProgressEvent", function() { return FileReaderProgressEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusEvent", function() { return FocusEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusNavigationEvent", function() { return FocusNavigationEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GainNode", function() { return GainNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gamepad", function() { return Gamepad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadButton", function() { return GamepadButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadEvent", function() { return GamepadEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadHapticActuator", function() { return GamepadHapticActuator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadPose", function() { return GamepadPose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSVGDocument", function() { return GetSVGDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalEventHandlersEventMap", function() { return GlobalEventHandlersEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalEventHandlers", function() { return GlobalEventHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFetch", function() { return GlobalFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAllCollection", function() { return HTMLAllCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAnchorElement", function() { return HTMLAnchorElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAppletElement", function() { return HTMLAppletElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAreaElement", function() { return HTMLAreaElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAreasCollection", function() { return HTMLAreasCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAudioElement", function() { return HTMLAudioElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBRElement", function() { return HTMLBRElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBaseElement", function() { return HTMLBaseElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBaseFontElement", function() { return HTMLBaseFontElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBodyElementEventMap", function() { return HTMLBodyElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBodyElement", function() { return HTMLBodyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLButtonElement", function() { return HTMLButtonElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLCanvasElement", function() { return HTMLCanvasElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLCollectionBase", function() { return HTMLCollectionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLCollection", function() { return HTMLCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLCollectionOf", function() { return HTMLCollectionOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDListElement", function() { return HTMLDListElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDataElement", function() { return HTMLDataElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDataListElement", function() { return HTMLDataListElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDetailsElement", function() { return HTMLDetailsElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDialogElement", function() { return HTMLDialogElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDirectoryElement", function() { return HTMLDirectoryElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDivElement", function() { return HTMLDivElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDocument", function() { return HTMLDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLElementEventMap", function() { return HTMLElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLElement", function() { return HTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLEmbedElement", function() { return HTMLEmbedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFieldSetElement", function() { return HTMLFieldSetElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFontElement", function() { return HTMLFontElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFormControlsCollection", function() { return HTMLFormControlsCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFormElement", function() { return HTMLFormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFrameElementEventMap", function() { return HTMLFrameElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFrameElement", function() { return HTMLFrameElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFrameSetElementEventMap", function() { return HTMLFrameSetElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFrameSetElement", function() { return HTMLFrameSetElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHRElement", function() { return HTMLHRElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHeadElement", function() { return HTMLHeadElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHeadingElement", function() { return HTMLHeadingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHtmlElement", function() { return HTMLHtmlElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHyperlinkElementUtils", function() { return HTMLHyperlinkElementUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLIFrameElementEventMap", function() { return HTMLIFrameElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLIFrameElement", function() { return HTMLIFrameElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLImageElement", function() { return HTMLImageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLInputElement", function() { return HTMLInputElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLIElement", function() { return HTMLLIElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLabelElement", function() { return HTMLLabelElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLegendElement", function() { return HTMLLegendElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLinkElement", function() { return HTMLLinkElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMainElement", function() { return HTMLMainElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMapElement", function() { return HTMLMapElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMarqueeElementEventMap", function() { return HTMLMarqueeElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMarqueeElement", function() { return HTMLMarqueeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMediaElementEventMap", function() { return HTMLMediaElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMediaElement", function() { return HTMLMediaElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMenuElement", function() { return HTMLMenuElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMetaElement", function() { return HTMLMetaElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMeterElement", function() { return HTMLMeterElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLModElement", function() { return HTMLModElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOListElement", function() { return HTMLOListElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLObjectElement", function() { return HTMLObjectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOptGroupElement", function() { return HTMLOptGroupElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOptionElement", function() { return HTMLOptionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOptionsCollection", function() { return HTMLOptionsCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOutputElement", function() { return HTMLOutputElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLParagraphElement", function() { return HTMLParagraphElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLParamElement", function() { return HTMLParamElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLPictureElement", function() { return HTMLPictureElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLPreElement", function() { return HTMLPreElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLProgressElement", function() { return HTMLProgressElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLQuoteElement", function() { return HTMLQuoteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLScriptElement", function() { return HTMLScriptElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSelectElement", function() { return HTMLSelectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSlotElement", function() { return HTMLSlotElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSourceElement", function() { return HTMLSourceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSpanElement", function() { return HTMLSpanElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLStyleElement", function() { return HTMLStyleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSummaryElement", function() { return HTMLSummaryElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableCaptionElement", function() { return HTMLTableCaptionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableCellElement", function() { return HTMLTableCellElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableColElement", function() { return HTMLTableColElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableDataCellElement", function() { return HTMLTableDataCellElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableElement", function() { return HTMLTableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableHeaderCellElement", function() { return HTMLTableHeaderCellElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableRowElement", function() { return HTMLTableRowElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableSectionElement", function() { return HTMLTableSectionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTemplateElement", function() { return HTMLTemplateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTextAreaElement", function() { return HTMLTextAreaElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTimeElement", function() { return HTMLTimeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTitleElement", function() { return HTMLTitleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTrackElement", function() { return HTMLTrackElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLUListElement", function() { return HTMLUListElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLUnknownElement", function() { return HTMLUnknownElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVideoElementEventMap", function() { return HTMLVideoElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVideoElement", function() { return HTMLVideoElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLegendElement", function() { return HTMLegendElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashChangeEvent", function() { return HashChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkdfCtrParams", function() { return HkdfCtrParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBArrayKey", function() { return IDBArrayKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBCursor", function() { return IDBCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBCursorWithValue", function() { return IDBCursorWithValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBDatabaseEventMap", function() { return IDBDatabaseEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBDatabase", function() { return IDBDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBEnvironment", function() { return IDBEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBFactory", function() { return IDBFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBIndex", function() { return IDBIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBKeyRange", function() { return IDBKeyRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBObjectStore", function() { return IDBObjectStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBOpenDBRequestEventMap", function() { return IDBOpenDBRequestEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBOpenDBRequest", function() { return IDBOpenDBRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBRequestEventMap", function() { return IDBRequestEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBRequest", function() { return IDBRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBTransactionEventMap", function() { return IDBTransactionEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBTransaction", function() { return IDBTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBVersionChangeEvent", function() { return IDBVersionChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIRFilterNode", function() { return IIRFilterNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBitmap", function() { return ImageBitmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBitmapOptions", function() { return ImageBitmapOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageData", function() { return ImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserver", function() { return IntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverEntry", function() { return IntersectionObserverEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return KeyboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkStyle", function() { return LinkStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeningStateChangedEvent", function() { return ListeningStateChangedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAssertion", function() { return MSAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSBlobBuilder", function() { return MSBlobBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSCredentials", function() { return MSCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDCCEvent", function() { return MSDCCEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDSHEvent", function() { return MSDSHEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOCredentialAssertion", function() { return MSFIDOCredentialAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOSignature", function() { return MSFIDOSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOSignatureAssertion", function() { return MSFIDOSignatureAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFileSaver", function() { return MSFileSaver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSGesture", function() { return MSGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSGestureEvent", function() { return MSGestureEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSGraphicsTrust", function() { return MSGraphicsTrust; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSInputMethodContextEventMap", function() { return MSInputMethodContextEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSInputMethodContext", function() { return MSInputMethodContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeyError", function() { return MSMediaKeyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeyMessageEvent", function() { return MSMediaKeyMessageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeyNeededEvent", function() { return MSMediaKeyNeededEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeySession", function() { return MSMediaKeySession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeys", function() { return MSMediaKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSNavigatorDoNotTrack", function() { return MSNavigatorDoNotTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSPointerEvent", function() { return MSPointerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSStream", function() { return MSStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSStreamReaderEventMap", function() { return MSStreamReaderEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSStreamReader", function() { return MSStreamReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDeviceInfo", function() { return MediaDeviceInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDevicesEventMap", function() { return MediaDevicesEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDevices", function() { return MediaDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaElementAudioSourceNode", function() { return MediaElementAudioSourceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaEncryptedEvent", function() { return MediaEncryptedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaError", function() { return MediaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyMessageEvent", function() { return MediaKeyMessageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySession", function() { return MediaKeySession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyStatusMap", function() { return MediaKeyStatusMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySystemAccess", function() { return MediaKeySystemAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeys", function() { return MediaKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaList", function() { return MediaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryList", function() { return MediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSource", function() { return MediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamEventMap", function() { return MediaStreamEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStream", function() { return MediaStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamAudioSourceNode", function() { return MediaStreamAudioSourceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamError", function() { return MediaStreamError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamErrorEvent", function() { return MediaStreamErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamEvent", function() { return MediaStreamEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrackEventMap", function() { return MediaStreamTrackEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrack", function() { return MediaStreamTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrackEvent", function() { return MediaStreamTrackEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageChannel", function() { return MessageChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEvent", function() { return MessageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePortEventMap", function() { return MessagePortEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePort", function() { return MessagePort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeType", function() { return MimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeTypeArray", function() { return MimeTypeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationEvent", function() { return MutationEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserver", function() { return MutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationRecord", function() { return MutationRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedNodeMap", function() { return NamedNodeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorBeacon", function() { return NavigatorBeacon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorConcurrentHardware", function() { return NavigatorConcurrentHardware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorContentUtils", function() { return NavigatorContentUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorID", function() { return NavigatorID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorLanguage", function() { return NavigatorLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorOnLine", function() { return NavigatorOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorStorageUtils", function() { return NavigatorStorageUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorUserMedia", function() { return NavigatorUserMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeFilter", function() { return NodeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeIterator", function() { return NodeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return NodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeListOf", function() { return NodeListOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeSelector", function() { return NodeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationEventMap", function() { return NotificationEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_element_index_uint", function() { return OES_element_index_uint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_standard_derivatives", function() { return OES_standard_derivatives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_float", function() { return OES_texture_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_float_linear", function() { return OES_texture_float_linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_half_float", function() { return OES_texture_half_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_half_float_linear", function() { return OES_texture_half_float_linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_vertex_array_object", function() { return OES_vertex_array_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineAudioCompletionEvent", function() { return OfflineAudioCompletionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineAudioContextEventMap", function() { return OfflineAudioContextEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineAudioContext", function() { return OfflineAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OscillatorNodeEventMap", function() { return OscillatorNodeEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OscillatorNode", function() { return OscillatorNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowEvent", function() { return OverflowEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTransitionEvent", function() { return PageTransitionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PannerNode", function() { return PannerNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentNode", function() { return ParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path2D", function() { return Path2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentAddress", function() { return PaymentAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequestEventMap", function() { return PaymentRequestEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequest", function() { return PaymentRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequestUpdateEvent", function() { return PaymentRequestUpdateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentResponse", function() { return PaymentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfWidgetExternal", function() { return PerfWidgetExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Performance", function() { return Performance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceEntry", function() { return PerformanceEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceMark", function() { return PerformanceMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceMeasure", function() { return PerformanceMeasure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceNavigation", function() { return PerformanceNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceNavigationTiming", function() { return PerformanceNavigationTiming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceResourceTiming", function() { return PerformanceResourceTiming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceTiming", function() { return PerformanceTiming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicWave", function() { return PeriodicWave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRequest", function() { return PermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRequestedEvent", function() { return PermissionRequestedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginArray", function() { return PluginArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEvent", function() { return PointerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopStateEvent", function() { return PopStateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionError", function() { return PositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessingInstruction", function() { return ProcessingInstruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressEvent", function() { return ProgressEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseRejectionEvent", function() { return PromiseRejectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseRejectionEventInit", function() { return PromiseRejectionEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushManager", function() { return PushManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubscription", function() { return PushSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubscriptionOptions", function() { return PushSubscriptionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDTMFToneChangeEvent", function() { return RTCDTMFToneChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsTransportEventMap", function() { return RTCDtlsTransportEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsTransport", function() { return RTCDtlsTransport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsTransportStateChangedEvent", function() { return RTCDtlsTransportStateChangedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtmfSenderEventMap", function() { return RTCDtmfSenderEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtmfSender", function() { return RTCDtmfSender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidate", function() { return RTCIceCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidatePairChangedEvent", function() { return RTCIceCandidatePairChangedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGathererEventMap", function() { return RTCIceGathererEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGatherer", function() { return RTCIceGatherer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGathererEvent", function() { return RTCIceGathererEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransportEventMap", function() { return RTCIceTransportEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransport", function() { return RTCIceTransport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransportStateChangedEvent", function() { return RTCIceTransportStateChangedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnectionEventMap", function() { return RTCPeerConnectionEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnection", function() { return RTCPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnectionIceEvent", function() { return RTCPeerConnectionIceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpReceiverEventMap", function() { return RTCRtpReceiverEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpReceiver", function() { return RTCRtpReceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpSenderEventMap", function() { return RTCRtpSenderEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpSender", function() { return RTCRtpSender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSessionDescription", function() { return RTCSessionDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSrtpSdesTransportEventMap", function() { return RTCSrtpSdesTransportEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSrtpSdesTransport", function() { return RTCSrtpSdesTransport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSsrcConflictEvent", function() { return RTCSsrcConflictEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsProvider", function() { return RTCStatsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomSource", function() { return RandomSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableStream", function() { return ReadableStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableStreamReader", function() { return ReadableStreamReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAElement", function() { return SVGAElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAngle", function() { return SVGAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedAngle", function() { return SVGAnimatedAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedBoolean", function() { return SVGAnimatedBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedEnumeration", function() { return SVGAnimatedEnumeration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedInteger", function() { return SVGAnimatedInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedLength", function() { return SVGAnimatedLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedLengthList", function() { return SVGAnimatedLengthList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedNumber", function() { return SVGAnimatedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedNumberList", function() { return SVGAnimatedNumberList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedPoints", function() { return SVGAnimatedPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedPreserveAspectRatio", function() { return SVGAnimatedPreserveAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedRect", function() { return SVGAnimatedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedString", function() { return SVGAnimatedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedTransformList", function() { return SVGAnimatedTransformList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGCircleElement", function() { return SVGCircleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGClipPathElement", function() { return SVGClipPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGComponentTransferFunctionElement", function() { return SVGComponentTransferFunctionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGDefsElement", function() { return SVGDefsElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGDescElement", function() { return SVGDescElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElementEventMap", function() { return SVGElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElement", function() { return SVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElementInstance", function() { return SVGElementInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElementInstanceList", function() { return SVGElementInstanceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGEllipseElement", function() { return SVGEllipseElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEBlendElement", function() { return SVGFEBlendElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEColorMatrixElement", function() { return SVGFEColorMatrixElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEComponentTransferElement", function() { return SVGFEComponentTransferElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFECompositeElement", function() { return SVGFECompositeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEConvolveMatrixElement", function() { return SVGFEConvolveMatrixElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEDiffuseLightingElement", function() { return SVGFEDiffuseLightingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEDisplacementMapElement", function() { return SVGFEDisplacementMapElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEDistantLightElement", function() { return SVGFEDistantLightElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFloodElement", function() { return SVGFEFloodElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncAElement", function() { return SVGFEFuncAElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncBElement", function() { return SVGFEFuncBElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncGElement", function() { return SVGFEFuncGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncRElement", function() { return SVGFEFuncRElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEGaussianBlurElement", function() { return SVGFEGaussianBlurElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEImageElement", function() { return SVGFEImageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEMergeElement", function() { return SVGFEMergeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEMergeNodeElement", function() { return SVGFEMergeNodeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEMorphologyElement", function() { return SVGFEMorphologyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEOffsetElement", function() { return SVGFEOffsetElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEPointLightElement", function() { return SVGFEPointLightElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFESpecularLightingElement", function() { return SVGFESpecularLightingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFESpotLightElement", function() { return SVGFESpotLightElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFETileElement", function() { return SVGFETileElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFETurbulenceElement", function() { return SVGFETurbulenceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFilterElement", function() { return SVGFilterElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFilterPrimitiveStandardAttributes", function() { return SVGFilterPrimitiveStandardAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFitToViewBox", function() { return SVGFitToViewBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGForeignObjectElement", function() { return SVGForeignObjectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGElement", function() { return SVGGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGradientElement", function() { return SVGGradientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGraphicsElement", function() { return SVGGraphicsElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGImageElement", function() { return SVGImageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLength", function() { return SVGLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLengthList", function() { return SVGLengthList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLineElement", function() { return SVGLineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLinearGradientElement", function() { return SVGLinearGradientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMarkerElement", function() { return SVGMarkerElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMaskElement", function() { return SVGMaskElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMatrix", function() { return SVGMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMetadataElement", function() { return SVGMetadataElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGNumber", function() { return SVGNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGNumberList", function() { return SVGNumberList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathElement", function() { return SVGPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSeg", function() { return SVGPathSeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegArcAbs", function() { return SVGPathSegArcAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegArcRel", function() { return SVGPathSegArcRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegClosePath", function() { return SVGPathSegClosePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicAbs", function() { return SVGPathSegCurvetoCubicAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicRel", function() { return SVGPathSegCurvetoCubicRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicSmoothAbs", function() { return SVGPathSegCurvetoCubicSmoothAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicSmoothRel", function() { return SVGPathSegCurvetoCubicSmoothRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticAbs", function() { return SVGPathSegCurvetoQuadraticAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticRel", function() { return SVGPathSegCurvetoQuadraticRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticSmoothAbs", function() { return SVGPathSegCurvetoQuadraticSmoothAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticSmoothRel", function() { return SVGPathSegCurvetoQuadraticSmoothRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoAbs", function() { return SVGPathSegLinetoAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoHorizontalAbs", function() { return SVGPathSegLinetoHorizontalAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoHorizontalRel", function() { return SVGPathSegLinetoHorizontalRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoRel", function() { return SVGPathSegLinetoRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoVerticalAbs", function() { return SVGPathSegLinetoVerticalAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoVerticalRel", function() { return SVGPathSegLinetoVerticalRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegList", function() { return SVGPathSegList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegMovetoAbs", function() { return SVGPathSegMovetoAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegMovetoRel", function() { return SVGPathSegMovetoRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPatternElement", function() { return SVGPatternElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPoint", function() { return SVGPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPointList", function() { return SVGPointList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPolygonElement", function() { return SVGPolygonElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPolylineElement", function() { return SVGPolylineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPreserveAspectRatio", function() { return SVGPreserveAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRadialGradientElement", function() { return SVGRadialGradientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRect", function() { return SVGRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRectElement", function() { return SVGRectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSVGElementEventMap", function() { return SVGSVGElementEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSVGElement", function() { return SVGSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGScriptElement", function() { return SVGScriptElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStopElement", function() { return SVGStopElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStringList", function() { return SVGStringList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStylable", function() { return SVGStylable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStyleElement", function() { return SVGStyleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSwitchElement", function() { return SVGSwitchElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSymbolElement", function() { return SVGSymbolElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTSpanElement", function() { return SVGTSpanElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTests", function() { return SVGTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextContentElement", function() { return SVGTextContentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextElement", function() { return SVGTextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextPathElement", function() { return SVGTextPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextPositioningElement", function() { return SVGTextPositioningElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTitleElement", function() { return SVGTitleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTransform", function() { return SVGTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTransformList", function() { return SVGTransformList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGURIReference", function() { return SVGURIReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGUnitTypes", function() { return SVGUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGUseElement", function() { return SVGUseElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGViewElement", function() { return SVGViewElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGZoomAndPan", function() { return SVGZoomAndPan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGZoomEvent", function() { return SVGZoomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredential", function() { return ScopedCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredentialInfo", function() { return ScopedCredentialInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenEventMap", function() { return ScreenEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptProcessorNodeEventMap", function() { return ScriptProcessorNodeEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptProcessorNode", function() { return ScriptProcessorNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollIntoViewOptions", function() { return ScrollIntoViewOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollOptions", function() { return ScrollOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToOptions", function() { return ScrollToOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPolicyViolationEvent", function() { return SecurityPolicyViolationEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceUIFrameContext", function() { return ServiceUIFrameContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerEventMap", function() { return ServiceWorkerEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorker", function() { return ServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerContainerEventMap", function() { return ServiceWorkerContainerEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerContainer", function() { return ServiceWorkerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerMessageEvent", function() { return ServiceWorkerMessageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerRegistrationEventMap", function() { return ServiceWorkerRegistrationEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerRegistration", function() { return ServiceWorkerRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowRoot", function() { return ShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowRootInit", function() { return ShadowRootInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceBuffer", function() { return SourceBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceBufferList", function() { return SourceBufferList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisEventMap", function() { return SpeechSynthesisEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesis", function() { return SpeechSynthesis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisEvent", function() { return SpeechSynthesisEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisUtteranceEventMap", function() { return SpeechSynthesisUtteranceEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisUtterance", function() { return SpeechSynthesisUtterance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisVoice", function() { return SpeechSynthesisVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StereoPannerNode", function() { return StereoPannerNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEvent", function() { return StorageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEventInit", function() { return StorageEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleMedia", function() { return StyleMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetList", function() { return StyleSheetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtleCrypto", function() { return SubtleCrypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncManager", function() { return SyncManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoder", function() { return TextDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEncoder", function() { return TextEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEvent", function() { return TextEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMetrics", function() { return TextMetrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackEventMap", function() { return TextTrackEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrack", function() { return TextTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackCueEventMap", function() { return TextTrackCueEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackCue", function() { return TextTrackCue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackCueList", function() { return TextTrackCueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackListEventMap", function() { return TextTrackListEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackList", function() { return TextTrackList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeRanges", function() { return TimeRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEvent", function() { return TouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEventInit", function() { return TouchEventInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchList", function() { return TouchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEvent", function() { return TrackEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionEvent", function() { return TransitionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeWalker", function() { return TreeWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIEvent", function() { return UIEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplay", function() { return VRDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplayCapabilities", function() { return VRDisplayCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplayEvent", function() { return VRDisplayEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VREyeParameters", function() { return VREyeParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRFieldOfView", function() { return VRFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRFrameData", function() { return VRFrameData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRPose", function() { return VRPose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidityState", function() { return ValidityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaybackQuality", function() { return VideoPlaybackQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrack", function() { return VideoTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrackListEventMap", function() { return VideoTrackListEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrackList", function() { return VideoTrackList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_color_buffer_float", function() { return WEBGL_color_buffer_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_compressed_texture_astc", function() { return WEBGL_compressed_texture_astc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_compressed_texture_s3tc", function() { return WEBGL_compressed_texture_s3tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_compressed_texture_s3tc_srgb", function() { return WEBGL_compressed_texture_s3tc_srgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_debug_renderer_info", function() { return WEBGL_debug_renderer_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_debug_shaders", function() { return WEBGL_debug_shaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_depth_texture", function() { return WEBGL_depth_texture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_draw_buffers", function() { return WEBGL_draw_buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_lose_context", function() { return WEBGL_lose_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveShaperNode", function() { return WaveShaperNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthentication", function() { return WebAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthnAssertion", function() { return WebAuthnAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLActiveInfo", function() { return WebGLActiveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLBuffer", function() { return WebGLBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLContextEvent", function() { return WebGLContextEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLFramebuffer", function() { return WebGLFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLObject", function() { return WebGLObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLProgram", function() { return WebGLProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderbuffer", function() { return WebGLRenderbuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderingContext", function() { return WebGLRenderingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLShader", function() { return WebGLShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLShaderPrecisionFormat", function() { return WebGLShaderPrecisionFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLTexture", function() { return WebGLTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLUniformLocation", function() { return WebGLUniformLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLVertexArrayObjectOES", function() { return WebGLVertexArrayObjectOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitCSSMatrix", function() { return WebKitCSSMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitDirectoryEntry", function() { return WebKitDirectoryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitDirectoryReader", function() { return WebKitDirectoryReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitEntry", function() { return WebKitEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitFileEntry", function() { return WebKitFileEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitFileSystem", function() { return WebKitFileSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitPoint", function() { return WebKitPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketEventMap", function() { return WebSocketEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocket", function() { return WebSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelEvent", function() { return WheelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEventMap", function() { return WindowEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowBase64", function() { return WindowBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowConsole", function() { return WindowConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEventHandlersEventMap", function() { return WindowEventHandlersEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEventHandlers", function() { return WindowEventHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowLocalStorage", function() { return WindowLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowSessionStorage", function() { return WindowSessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowTimers", function() { return WindowTimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowTimersExtension", function() { return WindowTimersExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerEventMap", function() { return WorkerEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStream", function() { return WritableStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamDefaultController", function() { return WritableStreamDefaultController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamDefaultWriter", function() { return WritableStreamDefaultWriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLDocument", function() { return XMLDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestEventMap", function() { return XMLHttpRequestEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequest", function() { return XMLHttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestEventTargetEventMap", function() { return XMLHttpRequestEventTargetEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestEventTarget", function() { return XMLHttpRequestEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestUpload", function() { return XMLHttpRequestUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLSerializer", function() { return XMLSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathEvaluator", function() { return XPathEvaluator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathExpression", function() { return XPathExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathNSResolver", function() { return XPathNSResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathResult", function() { return XPathResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSLTProcessor", function() { return XSLTProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitRTCPeerConnection", function() { return webkitRTCPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerOrEventListenerObject", function() { return EventListenerOrEventListenerObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeErrorCallback", function() { return DecodeErrorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeSuccessCallback", function() { return DecodeSuccessCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEventHandler", function() { return ErrorEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandlerNonNull", function() { return EventHandlerNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEachCallback", function() { return ForEachCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameRequestCallback", function() { return FrameRequestCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionStringCallback", function() { return FunctionStringCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverCallback", function() { return IntersectionObserverCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSLaunchUriCallback", function() { return MSLaunchUriCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryListListener", function() { return MediaQueryListListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationCallback", function() { return MutationCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorUserMediaErrorCallback", function() { return NavigatorUserMediaErrorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorUserMediaSuccessCallback", function() { return NavigatorUserMediaSuccessCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPermissionCallback", function() { return NotificationPermissionCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionCallback", function() { return PositionCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionErrorCallback", function() { return PositionErrorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnectionErrorCallback", function() { return RTCPeerConnectionErrorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSessionDescriptionCallback", function() { return RTCSessionDescriptionCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsCallback", function() { return RTCStatsCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoidFunction", function() { return VoidFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamChunkCallback", function() { return WritableStreamChunkCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamDefaultControllerCallback", function() { return WritableStreamDefaultControllerCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamErrorCallback", function() { return WritableStreamErrorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLElementTagNameMap", function() { return HTMLElementTagNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElementTagNameMap", function() { return SVGElementTagNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTagNameMap", function() { return ElementTagNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationCache", function() { return applicationCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientInformation", function() { return clientInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closed", function() { return closed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crypto", function() { return crypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElements", function() { return customElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStatus", function() { return defaultStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicePixelRatio", function() { return devicePixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doNotTrack", function() { return doNotTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "external", function() { return external; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameElement", function() { return frameElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frames", function() { return frames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerHeight", function() { return innerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerWidth", function() { return innerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSecureContext", function() { return isSecureContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationbar", function() { return locationbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menubar", function() { return menubar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msContentScript", function() { return msContentScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msCredentials", function() { return msCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offscreenBuffering", function() { return offscreenBuffering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onabort", function() { return onabort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onafterprint", function() { return onafterprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onbeforeprint", function() { return onbeforeprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onbeforeunload", function() { return onbeforeunload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onblur", function() { return onblur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncanplay", function() { return oncanplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncanplaythrough", function() { return oncanplaythrough; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onchange", function() { return onchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onclick", function() { return onclick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncompassneedscalibration", function() { return oncompassneedscalibration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncontextmenu", function() { return oncontextmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondblclick", function() { return ondblclick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondevicelight", function() { return ondevicelight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondevicemotion", function() { return ondevicemotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondeviceorientation", function() { return ondeviceorientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondrag", function() { return ondrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragend", function() { return ondragend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragenter", function() { return ondragenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragleave", function() { return ondragleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragover", function() { return ondragover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragstart", function() { return ondragstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondrop", function() { return ondrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondurationchange", function() { return ondurationchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onemptied", function() { return onemptied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onended", function() { return onended; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onerror", function() { return onerror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onfocus", function() { return onfocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onhashchange", function() { return onhashchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oninput", function() { return oninput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oninvalid", function() { return oninvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onkeydown", function() { return onkeydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onkeypress", function() { return onkeypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onkeyup", function() { return onkeyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onload", function() { return onload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onloadeddata", function() { return onloadeddata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onloadedmetadata", function() { return onloadedmetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onloadstart", function() { return onloadstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmessage", function() { return onmessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmousedown", function() { return onmousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseenter", function() { return onmouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseleave", function() { return onmouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmousemove", function() { return onmousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseout", function() { return onmouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseover", function() { return onmouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseup", function() { return onmouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmousewheel", function() { return onmousewheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturechange", function() { return onmsgesturechange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturedoubletap", function() { return onmsgesturedoubletap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgestureend", function() { return onmsgestureend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturehold", function() { return onmsgesturehold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturestart", function() { return onmsgesturestart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturetap", function() { return onmsgesturetap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsinertiastart", function() { return onmsinertiastart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointercancel", function() { return onmspointercancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerdown", function() { return onmspointerdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerenter", function() { return onmspointerenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerleave", function() { return onmspointerleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointermove", function() { return onmspointermove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerout", function() { return onmspointerout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerover", function() { return onmspointerover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerup", function() { return onmspointerup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffline", function() { return onoffline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ononline", function() { return ononline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onorientationchange", function() { return onorientationchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpagehide", function() { return onpagehide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpageshow", function() { return onpageshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpause", function() { return onpause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onplay", function() { return onplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onplaying", function() { return onplaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpopstate", function() { return onpopstate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onprogress", function() { return onprogress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onratechange", function() { return onratechange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onreadystatechange", function() { return onreadystatechange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onreset", function() { return onreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onresize", function() { return onresize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onscroll", function() { return onscroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onseeked", function() { return onseeked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onseeking", function() { return onseeking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onselect", function() { return onselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onstalled", function() { return onstalled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onstorage", function() { return onstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onsubmit", function() { return onsubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onsuspend", function() { return onsuspend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontimeupdate", function() { return ontimeupdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchcancel", function() { return ontouchcancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchend", function() { return ontouchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchmove", function() { return ontouchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchstart", function() { return ontouchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onunload", function() { return onunload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvolumechange", function() { return onvolumechange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayactivate", function() { return onvrdisplayactivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayblur", function() { return onvrdisplayblur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayconnect", function() { return onvrdisplayconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaydeactivate", function() { return onvrdisplaydeactivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaydisconnect", function() { return onvrdisplaydisconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayfocus", function() { return onvrdisplayfocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaypointerrestricted", function() { return onvrdisplaypointerrestricted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaypointerunrestricted", function() { return onvrdisplaypointerunrestricted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaypresentchange", function() { return onvrdisplaypresentchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onwaiting", function() { return onwaiting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opener", function() { return opener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orientation", function() { return orientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageXOffset", function() { return pageXOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageYOffset", function() { return pageYOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performance", function() { return performance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personalbar", function() { return personalbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen", function() { return screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenLeft", function() { return screenLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenTop", function() { return screenTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenX", function() { return screenX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenY", function() { return screenY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollX", function() { return scrollX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollY", function() { return scrollY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbars", function() { return scrollbars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speechSynthesis", function() { return speechSynthesis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusbar", function() { return statusbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMedia", function() { return styleMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbar", function() { return toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureEvents", function() { return captureEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageBitmap", function() { return createImageBitmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departFocus", function() { return departFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchedCSSRules", function() { return getMatchedCSSRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchMedia", function() { return matchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBy", function() { return moveBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTo", function() { return moveTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msWriteProfilerMark", function() { return msWriteProfilerMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMessage", function() { return postMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseEvents", function() { return releaseEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeBy", function() { return resizeBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeTo", function() { return resizeTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollBy", function() { return scrollBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitCancelAnimationFrame", function() { return webkitCancelAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitConvertPointFromNodeToPage", function() { return webkitConvertPointFromNodeToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitConvertPointFromPageToNode", function() { return webkitConvertPointFromPageToNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitRequestAnimationFrame", function() { return webkitRequestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return dispatchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInterval", function() { return clearInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTimeout", function() { return clearTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInterval", function() { return setInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return setTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorage", function() { return sessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorage", function() { return localStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointercancel", function() { return onpointercancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerdown", function() { return onpointerdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerenter", function() { return onpointerenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerleave", function() { return onpointerleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointermove", function() { return onpointermove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerout", function() { return onpointerout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerover", function() { return onpointerover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerup", function() { return onpointerup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onwheel", function() { return onwheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexedDB", function() { return indexedDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atob", function() { return atob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoa", function() { return btoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBehavior", function() { return ScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollLogicalPosition", function() { return ScrollLogicalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseWheelEvent", function() { return MouseWheelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollRestoration", function() { return ScrollRestoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataEntryValue", function() { return FormDataEntryValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertPosition", function() { return InsertPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersInit", function() { return HeadersInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientationLockType", function() { return OrientationLockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBValidKey", function() { return IDBValidKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmIdentifier", function() { return AlgorithmIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationRecordType", function() { return MutationRecordType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AAGUID", function() { return AAGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyInit", function() { return BodyInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteString", function() { return ByteString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainBoolean", function() { return ConstrainBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainDOMString", function() { return ConstrainDOMString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainDouble", function() { return ConstrainDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainLong", function() { return ConstrainLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoOperationData", function() { return CryptoOperationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLbitfield", function() { return GLbitfield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLboolean", function() { return GLboolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLbyte", function() { return GLbyte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLclampf", function() { return GLclampf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLenum", function() { return GLenum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLfloat", function() { return GLfloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLint", function() { return GLint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLintptr", function() { return GLintptr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLshort", function() { return GLshort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLsizei", function() { return GLsizei; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLsizeiptr", function() { return GLsizeiptr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLubyte", function() { return GLubyte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLuint", function() { return GLuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLushort", function() { return GLushort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBKeyPath", function() { return IDBKeyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSInboundPayload", function() { return MSInboundPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSLocalClientEvent", function() { return MSLocalClientEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSOutboundPayload", function() { return MSOutboundPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGatherCandidate", function() { return RTCIceGatherCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCTransport", function() { return RTCTransport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInfo", function() { return RequestInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USVString", function() { return USVString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payloadtype", function() { return payloadtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferSource", function() { return BufferSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTypes", function() { return ClientTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppendMode", function() { return AppendMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContextLatencyCategory", function() { return AudioContextLatencyCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContextState", function() { return AudioContextState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryType", function() { return BinaryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiquadFilterType", function() { return BiquadFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanPlayTypeResult", function() { return CanPlayTypeResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasFillRule", function() { return CanvasFillRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelCountMode", function() { return ChannelCountMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelInterpretation", function() { return ChannelInterpretation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayCaptureSurfaceType", function() { return DisplayCaptureSurfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceModelType", function() { return DistanceModelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentReadyState", function() { return DocumentReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOfStreamError", function() { return EndOfStreamError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandGranularity", function() { return ExpandGranularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadHand", function() { return GamepadHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadHapticActuatorType", function() { return GamepadHapticActuatorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadInputEmulationType", function() { return GamepadInputEmulationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadMappingType", function() { return GamepadMappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBCursorDirection", function() { return IDBCursorDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBRequestReadyState", function() { return IDBRequestReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBTransactionMode", function() { return IDBTransactionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyFormat", function() { return KeyFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyType", function() { return KeyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyUsage", function() { return KeyUsage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeningState", function() { return ListeningState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSCredentialType", function() { return MSCredentialType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSIceAddrType", function() { return MSIceAddrType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSIceType", function() { return MSIceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSStatsType", function() { return MSStatsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSTransportType", function() { return MSTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSWebViewPermissionState", function() { return MSWebViewPermissionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSWebViewPermissionType", function() { return MSWebViewPermissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDeviceKind", function() { return MediaDeviceKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyMessageType", function() { return MediaKeyMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySessionType", function() { return MediaKeySessionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyStatus", function() { return MediaKeyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeysRequirement", function() { return MediaKeysRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrackState", function() { return MediaStreamTrackState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationReason", function() { return NavigationReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationType", function() { return NavigationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDirection", function() { return NotificationDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPermission", function() { return NotificationPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OscillatorType", function() { return OscillatorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverSampleType", function() { return OverSampleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanningModelType", function() { return PanningModelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComplete", function() { return PaymentComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentShippingType", function() { return PaymentShippingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushEncryptionKeyName", function() { return PushEncryptionKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPermissionState", function() { return PushPermissionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCBundlePolicy", function() { return RTCBundlePolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDegradationPreference", function() { return RTCDegradationPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsRole", function() { return RTCDtlsRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsTransportState", function() { return RTCDtlsTransportState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidateType", function() { return RTCIceCandidateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceComponent", function() { return RTCIceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceConnectionState", function() { return RTCIceConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGatherPolicy", function() { return RTCIceGatherPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGathererState", function() { return RTCIceGathererState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGatheringState", function() { return RTCIceGatheringState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceProtocol", function() { return RTCIceProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceRole", function() { return RTCIceRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTcpCandidateType", function() { return RTCIceTcpCandidateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransportPolicy", function() { return RTCIceTransportPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransportState", function() { return RTCIceTransportState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSdpType", function() { return RTCSdpType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSignalingState", function() { return RTCSignalingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsIceCandidatePairState", function() { return RTCStatsIceCandidatePairState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsIceCandidateType", function() { return RTCStatsIceCandidateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsType", function() { return RTCStatsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferrerPolicy", function() { return ReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCache", function() { return RequestCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentials", function() { return RequestCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDestination", function() { return RequestDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMode", function() { return RequestMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRedirect", function() { return RequestRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredentialType", function() { return ScopedCredentialType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerState", function() { return ServiceWorkerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackKind", function() { return TextTrackKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackMode", function() { return TextTrackMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transport", function() { return Transport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplayEventReason", function() { return VRDisplayEventReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VREye", function() { return VREye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoFacingModeEnum", function() { return VideoFacingModeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityState", function() { return VisibilityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestResponseType", function() { return XMLHttpRequestResponseType; });



/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Adt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adt", function() { return Adt; });
/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _Obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Obj.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js");



;
/*
 * Generates a church encoded ADT (https://en.wikipedia.org/wiki/Church_encoding)
 * For syntax and use, look at the test code.
 */
var generate = function (cases) {
    // validation
    if (!_Type__WEBPACK_IMPORTED_MODULE_2__["isArray"](cases)) {
        throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
        throw new Error('there must be at least one case');
    }
    var constructors = [];
    // adt is mutated to add the individual cases
    var adt = {};
    _Arr__WEBPACK_IMPORTED_MODULE_0__["each"](cases, function (acase, count) {
        var keys = _Obj__WEBPACK_IMPORTED_MODULE_1__["keys"](acase);
        // validation
        if (keys.length !== 1) {
            throw new Error('one and only one name per case');
        }
        var key = keys[0];
        var value = acase[key];
        // validation
        if (adt[key] !== undefined) {
            throw new Error('duplicate key detected:' + key);
        }
        else if (key === 'cata') {
            throw new Error('cannot have a case named cata (sorry)');
        }
        else if (!_Type__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
            // this implicitly checks if acase is an object
            throw new Error('case arguments must be an array');
        }
        constructors.push(key);
        //
        // constructor for key
        //
        adt[key] = function () {
            var argLength = arguments.length;
            // validation
            if (argLength !== value.length) {
                throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
            }
            // Don't use array slice(arguments), makes the whole function unoptimisable on Chrome
            var args = new Array(argLength);
            for (var i = 0; i < args.length; i++)
                args[i] = arguments[i];
            var match = function (branches) {
                var branchKeys = _Obj__WEBPACK_IMPORTED_MODULE_1__["keys"](branches);
                if (constructors.length !== branchKeys.length) {
                    throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
                }
                var allReqd = _Arr__WEBPACK_IMPORTED_MODULE_0__["forall"](constructors, function (reqKey) {
                    return _Arr__WEBPACK_IMPORTED_MODULE_0__["contains"](branchKeys, reqKey);
                });
                if (!allReqd)
                    throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
                return branches[key].apply(null, args);
            };
            //
            // the fold function for key
            //
            return {
                fold: function ( /* arguments */) {
                    // runtime validation
                    if (arguments.length !== cases.length) {
                        throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
                    }
                    var target = arguments[count];
                    return target.apply(null, args);
                },
                match: match,
                // NOTE: Only for debugging.
                log: function (label) {
                    console.log(label, {
                        constructors: constructors,
                        constructor: key,
                        params: args
                    });
                }
            };
        };
    });
    return adt;
};
var Adt = {
    generate: generate
};
//# sourceMappingURL=Adt.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachr", function() { return eachr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return foldr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return foldl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forall", function() { return forall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToObject", function() { return mapToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js");


// Use the native Array.indexOf if it is available (IE9+) otherwise fall back to manual iteration
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
var rawIndexOf = (function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) { return pIndexOf.call(xs, x); };
    var slowIndex = function (xs, x) { return slowIndexOf(xs, x); };
    return pIndexOf === undefined ? slowIndex : fastIndex;
})();
var indexOf = function (xs, x) {
    // The rawIndexOf method does not wrap up in an option. This is for performance reasons.
    var r = rawIndexOf(xs, x);
    return r === -1 ? _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none() : _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(r);
};
var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
};
// Using findIndex is likely less optimal in Chrome (dynamic return type instead of bool)
// but if we need that micro-optimisation we can inline it later.
var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
};
var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
        r.push(f(i));
    }
    return r;
};
// It's a total micro optimisation, but these do make some difference.
// Particularly for browsers other than Chrome.
// - length caching
// http://jsperf.com/browser-diet-jquery-each-vs-for-loop/69
// - not using push
// http://jsperf.com/array-direct-assignment-vs-push/2
var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
        var s = array.slice(i, i + size);
        r.push(s);
    }
    return r;
};
var map = function (xs, f) {
    // pre-allocating array size when it's guaranteed to be known
    // http://jsperf.com/push-allocated-vs-dynamic/22
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
    }
    return r;
};
// Unwound implementing other functions in terms of each.
// The code size is roughly the same, and it should allow for better optimisation.
// const each = function<T, U>(xs: T[], f: (x: T, i?: number, xs?: T[]) => void): void {
var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
    }
};
var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
        var x = xs[i];
        f(x, i, xs);
    }
};
var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var arr = pred(x, i, xs) ? pass : fail;
        arr.push(x);
    }
    return { pass: pass, fail: fail };
};
var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
            r.push(x);
        }
    }
    return r;
};
/*
 * Groups an array into contiguous arrays of like elements. Whether an element is like or not depends on f.
 *
 * f is a function that derives a value from an element - e.g. true or false, or a string.
 * Elements are like if this function generates the same value for them (according to ===).
 *
 *
 * Order of the elements is preserved. Arr.flatten() on the result will return the original list, as with Haskell groupBy function.
 *  For a good explanation, see the group function (which is a special case of groupBy)
 *  http://hackage.haskell.org/package/base-4.7.0.0/docs/Data-List.html#v:group
 */
var groupBy = function (xs, f) {
    if (xs.length === 0) {
        return [];
    }
    else {
        var wasType = f(xs[0]); // initial case for matching
        var r = [];
        var group = [];
        for (var i = 0, len = xs.length; i < len; i++) {
            var x = xs[i];
            var type = f(x);
            if (type !== wasType) {
                r.push(group);
                group = [];
            }
            wasType = type;
            group.push(x);
        }
        if (group.length !== 0) {
            r.push(group);
        }
        return r;
    }
};
var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
        acc = f(acc, x);
    });
    return acc;
};
var foldl = function (xs, f, acc) {
    each(xs, function (x) {
        acc = f(acc, x);
    });
    return acc;
};
var find = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
            return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(x);
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none();
};
var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
            return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(i);
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none();
};
var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
};
var push = Array.prototype.push;
var flatten = function (xs) {
    // Note, this is possible because push supports multiple arguments:
    // http://jsperf.com/concat-push/6
    // Note that in the past, concat() would silently work (very slowly) for array-like objects.
    // With this change it will throw an error.
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
        // Ensure that each value is an array itself
        if (!Array.prototype.isPrototypeOf(xs[i]))
            throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
        push.apply(r, xs[i]);
    }
    return r;
};
var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
};
var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
        var x = xs[i];
        if (pred(x, i, xs) !== true) {
            return false;
        }
    }
    return true;
};
var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) { return x === a2[i]; });
};
var slice = Array.prototype.slice;
var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
};
var difference = function (a1, a2) {
    return filter(a1, function (x) { return !contains(a2, x); });
};
var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        r[String(x)] = f(x, i);
    }
    return r;
};
var pure = function (x) { return [x]; };
var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
};
var head = function (xs) { return xs.length === 0 ? _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none() : _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(xs[0]); };
var last = function (xs) { return xs.length === 0 ? _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none() : _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(xs[xs.length - 1]); };
var from = _Type__WEBPACK_IMPORTED_MODULE_1__["isFunction"](Array.from) ? Array.from : function (x) { return slice.call(x); };
//# sourceMappingURL=Arr.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Cell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = function (initial) {
    var value = initial;
    var get = function () {
        return value;
    };
    var set = function (v) {
        value = v;
    };
    var clone = function () {
        return Cell(get());
    };
    return {
        get: get,
        set: set,
        clone: clone
    };
};
//# sourceMappingURL=Cell.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Contracts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactly", function() { return exactly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensure", function() { return ensure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureWith", function() { return ensureWith; });
/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _Fun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js");
/* harmony import */ var _Obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Obj.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js");
/* harmony import */ var _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/util/BagUtils.js");





;
// Ensure that the object has all required fields. They must be functions.
var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
        validate: _Type__WEBPACK_IMPORTED_MODULE_3__["isFunction"],
        label: 'function'
    });
};
// Ensure that the object has all required fields. They must satisy predicates.
var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
        throw new Error('You must specify at least one required field.');
    _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["validateStrArr"]('required', required);
    _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["checkDupes"](required);
    return function (obj) {
        var keys = _Obj__WEBPACK_IMPORTED_MODULE_2__["keys"](obj);
        // Ensure all required keys are present.
        var allReqd = _Arr__WEBPACK_IMPORTED_MODULE_0__["forall"](required, function (req) {
            return _Arr__WEBPACK_IMPORTED_MODULE_0__["contains"](keys, req);
        });
        if (!allReqd)
            _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["reqMessage"](required, keys);
        handleUnsupported(required, keys);
        var invalidKeys = _Arr__WEBPACK_IMPORTED_MODULE_0__["filter"](required, function (key) {
            return !pred.validate(obj[key], key);
        });
        if (invalidKeys.length > 0)
            _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["invalidTypeMessage"](invalidKeys, pred.label);
        return obj;
    };
};
var handleExact = function (required, keys) {
    var unsupported = _Arr__WEBPACK_IMPORTED_MODULE_0__["filter"](keys, function (key) {
        return !_Arr__WEBPACK_IMPORTED_MODULE_0__["contains"](required, key);
    });
    if (unsupported.length > 0)
        _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["unsuppMessage"](unsupported);
};
var allowExtra = _Fun__WEBPACK_IMPORTED_MODULE_1__["noop"];
var exactly = function (required) { return base(handleExact, required); };
var ensure = function (required) { return base(allowExtra, required); };
var ensureWith = function (required, condition) { return baseWith(allowExtra, required, condition); };
//# sourceMappingURL=Contracts.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noarg", function() { return noarg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripleEquals", function() { return tripleEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "die", function() { return die; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
var noop = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
var noarg = function (f) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return f();
    };
};
var compose = function (fa, fb) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fa(fb.apply(null, args));
    };
};
var constant = function (value) {
    return function () {
        return value;
    };
};
var identity = function (x) {
    return x;
};
var tripleEquals = function (a, b) {
    return a === b;
};
function curry(fn) {
    var initialArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        initialArgs[_i - 1] = arguments[_i];
    }
    return function () {
        var restArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            restArgs[_i] = arguments[_i];
        }
        var all = initialArgs.concat(restArgs);
        return fn.apply(null, all);
    };
}
;
var not = function (f) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !f.apply(null, args);
    };
};
var die = function (msg) {
    return function () {
        throw new Error(msg);
    };
};
var apply = function (f) {
    return f();
};
var call = function (f) {
    f();
};
var never = constant(false);
var always = constant(true);

//# sourceMappingURL=Fun.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Future.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Future", function() { return Future; });
/* harmony import */ var _LazyValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/LazyValue.js");
/* harmony import */ var _async_Bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/async/Bounce.js");


;
var nu = function (baseFn) {
    var get = function (callback) {
        baseFn(_async_Bounce__WEBPACK_IMPORTED_MODULE_1__["bounce"](callback));
    };
    /** map :: this Future a -> (a -> b) -> Future b */
    var map = function (fab) {
        return nu(function (callback) {
            get(function (a) {
                var value = fab(a);
                callback(value);
            });
        });
    };
    /** bind :: this Future a -> (a -> Future b) -> Future b */
    var bind = function (aFutureB) {
        return nu(function (callback) {
            get(function (a) {
                aFutureB(a).get(callback);
            });
        });
    };
    /** anonBind :: this Future a -> Future b -> Future b
     *  Returns a future, which evaluates the first future, ignores the result, then evaluates the second.
     */
    var anonBind = function (futureB) {
        return nu(function (callback) {
            get(function (a) {
                futureB.get(callback);
            });
        });
    };
    var toLazy = function () {
        return _LazyValue__WEBPACK_IMPORTED_MODULE_0__["LazyValue"].nu(get);
    };
    var toCached = function () {
        var cache = null;
        return nu(function (callback) {
            if (cache === null) {
                cache = toLazy();
            }
            cache.get(callback);
        });
    };
    return {
        map: map,
        bind: bind,
        anonBind: anonBind,
        toLazy: toLazy,
        toCached: toCached,
        get: get
    };
};
/** a -> Future a */
var pure = function (a) {
    return nu(function (callback) {
        callback(a);
    });
};
var Future = {
    nu: nu,
    pure: pure
};
//# sourceMappingURL=Future.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/FutureResult.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureResult", function() { return FutureResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Future__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Future.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Result.js");



var wrap = function (delegate) {
    var toCached = function () {
        return wrap(delegate.toCached());
    };
    var bindFuture = function (f) {
        return wrap(delegate.bind(function (resA) { return resA.fold(function (err) { return (_Future__WEBPACK_IMPORTED_MODULE_1__["Future"].pure(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].error(err))); }, function (a) { return f(a); }); }));
    };
    var bindResult = function (f) {
        return wrap(delegate.map(function (resA) { return resA.bind(f); }));
    };
    var mapResult = function (f) {
        return wrap(delegate.map(function (resA) { return resA.map(f); }));
    };
    var mapError = function (f) {
        return wrap(delegate.map(function (resA) { return resA.mapError(f); }));
    };
    var foldResult = function (whenError, whenValue) {
        return delegate.map(function (res) { return res.fold(whenError, whenValue); });
    };
    var withTimeout = function (timeout, errorThunk) {
        return wrap(_Future__WEBPACK_IMPORTED_MODULE_1__["Future"].nu(function (callback) {
            var timedOut = false;
            var timer = window.setTimeout(function () {
                timedOut = true;
                callback(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].error(errorThunk()));
            }, timeout);
            delegate.get(function (result) {
                if (!timedOut) {
                    window.clearTimeout(timer);
                    callback(result);
                }
            });
        }));
    };
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, delegate, { toCached: toCached,
        bindFuture: bindFuture,
        bindResult: bindResult,
        mapResult: mapResult,
        mapError: mapError,
        foldResult: foldResult,
        withTimeout: withTimeout });
};
var nu = function (worker) {
    return wrap(_Future__WEBPACK_IMPORTED_MODULE_1__["Future"].nu(worker));
};
var value = function (value) {
    return wrap(_Future__WEBPACK_IMPORTED_MODULE_1__["Future"].pure(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].value(value)));
};
var error = function (error) {
    return wrap(_Future__WEBPACK_IMPORTED_MODULE_1__["Future"].pure(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].error(error)));
};
var fromResult = function (result) {
    return wrap(_Future__WEBPACK_IMPORTED_MODULE_1__["Future"].pure(result));
};
var fromFuture = function (future) {
    return wrap(future.map(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].value));
};
var fromPromise = function (promise) {
    return nu(function (completer) {
        promise.then(function (value) {
            completer(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].value(value));
        }, function (error) {
            completer(_Result__WEBPACK_IMPORTED_MODULE_2__["Result"].error(error));
        });
    });
};
var FutureResult = {
    nu: nu,
    wrap: wrap,
    pure: value,
    value: value,
    error: error,
    fromResult: fromResult,
    fromFuture: fromFuture,
    fromPromise: fromPromise
};
//# sourceMappingURL=FutureResult.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Futures.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "par", function() { return par; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapM", function() { return mapM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _Future__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Future.js");
/* harmony import */ var _async_AsyncValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/async/AsyncValues.js");



/** par :: [Future a] -> Future [a] */
var par = function (futures) {
    return _async_AsyncValues__WEBPACK_IMPORTED_MODULE_2__["par"](futures, _Future__WEBPACK_IMPORTED_MODULE_1__["Future"].nu);
};
/** mapM :: [a] -> (a -> Future b) -> Future [b] */
var mapM = function (array, fn) {
    var futures = _Arr__WEBPACK_IMPORTED_MODULE_0__["map"](array, fn);
    return par(futures);
};
/** Kleisli composition of two functions: a -> Future b.
 *  Note the order of arguments: g is invoked first, then the result passed to f.
 *  This is in line with f . g = \x -> f (g a)
 *
 *  compose :: ((b -> Future c), (a -> Future b)) -> a -> Future c
 */
var compose = function (f, g) {
    return function (a) {
        return g(a).bind(f);
    };
};
//# sourceMappingURL=Futures.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
// Use window object as the global if it's available since CSP will block script evals
var Global = typeof window !== 'undefined' ? window : Function('return this;')();
//# sourceMappingURL=Global.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Id.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/**
 * Generate a unique identifier.
 *
 * The unique portion of the identifier only contains an underscore
 * and digits, so that it may safely be used within HTML attributes.
 *
 * The chance of generating a non-unique identifier has been minimized
 * by combining the current time, a random number and a one-up counter.
 *
 * generate :: String -> String
 */
var unique = 0;
var generate = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
//# sourceMappingURL=Id.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Jam.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersperseThunk", function() { return intersperseThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersperse", function() { return intersperse; });
/** intersperseThunk :: ([a], (_ -> a)) -> [a] */
var intersperseThunk = function (array, delimiterThunk) {
    if (array === undefined)
        throw new Error('Cannot intersperse undefined');
    if (array.length <= 1)
        return array;
    var r = [];
    r.push(array[0]);
    for (var i = 1; i < array.length; i++) {
        r.push(delimiterThunk());
        r.push(array[i]);
    }
    return r;
};
/** intersperse :: ([a], a) -> [a] */
var intersperse = function (array, delimiter) {
    var thunk = function () {
        return delimiter;
    };
    return intersperseThunk(array, thunk);
};
//# sourceMappingURL=Jam.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/LazyValue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyValue", function() { return LazyValue; });
/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");


var nu = function (baseFn) {
    var data = _Option__WEBPACK_IMPORTED_MODULE_1__["Option"].none();
    var callbacks = [];
    /** map :: this LazyValue a -> (a -> b) -> LazyValue b */
    var map = function (f) {
        return nu(function (nCallback) {
            get(function (data) {
                nCallback(f(data));
            });
        });
    };
    var get = function (nCallback) {
        if (isReady())
            call(nCallback);
        else
            callbacks.push(nCallback);
    };
    var set = function (x) {
        data = _Option__WEBPACK_IMPORTED_MODULE_1__["Option"].some(x);
        run(callbacks);
        callbacks = [];
    };
    var isReady = function () {
        return data.isSome();
    };
    var run = function (cbs) {
        _Arr__WEBPACK_IMPORTED_MODULE_0__["each"](cbs, call);
    };
    var call = function (cb) {
        data.each(function (x) {
            setTimeout(function () {
                cb(x);
            }, 0);
        });
    };
    // Lazy values cache the value and kick off immediately
    baseFn(set);
    return {
        get: get,
        map: map,
        isReady: isReady
    };
};
var pure = function (a) {
    return nu(function (callback) {
        callback(a);
    });
};
var LazyValue = {
    nu: nu,
    pure: pure
};
//# sourceMappingURL=LazyValue.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/LazyValues.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "par", function() { return par; });
/* harmony import */ var _LazyValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/LazyValue.js");
/* harmony import */ var _async_AsyncValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/async/AsyncValues.js");


/** par :: [LazyValue a] -> LazyValue [a] */
var par = function (lazyValues) {
    return _async_AsyncValues__WEBPACK_IMPORTED_MODULE_1__["par"](lazyValues, _LazyValue__WEBPACK_IMPORTED_MODULE_0__["LazyValue"].nu);
};
//# sourceMappingURL=LazyValues.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Adt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Adt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adt", function() { return _Adt__WEBPACK_IMPORTED_MODULE_0__["Adt"]; });

/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Arr", function() { return _Arr__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Cell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"]; });

/* harmony import */ var _Contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Contracts.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Contracts", function() { return _Contracts__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _Fun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Fun", function() { return _Fun__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _Future__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Future.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Future", function() { return _Future__WEBPACK_IMPORTED_MODULE_5__["Future"]; });

/* harmony import */ var _FutureResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/FutureResult.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FutureResult", function() { return _FutureResult__WEBPACK_IMPORTED_MODULE_6__["FutureResult"]; });

/* harmony import */ var _Futures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Futures.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Futures", function() { return _Futures__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return _Global__WEBPACK_IMPORTED_MODULE_8__["Global"]; });

/* harmony import */ var _Id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Id.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Id", function() { return _Id__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _Jam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Jam.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Jam", function() { return _Jam__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var _LazyValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/LazyValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyValue", function() { return _LazyValue__WEBPACK_IMPORTED_MODULE_11__["LazyValue"]; });

/* harmony import */ var _LazyValues__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/LazyValues.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LazyValues", function() { return _LazyValues__WEBPACK_IMPORTED_MODULE_12__; });
/* harmony import */ var _Merger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Merger.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Merger", function() { return _Merger__WEBPACK_IMPORTED_MODULE_13__; });
/* harmony import */ var _Namespace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Namespace.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Namespace", function() { return _Namespace__WEBPACK_IMPORTED_MODULE_14__; });
/* harmony import */ var _Obj__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Obj.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Obj", function() { return _Obj__WEBPACK_IMPORTED_MODULE_15__; });
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_16__["Option"]; });

/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Options.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return _Options__WEBPACK_IMPORTED_MODULE_17__; });
/* harmony import */ var _Resolve__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Resolve.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Resolve", function() { return _Resolve__WEBPACK_IMPORTED_MODULE_18__; });
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _Result__WEBPACK_IMPORTED_MODULE_19__["Result"]; });

/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Results.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Results", function() { return _Results__WEBPACK_IMPORTED_MODULE_20__; });
/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Singleton.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return _Singleton__WEBPACK_IMPORTED_MODULE_21__; });
/* harmony import */ var _StringMatch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/StringMatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringMatch", function() { return _StringMatch__WEBPACK_IMPORTED_MODULE_22__["StringMatch"]; });

/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Strings.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Strings", function() { return _Strings__WEBPACK_IMPORTED_MODULE_23__; });
/* harmony import */ var _Struct__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Struct.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Struct", function() { return _Struct__WEBPACK_IMPORTED_MODULE_24__; });
/* harmony import */ var _Throttler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Throttler.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Throttler", function() { return _Throttler__WEBPACK_IMPORTED_MODULE_25__; });
/* harmony import */ var _Thunk__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Thunk.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Thunk", function() { return _Thunk__WEBPACK_IMPORTED_MODULE_26__; });
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _Type__WEBPACK_IMPORTED_MODULE_27__; });
/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Unicode.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Unicode", function() { return _Unicode__WEBPACK_IMPORTED_MODULE_28__; });
/* harmony import */ var _Unique__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Unique.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Unique", function() { return _Unique__WEBPACK_IMPORTED_MODULE_29__; });
/* harmony import */ var _Zip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Zip.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Zip", function() { return _Zip__WEBPACK_IMPORTED_MODULE_30__; });
































//# sourceMappingURL=Main.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Merger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var shallow = function (old, nu) {
    return nu;
};
var deep = function (old, nu) {
    var bothObjects = _Type__WEBPACK_IMPORTED_MODULE_0__["isObject"](old) && _Type__WEBPACK_IMPORTED_MODULE_0__["isObject"](nu);
    return bothObjects ? deepMerge(old, nu) : nu;
};
var baseMerge = function (merger) {
    return function () {
        // Don't use array slice(arguments), makes the whole function unoptimisable on Chrome
        var objects = new Array(arguments.length);
        for (var i = 0; i < objects.length; i++)
            objects[i] = arguments[i];
        if (objects.length === 0)
            throw new Error('Can\'t merge zero objects');
        var ret = {};
        for (var j = 0; j < objects.length; j++) {
            var curObject = objects[j];
            for (var key in curObject)
                if (hasOwnProperty.call(curObject, key)) {
                    ret[key] = merger(ret[key], curObject[key]);
                }
        }
        return ret;
    };
};
var deepMerge = baseMerge(deep);
var merge = baseMerge(shallow);
//# sourceMappingURL=Merger.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Namespace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
// This API is intended to give the capability to return namespaced strings.
// For CSS, since dots are not valid class names, the dots are turned into dashes.
var css = function (namespace) {
    var dashNamespace = namespace.replace(/\./g, '-');
    var resolve = function (str) {
        return dashNamespace + '-' + str;
    };
    return {
        resolve: resolve
    };
};
//# sourceMappingURL=Namespace.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Obj.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tupleMap", function() { return tupleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bifilter", function() { return bifilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToArray", function() { return mapToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");

// There are many variations of Object iteration that are faster than the 'for-in' style:
// http://jsperf.com/object-keys-iteration/107
//
// Use the native keys if it is available (IE9+), otherwise fall back to manually filtering
var keys = Object.keys;
var hasOwnProperty = Object.hasOwnProperty;
var each = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
        var i = props[k];
        var x = obj[i];
        f(x, i, obj);
    }
};
/** map :: (JsObj(k, v), (v, k, JsObj(k, v) -> x)) -> JsObj(k, x) */
var map = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
        return {
            k: i,
            v: f(x, i, obj)
        };
    });
};
/** tupleMap :: (JsObj(k, v), (v, k, JsObj(k, v) -> { k: x, v: y })) -> JsObj(x, y) */
var tupleMap = function (obj, f) {
    var r = {};
    each(obj, function (x, i) {
        var tuple = f(x, i, obj);
        r[tuple.k] = tuple.v;
    });
    return r;
};
/** bifilter :: (JsObj(k, v), (v, k -> Bool)) -> { t: JsObj(k, v), f: JsObj(k, v) } */
var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each(obj, function (x, i) {
        var branch = pred(x, i) ? t : f;
        branch[i] = x;
    });
    return {
        t: t,
        f: f
    };
};
/** mapToArray :: (JsObj(k, v), (v, k -> a)) -> [a] */
var mapToArray = function (obj, f) {
    var r = [];
    each(obj, function (value, name) {
        r.push(f(value, name));
    });
    return r;
};
/** find :: (JsObj(k, v), (v, k, JsObj(k, v) -> Bool)) -> Option v */
var find = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
        var i = props[k];
        var x = obj[i];
        if (pred(x, i, obj)) {
            return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(x);
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none();
};
/** values :: JsObj(k, v) -> [v] */
var values = function (obj) {
    return mapToArray(obj, function (v) {
        return v;
    });
};
var size = function (obj) {
    return keys(obj).length;
};
/** get :: (JsObj(k, v), k) -> Option v */
var get = function (obj, key) {
    return has(obj, key) ? _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(obj[key]) : _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none();
};
/** has :: (JsObj(k, v), k) -> Bool */
var has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
};
//# sourceMappingURL=Obj.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var _Fun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js");

;
var never = _Fun__WEBPACK_IMPORTED_MODULE_0__["never"];
var always = _Fun__WEBPACK_IMPORTED_MODULE_0__["always"];
/**
  Option objects support the following methods:

  fold :: this Option a -> ((() -> b, a -> b)) -> Option b

  is :: this Option a -> a -> Boolean

  isSome :: this Option a -> () -> Boolean

  isNone :: this Option a -> () -> Boolean

  getOr :: this Option a -> a -> a

  getOrThunk :: this Option a -> (() -> a) -> a

  getOrDie :: this Option a -> String -> a

  or :: this Option a -> Option a -> Option a
    - if some: return self
    - if none: return opt

  orThunk :: this Option a -> (() -> Option a) -> Option a
    - Same as "or", but uses a thunk instead of a value

  map :: this Option a -> (a -> b) -> Option b
    - "fmap" operation on the Option Functor.
    - same as 'each'

  ap :: this Option a -> Option (a -> b) -> Option b
    - "apply" operation on the Option Apply/Applicative.
    - Equivalent to <*> in Haskell/PureScript.

  each :: this Option a -> (a -> b) -> undefined
    - similar to 'map', but doesn't return a value.
    - intended for clarity when performing side effects.

  bind :: this Option a -> (a -> Option b) -> Option b
    - "bind"/"flatMap" operation on the Option Bind/Monad.
    - Equivalent to >>= in Haskell/PureScript; flatMap in Scala.

  flatten :: {this Option (Option a))} -> () -> Option a
    - "flatten"/"join" operation on the Option Monad.

  exists :: this Option a -> (a -> Boolean) -> Boolean

  forall :: this Option a -> (a -> Boolean) -> Boolean

  filter :: this Option a -> (a -> Boolean) -> Option a

  equals :: this Option a -> Option a -> Boolean

  equals_ :: this Option a -> (Option a, a -> Boolean) -> Boolean

  toArray :: this Option a -> () -> [a]

*/
var none = function () { return NONE; };
var NONE = (function () {
    var eq = function (o) {
        return o.isNone();
    };
    // inlined from peanut, maybe a micro-optimisation?
    var call = function (thunk) { return thunk(); };
    var id = function (n) { return n; };
    var noop = function () { };
    var nul = function () { return null; };
    var undef = function () { return undefined; };
    var me = {
        fold: function (n, s) { return n(); },
        is: never,
        isSome: never,
        isNone: always,
        getOr: id,
        getOrThunk: call,
        getOrDie: function (msg) {
            throw new Error(msg || 'error: getOrDie called on none.');
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call,
        map: none,
        ap: none,
        each: noop,
        bind: none,
        flatten: none,
        exists: never,
        forall: always,
        filter: none,
        equals: eq,
        equals_: eq,
        toArray: function () { return []; },
        toString: _Fun__WEBPACK_IMPORTED_MODULE_0__["constant"]('none()')
    };
    if (Object.freeze)
        Object.freeze(me);
    return me;
})();
/** some :: a -> Option a */
var some = function (a) {
    // inlined from peanut, maybe a micro-optimisation?
    var constant_a = function () { return a; };
    var self = function () {
        // can't Fun.constant this one
        return me;
    };
    var map = function (f) {
        return some(f(a));
    };
    var bind = function (f) {
        return f(a);
    };
    var me = {
        fold: function (n, s) { return s(a); },
        is: function (v) { return a === v; },
        isSome: always,
        isNone: never,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function (optfab) {
            return optfab.fold(none, function (fab) {
                return some(fab(a));
            });
        },
        each: function (f) {
            f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function (f) {
            return f(a) ? me : NONE;
        },
        equals: function (o) {
            return o.is(a);
        },
        equals_: function (o, elementEq) {
            return o.fold(never, function (b) { return elementEq(a, b); });
        },
        toArray: function () {
            return [a];
        },
        toString: function () {
            return 'some(' + a + ')';
        }
    };
    return me;
};
/** from :: undefined|null|a -> Option a */
var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
};
var Option = {
    some: some,
    none: none,
    from: from
};
//# sourceMappingURL=Option.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cat", function() { return cat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMap", function() { return findMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liftN", function() { return liftN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return lift; });
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");

/** cat :: [Option a] -> [a] */
var cat = function (arr) {
    var r = [];
    var push = function (x) {
        r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
        arr[i].each(push);
    }
    return r;
};
/** findMap :: ([a], (a, Int -> Option b)) -> Option b */
var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
        var r = f(arr[i], i);
        if (r.isSome()) {
            return r;
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none();
};
/**
 * if all elements in arr are 'some', their inner values are passed as arguments to f
 * f must have arity arr.length
*/
var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        if (x.isSome()) {
            r.push(x.getOrDie());
        }
        else {
            return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none();
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(f.apply(null, r));
};
function lift() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var f = args.pop();
    return liftN(args, f);
}
;

//# sourceMappingURL=Options.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Resolve.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forge", function() { return forge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Global.js");

/** path :: ([String], JsObj?) -> JsObj */
var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : _Global__WEBPACK_IMPORTED_MODULE_0__["Global"];
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
        o = o[parts[i]];
    return o;
};
/** resolve :: (String, JsObj?) -> JsObj */
var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
};
/** step :: (JsObj, String) -> JsObj */
var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
        o[part] = {};
    return o[part];
};
/** forge :: ([String], JsObj?) -> JsObj */
var forge = function (parts, target) {
    var o = target !== undefined ? target : _Global__WEBPACK_IMPORTED_MODULE_0__["Global"];
    for (var i = 0; i < parts.length; ++i)
        o = step(o, parts[i]);
    return o;
};
/** namespace :: (String, JsObj?) -> JsObj */
var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
};
//# sourceMappingURL=Resolve.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Result.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var _Fun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");


;
/* The type signatures for Result
 * is :: this Result a -> a -> Bool
 * or :: this Result a -> Result a -> Result a
 * orThunk :: this Result a -> (_ -> Result a) -> Result a
 * map :: this Result a -> (a -> b) -> Result b
 * each :: this Result a -> (a -> _) -> _
 * bind :: this Result a -> (a -> Result b) -> Result b
 * fold :: this Result a -> (_ -> b, a -> b) -> b
 * exists :: this Result a -> (a -> Bool) -> Bool
 * forall :: this Result a -> (a -> Bool) -> Bool
 * toOption :: this Result a -> Option a
 * isValue :: this Result a -> Bool
 * isError :: this Result a -> Bool
 * getOr :: this Result a -> a -> a
 * getOrThunk :: this Result a -> (_ -> a) -> a
 * getOrDie :: this Result a -> a (or throws error)
*/
var value = function (o) {
    var is = function (v) {
        return o === v;
    };
    var or = function (opt) {
        return value(o);
    };
    var orThunk = function (f) {
        return value(o);
    };
    var map = function (f) {
        return value(f(o));
    };
    var mapError = function (f) {
        return value(o);
    };
    var each = function (f) {
        f(o);
    };
    var bind = function (f) {
        return f(o);
    };
    var fold = function (_, onValue) {
        return onValue(o);
    };
    var exists = function (f) {
        return f(o);
    };
    var forall = function (f) {
        return f(o);
    };
    var toOption = function () {
        return _Option__WEBPACK_IMPORTED_MODULE_1__["Option"].some(o);
    };
    return {
        is: is,
        isValue: _Fun__WEBPACK_IMPORTED_MODULE_0__["always"],
        isError: _Fun__WEBPACK_IMPORTED_MODULE_0__["never"],
        getOr: _Fun__WEBPACK_IMPORTED_MODULE_0__["constant"](o),
        getOrThunk: _Fun__WEBPACK_IMPORTED_MODULE_0__["constant"](o),
        getOrDie: _Fun__WEBPACK_IMPORTED_MODULE_0__["constant"](o),
        or: or,
        orThunk: orThunk,
        fold: fold,
        map: map,
        mapError: mapError,
        each: each,
        bind: bind,
        exists: exists,
        forall: forall,
        toOption: toOption
    };
};
var error = function (message) {
    var getOrThunk = function (f) {
        return f();
    };
    var getOrDie = function () {
        return _Fun__WEBPACK_IMPORTED_MODULE_0__["die"](String(message))();
    };
    var or = function (opt) {
        return opt;
    };
    var orThunk = function (f) {
        return f();
    };
    var map = function (f) {
        return error(message);
    };
    var mapError = function (f) {
        return error(f(message));
    };
    var bind = function (f) {
        return error(message);
    };
    var fold = function (onError, _) {
        return onError(message);
    };
    return {
        is: _Fun__WEBPACK_IMPORTED_MODULE_0__["never"],
        isValue: _Fun__WEBPACK_IMPORTED_MODULE_0__["never"],
        isError: _Fun__WEBPACK_IMPORTED_MODULE_0__["always"],
        getOr: _Fun__WEBPACK_IMPORTED_MODULE_0__["identity"],
        getOrThunk: getOrThunk,
        getOrDie: getOrDie,
        or: or,
        orThunk: orThunk,
        fold: fold,
        map: map,
        mapError: mapError,
        each: _Fun__WEBPACK_IMPORTED_MODULE_0__["noop"],
        bind: bind,
        exists: _Fun__WEBPACK_IMPORTED_MODULE_0__["never"],
        forall: _Fun__WEBPACK_IMPORTED_MODULE_0__["always"],
        toOption: _Option__WEBPACK_IMPORTED_MODULE_1__["Option"].none
    };
};
var Result = {
    value: value,
    error: error
};
//# sourceMappingURL=Result.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony import */ var _Adt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Adt.js");
/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");


var comparison = _Adt__WEBPACK_IMPORTED_MODULE_0__["Adt"].generate([
    { bothErrors: ['error1', 'error2'] },
    { firstError: ['error1', 'value2'] },
    { secondError: ['value1', 'error2'] },
    { bothValues: ['value1', 'value2'] }
]);
/** partition :: [Result a] -> { errors: [String], values: [a] } */
var partition = function (results) {
    var errors = [];
    var values = [];
    _Arr__WEBPACK_IMPORTED_MODULE_1__["each"](results, function (result) {
        result.fold(function (err) { errors.push(err); }, function (value) { values.push(value); });
    });
    return { errors: errors, values: values };
};
/** compare :: (Result a, Result b) -> Comparison a b */
var compare = function (result1, result2) {
    return result1.fold(function (err1) {
        return result2.fold(function (err2) {
            return comparison.bothErrors(err1, err2);
        }, function (val2) {
            return comparison.firstError(err1, val2);
        });
    }, function (val1) {
        return result2.fold(function (err2) {
            return comparison.secondError(val1, err2);
        }, function (val2) {
            return comparison.bothValues(val1, val2);
        });
    });
};
//# sourceMappingURL=Results.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Singleton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyable", function() { return destroyable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindable", function() { return unbindable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Cell.js");


var revocable = function (doRevoke) {
    var subject = Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none());
    var revoke = function () {
        subject.get().each(doRevoke);
    };
    var clear = function () {
        revoke();
        subject.set(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none());
    };
    var set = function (s) {
        revoke();
        subject.set(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(s));
    };
    var isSet = function () {
        return subject.get().isSome();
    };
    return {
        clear: clear,
        isSet: isSet,
        set: set
    };
};
var destroyable = function () {
    return revocable(function (s) {
        s.destroy();
    });
};
var unbindable = function () {
    return revocable(function (s) {
        s.unbind();
    });
};
var api = function () {
    var subject = Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none());
    var revoke = function () {
        subject.get().each(function (s) {
            s.destroy();
        });
    };
    var clear = function () {
        revoke();
        subject.set(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none());
    };
    var set = function (s) {
        revoke();
        subject.set(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(s));
    };
    var run = function (f) {
        subject.get().each(f);
    };
    var isSet = function () {
        return subject.get().isSome();
    };
    return {
        clear: clear,
        isSet: isSet,
        set: set,
        run: run
    };
};
var value = function () {
    var subject = Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none());
    var clear = function () {
        subject.set(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none());
    };
    var set = function (s) {
        subject.set(_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(s));
    };
    var on = function (f) {
        subject.get().each(f);
    };
    var isSet = function () {
        return subject.get().isSome();
    };
    return {
        clear: clear,
        set: set,
        isSet: isSet,
        on: on
    };
};
//# sourceMappingURL=Singleton.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/StringMatch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMatch", function() { return StringMatch; });
/* harmony import */ var _Adt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Adt.js");

;
var adt = _Adt__WEBPACK_IMPORTED_MODULE_0__["Adt"].generate([
    { starts: ['value', 'f'] },
    { pattern: ['regex', 'f'] },
    { contains: ['value', 'f'] },
    { exact: ['value', 'f'] },
    { all: [] },
    { not: ['stringMatch'] }
]);
var caseInsensitive = function (val) {
    return val.toLowerCase();
};
var caseSensitive = function (val) {
    return val;
};
/** matches :: (StringMatch, String) -> Boolean */
var matches = function (subject, str) {
    return subject.fold(function (value, f) {
        return f(str).indexOf(f(value)) === 0;
    }, function (regex, f) {
        return regex.test(f(str));
    }, function (value, f) {
        return f(str).indexOf(f(value)) >= 0;
    }, function (value, f) {
        return f(str) === f(value);
    }, function () {
        return true;
    }, function (other) {
        return !matches(other, str);
    });
};
var cata = function (subject, s, p, c, e, a, n) {
    return subject.fold(s, p, c, e, a, n);
};
var StringMatch = {
    starts: adt.starts,
    pattern: adt.pattern,
    contains: adt.contains,
    exact: adt.exact,
    all: adt.all,
    not: adt.not,
    cata: cata,
    matches: matches,
    caseSensitive: caseSensitive,
    caseInsensitive: caseInsensitive
};
//# sourceMappingURL=StringMatch.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Strings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supplant", function() { return supplant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeading", function() { return removeLeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrailing", function() { return removeTrailing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureLeading", function() { return ensureLeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureTrailing", function() { return ensureTrailing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lTrim", function() { return lTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rTrim", function() { return rTrim; });
/* harmony import */ var _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/str/StrAppend.js");
/* harmony import */ var _str_StringParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/str/StringParts.js");


var checkRange = function (str, substr, start) {
    if (substr === '')
        return true;
    if (str.length < substr.length)
        return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
};
/** Given a string and object, perform template-replacements on the string, as specified by the object.
 * Any template fields of the form ${name} are replaced by the string or number specified as obj["name"]
 * Based on Douglas Crockford's 'supplant' method for template-replace of strings. Uses different template format.
 */
var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
        var t = typeof a;
        return t === 'string' || t === 'number';
    };
    return str.replace(/\$\{([^{}]*)\}/g, function (fullMatch, key) {
        var value = obj[key];
        return isStringOrNumber(value) ? value.toString() : fullMatch;
    });
};
var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__["removeFromStart"](str, prefix.length) : str;
};
var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__["removeFromEnd"](str, prefix.length) : str;
};
var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__["addToStart"](str, prefix);
};
var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : _str_StrAppend__WEBPACK_IMPORTED_MODULE_0__["addToEnd"](str, prefix);
};
var contains = function (str, substr) {
    return str.indexOf(substr) !== -1;
};
var capitalize = function (str) {
    return _str_StringParts__WEBPACK_IMPORTED_MODULE_1__["head"](str).bind(function (head) {
        return _str_StringParts__WEBPACK_IMPORTED_MODULE_1__["tail"](str).map(function (tail) {
            return head.toUpperCase() + tail;
        });
    }).getOr(str);
};
/** Does 'str' start with 'prefix'?
 *  Note: all strings start with the empty string.
 *        More formally, for all strings x, startsWith(x, "").
 *        This is so that for all strings x and y, startsWith(y + x, y)
 */
var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
};
/** Does 'str' end with 'suffix'?
 *  Note: all strings end with the empty string.
 *        More formally, for all strings x, endsWith(x, "").
 *        This is so that for all strings x and y, endsWith(x + y, y)
 */
var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
};
/** removes all leading and trailing spaces */
var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
};
var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
};
var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
};
//# sourceMappingURL=Strings.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Struct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_Immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/data/Immutable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "immutable", function() { return _data_Immutable__WEBPACK_IMPORTED_MODULE_0__["Immutable"]; });

/* harmony import */ var _data_MixedBag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/data/MixedBag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "immutableBag", function() { return _data_MixedBag__WEBPACK_IMPORTED_MODULE_1__["MixedBag"]; });




//# sourceMappingURL=Struct.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Throttler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adaptable", function() { return adaptable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
// Run a function fn afer rate ms. If another invocation occurs
// during the time it is waiting, update the arguments f will run
// with (but keep the current schedule)
var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
            args = null;
        }
    };
    var throttle = function () {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        args = newArgs;
        if (timer === null) {
            timer = setTimeout(function () {
                fn.apply(null, args);
                timer = null;
                args = null;
            }, rate);
        }
    };
    return {
        cancel: cancel,
        throttle: throttle
    };
};
// Run a function fn after rate ms. If another invocation occurs
// during the time it is waiting, ignore it completely.
var first = function (fn, rate) {
    var timer = null;
    var cancel = function () {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
    };
    var throttle = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer === null) {
            timer = setTimeout(function () {
                fn.apply(null, args);
                timer = null;
            }, rate);
        }
    };
    return {
        cancel: cancel,
        throttle: throttle
    };
};
// Run a function fn after rate ms. If another invocation occurs
// during the time it is waiting, reschedule the function again
// with the new arguments.
var last = function (fn, rate) {
    var timer = null;
    var cancel = function () {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
    };
    var throttle = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer !== null)
            clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(null, args);
            timer = null;
        }, rate);
    };
    return {
        cancel: cancel,
        throttle: throttle
    };
};
//# sourceMappingURL=Throttler.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Thunk.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return cached; });
var cached = function (f) {
    var called = false;
    var r;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!called) {
            called = true;
            r = f.apply(null, args);
        }
        return r;
    };
};
//# sourceMappingURL=Thunk.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
var typeOf = function (x) {
    if (x === null)
        return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
        return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
        return 'string';
    return t;
};
var isType = function (type) {
    return function (value) {
        return typeOf(value) === type;
    };
};
var isString = isType('string');
var isObject = isType('object');
var isArray = isType('array');
var isNull = isType('null');
var isBoolean = isType('boolean');
var isUndefined = isType('undefined');
var isFunction = isType('function');
var isNumber = isType('number');
//# sourceMappingURL=Type.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Unicode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroWidth", function() { return zeroWidth; });
var zeroWidth = function () {
    return '\uFEFF';
};
//# sourceMappingURL=Unicode.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Unique.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringArray", function() { return stringArray; });
/* harmony import */ var _Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _Obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Obj.js");


var stringArray = function (a) {
    var all = {};
    _Arr__WEBPACK_IMPORTED_MODULE_0__["each"](a, function (key) {
        all[key] = {};
    });
    return _Obj__WEBPACK_IMPORTED_MODULE_1__["keys"](all);
};
//# sourceMappingURL=Unique.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipToObject", function() { return zipToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipToTuples", function() { return zipToTuples; });
/** Creates an object from parallel arrays of key/value pairs.
 *  If keys is longer than values, undefined is used as the values for these keys.
 *  If values is longer than keys, extra values are ignored.
 *  zipToObject :: ([key], [value]) -> {key1: value1, key2: value2 ...}
 */
var zipToObject = function (keys, values) {
    var r = {};
    for (var i = 0; i < keys.length; i++) {
        r[keys[i]] = values[i];
    }
    return r;
};
/** zipToTuples :: ([key], [value]) -> [{k: key1, v: value1}, {k: key2, v: value2} ...] */
var zipToTuples = function (keys, values) {
    var r = [];
    for (var i = 0; i < keys.length; i++) {
        r.push({ k: keys[i], v: values[i] });
    }
    return r;
};
//# sourceMappingURL=Zip.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/async/AsyncValues.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "par", function() { return par; });
/* harmony import */ var _api_Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");

/*
 * NOTE: an `asyncValue` must have a `get` function which gets given a callback and calls
 * that callback with a value once it is ready
 *
 * e.g
 * {
 *   get: function (callback) { callback(10); }
 * }
 */
var par = function (asyncValues, nu) {
    return nu(function (callback) {
        var r = [];
        var count = 0;
        var cb = function (i) {
            return function (value) {
                r[i] = value;
                count++;
                if (count >= asyncValues.length) {
                    callback(r);
                }
            };
        };
        if (asyncValues.length === 0) {
            callback([]);
        }
        else {
            _api_Arr__WEBPACK_IMPORTED_MODULE_0__["each"](asyncValues, function (asyncValue, i) {
                asyncValue.get(cb(i));
            });
        }
    });
};
//# sourceMappingURL=AsyncValues.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/async/Bounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return bounce; });
var bounce = function (f) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var me = this;
        setTimeout(function () {
            f.apply(me, args);
        }, 0);
    };
};
//# sourceMappingURL=Bounce.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/data/Immutable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immutable", function() { return Immutable; });
/* harmony import */ var _api_Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _api_Fun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js");


var Immutable = function () {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    return function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        if (fields.length !== values.length) {
            throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
        }
        var struct = {};
        _api_Arr__WEBPACK_IMPORTED_MODULE_0__["each"](fields, function (name, i) {
            struct[name] = _api_Fun__WEBPACK_IMPORTED_MODULE_1__["constant"](values[i]);
        });
        return struct;
    };
};
//# sourceMappingURL=Immutable.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/data/MixedBag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedBag", function() { return MixedBag; });
/* harmony import */ var _api_Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _api_Fun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Fun.js");
/* harmony import */ var _api_Obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Obj.js");
/* harmony import */ var _api_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");
/* harmony import */ var _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/util/BagUtils.js");





var MixedBag = function (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
        throw new Error('You must specify at least one required or optional field.');
    _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["validateStrArr"]('required', required);
    _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["validateStrArr"]('optional', optional);
    _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["checkDupes"](everything);
    return function (obj) {
        var keys = _api_Obj__WEBPACK_IMPORTED_MODULE_2__["keys"](obj);
        // Ensure all required keys are present.
        var allReqd = _api_Arr__WEBPACK_IMPORTED_MODULE_0__["forall"](required, function (req) {
            return _api_Arr__WEBPACK_IMPORTED_MODULE_0__["contains"](keys, req);
        });
        if (!allReqd)
            _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["reqMessage"](required, keys);
        var unsupported = _api_Arr__WEBPACK_IMPORTED_MODULE_0__["filter"](keys, function (key) {
            return !_api_Arr__WEBPACK_IMPORTED_MODULE_0__["contains"](everything, key);
        });
        if (unsupported.length > 0)
            _util_BagUtils__WEBPACK_IMPORTED_MODULE_4__["unsuppMessage"](unsupported);
        var r = {};
        _api_Arr__WEBPACK_IMPORTED_MODULE_0__["each"](required, function (req) {
            r[req] = _api_Fun__WEBPACK_IMPORTED_MODULE_1__["constant"](obj[req]);
        });
        _api_Arr__WEBPACK_IMPORTED_MODULE_0__["each"](optional, function (opt) {
            r[opt] = _api_Fun__WEBPACK_IMPORTED_MODULE_1__["constant"](Object.prototype.hasOwnProperty.call(obj, opt) ? _api_Option__WEBPACK_IMPORTED_MODULE_3__["Option"].some(obj[opt]) : _api_Option__WEBPACK_IMPORTED_MODULE_3__["Option"].none());
        });
        return r;
    };
};
//# sourceMappingURL=MixedBag.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/str/StrAppend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToStart", function() { return addToStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToEnd", function() { return addToEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStart", function() { return removeFromStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromEnd", function() { return removeFromEnd; });
var addToStart = function (str, prefix) {
    return prefix + str;
};
var addToEnd = function (str, suffix) {
    return str + suffix;
};
var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
};
var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
};
//# sourceMappingURL=StrAppend.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/str/StringParts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony import */ var _api_Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Option.js");

/** Return the first 'count' letters from 'str'.
-     *  e.g. first("abcde", 2) === "ab"
-     */
var first = function (str, count) {
    return str.substr(0, count);
};
/** Return the last 'count' letters from 'str'.
*  e.g. last("abcde", 2) === "de"
*/
var last = function (str, count) {
    return str.substr(str.length - count, str.length);
};
var head = function (str) {
    return str === '' ? _api_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none() : _api_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(str.substr(0, 1));
};
var tail = function (str) {
    return str === '' ? _api_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].none() : _api_Option__WEBPACK_IMPORTED_MODULE_0__["Option"].some(str.substring(1));
};
//# sourceMappingURL=StringParts.js.map

/***/ }),

/***/ "./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/util/BagUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMessage", function() { return reqMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsuppMessage", function() { return unsuppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateStrArr", function() { return validateStrArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidTypeMessage", function() { return invalidTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupes", function() { return checkDupes; });
/* harmony import */ var _api_Arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Arr.js");
/* harmony import */ var _api_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Type.js");


var sort = function (arr) {
    return arr.slice(0).sort();
};
var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort(required).join(', ') + ') were not specified. Specified keys were: ' + sort(keys).join(', ') + '.');
};
var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort(unsupported).join(', '));
};
var validateStrArr = function (label, array) {
    if (!_api_Type__WEBPACK_IMPORTED_MODULE_1__["isArray"](array))
        throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    _api_Arr__WEBPACK_IMPORTED_MODULE_0__["each"](array, function (a) {
        if (!_api_Type__WEBPACK_IMPORTED_MODULE_1__["isString"](a))
            throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
};
var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort(incorrect).join(', ') + ') were not.');
};
var checkDupes = function (everything) {
    var sorted = sort(everything);
    var dupe = _api_Arr__WEBPACK_IMPORTED_MODULE_0__["find"](sorted, function (s, i) {
        return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
        throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
};
//# sourceMappingURL=BagUtils.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/core/demo/ts/demo/AnnotationsDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var button = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('button');
    button.innerHTML = 'Get all annotations';
    button.addEventListener('click', function () {
        // tslint:disable no-console
        console.log('annotations', tinymce.activeEditor.annotator.getAll('alpha'));
        // tslint:enable no-console
    });
    _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].body.appendChild(button);
    tinymce.init({
        skin_url: '../../../../js/tinymce/skins/lightgray',
        selector: 'textarea.tinymce',
        toolbar: 'annotate-alpha',
        plugins: [],
        content_style: '.mce-annotation { background-color: darkgreen; color: white; }',
        setup: function (ed) {
            ed.addButton('annotate-alpha', {
                text: 'Annotate',
                onclick: function () {
                    var comment = Object(_ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["prompt"])('Comment with?');
                    ed.annotator.annotate('alpha', {
                        comment: comment
                    });
                    ed.focus();
                },
                onpostrender: function (ctrl) {
                    var button = ctrl.control;
                    ed.on('init', function () {
                        ed.annotator.annotationChanged('alpha', function (state, name, obj) {
                            if (!state) {
                                button.active(false);
                            }
                            else {
                                button.active(true);
                            }
                        });
                    });
                }
            });
            ed.on('init', function () {
                ed.annotator.register('alpha', {
                    persistent: true,
                    decorate: function (uid, data) {
                        return {
                            attributes: {
                                'data-mce-comment': data.comment
                            }
                        };
                    }
                });
            });
        },
        theme: 'modern',
        menubar: false
    });
});


/***/ }),

/***/ "./src/core/demo/ts/demo/CommandsDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Main.js");
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");
/**
 * CommandsDemo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
    var cmd = function (command, value) {
        return { command: command, value: value };
    };
    var commands = [
        cmd('Bold'),
        cmd('Italic'),
        cmd('Underline'),
        cmd('Strikethrough'),
        cmd('Superscript'),
        cmd('Subscript'),
        cmd('Cut'),
        cmd('Copy'),
        cmd('Paste'),
        cmd('Unlink'),
        cmd('JustifyLeft'),
        cmd('JustifyCenter'),
        cmd('JustifyRight'),
        cmd('JustifyFull'),
        cmd('JustifyNone'),
        cmd('InsertUnorderedList'),
        cmd('InsertOrderedList'),
        cmd('ForeColor', 'red'),
        cmd('HiliteColor', 'green'),
        cmd('FontName', 'Arial'),
        cmd('FontSize', 7),
        cmd('RemoveFormat'),
        cmd('mceBlockQuote'),
        cmd('FormatBlock', 'h1'),
        cmd('mceInsertContent', 'abc'),
        cmd('mceToggleFormat', 'bold'),
        cmd('mceSetContent', 'abc'),
        cmd('Indent'),
        cmd('Outdent'),
        cmd('InsertHorizontalRule'),
        cmd('mceToggleVisualAid'),
        cmd('mceInsertLink', 'url'),
        cmd('selectAll'),
        cmd('delete'),
        cmd('mceNewDocument'),
        cmd('Undo'),
        cmd('Redo'),
        cmd('mceAutoResize'),
        cmd('mceShowCharmap'),
        cmd('mceCodeEditor'),
        cmd('mceDirectionLTR'),
        cmd('mceDirectionRTL'),
        cmd('mceFullPageProperties'),
        cmd('mceFullscreen'),
        cmd('mceImage'),
        cmd('mceInsertDate'),
        cmd('mceInsertTime'),
        cmd('InsertDefinitionList'),
        cmd('mceNonBreaking'),
        cmd('mcePageBreak'),
        cmd('mcePreview'),
        cmd('mcePrint'),
        cmd('mceSave'),
        cmd('SearchReplace'),
        cmd('mceSpellcheck'),
        cmd('mceInsertTemplate', '{$user}'),
        cmd('mceVisualBlocks'),
        cmd('mceVisualChars'),
        cmd('mceMedia'),
        cmd('mceAnchor'),
        cmd('mceTableSplitCells'),
        cmd('mceTableMergeCells'),
        cmd('mceTableInsertRowBefore'),
        cmd('mceTableInsertRowAfter'),
        cmd('mceTableInsertColBefore'),
        cmd('mceTableInsertColAfter'),
        cmd('mceTableDeleteCol'),
        cmd('mceTableDeleteRow'),
        cmd('mceTableCutRow'),
        cmd('mceTableCopyRow'),
        cmd('mceTablePasteRowBefore'),
        cmd('mceTablePasteRowAfter'),
        cmd('mceTableDelete'),
        cmd('mceInsertTable'),
        cmd('mceTableProps'),
        cmd('mceTableRowProps'),
        cmd('mceTableCellProps'),
        cmd('mceEditImage')
    ];
    _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Arr"].each(commands, function (cmd) {
        var btn = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('button');
        btn.innerHTML = cmd.command;
        btn.onclick = function () {
            tinymce.activeEditor.execCommand(cmd.command, false, cmd.value);
        };
        _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector('#ephox-ui').appendChild(btn);
    });
    tinymce.init({
        skin_url: '../../../../js/tinymce/skins/lightgray',
        selector: 'textarea.tinymce',
        plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor importcss colorpicker textpattern codesample'
        ],
        theme: 'modern',
        toolbar1: 'bold italic',
        menubar: false
    });
});


/***/ }),

/***/ "./src/core/demo/ts/demo/ContentEditableFalseDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ContentEditableFalseDemo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var paintClientRect = function (rect, color, id) {
        var editor = tinymce.activeEditor;
        var $ = editor.$;
        var rectDiv;
        var viewPort = editor.dom.getViewPort();
        if (!rect) {
            return;
        }
        color = color || 'red';
        id = id || color;
        rectDiv = $('#' + id);
        if (!rectDiv[0]) {
            rectDiv = $('<div></div>').appendTo(editor.getBody());
        }
        rectDiv.attr('id', id).css({
            position: 'absolute',
            left: (rect.left + viewPort.x) + 'px',
            top: (rect.top + viewPort.y) + 'px',
            width: (rect.width || 1) + 'px',
            height: rect.height + 'px',
            background: color,
            opacity: 0.8
        });
    };
    var paintClientRects = function (rects, color) {
        tinymce.util.Tools.each(rects, function (rect, index) {
            paintClientRect(rect, color, color + index);
        });
    };
    var logPos = function (caretPosition) {
        var container = caretPosition.container(), offset = caretPosition.offset();
        if (container.nodeType === 3) {
            if (container.data[offset]) {
                console.log(container.data[offset]);
            }
            else {
                console.log('<end of text node>');
            }
        }
        else {
            console.log(container, offset, caretPosition.getNode());
        }
    };
    window.paintClientRect = paintClientRect;
    window.paintClientRects = paintClientRects;
    window.logPos = logPos;
    tinymce.init({
        selector: 'textarea.tinymce',
        skin_url: '../../../../js/tinymce/skins/lightgray',
        add_unload_trigger: false,
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify' +
            ' | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample',
        plugins: ['paste'],
        content_css: '../css/content_editable.css',
        height: 400
    });
    tinymce.init({
        selector: 'div.tinymce',
        inline: true,
        skin_url: '../../../../js/tinymce/skins/lightgray',
        add_unload_trigger: false,
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify' +
            ' | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample',
        plugins: ['paste'],
        content_css: '../css/content_editable.css'
    });
    window.tinymce = tinymce;
});


/***/ }),

/***/ "./src/core/demo/ts/demo/CustomThemeDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");
/**
 * CustomThemeDemo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var textarea = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('textarea');
    textarea.rows = 20;
    textarea.cols = 80;
    textarea.innerHTML = '<p>Bolt</p>';
    textarea.classList.add('tinymce');
    _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].querySelector('#ephox-ui').appendChild(textarea);
    tinymce.init({
        selector: 'textarea',
        theme: function (editor, target) {
            var dom = tinymce.DOM;
            var editorContainer;
            editorContainer = dom.insertAfter(dom.create('div', { style: 'border: 1px solid gray' }, '<div>' +
                '<button data-mce-command="bold">B</button>' +
                '<button data-mce-command="italic">I</button>' +
                '<button data-mce-command="mceInsertContent" data-mce-value="Hello">Insert Hello</button>' +
                '</div>' +
                '<div style="border-top: 1px solid gray"></div>'), target);
            dom.setStyle(editorContainer, 'width', target.offsetWidth);
            tinymce.each(dom.select('button', editorContainer), function (button) {
                dom.bind(button, 'click', function (e) {
                    e.preventDefault();
                    editor.execCommand(dom.getAttrib(e.target, 'data-mce-command'), false, dom.getAttrib(e.target, 'data-mce-value'));
                });
            });
            editor.on(function () {
                tinymce.each(dom.select('button', editorContainer), function (button) {
                    editor.formatter.formatChanged(dom.getAttrib(button, 'data-mce-command'), function (state) {
                        button.style.color = state ? 'red' : '';
                    });
                });
            });
            return {
                editorContainer: editorContainer,
                iframeContainer: editorContainer.lastChild,
                iframeHeight: target.offsetHeight - editorContainer.firstChild.offsetHeight
            };
        },
        height: 600
    });
});


/***/ }),

/***/ "./src/core/demo/ts/demo/Demos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommandsDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/demo/ts/demo/CommandsDemo.ts");
/* harmony import */ var _ContentEditableFalseDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/demo/ts/demo/ContentEditableFalseDemo.ts");
/* harmony import */ var _CustomThemeDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/demo/ts/demo/CustomThemeDemo.ts");
/* harmony import */ var _FullDemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/demo/ts/demo/FullDemo.ts");
/* harmony import */ var _TinyMceDemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/demo/ts/demo/TinyMceDemo.ts");
/* harmony import */ var _UiContainerDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/core/demo/ts/demo/UiContainerDemo.ts");
/* harmony import */ var _AnnotationsDemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/core/demo/ts/demo/AnnotationsDemo.ts");
/* harmony import */ var _SourceDumpDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/core/demo/ts/demo/SourceDumpDemo.ts");








window.demos = {
    CommandsDemo: _CommandsDemo__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContentEditableFalseDemo: _ContentEditableFalseDemo__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomThemeDemo: _CustomThemeDemo__WEBPACK_IMPORTED_MODULE_2__["default"],
    FullDemo: _FullDemo__WEBPACK_IMPORTED_MODULE_3__["default"],
    TinyMceDemo: _TinyMceDemo__WEBPACK_IMPORTED_MODULE_4__["default"],
    UiContainerDemo: _UiContainerDemo__WEBPACK_IMPORTED_MODULE_5__["default"],
    AnnotationsDemo: _AnnotationsDemo__WEBPACK_IMPORTED_MODULE_6__["default"],
    SourceDumpDemo: _SourceDumpDemo__WEBPACK_IMPORTED_MODULE_7__["default"]
};


/***/ }),

/***/ "./src/core/demo/ts/demo/FullDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Main.js");
/**
 * FullDemo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var settings = {
        skin_url: '../../../../js/tinymce/skins/lightgray',
        codesample_content_css: '../../../../js/tinymce/plugins/codesample/css/prism.css',
        visualblocks_content_css: '../../../../js/tinymce/plugins/visualblocks/css/visualblocks.css',
        images_upload_url: 'd',
        selector: 'textarea',
        // rtl_ui: true,
        link_list: [
            { title: 'My page 1', value: 'http://www.tinymce.com' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_list: [
            { title: 'My page 1', value: 'http://www.tinymce.com' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' }
        ],
        importcss_append: true,
        height: 400,
        file_picker_callback: function (callback, value, meta) {
            // Provide file and text for the link dialog
            if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
            }
            // Provide image and alt text for the image dialog
            if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
            }
            // Provide alternative source and posted for the media dialog
            if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
            }
        },
        spellchecker_callback: function (method, text, success, failure) {
            var words = text.match(this.getWordCharPattern());
            if (method === 'spellcheck') {
                var suggestions = {};
                for (var i = 0; i < words.length; i++) {
                    suggestions[words[i]] = ['First', 'Second'];
                }
                success(suggestions);
            }
            if (method === 'addToDictionary') {
                success();
            }
        },
        templates: [
            { title: 'Some title 1', description: 'Some desc 1', content: 'My content' },
            { title: 'Some title 2', description: 'Some desc 2', content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>' }
        ],
        template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
        image_caption: true,
        theme: 'modern',
        mobile: {
            plugins: [
                'autosave lists'
            ]
        },
        plugins: [
            'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor importcss colorpicker textpattern',
            'codesample help noneditable print'
        ],
        // rtl_ui: true,
        add_unload_trigger: false,
        autosave_ask_before_unload: false,
        toolbar: 'fontsizeselect fontselect insertfile undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl'
    };
    tinymce.init(settings);
    tinymce.init(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(settings, { inline: true, selector: 'div.tinymce' }));
});


/***/ }),

/***/ "./src/core/demo/ts/demo/SourceDumpDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
    tinymce.init({
        selector: 'textarea#editor',
        skin_url: '../../../../js/tinymce/skins/lightgray',
        codesample_content_css: '../../../../js/tinymce/plugins/codesample/css/prism.css',
        visualblocks_content_css: '../../../../js/tinymce/plugins/visualblocks/css/visualblocks.css',
        templates: [
            { title: 'Some title 1', description: 'Some desc 1', content: 'My content' },
            { title: 'Some title 2', description: 'Some desc 2', content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>' }
        ],
        image_caption: true,
        plugins: [
            'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor importcss colorpicker textpattern',
            'codesample help noneditable print'
        ],
        add_unload_trigger: false,
        autosave_ask_before_unload: false,
        toolbar: 'fontsizeselect fontselect insertfile undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl',
        init_instance_callback: function (editor) {
            editor.on('init keyup change', function () { return dumpSource(editor); });
        }
    });
    var dumpSource = function (editor) {
        var textArea = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById('source');
        var raw = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById('raw');
        textArea.value = raw.checked ? editor.getBody().innerHTML : editor.getContent();
    };
});


/***/ }),

/***/ "./src/core/demo/ts/demo/TinyMceDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");
/**
 * TinyMceDemo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var textarea = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('textarea');
    textarea.innerHTML = '<p>Bolt</p>';
    textarea.classList.add('tinymce');
    _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].querySelector('#ephox-ui').appendChild(textarea);
    tinymce.init({
        // imagetools_cors_hosts: ["moxiecode.cachefly.net"],
        // imagetools_proxy: "proxy.php",
        // imagetools_api_key: '123',
        // images_upload_url: 'postAcceptor.php',
        // images_upload_base_path: 'base/path',
        // images_upload_credentials: true,
        skin_url: '../../../../js/tinymce/skins/lightgray',
        setup: function (ed) {
            ed.addButton('demoButton', {
                type: 'button',
                text: 'Demo',
                onclick: function () {
                    ed.insertContent('Hello world!');
                }
            });
        },
        selector: 'textarea.tinymce',
        theme: 'modern',
        toolbar1: 'demoButton bold italic',
        menubar: false
    });
});


/***/ }),

/***/ "./src/core/demo/ts/demo/UiContainerDemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ephox/katamari/lib/main/ts/ephox/katamari/api/Main.js");
/**
 * UiContainer.ts
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var generalSettings = {
        skin_url: '../../../../js/tinymce/skins/lightgray',
        codesample_content_css: '../../../../js/tinymce/plugins/codesample/css/prism.css',
        visualblocks_content_css: '../../../../js/tinymce/plugins/visualblocks/css/visualblocks.css',
        images_upload_url: 'd',
        // rtl_ui: true,
        link_list: [
            { title: 'My page 1', value: 'http://www.tinymce.com' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_list: [
            { title: 'My page 1', value: 'http://www.tinymce.com' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' }
        ],
        importcss_append: true,
        height: 400,
        file_picker_callback: function (callback, value, meta) {
            // Provide file and text for the link dialog
            if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
            }
            // Provide image and alt text for the image dialog
            if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
            }
            // Provide alternative source and posted for the media dialog
            if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
            }
        },
        spellchecker_callback: function (method, text, success, failure) {
            var words = text.match(this.getWordCharPattern());
            if (method === 'spellcheck') {
                var suggestions = {};
                for (var i = 0; i < words.length; i++) {
                    suggestions[words[i]] = ['First', 'Second'];
                }
                success(suggestions);
            }
            if (method === 'addToDictionary') {
                success();
            }
        },
        templates: [
            { title: 'Some title 1', description: 'Some desc 1', content: 'My content' },
            { title: 'Some title 2', description: 'Some desc 2', content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>' }
        ],
        template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
        image_caption: true,
        theme: 'modern',
        mobile: {
            plugins: [
                'autosave lists'
            ]
        },
        plugins: [
            'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor importcss colorpicker textpattern',
            'codesample help noneditable print'
        ],
        // rtl_ui: true,
        add_unload_trigger: false,
        autosave_ask_before_unload: false
    };
    var iframeSettings = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(generalSettings, {
        toolbar: 'fontsizeselect fontselect insertfile undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl'
    });
    var inlineSettings = _ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(generalSettings, {
        inline: true,
        toolbar: [
            'fontsizeselect fontselect insertfile undo redo | insert | styleselect',
            'bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            'print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl'
        ]
    });
    tinymce.init(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(iframeSettings, {
        selector: '#left textarea',
        ui_container: '#left'
    }));
    tinymce.init(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(inlineSettings, {
        selector: '#left div.tinymce',
        ui_container: '#left'
    }));
    tinymce.init(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(iframeSettings, {
        selector: '#right textarea',
        ui_container: '#right'
    }));
    tinymce.init(_ephox_katamari__WEBPACK_IMPORTED_MODULE_0__["Merger"].deepMerge(inlineSettings, {
        selector: '#right div.tinymce',
        ui_container: '#right'
    }));
});


/***/ })

/******/ });
//# sourceMappingURL=demo.js.map