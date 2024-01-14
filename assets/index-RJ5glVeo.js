function _d(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rd={exports:{}},io={},Ld={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),Qp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),qp=Symbol.for("react.suspense"),eh=Symbol.for("react.memo"),th=Symbol.for("react.lazy"),Ou=Symbol.iterator;function nh(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var Dd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zd=Object.assign,Td={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Td,this.updater=n||Dd}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fd(){}Fd.prototype=Dr.prototype;function Es(e,t,n){this.props=e,this.context=t,this.refs=Td,this.updater=n||Dd}var js=Es.prototype=new Fd;js.constructor=Es;zd(js,Dr.prototype);js.isPureReactComponent=!0;var Iu=Array.isArray,Md=Object.prototype.hasOwnProperty,Ns={current:null},Ad={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Md.call(t,r)&&!Ad.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oi,type:e,key:l,ref:o,props:i,_owner:Ns.current}}function rh(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _s(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function ih(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $u=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ih(""+e.key):t.toString(36)}function dl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Oi:case Qp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ao(o,0):r,Iu(i)?(n="",e!=null&&(n=e.replace($u,"$&/")+"/"),dl(i,t,n,"",function(u){return u})):i!=null&&(_s(i)&&(i=rh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($u,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Iu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ao(l,a);o+=dl(l,t,n,s,i)}else if(s=nh(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ao(l,a++),o+=dl(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ki(e,t,n){if(e==null)return e;var r=[],i=0;return dl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function lh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},fl={transition:null},oh={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Ns};K.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!_s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Dr;K.Fragment=Kp;K.Profiler=Gp;K.PureComponent=Es;K.StrictMode=Yp;K.Suspense=qp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oh;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zd({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Md.call(t,s)&&!Ad.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oi,type:e.type,key:i,ref:l,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:Zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xp,_context:e},e.Consumer=e};K.createElement=Od;K.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Jp,render:e}};K.isValidElement=_s;K.lazy=function(e){return{$$typeof:th,_payload:{_status:-1,_result:e},_init:lh}};K.memo=function(e,t){return{$$typeof:eh,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=fl.transition;fl.transition={};try{e()}finally{fl.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return He.current.useCallback(e,t)};K.useContext=function(e){return He.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return He.current.useDeferredValue(e)};K.useEffect=function(e,t){return He.current.useEffect(e,t)};K.useId=function(){return He.current.useId()};K.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return He.current.useMemo(e,t)};K.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};K.useRef=function(e){return He.current.useRef(e)};K.useState=function(e){return He.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return He.current.useTransition()};K.version="18.2.0";Ld.exports=K;var _=Ld.exports;const Ge=Pd(_),ah=_d({__proto__:null,default:Ge},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh=_,uh=Symbol.for("react.element"),ch=Symbol.for("react.fragment"),dh=Object.prototype.hasOwnProperty,fh=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ph={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)dh.call(t,r)&&!ph.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:uh,type:e,key:l,ref:o,props:i,_owner:fh.current}}io.Fragment=ch;io.jsx=Id;io.jsxs=Id;Rd.exports=io;var c=Rd.exports,xa={},$d={exports:{}},ot={},Ud={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,M){var I=L.length;L.push(M);e:for(;0<I;){var Q=I-1>>>1,Z=L[Q];if(0<i(Z,M))L[Q]=M,L[I]=Z,I=Q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],I=L.pop();if(I!==M){L[0]=I;e:for(var Q=0,Z=L.length,Me=Z>>>1;Q<Me;){var xe=2*(Q+1)-1,et=L[xe],We=xe+1,st=L[We];if(0>i(et,I))We<Z&&0>i(st,et)?(L[Q]=st,L[We]=I,Q=We):(L[Q]=et,L[xe]=I,Q=xe);else if(We<Z&&0>i(st,I))L[Q]=st,L[We]=I,Q=We;else break e}}return M}function i(L,M){var I=L.sortIndex-M.sortIndex;return I!==0?I:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],d=1,v=null,m=3,S=!1,x=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function p(L){if(w=!1,g(L),!x)if(n(s)!==null)x=!0,Lt(E);else{var M=n(u);M!==null&&qe(p,M.startTime-L)}}function E(L,M){x=!1,w&&(w=!1,h(D),D=-1),S=!0;var I=m;try{for(g(M),v=n(s);v!==null&&(!(v.expirationTime>M)||L&&!X());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,m=v.priorityLevel;var Z=Q(v.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===n(s)&&r(s),g(M)}else r(s);v=n(s)}if(v!==null)var Me=!0;else{var xe=n(u);xe!==null&&qe(p,xe.startTime-M),Me=!1}return Me}finally{v=null,m=I,S=!1}}var N=!1,k=null,D=-1,O=5,$=-1;function X(){return!(e.unstable_now()-$<O)}function ke(){if(k!==null){var L=e.unstable_now();$=L;var M=!0;try{M=k(!0,L)}finally{M?ye():(N=!1,k=null)}}else N=!1}var ye;if(typeof f=="function")ye=function(){f(ke)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,ae=yt.port2;yt.port1.onmessage=ke,ye=function(){ae.postMessage(null)}}else ye=function(){P(ke,0)};function Lt(L){k=L,N||(N=!0,ye())}function qe(L,M){D=P(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,Lt(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var I=m;m=M;try{return L()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=m;m=L;try{return M()}finally{m=I}},e.unstable_scheduleCallback=function(L,M,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=I+Z,L={id:d++,callback:M,priorityLevel:L,startTime:I,expirationTime:Z,sortIndex:-1},I>Q?(L.sortIndex=I,t(u,L),n(s)===null&&L===n(u)&&(w?(h(D),D=-1):w=!0,qe(p,I-Q))):(L.sortIndex=Z,t(s,L),x||S||(x=!0,Lt(E))),L},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(L){var M=m;return function(){var I=m;m=M;try{return L.apply(this,arguments)}finally{m=I}}}})(Bd);Ud.exports=Bd;var hh=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=_,lt=hh;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,vi={};function Qn(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(vi[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,mh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Bu={};function gh(e){return wa.call(Bu,e)?!0:wa.call(Uu,e)?!1:mh.test(e)?Bu[e]=!0:(Uu[e]=!0,!1)}function vh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yh(e,t,n,r){if(t===null||typeof t>"u"||vh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ps=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ps,Rs);Fe[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ps,Rs);Fe[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ps,Rs);Fe[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ls(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yh(t,n,i,r)&&(n=null),r||i===null?gh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),zs=Symbol.for("react.forward_ref"),Ca=Symbol.for("react.suspense"),ka=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),bu=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Oo;function qr(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Io=!1;function $o(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function xh(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function Ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Jn:return"Portal";case Sa:return"Profiler";case Ds:return"StrictMode";case Ca:return"Suspense";case ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wd:return(e.displayName||"Context")+".Consumer";case Vd:return(e._context.displayName||"Context")+".Provider";case zs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}function wh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ea(t);case 8:return t===Ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sh(e){var t=Kd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=Sh(e))}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gd(e,t){t=t.checked,t!=null&&Ls(e,"checked",t,!1)}function Na(e,t){Gd(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_a(e,t.type,n):t.hasOwnProperty("defaultValue")&&_a(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _a(e,t,n){(t!=="number"||Pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ei=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ei(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Xd(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Jd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ch=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){Ch.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function qd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function e0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kh=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(kh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,pr=null,hr=null;function Ku(e){if(e=Ui(e)){if(typeof Ta!="function")throw Error(R(280));var t=e.stateNode;t&&(t=uo(t),Ta(e.stateNode,e.type,t))}}function t0(e){pr?hr?hr.push(e):hr=[e]:pr=e}function n0(){if(pr){var e=pr,t=hr;if(hr=pr=null,Ku(e),t)for(e=0;e<t.length;e++)Ku(t[e])}}function r0(e,t){return e(t)}function i0(){}var Uo=!1;function l0(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return r0(e,t,n)}finally{Uo=!1,(pr!==null||hr!==null)&&(i0(),n0())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Fa=!1;if(Kt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{Fa=!1}function Eh(e,t,n,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var oi=!1,Rl=null,Ll=!1,Ma=null,jh={onError:function(e){oi=!0,Rl=e}};function Nh(e,t,n,r,i,l,o,a,s){oi=!1,Rl=null,Eh.apply(jh,arguments)}function _h(e,t,n,r,i,l,o,a,s){if(Nh.apply(this,arguments),oi){if(oi){var u=Rl;oi=!1,Rl=null}else throw Error(R(198));Ll||(Ll=!0,Ma=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function o0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yu(e){if(Kn(e)!==e)throw Error(R(188))}function Ph(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Yu(i),e;if(l===r)return Yu(i),t;l=l.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function a0(e){return e=Ph(e),e!==null?s0(e):null}function s0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=s0(e);if(t!==null)return t;e=e.sibling}return null}var u0=lt.unstable_scheduleCallback,Gu=lt.unstable_cancelCallback,Rh=lt.unstable_shouldYield,Lh=lt.unstable_requestPaint,ve=lt.unstable_now,Dh=lt.unstable_getCurrentPriorityLevel,Ms=lt.unstable_ImmediatePriority,c0=lt.unstable_UserBlockingPriority,Dl=lt.unstable_NormalPriority,zh=lt.unstable_LowPriority,d0=lt.unstable_IdlePriority,lo=null,Ot=null;function Th(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Ah,Fh=Math.log,Mh=Math.LN2;function Ah(e){return e>>>=0,e===0?32:31-(Fh(e)/Mh|0)|0}var Zi=64,Ji=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ti(a):(l&=o,l!==0&&(r=ti(l)))}else o=n&~i,o!==0?r=ti(o):l!==0&&(r=ti(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Oh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ih(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Nt(l),a=1<<o,s=i[o];s===-1?(!(a&n)||a&r)&&(i[o]=Oh(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function f0(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function Bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function $h(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function p0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var h0,Os,m0,g0,v0,Oa=!1,qi=[],dn=null,fn=null,pn=null,wi=new Map,Si=new Map,an=[],Uh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function br(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Os(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bh(e,t,n,r,i){switch(t){case"focusin":return dn=br(dn,e,t,n,r,i),!0;case"dragenter":return fn=br(fn,e,t,n,r,i),!0;case"mouseover":return pn=br(pn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return wi.set(l,br(wi.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Si.set(l,br(Si.get(l)||null,e,t,n,r,i)),!0}return!1}function y0(e){var t=Ln(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=o0(n),t!==null){e.blockedOn=t,v0(e.priority,function(){m0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);za=r,n.target.dispatchEvent(r),za=null}else return t=Ui(n),t!==null&&Os(t),e.blockedOn=n,!1;t.shift()}return!0}function Zu(e,t,n){pl(e)&&n.delete(t)}function bh(){Oa=!1,dn!==null&&pl(dn)&&(dn=null),fn!==null&&pl(fn)&&(fn=null),pn!==null&&pl(pn)&&(pn=null),wi.forEach(Zu),Si.forEach(Zu)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Oa||(Oa=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,bh)))}function Ci(e){function t(i){return Hr(i,e)}if(0<qi.length){Hr(qi[0],e);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Hr(dn,e),fn!==null&&Hr(fn,e),pn!==null&&Hr(pn,e),wi.forEach(t),Si.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&an.shift()}var mr=Zt.ReactCurrentBatchConfig,Tl=!0;function Hh(e,t,n,r){var i=q,l=mr.transition;mr.transition=null;try{q=1,Is(e,t,n,r)}finally{q=i,mr.transition=l}}function Vh(e,t,n,r){var i=q,l=mr.transition;mr.transition=null;try{q=4,Is(e,t,n,r)}finally{q=i,mr.transition=l}}function Is(e,t,n,r){if(Tl){var i=Ia(e,t,n,r);if(i===null)Zo(e,t,r,Fl,n),Xu(e,r);else if(Bh(i,e,t,n,r))r.stopPropagation();else if(Xu(e,r),t&4&&-1<Uh.indexOf(e)){for(;i!==null;){var l=Ui(i);if(l!==null&&h0(l),l=Ia(e,t,n,r),l===null&&Zo(e,t,r,Fl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var Fl=null;function Ia(e,t,n,r){if(Fl=null,e=Fs(r),e=Ln(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=o0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fl=e,null}function x0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dh()){case Ms:return 1;case c0:return 4;case Dl:case zh:return 16;case d0:return 536870912;default:return 16}default:return 16}}var un=null,$s=null,hl=null;function w0(){if(hl)return hl;var e,t=$s,n=t.length,r,i="value"in un?un.value:un.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return hl=i.slice(e,1<r?1-r:void 0)}function ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Ju(){return!1}function at(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?el:Ju,this.isPropagationStopped=Ju,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=at(zr),$i=fe({},zr,{view:0,detail:0}),Wh=at($i),bo,Ho,Vr,oo=fe({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(bo=e.screenX-Vr.screenX,Ho=e.screenY-Vr.screenY):Ho=bo=0,Vr=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),qu=at(oo),Qh=fe({},oo,{dataTransfer:0}),Kh=at(Qh),Yh=fe({},$i,{relatedTarget:0}),Vo=at(Yh),Gh=fe({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xh=at(Gh),Zh=fe({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jh=at(Zh),qh=fe({},zr,{data:0}),ec=at(qh),e1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n1[e])?!!t[e]:!1}function Bs(){return r1}var i1=fe({},$i,{key:function(e){if(e.key){var t=e1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l1=at(i1),o1=fe({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=at(o1),a1=fe({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),s1=at(a1),u1=fe({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=at(u1),d1=fe({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=at(d1),p1=[9,13,27,32],bs=Kt&&"CompositionEvent"in window,ai=null;Kt&&"documentMode"in document&&(ai=document.documentMode);var h1=Kt&&"TextEvent"in window&&!ai,S0=Kt&&(!bs||ai&&8<ai&&11>=ai),nc=" ",rc=!1;function C0(e,t){switch(e){case"keyup":return p1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function m1(e,t){switch(e){case"compositionend":return k0(t);case"keypress":return t.which!==32?null:(rc=!0,nc);case"textInput":return e=t.data,e===nc&&rc?null:e;default:return null}}function g1(e,t){if(er)return e==="compositionend"||!bs&&C0(e,t)?(e=w0(),hl=$s=un=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return S0&&t.locale!=="ko"?null:t.data;default:return null}}var v1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v1[e.type]:t==="textarea"}function E0(e,t,n,r){t0(r),t=Ml(t,"onChange"),0<t.length&&(n=new Us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,ki=null;function y1(e){M0(e,0)}function ao(e){var t=rr(e);if(Yd(t))return e}function x1(e,t){if(e==="change")return t}var j0=!1;if(Kt){var Wo;if(Kt){var Qo="oninput"in document;if(!Qo){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),Qo=typeof lc.oninput=="function"}Wo=Qo}else Wo=!1;j0=Wo&&(!document.documentMode||9<document.documentMode)}function oc(){si&&(si.detachEvent("onpropertychange",N0),ki=si=null)}function N0(e){if(e.propertyName==="value"&&ao(ki)){var t=[];E0(t,ki,e,Fs(e)),l0(y1,t)}}function w1(e,t,n){e==="focusin"?(oc(),si=t,ki=n,si.attachEvent("onpropertychange",N0)):e==="focusout"&&oc()}function S1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(ki)}function C1(e,t){if(e==="click")return ao(t)}function k1(e,t){if(e==="input"||e==="change")return ao(t)}function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:E1;function Ei(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wa.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,t){var n=ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function _0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P0(){for(var e=window,t=Pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j1(e){var t=P0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&Hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=sc(n,l);var o=sc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var N1=Kt&&"documentMode"in document&&11>=document.documentMode,tr=null,$a=null,ui=null,Ua=!1;function uc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||tr==null||tr!==Pl(r)||(r=tr,"selectionStart"in r&&Hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ei(ui,r)||(ui=r,r=Ml($a,"onSelect"),0<r.length&&(t=new Us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Ko={},R0={};Kt&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function so(e){if(Ko[e])return Ko[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in R0)return Ko[e]=t[n];return e}var L0=so("animationend"),D0=so("animationiteration"),z0=so("animationstart"),T0=so("transitionend"),F0=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){F0.set(e,t),Qn(t,[e])}for(var Yo=0;Yo<cc.length;Yo++){var Go=cc[Yo],_1=Go.toLowerCase(),P1=Go[0].toUpperCase()+Go.slice(1);Cn(_1,"on"+P1)}Cn(L0,"onAnimationEnd");Cn(D0,"onAnimationIteration");Cn(z0,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(T0,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_h(r,t,void 0,e),e.currentTarget=null}function M0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;dc(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;dc(i,a,u),l=s}}}if(Ll)throw e=Ma,Ll=!1,Ma=null,e}function ie(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(A0(t,e,2,!1),n.add(r))}function Xo(e,t,n){var r=0;t&&(r|=4),A0(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[nl]){e[nl]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(R1.has(n)||Xo(n,!1,e),Xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Xo("selectionchange",!1,t))}}function A0(e,t,n,r){switch(x0(t)){case 1:var i=Hh;break;case 4:i=Vh;break;default:i=Is}n=i.bind(null,t,n,e),i=void 0,!Fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ln(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}l0(function(){var u=l,d=Fs(n),v=[];e:{var m=F0.get(e);if(m!==void 0){var S=Us,x=e;switch(e){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":S=l1;break;case"focusin":x="focus",S=Vo;break;case"focusout":x="blur",S=Vo;break;case"beforeblur":case"afterblur":S=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=s1;break;case L0:case D0:case z0:S=Xh;break;case T0:S=c1;break;case"scroll":S=Wh;break;case"wheel":S=f1;break;case"copy":case"cut":case"paste":S=Jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=tc}var w=(t&4)!==0,P=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,g;f!==null;){g=f;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,h!==null&&(p=xi(f,h),p!=null&&w.push(Ni(f,p,g)))),P)break;f=f.return}0<w.length&&(m=new S(m,x,null,n,d),v.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==za&&(x=n.relatedTarget||n.fromElement)&&(Ln(x)||x[Yt]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=u,x=x?Ln(x):null,x!==null&&(P=Kn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=u),S!==x)){if(w=qu,p="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=tc,p="onPointerLeave",h="onPointerEnter",f="pointer"),P=S==null?m:rr(S),g=x==null?m:rr(x),m=new w(p,f+"leave",S,n,d),m.target=P,m.relatedTarget=g,p=null,Ln(d)===u&&(w=new w(h,f+"enter",x,n,d),w.target=g,w.relatedTarget=P,p=w),P=p,S&&x)t:{for(w=S,h=x,f=0,g=w;g;g=Xn(g))f++;for(g=0,p=h;p;p=Xn(p))g++;for(;0<f-g;)w=Xn(w),f--;for(;0<g-f;)h=Xn(h),g--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break t;w=Xn(w),h=Xn(h)}w=null}else w=null;S!==null&&fc(v,m,S,w,!1),x!==null&&P!==null&&fc(v,P,x,w,!0)}}e:{if(m=u?rr(u):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var E=x1;else if(ic(m))if(j0)E=k1;else{E=S1;var N=w1}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=C1);if(E&&(E=E(e,u))){E0(v,E,n,d);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&_a(m,"number",m.value)}switch(N=u?rr(u):window,e){case"focusin":(ic(N)||N.contentEditable==="true")&&(tr=N,$a=u,ui=null);break;case"focusout":ui=$a=tr=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,uc(v,n,d);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":uc(v,n,d)}var k;if(bs)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else er?C0(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(S0&&n.locale!=="ko"&&(er||D!=="onCompositionStart"?D==="onCompositionEnd"&&er&&(k=w0()):(un=d,$s="value"in un?un.value:un.textContent,er=!0)),N=Ml(u,D),0<N.length&&(D=new ec(D,e,null,n,d),v.push({event:D,listeners:N}),k?D.data=k:(k=k0(n),k!==null&&(D.data=k)))),(k=h1?m1(e,n):g1(e,n))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(d=new ec("onBeforeInput","beforeinput",null,n,d),v.push({event:d,listeners:u}),d.data=k))}M0(v,t)})}function Ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=xi(e,n),l!=null&&r.unshift(Ni(e,l,i)),l=xi(e,t),l!=null&&r.push(Ni(e,l,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=xi(n,l),s!=null&&o.unshift(Ni(n,s,a))):i||(s=xi(n,l),s!=null&&o.push(Ni(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var L1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function pc(e){return(typeof e=="string"?e:""+e).replace(L1,`
`).replace(D1,"")}function rl(e,t,n){if(t=pc(t),pc(e)!==t&&n)throw Error(R(425))}function Al(){}var Ba=null,ba=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,z1=typeof clearTimeout=="function"?clearTimeout:void 0,hc=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof hc<"u"?function(e){return hc.resolve(null).then(e).catch(F1)}:Va;function F1(e){setTimeout(function(){throw e})}function Jo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ci(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),At="__reactFiber$"+Tr,_i="__reactProps$"+Tr,Yt="__reactContainer$"+Tr,Wa="__reactEvents$"+Tr,M1="__reactListeners$"+Tr,A1="__reactHandles$"+Tr;function Ln(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mc(e);e!==null;){if(n=e[At])return n;e=mc(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[At]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function uo(e){return e[_i]||null}var Qa=[],ir=-1;function kn(e){return{current:e}}function oe(e){0>ir||(e.current=Qa[ir],Qa[ir]=null,ir--)}function re(e,t){ir++,Qa[ir]=e.current,e.current=t}var Sn={},$e=kn(Sn),Xe=kn(!1),$n=Sn;function wr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function Ol(){oe(Xe),oe($e)}function gc(e,t,n){if($e.current!==Sn)throw Error(R(168));re($e,t),re(Xe,n)}function O0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,wh(e)||"Unknown",i));return fe({},n,r)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,$n=$e.current,re($e,e),re(Xe,Xe.current),!0}function vc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=O0(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,oe(Xe),oe($e),re($e,e)):oe(Xe),re(Xe,n)}var bt=null,co=!1,qo=!1;function I0(e){bt===null?bt=[e]:bt.push(e)}function O1(e){co=!0,I0(e)}function En(){if(!qo&&bt!==null){qo=!0;var e=0,t=q;try{var n=bt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,co=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),u0(Ms,En),i}finally{q=t,qo=!1}}return null}var lr=[],or=0,$l=null,Ul=0,dt=[],ft=0,Un=null,Ht=1,Vt="";function Pn(e,t){lr[or++]=Ul,lr[or++]=$l,$l=e,Ul=t}function $0(e,t,n){dt[ft++]=Ht,dt[ft++]=Vt,dt[ft++]=Un,Un=e;var r=Ht;e=Vt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var l=32-Nt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-Nt(t)+i|n<<i|r,Vt=l+e}else Ht=1<<l|n<<i|r,Vt=e}function Vs(e){e.return!==null&&(Pn(e,1),$0(e,1,0))}function Ws(e){for(;e===$l;)$l=lr[--or],lr[or]=null,Ul=lr[--or],lr[or]=null;for(;e===Un;)Un=dt[--ft],dt[ft]=null,Vt=dt[--ft],dt[ft]=null,Ht=dt[--ft],dt[ft]=null}var it=null,rt=null,se=!1,jt=null;function U0(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,rt=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(se){var t=rt;if(t){var n=t;if(!yc(e,t)){if(Ka(e))throw Error(R(418));t=hn(n.nextSibling);var r=it;t&&yc(e,t)?U0(r,n):(e.flags=e.flags&-4097|2,se=!1,it=e)}}else{if(Ka(e))throw Error(R(418));e.flags=e.flags&-4097|2,se=!1,it=e}}}function xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function il(e){if(e!==it)return!1;if(!se)return xc(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=rt)){if(Ka(e))throw B0(),Error(R(418));for(;t;)U0(e,t),t=hn(t.nextSibling)}if(xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?hn(e.stateNode.nextSibling):null;return!0}function B0(){for(var e=rt;e;)e=hn(e.nextSibling)}function Sr(){rt=it=null,se=!1}function Qs(e){jt===null?jt=[e]:jt.push(e)}var I1=Zt.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Bl=kn(null),bl=null,ar=null,Ks=null;function Ys(){Ks=ar=bl=null}function Gs(e){var t=Bl.current;oe(Bl),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){bl=e,Ks=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(bl===null)throw Error(R(308));ar=e,bl.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var Dn=null;function Xs(e){Dn===null?Dn=[e]:Dn.push(e)}function b0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Xs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hl(e,t,n,r){var i=e.updateQueue;on=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(l!==null){var v=i.baseState;o=0,d=u=s=null,a=l;do{var m=a.lane,S=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(m=t,S=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){v=x.call(S,v,m);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(S,v,m):x,m==null)break e;v=fe({},v,m);break e;case 2:on=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=S,s=v):d=d.next=S,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(s=v),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=v}}function Sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var V0=new bd.Component().refs;function Xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=vn(e),l=Wt(r,i);l.payload=t,n!=null&&(l.callback=n),t=mn(e,l,i),t!==null&&(_t(t,e,i,r),gl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=vn(e),l=Wt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mn(e,l,i),t!==null&&(_t(t,e,i,r),gl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=vn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(_t(t,e,r,n),gl(t,e,r))}};function Cc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,l):!0}function W0(e,t,n){var r=!1,i=Sn,l=t.contextType;return typeof l=="object"&&l!==null?l=mt(l):(i=Ze(t)?$n:$e.current,r=t.contextTypes,l=(r=r!=null)?wr(e,i):Sn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=V0,Zs(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=mt(l):(l=Ze(t)?$n:$e.current,i.context=wr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Xa(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fo.enqueueReplaceState(i,i.state,null),Hl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;a===V0&&(a=i.refs={}),o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ll(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function Q0(e){function t(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=yn(h,f),h.index=0,h.sibling=null,h}function l(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,g,p){return f===null||f.tag!==6?(f=oa(g,h.mode,p),f.return=h,f):(f=i(f,g),f.return=h,f)}function s(h,f,g,p){var E=g.type;return E===qn?d(h,f,g.props.children,p,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ln&&Ec(E)===f.type)?(p=i(f,g.props),p.ref=Wr(h,f,g),p.return=h,p):(p=Cl(g.type,g.key,g.props,null,h.mode,p),p.ref=Wr(h,f,g),p.return=h,p)}function u(h,f,g,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=aa(g,h.mode,p),f.return=h,f):(f=i(f,g.children||[]),f.return=h,f)}function d(h,f,g,p,E){return f===null||f.tag!==7?(f=An(g,h.mode,p,E),f.return=h,f):(f=i(f,g),f.return=h,f)}function v(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=oa(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yi:return g=Cl(f.type,f.key,f.props,null,h.mode,g),g.ref=Wr(h,null,f),g.return=h,g;case Jn:return f=aa(f,h.mode,g),f.return=h,f;case ln:var p=f._init;return v(h,p(f._payload),g)}if(ei(f)||Ur(f))return f=An(f,h.mode,g,null),f.return=h,f;ll(h,f)}return null}function m(h,f,g,p){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(h,f,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yi:return g.key===E?s(h,f,g,p):null;case Jn:return g.key===E?u(h,f,g,p):null;case ln:return E=g._init,m(h,f,E(g._payload),p)}if(ei(g)||Ur(g))return E!==null?null:d(h,f,g,p,null);ll(h,g)}return null}function S(h,f,g,p,E){if(typeof p=="string"&&p!==""||typeof p=="number")return h=h.get(g)||null,a(f,h,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return h=h.get(p.key===null?g:p.key)||null,s(f,h,p,E);case Jn:return h=h.get(p.key===null?g:p.key)||null,u(f,h,p,E);case ln:var N=p._init;return S(h,f,g,N(p._payload),E)}if(ei(p)||Ur(p))return h=h.get(g)||null,d(f,h,p,E,null);ll(f,p)}return null}function x(h,f,g,p){for(var E=null,N=null,k=f,D=f=0,O=null;k!==null&&D<g.length;D++){k.index>D?(O=k,k=null):O=k.sibling;var $=m(h,k,g[D],p);if($===null){k===null&&(k=O);break}e&&k&&$.alternate===null&&t(h,k),f=l($,f,D),N===null?E=$:N.sibling=$,N=$,k=O}if(D===g.length)return n(h,k),se&&Pn(h,D),E;if(k===null){for(;D<g.length;D++)k=v(h,g[D],p),k!==null&&(f=l(k,f,D),N===null?E=k:N.sibling=k,N=k);return se&&Pn(h,D),E}for(k=r(h,k);D<g.length;D++)O=S(k,h,D,g[D],p),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?D:O.key),f=l(O,f,D),N===null?E=O:N.sibling=O,N=O);return e&&k.forEach(function(X){return t(h,X)}),se&&Pn(h,D),E}function w(h,f,g,p){var E=Ur(g);if(typeof E!="function")throw Error(R(150));if(g=E.call(g),g==null)throw Error(R(151));for(var N=E=null,k=f,D=f=0,O=null,$=g.next();k!==null&&!$.done;D++,$=g.next()){k.index>D?(O=k,k=null):O=k.sibling;var X=m(h,k,$.value,p);if(X===null){k===null&&(k=O);break}e&&k&&X.alternate===null&&t(h,k),f=l(X,f,D),N===null?E=X:N.sibling=X,N=X,k=O}if($.done)return n(h,k),se&&Pn(h,D),E;if(k===null){for(;!$.done;D++,$=g.next())$=v(h,$.value,p),$!==null&&(f=l($,f,D),N===null?E=$:N.sibling=$,N=$);return se&&Pn(h,D),E}for(k=r(h,k);!$.done;D++,$=g.next())$=S(k,h,D,$.value,p),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?D:$.key),f=l($,f,D),N===null?E=$:N.sibling=$,N=$);return e&&k.forEach(function(ke){return t(h,ke)}),se&&Pn(h,D),E}function P(h,f,g,p){if(typeof g=="object"&&g!==null&&g.type===qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yi:e:{for(var E=g.key,N=f;N!==null;){if(N.key===E){if(E=g.type,E===qn){if(N.tag===7){n(h,N.sibling),f=i(N,g.props.children),f.return=h,h=f;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ln&&Ec(E)===N.type){n(h,N.sibling),f=i(N,g.props),f.ref=Wr(h,N,g),f.return=h,h=f;break e}n(h,N);break}else t(h,N);N=N.sibling}g.type===qn?(f=An(g.props.children,h.mode,p,g.key),f.return=h,h=f):(p=Cl(g.type,g.key,g.props,null,h.mode,p),p.ref=Wr(h,f,g),p.return=h,h=p)}return o(h);case Jn:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(h,f.sibling),f=i(f,g.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=aa(g,h.mode,p),f.return=h,h=f}return o(h);case ln:return N=g._init,P(h,f,N(g._payload),p)}if(ei(g))return x(h,f,g,p);if(Ur(g))return w(h,f,g,p);ll(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,g),f.return=h,h=f):(n(h,f),f=oa(g,h.mode,p),f.return=h,h=f),o(h)):n(h,f)}return P}var Cr=Q0(!0),K0=Q0(!1),Bi={},It=kn(Bi),Pi=kn(Bi),Ri=kn(Bi);function zn(e){if(e===Bi)throw Error(R(174));return e}function Js(e,t){switch(re(Ri,t),re(Pi,e),re(It,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}oe(It),re(It,t)}function kr(){oe(It),oe(Pi),oe(Ri)}function Y0(e){zn(Ri.current);var t=zn(It.current),n=Ra(t,e.type);t!==n&&(re(Pi,e),re(It,n))}function qs(e){Pi.current===e&&(oe(It),oe(Pi))}var ce=kn(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=[];function eu(){for(var e=0;e<ea.length;e++)ea[e]._workInProgressVersionPrimary=null;ea.length=0}var vl=Zt.ReactCurrentDispatcher,ta=Zt.ReactCurrentBatchConfig,Bn=0,de=null,Ee=null,_e=null,Wl=!1,ci=!1,Li=0,$1=0;function Ae(){throw Error(R(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,i,l){if(Bn=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vl.current=e===null||e.memoizedState===null?H1:V1,e=n(r,i),ci){l=0;do{if(ci=!1,Li=0,25<=l)throw Error(R(301));l+=1,_e=Ee=null,t.updateQueue=null,vl.current=W1,e=n(r,i)}while(ci)}if(vl.current=Ql,t=Ee!==null&&Ee.next!==null,Bn=0,_e=Ee=de=null,Wl=!1,t)throw Error(R(300));return e}function ru(){var e=Li!==0;return Li=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?de.memoizedState=_e=e:_e=_e.next=e,_e}function gt(){if(Ee===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=_e===null?de.memoizedState:_e.next;if(t!==null)_e=t,Ee=e;else{if(e===null)throw Error(R(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},_e===null?de.memoizedState=_e=e:_e=_e.next=e}return _e}function Di(e,t){return typeof t=="function"?t(e):t}function na(e){var t=gt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var d=u.lane;if((Bn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=v,o=r):s=s.next=v,de.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,Rt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,de.lanes|=l,bn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ra(e){var t=gt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Rt(l,t.memoizedState)||(Ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function G0(){}function X0(e,t){var n=de,r=gt(),i=t(),l=!Rt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ke=!0),r=r.queue,iu(q0.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,zi(9,J0.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(R(349));Bn&30||Z0(n,t,i)}return i}function Z0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function J0(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function q0(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function tf(e){var t=Gt(e,1);t!==null&&_t(t,e,1,-1)}function jc(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=b1.bind(null,de,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return gt().memoizedState}function yl(e,t,n,r){var i=Ft();de.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var i=gt();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var o=Ee.memoizedState;if(l=o.destroy,r!==null&&tu(r,o.deps)){i.memoizedState=zi(t,n,l,r);return}}de.flags|=e,i.memoizedState=zi(1|t,n,l,r)}function Nc(e,t){return yl(8390656,8,e,t)}function iu(e,t){return po(2048,8,e,t)}function rf(e,t){return po(4,2,e,t)}function lf(e,t){return po(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,of.bind(null,t,e),n)}function lu(){}function sf(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uf(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cf(e,t,n){return Bn&21?(Rt(n,t)||(n=f0(),de.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function U1(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ta.transition;ta.transition={};try{e(!1),t()}finally{q=n,ta.transition=r}}function df(){return gt().memoizedState}function B1(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))pf(t,n);else if(n=b0(e,t,n,r),n!==null){var i=be();_t(n,e,r,i),hf(n,t,r)}}function b1(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))pf(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rt(a,o)){var s=t.interleaved;s===null?(i.next=i,Xs(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=b0(e,t,i,r),n!==null&&(i=be(),_t(n,e,r,i),hf(n,t,r))}}function ff(e){var t=e.alternate;return e===de||t!==null&&t===de}function pf(e,t){ci=Wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var Ql={readContext:mt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},H1={readContext:mt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Nc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yl(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yl(4194308,4,e,t)},useInsertionEffect:function(e,t){return yl(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=B1.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:jc,useDebugValue:lu,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=jc(!1),t=e[0];return e=U1.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Ft();if(se){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Re===null)throw Error(R(349));Bn&30||Z0(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Nc(q0.bind(null,r,l,e),[e]),r.flags|=2048,zi(9,J0.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Re.identifierPrefix;if(se){var n=Vt,r=Ht;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V1={readContext:mt,useCallback:sf,useContext:mt,useEffect:iu,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:lf,useMemo:uf,useReducer:na,useRef:nf,useState:function(){return na(Di)},useDebugValue:lu,useDeferredValue:function(e){var t=gt();return cf(t,Ee.memoizedState,e)},useTransition:function(){var e=na(Di)[0],t=gt().memoizedState;return[e,t]},useMutableSource:G0,useSyncExternalStore:X0,useId:df,unstable_isNewReconciler:!1},W1={readContext:mt,useCallback:sf,useContext:mt,useEffect:iu,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:lf,useMemo:uf,useReducer:ra,useRef:nf,useState:function(){return ra(Di)},useDebugValue:lu,useDeferredValue:function(e){var t=gt();return Ee===null?t.memoizedState=e:cf(t,Ee.memoizedState,e)},useTransition:function(){var e=ra(Di)[0],t=gt().memoizedState;return[e,t]},useMutableSource:G0,useSyncExternalStore:X0,useId:df,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=xh(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function mf(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,ss=r),Ja(e,t)},n}function gf(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ja(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _c(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Q1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=o2.bind(null,e,t,n),t.then(e,e))}function Pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var K1=Zt.ReactCurrentOwner,Ke=!1;function Be(e,t,n,r){t.child=e===null?K0(t,null,n,r):Cr(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var l=t.ref;return gr(t,i),r=nu(e,t,n,r,l,i),n=ru(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(se&&n&&Vs(t),t.flags|=1,Be(e,t,r,i),t.child)}function Dc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!pu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vf(e,t,l,r,i)):(e=Cl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(o,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=yn(l,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ei(l,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return qa(e,t,n,r,i)}function yf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(ur,nt),nt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(ur,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,re(ur,nt),nt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,re(ur,nt),nt|=r;return Be(e,t,i,n),t.child}function xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qa(e,t,n,r,i){var l=Ze(n)?$n:$e.current;return l=wr(t,l),gr(t,i),n=nu(e,t,n,r,l,i),r=ru(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(se&&r&&Vs(t),t.flags|=1,Be(e,t,n,i),t.child)}function zc(e,t,n,r,i){if(Ze(n)){var l=!0;Il(t)}else l=!1;if(gr(t,i),t.stateNode===null)xl(e,t),W0(t,n,r),Za(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Ze(n)?$n:$e.current,u=wr(t,u));var d=n.getDerivedStateFromProps,v=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&kc(t,o,r,u),on=!1;var m=t.memoizedState;o.state=m,Hl(t,r,o,i),s=t.memoizedState,a!==r||m!==s||Xe.current||on?(typeof d=="function"&&(Xa(t,n,d,r),s=t.memoizedState),(a=on||Cc(t,n,a,r,m,s,u))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,H0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ct(t.type,a),o.props=u,v=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=mt(s):(s=Ze(n)?$n:$e.current,s=wr(t,s));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||m!==s)&&kc(t,o,r,s),on=!1,m=t.memoizedState,o.state=m,Hl(t,r,o,i);var x=t.memoizedState;a!==v||m!==x||Xe.current||on?(typeof S=="function"&&(Xa(t,n,S,r),x=t.memoizedState),(u=on||Cc(t,n,u,r,m,x,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return es(e,t,n,r,l,i)}function es(e,t,n,r,i,l){xf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&vc(t,n,!1),Xt(e,t,l);r=t.stateNode,K1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cr(t,e.child,null,l),t.child=Cr(t,null,a,l)):Be(e,t,a,l),t.memoizedState=r.state,i&&vc(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gc(e,t.context,!1),Js(e,t.containerInfo)}function Tc(e,t,n,r,i){return Sr(),Qs(i),t.flags|=256,Be(e,t,n,r),t.child}var ts={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sf(e,t,n){var r=t.pendingProps,i=ce.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ce,i&1),e===null)return Ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=go(o,r,0,null),e=An(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ns(n),t.memoizedState=ts,e):ou(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Y1(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=yn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=yn(a,l):(l=An(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ns(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ts,r}return l=e.child,e=l.sibling,r=yn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ou(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ol(e,t,n,r){return r!==null&&Qs(r),Cr(t,e.child,null,n),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y1(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ia(Error(R(422))),ol(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i,0,null),l=An(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Cr(t,e.child,null,o),t.child.memoizedState=ns(o),t.memoizedState=ts,l);if(!(t.mode&1))return ol(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(R(419)),r=ia(l,r,void 0),ol(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ke||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Gt(e,i),_t(r,e,i,-1))}return fu(),r=ia(Error(R(421))),ol(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=a2.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,rt=hn(i.nextSibling),it=t,se=!0,jt=null,e!==null&&(dt[ft++]=Ht,dt[ft++]=Vt,dt[ft++]=Un,Ht=e.id,Vt=e.overflow,Un=t),t=ou(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function la(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Cf(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Be(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),la(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}la(t,!0,n,null,l);break;case"together":la(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G1(e,t,n){switch(t.tag){case 3:wf(t),Sr();break;case 5:Y0(t);break;case 1:Ze(t.type)&&Il(t);break;case 4:Js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Bl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Sf(e,t,n):(re(ce,ce.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);re(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return Xt(e,t,n)}var kf,rs,Ef,jf;kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rs=function(){};Ef=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(It.current);var l=null;switch(n){case"input":i=ja(e,i),r=ja(e,r),l=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":i=Pa(e,i),r=Pa(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Al)}La(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function X1(e,t,n){var r=t.pendingProps;switch(Ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ze(t.type)&&Ol(),Oe(t),null;case 3:return r=t.stateNode,kr(),oe(Xe),oe($e),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(ds(jt),jt=null))),rs(e,t),Oe(t),null;case 5:qs(t);var i=zn(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)Ef(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Oe(t),null}if(e=zn(It.current),il(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[At]=t,r[_i]=l,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)ie(ni[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Hu(r,l),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ie("invalid",r);break;case"textarea":Wu(r,l),ie("invalid",r)}La(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&rl(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&rl(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Gi(r),Vu(r,l,!0);break;case"textarea":Gi(r),Qu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Al)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[At]=t,e[_i]=r,kf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Da(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)ie(ni[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Hu(e,r),i=ja(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Wu(e,r),i=Pa(e,r),ie("invalid",e);break;default:i=r}La(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?e0(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Jd(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&yi(e,s):typeof s=="number"&&yi(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(vi.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ie("scroll",e):s!=null&&Ls(e,l,s,o))}switch(n){case"input":Gi(e),Vu(e,r,!1);break;case"textarea":Gi(e),Qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fr(e,!!r.multiple,l,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=zn(Ri.current),zn(It.current),il(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(l=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Oe(t),null;case 13:if(oe(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&rt!==null&&t.mode&1&&!(t.flags&128))B0(),Sr(),t.flags|=98560,l=!1;else if(l=il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(R(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(R(317));l[At]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else jt!==null&&(ds(jt),jt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?je===0&&(je=3):fu())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return kr(),rs(e,t),e===null&&ji(t.stateNode.containerInfo),Oe(t),null;case 10:return Gs(t.type._context),Oe(t),null;case 17:return Ze(t.type)&&Ol(),Oe(t),null;case 19:if(oe(ce),l=t.memoizedState,l===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Qr(l,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vl(e),o!==null){for(t.flags|=128,Qr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ce,ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&ve()>jr&&(t.flags|=128,r=!0,Qr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!se)return Oe(t),null}else 2*ve()-l.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ve(),t.sibling=null,n=ce.current,re(ce,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Z1(e,t){switch(Ws(t),t.tag){case 1:return Ze(t.type)&&Ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),oe(Xe),oe($e),eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qs(t),null;case 13:if(oe(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ce),null;case 4:return kr(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var al=!1,Ie=!1,J1=typeof WeakSet=="function"?WeakSet:Set,T=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function is(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Mc=!1;function q1(e,t){if(Ba=Tl,e=P0(),Hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,u=0,d=0,v=e,m=null;t:for(;;){for(var S;v!==n||i!==0&&v.nodeType!==3||(a=o+i),v!==l||r!==0&&v.nodeType!==3||(s=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(S=v.firstChild)!==null;)m=v,v=S;for(;;){if(v===e)break t;if(m===n&&++u===i&&(a=o),m===l&&++d===r&&(s=o),(S=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ba={focusedElem:e,selectionRange:n},Tl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,P=x.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ct(t.type,w),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(p){pe(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return x=Mc,Mc=!1,x}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&is(t,n,l)}i=i.next}while(i!==r)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nf(e){var t=e.alternate;t!==null&&(e.alternate=null,Nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[_i],delete t[Wa],delete t[M1],delete t[A1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Al));else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}var ze=null,kt=!1;function tn(e,t,n){for(n=n.child;n!==null;)Pf(e,t,n),n=n.sibling}function Pf(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:Ie||sr(n,t);case 6:var r=ze,i=kt;ze=null,tn(e,t,n),ze=r,kt=i,ze!==null&&(kt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(kt?(e=ze,n=n.stateNode,e.nodeType===8?Jo(e.parentNode,n):e.nodeType===1&&Jo(e,n),Ci(e)):Jo(ze,n.stateNode));break;case 4:r=ze,i=kt,ze=n.stateNode.containerInfo,kt=!0,tn(e,t,n),ze=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&is(n,t,o),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!Ie&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,t,a)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,tn(e,t,n),Ie=r):tn(e,t,n);break;default:tn(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new J1),t.forEach(function(r){var i=s2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,kt=!1;break e;case 3:ze=a.stateNode.containerInfo,kt=!0;break e;case 4:ze=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(ze===null)throw Error(R(160));Pf(l,o,i),ze=null,kt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rf(t,e),t=t.sibling}function Rf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Tt(e),r&4){try{di(3,e,e.return),ho(3,e)}catch(w){pe(e,e.return,w)}try{di(5,e,e.return)}catch(w){pe(e,e.return,w)}}break;case 1:St(t,e),Tt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(St(t,e),Tt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(w){pe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Gd(i,l),Da(a,o);var u=Da(a,l);for(o=0;o<s.length;o+=2){var d=s[o],v=s[o+1];d==="style"?e0(i,v):d==="dangerouslySetInnerHTML"?Jd(i,v):d==="children"?yi(i,v):Ls(i,d,v,u)}switch(a){case"input":Na(i,l);break;case"textarea":Xd(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?fr(i,!!l.multiple,S,!1):m!==!!l.multiple&&(l.defaultValue!=null?fr(i,!!l.multiple,l.defaultValue,!0):fr(i,!!l.multiple,l.multiple?[]:"",!1))}i[_i]=l}catch(w){pe(e,e.return,w)}}break;case 6:if(St(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){pe(e,e.return,w)}}break;case 3:if(St(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(w){pe(e,e.return,w)}break;case 4:St(t,e),Tt(e);break;case 13:St(t,e),Tt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uu=ve())),r&4&&Oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||d,St(t,e),Ie=u):St(t,e),Tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(T=e,d=e.child;d!==null;){for(v=T=d;T!==null;){switch(m=T,S=m.child,m.tag){case 0:case 11:case 14:case 15:di(4,m,m.return);break;case 1:sr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){pe(r,n,w)}}break;case 5:sr(m,m.return);break;case 22:if(m.memoizedState!==null){$c(v);continue}}S!==null?(S.return=m,T=S):$c(v)}d=d.sibling}e:for(d=null,v=e;;){if(v.tag===5){if(d===null){d=v;try{i=v.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,s=v.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=qd("display",o))}catch(w){pe(e,e.return,w)}}}else if(v.tag===6){if(d===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(w){pe(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;d===v&&(d=null),v=v.return}d===v&&(d=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:St(t,e),Tt(e),r&4&&Oc(e);break;case 21:break;default:St(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var l=Ac(e);as(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ac(e);os(e,a,o);break;default:throw Error(R(161))}}catch(s){pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e2(e,t,n){T=e,Lf(e)}function Lf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ie;a=al;var u=Ie;if(al=o,(Ie=s)&&!u)for(T=i;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?Uc(i):s!==null?(s.return=o,T=s):Uc(i);for(;l!==null;)T=l,Lf(l),l=l.sibling;T=i,al=a,Ie=u}Ic(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):Ic(e)}}function Ic(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Sc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var v=d.dehydrated;v!==null&&Ci(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ie||t.flags&512&&ls(t)}catch(m){pe(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function $c(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Uc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ho(4,t)}catch(s){pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){pe(t,i,s)}}var l=t.return;try{ls(t)}catch(s){pe(t,l,s)}break;case 5:var o=t.return;try{ls(t)}catch(s){pe(t,o,s)}}}catch(s){pe(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var t2=Math.ceil,Kl=Zt.ReactCurrentDispatcher,au=Zt.ReactCurrentOwner,ht=Zt.ReactCurrentBatchConfig,G=0,Re=null,Ce=null,Te=0,nt=0,ur=kn(0),je=0,Ti=null,bn=0,mo=0,su=0,fi=null,Qe=null,uu=0,jr=1/0,Ut=null,Yl=!1,ss=null,gn=null,sl=!1,cn=null,Gl=0,pi=0,us=null,wl=-1,Sl=0;function be(){return G&6?ve():wl!==-1?wl:wl=ve()}function vn(e){return e.mode&1?G&2&&Te!==0?Te&-Te:I1.transition!==null?(Sl===0&&(Sl=f0()),Sl):(e=q,e!==0||(e=window.event,e=e===void 0?16:x0(e.type)),e):1}function _t(e,t,n,r){if(50<pi)throw pi=0,us=null,Error(R(185));Ii(e,n,r),(!(G&2)||e!==Re)&&(e===Re&&(!(G&2)&&(mo|=n),je===4&&sn(e,Te)),Je(e,r),n===1&&G===0&&!(t.mode&1)&&(jr=ve()+500,co&&En()))}function Je(e,t){var n=e.callbackNode;Ih(e,t);var r=zl(e,e===Re?Te:0);if(r===0)n!==null&&Gu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gu(n),t===1)e.tag===0?O1(Bc.bind(null,e)):I0(Bc.bind(null,e)),T1(function(){!(G&6)&&En()}),n=null;else{switch(p0(r)){case 1:n=Ms;break;case 4:n=c0;break;case 16:n=Dl;break;case 536870912:n=d0;break;default:n=Dl}n=If(n,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Df(e,t){if(wl=-1,Sl=0,G&6)throw Error(R(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=zl(e,e===Re?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xl(e,r);else{t=r;var i=G;G|=2;var l=Tf();(Re!==e||Te!==t)&&(Ut=null,jr=ve()+500,Mn(e,t));do try{i2();break}catch(a){zf(e,a)}while(!0);Ys(),Kl.current=l,G=i,Ce!==null?t=0:(Re=null,Te=0,t=je)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=cs(e,i))),t===1)throw n=Ti,Mn(e,0),sn(e,r),Je(e,ve()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!n2(i)&&(t=Xl(e,r),t===2&&(l=Aa(e),l!==0&&(r=l,t=cs(e,l))),t===1))throw n=Ti,Mn(e,0),sn(e,r),Je(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Rn(e,Qe,Ut);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=uu+500-ve(),10<t)){if(zl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Va(Rn.bind(null,e,Qe,Ut),t);break}Rn(e,Qe,Ut);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t2(r/1960))-r,10<r){e.timeoutHandle=Va(Rn.bind(null,e,Qe,Ut),r);break}Rn(e,Qe,Ut);break;case 5:Rn(e,Qe,Ut);break;default:throw Error(R(329))}}}return Je(e,ve()),e.callbackNode===n?Df.bind(null,e):null}function cs(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ds(t)),e}function ds(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function n2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Rt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~su,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Bc(e){if(G&6)throw Error(R(327));vr();var t=zl(e,0);if(!(t&1))return Je(e,ve()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=cs(e,r))}if(n===1)throw n=Ti,Mn(e,0),sn(e,t),Je(e,ve()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Qe,Ut),Je(e,ve()),null}function cu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(jr=ve()+500,co&&En())}}function Hn(e){cn!==null&&cn.tag===0&&!(G&6)&&vr();var t=G;G|=1;var n=ht.transition,r=q;try{if(ht.transition=null,q=1,e)return e()}finally{q=r,ht.transition=n,G=t,!(G&6)&&En()}}function du(){nt=ur.current,oe(ur)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,z1(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:kr(),oe(Xe),oe($e),eu();break;case 5:qs(r);break;case 4:kr();break;case 13:oe(ce);break;case 19:oe(ce);break;case 10:Gs(r.type._context);break;case 22:case 23:du()}n=n.return}if(Re=e,Ce=e=yn(e.current,null),Te=nt=t,je=0,Ti=null,su=mo=bn=0,Qe=fi=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Dn=null}return e}function zf(e,t){do{var n=Ce;try{if(Ys(),vl.current=Ql,Wl){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(Bn=0,_e=Ee=de=null,ci=!1,Li=0,au.current=null,n===null||n.return===null){je=1,Ti=t,Ce=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=Te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,v=d.tag;if(!(d.mode&1)&&(v===0||v===11||v===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=Pc(o);if(S!==null){S.flags&=-257,Rc(S,o,a,l,t),S.mode&1&&_c(l,u,t),t=S,s=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){_c(l,u,t),fu();break e}s=Error(R(426))}}else if(se&&a.mode&1){var P=Pc(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Rc(P,o,a,l,t),Qs(Er(s,a));break e}}l=s=Er(s,a),je!==4&&(je=2),fi===null?fi=[l]:fi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=mf(l,s,t);wc(l,h);break e;case 1:a=s;var f=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gn===null||!gn.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var p=gf(l,a,t);wc(l,p);break e}}l=l.return}while(l!==null)}Mf(n)}catch(E){t=E,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Tf(){var e=Kl.current;return Kl.current=Ql,e===null?Ql:e}function fu(){(je===0||je===3||je===2)&&(je=4),Re===null||!(bn&268435455)&&!(mo&268435455)||sn(Re,Te)}function Xl(e,t){var n=G;G|=2;var r=Tf();(Re!==e||Te!==t)&&(Ut=null,Mn(e,t));do try{r2();break}catch(i){zf(e,i)}while(!0);if(Ys(),G=n,Kl.current=r,Ce!==null)throw Error(R(261));return Re=null,Te=0,je}function r2(){for(;Ce!==null;)Ff(Ce)}function i2(){for(;Ce!==null&&!Rh();)Ff(Ce)}function Ff(e){var t=Of(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Mf(e):Ce=t,au.current=null}function Mf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z1(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ce=null;return}}else if(n=X1(n,t,nt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);je===0&&(je=5)}function Rn(e,t,n){var r=q,i=ht.transition;try{ht.transition=null,q=1,l2(e,t,n,r)}finally{ht.transition=i,q=r}return null}function l2(e,t,n,r){do vr();while(cn!==null);if(G&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if($h(e,l),e===Re&&(Ce=Re=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,If(Dl,function(){return vr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ht.transition,ht.transition=null;var o=q;q=1;var a=G;G|=4,au.current=null,q1(e,n),Rf(n,e),j1(ba),Tl=!!Ba,ba=Ba=null,e.current=n,e2(n),Lh(),G=a,q=o,ht.transition=l}else e.current=n;if(sl&&(sl=!1,cn=e,Gl=i),l=e.pendingLanes,l===0&&(gn=null),Th(n.stateNode),Je(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yl)throw Yl=!1,e=ss,ss=null,e;return Gl&1&&e.tag!==0&&vr(),l=e.pendingLanes,l&1?e===us?pi++:(pi=0,us=e):pi=0,En(),null}function vr(){if(cn!==null){var e=p0(Gl),t=ht.transition,n=q;try{if(ht.transition=null,q=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Gl=0,G&6)throw Error(R(331));var i=G;for(G|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:di(8,d,l)}var v=d.child;if(v!==null)v.return=d,T=v;else for(;T!==null;){d=T;var m=d.sibling,S=d.return;if(Nf(d),d===u){T=null;break}if(m!==null){m.return=S,T=m;break}T=S}}}var x=l.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:di(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,T=h;break e}T=l.return}}var f=e.current;for(T=f;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ho(9,a)}}catch(E){pe(a,a.return,E)}if(a===o){T=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,T=p;break e}T=a.return}}if(G=i,En(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(lo,e)}catch{}r=!0}return r}finally{q=n,ht.transition=t}}return!1}function bc(e,t,n){t=Er(n,t),t=mf(e,t,1),e=mn(e,t,1),t=be(),e!==null&&(Ii(e,1,t),Je(e,t))}function pe(e,t,n){if(e.tag===3)bc(e,e,n);else for(;t!==null;){if(t.tag===3){bc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=Er(n,e),e=gf(t,e,1),t=mn(t,e,1),e=be(),t!==null&&(Ii(t,1,e),Je(t,e));break}}t=t.return}}function o2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Te&n)===n&&(je===4||je===3&&(Te&130023424)===Te&&500>ve()-uu?Mn(e,0):su|=n),Je(e,t)}function Af(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=be();e=Gt(e,t),e!==null&&(Ii(e,t,n),Je(e,n))}function a2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function s2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Af(e,n)}var Of;Of=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,G1(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,se&&t.flags&1048576&&$0(t,Ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xl(e,t),e=t.pendingProps;var i=wr(t,$e.current);gr(t,n),i=nu(null,t,r,e,i,n);var l=ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(l=!0,Il(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zs(t),i.updater=fo,t.stateNode=i,i._reactInternals=t,Za(t,r,e,n),t=es(null,t,r,!0,l,n)):(t.tag=0,se&&l&&Vs(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=c2(r),e=Ct(r,e),i){case 0:t=qa(null,t,r,e,n);break e;case 1:t=zc(null,t,r,e,n);break e;case 11:t=Lc(null,t,r,e,n);break e;case 14:t=Dc(null,t,r,Ct(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),qa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),zc(e,t,r,i,n);case 3:e:{if(wf(t),e===null)throw Error(R(387));r=t.pendingProps,l=t.memoizedState,i=l.element,H0(e,t),Hl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Er(Error(R(423)),t),t=Tc(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(R(424)),t),t=Tc(e,t,r,n,i);break e}else for(rt=hn(t.stateNode.containerInfo.firstChild),it=t,se=!0,jt=null,n=K0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=Xt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Y0(t),e===null&&Ya(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ha(r,i)?o=null:l!==null&&Ha(r,l)&&(t.flags|=32),xf(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&Ya(t),null;case 13:return Sf(e,t,n);case 4:return Js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Lc(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,re(Bl,r._currentValue),r._currentValue=o,l!==null)if(Rt(l.value,o)){if(l.children===i.children&&!Xe.current){t=Xt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ga(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ga(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=mt(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),Dc(e,t,r,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),xl(e,t),t.tag=1,Ze(r)?(e=!0,Il(t)):e=!1,gr(t,n),W0(t,r,i),Za(t,r,i,n),es(null,t,r,!0,e,n);case 19:return Cf(e,t,n);case 22:return yf(e,t,n)}throw Error(R(156,t.tag))};function If(e,t){return u0(e,t)}function u2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new u2(e,t,n,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function c2(e){if(typeof e=="function")return pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zs)return 11;if(e===Ts)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")pu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qn:return An(n.children,i,l,t);case Ds:o=8,i|=8;break;case Sa:return e=pt(12,n,t,i|2),e.elementType=Sa,e.lanes=l,e;case Ca:return e=pt(13,n,t,i),e.elementType=Ca,e.lanes=l,e;case ka:return e=pt(19,n,t,i),e.elementType=ka,e.lanes=l,e;case Qd:return go(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vd:o=10;break e;case Wd:o=9;break e;case zs:o=11;break e;case Ts:o=14;break e;case ln:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=pt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function An(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Qd,e.lanes=n,e.stateNode={isHidden:!1},e}function oa(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function aa(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function d2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hu(e,t,n,r,i,l,o,a,s){return e=new d2(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=pt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(l),e}function f2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Sn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ze(n))return O0(e,n,t)}return t}function Uf(e,t,n,r,i,l,o,a,s){return e=hu(n,r,!0,e,i,l,o,a,s),e.context=$f(null),n=e.current,r=be(),i=vn(n),l=Wt(r,i),l.callback=t??null,mn(n,l,i),e.current.lanes=i,Ii(e,i,r),Je(e,r),e}function vo(e,t,n,r){var i=t.current,l=be(),o=vn(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,o),e!==null&&(_t(e,i,o,l),gl(e,i,o)),o}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}function p2(){return null}var Bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}yo.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));vo(e,t,null,null)};yo.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){vo(null,e,null,null)}),t[Yt]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=g0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&y0(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vc(){}function h2(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Zl(o);l.call(u)}}var o=Uf(t,r,e,0,null,!1,!1,"",Vc);return e._reactRootContainer=o,e[Yt]=o.current,ji(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zl(s);a.call(u)}}var s=hu(e,0,!1,null,null,!1,!1,"",Vc);return e._reactRootContainer=s,e[Yt]=s.current,ji(e.nodeType===8?e.parentNode:e),Hn(function(){vo(t,s,n,r)}),s}function wo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Zl(o);a.call(s)}}vo(t,o,e,i)}else o=h2(n,t,e,i,r);return Zl(o)}h0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ti(t.pendingLanes);n!==0&&(As(t,n|1),Je(t,ve()),!(G&6)&&(jr=ve()+500,En()))}break;case 13:Hn(function(){var r=Gt(e,1);if(r!==null){var i=be();_t(r,e,1,i)}}),mu(e,1)}};Os=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=be();_t(t,e,134217728,n)}mu(e,134217728)}};m0=function(e){if(e.tag===13){var t=vn(e),n=Gt(e,t);if(n!==null){var r=be();_t(n,e,t,r)}mu(e,t)}};g0=function(){return q};v0=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ta=function(e,t,n){switch(t){case"input":if(Na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uo(r);if(!i)throw Error(R(90));Yd(r),Na(r,i)}}}break;case"textarea":Xd(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};r0=cu;i0=Hn;var m2={usingClientEntryPoint:!1,Events:[Ui,rr,uo,t0,n0,cu]},Kr={findFiberByHostInstance:Ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},g2={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=a0(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||p2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{lo=ul.inject(g2),Ot=ul}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m2;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(R(200));return f2(e,t,null,n)};ot.createRoot=function(e,t){if(!vu(e))throw Error(R(299));var n=!1,r="",i=Bf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hu(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,ji(e.nodeType===8?e.parentNode:e),new gu(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=a0(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Hn(e)};ot.hydrate=function(e,t,n){if(!xo(t))throw Error(R(200));return wo(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Bf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Uf(t,null,e,1,n??null,i,!1,l,o),e[Yt]=t.current,ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yo(t)};ot.render=function(e,t,n){if(!xo(t))throw Error(R(200));return wo(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!xo(e))throw Error(R(40));return e._reactRootContainer?(Hn(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};ot.unstable_batchedUpdates=cu;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return wo(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bf)}catch(e){console.error(e)}}bf(),$d.exports=ot;var yu=$d.exports;const v2=Pd(yu),y2=_d({__proto__:null,default:v2},[yu]);var Wc=yu;xa.createRoot=Wc.createRoot,xa.hydrateRoot=Wc.hydrateRoot;/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}var me;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(me||(me={}));const Qc="popstate";function x2(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:a}=r.location;return Fi("",{pathname:l,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wn(i)}return S2(t,n,null,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w2(){return Math.random().toString(36).substr(2,8)}function Kc(e,t){return{usr:e.state,key:e.key,idx:t}}function Fi(e,t,n,r){return n===void 0&&(n=null),he({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jt(t):t,{state:n,key:t&&t.key||r||w2()})}function Wn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function S2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=me.Pop,s=null,u=d();u==null&&(u=0,o.replaceState(he({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function v(){a=me.Pop;let P=d(),h=P==null?null:P-u;u=P,s&&s({action:a,location:w.location,delta:h})}function m(P,h){a=me.Push;let f=Fi(w.location,P,h);n&&n(f,P),u=d()+1;let g=Kc(f,u),p=w.createHref(f);try{o.pushState(g,"",p)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(p)}l&&s&&s({action:a,location:w.location,delta:1})}function S(P,h){a=me.Replace;let f=Fi(w.location,P,h);n&&n(f,P),u=d();let g=Kc(f,u),p=w.createHref(f);o.replaceState(g,"",p),l&&s&&s({action:a,location:w.location,delta:0})}function x(P){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:Wn(P);return H(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return a},get location(){return e(i,o)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Qc,v),s=P,()=>{i.removeEventListener(Qc,v),s=null}},createHref(P){return t(i,P)},createURL:x,encodeLocation(P){let h=x(P);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:S,go(P){return o.go(P)}};return w}var ge;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ge||(ge={}));const C2=new Set(["lazy","caseSensitive","path","id","index","children"]);function k2(e){return e.index===!0}function fs(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,l)=>{let o=[...n,l],a=typeof i.id=="string"?i.id:o.join("-");if(H(i.index!==!0||!i.children,"Cannot specify children on an index route"),H(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),k2(i)){let s=he({},i,t(i),{id:a});return r[a]=s,s}else{let s=he({},i,t(i),{id:a,children:void 0});return r[a]=s,i.children&&(s.children=fs(i.children,t,o,r)),s}})}function cr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jt(t):t,i=Fr(r.pathname||"/",n);if(i==null)return null;let l=Hf(e);j2(l);let o=null;for(let a=0;o==null&&a<l.length;++a)o=F2(l[a],O2(i));return o}function E2(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Hf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(H(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Qt([r,s.relativePath]),d=n.concat(s);l.children&&l.children.length>0&&(H(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hf(l.children,t,d,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:z2(u,l.index),routesMeta:d})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let s of Vf(l.path))i(l,o,s)}),t}function Vf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Vf(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function j2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N2=/^:\w+$/,_2=3,P2=2,R2=1,L2=10,D2=-2,Yc=e=>e==="*";function z2(e,t){let n=e.split("/"),r=n.length;return n.some(Yc)&&(r+=D2),t&&(r+=P2),n.filter(i=>!Yc(i)).reduce((i,l)=>i+(N2.test(l)?_2:l===""?R2:L2),r)}function T2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function F2(e,t){let{routesMeta:n}=e,r={},i="/",l=[];for(let o=0;o<n.length;++o){let a=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=M2({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let v=a.route;l.push({params:r,pathname:Qt([i,d.pathname]),pathnameBase:B2(Qt([i,d.pathnameBase])),route:v}),d.pathnameBase!=="/"&&(i=Qt([i,d.pathnameBase]))}return l}function M2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,v)=>{let{paramName:m,isOptional:S}=d;if(m==="*"){let w=a[v]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[v];return S&&!x?u[m]=void 0:u[m]=I2(x||"",m),u},{}),pathname:l,pathnameBase:o,pattern:e}}function A2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function O2(e){try{return decodeURI(e)}catch(t){return Vn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function I2(e,t){try{return decodeURIComponent(e)}catch(n){return Vn(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Fr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jt(e):e;return{pathname:n?n.startsWith("/")?n:U2(n,t):t,search:b2(r),hash:H2(i)}}function U2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function So(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jt(e):(i=he({},e),H(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),H(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),H(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=n;else if(r){let v=t[t.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),v.pop();i.pathname=m.join("/")}a="/"+v.join("/")}else{let v=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),v-=1;i.pathname=m.join("/")}a=v>=0?t[v]:"/"}let s=$2(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Qt=e=>e.join("/").replace(/\/\/+/g,"/"),B2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,H2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class wu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qf=["post","put","patch","delete"],V2=new Set(Qf),W2=["get",...Qf],Q2=new Set(W2),K2=new Set([301,302,303,307,308]),Y2=new Set([307,308]),ua={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},G2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Kf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X2=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Yf="remix-router-transitions";function Z2(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;H(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=C=>({hasErrorBoundary:y(C)})}else i=X2;let l={},o=fs(e.routes,i,void 0,l),a,s=e.basename||"/",u=he({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,v=new Set,m=null,S=null,x=null,w=e.hydrationData!=null,P=cr(o,e.history.location,s),h=null;if(P==null){let y=ct(404,{pathname:e.history.location.pathname}),{matches:C,route:j}=nd(o);P=C,h={[j.id]:y}}let f=!P.some(y=>y.route.lazy)&&(!P.some(y=>y.route.loader)||e.hydrationData!=null),g,p={historyAction:e.history.action,location:e.history.location,matches:P,initialized:f,navigation:ua,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||h,fetchers:new Map,blockers:new Map},E=me.Pop,N=!1,k,D=!1,O=new Map,$=null,X=!1,ke=!1,ye=[],yt=[],ae=new Map,Lt=0,qe=-1,L=new Map,M=new Set,I=new Map,Q=new Map,Z=new Set,Me=new Map,xe=new Map,et=!1;function We(){if(d=e.history.listen(y=>{let{action:C,location:j,delta:z}=y;if(et){et=!1;return}Vn(xe.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Tu({currentLocation:p.location,nextLocation:j,historyAction:C});if(F&&z!=null){et=!0,e.history.go(z*-1),Wi(F,{state:"blocked",location:j,proceed(){Wi(F,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),e.history.go(z)},reset(){let V=new Map(p.blockers);V.set(F,Yr),Le({blockers:V})}});return}return Nn(C,j)}),n){sm(t,O);let y=()=>um(t,O);t.addEventListener("pagehide",y),$=()=>t.removeEventListener("pagehide",y)}return p.initialized||Nn(me.Pop,p.location),g}function st(){d&&d(),$&&$(),v.clear(),k&&k.abort(),p.fetchers.forEach((y,C)=>Vi(C)),p.blockers.forEach((y,C)=>zu(C))}function $t(y){return v.add(y),()=>v.delete(y)}function Le(y,C){C===void 0&&(C={}),p=he({},p,y);let j=[],z=[];u.v7_fetcherPersist&&p.fetchers.forEach((F,V)=>{F.state==="idle"&&(Z.has(V)?z.push(V):j.push(V))}),[...v].forEach(F=>F(p,{deletedFetchers:z,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),u.v7_fetcherPersist&&(j.forEach(F=>p.fetchers.delete(F)),z.forEach(F=>Vi(F)))}function Dt(y,C,j){var z,F;let{flushSync:V}=j===void 0?{}:j,B=p.actionData!=null&&p.navigation.formMethod!=null&&Et(p.navigation.formMethod)&&p.navigation.state==="loading"&&((z=y.state)==null?void 0:z._isRedirect)!==!0,U;C.actionData?Object.keys(C.actionData).length>0?U=C.actionData:U=null:B?U=p.actionData:U=null;let A=C.loaderData?td(p.loaderData,C.loaderData,C.matches||[],C.errors):p.loaderData,Y=p.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((te,ue)=>Y.set(ue,Yr)));let De=N===!0||p.navigation.formMethod!=null&&Et(p.navigation.formMethod)&&((F=y.state)==null?void 0:F._isRedirect)!==!0;a&&(o=a,a=void 0),X||E===me.Pop||(E===me.Push?e.history.push(y,y.state):E===me.Replace&&e.history.replace(y,y.state));let W;if(E===me.Pop){let te=O.get(p.location.pathname);te&&te.has(y.pathname)?W={currentLocation:p.location,nextLocation:y}:O.has(y.pathname)&&(W={currentLocation:y,nextLocation:p.location})}else if(D){let te=O.get(p.location.pathname);te?te.add(y.pathname):(te=new Set([y.pathname]),O.set(p.location.pathname,te)),W={currentLocation:p.location,nextLocation:y}}Le(he({},C,{actionData:U,loaderData:A,historyAction:E,location:y,initialized:!0,navigation:ua,revalidation:"idle",restoreScrollPosition:Mu(y,C.matches||p.matches),preventScrollReset:De,blockers:Y}),{viewTransitionOpts:W,flushSync:V===!0}),E=me.Pop,N=!1,D=!1,X=!1,ke=!1,ye=[],yt=[]}async function xt(y,C){if(typeof y=="number"){e.history.go(y);return}let j=ps(p.location,p.matches,s,u.v7_prependBasename,y,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:z,submission:F,error:V}=Gc(u.v7_normalizeFormMethod,!1,j,C),B=p.location,U=Fi(p.location,z,C&&C.state);U=he({},U,e.history.encodeLocation(U));let A=C&&C.replace!=null?C.replace:void 0,Y=me.Push;A===!0?Y=me.Replace:A===!1||F!=null&&Et(F.formMethod)&&F.formAction===p.location.pathname+p.location.search&&(Y=me.Replace);let De=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,W=(C&&C.unstable_flushSync)===!0,te=Tu({currentLocation:B,nextLocation:U,historyAction:Y});if(te){Wi(te,{state:"blocked",location:U,proceed(){Wi(te,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),xt(y,C)},reset(){let ue=new Map(p.blockers);ue.set(te,Yr),Le({blockers:ue})}});return}return await Nn(Y,U,{submission:F,pendingError:V,preventScrollReset:De,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:W})}function Fp(){if(Lo(),Le({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Nn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Nn(E||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Nn(y,C,j){k&&k.abort(),k=null,E=y,X=(j&&j.startUninterruptedRevalidation)===!0,Hp(p.location,p.matches),N=(j&&j.preventScrollReset)===!0,D=(j&&j.enableViewTransition)===!0;let z=a||o,F=j&&j.overrideNavigation,V=cr(z,C,s),B=(j&&j.flushSync)===!0;if(!V){let ue=ct(404,{pathname:C.pathname}),{matches:Ue,route:zt}=nd(z);Do(),Dt(C,{matches:Ue,loaderData:{},errors:{[zt.id]:ue}},{flushSync:B});return}if(p.initialized&&!ke&&nm(p.location,C)&&!(j&&j.submission&&Et(j.submission.formMethod))){Dt(C,{matches:V},{flushSync:B});return}k=new AbortController;let U=Xr(e.history,C,k.signal,j&&j.submission),A,Y;if(j&&j.pendingError)Y={[hi(V).route.id]:j.pendingError};else if(j&&j.submission&&Et(j.submission.formMethod)){let ue=await Mp(U,C,j.submission,V,{replace:j.replace,flushSync:B});if(ue.shortCircuited)return;A=ue.pendingActionData,Y=ue.pendingActionError,F=ca(C,j.submission),B=!1,U=new Request(U.url,{signal:U.signal})}let{shortCircuited:De,loaderData:W,errors:te}=await Ap(U,C,V,F,j&&j.submission,j&&j.fetcherSubmission,j&&j.replace,B,A,Y);De||(k=null,Dt(C,he({matches:V},A?{actionData:A}:{},{loaderData:W,errors:te})))}async function Mp(y,C,j,z,F){F===void 0&&(F={}),Lo();let V=om(C,j);Le({navigation:V},{flushSync:F.flushSync===!0});let B,U=ms(z,C);if(!U.route.action&&!U.route.lazy)B={type:ge.error,error:ct(405,{method:y.method,pathname:C.pathname,routeId:U.route.id})};else if(B=await Gr("action",y,U,z,l,i,s),y.signal.aborted)return{shortCircuited:!0};if(yr(B)){let A;return F&&F.replace!=null?A=F.replace:A=B.location===p.location.pathname+p.location.search,await Or(p,B,{submission:j,replace:A}),{shortCircuited:!0}}if(mi(B)){let A=hi(z,U.route.id);return(F&&F.replace)!==!0&&(E=me.Push),{pendingActionData:{},pendingActionError:{[A.route.id]:B.error}}}if(Tn(B))throw ct(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:B.data}}}async function Ap(y,C,j,z,F,V,B,U,A,Y){let De=z||ca(C,F),W=F||V||ld(De),te=a||o,[ue,Ue]=Xc(e.history,p,j,W,C,ke,ye,yt,Z,I,M,te,s,A,Y);if(Do(ne=>!(j&&j.some(ut=>ut.route.id===ne))||ue&&ue.some(ut=>ut.route.id===ne)),qe=++Lt,ue.length===0&&Ue.length===0){let ne=Lu();return Dt(C,he({matches:j,loaderData:{},errors:Y||null},A?{actionData:A}:{},ne?{fetchers:new Map(p.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(!X){Ue.forEach(ut=>{let we=p.fetchers.get(ut.key),_n=Zr(void 0,we?we.data:void 0);p.fetchers.set(ut.key,_n)});let ne=A||p.actionData;Le(he({navigation:De},ne?Object.keys(ne).length===0?{actionData:null}:{actionData:ne}:{},Ue.length>0?{fetchers:new Map(p.fetchers)}:{}),{flushSync:U})}Ue.forEach(ne=>{ae.has(ne.key)&&en(ne.key),ne.controller&&ae.set(ne.key,ne.controller)});let zt=()=>Ue.forEach(ne=>en(ne.key));k&&k.signal.addEventListener("abort",zt);let{results:$r,loaderResults:zo,fetcherResults:Yn}=await _u(p.matches,j,ue,Ue,y);if(y.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",zt),Ue.forEach(ne=>ae.delete(ne.key));let wt=rd($r);if(wt){if(wt.idx>=ue.length){let ne=Ue[wt.idx-ue.length].key;M.add(ne)}return await Or(p,wt.result,{replace:B}),{shortCircuited:!0}}let{loaderData:Qi,errors:To}=ed(p,j,ue,zo,Y,Ue,Yn,Me);Me.forEach((ne,ut)=>{ne.subscribe(we=>{(we||ne.done)&&Me.delete(ut)})});let Fo=Lu(),Mo=Du(qe),Gn=Fo||Mo||Ue.length>0;return he({loaderData:Qi,errors:To},Gn?{fetchers:new Map(p.fetchers)}:{})}function Op(y,C,j,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(y)&&en(y);let F=(z&&z.unstable_flushSync)===!0,V=a||o,B=ps(p.location,p.matches,s,u.v7_prependBasename,j,C,z==null?void 0:z.relative),U=cr(V,B,s);if(!U){Ir(y,C,ct(404,{pathname:B}),{flushSync:F});return}let{path:A,submission:Y,error:De}=Gc(u.v7_normalizeFormMethod,!0,B,z);if(De){Ir(y,C,De,{flushSync:F});return}let W=ms(U,A);if(N=(z&&z.preventScrollReset)===!0,Y&&Et(Y.formMethod)){Ip(y,C,A,W,U,F,Y);return}I.set(y,{routeId:C,path:A}),$p(y,C,A,W,U,F,Y)}async function Ip(y,C,j,z,F,V,B){if(Lo(),I.delete(y),!z.route.action&&!z.route.lazy){let we=ct(405,{method:B.formMethod,pathname:j,routeId:C});Ir(y,C,we,{flushSync:V});return}let U=p.fetchers.get(y);qt(y,am(B,U),{flushSync:V});let A=new AbortController,Y=Xr(e.history,j,A.signal,B);ae.set(y,A);let De=Lt,W=await Gr("action",Y,z,F,l,i,s);if(Y.signal.aborted){ae.get(y)===A&&ae.delete(y);return}if(Z.has(y)){qt(y,nn(void 0));return}if(yr(W))if(ae.delete(y),qe>De){qt(y,nn(void 0));return}else return M.add(y),qt(y,Zr(B)),Or(p,W,{fetcherSubmission:B});if(mi(W)){Ir(y,C,W.error);return}if(Tn(W))throw ct(400,{type:"defer-action"});let te=p.navigation.location||p.location,ue=Xr(e.history,te,A.signal),Ue=a||o,zt=p.navigation.state!=="idle"?cr(Ue,p.navigation.location,s):p.matches;H(zt,"Didn't find any matches after fetcher action");let $r=++Lt;L.set(y,$r);let zo=Zr(B,W.data);p.fetchers.set(y,zo);let[Yn,wt]=Xc(e.history,p,zt,B,te,ke,ye,yt,Z,I,M,Ue,s,{[z.route.id]:W.data},void 0);wt.filter(we=>we.key!==y).forEach(we=>{let _n=we.key,Au=p.fetchers.get(_n),Wp=Zr(void 0,Au?Au.data:void 0);p.fetchers.set(_n,Wp),ae.has(_n)&&en(_n),we.controller&&ae.set(_n,we.controller)}),Le({fetchers:new Map(p.fetchers)});let Qi=()=>wt.forEach(we=>en(we.key));A.signal.addEventListener("abort",Qi);let{results:To,loaderResults:Fo,fetcherResults:Mo}=await _u(p.matches,zt,Yn,wt,ue);if(A.signal.aborted)return;A.signal.removeEventListener("abort",Qi),L.delete(y),ae.delete(y),wt.forEach(we=>ae.delete(we.key));let Gn=rd(To);if(Gn){if(Gn.idx>=Yn.length){let we=wt[Gn.idx-Yn.length].key;M.add(we)}return Or(p,Gn.result)}let{loaderData:ne,errors:ut}=ed(p,p.matches,Yn,Fo,void 0,wt,Mo,Me);if(p.fetchers.has(y)){let we=nn(W.data);p.fetchers.set(y,we)}Du($r),p.navigation.state==="loading"&&$r>qe?(H(E,"Expected pending action"),k&&k.abort(),Dt(p.navigation.location,{matches:zt,loaderData:ne,errors:ut,fetchers:new Map(p.fetchers)})):(Le({errors:ut,loaderData:td(p.loaderData,ne,zt,ut),fetchers:new Map(p.fetchers)}),ke=!1)}async function $p(y,C,j,z,F,V,B){let U=p.fetchers.get(y);qt(y,Zr(B,U?U.data:void 0),{flushSync:V});let A=new AbortController,Y=Xr(e.history,j,A.signal);ae.set(y,A);let De=Lt,W=await Gr("loader",Y,z,F,l,i,s);if(Tn(W)&&(W=await Zf(W,Y.signal,!0)||W),ae.get(y)===A&&ae.delete(y),!Y.signal.aborted){if(Z.has(y)){qt(y,nn(void 0));return}if(yr(W))if(qe>De){qt(y,nn(void 0));return}else{M.add(y),await Or(p,W);return}if(mi(W)){Ir(y,C,W.error);return}H(!Tn(W),"Unhandled fetcher deferred data"),qt(y,nn(W.data))}}async function Or(y,C,j){let{submission:z,fetcherSubmission:F,replace:V}=j===void 0?{}:j;C.revalidate&&(ke=!0);let B=Fi(y.location,C.location,{_isRedirect:!0});if(H(B,"Expected a location on the redirect navigation"),n){let te=!1;if(C.reloadDocument)te=!0;else if(Kf.test(C.location)){const ue=e.history.createURL(C.location);te=ue.origin!==t.location.origin||Fr(ue.pathname,s)==null}if(te){V?t.location.replace(C.location):t.location.assign(C.location);return}}k=null;let U=V===!0?me.Replace:me.Push,{formMethod:A,formAction:Y,formEncType:De}=y.navigation;!z&&!F&&A&&Y&&De&&(z=ld(y.navigation));let W=z||F;if(Y2.has(C.status)&&W&&Et(W.formMethod))await Nn(U,B,{submission:he({},W,{formAction:C.location}),preventScrollReset:N});else{let te=ca(B,z);await Nn(U,B,{overrideNavigation:te,fetcherSubmission:F,preventScrollReset:N})}}async function _u(y,C,j,z,F){let V=await Promise.all([...j.map(A=>Gr("loader",F,A,C,l,i,s)),...z.map(A=>A.matches&&A.match&&A.controller?Gr("loader",Xr(e.history,A.path,A.controller.signal),A.match,A.matches,l,i,s):{type:ge.error,error:ct(404,{pathname:A.path})})]),B=V.slice(0,j.length),U=V.slice(j.length);return await Promise.all([id(y,j,B,B.map(()=>F.signal),!1,p.loaderData),id(y,z.map(A=>A.match),U,z.map(A=>A.controller?A.controller.signal:null),!0)]),{results:V,loaderResults:B,fetcherResults:U}}function Lo(){ke=!0,ye.push(...Do()),I.forEach((y,C)=>{ae.has(C)&&(yt.push(C),en(C))})}function qt(y,C,j){j===void 0&&(j={}),p.fetchers.set(y,C),Le({fetchers:new Map(p.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function Ir(y,C,j,z){z===void 0&&(z={});let F=hi(p.matches,C);Vi(y),Le({errors:{[F.route.id]:j},fetchers:new Map(p.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function Pu(y){return u.v7_fetcherPersist&&(Q.set(y,(Q.get(y)||0)+1),Z.has(y)&&Z.delete(y)),p.fetchers.get(y)||G2}function Vi(y){let C=p.fetchers.get(y);ae.has(y)&&!(C&&C.state==="loading"&&L.has(y))&&en(y),I.delete(y),L.delete(y),M.delete(y),Z.delete(y),p.fetchers.delete(y)}function Up(y){if(u.v7_fetcherPersist){let C=(Q.get(y)||0)-1;C<=0?(Q.delete(y),Z.add(y)):Q.set(y,C)}else Vi(y);Le({fetchers:new Map(p.fetchers)})}function en(y){let C=ae.get(y);H(C,"Expected fetch controller: "+y),C.abort(),ae.delete(y)}function Ru(y){for(let C of y){let j=Pu(C),z=nn(j.data);p.fetchers.set(C,z)}}function Lu(){let y=[],C=!1;for(let j of M){let z=p.fetchers.get(j);H(z,"Expected fetcher: "+j),z.state==="loading"&&(M.delete(j),y.push(j),C=!0)}return Ru(y),C}function Du(y){let C=[];for(let[j,z]of L)if(z<y){let F=p.fetchers.get(j);H(F,"Expected fetcher: "+j),F.state==="loading"&&(en(j),L.delete(j),C.push(j))}return Ru(C),C.length>0}function Bp(y,C){let j=p.blockers.get(y)||Yr;return xe.get(y)!==C&&xe.set(y,C),j}function zu(y){p.blockers.delete(y),xe.delete(y)}function Wi(y,C){let j=p.blockers.get(y)||Yr;H(j.state==="unblocked"&&C.state==="blocked"||j.state==="blocked"&&C.state==="blocked"||j.state==="blocked"&&C.state==="proceeding"||j.state==="blocked"&&C.state==="unblocked"||j.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+j.state+" -> "+C.state);let z=new Map(p.blockers);z.set(y,C),Le({blockers:z})}function Tu(y){let{currentLocation:C,nextLocation:j,historyAction:z}=y;if(xe.size===0)return;xe.size>1&&Vn(!1,"A router only supports one blocker at a time");let F=Array.from(xe.entries()),[V,B]=F[F.length-1],U=p.blockers.get(V);if(!(U&&U.state==="proceeding")&&B({currentLocation:C,nextLocation:j,historyAction:z}))return V}function Do(y){let C=[];return Me.forEach((j,z)=>{(!y||y(z))&&(j.cancel(),C.push(z),Me.delete(z))}),C}function bp(y,C,j){if(m=y,x=C,S=j||null,!w&&p.navigation===ua){w=!0;let z=Mu(p.location,p.matches);z!=null&&Le({restoreScrollPosition:z})}return()=>{m=null,x=null,S=null}}function Fu(y,C){return S&&S(y,C.map(z=>E2(z,p.loaderData)))||y.key}function Hp(y,C){if(m&&x){let j=Fu(y,C);m[j]=x()}}function Mu(y,C){if(m){let j=Fu(y,C),z=m[j];if(typeof z=="number")return z}return null}function Vp(y){l={},a=fs(y,i,void 0,l)}return g={get basename(){return s},get state(){return p},get routes(){return o},get window(){return t},initialize:We,subscribe:$t,enableScrollRestoration:bp,navigate:xt,fetch:Op,revalidate:Fp,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Pu,deleteFetcher:Up,dispose:st,getBlocker:Bp,deleteBlocker:zu,_internalFetchControllers:ae,_internalActiveDeferreds:Me,_internalSetRoutes:Vp},g}function J2(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ps(e,t,n,r,i,l,o){let a,s;if(l){a=[];for(let d of t)if(a.push(d),d.route.id===l){s=d;break}}else a=t,s=t[t.length-1];let u=xu(i||".",So(a).map(d=>d.pathnameBase),Fr(e.pathname,n)||e.pathname,o==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&s&&s.route.index&&!Su(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Qt([n,u.pathname])),Wn(u)}function Gc(e,t,n,r){if(!r||!J2(r))return{path:n};if(r.formMethod&&!lm(r.formMethod))return{path:n,error:ct(405,{method:r.formMethod})};let i=()=>({path:n,error:ct(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),a=Xf(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Et(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((S,x)=>{let[w,P]=x;return""+S+w+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Et(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}H(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=hs(r.formData),u=r.formData;else if(r.body instanceof FormData)s=hs(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=qc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=qc(s)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Et(d.formMethod))return{path:n,submission:d};let v=Jt(n);return t&&v.search&&Su(v.search)&&s.append("index",""),v.search="?"+s,{path:Wn(v),submission:d}}function q2(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Xc(e,t,n,r,i,l,o,a,s,u,d,v,m,S,x){let w=x?Object.values(x)[0]:S?Object.values(S)[0]:void 0,P=e.createURL(t.location),h=e.createURL(i),f=x?Object.keys(x)[0]:void 0,p=q2(n,f).filter((N,k)=>{if(N.route.lazy)return!0;if(N.route.loader==null)return!1;if(em(t.loaderData,t.matches[k],N)||o.some($=>$===N.route.id))return!0;let D=t.matches[k],O=N;return Zc(N,he({currentUrl:P,currentParams:D.params,nextUrl:h,nextParams:O.params},r,{actionResult:w,defaultShouldRevalidate:l||P.pathname+P.search===h.pathname+h.search||P.search!==h.search||Gf(D,O)}))}),E=[];return u.forEach((N,k)=>{if(!n.some(ke=>ke.route.id===N.routeId)||s.has(k))return;let D=cr(v,N.path,m);if(!D){E.push({key:k,routeId:N.routeId,path:N.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(k),$=ms(D,N.path),X=!1;d.has(k)?X=!1:a.includes(k)?X=!0:O&&O.state!=="idle"&&O.data===void 0?X=l:X=Zc($,he({currentUrl:P,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:l})),X&&E.push({key:k,routeId:N.routeId,path:N.path,matches:D,match:$,controller:new AbortController})}),[p,E]}function em(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Gf(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Zc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Jc(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];H(i,"No route found in manifest");let l={};for(let o in r){let s=i[o]!==void 0&&o!=="hasErrorBoundary";Vn(!s,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!C2.has(o)&&(l[o]=r[o])}Object.assign(i,l),Object.assign(i,he({},t(i),{lazy:void 0}))}async function Gr(e,t,n,r,i,l,o,a){a===void 0&&(a={});let s,u,d,v=x=>{let w,P=new Promise((h,f)=>w=f);return d=()=>w(),t.signal.addEventListener("abort",d),Promise.race([x({request:t,params:n.params,context:a.requestContext}),P])};try{let x=n.route[e];if(n.route.lazy)if(x){let w,P=await Promise.all([v(x).catch(h=>{w=h}),Jc(n.route,l,i)]);if(w)throw w;u=P[0]}else if(await Jc(n.route,l,i),x=n.route[e],x)u=await v(x);else if(e==="action"){let w=new URL(t.url),P=w.pathname+w.search;throw ct(405,{method:t.method,pathname:P,routeId:n.route.id})}else return{type:ge.data,data:void 0};else if(x)u=await v(x);else{let w=new URL(t.url),P=w.pathname+w.search;throw ct(404,{pathname:P})}H(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(x){s=ge.error,u=x}finally{d&&t.signal.removeEventListener("abort",d)}if(im(u)){let x=u.status;if(K2.has(x)){let h=u.headers.get("Location");if(H(h,"Redirects returned/thrown from loaders/actions must have a Location header"),!Kf.test(h))h=ps(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,h);else if(!a.isStaticRequest){let f=new URL(t.url),g=h.startsWith("//")?new URL(f.protocol+h):new URL(h),p=Fr(g.pathname,o)!=null;g.origin===f.origin&&p&&(h=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",h),u;return{type:ge.redirect,status:x,location:h,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:s===ge.error?ge.error:ge.data,response:u};let w,P=u.headers.get("Content-Type");return P&&/\bapplication\/json\b/.test(P)?w=await u.json():w=await u.text(),s===ge.error?{type:s,error:new wu(x,u.statusText,w),headers:u.headers}:{type:ge.data,data:w,statusCode:u.status,headers:u.headers}}if(s===ge.error)return{type:s,error:u};if(rm(u)){var m,S;return{type:ge.deferred,deferredData:u,statusCode:(m=u.init)==null?void 0:m.status,headers:((S=u.init)==null?void 0:S.headers)&&new Headers(u.init.headers)}}return{type:ge.data,data:u}}function Xr(e,t,n,r){let i=e.createURL(Xf(t)).toString(),l={signal:n};if(r&&Et(r.formMethod)){let{formMethod:o,formEncType:a}=r;l.method=o.toUpperCase(),a==="application/json"?(l.headers=new Headers({"Content-Type":a}),l.body=JSON.stringify(r.json)):a==="text/plain"?l.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?l.body=hs(r.formData):l.body=r.formData}return new Request(i,l)}function hs(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function qc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function tm(e,t,n,r,i){let l={},o=null,a,s=!1,u={};return n.forEach((d,v)=>{let m=t[v].route.id;if(H(!yr(d),"Cannot handle redirect results in processLoaderData"),mi(d)){let S=hi(e,m),x=d.error;r&&(x=Object.values(r)[0],r=void 0),o=o||{},o[S.route.id]==null&&(o[S.route.id]=x),l[m]=void 0,s||(s=!0,a=Wf(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else Tn(d)?(i.set(m,d.deferredData),l[m]=d.deferredData.data):l[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(a=d.statusCode),d.headers&&(u[m]=d.headers)}),r&&(o=r,l[Object.keys(r)[0]]=void 0),{loaderData:l,errors:o,statusCode:a||200,loaderHeaders:u}}function ed(e,t,n,r,i,l,o,a){let{loaderData:s,errors:u}=tm(t,n,r,i,a);for(let d=0;d<l.length;d++){let{key:v,match:m,controller:S}=l[d];H(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let x=o[d];if(!(S&&S.signal.aborted))if(mi(x)){let w=hi(e.matches,m==null?void 0:m.route.id);u&&u[w.route.id]||(u=he({},u,{[w.route.id]:x.error})),e.fetchers.delete(v)}else if(yr(x))H(!1,"Unhandled fetcher revalidation redirect");else if(Tn(x))H(!1,"Unhandled fetcher deferred data");else{let w=nn(x.data);e.fetchers.set(v,w)}}return{loaderData:s,errors:u}}function td(e,t,n,r){let i=he({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&l.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function hi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function nd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ct(e,t){let{pathname:n,routeId:r,method:i,type:l}=t===void 0?{}:t,o="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?a="defer() is not supported in actions":l==="invalid-body"&&(a="Unable to encode submission body")):e===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",a='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new wu(e||500,o,new Error(a),!0)}function rd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(yr(n))return{result:n,idx:t}}}function Xf(e){let t=typeof e=="string"?Jt(e):e;return Wn(he({},t,{hash:""}))}function nm(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Tn(e){return e.type===ge.deferred}function mi(e){return e.type===ge.error}function yr(e){return(e&&e.type)===ge.redirect}function rm(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function im(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function lm(e){return Q2.has(e.toLowerCase())}function Et(e){return V2.has(e.toLowerCase())}async function id(e,t,n,r,i,l){for(let o=0;o<n.length;o++){let a=n[o],s=t[o];if(!s)continue;let u=e.find(v=>v.route.id===s.route.id),d=u!=null&&!Gf(u,s)&&(l&&l[s.route.id])!==void 0;if(Tn(a)&&(i||d)){let v=r[o];H(v,"Expected an AbortSignal for revalidating fetcher deferred result"),await Zf(a,v,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function Zf(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ge.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ge.error,error:i}}return{type:ge.data,data:e.deferredData.data}}}function Su(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ms(e,t){let n=typeof t=="string"?Jt(t).search:t.search;if(e[e.length-1].route.index&&Su(n||""))return e[e.length-1];let r=So(e);return r[r.length-1]}function ld(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:l,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ca(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function om(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Zr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function am(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function nn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function sm(e,t){try{let n=e.sessionStorage.getItem(Yf);if(n){let r=JSON.parse(n);for(let[i,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(i,new Set(l||[]))}}catch{}}function um(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(Yf,JSON.stringify(n))}catch(r){Vn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jl.apply(this,arguments)}const Co=_.createContext(null),Jf=_.createContext(null),Mr=_.createContext(null),ko=_.createContext(null),jn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),qf=_.createContext(null);function cm(e,t){let{relative:n}=t===void 0?{}:t;bi()||H(!1);let{basename:r,navigator:i}=_.useContext(Mr),{hash:l,pathname:o,search:a}=tp(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Qt([r,o])),i.createHref({pathname:s,search:a,hash:l})}function bi(){return _.useContext(ko)!=null}function Eo(){return bi()||H(!1),_.useContext(ko).location}function ep(e){_.useContext(Mr).static||_.useLayoutEffect(e)}function dm(){let{isDataRoute:e}=_.useContext(jn);return e?jm():fm()}function fm(){bi()||H(!1);let e=_.useContext(Co),{basename:t,navigator:n}=_.useContext(Mr),{matches:r}=_.useContext(jn),{pathname:i}=Eo(),l=JSON.stringify(So(r).map(s=>s.pathnameBase)),o=_.useRef(!1);return ep(()=>{o.current=!0}),_.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let d=xu(s,JSON.parse(l),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Qt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,l,i,e])}const pm=_.createContext(null);function hm(e){let t=_.useContext(jn).outlet;return t&&_.createElement(pm.Provider,{value:e},t)}function tp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(jn),{pathname:i}=Eo(),l=JSON.stringify(So(r).map(o=>o.pathnameBase));return _.useMemo(()=>xu(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function mm(e,t,n){bi()||H(!1);let{navigator:r}=_.useContext(Mr),{matches:i}=_.useContext(jn),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let s=Eo(),u;if(t){var d;let w=typeof t=="string"?Jt(t):t;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||H(!1),u=w}else u=s;let v=u.pathname||"/",m=a==="/"?v:v.slice(a.length)||"/",S=cr(e,{pathname:m}),x=wm(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Qt([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Qt([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&x?_.createElement(ko.Provider,{value:{location:Jl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:me.Pop}},x):x}function gm(){let e=Em(),t=Wf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,l)}const vm=_.createElement(gm,null);class ym extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(jn.Provider,{value:this.props.routeContext},_.createElement(qf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xm(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Co);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(jn.Provider,{value:t},r)}function wm(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let l=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=l.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));a>=0||H(!1),l=l.slice(0,Math.min(l.length,a+1))}return l.reduceRight((a,s,u)=>{let d=s.route.id?o==null?void 0:o[s.route.id]:null,v=null;n&&(v=s.route.errorElement||vm);let m=t.concat(l.slice(0,u+1)),S=()=>{let x;return d?x=v:s.route.Component?x=_.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=a,_.createElement(xm,{match:s,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?_.createElement(ym,{location:n.location,revalidation:n.revalidation,component:v,error:d,children:S(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):S()},null)}var np=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(np||{}),ql=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ql||{});function Sm(e){let t=_.useContext(Co);return t||H(!1),t}function Cm(e){let t=_.useContext(Jf);return t||H(!1),t}function km(e){let t=_.useContext(jn);return t||H(!1),t}function rp(e){let t=km(),n=t.matches[t.matches.length-1];return n.route.id||H(!1),n.route.id}function Em(){var e;let t=_.useContext(qf),n=Cm(ql.UseRouteError),r=rp(ql.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function jm(){let{router:e}=Sm(np.UseNavigateStable),t=rp(ql.UseNavigateStable),n=_.useRef(!1);return ep(()=>{n.current=!0}),_.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Jl({fromRouteId:t},l)))},[e,t])}function Nm(e){return hm(e.context)}function ri(e){H(!1)}function _m(e){let{basename:t="/",children:n=null,location:r,navigationType:i=me.Pop,navigator:l,static:o=!1}=e;bi()&&H(!1);let a=t.replace(/^\/*/,"/"),s=_.useMemo(()=>({basename:a,navigator:l,static:o}),[a,l,o]);typeof r=="string"&&(r=Jt(r));let{pathname:u="/",search:d="",hash:v="",state:m=null,key:S="default"}=r,x=_.useMemo(()=>{let w=Fr(u,a);return w==null?null:{location:{pathname:w,search:d,hash:v,state:m,key:S},navigationType:i}},[a,u,d,v,m,S,i]);return x==null?null:_.createElement(Mr.Provider,{value:s},_.createElement(ko.Provider,{children:n,value:x}))}new Promise(()=>{});function gs(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let l=[...t,i];if(r.type===_.Fragment){n.push.apply(n,gs(r.props.children,l));return}r.type!==ri&&H(!1),!r.props.index||!r.props.children||H(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gs(r.props.children,l)),n.push(o)}),n}function Pm(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}function Rm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Lm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dm(e,t){return e.button===0&&(!t||t==="_self")&&!Lm(e)}const zm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function Tm(e,t){return Z2({basename:t==null?void 0:t.basename,future:Mi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:x2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Fm(),routes:e,mapRouteProperties:Pm,window:t==null?void 0:t.window}).initialize()}function Fm(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Mi({},t,{errors:Mm(t.errors)})),t}function Mm(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new wu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let l=window[i.__subType];if(typeof l=="function")try{let o=new l(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(i.message);l.stack="",n[r]=l}}else n[r]=i;return n}const Am=_.createContext({isTransitioning:!1}),Om=_.createContext(new Map),Im="startTransition",od=ah[Im],$m="flushSync",ad=y2[$m];function Um(e){od?od(e):e()}function Jr(e){ad?ad(e):e()}class Bm{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function bm(e){let{fallbackElement:t,router:n,future:r}=e,[i,l]=_.useState(n.state),[o,a]=_.useState(),[s,u]=_.useState({isTransitioning:!1}),[d,v]=_.useState(),[m,S]=_.useState(),[x,w]=_.useState(),P=_.useRef(new Map),{v7_startTransition:h}=r||{},f=_.useCallback(k=>{h?Um(k):k()},[h]),g=_.useCallback((k,D)=>{let{deletedFetchers:O,unstable_flushSync:$,unstable_viewTransitionOpts:X}=D;O.forEach(ye=>P.current.delete(ye)),k.fetchers.forEach((ye,yt)=>{ye.data!==void 0&&P.current.set(yt,ye.data)});let ke=n.window==null||typeof n.window.document.startViewTransition!="function";if(!X||ke){$?Jr(()=>l(k)):f(()=>l(k));return}if($){Jr(()=>{m&&(d&&d.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let ye=n.window.document.startViewTransition(()=>{Jr(()=>l(k))});ye.finished.finally(()=>{Jr(()=>{v(void 0),S(void 0),a(void 0),u({isTransitioning:!1})})}),Jr(()=>S(ye));return}m?(d&&d.resolve(),m.skipTransition(),w({state:k,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(a(k),u({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[n.window,m,d,P,f]);_.useLayoutEffect(()=>n.subscribe(g),[n,g]),_.useEffect(()=>{s.isTransitioning&&!s.flushSync&&v(new Bm)},[s]),_.useEffect(()=>{if(d&&o&&n.window){let k=o,D=d.promise,O=n.window.document.startViewTransition(async()=>{f(()=>l(k)),await D});O.finished.finally(()=>{v(void 0),S(void 0),a(void 0),u({isTransitioning:!1})}),S(O)}},[f,o,d,n.window]),_.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),_.useEffect(()=>{!s.isTransitioning&&x&&(a(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),w(void 0))},[s.isTransitioning,x]);let p=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:k=>n.navigate(k),push:(k,D,O)=>n.navigate(k,{state:D,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(k,D,O)=>n.navigate(k,{replace:!0,state:D,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[n]),E=n.basename||"/",N=_.useMemo(()=>({router:n,navigator:p,static:!1,basename:E}),[n,p,E]);return _.createElement(_.Fragment,null,_.createElement(Co.Provider,{value:N},_.createElement(Jf.Provider,{value:i},_.createElement(Om.Provider,{value:P.current},_.createElement(Am.Provider,{value:s},_.createElement(_m,{basename:E,location:i.location,navigationType:i.historyAction,navigator:p},i.initialized?_.createElement(Hm,{routes:n.routes,state:i}):t))))),null)}function Hm(e){let{routes:t,state:n}=e;return mm(t,void 0,n)}const Vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sd=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:s,to:u,preventScrollReset:d,unstable_viewTransition:v}=t,m=Rm(t,zm),{basename:S}=_.useContext(Mr),x,w=!1;if(typeof u=="string"&&Wm.test(u)&&(x=u,Vm))try{let g=new URL(window.location.href),p=u.startsWith("//")?new URL(g.protocol+u):new URL(u),E=Fr(p.pathname,S);p.origin===g.origin&&E!=null?u=E+p.search+p.hash:w=!0}catch{}let P=cm(u,{relative:i}),h=Qm(u,{replace:o,state:a,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:v});function f(g){r&&r(g),g.defaultPrevented||h(g)}return _.createElement("a",Mi({},m,{href:x||P,onClick:w||l?r:f,ref:n,target:s}))});var ud;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ud||(ud={}));var cd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cd||(cd={}));function Qm(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,s=dm(),u=Eo(),d=tp(e,{relative:o});return _.useCallback(v=>{if(Dm(v,n)){v.preventDefault();let m=r!==void 0?r:Wn(u)===Wn(d);s(e,{replace:m,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:a})}},[u,s,d,r,i,n,e,l,o,a])}const Km="/assets/img_1-hKevZ4J0.png",ip=({className:e})=>c.jsx("div",{className:e,children:c.jsx("img",{src:Km,alt:"",className:"img"})}),Ym="/assets/img_2-0-A_q4Fj.png",lp=({className:e})=>c.jsx("div",{className:e,children:c.jsx("img",{src:Ym,className:"img",alt:""})}),Gm="data:image/svg+xml,%3csvg%20width='166'%20height='46'%20viewBox='0%200%20166%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M163.509%202.85256C164.173%202.40385%20164.677%201.99758%20164.993%201.6572C165.309%201.31683%20165.43%201.04907%20165.35%200.869385C165.269%200.6897%20164.989%200.601641%20164.525%200.610286C164.06%200.618932%20163.421%200.724112%20162.644%200.919758L13.3651%2038.2924C12.5937%2038.4844%2011.6985%2038.7633%2010.7312%2039.1131C9.76383%2039.4629%208.74352%2039.8766%207.72908%2040.3304C6.71465%2040.7841%205.72617%2041.269%204.82066%2041.757C3.91515%2042.245%203.11055%2042.7264%202.45325%2043.1735C1.7896%2043.6222%201.28524%2044.0285%200.969306%2044.3689C0.653372%2044.7093%200.532113%2044.977%200.612489%2045.1567C0.692866%2045.3364%200.973288%2045.4245%201.43761%2045.4158C1.90194%2045.4072%202.54098%2045.302%203.31783%2045.1063L152.597%207.73366C153.368%207.54169%20154.264%207.26277%20155.231%206.91299C156.198%206.56322%20157.219%206.14951%20158.233%205.69573C159.248%205.24196%20160.236%204.75709%20161.142%204.26911C162.047%203.78113%20162.852%203.29969%20163.509%202.85256Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",Xm="data:image/svg+xml,%3csvg%20width='210'%20height='65'%20viewBox='0%200%20210%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M206.862%203.14189C207.731%202.6015%20208.398%202.12247%20208.825%201.73243C209.252%201.34239%20209.43%201.04907%20209.35%200.869386C209.269%200.689701%20208.932%200.627207%20208.356%200.685511C207.781%200.743816%20206.979%200.921765%20205.998%201.20909L17.3582%2056.1883C16.3835%2056.4712%2015.2465%2056.8583%2014.0127%2057.3272C12.7789%2057.7962%2011.4728%2058.3378%2010.1697%2058.9207C8.86656%2059.5036%207.59227%2060.1163%206.42029%2060.7235C5.24832%2061.3306%204.20187%2061.9203%203.34129%2062.4583C2.47269%2062.9987%201.80566%2063.4778%201.37871%2063.8678C0.951766%2064.2578%200.773341%2064.5511%200.853718%2064.7308C0.934094%2064.9105%201.27168%2064.973%201.84702%2064.9147C2.42236%2064.8564%203.22407%2064.6784%204.20587%2064.3911L192.845%209.41195C193.82%209.12904%20194.957%208.74194%20196.191%208.27297C197.425%207.804%20198.731%207.26244%20200.034%206.67954C201.337%206.09664%20202.611%205.48393%20203.783%204.87675C204.955%204.26958%20206.002%203.67995%20206.862%203.14189Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",Zm="data:image/svg+xml,%3csvg%20width='256'%20height='157'%20viewBox='0%200%20256%20157'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.625%204.30344C253.587%203.28409%20254.303%202.41526%20254.731%201.74706C255.16%201.07887%20255.292%200.624523%20255.12%200.410247C254.948%200.195973%20254.476%200.226002%20253.731%200.498609C252.985%200.771212%20251.981%201.281%20250.777%201.99855L19.2871%20139.562C18.0906%20140.272%2016.7153%20141.176%2015.2406%20142.222C13.7659%20143.269%2012.221%20144.438%2010.6951%20145.661C9.16906%20146.884%207.69219%20148.138%206.34961%20149.349C5.00703%20150.561%203.82533%20151.706%202.87268%20152.72C1.91018%20153.739%201.19407%20154.608%200.76577%20155.276C0.337465%20155.944%200.205367%20156.399%200.377122%20156.613C0.548876%20156.827%201.02108%20156.797%201.76648%20156.524C2.51187%20156.252%203.51577%20155.742%204.72017%20155.024L236.21%2017.4606C237.407%2016.7514%20238.782%2015.8473%20240.257%2014.8006C241.731%2013.7539%20243.276%2012.5853%20244.802%2011.3621C246.328%2010.139%20247.805%208.88548%20249.148%207.67397C250.49%206.46247%20251.672%205.31693%20252.625%204.30344Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",Jm=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("img",{src:Gm,alt:"",className:"image1"}),c.jsx("img",{src:Xm,alt:"",className:"image2"}),c.jsx("img",{src:Zm,s:!0,alt:"",className:"image3"})]}),qm="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.475%205.11776C263.391%204.04007%20264.052%203.10182%20264.419%202.35713C264.786%201.61245%20264.852%201.07606%20264.614%200.778924C264.376%200.481787%20263.838%200.429777%20263.031%200.625893C262.224%200.822009%20261.165%201.26238%20259.913%201.92158L19.3674%20128.187C18.1236%20128.838%2016.7109%20129.695%2015.2107%20130.71C13.7105%20131.725%2012.1524%20132.877%2010.6265%20134.1C9.10046%20135.323%207.63674%20136.593%206.3197%20137.836C5.00267%20139.08%203.85839%20140.272%202.9529%20141.344C2.03717%20142.422%201.37671%20143.36%201.00972%20144.105C0.642721%20144.85%200.576384%20145.386%200.814556%20145.683C1.05273%20145.98%201.5907%20146.032%202.3974%20145.836C3.20411%20145.64%204.26365%20145.2%205.51482%20144.541L246.061%2018.2749C247.305%2017.6245%20248.717%2016.7672%20250.218%2015.7524C251.718%2014.7375%20253.276%2013.5853%20254.802%2012.3621C256.328%2011.139%20257.792%209.86907%20259.109%208.6257C260.426%207.38233%20261.57%206.19009%20262.475%205.11776Z'%20fill='white'/%3e%3c/svg%3e",eg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.559%205.11776C263.474%204.04007%20264.135%203.10182%20264.502%202.35713C264.869%201.61245%20264.935%201.07606%20264.697%200.778924C264.459%200.481787%20263.921%200.429777%20263.114%200.625893C262.307%200.822009%20261.248%201.26238%20259.997%201.92158L19.4506%20128.187C18.2069%20128.838%2016.7942%20129.695%2015.294%20130.71C13.7937%20131.725%2012.2357%20132.877%2010.7097%20134.1C9.18371%20135.323%207.71999%20136.593%206.40295%20137.836C5.08592%20139.08%203.94164%20140.272%203.03615%20141.344C2.12042%20142.422%201.45996%20143.36%201.09297%20144.105C0.725973%20144.85%200.659636%20145.386%200.897808%20145.683C1.13598%20145.98%201.67395%20146.032%202.48065%20145.836C3.28736%20145.64%204.3469%20145.2%205.59807%20144.541L246.144%2018.2749C247.388%2017.6245%20248.801%2016.7672%20250.301%2015.7524C251.801%2014.7375%20253.359%2013.5853%20254.885%2012.3621C256.411%2011.139%20257.875%209.86907%20259.192%208.6257C260.509%207.38233%20261.653%206.19009%20262.559%205.11776Z'%20fill='white'/%3e%3c/svg%3e",tg="data:image/svg+xml,%3csvg%20width='242'%20height='127'%20viewBox='0%200%20242%20127'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M239.21%204.51512C240.014%203.52722%20240.585%202.66023%20240.892%201.96418C241.198%201.26813%20241.233%200.756786%20240.995%200.459649C240.757%200.162512%20240.25%200.0854627%20239.504%200.232943C238.758%200.380424%20237.787%200.749522%20236.648%201.31894L17.6146%20110.341C16.482%20110.902%2015.2015%20111.654%2013.8469%20112.552C12.4923%20113.45%2011.0905%20114.477%209.72224%20115.574C8.35402%20116.67%207.0465%20117.815%205.8751%20118.942C4.7037%20120.068%203.69163%20121.155%202.89722%20122.138C2.09351%20123.126%201.52199%20123.993%201.21567%20124.689C0.909346%20125.385%200.87425%20125.896%201.11242%20126.193C1.35059%20126.49%201.85732%20126.567%202.60335%20126.42C3.34938%20126.273%204.31999%20125.903%205.45915%20125.334L224.493%2016.3119C225.625%2015.7506%20226.906%2014.9992%20228.26%2014.1011C229.615%2013.2031%20231.017%2012.176%20232.385%2011.0793C233.753%209.98262%20235.061%208.83794%20236.232%207.71131C237.404%206.58467%20238.416%205.49839%20239.21%204.51512Z'%20fill='white'/%3e%3c/svg%3e",ng=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("img",{src:qm,alt:"",className:"style1"}),c.jsx("img",{src:eg,alt:"",className:"style2"}),c.jsx("img",{src:tg,alt:"",className:"style3"})]}),rg="data:image/svg+xml,%3csvg%20width='343'%20height='101'%20viewBox='0%200%20343%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M337.756%202.82053C339.3%202.19061%20340.513%201.65685%20341.327%201.25004C342.14%200.843229%20342.537%200.571418%20342.496%200.450288C342.454%200.329157%20341.973%200.361105%20341.082%200.544288C340.192%200.727471%20338.908%201.05826%20337.305%201.51758L29.4539%2089.5925C27.8637%2090.0466%2025.9836%2090.621%2023.9221%2091.2825C21.8605%2091.944%2019.6583%2092.6795%2017.4424%2093.4466C15.2266%2094.2137%2013.041%2094.9971%2011.0117%2095.7518C8.98235%2096.5064%207.14954%2097.2174%205.61891%2097.8435C4.07519%2098.4735%202.86157%2099.0072%202.04811%2099.414C1.23466%2099.8208%200.837454%20100.093%200.879386%20100.214C0.921318%20100.335%201.40156%20100.303%202.29243%20100.12C3.1833%2099.9366%204.46718%2099.6058%206.06996%2099.1465L313.921%2011.0716C315.511%2010.6174%20317.391%2010.043%20319.453%209.38155C321.514%208.72006%20323.717%207.98456%20325.932%207.21749C328.148%206.45042%20330.334%205.66696%20332.363%204.9123C334.393%204.15763%20336.225%203.44671%20337.756%202.82053Z'%20fill='purple'/%3e%3c/svg%3e",ig="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2034H17.9999C17.4759%2034%2017.0399%2034.405%2017.0019%2034.929C16.9829%2035.19%2016.5929%2041.361%2020.6999%2045.77C23.3129%2048.577%2027.1149%2050%2031.9999%2050C36.8849%2050%2040.6869%2048.577%2043.2999%2045.77C47.4059%2041.36%2047.0159%2035.189%2046.9969%2034.929C46.9599%2034.405%2046.5239%2034%2045.9999%2034ZM41.8239%2044.42C39.6039%2046.795%2036.2999%2048%2031.9999%2048C27.7009%2048%2024.3949%2046.795%2022.1759%2044.42C19.5279%2041.586%2019.0639%2037.745%2018.9979%2036H45.0029C44.9369%2037.745%2044.4729%2041.585%2041.8239%2044.42Z'%20fill='purple'/%3e%3cpath%20d='M18.394%2028.919L25.394%2025.919C25.762%2025.762%2026%2025.4%2026%2025C26%2024.6%2025.762%2024.238%2025.394%2024.081L18.394%2021.081L17.606%2022.919L22.461%2025L17.606%2027.081L18.394%2028.919Z'%20fill='purple'/%3e%3cpath%20d='M38.606%2025.919L45.606%2028.919L46.393%2027.081L41.539%2025L46.393%2022.919L45.606%2021.081L38.606%2024.081C38.238%2024.238%2038%2024.6%2038%2025C38%2025.4%2038.238%2025.762%2038.606%2025.919Z'%20fill='purple'/%3e%3cpath%20d='M32%204C16.561%204%204%2016.561%204%2032C4%2047.439%2016.561%2060%2032%2060C47.439%2060%2060%2047.439%2060%2032C60%2016.561%2047.439%204%2032%204ZM32%2058C17.664%2058%206%2046.336%206%2032C6%2017.664%2017.664%206%2032%206C46.337%206%2058%2017.664%2058%2032C58%2046.336%2046.337%2058%2032%2058Z'%20fill='purple'/%3e%3c/svg%3e",lg=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center styleText",children:c.jsxs("h2",{children:[c.jsx("span",{style:{display:"block",color:"purple"},children:"TOUJOURS SATISFAIT !"}),"Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !"]})}),c.jsx("div",{children:c.jsx("img",{src:ig,className:"styleSmile",alt:""})}),c.jsx("div",{children:c.jsx("img",{src:rg,alt:"",className:"styleLine"})})]});var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Ye.apply(this,arguments)};function eo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,l;r<i;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var le="-ms-",gi="-moz-",J="-webkit-",op="comm",jo="rule",Cu="decl",og="@import",ap="@keyframes",ag="@layer",sg=Math.abs,ku=String.fromCharCode,vs=Object.assign;function ug(e,t){return Pe(e,0)^45?(((t<<2^Pe(e,0))<<2^Pe(e,1))<<2^Pe(e,2))<<2^Pe(e,3):0}function sp(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function kl(e,t){return e.indexOf(t)}function Pe(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function up(e){return e.length}function ii(e,t){return t.push(e),e}function cg(e,t){return e.map(t).join("")}function dd(e,t){return e.filter(function(n){return!Bt(n,t)})}var No=1,_r=1,cp=0,vt=0,Se=0,Ar="";function _o(e,t,n,r,i,l,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:No,column:_r,length:o,return:"",siblings:a}}function rn(e,t){return vs(_o("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Zn(e){for(;e.root;)e=rn(e.root,{children:[e]});ii(e,e.siblings)}function dg(){return Se}function fg(){return Se=vt>0?Pe(Ar,--vt):0,_r--,Se===10&&(_r=1,No--),Se}function Pt(){return Se=vt<cp?Pe(Ar,vt++):0,_r++,Se===10&&(_r=1,No++),Se}function On(){return Pe(Ar,vt)}function El(){return vt}function Po(e,t){return Nr(Ar,e,t)}function ys(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pg(e){return No=_r=1,cp=Mt(Ar=e),vt=0,[]}function hg(e){return Ar="",e}function da(e){return sp(Po(vt-1,xs(e===91?e+2:e===40?e+1:e)))}function mg(e){for(;(Se=On())&&Se<33;)Pt();return ys(e)>2||ys(Se)>3?"":" "}function gg(e,t){for(;--t&&Pt()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Po(e,El()+(t<6&&On()==32&&Pt()==32))}function xs(e){for(;Pt();)switch(Se){case e:return vt;case 34:case 39:e!==34&&e!==39&&xs(Se);break;case 40:e===41&&xs(e);break;case 92:Pt();break}return vt}function vg(e,t){for(;Pt()&&e+Se!==57;)if(e+Se===84&&On()===47)break;return"/*"+Po(t,vt-1)+"*"+ku(e===47?e:Pt())}function yg(e){for(;!ys(On());)Pt();return Po(e,vt)}function xg(e){return hg(jl("",null,null,null,[""],e=pg(e),0,[0],e))}function jl(e,t,n,r,i,l,o,a,s){for(var u=0,d=0,v=o,m=0,S=0,x=0,w=1,P=1,h=1,f=0,g="",p=i,E=l,N=r,k=g;P;)switch(x=f,f=Pt()){case 40:if(x!=108&&Pe(k,v-1)==58){kl(k+=b(da(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=da(f);break;case 9:case 10:case 13:case 32:k+=mg(x);break;case 92:k+=gg(El()-1,7);continue;case 47:switch(On()){case 42:case 47:ii(wg(vg(Pt(),El()),t,n,s),s);break;default:k+="/"}break;case 123*w:a[u++]=Mt(k)*h;case 125*w:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+d:h==-1&&(k=b(k,/\f/g,"")),S>0&&Mt(k)-v&&ii(S>32?pd(k+";",r,n,v-1,s):pd(b(k," ","")+";",r,n,v-2,s),s);break;case 59:k+=";";default:if(ii(N=fd(k,t,n,u,d,i,a,g,p=[],E=[],v,l),l),f===123)if(d===0)jl(k,t,N,N,p,l,v,a,E);else switch(m===99&&Pe(k,3)===110?100:m){case 100:case 108:case 109:case 115:jl(e,N,N,r&&ii(fd(e,N,N,0,0,i,a,g,i,p=[],v,E),E),i,E,v,a,r?p:E);break;default:jl(k,N,N,N,[""],E,0,a,E)}}u=d=S=0,w=h=1,g=k="",v=o;break;case 58:v=1+Mt(k),S=x;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&fg()==125)continue}switch(k+=ku(f),f*w){case 38:h=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(Mt(k)-1)*h,h=1;break;case 64:On()===45&&(k+=da(Pt())),m=On(),d=v=Mt(g=k+=yg(El())),f++;break;case 45:x===45&&Mt(k)==2&&(w=0)}}return l}function fd(e,t,n,r,i,l,o,a,s,u,d,v){for(var m=i-1,S=i===0?l:[""],x=up(S),w=0,P=0,h=0;w<r;++w)for(var f=0,g=Nr(e,m+1,m=sg(P=o[w])),p=e;f<x;++f)(p=sp(P>0?S[f]+" "+g:b(g,/&\f/g,S[f])))&&(s[h++]=p);return _o(e,t,n,i===0?jo:a,s,u,d,v)}function wg(e,t,n,r){return _o(e,t,n,op,ku(dg()),Nr(e,2,-2),0,r)}function pd(e,t,n,r,i){return _o(e,t,n,Cu,Nr(e,0,r),Nr(e,r+1,-1),r,i)}function dp(e,t,n){switch(ug(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+gi+e+le+e+e;case 5936:switch(Pe(e,t+11)){case 114:return J+e+le+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+le+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+le+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+le+e+e;case 6165:return J+e+le+"flex-"+e+e;case 5187:return J+e+b(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return J+e+le+"flex-item-"+b(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":le+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return J+e+le+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+le+b(e,"shrink","negative")+e;case 5292:return J+e+le+b(e,"basis","preferred-size")+e;case 6060:return J+"box-"+b(e,"-grow","")+J+e+le+b(e,"grow","positive")+e;case 4554:return J+b(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return le+"grid-column-align"+Nr(e,t)+e;break;case 2592:case 3360:return le+b(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Bt(r.props,/grid-\w+-end/)})?~kl(e+(n=n[t].value),"span")?e:le+b(e,"-start","")+e+le+"grid-row-span:"+(~kl(n,"span")?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":le+b(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Bt(r.props,/grid-\w+-start/)})?e:le+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(Pe(e,t+1)){case 109:if(Pe(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+gi+(Pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kl(e,"stretch")?dp(b(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,a,s,u){return le+i+":"+l+u+(o?le+i+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if(Pe(e,t+6)===121)return b(e,":",":"+J)+e;break;case 6444:switch(Pe(e,Pe(e,14)===45?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Pe(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+le+"$2box$3")+e;case 100:return b(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function to(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Sg(e,t,n,r){switch(e.type){case ag:if(e.children.length)break;case og:case Cu:return e.return=e.return||e.value;case op:return"";case ap:return e.return=e.value+"{"+to(e.children,r)+"}";case jo:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=to(e.children,r))?e.return=e.value+"{"+n+"}":""}function Cg(e){var t=up(e);return function(n,r,i,l){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,l)||"";return o}}function kg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Eg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cu:e.return=dp(e.value,e.length,n);return;case ap:return to([rn(e,{value:b(e.value,"@","@"+J)})],r);case jo:if(e.length)return cg(n=e.props,function(i){switch(Bt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(rn(e,{props:[b(i,/:(read-\w+)/,":"+gi+"$1")]})),Zn(rn(e,{props:[i]})),vs(e,{props:dd(n,r)});break;case"::placeholder":Zn(rn(e,{props:[b(i,/:(plac\w+)/,":"+J+"input-$1")]})),Zn(rn(e,{props:[b(i,/:(plac\w+)/,":"+gi+"$1")]})),Zn(rn(e,{props:[b(i,/:(plac\w+)/,le+"input-$1")]})),Zn(rn(e,{props:[i]})),vs(e,{props:dd(n,r)});break}return""})}}var jg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tt={},Pr=typeof process<"u"&&tt!==void 0&&(tt.REACT_APP_SC_ATTR||tt.SC_ATTR)||"data-styled",Eu=typeof window<"u"&&"HTMLElement"in window,Ng=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tt!==void 0&&tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tt.REACT_APP_SC_DISABLE_SPEEDY!==""?tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&tt!==void 0&&tt.SC_DISABLE_SPEEDY!==void 0&&tt.SC_DISABLE_SPEEDY!==""&&tt.SC_DISABLE_SPEEDY!=="false"&&tt.SC_DISABLE_SPEEDY),Ro=Object.freeze([]),Rr=Object.freeze({});function _g(e,t,n){return n===void 0&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme}var fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rg=/(^-|-$)/g;function hd(e){return e.replace(Pg,"-").replace(Rg,"")}var Lg=/(a)(d)/gi,md=function(e){return String.fromCharCode(e+(e>25?39:97))};function ws(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=md(t%52)+n;return(md(t%52)+n).replace(Lg,"$1-$2")}var fa,dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pp=function(e){return dr(5381,e)};function Dg(e){return ws(pp(e)>>>0)}function zg(e){return e.displayName||e.name||"Component"}function pa(e){return typeof e=="string"&&!0}var hp=typeof Symbol=="function"&&Symbol.for,mp=hp?Symbol.for("react.memo"):60115,Tg=hp?Symbol.for("react.forward_ref"):60112,Fg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ag=((fa={})[Tg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fa[mp]=gp,fa);function gd(e){return("type"in(t=e)&&t.type.$$typeof)===mp?gp:"$$typeof"in e?Ag[e.$$typeof]:Fg;var t}var Og=Object.defineProperty,Ig=Object.getOwnPropertyNames,vd=Object.getOwnPropertySymbols,$g=Object.getOwnPropertyDescriptor,Ug=Object.getPrototypeOf,yd=Object.prototype;function vp(e,t,n){if(typeof t!="string"){if(yd){var r=Ug(t);r&&r!==yd&&vp(e,r,n)}var i=Ig(t);vd&&(i=i.concat(vd(t)));for(var l=gd(e),o=gd(t),a=0;a<i.length;++a){var s=i[a];if(!(s in Mg||n&&n[s]||o&&s in o||l&&s in l)){var u=$g(t,s);try{Og(e,s,u)}catch{}}}}return e}function Lr(e){return typeof e=="function"}function ju(e){return typeof e=="object"&&"styledComponentId"in e}function Fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ai(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ss(e,t,n){if(n===void 0&&(n=!1),!n&&!Ai(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ss(e[r],t[r]);else if(Ai(t))for(var r in t)e[r]=Ss(e[r],t[r]);return e}function Nu(e,t){Object.defineProperty(e,"toString",{value:t})}function Hi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,l=i;t>=l;)if((l<<=1)<0)throw Hi(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var o=i;o<l;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var l=r;l<i;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),l=i+r,o=i;o<l;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Nl=new Map,no=new Map,_l=1,cl=function(e){if(Nl.has(e))return Nl.get(e);for(;no.has(_l);)_l++;var t=_l++;return Nl.set(e,t),no.set(t,e),t},bg=function(e,t){_l=t+1,Nl.set(e,t),no.set(t,e)},Hg="style[".concat(Pr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Vg=new RegExp("^".concat(Pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wg=function(e,t,n){for(var r,i=n.split(","),l=0,o=i.length;l<o;l++)(r=i[l])&&e.registerName(t,r)},Qg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],l=0,o=r.length;l<o;l++){var a=r[l].trim();if(a){var s=a.match(Vg);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(bg(d,u),Wg(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Kg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Pr,"]")));return s[s.length-1]}(n),l=i!==void 0?i.nextSibling:null;r.setAttribute(Pr,"active"),r.setAttribute("data-styled-version","6.1.1");var o=Kg();return o&&r.setAttribute("nonce",o),n.insertBefore(r,l),r},Yg=function(){function e(t){this.element=yp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,l=r.length;i<l;i++){var o=r[i];if(o.ownerNode===n)return o}throw Hi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Gg=function(){function e(t){this.element=yp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Xg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wd=Eu,Zg={isServer:!Eu,useCSSOMInjection:!Ng},xp=function(){function e(t,n,r){t===void 0&&(t=Rr),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},Zg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Eu&&wd&&(wd=!1,function(l){for(var o=document.querySelectorAll(Hg),a=0,s=o.length;a<s;a++){var u=o[a];u&&u.getAttribute(Pr)!=="active"&&(Qg(l,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Nu(this,function(){return function(l){for(var o=l.getTag(),a=o.length,s="",u=function(v){var m=function(h){return no.get(h)}(v);if(m===void 0)return"continue";var S=l.names.get(m),x=o.getGroup(v);if(S===void 0||x.length===0)return"continue";var w="".concat(Pr,".g").concat(v,'[id="').concat(m,'"]'),P="";S!==void 0&&S.forEach(function(h){h.length>0&&(P+="".concat(h,","))}),s+="".concat(x).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return s}(i)})}return e.registerId=function(t){return cl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Xg(i):r?new Yg(i):new Gg(i)}(this.options),new Bg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(cl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(cl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(cl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jg=/&/g,qg=/^\s*\/\/.*$/gm;function wp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wp(n.children,t)),n})}function ev(e){var t,n,r,i=e===void 0?Rr:e,l=i.options,o=l===void 0?Rr:l,a=i.plugins,s=a===void 0?Ro:a,u=function(m,S,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===jo&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Jg,n).replace(r,u))}),o.prefix&&d.push(Eg),d.push(Sg);var v=function(m,S,x,w){S===void 0&&(S=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=S,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(qg,""),h=xg(x||S?"".concat(x," ").concat(S," { ").concat(P," }"):P);o.namespace&&(h=wp(h,o.namespace));var f=[];return to(h,Cg(d.concat(kg(function(g){return f.push(g)})))),f};return v.hash=s.length?s.reduce(function(m,S){return S.name||Hi(15),dr(m,S.name)},5381).toString():"",v}var tv=new xp,Cs=ev(),Sp=Ge.createContext({shouldForwardProp:void 0,styleSheet:tv,stylis:Cs});Sp.Consumer;Ge.createContext(void 0);function Sd(){return _.useContext(Sp)}var nv=function(){function e(t,n){var r=this;this.inject=function(i,l){l===void 0&&(l=Cs);var o=r.name+l.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,l(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Nu(this,function(){throw Hi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cs),this.name+t.hash},e}(),rv=function(e){return e>="A"&&e<="Z"};function Cd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;rv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cp=function(e){return e==null||e===!1||e===""},kp=function(e){var t,n,r=[];for(var i in e){var l=e[i];e.hasOwnProperty(i)&&!Cp(l)&&(Array.isArray(l)&&l.isCss||Lr(l)?r.push("".concat(Cd(i),":"),l,";"):Ai(l)?r.push.apply(r,eo(eo(["".concat(i," {")],kp(l),!1),["}"],!1)):r.push("".concat(Cd(i),": ").concat((t=i,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function In(e,t,n,r){if(Cp(e))return[];if(ju(e))return[".".concat(e.styledComponentId)];if(Lr(e)){if(!Lr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var i=e(t);return In(i,t,n,r)}var l;return e instanceof nv?n?(e.inject(n,r),[e.getName(r)]):[e]:Ai(e)?kp(e):Array.isArray(e)?Array.prototype.concat.apply(Ro,e.map(function(o){return In(o,t,n,r)})):[e.toString()]}function iv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Lr(n)&&!ju(n))return!1}return!0}var lv=pp("6.1.1"),ov=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&iv(t),this.componentId=n,this.baseHash=dr(lv,n),this.baseStyle=r,xp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fn(i,this.staticRulesId);else{var l=xd(In(this.rules,t,n,r)),o=ws(dr(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(l,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Fn(i,o),this.staticRulesId=o}else{for(var s=dr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var v=this.rules[d];if(typeof v=="string")u+=v;else if(v){var m=xd(In(v,t,n,r));s=dr(s,m+d),u+=m}}if(u){var S=ws(s>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,r(u,".".concat(S),void 0,this.componentId)),i=Fn(i,S)}}return i},e}(),Ep=Ge.createContext(void 0);Ep.Consumer;var ha={};function av(e,t,n){var r=ju(e),i=e,l=!pa(e),o=t.attrs,a=o===void 0?Ro:o,s=t.componentId,u=s===void 0?function(p,E){var N=typeof p!="string"?"sc":hd(p);ha[N]=(ha[N]||0)+1;var k="".concat(N,"-").concat(Dg("6.1.1"+N+ha[N]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,v=d===void 0?function(p){return pa(p)?"styled.".concat(p):"Styled(".concat(zg(p),")")}(e):d,m=t.displayName&&t.componentId?"".concat(hd(t.displayName),"-").concat(t.componentId):t.componentId||u,S=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;x=function(p,E){return w(p,E)&&P(p,E)}}else x=w}var h=new ov(n,m,r?i.componentStyle:void 0);function f(p,E){return function(N,k,D){var O=N.attrs,$=N.componentStyle,X=N.defaultProps,ke=N.foldedComponentIds,ye=N.styledComponentId,yt=N.target,ae=Ge.useContext(Ep),Lt=Sd(),qe=N.shouldForwardProp||Lt.shouldForwardProp,L=function(xe,et,We){for(var st,$t=Ye(Ye({},et),{className:void 0,theme:We}),Le=0;Le<xe.length;Le+=1){var Dt=Lr(st=xe[Le])?st($t):st;for(var xt in Dt)$t[xt]=xt==="className"?Fn($t[xt],Dt[xt]):xt==="style"?Ye(Ye({},$t[xt]),Dt[xt]):Dt[xt]}return et.className&&($t.className=Fn($t.className,et.className)),$t}(O,k,_g(k,ae,X)||Rr),M=L.as||yt,I={};for(var Q in L)L[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?I.as=L.forwardedAs:qe&&!qe(Q,M)||(I[Q]=L[Q]));var Z=function(xe,et){var We=Sd(),st=xe.generateAndInjectStyles(et,We.styleSheet,We.stylis);return st}($,L),Me=Fn(ke,ye);return Z&&(Me+=" "+Z),L.className&&(Me+=" "+L.className),I[pa(M)&&!fp.has(M)?"class":"className"]=Me,I.ref=D,_.createElement(M,I)}(g,p,E)}f.displayName=v;var g=Ge.forwardRef(f);return g.attrs=S,g.componentStyle=h,g.displayName=v,g.shouldForwardProp=x,g.foldedComponentIds=r?Fn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?function(E){for(var N=[],k=1;k<arguments.length;k++)N[k-1]=arguments[k];for(var D=0,O=N;D<O.length;D++)Ss(E,O[D],!0);return E}({},i.defaultProps,p):p}}),Nu(g,function(){return".".concat(g.styledComponentId)}),l&&vp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function kd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ed=function(e){return Object.assign(e,{isCss:!0})};function sv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Lr(e)||Ai(e)){var r=e;return Ed(In(kd(Ro,eo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?In(i):Ed(In(kd(i,t)))}function ks(e,t,n){if(n===void 0&&(n=Rr),!t)throw Hi(1,t);var r=function(i){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return e(t,n,sv.apply(void 0,eo([i],l,!1)))};return r.attrs=function(i){return ks(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ks(e,t,Ye(Ye({},n),i))},r}var jp=function(e){return ks(av,e)},ee=jp;fp.forEach(function(e){ee[e]=jp(e)});const uv=ee(ip)`
    all:unset;
    position:absolute;
    top:0rem; 
    left:0rem;width :100%;
    width : 100%;
    height : 100%;
    

.img{
    position:absolute;
    top:5rem; 
    left:4.5rem;
    display:block;

}

@media screen and  ((width>=350px) and (width<500px)){
    .img{
    position:absolute;
    top:-8rem; 
    left:-1rem;
    display:block;

}
}
@media screen and  ((width>=500px) and (width<=800px)){
.img{
    position:absolute;
    top:-4rem; 
    left:-1.5rem;
    display:block;

}

}
@media screen and  ((width>=800px) and (width<1200px)){
    .img{
    position:absolute;
    top:-5rem; 
    left:-1rem;
    display:block;

}

}
@media screen and  (width>=1200px){
    .img{
    position:absolute;
    top:-4rem; 
    left:1.5rem;
    display:block;

}

}

`,cv=ee(ip)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`,dv=ee(Jm)`

position: absolute;
left:0rem;
top:0rem;
width:100%;
height:100%;

    .image1{
        position: absolute;
        left :19.5rem;
        top :8rem;
    }
    .image2{
        position: absolute;
        left :-1.6rem;
        top :16.2rem;
    }
    .image3{
        position: absolute;
        left :13rem;
        top :24rem;
    }

@media screen and  ((width>=350px) and (width<500px)){
left:-5.5rem;
top:-12.8rem;
width:100%;
height:100%;
}
@media screen and  ((width>=500px) and (width<=800px)){
left:-6rem;
top:-8.8rem;
width:100%;
height:100%;

}
@media screen and  ((width>=800px) and (width<1200px)){
left:-5.5rem;
top:-9.8rem;
width:100%;
height:100%;
}
@media screen and  (width>=1200px){
left:-3rem;
top:-9.0rem;
width:100%;
height:100%;
}
`,fv=ee(lg)`

    .styleText{
    all:unset;
    position:absolute;
    top:10rem;
    left:2rem;
    display:block;
    height:15rem;
    width:80%;
    text-align:center;
    font-family:audrey;
    }
    .styleSmile{
      position: absolute;
      top:9rem;
      right:3rem;
    }
    .styleLine{
      position: absolute;
      top:22rem;
      right:6rem;
    }

@media screen and  ((width>=800px) and (width<1200px)){
    .styleSmile{
      position: absolute;
      top:6.5rem;
      right:0.8rem;
    }
    .styleLine{
      position: absolute;
      top:23rem;
      right:4rem;
    }
}
@media screen and  ((width>=1200px)){
    .styleSmile{
      position: absolute;
      top:2%;
      right:0.5%;
    }
    .styleLine{
      position: absolute;
      top:55%;
      right:7%;
    }
        .styleText{

    top:10%;
    left:2rem;
    display:block;
    height:15rem;
    width:80%;
    text-align:center;
    font-family:audrey;
    }
}


`,pv=ee(ng)`


position: absolute;
left:-7rem;
top:-7rem;
width:100%;
height:100%;

    .style1{
        position: absolute;
        left :6rem;
        top :10rem;
    }
    .style2{
        position: absolute;
        left :6rem;
        top :18rem;
    }
    .style3{
        position: absolute;
        left :10.5rem;
        top :21.5rem;
    }
    `,hv=ee(lp)`

    .img{
    position:absolute;
    top:-4.8rem;
    left:1rem;
    display:block;

    }

@media screen and  ((width>=800px) and (width<1200px)){
    .img{
    position:absolute;
    top:0rem;
    left:0rem;
    display:block;

    }
}
`,mv=ee(lp)`

    .img{
    position:absolute;
    top:-13%;
    left:10%;
    display:block;

    }

@media screen and  ((width>=800px) and (width<950px)){
    .img{
    position:absolute;
    top:-20%;
    left:2%;
    display:block;

    }
}
`,gv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("div",{className:"first",children:c.jsxs("div",{className:"first-container",children:[c.jsx(pv,{}),c.jsx(hv,{})]})}),c.jsx("div",{className:"second",children:c.jsx("div",{className:"second-container",children:c.jsx(fv,{})})}),c.jsx("div",{className:"third",children:c.jsxs("div",{className:"third-container",children:[c.jsx(uv,{}),c.jsx(dv,{}),"          "]})})]}),vv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("h2",{children:c.jsx("span",{children:"chezArdi"})}),c.jsx("h3",{children:"Commandez vos produits et soyez livrer où que vous soyer à Kinshasa"}),c.jsx("div",{})]}),yv=ee(vv)`
    all: unset;
    position:absolute;
    top:-7%;
    left:5%;
    display:block;
    border-top-right-radius:45%;
    border-bottom-left-radius:45%;
    height:70%;
    width:100%;
    background-color:rgba(0,0,0,0.1);
    font-family:audrey;

h2{
    margin-left:10%;
    margin-top:10%;
    font-size:5rem;
    text-align:left;
    letter-spacing:1px;
    font-weight:100;
}
h2 span{
    color:purple;
}
h3{
    margin-top:5%;
    margin-left:20%;
    width:70%;
    font-size:30px;
    text-align:justify;
    letter-spacing:1px;
    font-weight:500
}
@media screen and  ((width>=500px) and (width<950px)){
    h3{
    text-align:left;
    font-size:25px;

    }
}

@media screen and  ((width>=950px) and (width<1375px)){
    h3{
    text-align:left;
    font-size:28px;
    }
}
@media screen and  ((width>=800px) and (width<950px)){
    h2{
        font-size:3rem;
    }
}
@media screen and  (max-width:799px){
    left:0%;
        top:-13%;

    h2{
    font-size:4rem;

    }
}

`,xv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("div",{className:"first",children:c.jsx("div",{className:"container-first",children:c.jsx(yv,{})})}),c.jsx("div",{className:"second",children:c.jsx("div",{className:"container-second",children:c.jsx(mv,{})})})]}),wv="data:image/svg+xml,%3csvg%20width='240'%20height='201'%20viewBox='0%200%20240%20201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_184_251)'%3e%3cpath%20d='M209.83%2083.5349L52.22%2038.9572C47.8199%2037.7127%2043.2414%2037.787%2039.4918%2039.1637C35.7422%2040.5404%2033.1286%2043.1068%2032.2259%2046.2982L20.3139%2088.415C19.4112%2091.6065%2020.2935%2095.1616%2022.7665%2098.2983C25.2396%20101.435%2029.1009%20103.896%2033.501%20105.141L114.795%20128.133L137.936%20147.675L130.307%20132.521L191.111%20149.718C195.511%20150.963%20200.09%20150.889%20203.84%20149.512C207.589%20148.135%20210.203%20145.569%20211.105%20142.377L223.017%20100.261C223.92%2097.0692%20223.038%2093.5141%20220.565%2090.3774C218.092%2087.2407%20214.23%2084.7794%20209.83%2083.5349Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.8166%2050.9906C47.5827%2064.2224%2043.3749%2094.9374%2045.1998%2095.4536C47.0248%2095.9698%2078.2222%2065.8055%2080.296%2066.3921C82.3698%2066.9786%2078.9617%2099.9342%2090.8239%20108.358C93.8019%2097.8285%20103.606%2072.9849%20116.03%2066.7518'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.102%20105.347C143.623%20114.584%20132.052%20120.018%20123.259%20117.531C114.466%20115.044%20111.852%20105.598%20117.331%2096.3608C122.81%2087.1239%20134.381%2081.6892%20143.174%2084.1762C151.967%2086.6632%20154.581%2096.1098%20149.102%20105.347Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M198.873%20119.424C193.394%20128.661%20181.823%20134.095%20173.03%20131.608C164.237%20129.121%20161.623%20119.675%20167.102%20110.438C172.582%20101.201%20184.153%2095.7664%20192.946%2098.2534C201.739%20100.74%20204.353%20110.187%20198.873%20119.424Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_184_251'%3e%3crect%20width='206.897'%20height='150.065'%20fill='purple'%20transform='translate(40.8413)%20rotate(15.7927)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Sv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("div",{className:"first",children:c.jsx("p",{children:"Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa"})}),c.jsx("div",{className:"style3",children:c.jsx("img",{src:wv,alt:""})})]}),Cv="/assets/dots1-b2Sj8ewq.svg",kv="/assets/dots2-xnZsoQ1q.svg",Ev="/assets/dots3-AkDKMIjG.svg",jv="/assets/dots4-PsKuw_9x.svg",Nv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx(cv,{}),c.jsx("img",{src:Cv,className:"style2",alt:""}),c.jsx("img",{src:kv,className:"style3",alt:""}),c.jsx("img",{src:Ev,className:"style4",alt:""}),c.jsx("img",{src:jv,className:"style5",alt:""})]}),_v="/assets/img_3-DTECnV5R.png",Pv=({className:e})=>c.jsx("div",{className:e,children:c.jsx("img",{src:_v,alt:"",className:"img"})}),Rv="/assets/dots5-OjWdiGOn.svg",Lv="/assets/dots6-p_drzvwO.svg",Dv="/assets/dots7-DmXCMvbn.svg",zv="/assets/dots8-Midirh2A.svg",Tv=ee(Pv)`
.img{
        position:absolute;
        top:3rem;
        scale: 0.9;
        left:1.5rem;
        display:block;
    }
@media screen and ((width >=755px) and (width< 1130px)) {
    .img{
        top:3rem;

        scale:0.8;
    }
}
@media screen and ((width >=400px) and (width< 755px)) {
    .img{
        left:13%;
        top:20%;

        scale:0.8;
    }
}
@media screen and ((width< 400px)) {
    .img{
        left:-3%;
        top:6rem;
        scale:0.8;
    }
}
`,Fv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("img",{src:Rv,className:"style2",alt:""}),c.jsx("img",{src:Lv,className:"style3",alt:""}),c.jsx("img",{src:zv,className:"style5",alt:""}),c.jsx(Tv,{}),c.jsx("img",{src:Dv,className:"style4",alt:""})]}),Mv=ee(Nv)`

        position:absolute;
        left:-5%;
        top:-30%;
        min-width:350px;
        width:100%;
        height:100%;

    .style2{
        position:absolute;
        left:6rem;
        top:0rem;
        display:block;

    }
    .style3{
        position:absolute;
        left:25rem;
        display:block;
        top:0;

    }
    .style4{
        position:absolute;
        left:-2rem;
        display:block;
        top:25rem;

    }
    .style5{
        position:absolute;
        left:11rem;
        display:block;
        top:28rem;

    }
@media screen and ((width >=755px) and (width< 915px)) {

    .style3{
        left:90%;

    }
    
}
`,Av=ee(Fv)`

        position:absolute;
        left:4%;
        top:-25%;
        width:100%;
        height:100%;
    
    .style2{
        position:absolute;
        left:22rem;
        top:2rem;
        display:block;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
    .style4{
        position:absolute;
        left:-5rem;
        display:block;
        top:26.5rem;

    }
    .style5{
        position:absolute;
        left:13rem;
        display:block;
        top:14rem;

    }
@media screen and ((width >=400px) and (width< 1130px)) {
    .style2{
        z-index:10;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
}

`,Ov=ee(Sv)`
    position:absolute;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    display:block;
    height:15rem;
    width:90%;
    text-align:center;
    font-family:audrey;
    
  
    .style3{
        position:absolute;
        left:50%;
        top:-60%;
    }

.first{
    font-size:2rem;
    text-align:center;
    letter-spacing:1.4px;
    font-weight:500;
    }
`,Iv=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("div",{className:"first",children:c.jsx("div",{className:"first-container",children:c.jsx(Mv,{})})}),c.jsx("div",{className:"second",children:c.jsx("div",{className:"second-container",children:c.jsx(Ov,{})})}),c.jsx("div",{className:"third",children:c.jsx("div",{className:"third-container",children:c.jsx(Av,{})})})]}),ma=({image:e,text:t,style:n})=>{const r={position:"Absolute",fontFamily:"audrey",fontSize:"inherit",fontWeight:"bolder",color:"white",textAlign:"center"},i={position:"relative",display:"flex",fontSize:"inherit",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"#DADAD6",boxShadow:"-10px 10px 20px #000000",marginBottom:"3rem"};return c.jsx("div",{style:{...i,...n},children:c.jsx("div",{className:"px-4",style:r,children:e?c.jsx("img",{src:e,alt:""}):c.jsx("div",{className:"spanText",children:t})})})},$v=ee(gv)`
width: 100%;
height: 100%;
    margin-top:3.5rem;
    display: grid;
grid-template-columns: 32% 34% 34%;

.styleImg2{
    position:absolute;
    top:3.8rem;
    left:8rem;
    display:block;
    }


.first{
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;

}
.second{
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;
    display: grid;
    place-items: center;
    overflow-x: hidden;

}
.second-container{
    word-wrap:break-word;
}
.third{
    all:unset;
    position: relative;
    
}

@media screen and  ((width<500px)){
grid-template-columns:100%;
height: 90%;


    .first{
        display: none;
}
.second{
        display: none;
        visibility:hidden;
}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:350px;
    position:inherit;
    top:12%;


}


}
@media screen and  ((width>=500px) and (width<800px)){
grid-template-columns:100%;
height: 90%;

    .first{
        display: none;
}
.second{
        display: none;
        visibility:hidden;
}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:500px;
    position:inherit;

}

}
@media screen and  ((width>=800px) and (width<1200px)){
grid-template-columns:50% 50%;
height: 100%;

    .first{
        display: none;
}
.second{

}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:500px;
    position:inherit;

}

}
@media screen and  ((width>=1200px)){
grid-template-columns:32% 34% 34%;

    .first{
        display: flex;
        justify-content: center;
        align-items: center;
}
.first-container{
    position : inherit;
        width:400px;
        max-width:500px;
        height:500px;
        max-height: 600px;
}
.second{

}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.second-container{
    height:500px;
    max-height:600px;
    width:100%;
    min-width:300px;
    position:inherit;
    word-wrap:break-word;

}
.third-container{
    height:500px;
    max-height:600px;
    width:400px;
    max-width:500px;
    position:inherit;

}

}
@media screen and (max-width:767px) {
    margin-top:5rem;
}

`,Uv=ee(xv)`
    all: unset;
    width: 100%;
    height: 100%;
    display: grid;
        margin-top:3.5rem;
    grid-template-columns : 50% 50%;
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;

    .first{
        position : relative;
        display: grid;
        place-items : center;
        overflow-x: hidden;
    }
    .second{
        position : relative;
        display: grid;
        place-items: center;
        overflow-x: hidden;

    }
    .container-first {
        min-width:400px;
        position: inherit;
        width : 70%;
        height : 500px;
    }
    .container-second {
        min-width:400px;
        position: inherit;
        width : 70%;
        height : 500px;
    }
@media screen and  ((width>=800px) and (width<950px)){
        height: 85%;

    .container-first{
            min-width :350px;
            height : 400px;
    }
    .container-second{
            min-width :350px;
            height : 400px;

    }
}
@media screen and  (max-width:799px){
    grid-template-columns:100%;
    height:80%;
    .second{
        display: none;
    }
    .first{
        overflow:hidden;
    }
    .container-first{
            min-width :350px;
            width:90%;
            top: 10%;
    }
}
@media screen and (max-width:767px) {
    margin-top:2rem;
}
`,Bv=ee(Iv)`

    width: 100%;
    height: 100%;
    display: grid;
    margin-top:3.5rem;
    grid-template-columns: 32% 34% 34%;
.third,
.first {
    position: relative;
    display: grid;
    place-items:  center;
    overflow-x:  hidden;

    

}
.second {
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;
    display: grid;
    place-items:center;
    overflow-x: hidden;

}
.first-container, .second-container,.third-container{
    position: inherit;
    min-width:300px;
    width: 95%;
    height:500px
}
@media screen and ((width >=755px) and (width< 1130px)) {
    grid-template-columns: 50% 50%;
    .second{
        display: none;
    }
.first-container, .third-container{
    min-width:350px;
    width: 95%;
    height:500px
}
    
}
@media screen and ((width >=500px)and (width< 755px)) {
        height: 85%;

    grid-template-columns: 100%;
    .second, .first{
        display: none;
    }
.third-container{
    min-width:350px;
    width: 95%;
    height:500px
}
    
}
@media screen and ((width <500px)) {
        height: 85%;

    grid-template-columns: 100%;
    .second, .first{
        display: none;
    }
.third-container{
    min-width:350px;
    width: 95%;
    height:500px;
}
    
}
@media screen and (max-width:767px) {
    margin-top:5rem;
}
`,bv="/assets/img_5-R_nZnJim.png",Hv="/assets/img_6-ej2dVkQl.png",Vv=({className:e})=>{const t="Livraison gratuite à partir de 50$";return c.jsxs("div",{className:e,children:[c.jsx("div",{className:"first",children:c.jsx(ma,{image:Hv})}),c.jsx("div",{className:"second",children:c.jsx(ma,{text:t,style:{backgroundColor:"#787373"}})}),c.jsx("div",{className:"third",children:c.jsx(ma,{image:bv})})]})},Wv=ee(Vv)`
  --gradient: linear-gradient(
    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
    position: absolute;
    width: 100%;
    top: 70vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25rem 25rem 25rem;
    height: 20rem;
    overflow:hidden;
    gap:1rem;

    place-content: center;

            .first,.second,.third{
            font-size:2.5rem;


        }
    @media screen and ((width>=1100px)and (width<1270px)){
        grid-template-columns: 23rem 23rem 23rem;

        gap:0px;
        .first,.second,.third{
            scale: 0.9;
            font-size:2rem;

        }
        
    }
    @media screen and ((width>=845px)and (width<1100px)){
        grid-template-columns: 33% 33% 33%;
        justify-content: center;

        gap:0px;
        .first,.second,.third{
            scale: 0.78;
            min-width:19rem;
            font-size:1.7rem;


        }
        
    }
    @media screen and ((width>=655px)and (width<845px)){
        grid-template-columns: 32% 32% 32%;
        justify-content: center;
                    width:100%;

        .first,.second,.third{
            scale: 0.9;
            font-size:1.4rem;

            min-width:15rem;


        }
        
    }
    @media screen and ((width>=200px)and (width<655px)){
        grid-template-columns: 70% 70%;
        grid-template-rows:100%;
        justify-content: center;
        width:100%;
        gap:0px;

        .first{
            transform:translateX(20%);

        }
        .second{

            animation: animation2 10s infinite;
            animation-delay:4s;
        }
        .third{
            /* animation: animation3 12s infinite;
            animation-delay:6s; */
            display:none;

        }

        .first,.second,.third{
            font-size:1rem;
            min-width:15rem;


        }
        
    }
   
@keyframes animation1 {
    0%{
        z-index:1000;
    }
    10%{
        z-index:1000;
    }
    50%{
        z-index:1000;
        transition: z-index ease-out;
    }

    
}
@keyframes animation2 {
    0%{
        opacity:1;
    }

    50%{
        opacity:1;
        transform: translateX(-30%)
    }
    60%{
        opacity:1;    }

    
}
@keyframes animation3 {
    0%{
        z-index:1000;
    }
    75%{
        z-index:1000;
        opacity:0.8;
    }

    100%{
        z-index:-1000;
        opacity:1;
    }
    
}

`,Np=()=>{const[e,t]=_.useState(0),n=[c.jsx(Bv,{}),c.jsx(Uv,{}),c.jsx($v,{})],r=()=>{t(i=>(i+1)%n.length)};return _.useEffect(()=>{const i=setInterval(()=>{r()},2e3);return()=>{clearInterval(i)}},[]),c.jsxs("div",{className:"section1-1",children:[c.jsx("div",{className:"box-section1-1",children:n[e]}),c.jsx(Wv,{})]})},ro="/assets/png_1-psFfvH_j.png",_p="/assets/png_3-ilcu5yhJ.png",Pp="/assets/png_4-pi7uzOjc.png",Qv="/assets/png_5-PB77ItoP.png",Rp="/assets/png_6-IaEkgori.png",Lp="/assets/png_9-HkEXkKWn.png",Kv="/assets/png_2-op38kcqj.png",Yv="/assets/png_7-zH4XEwQ0.png",Gv="/assets/png_8-JODtVRir.png",ga=[{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:ro},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:Kv},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:_p},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:Pp},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:Qv},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:Rp},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:Yv},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:Gv},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:Lp},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:ro}],va=[{category:"accessoires",slug:"Les chargeurs et tous type d'accessoires que vous voudrez"},{category:"telephones",slug:"iphone, samsung et tous types de telephone que vous voudrez vous procurer"},{category:"montres",slug:"Gucci, louis vuitton, davinchi, toustes ses marques sont disponibles ice chez nous"}],Xv=({className:e})=>{const t=ga.filter(i=>i.categorie=="accessoire"),n=ga.filter(i=>i.categorie=="montre"),r=ga.filter(i=>i.categorie=="telephone");return c.jsxs("div",{className:e,style:{backgroundColor:"#DADAD6"},children:[c.jsx("div",{className:"nav",children:c.jsxs("div",{children:[c.jsx("span",{children:c.jsx("a",{href:"#potable-link",children:"Portable"})}),c.jsx("span",{children:c.jsx("a",{href:"#montre-link",children:"Montre"})}),c.jsx("span",{children:c.jsx("a",{href:"#accessoitre-link",children:"Accessoire"})})]})}),c.jsxs("div",{className:"section2-1",children:[c.jsx(ya,{id:"accessoitre-link",articles:t,categories:va,category:"accessoires"}),c.jsx(ya,{id:"montre-link",articles:n,categories:va,category:"montres"}),c.jsx(ya,{id:"potable-link",articles:r,categories:va,category:"telephones"}),c.jsxs("div",{className:"box2-1 flexDisplay hoverEffect",children:[c.jsx("div",{className:"textStyle",children:c.jsx("p",{children:"Ecouteurs Bluetooth"})}),c.jsx("div",{className:"img1 img",children:c.jsx("img",{src:ro,width:"100%",alt:"",className:"w-100"})})]}),c.jsxs("div",{className:"box2-2 flexDisplay hoverEffect",children:[c.jsx("div",{className:"textStyle",children:c.jsx("p",{children:"Ecouteurs Bluetooth"})}),c.jsx("div",{className:"img1 img",children:c.jsx("img",{src:ro,width:"100%",alt:"",className:"w-100"})})]}),c.jsxs("div",{className:"box2-3 flexDisplay hoverEffect",children:[c.jsx("div",{className:"textStyle",children:c.jsx("p",{children:"Montres connectées"})}),c.jsx("div",{className:"img3 img",children:c.jsx("img",{src:Pp,width:"100%",alt:"",className:"w-100"})})]}),c.jsxs("div",{className:"box2-4 flexDisplay hoverEffect",children:[c.jsx("div",{className:"textStyle",children:c.jsx("p",{children:"Balladeurs"})}),c.jsx("div",{className:"img4 img",children:c.jsx("img",{src:_p,width:"100%",alt:"",className:"w-100"})})]}),c.jsxs("div",{className:"box2-5 flexDisplay hoverEffect",children:[c.jsx("div",{className:"textStyle",children:c.jsx("p",{children:"Cables chargeurs"})}),c.jsx("div",{className:"img5 img",children:c.jsx("img",{src:Rp,width:"100%",alt:"",className:"w-100 h-100"})})]}),c.jsxs("div",{className:"box2-6 flexDisplay hoverEffect",children:[c.jsx("div",{className:"textStyle",children:c.jsx("p",{children:"Chargeurs"})}),c.jsx("div",{className:"img6 img",children:c.jsx("img",{src:Lp,alt:"",width:"100%",className:"h-100 "})})]})]}),c.jsx("div",{})]})},ya=({id:e,articles:t,category:n,categories:r})=>{const i=t[0];console.log("-------",i);const[l,o]=_.useState({...i}),[a,s]=_.useState(i.id);console.log("****",l);function u(d){const v=t.filter(m=>m.id==d);o(v[0]),console.log("%%%%%",l),s(d),console.log("??????",a)}return c.jsxs("div",{style:{width:"100%"},className:"list-article",children:[c.jsxs("div",{className:"category",style:{},children:[c.jsx("div",{}),c.jsx("div",{children:n}),c.jsx("div",{id:e})]}),c.jsx("div",{className:"articles",children:t.map((d,v)=>c.jsx(Zv,{...d},v))}),c.jsxs("div",{className:"slug",children:[c.jsx("div",{}),c.jsx("div",{children:r.filter(d=>d.category===n)[0].slug})]}),c.jsx("div",{className:"listImg",style:{overflowX:"hidden"},children:c.jsx("div",{children:t.map(d=>c.jsx("div",{className:`${a==d.id?"imgHover":""}`,style:{height:"100%",aspectRatio:"1/1",flexShrink:0},children:c.jsx("img",{src:d.image,className:"img-fluid",alt:"",style:{filter:"drop-shadow(10px 10px 5px 4px)",display:"block",height:"100%",width:"100%"},onClick:()=>u(d.id)},d.id)}))})}),c.jsx("div",{className:"articleBox",children:c.jsx(Jv,{...l})}),c.jsx("div",{className:"square",children:t.filter((d,v)=>v<5).map(d=>c.jsxs("div",{className:"square-box",children:[c.jsx("img",{src:d.image,width:"100%",alt:"",className:"w-100"}),c.jsxs("div",{children:[c.jsx("span",{children:d.name}),c.jsxs("span",{children:[d.price," ",c.jsx("span",{className:"dollarSign",children:"$"})," ",!d.pricePromo||c.jsxs("span",{className:"promo-1",children:[d.pricePromo," ",c.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),c.jsx("a",{href:"#",children:"Acheter"}),c.jsx("a",{href:"#",children:"Ajouter au panier"})]})]}))})]})},Zv=({name:e,image:t,price:n,pricePromo:r,longName:i})=>c.jsxs("div",{className:"singleArticle",children:[c.jsx("img",{src:t,alt:""}),c.jsxs("span",{children:[n," ",c.jsx("span",{className:"dollarSign",children:"$"})," ",!r||c.jsxs("span",{className:"promo-1",children:[r," ",c.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),c.jsxs("span",{children:[e," "]}),c.jsx("span",{children:i}),c.jsx("div",{children:"Ajouter au panier"})]}),Jv=({name:e,image:t,price:n,pricePromo:r,longName:i})=>c.jsxs("div",{className:"singleArticle2",children:[c.jsx("img",{src:t,alt:""}),c.jsxs("span",{children:[n," ",c.jsx("span",{className:"dollarSign",children:"$"})," ",!r||c.jsxs("span",{className:"promo-1",children:[r," ",c.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),c.jsxs("span",{children:[e," "]}),c.jsxs("span",{children:[" ",i," "]}),c.jsx("a",{href:"#",target:"_blank",children:"Discuter avec nous"}),c.jsx("div",{children:"Acheter maintenant"}),c.jsx("div",{children:"Acheter maintenant"})]}),qv=ee(Xv)`
  --gradient: linear-gradient(
    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
position : relative;
.list-article{
  display: none;
}

.square{
  display:none;
}
.nav{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10000;
    position: sticky;
    top:11rem;
    margin-top:6rem;
    height:2.4rem;
    background-color:#F9FF00;
    opacity:1;
    margin-bottom:3px;
    border: solid 1px #E5E9EC;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:20rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:20rem;
  }
  .img1{
    width:35rem;
    height:25rem;
  }
  .img2{
    width:15rem;
    height:15rem;
  }
  .img3{
    width:25rem;
    height:25rem;

  }
  .img4{
    width:25rem;
    height:25rem;
  }
  .img5{
    width:15rem;
    height:15rem;
  }
  .img6{
    width:25rem;
    height:20rem;
  }
.section2-1{

    margin-bottom: 1rem;
    height: 170vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 40vh 40vh 1fr  40vh;
    gap: 3px;
}
.textStyle{
  all:unset;
  width:100%;
  text-align:center;
    position:absolute;
    display:block;
    overflow:hidden;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-family:audrey;
    font-size:2.3rem;
    font-weight:bolder;
    color:#787373;
    text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
.box2-1 {
    grid-area: b1;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: b2;
    background-color: #E5E9EC;
}

.box2-3 {
    grid-area: b3;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: b4;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: b5;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: b6;
    background-color: #FDD771;
}
@media screen and  (width<=500px){
  /* rrrrrrrrrrrrrrrrrrrrrrrrr */
  .singleArticle2{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .singleArticle2> span{
    display: block;
  }
  .singleArticle2>img{
    display:block;
     margin:0 auto;
     width:300px;
    height:300px
  }
    .singleArticle{
      position:relative;
      box-shadow: 7px 0 5px -5px grey, -7px 0 5px -5px grey;
    width:100%;
    height:100%;
    border-top: transparent;
    display: flex;
    flex-direction: column;
    border-radius:5px;
  }


    .singleArticle> span{
    display: block;
    padding-left:1rem;
  }
    .singleArticle>span:nth-child(2){
      font-size:25px;
      font-family:_salsa !important;
      color: #302e2e;
      padding-bottom:.6rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(2) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-30%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through;
    font-size:14px;
    font-weight:900;
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:900;
    color : black;

  }
    .singleArticle2>span:nth-child(2){
      font-size:25px;
      font-family:_salsa !important;
      color: black;
      text-align:center;
  }
    .singleArticle>span:nth-child(3){
      font-size:27px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:27px;

  }
    .singleArticle2>span:nth-child(3){
      font-size:25px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
  }
    .singleArticle>span:nth-child(4){
        font-family:Arial, Helvetica, sans-serif !important;
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
      height:45px;
      overflow-y:scroll;
  }
    .singleArticle2>span:nth-child(4){
        font-family:Arial, Helvetica, sans-serif !important;
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
      height:70px;
      text-align:center;
      overflow-y:scroll;
  }
  .singleArticle>div{
    text-align:center;
    font-weight:bold;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
  }
    .singleArticle>div:active{
        background-color:#DADAD6 ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color: black;
    font-family: Arial, Helvetica, sans-serif !important;


  }
  .singleArticle2>div{
    text-align:center;
    font-weight:600;
    font-family: Arial, Helvetica, sans-serif !important;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:0.2rem 1rem;
  }
  .singleArticle2>div:active{
        background-color:#DADAD6 ;
  }

    .singleArticle>img{
    display:block;
     margin:.5rem auto;
     width:300px;
    height:300px;

  }
  
  .imgHover::before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:3px;
    background-color:rgba(0,0,0,0.1);
    

  }
  .imgHover{
    position: relative;
  }

  .articleSquare{

  }
  .articleBox{
    position:absolute;
    top : 55rem;
    left:0;
    height:35rem;
    width:100%;
    overflow:hidden;
    background-color:#DADAD6;
    background-size:400%;
    animation:backgroundPosition 20s infinite alternate;

  }
  @keyframes backgroundPosition {
    0%{
        background-position:left;
    }
    100%{
        background-position:right;
    }
    
  }
  .listImg{
    position: absolute;
    top:45rem;
    left:0;
    height:10rem;
    width:100%;
  }
  .listImg>div{
    display:flex;
    overflow-x:scroll;
    height:100%;
    width:100%;
  }
  .articles{
    display:flex;
    gap:0 .7rem;
    overflow-x:scroll;
    position: absolute;
    top:0;
    right:0;
    width:100%;
    padding-top:4rem;
    height:35rem;
    background-color:#DADAD6 ;

  }

  .slug{
    z-index:  3000;;
    position: absolute;
    left:0;
    top:35rem;
    overflow-x:hidden;
    height:10rem;
    width:100%;
    background-color:#DADAD6 ;
  }
  .slug>div:nth-child(1){
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:#DADAD6;
    border-radius: 0 0 50% 50%/0 0 100% 100%;

  }
  .slug>div:nth-child(2){
    position: absolute;
    width:90%;
    height:50%;
    background-color: transparent;
    text-align: center;
    font-family:_salsa !important;
    font-size:16px;
    color : black;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

  }
  .category{
    z-index:  3000;;

    height:4.1rem;
    width:100%;
    position: absolute;
    top:0;
    left:0;
    overflow-x:hidden;
    background-color:transparent;
  }
  .category>div:nth-child(1){

    background-color:grey;
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:#DADAD6;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
  }
   .category>div:nth-child(3){
    position: absolute;
    height: 5rem;
    left:0;
    bottom: 100%;
    width:100%;
    z-index:-100;
   }
    .category>div:nth-child(2){
    position: absolute;
    font-size:22px;
    text-transform:uppercase;
    width:90%;
    height:50%;
    background-color: transparent;
    text-align: center;
    font-family:_salsa !important;
    color : black;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div>span>*{
      font-size:16px;
      font-family: Arial, Helvetica, sans-serif !important;
      text-decoration:none;
      color: black;
    }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:2rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:2rem;
  }
  .section2-1{
  height: unset;
  width: 100%;
  display: grid;
  margin-top:0px;
  grid-template-columns:repeat(1,100%);
  grid-template-rows:130.4rem 130.4rem 130.4rem ;
  grid-template-areas:unset;
  gap:0px;
}
.nav{
  margin-top:4rem;

}
.section2-1+div{
  height:1rem;
  width:100%;
  background-color:#DADAD6 ;
}
.square{
  position: absolute;
  top:90rem;
  left:0;
  height:40rem;
  overflow:hidden;
  display:grid;
  grid-template-columns:50% 50%;
  grid-template-rows:50% 50%;
}
.square-box{
  position: relative;
  height:100%;
  width:100%;
  background-color:grey;
  overflow: hidden;
}
.square-box::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  font-family:Arial, Helvetica, sans-serif !important;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:#DADAD6 ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
@keyframes colorAnimation {
  0%{
    color: rgba(0,0,0,1);
  }
  50%{
    color:rgba(0,0,0,.3);
  }
}
.square-box>img{
  width:100%;
  height:70%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:900;
  text-transform: uppercase;
  color : #353131;
  text-align:center;
}
.square-box>div>span:nth-child(2){

  color : #353131;
  text-align:center;
  font-family: _salsa !important;
    display:inline-block;

}
.square-box>div>a:nth-child(3){
  color : #353131;
  font-family: Arial, Helvetica, sans-serif !important;
  font-style:italic;
  font-weight:lighter;
  font-size:14px;
  text-decoration:underline;
}
.square-box>div>a:nth-child(4){
    font-family: Arial, Helvetica, sans-serif !important;

  color : #353131;
  font-style:italic;
  font-weight:lighter;
  font-size:14px;
  line-height:14px;
  text-decoration:underline;
}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  color:white;
  background-color:#DADAD6;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width:100%;
  height:30%;
}
.textStyle{
  all: unset;
  display: none;
  }
  .flexDisplay,.flexDisplay::before,.flexDisplay::after{
    all: unset;
    display:block;

  }

.img{
  display:none;
}


.list-article{
  display:block;
  position:relative;
  height:100%;
  overflow-y:hidden;
  background-color:#DADAD6;
}
  .box2-1 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-2 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-3 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-4 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-5 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-6 {
    grid-area: unset;
    background-color: #DADAD6;
}
}
@media screen and ((width>500px) and (width<=900px)) {
  .nav{
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:8rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:8rem;
  }
  .box2-1 {
    grid-area: unset;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: unset;
    background-color: #bfccd3;
}

.box2-3 {
    grid-area: unset;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: unset;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: unset;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: unset;
    background-color: #FDD771;
}
.nav{
    width:100%;
    display:flex;
    margin-top:6rem;
    height:2.4rem;
  }
.textStyle{
    position:Absolute;
    font-family:audrey;
    font-size:1.3rem;
    font-weight:bolder;
    color:black;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
    .section2-1{
    margin-bottom: 1rem;
    width: 100%;
    height:unset;
    grid-template-rows: unset;
    display: grid;
    grid-template-areas: unset;
    grid-template-columns: repeat(2, 50%);
    gap: 1px;
}
.flexDisplay{
  height:20rem;
  min-height:15rem;
}

  .img1{
    width:15rem;
    height:10rem;
  }
  .img2{
    width:8rem;
    height:8rem;
  }
  .img3{
    width:9rem;
    height:9rem;

  }
  .img4{
    width:10rem;
    height:10rem;
  }
  .img5{
    width:5rem;
    height:5rem;
  }
  .img6{
    width:15rem;
    height:10rem;
  }
}


@media screen and ((width<=1000px) and (width>900px)) {
    .section2-1{
    margin-bottom: 1rem;
    height: 130vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 37vh 30vh 1fr  30vh;
    gap: 2px;
}
.textStyle{
  font-size:1.5rem;
  color : black;
  text-shadow:unset;
}
.nav{
}
  .img1{
    width:20rem;
    height:10rem;
  }
  .img2{
    width:11rem;
    height:11rem;
  }
  .img3{
    width:15rem;
    height:15rem;

  }
  .img4{
    width:15rem;
    height:15rem;
  }
  .img5{
    width:10rem;
    height:10rem;
  }
  .img6{
    width:18rem;
    height:13rem;
  }
    
}
`;ee(Np)`
    position: relative;
    width: 100%;
    height: 100vh;


.first{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.second{
    position: absolute;
    width: 80%;
    left: 50%;
    top: 70vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25rem 25rem 25rem;
    justify-content: space-between;
    transform: translateX(-50%);
    height: 20rem;
}
`;const ey=()=>c.jsxs("div",{className:"home-screen",style:{backgroundColor:"#DADAD6"},children:[c.jsx(Np,{}),c.jsx(qv,{})]}),ty="/assets/jpg_1-7lt4SJ85.jpg",ny=({className:e})=>c.jsx("div",{className:e,children:c.jsxs("div",{className:"first",children:[c.jsx("div",{className:"img-content",children:c.jsx("img",{src:ty,width:"100%",alt:"",srcset:""})}),c.jsx("div",{className:"text",children:"Livraison où que vous soyez à Kinshasa"})]})}),ry=ee(ny)`
width:100%;
height:40vh;
margin-top:3rem;
position: relative;
display: flex;
position: relative;
align-items:center;
justify-content:center;

margin-top:3.5rem;

.first{
    overflow: hidden;
    background-image: linear-gradient(to left, #F9FF00, #F9FF00, #FFFFFF, #FFFFFF);
    position: relative;
    width:100%;
    height:100%;
    min-width:4rem;
    min-height:4rem;
}
.img-content{
    height:200%;
    position: absolute;
    top:-55%;
    left:-5%;
    aspect-ratio:1/1;
    overflow: hidden;
}
.text{
    position : absolute;
    left : 50%;
    top : 50%;
    transform: translate(-50%, -50%);
        position:Absolute;
    font-family:audrey;
    font-size:2rem;
    font-weight:bolder;
    color:black;
    text-align:center;
}
@media screen and (max-width:767px) {
    margin-top:5rem;
}

`,iy="/assets/jpg_2-1pXFpQc3.jpg",ly=({className:e})=>c.jsx("div",{className:e,children:c.jsx("div",{className:"image"})}),Ne=ee(ly)`
width:calc(25%);

aspect-ratio : 1/1;
min-width: 10px;
overflow: hidden;
border: solid;
background-color: red;
.image{
    width : 100%;
    height:70%;
}

`,oy=({className:e})=>c.jsxs("div",{className:e,children:[c.jsx("div",{className:"first",children:c.jsx("div",{className:"image",children:c.jsx("img",{src:iy,alt:""})})}),c.jsxs("div",{className:"second",children:[c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{}),c.jsx(Ne,{})]})]}),ay=ee(oy)`
width:100%;
min-height:100vh;
margin-bottom:1rem;
height:fit-content;
margin-top:5px;
border-top:solid 1px;
position: relative;
overflow:hidden;
.first{
    width :20%;
height :100vh;
    display: inline-block;
    position: absolute;
    top: 0;
    left : 0;
    overflow: hidden;
}
.image{
    position : absolute;
    left : -30%;
}
.second{
    position: absolute;
    top: 0;
    right:0;
    border: solid red;
    display:flex;
    flex-wrap:wrap;
    width:80%;
    height : fit-content;
}
`,sy=()=>c.jsxs("div",{children:[c.jsx(ry,{}),c.jsx(ay,{})]}),uy=()=>c.jsx("div",{children:c.jsx(sy,{})}),cy=({className:e,children:t})=>c.jsx("div",{children:c.jsx("button",{className:`btn btn-outline-success  form-control ${e}`,type:"submit",children:t})}),dy="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_99_272)'%3e%3cpath%20d='M30.4126%2029.25H16.9126C16.0888%2029.2516%2015.2875%2028.9819%2014.6323%2028.4826C13.9771%2027.9833%2013.5045%2027.2822%2013.2876%2026.4875L10.0001%2014.575C9.94953%2014.3896%209.9424%2014.195%209.97926%2014.0064C10.0161%2013.8178%2010.096%2013.6402%2010.2126%2013.4875C10.3341%2013.3294%2010.4917%2013.2026%2010.6722%2013.1178C10.8527%2013.033%2011.0508%2012.9926%2011.2501%2013H35.0001C35.1837%2012.9997%2035.3652%2013.0399%2035.5315%2013.1177C35.6979%2013.1954%2035.8451%2013.3089%2035.9626%2013.45C36.0786%2013.5913%2036.1623%2013.7563%2036.2076%2013.9334C36.253%2014.1105%2036.259%2014.2954%2036.2251%2014.475L34.1001%2026.175C33.9422%2027.0379%2033.4867%2027.8182%2032.813%2028.38C32.1392%2028.9419%2031.2899%2029.2497%2030.4126%2029.25ZM12.9126%2015.5L15.7251%2025.825C15.7983%2026.0977%2015.9618%2026.3376%2016.1887%2026.5055C16.4157%2026.6735%2016.6929%2026.7597%2016.9751%2026.75H30.4751C30.7711%2026.7548%2031.0592%2026.6545%2031.2881%2026.4668C31.517%2026.2791%2031.6718%2026.0162%2031.7251%2025.725L33.5001%2015.5H12.9126Z'%20fill='black'/%3e%3cpath%20d='M11.25%2015.5C10.9694%2015.5104%2010.6936%2015.426%2010.4668%2015.2605C10.24%2015.0949%2010.0756%2014.8579%2010%2014.5875L8.0625%207.6625C7.98689%207.39213%207.82246%207.15508%207.5957%206.98954C7.36894%206.82401%207.09306%206.73963%206.8125%206.75H5C4.66848%206.75%204.35054%206.61831%204.11612%206.38389C3.8817%206.14947%203.75%205.83152%203.75%205.5C3.75%205.16848%203.8817%204.85054%204.11612%204.61612C4.35054%204.3817%204.66848%204.25%205%204.25H6.8625C7.67925%204.24885%208.47404%204.51438%209.12608%205.00623C9.77812%205.49808%2010.2518%206.18936%2010.475%206.975L12.5%2013.9125C12.5508%2014.0766%2012.5672%2014.2495%2012.5482%2014.4203C12.5293%2014.5911%2012.4753%2014.7561%2012.3896%2014.9051C12.304%2015.054%2012.1886%2015.1838%2012.0506%2015.2861C11.9125%2015.3885%2011.7549%2015.4613%2011.5875%2015.5C11.4757%2015.5182%2011.3618%2015.5182%2011.25%2015.5Z'%20fill='black'/%3e%3cpath%20d='M20%2036.75C19.5055%2036.75%2019.0222%2036.6034%2018.6111%2036.3287C18.2%2036.054%2017.8795%2035.6635%2017.6903%2035.2067C17.5011%2034.7499%2017.4516%2034.2472%2017.548%2033.7623C17.6445%2033.2773%2017.8826%2032.8319%2018.2322%2032.4822C18.5819%2032.1326%2019.0273%2031.8945%2019.5123%2031.798C19.9972%2031.7016%2020.4999%2031.7511%2020.9567%2031.9403C21.4135%2032.1295%2021.804%2032.45%2022.0787%2032.8611C22.3534%2033.2722%2022.5%2033.7555%2022.5%2034.25C22.5%2034.913%2022.2366%2035.5489%2021.7678%2036.0178C21.2989%2036.4866%2020.663%2036.75%2020%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2036.75C27.0055%2036.75%2026.5222%2036.6034%2026.1111%2036.3287C25.7%2036.054%2025.3795%2035.6635%2025.1903%2035.2067C25.0011%2034.7499%2024.9516%2034.2472%2025.048%2033.7623C25.1445%2033.2773%2025.3826%2032.8319%2025.7322%2032.4822C26.0819%2032.1326%2026.5273%2031.8945%2027.0123%2031.798C27.4972%2031.7016%2027.9999%2031.7511%2028.4567%2031.9403C28.9135%2032.1295%2029.304%2032.45%2029.5787%2032.8611C29.8534%2033.2722%2030%2033.7555%2030%2034.25C30%2034.913%2029.7366%2035.5489%2029.2678%2036.0178C28.7989%2036.4866%2028.163%2036.75%2027.5%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2021.75H20C19.6685%2021.75%2019.3505%2021.6183%2019.1161%2021.3839C18.8817%2021.1495%2018.75%2020.8315%2018.75%2020.5C18.75%2020.1685%2018.8817%2019.8505%2019.1161%2019.6161C19.3505%2019.3817%2019.6685%2019.25%2020%2019.25H27.5C27.8315%2019.25%2028.1495%2019.3817%2028.3839%2019.6161C28.6183%2019.8505%2028.75%2020.1685%2028.75%2020.5C28.75%2020.8315%2028.6183%2021.1495%2028.3839%2021.3839C28.1495%2021.6183%2027.8315%2021.75%2027.5%2021.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_99_272'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",fy=({className:e})=>c.jsxs("div",{className:` ${e}`,children:[c.jsx("img",{src:dy,alt:"",className:"w-100 h-100"}),c.jsx("div",{className:"counter",children:"02"})]}),py="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20enable-background='new%200%200%2032%2032'%20height='35px'%20version='1.1'%20viewBox='0%200%2032%2032'%20width='35px'%20xml:space='preserve'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='Whatsapp'%3e%3cpath%20d='M16.004,31c-2.868,0-5.646-0.811-8.05-2.347l-5.348,1.709c-0.179,0.057-0.376,0.009-0.509-0.125%20c-0.132-0.134-0.178-0.332-0.117-0.51l1.725-5.146C1.935,22.061,1,19.1,1,16c0-4.076,1.612-7.891,4.539-10.742%20C5.736,5.066,6.053,5.07,6.246,5.267c0.192,0.198,0.188,0.515-0.01,0.707C3.505,8.636,2,12.196,2,16%20c0,2.974,0.922,5.811,2.665,8.204c0.095,0.131,0.121,0.3,0.069,0.454l-1.492,4.452l4.633-1.481%20c0.144-0.047,0.302-0.024,0.429,0.059C10.589,29.2,13.252,30,16.004,30C23.722,30,30,23.72,30,16c0-7.719-6.278-14-13.996-14%20c-0.001,0-0.002,0-0.003,0c-2.167,0-4.238,0.481-6.164,1.429C9.589,3.55,9.29,3.449,9.168,3.202S9.147,2.654,9.396,2.532%20C11.46,1.516,13.682,1,15.996,1C24.272,1,31,7.729,31,16S24.272,31,16.004,31z'%20fill='%23008000'/%3e%3cg%3e%3cpath%20d='M20.602,24.493L20.602,24.493c-1.011,0-2.422-0.39-4.439-1.226c-2.633-1.09-5.243-3.374-7.35-6.429%20l-0.075-0.107c-0.696-0.951-1.823-2.773-1.823-4.675c0-2.229,1.115-3.36,1.592-3.843c0.449-0.461,1.12-0.706,1.874-0.706%20c0.19,0,0.36,0.009,0.515,0.018c0.635,0.025,1.003,0.185,1.353,1.022l0.363,0.88c0.384,0.931,0.857,2.08,0.931,2.235%20c0.082,0.169,0.331,0.688,0.054,1.228c-0.148,0.316-0.293,0.483-0.492,0.713c-0.14,0.161-0.233,0.261-0.328,0.361%20c-0.11,0.118-0.222,0.234-0.334,0.375c-0.193,0.226-0.193,0.226-0.128,0.339c0.37,0.625,1.157,1.825,2.253,2.8%20c1.422,1.265,2.571,1.73,3.123,1.954l0.137,0.056c0.145,0.06,0.328,0.103,0.465-0.042c0.248-0.267,0.562-0.706,0.894-1.171%20l0.199-0.279c0.349-0.493,0.779-0.597,1.078-0.597c0.175,0,0.357,0.035,0.543,0.105c0.465,0.162,2.912,1.381,2.937,1.393%20l0.235,0.115c0.35,0.168,0.626,0.301,0.784,0.579c0.229,0.398,0.139,1.442-0.209,2.427c-0.417,1.179-1.967,2.1-3.213,2.368%20C21.293,24.438,20.998,24.493,20.602,24.493z%20M10.38,8.507c-0.472,0-0.902,0.142-1.124,0.369c-0.461,0.468-1.342,1.361-1.342,3.18%20c0,1.181,0.585,2.658,1.605,4.051l0.116,0.165c1.998,2.898,4.452,5.055,6.909,6.072c1.893,0.785,3.182,1.15,4.057,1.15l0,0%20c0.3,0,0.523-0.042,0.727-0.085c0.973-0.21,2.198-0.929,2.479-1.724c0.304-0.857,0.298-1.516,0.262-1.647%20c-0.002,0.031-0.182-0.054-0.327-0.124l-0.249-0.122c-0.701-0.351-2.513-1.236-2.83-1.347c-0.084-0.032-0.148-0.045-0.202-0.045%20c-0.045,0-0.138,0-0.264,0.178l-0.2,0.28c-0.351,0.492-0.682,0.956-0.976,1.272c-0.377,0.403-1.024,0.515-1.581,0.283%20l-0.127-0.052c-0.557-0.225-1.862-0.753-3.413-2.133c-1.196-1.066-2.049-2.363-2.451-3.042c-0.423-0.729,0.006-1.231,0.212-1.472%20c0.131-0.163,0.259-0.298,0.387-0.434c0.084-0.089,0.168-0.178,0.254-0.278c0.225-0.259,0.299-0.345,0.396-0.552%20c0.029-0.057,0.045-0.138-0.059-0.354c-0.076-0.16-0.562-1.334-0.953-2.286l-0.362-0.877c-0.165-0.396-0.165-0.396-0.479-0.408%20C10.701,8.515,10.549,8.507,10.38,8.507z'%20fill='%23008000'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='7.5'%20cy='4'%20fill='%23008000'%20r='0.5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var Dp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jd=Ge.createContext&&Ge.createContext(Dp),xn=function(){return xn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xn.apply(this,arguments)},hy=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function zp(e){return e&&e.map(function(t,n){return Ge.createElement(t.tag,xn({key:n},t.attr),zp(t.child))})}function my(e){return function(t){return Ge.createElement(gy,xn({attr:xn({},e.attr)},t),zp(e.child))}}function gy(e){var t=function(n){var r=e.attr,i=e.size,l=e.title,o=hy(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Ge.createElement("svg",xn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:xn(xn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&Ge.createElement("title",null,l),e.children)};return jd!==void 0?Ge.createElement(jd.Consumer,null,function(n){return t(n)}):t(Dp)}function Tp(e){return my({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const vy=({className:e})=>{const t={border:"solid 0.5px purple"};return c.jsxs("div",{className:`input-group ${e}`,children:[c.jsx("div",{className:"input-group-prepend",children:c.jsx("button",{className:"btn btn-outline-secondary dropdown-toggle",style:t,type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Catégorie"})}),c.jsx("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}),c.jsx("div",{class:"input-group-append",children:c.jsxs("button",{class:"btn btn-outline-secondary ",type:"button",style:t,children:["   ",c.jsx(Tp,{size:24,color:"#333"})]})})]})},yy=ee(vy)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`,xy=({className:e})=>c.jsx("div",{className:e,children:c.jsx(Tp,{})}),wy=ee(xy)`
        display:none;

    @media screen and (max-width: 767px) {
        display:block;
        width:20px;
        color:#333;

        transform:translateY(0%);
        
    }
`,Sy=({className:e})=>c.jsx("div",{className:e,children:c.jsx("img",{src:py,className:"w-100",alt:""})}),Cy=ee(Sy)`

    width:35px;
    height:35px;
    min-height:15px;
    min-width:15px;
@media screen and (max-width:800px) {
    height:25px;
    width:25px;
        
    }

`,ky=({className:e})=>{const[t,n]=_.useState(!0);function r(){n(i=>!i),console.log(t)}return c.jsx("div",{className:e,children:c.jsxs("div",{className:t&&"menu-down",onClick:()=>r(),children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{}),c.jsx("div",{})]})})},Ey=ee(ky)`
        display:none;


        @media screen and (max-width: 767px) {
        width:22px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;
        }
        &>div>div{
            background-color:red;
            position: absolute;
            top:66px;
            right:0;
            width:50px;
            height:300%;

        }
        span{
            transition: all .2s;
            overflow:hidden;

        }
        span:nth-child(1),span:nth-child(3){
            display: block;
            height:2px;
            margin-top:3px;
            width:100%;
            background-color: black;   

        }

        span:nth-child(2){
            display: block;
            height:2px;
            margin-top:3px;
            width:70%;
            background-color: black;   
            transform: translateX(30%);
        }
        .menu-down>span:nth-child(2){
            display:none;
        }
        .menu-down>span:nth-child(1){
            width:80%;
            transform: translateX(20%) translateY(5px) rotate(45deg) ;


        }
        .menu-down>span:nth-child(3){
            width:80%;
            transform:  translateX(20%) translateY(0px) rotate(-45deg);
        }
        .menu-down{
            width:100%;
            height:100%;
            position: relative;
        }


        display:block;
        transform:translateY(18%);

        
    }
`,jy=ee(fy)`
    width:40px;
    height:40px;
    min-height:15px;
    min-width:15px;
    position:relative;
    transform : translateY(0%);
.counter{
    position: absolute;
    top:-7px;
    right: 8px;
    color: black;
    font-weight: bold;
    color: purple;
}

@media screen and (max-width:800px) {
    transform : translateY(10%);

    height:25px;
    width:25px;
    .counter{
    position: absolute;
    top:-7px;
    font-size:12px;
    right: 4px;
    color: black;
    font-weight: bold;
    color: purple;
}

        
    }
`,Nd={Home:"/",Products:"/produits"},Ny=({className:e})=>c.jsx("div",{children:c.jsx(c.Fragment,{children:c.jsx("nav",{className:`navbar-css ${e}`,children:c.jsxs("div",{className:" navbar  row container-fluid-css-2",children:[c.jsxs("div",{className:"first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between",children:[c.jsxs(sd,{to:Nd.Home,className:"link-css title-css navbar-brand  d-block",children:[c.jsx("img",{src:"/docs/4.3/assets/brand/bootstrap-solid.svg",width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"ChezArdi"]}),c.jsx(yy,{}),c.jsxs("div",{className:"d-flex flex-row flex-row justify-content-between",children:[c.jsx(wy,{}),c.jsx("div",{style:{marginLeft:"12px"}}),c.jsx(Ey,{})]})]}),c.jsx("div",{className:"second-col  col-md-4 col-lg-3 col-12 ",children:c.jsxs("ul",{className:"navbar-nav  list-css d-flex flex-row align-items-center justify-content-between",children:[c.jsx(sd,{to:Nd.Products,className:"link-css nav-item d-block",children:"Produits"}),c.jsxs("li",{className:"nav-item d-block d-flex flex-row",children:[c.jsx(Cy,{}),c.jsx("div",{style:{marginLeft:"7px"}}),c.jsx(jy,{})]})]})})]})})})}),_y=ee(cy)`
width:100%;
@media screen and (max-width: 500px) {
    
}
`,Py=()=>c.jsx("div",{className:"",style:{backgroundColor:"black"},children:c.jsx("div",{class:"",style:{backgroundColor:"black"},children:c.jsxs("footer",{style:{backgroundColor:"grey"},className:"text-center text-lg-start",children:[c.jsx("div",{className:"container p-4",children:c.jsxs("div",{className:"row",children:[c.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[c.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Nous contacter"}),c.jsxs("ul",{className:"list-unstyled mb-4",children:[c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"ardi@gmail.com"})}),c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"ardi2@gmail.com"})})]})]}),c.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[c.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Information"}),c.jsxs("ul",{className:"list-unstyled",children:[c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"FAQs"})}),c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"Qui sommes nous ?"})}),c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"Politique de confidentialité"})})]})]}),c.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[c.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Services"}),c.jsxs("ul",{className:"list-unstyled",children:[c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"Mode de paiement"})}),c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"Signaler un produit"})}),c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"Comment acheter chez nous ?"})}),c.jsx("li",{children:c.jsx("a",{href:"#!",className:"text-white",children:"Retour et remboursement"})})]})]}),c.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[c.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"S'inscrire à notre newsletter"}),c.jsxs("div",{className:"form-outline form-white mb-4",children:[c.jsx("input",{type:"email",id:"form5Example2",className:"form-control"}),c.jsx("label",{className:"form-label text-white",for:"form5Example2",children:"Adresse mail"}),c.jsx(_y,{children:" sqd"})]})]})]})}),c.jsxs("div",{class:"text-center p-3 border-top border-black text-white",children:["© 2024 Copyright:",c.jsx("a",{class:"text-white",href:"#",children:"patrick mulu"})]})]})})}),Ry=ee(Ny)`
    div .first-col{
        padding-left:1.5rem;
    }
    div .second-col{
        padding-left:1.5rem;
    }
`,Ly=()=>c.jsx(c.Fragment,{children:c.jsxs("div",{className:"theApp",children:[c.jsx(Ry,{}),c.jsx("div",{className:"container-fluid-css",children:c.jsx(Nm,{})}),c.jsx(Py,{})]})}),Dy=()=>c.jsx("div",{children:c.jsx("p",{children:"This is error page"})}),zy=Tm(gs(c.jsxs(ri,{path:"/",element:c.jsx(Ly,{}),children:[c.jsx(ri,{index:!0,element:c.jsx(ey,{})}),c.jsx(ri,{path:"/produits",element:c.jsx(uy,{})}),c.jsx(ri,{path:"*",element:c.jsx(Dy,{})})]})));xa.createRoot(document.getElementById("root")).render(c.jsx(Ge.StrictMode,{children:c.jsx(bm,{router:zy})}));
