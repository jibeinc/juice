exports.UI=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){"use strict";var r=n(41),i={$:n(1),Dot:n(29),i18n:n(9),BaseFragmentFactory:n(11),PubSubHub:n(14),State:n(37),URL:n(40),Button:n(28),CurrentLocation:n(12),ExpandCollapse:n(30),ListView:n(13),SingleSelect:n(36),MultiSelect:n(33),Pagination:n(34),InfiniteScroll:n(31),TextInput:n(15),Toggle:n(16),Typeahead:n(17),LocationTypeahead:n(32),SentenceGenerator:n(35)};i.init=function(){return r.apply(i,arguments)},e.exports=i},function(e,t,n){var r,i;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */
!function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){function a(e){var t="length"in e&&e.length,n=re.type(e);return"function"===n||re.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function s(e,t,n){if(re.isFunction(t))return re.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return re.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(fe.test(t))return re.filter(t,e,n);t=re.filter(t,e)}return re.grep(e,function(e){return Q.call(t,e)>=0!==n})}function u(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function l(e){var t=me[e]={};return re.each(e.match(ye)||[],function(e,n){t[n]=!0}),t}function c(){te.removeEventListener("DOMContentLoaded",c,!1),n.removeEventListener("load",c,!1),re.ready()}function f(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=re.expando+f.uid++}function p(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Oe,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:ke.test(n)?re.parseJSON(n):n}catch(i){}we.set(e,t,n)}else n=void 0;return n}function h(){return!0}function d(){return!1}function g(){try{return te.activeElement}catch(e){}}function v(e,t){return re.nodeName(e,"table")&&re.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function y(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function m(e){var t=ze.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n=0,r=e.length;r>n;n++)Ae.set(e[n],"globalEval",!t||Ae.get(t[n],"globalEval"))}function x(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Ae.hasData(e)&&(o=Ae.access(e),a=Ae.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)re.event.add(t,i,l[i][n])}we.hasData(e)&&(s=we.access(e),u=re.extend({},s),we.set(t,u))}}function A(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&re.nodeName(e,t)?re.merge([e],n):n}function w(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Se.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function k(e,t){var r,i=re(t.createElement(e)).appendTo(t.body),o=n.getDefaultComputedStyle&&(r=n.getDefaultComputedStyle(i[0]))?r.display:re.css(i[0],"display");return i.detach(),o}function O(e){var t=te,n=Me[e];return n||(n=k(e,t),"none"!==n&&n||(Be=(Be||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Be[0].contentDocument,t.write(),t.close(),n=k(e,t),Be.detach()),Me[e]=n),n}function E(e,t,n){var r,i,o,a,s=e.style;return n=n||He(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||re.contains(e.ownerDocument,e)||(a=re.style(e,t)),Ue.test(a)&&Ke.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function P(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function j(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=$e.length;i--;)if(t=$e[i]+n,t in e)return t;return r}function S(e,t,n){var r=Ye.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function T(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=re.css(e,n+Pe[o],!0,i)),r?("content"===n&&(a-=re.css(e,"padding"+Pe[o],!0,i)),"margin"!==n&&(a-=re.css(e,"border"+Pe[o]+"Width",!0,i))):(a+=re.css(e,"padding"+Pe[o],!0,i),"padding"!==n&&(a+=re.css(e,"border"+Pe[o]+"Width",!0,i)));return a}function C(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=He(e),a="border-box"===re.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=E(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ue.test(i))return i;r=a&&(ee.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+T(e,t,n||(a?"border":"content"),r,o)+"px"}function L(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=Ae.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&je(r)&&(o[a]=Ae.access(r,"olddisplay",O(r.nodeName)))):(i=je(r),"none"===n&&i||Ae.set(r,"olddisplay",i?n:re.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function I(e,t,n,r,i){return new I.prototype.init(e,t,n,r,i)}function N(){return setTimeout(function(){et=void 0}),et=re.now()}function R(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Pe[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function q(e,t,n){for(var r,i=(at[t]||[]).concat(at["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function W(e,t,n){var r,i,o,a,s,u,l,c,f=this,p={},h=e.style,d=e.nodeType&&je(e),g=Ae.get(e,"fxshow");n.queue||(s=re._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,re.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=re.css(e,"display"),c="none"===l?Ae.get(e,"olddisplay")||O(e.nodeName):l,"inline"===c&&"none"===re.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],nt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;d=!0}p[r]=g&&g[r]||re.style(e,r)}else l=void 0;if(re.isEmptyObject(p))"inline"===("none"===l?O(e.nodeName):l)&&(h.display=l);else{g?"hidden"in g&&(d=g.hidden):g=Ae.access(e,"fxshow",{}),o&&(g.hidden=!d),d?re(e).show():f.done(function(){re(e).hide()}),f.done(function(){var t;Ae.remove(e,"fxshow");for(t in p)re.style(e,t,p[t])});for(r in p)a=q(d?g[r]:0,r,f),r in g||(g[r]=a.start,d&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function J(e,t){var n,r,i,o,a;for(n in e)if(r=re.camelCase(n),i=t[r],o=e[n],re.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=re.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function D(e,t,n){var r,i,o=0,a=ot.length,s=re.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=et||N(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:re.extend({},t),opts:re.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:et||N(),duration:n.duration,tweens:[],createTween:function(t,n){var r=re.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(J(c,l.opts.specialEasing);a>o;o++)if(r=ot[o].call(l,e,c,l.opts))return r;return re.map(c,q,l),re.isFunction(l.opts.start)&&l.opts.start.call(e,l),re.fx.timer(re.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ye)||[];if(re.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function z(e,t,n,r){function i(s){var u;return o[s]=!0,re.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===kt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function X(e,t){var n,r,i=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&re.extend(!0,e,r),e}function V(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function B(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function M(e,t,n,r){var i;if(re.isArray(t))re.each(t,function(t,i){n||St.test(e)?r(e,i):M(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==re.type(t))r(e,t);else for(i in t)M(e+"["+i+"]",t[i],n,r)}function K(e){return re.isWindow(e)?e:9===e.nodeType&&e.defaultView}var U=[],H=U.slice,Z=U.concat,Y=U.push,Q=U.indexOf,G={},_=G.toString,$=G.hasOwnProperty,ee={},te=n.document,ne="2.1.4",re=function(e,t){return new re.fn.init(e,t)},ie=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,oe=/^-ms-/,ae=/-([\da-z])/gi,se=function(e,t){return t.toUpperCase()};re.fn=re.prototype={jquery:ne,constructor:re,selector:"",length:0,toArray:function(){return H.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:H.call(this)},pushStack:function(e){var t=re.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return re.each(this,e,t)},map:function(e){return this.pushStack(re.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(H.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Y,sort:U.sort,splice:U.splice},re.extend=re.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||re.isFunction(a)||(a={}),s===u&&(a=this,s--);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(re.isPlainObject(r)||(i=re.isArray(r)))?(i?(i=!1,o=n&&re.isArray(n)?n:[]):o=n&&re.isPlainObject(n)?n:{},a[t]=re.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},re.extend({expando:"jQuery"+(ne+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===re.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!re.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==re.type(e)||e.nodeType||re.isWindow(e)?!1:e.constructor&&!$.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?G[_.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=re.trim(e),e&&(1===e.indexOf("use strict")?(t=te.createElement("script"),t.text=e,te.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(oe,"ms-").replace(ae,se)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=a(e);if(n){if(s)for(;o>i&&(r=t.apply(e[i],n),r!==!1);i++);else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s)for(;o>i&&(r=t.call(e[i],i,e[i]),r!==!1);i++);else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ie,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(a(Object(e))?re.merge(n,"string"==typeof e?[e]:e):Y.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:Q.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=a(e),u=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&u.push(r);else for(i in e)r=t(e[i],i,n),null!=r&&u.push(r);return Z.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),re.isFunction(e)?(r=H.call(arguments,2),i=function(){return e.apply(t||this,r.concat(H.call(arguments)))},i.guid=e.guid=e.guid||re.guid++,i):void 0},now:Date.now,support:ee}),re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()});var ue=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
<<<<<<< HEAD
function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,h,d,g;if((t?t.ownerDocument||t:z)!==I&&L(t),t=t||I,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!r&&R){if(11!==s&&(i=me.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&D(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return _.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&A.getElementsByClassName)return _.apply(n,t.getElementsByClassName(a)),n}if(A.qsa&&(!q||!q.test(e))){if(h=f=F,d=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=E(e),(f=t.getAttribute("id"))?h=f.replace(xe,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",u=l.length;u--;)l[u]=h+p(l[u]);d=be.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return _.apply(n,d.querySelectorAll(g)),n}catch(v){}finally{f||t.removeAttribute("id")}}}return j(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=I.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)w.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||H)-(~e.sourceIndex||H);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=V++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l=[X,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[F]||(t[F]={}),(s=u[r])&&s[0]===X&&s[1]===o)return l[2]=s[2];if(u[r]=l,l[2]=e(t,n,a))return!0}}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function v(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function y(e,t,n,i,o,a){return i&&!i[F]&&(i=y(i)),o&&!o[F]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,p=[],h=[],d=a.length,y=r||g(t||"*",s.nodeType?[s]:s,[]),m=!e||!r&&t?y:v(y,p,e,s,u),b=n?o||(r?e:d||i)?[]:a:m;if(n&&n(m,b,s,u),i)for(l=v(b,h),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[h[c]]=!(m[h[c]]=f));if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(m[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else b=v(b===a?b.splice(d,b.length):b),o?o(null,a,b,u):_.apply(a,b)})}function m(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];i>s;s++)if(n=w.relative[e[s].type])c=[h(d(c),n)];else{if(n=w.filter[e[s].type].apply(null,e[s].matches),n[F]){for(r=++s;i>r&&!w.relative[e[r].type];r++);return y(s>1&&d(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,r>s&&m(e.slice(s,r)),i>r&&m(e=e.slice(r)),i>r&&p(e))}c.push(n)}return d(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,h=0,d="0",g=r&&[],y=[],m=S,b=r||o&&w.find.TAG("*",l),x=X+=null==m?1:Math.random()||.1,A=b.length;for(l&&(S=a!==I&&a);d!==A&&null!=(c=b[d]);d++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){u.push(c);break}l&&(X=x)}i&&((c=!p&&c)&&h--,r&&g.push(c))}if(h+=d,i&&d!==h){for(f=0;p=n[f++];)p(g,y,a,s);if(r){if(h>0)for(;d--;)g[d]||y[d]||(y[d]=Q.call(u));y=v(y)}_.apply(u,y),l&&!r&&y.length>0&&h+n.length>1&&t.uniqueSort(u)}return l&&(X=x,S=m),g};return i?r(a):a}var x,A,w,k,O,E,P,j,S,T,C,L,I,N,R,q,W,J,D,F="sizzle"+1*new Date,z=e.document,X=0,V=0,B=n(),M=n(),K=n(),U=function(e,t){return e===t&&(C=!0),0},H=1<<31,Z={}.hasOwnProperty,Y=[],Q=Y.pop,G=Y.push,_=Y.push,$=Y.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(ae),he=new RegExp("^"+ie+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,ye=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,xe=/'|\\/g,Ae=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},ke=function(){L()};try{_.apply(Y=$.call(z.childNodes),z.childNodes),Y[z.childNodes.length].nodeType}catch(Oe){_={apply:Y.length?function(e,t){G.apply(e,$.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}A=t.support={},O=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:z;return r!==I&&9===r.nodeType&&r.documentElement?(I=r,N=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",ke,!1):n.attachEvent&&n.attachEvent("onunload",ke)),R=!O(r),A.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),A.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),A.getElementsByClassName=ye.test(r.getElementsByClassName),A.getById=i(function(e){return N.appendChild(e).id=F,!r.getElementsByName||!r.getElementsByName(F).length}),A.getById?(w.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&R){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(Ae,we);return function(e){return e.getAttribute("id")===t}}):(delete w.find.ID,w.filter.ID=function(e){var t=e.replace(Ae,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),w.find.TAG=A.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):A.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=A.getElementsByClassName&&function(e,t){return R?t.getElementsByClassName(e):void 0},W=[],q=[],(A.qsa=ye.test(r.querySelectorAll))&&(i(function(e){N.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||q.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||q.push("~="),e.querySelectorAll(":checked").length||q.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||q.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&q.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(A.matchesSelector=ye.test(J=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&i(function(e){A.disconnectedMatch=J.call(e,"div"),J.call(e,"[s!='']:x"),W.push("!=",ae)}),q=q.length&&new RegExp(q.join("|")),W=W.length&&new RegExp(W.join("|")),t=ye.test(N.compareDocumentPosition),D=t||ye.test(N.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return C=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!A.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===z&&D(z,e)?-1:t===r||t.ownerDocument===z&&D(z,t)?1:T?ee(T,e)-ee(T,t):0:4&n?-1:1)}:function(e,t){if(e===t)return C=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:T?ee(T,e)-ee(T,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===z?-1:l[i]===z?1:0},r):I},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==I&&L(e),n=n.replace(fe,"='$1']"),A.matchesSelector&&R&&(!W||!W.test(n))&&(!q||!q.test(n)))try{var r=J.call(e,n);if(r||A.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,I,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==I&&L(e),D(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==I&&L(e);var n=w.attrHandle[t.toLowerCase()],r=n&&Z.call(w.attrHandle,t.toLowerCase())?n(e,t,!R):void 0;return void 0!==r?r:A.attributes||!R?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(C=!A.detectDuplicates,T=!A.sortStable&&e.slice(0),e.sort(U),C){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return T=null,e},k=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=k(t);return n},w=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ae,we),e[3]=(e[3]||e[4]||e[5]||"").replace(Ae,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ae,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s;if(v){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[a?v.firstChild:v.lastChild],a&&m){for(c=v[F]||(v[F]={}),l=c[e]||[],h=l[0]===X&&l[1],p=l[0]===X&&l[2],f=h&&v.childNodes[h];f=++h&&f&&f[g]||(p=h=0)||d.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[X,h,p];break}}else if(m&&(l=(t[F]||(t[F]={}))[e])&&l[0]===X)p=l[1];else for(;(f=++h&&f&&f[g]||(p=h=0)||d.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(m&&((f[F]||(f[F]={}))[e]=[X,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=w.pseudos[e]||w.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(i=[e,e,"",n],w.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=P(e.replace(ue,"$1"));return i[F]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(Ae,we),function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:r(function(e){return he.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ae,we).toLowerCase(),function(t){var n;do if(n=R?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===I.activeElement&&(!I.hasFocus||I.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})w.pseudos[x]=u(x);return f.prototype=w.filters=w.pseudos,w.setFilters=new f,E=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=M[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=w.preFilter;s;){(!r||(i=le.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length));for(a in w.filter)!(i=de[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):M(e,u).slice(0)},P=t.compile=function(e,t){var n,r=[],i=[],o=K[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=m(t[n]),o[F]?r.push(o):i.push(o);o=K(e,b(i,r)),o.selector=e}return o},j=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&E(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&A.getById&&9===t.nodeType&&R&&w.relative[o[1].type]){if(t=(w.find.ID(a.matches[0].replace(Ae,we),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((u=w.find[s])&&(r=u(a.matches[0].replace(Ae,we),be.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return _.apply(n,r),n;break}}return(l||P(e,f))(r,t,!R,n,be.test(e)&&c(t.parentNode)||t),n},A.sortStable=F.split("").sort(U).join("")===F,A.detectDuplicates=!!C,L(),A.sortDetached=i(function(e){return 1&e.compareDocumentPosition(I.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),A.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(n);re.find=ue,re.expr=ue.selectors,re.expr[":"]=re.expr.pseudos,re.unique=ue.uniqueSort,re.text=ue.getText,re.isXMLDoc=ue.isXML,re.contains=ue.contains;var le=re.expr.match.needsContext,ce=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fe=/^.[^:#\[\.,]*$/;re.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?re.find.matchesSelector(r,e)?[r]:[]:re.find.matches(e,re.grep(t,function(e){return 1===e.nodeType}))},re.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(re(e).filter(function(){for(t=0;n>t;t++)if(re.contains(i[t],this))return!0}));for(t=0;n>t;t++)re.find(e,i[t],r);return r=this.pushStack(n>1?re.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&le.test(e)?re(e):e||[],!1).length}});var pe,he=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,de=re.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:he.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||pe).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof re?t[0]:t,re.merge(this,re.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:te,!0)),ce.test(n[1])&&re.isPlainObject(t))for(n in t)re.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=te.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=te,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):re.isFunction(e)?"undefined"!=typeof pe.ready?pe.ready(e):e(re):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),re.makeArray(e,this))};de.prototype=re.fn,pe=re(te);var ge=/^(?:parents|prev(?:Until|All))/,ve={children:!0,contents:!0,next:!0,prev:!0};re.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&re(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),re.fn.extend({has:function(e){var t=re(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(re.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=le.test(e)||"string"!=typeof e?re(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&re.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?re.unique(o):o)},index:function(e){return e?"string"==typeof e?Q.call(re(e),this[0]):Q.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(re.unique(re.merge(this.get(),re(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),re.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return re.dir(e,"parentNode")},parentsUntil:function(e,t,n){return re.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return re.dir(e,"nextSibling")},prevAll:function(e){return re.dir(e,"previousSibling")},nextUntil:function(e,t,n){return re.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return re.dir(e,"previousSibling",n)},siblings:function(e){return re.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return re.sibling(e.firstChild)},contents:function(e){return e.contentDocument||re.merge([],e.childNodes)}},function(e,t){re.fn[e]=function(n,r){var i=re.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=re.filter(r,i)),this.length>1&&(ve[e]||re.unique(i),ge.test(e)&&i.reverse()),this.pushStack(i)}});var ye=/\S+/g,me={};re.Callbacks=function(e){e="string"==typeof e?me[e]||l(e):re.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],c=function(l){for(t=e.memory&&l,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&o>a;a++)if(s[a].apply(l[0],l[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(u?u.length&&c(u.shift()):t?s=[]:f.disable())},f={add:function(){if(s){var n=s.length;!function a(t){re.each(t,function(t,n){var r=re.type(n);"function"===r?e.unique&&f.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})}(arguments),r?o=s.length:t&&(i=n,c(t))}return this},remove:function(){return s&&re.each(arguments,function(e,t){for(var n;(n=re.inArray(t,s,n))>-1;)s.splice(n,1),r&&(o>=n&&o--,a>=n&&a--)}),this},has:function(e){return e?re.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=u=t=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,t||f.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!s||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},re.extend({Deferred:function(e){var t=[["resolve","done",re.Callbacks("once memory"),"resolved"],["reject","fail",re.Callbacks("once memory"),"rejected"],["notify","progress",re.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return re.Deferred(function(n){re.each(t,function(t,o){var a=re.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&re.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?re.extend(e,r):r}},i={};return r.pipe=r.then,re.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=H.call(arguments),a=o.length,s=1!==a||e&&re.isFunction(e.promise)?a:0,u=1===s?e:re.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?H.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&re.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}});var be;re.fn.ready=function(e){return re.ready.promise().done(e),this},re.extend({isReady:!1,readyWait:1,holdReady:function(e){e?re.readyWait++:re.ready(!0)},ready:function(e){(e===!0?--re.readyWait:re.isReady)||(re.isReady=!0,e!==!0&&--re.readyWait>0||(be.resolveWith(te,[re]),re.fn.triggerHandler&&(re(te).triggerHandler("ready"),re(te).off("ready"))))}}),re.ready.promise=function(e){return be||(be=re.Deferred(),"complete"===te.readyState?setTimeout(re.ready):(te.addEventListener("DOMContentLoaded",c,!1),n.addEventListener("load",c,!1))),be.promise(e)},re.ready.promise();var xe=re.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===re.type(n)){i=!0;for(s in n)re.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,re.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(re(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o};re.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},f.uid=1,f.accepts=re.acceptData,f.prototype={key:function(e){if(!f.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=f.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,re.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(re.isEmptyObject(o))re.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,re.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(void 0===t)this.cache[o]={};else{re.isArray(t)?r=t.concat(t.map(re.camelCase)):(i=re.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(ye)||[])),n=r.length;for(;n--;)delete a[r[n]]}},hasData:function(e){return!re.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var Ae=new f,we=new f,ke=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Oe=/([A-Z])/g;re.extend({hasData:function(e){return we.hasData(e)||Ae.hasData(e)},data:function(e,t,n){return we.access(e,t,n)},removeData:function(e,t){we.remove(e,t)},_data:function(e,t,n){return Ae.access(e,t,n)},_removeData:function(e,t){Ae.remove(e,t)}}),re.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=we.get(o),1===o.nodeType&&!Ae.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=re.camelCase(r.slice(5)),p(o,r,i[r])));Ae.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){we.set(this,e)}):xe(this,function(t){var n,r=re.camelCase(e);if(o&&void 0===t){if(n=we.get(o,e),void 0!==n)return n;if(n=we.get(o,r),void 0!==n)return n;if(n=p(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=we.get(this,r);we.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&we.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){we.remove(this,e)})}}),re.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=Ae.get(e,t),n&&(!r||re.isArray(n)?r=Ae.access(e,t,re.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=re.queue(e,t),r=n.length,i=n.shift(),o=re._queueHooks(e,t),a=function(){re.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Ae.get(e,n)||Ae.access(e,n,{empty:re.Callbacks("once memory").add(function(){Ae.remove(e,[t+"queue",n])})})}}),re.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?re.queue(this[0],e):void 0===t?this:this.each(function(){var n=re.queue(this,e,t);re._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&re.dequeue(this,e)})},dequeue:function(e){return this.each(function(){re.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=re.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=Ae.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pe=["Top","Right","Bottom","Left"],je=function(e,t){return e=t||e,"none"===re.css(e,"display")||!re.contains(e.ownerDocument,e)},Se=/^(?:checkbox|radio)$/i;!function(){var e=te.createDocumentFragment(),t=e.appendChild(te.createElement("div")),n=te.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ee.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ee.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Te="undefined";ee.focusinBubbles="onfocusin"in n;var Ce=/^key/,Le=/^(?:mouse|pointer|contextmenu)|click/,Ie=/^(?:focusinfocus|focusoutblur)$/,Ne=/^([^.]*)(?:\.(.+)|)$/;re.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,d,g,v=Ae.get(e);if(v)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=re.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){return typeof re!==Te&&re.event.triggered!==t.type?re.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ye)||[""],l=t.length;l--;)s=Ne.exec(t[l])||[],h=g=s[1],d=(s[2]||"").split(".").sort(),h&&(f=re.event.special[h]||{},h=(i?f.delegateType:f.bindType)||h,f=re.event.special[h]||{},c=re.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&re.expr.match.needsContext.test(i),namespace:d.join(".")},o),(p=u[h])||(p=u[h]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,d,a)!==!1||e.addEventListener&&e.addEventListener(h,a,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),re.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,d,g,v=Ae.hasData(e)&&Ae.get(e);if(v&&(u=v.events)){for(t=(t||"").match(ye)||[""],l=t.length;l--;)if(s=Ne.exec(t[l])||[],h=g=s[1],d=(s[2]||"").split(".").sort(),h){for(f=re.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],s=s[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,d,v.handle)!==!1||re.removeEvent(e,h,v.handle),delete u[h])}else for(h in u)re.event.remove(e,h+t[l],n,r,!0);re.isEmptyObject(u)&&(delete v.handle,Ae.remove(e,"events"))}},trigger:function(e,t,r,i){var o,a,s,u,l,c,f,p=[r||te],h=$.call(e,"type")?e.type:e,d=$.call(e,"namespace")?e.namespace.split("."):[];if(a=s=r=r||te,3!==r.nodeType&&8!==r.nodeType&&!Ie.test(h+re.event.triggered)&&(h.indexOf(".")>=0&&(d=h.split("."),h=d.shift(),d.sort()),l=h.indexOf(":")<0&&"on"+h,e=e[re.expando]?e:new re.Event(h,"object"==typeof e&&e),
e.isTrigger=i?2:3,e.namespace=d.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:re.makeArray(t,[e]),f=re.event.special[h]||{},i||!f.trigger||f.trigger.apply(r,t)!==!1)){if(!i&&!f.noBubble&&!re.isWindow(r)){for(u=f.delegateType||h,Ie.test(u+h)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||te)&&p.push(s.defaultView||s.parentWindow||n)}for(o=0;(a=p[o++])&&!e.isPropagationStopped();)e.type=o>1?u:f.bindType||h,c=(Ae.get(a,"events")||{})[e.type]&&Ae.get(a,"handle"),c&&c.apply(a,t),c=l&&a[l],c&&c.apply&&re.acceptData(a)&&(e.result=c.apply(a,t),e.result===!1&&e.preventDefault());return e.type=h,i||e.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),t)!==!1||!re.acceptData(r)||l&&re.isFunction(r[h])&&!re.isWindow(r)&&(s=r[l],s&&(r[l]=null),re.event.triggered=h,r[h](),re.event.triggered=void 0,s&&(r[l]=s)),e.result}},dispatch:function(e){e=re.event.fix(e);var t,n,r,i,o,a=[],s=H.call(arguments),u=(Ae.get(this,"events")||{})[e.type]||[],l=re.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=re.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((re.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?re(i,this).index(u)>=0:re.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||te,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[re.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Le.test(i)?this.mouseHooks:Ce.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new re.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=te),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==g()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===g()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&re.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return re.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=re.extend(new re.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?re.event.trigger(i,null,t):re.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},re.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},re.Event=function(e,t){return this instanceof re.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?h:d):this.type=e,t&&re.extend(this,t),this.timeStamp=e&&e.timeStamp||re.now(),void(this[re.expando]=!0)):new re.Event(e,t)},re.Event.prototype={isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=h,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=h,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=h,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},re.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){re.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!re.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ee.focusinBubbles||re.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){re.event.simulate(t,e.target,re.event.fix(e),!0)};re.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Ae.access(r,t);i||r.addEventListener(e,n,!0),Ae.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ae.access(r,t)-1;i?Ae.access(r,t,i):(r.removeEventListener(e,n,!0),Ae.remove(r,t))}}}),re.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=d;else if(!r)return this;return 1===i&&(o=r,r=function(e){return re().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=re.guid++)),this.each(function(){re.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,re(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=d),this.each(function(){re.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){re.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?re.event.trigger(e,t,n,!0):void 0}});var Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,qe=/<([\w:]+)/,We=/<|&#?\w+;/,Je=/<(?:script|style|link)/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^$|\/(?:java|ecma)script/i,ze=/^true\/(.*)/,Xe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ve={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ve.optgroup=Ve.option,Ve.tbody=Ve.tfoot=Ve.colgroup=Ve.caption=Ve.thead,Ve.th=Ve.td,re.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=re.contains(e.ownerDocument,e);if(!(ee.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||re.isXMLDoc(e)))for(a=A(s),o=A(e),r=0,i=o.length;i>r;r++)w(o[r],a[r]);if(t)if(n)for(o=o||A(e),a=a||A(s),r=0,i=o.length;i>r;r++)x(o[r],a[r]);else x(e,s);return a=A(s,"script"),a.length>0&&b(a,!u&&A(e,"script")),s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,h=e.length;h>p;p++)if(i=e[p],i||0===i)if("object"===re.type(i))re.merge(f,i.nodeType?[i]:i);else if(We.test(i)){for(o=o||c.appendChild(t.createElement("div")),a=(qe.exec(i)||["",""])[1].toLowerCase(),s=Ve[a]||Ve._default,o.innerHTML=s[1]+i.replace(Re,"<$1></$2>")+s[2],l=s[0];l--;)o=o.lastChild;re.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||-1===re.inArray(i,r))&&(u=re.contains(i.ownerDocument,i),o=A(c.appendChild(i),"script"),u&&b(o),n))for(l=0;i=o[l++];)Fe.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=re.event.special,a=0;void 0!==(n=e[a]);a++){if(re.acceptData(n)&&(i=n[Ae.expando],i&&(t=Ae.cache[i]))){if(t.events)for(r in t.events)o[r]?re.event.remove(n,r):re.removeEvent(n,r,t.handle);Ae.cache[i]&&delete Ae.cache[i]}delete we.cache[n[we.expando]]}}}),re.fn.extend({text:function(e){return xe(this,function(e){return void 0===e?re.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=v(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=v(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?re.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||re.cleanData(A(n)),n.parentNode&&(t&&re.contains(n.ownerDocument,n)&&b(A(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(re.cleanData(A(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return re.clone(this,e,t)})},html:function(e){return xe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Je.test(e)&&!Ve[(qe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Re,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(re.cleanData(A(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,re.cleanData(A(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=Z.apply([],e);var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,p=e[0],h=re.isFunction(p);if(h||l>1&&"string"==typeof p&&!ee.checkClone&&De.test(p))return this.each(function(n){var r=c.eq(n);h&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=re.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=re.map(A(n,"script"),y),o=i.length;l>u;u++)a=n,u!==f&&(a=re.clone(a,!0,!0),o&&re.merge(i,A(a,"script"))),t.call(this[u],a,u);if(o)for(s=i[i.length-1].ownerDocument,re.map(i,m),u=0;o>u;u++)a=i[u],Fe.test(a.type||"")&&!Ae.access(a,"globalEval")&&re.contains(s,a)&&(a.src?re._evalUrl&&re._evalUrl(a.src):re.globalEval(a.textContent.replace(Xe,"")))}return this}}),re.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){re.fn[e]=function(e){for(var n,r=[],i=re(e),o=i.length-1,a=0;o>=a;a++)n=a===o?this:this.clone(!0),re(i[a])[t](n),Y.apply(r,n.get());return this.pushStack(r)}});var Be,Me={},Ke=/^margin/,Ue=new RegExp("^("+Ee+")(?!px)[a-z%]+$","i"),He=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)};!function(){function e(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",i.appendChild(o);var e=n.getComputedStyle(a,null);t="1%"!==e.top,r="4px"===e.width,i.removeChild(o)}var t,r,i=te.documentElement,o=te.createElement("div"),a=te.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",ee.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(a),n.getComputedStyle&&re.extend(ee,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return null==r&&e(),r},reliableMarginRight:function(){var e,t=a.appendChild(te.createElement("div"));return t.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",a.style.width="1px",i.appendChild(o),e=!parseFloat(n.getComputedStyle(t,null).marginRight),i.removeChild(o),a.removeChild(t),e}}))}(),re.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var Ze=/^(none|table(?!-c[ea]).+)/,Ye=new RegExp("^("+Ee+")(.*)$","i"),Qe=new RegExp("^([+-])=("+Ee+")","i"),Ge={position:"absolute",visibility:"hidden",display:"block"},_e={letterSpacing:"0",fontWeight:"400"},$e=["Webkit","O","Moz","ms"];re.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=E(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=re.camelCase(t),u=e.style;return t=re.cssProps[s]||(re.cssProps[s]=j(u,s)),a=re.cssHooks[t]||re.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Qe.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(re.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||re.cssNumber[s]||(n+="px"),ee.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=re.camelCase(t);return t=re.cssProps[s]||(re.cssProps[s]=j(e.style,s)),a=re.cssHooks[t]||re.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=E(e,t,r)),"normal"===i&&t in _e&&(i=_e[t]),""===n||n?(o=parseFloat(i),n===!0||re.isNumeric(o)?o||0:i):i}}),re.each(["height","width"],function(e,t){re.cssHooks[t]={get:function(e,n,r){return n?Ze.test(re.css(e,"display"))&&0===e.offsetWidth?re.swap(e,Ge,function(){return C(e,t,r)}):C(e,t,r):void 0},set:function(e,n,r){var i=r&&He(e);return S(e,n,r?T(e,t,r,"border-box"===re.css(e,"boxSizing",!1,i),i):0)}}}),re.cssHooks.marginRight=P(ee.reliableMarginRight,function(e,t){return t?re.swap(e,{display:"inline-block"},E,[e,"marginRight"]):void 0}),re.each({margin:"",padding:"",border:"Width"},function(e,t){re.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Pe[r]+t]=o[r]||o[r-2]||o[0];return i}},Ke.test(e)||(re.cssHooks[e+t].set=S)}),re.fn.extend({css:function(e,t){return xe(this,function(e,t,n){var r,i,o={},a=0;if(re.isArray(t)){for(r=He(e),i=t.length;i>a;a++)o[t[a]]=re.css(e,t[a],!1,r);return o}return void 0!==n?re.style(e,t,n):re.css(e,t)},e,t,arguments.length>1)},show:function(){return L(this,!0)},hide:function(){return L(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){je(this)?re(this).show():re(this).hide()})}}),re.Tween=I,I.prototype={constructor:I,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(re.cssNumber[n]?"":"px")},cur:function(){var e=I.propHooks[this.prop];return e&&e.get?e.get(this):I.propHooks._default.get(this)},run:function(e){var t,n=I.propHooks[this.prop];return this.options.duration?this.pos=t=re.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):I.propHooks._default.set(this),this}},I.prototype.init.prototype=I.prototype,I.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=re.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){re.fx.step[e.prop]?re.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[re.cssProps[e.prop]]||re.cssHooks[e.prop])?re.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},re.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},re.fx=I.prototype.init,re.fx.step={};var et,tt,nt=/^(?:toggle|show|hide)$/,rt=new RegExp("^(?:([+-])=|)("+Ee+")([a-z%]*)$","i"),it=/queueHooks$/,ot=[W],at={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=rt.exec(t),o=i&&i[3]||(re.cssNumber[e]?"":"px"),a=(re.cssNumber[e]||"px"!==o&&+r)&&rt.exec(re.css(n.elem,e)),s=1,u=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,re.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};re.Animation=re.extend(D,{tweener:function(e,t){re.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],at[n]=at[n]||[],at[n].unshift(t)},prefilter:function(e,t){t?ot.unshift(e):ot.push(e)}}),re.speed=function(e,t,n){var r=e&&"object"==typeof e?re.extend({},e):{complete:n||!n&&t||re.isFunction(e)&&e,duration:e,easing:n&&t||t&&!re.isFunction(t)&&t};return r.duration=re.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in re.fx.speeds?re.fx.speeds[r.duration]:re.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){re.isFunction(r.old)&&r.old.call(this),r.queue&&re.dequeue(this,r.queue)},r},re.fn.extend({fadeTo:function(e,t,n,r){return this.filter(je).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=re.isEmptyObject(e),o=re.speed(t,n,r),a=function(){var t=D(this,re.extend({},e),o);(i||Ae.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=re.timers,a=Ae.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&it.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&re.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Ae.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=re.timers,a=r?r.length:0;for(n.finish=!0,re.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),re.each(["toggle","show","hide"],function(e,t){var n=re.fn[t];re.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(R(t,!0),e,r,i)}}),re.each({slideDown:R("show"),slideUp:R("hide"),slideToggle:R("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){re.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),re.timers=[],re.fx.tick=function(){var e,t=0,n=re.timers;for(et=re.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||re.fx.stop(),et=void 0},re.fx.timer=function(e){re.timers.push(e),e()?re.fx.start():re.timers.pop()},re.fx.interval=13,re.fx.start=function(){tt||(tt=setInterval(re.fx.tick,re.fx.interval))},re.fx.stop=function(){clearInterval(tt),tt=null},re.fx.speeds={slow:600,fast:200,_default:400},re.fn.delay=function(e,t){return e=re.fx?re.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=te.createElement("input"),t=te.createElement("select"),n=t.appendChild(te.createElement("option"));e.type="checkbox",ee.checkOn=""!==e.value,ee.optSelected=n.selected,t.disabled=!0,ee.optDisabled=!n.disabled,e=te.createElement("input"),e.value="t",e.type="radio",ee.radioValue="t"===e.value}();var st,ut,lt=re.expr.attrHandle;re.fn.extend({attr:function(e,t){return xe(this,re.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){re.removeAttr(this,e)})}}),re.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Te?re.prop(e,t,n):(1===o&&re.isXMLDoc(e)||(t=t.toLowerCase(),r=re.attrHooks[t]||(re.expr.match.bool.test(t)?ut:st)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=re.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void re.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ye);if(o&&1===e.nodeType)for(;n=o[i++];)r=re.propFix[n]||n,re.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!ee.radioValue&&"radio"===t&&re.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),ut={set:function(e,t,n){return t===!1?re.removeAttr(e,n):e.setAttribute(n,n),n}},re.each(re.expr.match.bool.source.match(/\w+/g),function(e,t){var n=lt[t]||re.find.attr;lt[t]=function(e,t,r){var i,o;return r||(o=lt[t],lt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,lt[t]=o),i}});var ct=/^(?:input|select|textarea|button)$/i;re.fn.extend({prop:function(e,t){return xe(this,re.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[re.propFix[e]||e]})}}),re.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!re.isXMLDoc(e),o&&(t=re.propFix[t]||t,i=re.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||ct.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),ee.optSelected||(re.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),re.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){re.propFix[this.toLowerCase()]=this});var ft=/[\t\r\n\f]/g;re.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,u=0,l=this.length;if(re.isFunction(e))return this.each(function(t){re(this).addClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ye)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ft," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=re.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(re.isFunction(e))return this.each(function(t){re(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ye)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ft," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?re.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):re.isFunction(e)?this.each(function(n){re(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,i=re(this),o=e.match(ye)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Te||"boolean"===n)&&(this.className&&Ae.set(this,"__className__",this.className),this.className=this.className||e===!1?"":Ae.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ft," ").indexOf(t)>=0)return!0;return!1}});var pt=/\r/g;re.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=re.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,re(this).val()):e,null==i?i="":"number"==typeof i?i+="":re.isArray(i)&&(i=re.map(i,function(e){return null==e?"":e+""})),t=re.valHooks[this.type]||re.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=re.valHooks[i.type]||re.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(pt,""):null==n?"":n)}}}),re.extend({valHooks:{option:{get:function(e){var t=re.find.attr(e,"value");return null!=t?t:re.trim(re.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],(n.selected||u===i)&&(ee.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!re.nodeName(n.parentNode,"optgroup"))){if(t=re(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=re.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=re.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),re.each(["radio","checkbox"],function(){re.valHooks[this]={set:function(e,t){return re.isArray(t)?e.checked=re.inArray(re(e).val(),t)>=0:void 0}},ee.checkOn||(re.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){re.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),re.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ht=re.now(),dt=/\?/;re.parseJSON=function(e){return JSON.parse(e+"")},re.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&re.error("Invalid XML: "+e),t};var gt=/#.*$/,vt=/([?&])_=[^&]*/,yt=/^(.*?):[ \t]*([^\r\n]*)$/gm,mt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,bt=/^(?:GET|HEAD)$/,xt=/^\/\//,At=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,wt={},kt={},Ot="*/".concat("*"),Et=n.location.href,Pt=At.exec(Et.toLowerCase())||[];re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et,type:"GET",isLocal:mt.test(Pt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ot,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?X(X(e,re.ajaxSettings),t):X(re.ajaxSettings,e)},ajaxPrefilter:F(wt),ajaxTransport:F(kt),ajax:function(e,t){function n(e,t,n,a){var u,c,y,m,x,w=t;2!==b&&(b=2,s&&clearTimeout(s),r=void 0,o=a||"",A.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(m=V(f,A,n)),m=B(f,m,A,u),u?(f.ifModified&&(x=A.getResponseHeader("Last-Modified"),x&&(re.lastModified[i]=x),x=A.getResponseHeader("etag"),x&&(re.etag[i]=x)),204===e||"HEAD"===f.type?w="nocontent":304===e?w="notmodified":(w=m.state,c=m.data,y=m.error,u=!y)):(y=w,(e||!w)&&(w="error",0>e&&(e=0))),A.status=e,A.statusText=(t||w)+"",u?d.resolveWith(p,[c,w,A]):d.rejectWith(p,[A,w,y]),A.statusCode(v),v=void 0,l&&h.trigger(u?"ajaxSuccess":"ajaxError",[A,f,u?c:y]),g.fireWith(p,[A,w]),l&&(h.trigger("ajaxComplete",[A,f]),--re.active||re.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,u,l,c,f=re.ajaxSetup({},t),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?re(p):re.event,d=re.Deferred(),g=re.Callbacks("once memory"),v=f.statusCode||{},y={},m={},b=0,x="canceled",A={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=yt.exec(o);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=m[n]=m[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)v[t]=[v[t],e[t]];else A.always(e[A.status]);return this},abort:function(e){var t=e||x;return r&&r.abort(t),n(0,t),this}};if(d.promise(A).complete=g.add,A.success=A.done,A.error=A.fail,f.url=((e||f.url||Et)+"").replace(gt,"").replace(xt,Pt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=re.trim(f.dataType||"*").toLowerCase().match(ye)||[""],null==f.crossDomain&&(u=At.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===Pt[1]&&u[2]===Pt[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(Pt[3]||("http:"===Pt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=re.param(f.data,f.traditional)),z(wt,f,t,A),2===b)return A;l=re.event&&f.global,l&&0===re.active++&&re.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!bt.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(dt.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=vt.test(i)?i.replace(vt,"$1_="+ht++):i+(dt.test(i)?"&":"?")+"_="+ht++)),f.ifModified&&(re.lastModified[i]&&A.setRequestHeader("If-Modified-Since",re.lastModified[i]),re.etag[i]&&A.setRequestHeader("If-None-Match",re.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&A.setRequestHeader("Content-Type",f.contentType),A.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ot+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)A.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(f.beforeSend.call(p,A,f)===!1||2===b))return A.abort();x="abort";for(c in{success:1,error:1,complete:1})A[c](f[c]);if(r=z(kt,f,t,A)){A.readyState=1,l&&h.trigger("ajaxSend",[A,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){A.abort("timeout")},f.timeout));try{b=1,r.send(y,n)}catch(w){if(!(2>b))throw w;n(-1,w)}}else n(-1,"No Transport");return A},getJSON:function(e,t,n){return re.get(e,t,n,"json")},getScript:function(e,t){return re.get(e,void 0,t,"script")}}),re.each(["get","post"],function(e,t){re[t]=function(e,n,r,i){return re.isFunction(n)&&(i=i||r,r=n,n=void 0),re.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),re._evalUrl=function(e){return re.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},re.fn.extend({wrapAll:function(e){var t;return re.isFunction(e)?this.each(function(t){re(this).wrapAll(e.call(this,t))}):(this[0]&&(t=re(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return re.isFunction(e)?this.each(function(t){re(this).wrapInner(e.call(this,t))}):this.each(function(){var t=re(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=re.isFunction(e);return this.each(function(n){re(this).wrapAll(t?e.call(this,n):e);
})},unwrap:function(){return this.parent().each(function(){re.nodeName(this,"body")||re(this).replaceWith(this.childNodes)}).end()}}),re.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},re.expr.filters.visible=function(e){return!re.expr.filters.hidden(e)};var jt=/%20/g,St=/\[\]$/,Tt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;re.param=function(e,t){var n,r=[],i=function(e,t){t=re.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=re.ajaxSettings&&re.ajaxSettings.traditional),re.isArray(e)||e.jquery&&!re.isPlainObject(e))re.each(e,function(){i(this.name,this.value)});else for(n in e)M(n,e[n],t,i);return r.join("&").replace(jt,"+")},re.fn.extend({serialize:function(){return re.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=re.prop(this,"elements");return e?re.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!re(this).is(":disabled")&&Lt.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!Se.test(e))}).map(function(e,t){var n=re(this).val();return null==n?null:re.isArray(n)?re.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}}),re.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var It=0,Nt={},Rt={0:200,1223:204},qt=re.ajaxSettings.xhr();n.attachEvent&&n.attachEvent("onunload",function(){for(var e in Nt)Nt[e]()}),ee.cors=!!qt&&"withCredentials"in qt,ee.ajax=qt=!!qt,re.ajaxTransport(function(e){var t;return ee.cors||qt&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),a=++It;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Nt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Rt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Nt[a]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(s){if(t)throw s}},abort:function(){t&&t()}}:void 0}),re.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return re.globalEval(e),e}}}),re.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),re.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=re("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),te.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Wt=[],Jt=/(=)\?(?=&|$)|\?\?/;re.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Wt.pop()||re.expando+"_"+ht++;return this[e]=!0,e}}),re.ajaxPrefilter("json jsonp",function(e,t,r){var i,o,a,s=e.jsonp!==!1&&(Jt.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jt.test(e.data)&&"data");return s||"jsonp"===e.dataTypes[0]?(i=e.jsonpCallback=re.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Jt,"$1"+i):e.jsonp!==!1&&(e.url+=(dt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||re.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){n[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Wt.push(i)),a&&re.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),re.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||te;var r=ce.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=re.buildFragment([e],t,i),i&&i.length&&re(i).remove(),re.merge([],r.childNodes))};var Dt=re.fn.load;re.fn.load=function(e,t,n){if("string"!=typeof e&&Dt)return Dt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=re.trim(e.slice(s)),e=e.slice(0,s)),re.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&re.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?re("<div>").append(re.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},re.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){re.fn[t]=function(e){return this.on(t,e)}}),re.expr.filters.animated=function(e){return re.grep(re.timers,function(t){return e===t.elem}).length};var Ft=n.document.documentElement;re.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=re.css(e,"position"),f=re(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=re.css(e,"top"),u=re.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),re.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},re.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){re.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)return t=o.documentElement,re.contains(t,r)?(typeof r.getBoundingClientRect!==Te&&(i=r.getBoundingClientRect()),n=K(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===re.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),re.nodeName(e[0],"html")||(r=e.offset()),r.top+=re.css(e[0],"borderTopWidth",!0),r.left+=re.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-re.css(n,"marginTop",!0),left:t.left-r.left-re.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Ft;e&&!re.nodeName(e,"html")&&"static"===re.css(e,"position");)e=e.offsetParent;return e||Ft})}}),re.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r="pageYOffset"===t;re.fn[e]=function(i){return xe(this,function(e,i,o){var a=K(e);return void 0===o?a?a[t]:e[i]:void(a?a.scrollTo(r?n.pageXOffset:o,r?o:n.pageYOffset):e[i]=o)},e,i,arguments.length,null)}}),re.each(["top","left"],function(e,t){re.cssHooks[t]=P(ee.pixelPosition,function(e,n){return n?(n=E(e,t),Ue.test(n)?re(e).position()[t]+"px":n):void 0})}),re.each({Height:"height",Width:"width"},function(e,t){re.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){re.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return xe(this,function(t,n,r){var i;return re.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?re.css(t,n,a):re.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),re.fn.size=function(){return this.length},re.fn.andSelf=re.fn.addBack,r=[],i=function(){return re}.apply(t,r),!(void 0!==i&&(e.exports=i));var zt=n.jQuery,Xt=n.$;return re.noConflict=function(e){return n.$===re&&(n.$=Xt),e&&n.jQuery===re&&(n.jQuery=zt),re},typeof o===Te&&(n.jQuery=n.$=re),re})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(1),o=n(79),a=n(14),s=n(8),u={ENTER:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},l=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r(this,e),s(t),n.parentElement?this.$el=n.parentElement.find(t):this.$el=i(t),0===this.$el.size()&&(this.$el=i("<div></div>")),n.preserveChildElements||this.$el.html(""),Object.assign(this,{keyEvents:u,attrs:n.attrs||{},id:o.v4(),value:null}),this}return e.prototype.render=function(){throw new Error("BaseComponent::render must be defined by child")},e.prototype.get=function(){return this.value},e.prototype.set=function(e){return this.value=e,this.publish(this.get()),this.render()},e.prototype.subscribe=function(e){return a.subscribe(this.id,e),this},e.prototype.publish=function(e){a.publish(this.id,e)},e}();e.exports=l},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],u=i[3],l={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(e,t){var n=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var o=m++;n=y||(y=s(t)),r=c.bind(null,n,o,!1),i=c.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function c(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var h={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=h[s.id];u.refs--,o.push(u)}if(e){var l=i(e);r(l,t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e,t){return t.some(function(t){return o[t](e)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o={};o.array=function(e){return Array.isArray(e)},o.object=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof RegExp)&&!("function"==typeof Map&&e instanceof Map)&&!("function"==typeof Set&&e instanceof Set)},o.string=function(e){return"string"==typeof e},o.number=function(e){return"number"==typeof e},o["function"]=function(e){return"function"==typeof e},o.primitive=function(e){return e!==Object(e)},o.splicer=function(e){return!o.array(e)||e.length<2?!1:r(e[0],["number","function","object"])&&o.number(e[1])};var a=["string","number","function","object"];o.path=function(e){return e||0===e||""===e?[].concat(e).every(function(e){return r(e,a)}):!1},o.dynamicPath=function(e){return e.some(function(e){return o["function"](e)||o.object(e)})},o.monkeyPath=function(e,t){var n=[],r=e,o=void 0,a=void 0;for(o=0,a=t.length;a>o;o++){if(n.push(t[o]),"object"!=typeof r)return null;if(r=r[t[o]],r instanceof i.Monkey)return n}return null},o.lazyGetter=function(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return n&&n.get&&n.get.isLazyGetter===!0},o.monkeyDefinition=function(e){return o.object(e)?o["function"](e.get)&&(!e.cursors||o.object(e.cursors)&&Object.keys(e.cursors).every(function(t){return o.path(e.cursors[t])}))?"object":null:o.array(e)&&o["function"](e[e.length-1])&&e.slice(0,-1).every(function(e){return o.path(e)})?"array":null},o.watcherMapping=function(e){return o.object(e)&&Object.keys(e).every(function(t){return o.path(e[t])})};var s=["set","apply","push","unshift","concat","deepMerge","merge","splice","unset"];o.operationType=function(e){return"string"==typeof e&&!!~s.indexOf(e)},t["default"]=o,e.exports=t["default"]},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){var n=void 0,r=void 0;for(n=0,r=e.length;r>n;n++)if(t(e[n]))return n;return-1}function a(e){var t=new Array(e.length),n=void 0,r=void 0;for(n=0,r=e.length;r>n;n++)t[n]=e[n];return t}function s(e){return a(e)}function u(e,t){return function(){e.apply(null,arguments),t.apply(null,arguments)}}function l(e){var t=e.source,n="";return e.global&&(n+="g"),e.multiline&&(n+="m"),e.ignoreCase&&(n+="i"),e.sticky&&(n+="y"),e.unicode&&(n+="u"),new RegExp(t,n)}function c(t,n){if(!n||"object"!=typeof n||n instanceof Error||n instanceof A.MonkeyDefinition||"ArrayBuffer"in e&&n instanceof ArrayBuffer)return n;if(k["default"].array(n)){if(t){var r=[],i=void 0,o=void 0;for(i=0,o=n.length;o>i;i++)r.push(c(!0,n[i]));return r}return a(n)}if(n instanceof Date)return new Date(n.getTime());if(n instanceof RegExp)return l(n);if(k["default"].object(n)){var s={},u=void 0;for(u in n)k["default"].lazyGetter(n,u)?Object.defineProperty(s,u,{get:Object.getOwnPropertyDescriptor(n,u).get,enumerable:!0,configurable:!0}):n.hasOwnProperty(u)&&(s[u]=t?c(!0,n[u]):n[u]);return s}return n}function f(e){return e||0===e||""===e?e:[]}function p(e,t){var n=!0,r=void 0;if(!e)return!1;for(r in t)if(k["default"].object(t[r]))n=n&&p(e[r],t[r]);else if(k["default"].array(t[r]))n=n&&!!~t[r].indexOf(e[r]);else if(e[r]!==t[r])return!1;return n}function h(e,t){if(!("object"!=typeof t||null===t||t instanceof A.Monkey)&&(Object.freeze(t),e))if(Array.isArray(t)){var n=void 0,r=void 0;for(n=0,r=t.length;r>n;n++)h(!0,t[n])}else{var i=void 0,o=void 0;for(o in t)k["default"].lazyGetter(t,o)||(i=t[o],i&&t.hasOwnProperty(o)&&"object"==typeof i&&!Object.isFrozen(i)&&h(!0,i))}}function d(e,t){if(!t)return L;var n=[],r=!0,i=e,a=void 0,s=void 0,u=void 0;for(s=0,u=t.length;u>s;s++){if(!i)return{data:void 0,solvedPath:t,exists:!1};if("function"==typeof t[s]){if(!k["default"].array(i))return L;if(a=o(i,t[s]),!~a)return L;n.push(a),i=i[a]}else if("object"==typeof t[s]){if(!k["default"].array(i))return L;if(a=o(i,function(e){return p(e,t[s])}),!~a)return L;n.push(a),i=i[a]}else n.push(t[s]),r="object"==typeof i&&t[s]in i,i=i[t[s]]}return{data:i,solvedPath:n,exists:r}}function g(e,t){var n=new Error(e);for(var r in t)n[r]=t[r];return n}function v(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];var i=n[0],o=void 0,a=void 0,s=void 0,u=void 0;for(a=1,s=n.length;s>a;a++){o=n[a];for(u in o)!e||!k["default"].object(o[u])||o[u]instanceof A.Monkey?i[u]=o[u]:i[u]=v(!0,i[u]||{},o[u])}return i}function y(e,t){for(var n=[],r=0,i=t.length;i>r;r++){var o=t[r];"."===o?r||(n=e.slice(0)):".."===o?n=(r?n:e).slice(0,-1):n.push(o)}return n}function m(e,t){var n=void 0,r=void 0,i=void 0,o=void 0,a=void 0,s=void 0,u=void 0,l=void 0,c=void 0;for(n=0,o=e.length;o>n;n++){if(u=e[n],!u.length)return!0;for(r=0,a=t.length;a>r;r++){if(l=t[r],!l||!l.length)return!0;for(i=0,s=l.length;s>i&&(c=l[i],c==u[i]);i++)if(i+1===s||i+1===u.length)return!0}}return!1}function b(e,t,n){for(var r=arguments.length,i=Array(r>3?r-3:0),o=3;r>o;o++)i[o-3]=arguments[o];return e.slice(0,t).concat(i).concat(e.slice(t+Math.max(0,n)))}Object.defineProperty(t,"__esModule",{value:!0});var x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.arrayFrom=s,t.before=u,t.coercePath=f,t.getIn=d,t.makeError=g,t.solveRelativePath=y,t.solveUpdate=m,t.splice=b;var A=n(7),w=n(5),k=r(w),O=Function.prototype,E=function(){function e(t){i(this,e),this.size=t,this.records=[]}return x(e,[{key:"get",value:function(){return this.records}},{key:"add",value:function(e){return this.records.unshift(e),this.records.length>this.size&&(this.records.length=this.size),this}},{key:"clear",value:function(){return this.records=[],this}},{key:"back",value:function(e){var t=this.records[e-1];return t&&(this.records=this.records.slice(e)),t}}]),e}();t.Archive=E;var P=c.bind(null,!1),j=c.bind(null,!0);t.shallowClone=P,t.deepClone=j;var S="function"==typeof Object.freeze,T=S?h.bind(null,!1):O,C=S?h.bind(null,!0):O;t.freeze=T,t.deepFreeze=C;var L={data:void 0,solvedPath:null,exists:!1},I=v.bind(null,!1),N=v.bind(null,!0);t.shallowMerge=I,t.deepMerge=N;var R=function(){var e=0;return function(){return e++}}();t.uniqid=R}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5),s=r(a),u=n(19),l=r(u),c=n(6),f=function h(e){var t=this;i(this,h);var n=s["default"].monkeyDefinition(e);if(!n)throw(0,c.makeError)("Baobab.monkey: invalid definition.",{definition:e});this.type=n,"object"===this.type?(this.getter=e.get,this.projection=e.cursors||{},this.paths=Object.keys(this.projection).map(function(e){return t.projection[e]})):(this.getter=e[e.length-1],this.projection=e.slice(0,-1),this.paths=this.projection),this.hasDynamicPaths=this.paths.some(s["default"].dynamicPath)};t.MonkeyDefinition=f;var p=function(){function e(t,n,r){var o=this;i(this,e),this.tree=t,this.path=n,this.definition=r,this.isRecursive=!1;var a=r.projection,s=c.solveRelativePath.bind(null,n.slice(0,-1));"object"===r.type?(this.projection=Object.keys(a).reduce(function(e,t){return e[t]=s(a[t]),e},{}),this.depPaths=Object.keys(this.projection).map(function(e){return o.projection[e]})):(this.projection=a.map(s),this.depPaths=this.projection),this.state={killed:!1},this.listener=function(e){var t=e.data.path;if(!o.state.killed){var n=(0,c.solveUpdate)([t],o.relatedPaths());n&&o.update()}},this.tree.on("write",this.listener),this.update()}return o(e,[{key:"checkRecursivity",value:function(){var e=this;return this.isRecursive=this.depPaths.some(function(t){return!!s["default"].monkeyPath(e.tree._monkeys,t)}),this.isRecursive&&(this.tree.off("write",this.listener),this.tree.on("write",this.listener)),this}},{key:"relatedPaths",value:function(){var e=this,t=void 0;return t=this.definition.hasDynamicPaths?this.depPaths.map(function(t){return(0,c.getIn)(e.tree._data,t).solvedPath}):this.depPaths,this.isRecursive?t.reduce(function(t,n){var r=s["default"].monkeyPath(e.tree._monkeys,n);if(!r)return t.concat([n]);var i=(0,c.getIn)(e.tree._monkeys,r).data;return t.concat(i.relatedPaths())},[]):t}},{key:"update",value:function(){var e=this.tree.project(this.projection),t=function(e,t,n){var r=null,i=!1;return function(){return i||(r=t.getter.apply(e,"object"===t.type?[n]:n),e.options.immutable&&(0,c.deepFreeze)(r),i=!0),r}}(this.tree,this.definition,e);if(t.isLazyGetter=!0,this.tree.options.lazyMonkeys)this.tree._data=(0,l["default"])(this.tree._data,this.path,{type:"monkey",value:t},this.tree.options).data;else{var n=(0,l["default"])(this.tree._data,this.path,{type:"set",value:t()},this.tree.options);"data"in n&&(this.tree._data=n.data)}return this}},{key:"release",value:function(){this.tree.off("write",this.listener),this.state.killed=!0,delete this.projection,delete this.depPaths,delete this.tree}}]),e}();t.Monkey=p},function(e,t){"use strict";e.exports=function(e){if(!e)throw new Error("Assertion failure")}},function(e,t,n){"use strict";var r=n(65),i=null;e.exports={createInstance:function(){var e=arguments.length<=0||void 0===arguments[0]?"en-US":arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=arguments[2],o={resources:{},lng:e,interpolation:{prefix:"{{",Suffix:"}}"}};o.ns="ja",o.defaultNS=o.ns,o.resources[e]={},o.resources[e][o.ns]=t,i=r.createInstance(o,function(){setTimeout(function(){n(i)})})},getInstance:function(){return i}}},function(e,t,n){(function(){"use strict";function n(e,t){var n,r={};for(n in e)r[n]=e[n];for(n in t)r[n]=t[n];return r}function r(e){return e&&"object"==typeof e&&!Array.isArray(e)&&!(e instanceof Function)&&!(e instanceof RegExp)}function i(e,t,n){var r,i,o,a;for(i in e)t.call(n||null,i,e[i]);if(Object.getOwnPropertySymbols)for(r=Object.getOwnPropertySymbols(e),o=0,a=r.length;a>o;o++)t.call(n||null,r[o],e[r[o]])}function o(e,t){e=e||[];var n,r,i=[];for(r=0,n=e.length;n>r;r++)e[r].fn!==t&&i.push(e[r]);return i}var a={once:"boolean",scope:"object"},s=0,u=function(){this._enabled=!0,this.unbindAll()};u.prototype.unbindAll=function(){return this._handlers={},this._handlersAll=[],this._handlersComplex=[],this},u.prototype.on=function(e,t,n){var o,u,l,c,f,p,h;if(r(e))return i(e,function(e,n){this.on(e,n,t)},this),this;for("function"==typeof e&&(n=t,t=e,e=null),f=[].concat(e),o=0,u=f.length;u>o;o++){if(c=f[o],h={order:s++,fn:t},"string"==typeof c||"symbol"==typeof c)this._handlers[c]||(this._handlers[c]=[]),p=this._handlers[c],h.type=c;else if(c instanceof RegExp)p=this._handlersComplex,h.pattern=c;else{if(null!==c)throw Error("Emitter.on: invalid event.");p=this._handlersAll}for(l in n||{})a[l]&&(h[l]=n[l]);p.push(h)}return this},u.prototype.once=function(){var e=Array.prototype.slice.call(arguments),t=e.length-1;return r(e[t])&&e.length>1?e[t]=n(e[t],{once:!0}):e.push({once:!0}),this.on.apply(this,e)},u.prototype.off=function(e,t){var n,a,s,u;if(1===arguments.length&&"function"==typeof e){t=arguments[0];for(s in this._handlers)this._handlers[s]=o(this._handlers[s],t),0===this._handlers[s].length&&delete this._handlers[s];this._handlersAll=o(this._handlersAll,t),this._handlersComplex=o(this._handlersComplex,t)}else if(1!==arguments.length||"string"!=typeof e&&"symbol"!=typeof e)if(2===arguments.length){var l=[].concat(e);for(n=0,a=l.length;a>n;n++)u=l[n],this._handlers[u]=o(this._handlers[u],t),0===(this._handlers[u]||[]).length&&delete this._handlers[u]}else r(e)&&i(e,this.off,this);else delete this._handlers[e];return this},u.prototype.listeners=function(e){var t,n,r,i=this._handlersAll||[],o=!1;if(!e)throw Error("Emitter.listeners: no event provided.");for(i=i.concat(this._handlers[e]||[]),n=0,r=this._handlersComplex.length;r>n;n++)t=this._handlersComplex[n],~e.search(t.pattern)&&(o=!0,i.push(t));return this._handlersAll.length||o?i.sort(function(e,t){return e.order-t.order}):i.slice(0)},u.prototype.emit=function(e,t){if(!this._enabled)return this;if(r(e))return i(e,this.emit,this),this;var n,o,a,s,u,l,c,f,p=[].concat(e),h=[];for(u=0,c=p.length;c>u;u++){for(a=this.listeners(p[u]),l=0,f=a.length;f>l;l++)s=a[l],n={type:p[u],target:this},arguments.length>1&&(n.data=t),s.fn.call("scope"in s?s.scope:this,n),s.once&&h.push(s);for(l=h.length-1;l>=0;l--)o=h[l].type?this._handlers[h[l].type]:h[l].pattern?this._handlersComplex:this._handlersAll,o.splice(o.indexOf(h[l]),1)}return this},u.prototype.kill=function(){this.unbindAll(),this._handlers=null,this._handlersAll=null,this._handlersComplex=null,this._enabled=!1,this.unbindAll=this.on=this.once=this.off=this.emit=this.listeners=Function.prototype},u.prototype.disable=function(){return this._enabled=!1,this},u.prototype.enable=function(){return this._enabled=!0,this},u.version="3.1.1","undefined"!=typeof e&&e.exports&&(t=e.exports=u),t.Emitter=u}).call(this)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(1),o=n(8),a=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),o("function"==typeof t.render),this.render=t.render,this.controller=t.controller||i.noop}return e.prototype.make=function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=this.render(t),r=i("<div></div>").html(n);return setTimeout(function(){e.controller(t)}),r.html()},e}();e.exports=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(68);var a=n(77),s=(n(1),n(2)),u=function(e){function t(n){var o,s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var u=i(this,e.call(this,n));return u.iconURL=s.iconURL||a,u.geolocationAPI=s.geolocationAPI,o=u,i(u,o)}return o(t,e),t.prototype.render=function(){var e=this;return this.$el.addClass("ui-current-location"),this.$el.on("click",function(t){t.stopPropagation(),e.getCurrentLocation()}),this.$el.css("background-image","url("+this.iconURL+")"),this.$el.html()},t.prototype.set=function(e,t){return this.lng=e,this.lat=t,this.publish(this.get()),this},t.prototype.get=function(){return{lng:this.lng,lat:this.lat,isLocation:!0}},t.prototype.getCurrentLocation=function(){var e=this;return this.publish("current-location-requested"),this.geolocationAPI.getCurrentPosition(function(t){e.set(t.coords.longitude,t.coords.latitude)},function(t){console.error(t.message),e.publish(t)}),this},t}(s);e.exports=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(70);var a=n(55),s=n(1),u=n(2),l=function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var a=i(this,e.call(this,n,o));return Object.assign(a,{fetch:o.fetch,listItemOpts:o.listItemOpts||{},renderItem:o.renderItem||a.renderItem,results:o.results||[]}),a}return o(t,e),t.prototype.render=function(){var e=this;return this.$el.html(a(this)),this.$el.find("ul.ui-list").attr(this.attrs),this.$el.find("li.ui-list-item").attr(this.listItemOpts.attrs||{}),this.$el.find("li.ui-list-item").click(function(t){e.set(e.results[s(t.currentTarget).attr("data-index")])}),this.$el.html()},t.prototype.renderItem=function(e){return e.toString()},t.prototype.refresh=function(){var e=this;return this.publish("refresh"),this.fetch(function(t){e.results=t,e.render()})},t}(u);e.exports=l},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){n(this,e),this.listeners={}}return e.prototype.push=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.get=function(e){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e]},e.prototype.publish=function(e,t){this.get(e).forEach(function(e){e(t)})},e.prototype.subscribe=function(e,t){this.push(e,t)},e}();e.exports=new r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(74);var a=n(27),s=n(26),u=n(62),l=n(2),c=n(20),f=function(e){function t(n){var o,a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var s=i(this,e.call(this,n));return Object.assign(s,{$input:null,icon:a.icon||"x",iconClearsValue:"undefined"==typeof a.iconClearsValue?!0:a.iconClearsValue,placeholder:a.placeholder||"",value:a.value||"",wait:a.wait||300}),o=s,i(s,o)}return o(t,e),t.prototype.render=function(){var e=this;this.$el.addClass("ui-text-input"),this.$el.html(a(this)),this.$input=this.$el.find("input");var t=c(function(){e.get()!==e.$input.val()?e.set(e.$input.val()):""},this.wait);return this.$input.keyup(t),this.icon&&(this.$input.wrap(u),this.$wrapper=this.$el.find(".ui-text-input-icon-wrapper"),this.$wrapper.append(s(this)),this.$icon=this.$el.find(".ui-text-input-icon"),this.iconClearsValue&&this.$icon.click(function(){e.set("")})),this.$el.html()},t.prototype.get=function(){return"undefined"==typeof this.value?"":this.value},t.prototype.set=function(e){return this.value=e,this.$input?this.$input.val(this.value):this.render(),this.publish(this.get()),this},t}(l);e.exports=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=function(e){function t(n){var o,a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var s=i(this,e.call(this,n,{parentElement:a.parentElement,preserveChildElements:!0}));return Object.assign(s,{value:null}),a.untoggledClass&&s.$el.addClass(a.untoggledClass),
s.$el.click(function(e){e.stopPropagation(),e.preventDefault(),s.value?(a.toggledClass&&s.$el.removeClass(a.toggledClass),a.untoggledClass&&s.$el.addClass(a.untoggledClass)):s.value||(a.untoggledClass&&s.$el.removeClass(a.untoggledClass),a.toggledClass&&s.$el.addClass(a.toggledClass)),s.set(!s.value)}),o=s,i(s,o)}return o(t,e),t.prototype.render=function(){return this.$el.html()},t}(a);e.exports=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=(n(1),n(39)),s=function(e){function t(n){var o,a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var s=i(this,e.call(this,n,a));return s.fixedResults=a.fixedResults||[],s.results=s.results.concat(s.fixedResults),s.allowFreeForm=a.allowFreeForm||!1,s.displayProperty=a.displayProperty||"displayName",o=s,i(s,o)}return o(t,e),t.prototype.refreshResults=function(t){var n=this;return e.prototype.refreshResults.call(this,function(e){return t(e.concat(n.fixedResults))})},t.prototype.handleSelection=function(e){var t=!0;e&&e.preSelectHook&&(t=e.preSelectHook.apply(this,[e])),t&&(console.log("proceed with selection",e),this.set(e))},t.prototype.selectByIndex=function(){this.active()&&(e.prototype.selectByIndex.call(this),this.allowFreeForm&&0===this.resultsListView.results.length&&this.handleSelection(this.textInput.get()))},t}(a);e.exports=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!t)throw(0,g.makeError)("Baobab.Cursor."+e+": "+("cannot use "+e+" on an unresolved dynamic path."),{path:t})}function s(e,t){v.prototype[e]=function(n,r){if(arguments.length>2)throw(0,g.makeError)("Baobab.Cursor."+e+": too many arguments.");if(1===arguments.length&&"unset"!==e&&(r=n,n=[]),n=(0,g.coercePath)(n),!d["default"].path(n))throw(0,g.makeError)("Baobab.Cursor."+e+": invalid path.",{path:n});if(t&&!t(r))throw(0,g.makeError)("Baobab.Cursor."+e+": invalid value.",{path:n,value:r});var i=this.solvedPath.concat(n);return this.tree.update(i,{type:e,value:r})}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},c=n(10),f=r(c),p=n(7),h=n(5),d=r(h),g=n(6),v=function(e){function t(e,n,r){var o=this;i(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),n=n||[],this._identity="[object Cursor]",this._archive=null,this.tree=e,this.path=n,this.hash=r,this.state={killed:!1,recording:!1,undoing:!1},this._dynamicPath=d["default"].dynamicPath(this.path),this._monkeyPath=d["default"].monkeyPath(this.tree._monkeys,this.path),this._dynamicPath?this.solvedPath=(0,g.getIn)(this.tree._data,this.path).solvedPath:this.solvedPath=this.path,this._writeHandler=function(e){var t=e.data;!o.state.killed&&(0,g.solveUpdate)([t.path],o._getComparedPaths())&&(o.solvedPath=(0,g.getIn)(o.tree._data,o.path).solvedPath)};var a=function(e){var t=o,n=Object.defineProperties({},{previousData:{get:function(){return(0,g.getIn)(e,t.solvedPath).data},configurable:!0,enumerable:!0},currentData:{get:function(){return t.get()},configurable:!0,enumerable:!0}});return o.state.recording&&!o.state.undoing&&o.archive.add(n.previousData),o.state.undoing=!1,o.emit("update",n)};this._updateHandler=function(e){if(!o.state.killed){var t=e.data,n=t.paths,r=t.previousData,i=a.bind(o,r),s=o._getComparedPaths();return(0,g.solveUpdate)(n,s)?i():void 0}};var s=!1;this._lazyBind=function(){return s?void 0:(s=!0,o._dynamicPath&&o.tree.on("write",o._writeHandler),o.tree.on("update",o._updateHandler))},this._dynamicPath?this._lazyBind():(this.on=(0,g.before)(this._lazyBind,this.on.bind(this)),this.once=(0,g.before)(this._lazyBind,this.once.bind(this)))}return o(t,e),u(t,[{key:"_getComparedPaths",value:function(){var e=this._monkeyPath?(0,g.getIn)(this.tree._monkeys,this._monkeyPath).data.relatedPaths():[];return[this.solvedPath].concat(e)}},{key:"isRoot",value:function(){return!this.path.length}},{key:"isLeaf",value:function(){return d["default"].primitive(this._get().data)}},{key:"isBranch",value:function(){return!this.isRoot()&&!this.isLeaf()}},{key:"root",value:function(){return this.tree.select()}},{key:"select",value:function(e){return arguments.length>1&&(e=(0,g.arrayFrom)(arguments)),this.tree.select(this.path.concat(e))}},{key:"up",value:function(){return this.isRoot()?null:this.tree.select(this.path.slice(0,-1))}},{key:"down",value:function(){if(a("down",this.solvedPath),!(this._get().data instanceof Array))throw Error("Baobab.Cursor.down: cannot go down on a non-list type.");return this.tree.select(this.solvedPath.concat(0))}},{key:"left",value:function(){a("left",this.solvedPath);var e=+this.solvedPath[this.solvedPath.length-1];if(isNaN(e))throw Error("Baobab.Cursor.left: cannot go left on a non-list type.");return e?this.tree.select(this.solvedPath.slice(0,-1).concat(e-1)):null}},{key:"right",value:function(){a("right",this.solvedPath);var e=+this.solvedPath[this.solvedPath.length-1];if(isNaN(e))throw Error("Baobab.Cursor.right: cannot go right on a non-list type.");return e+1===this.up()._get().data.length?null:this.tree.select(this.solvedPath.slice(0,-1).concat(e+1))}},{key:"leftmost",value:function(){a("leftmost",this.solvedPath);var e=+this.solvedPath[this.solvedPath.length-1];if(isNaN(e))throw Error("Baobab.Cursor.leftmost: cannot go left on a non-list type.");return this.tree.select(this.solvedPath.slice(0,-1).concat(0))}},{key:"rightmost",value:function(){a("rightmost",this.solvedPath);var e=+this.solvedPath[this.solvedPath.length-1];if(isNaN(e))throw Error("Baobab.Cursor.rightmost: cannot go right on a non-list type.");var t=this.up()._get().data;return this.tree.select(this.solvedPath.slice(0,-1).concat(t.length-1))}},{key:"map",value:function(e,t){a("map",this.solvedPath);var n=this._get().data,r=arguments.length;if(!d["default"].array(n))throw Error("baobab.Cursor.map: cannot map a non-list type.");return n.map(function(i,o){return e.call(r>1?t:this,this.select(o),o,n)},this)}},{key:"_get",value:function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];if(!d["default"].path(e))throw(0,g.makeError)("Baobab.Cursor.getters: invalid path.",{path:e});return this.solvedPath?(0,g.getIn)(this.tree._data,this.solvedPath.concat(e)):{data:void 0,solvedPath:null,exists:!1}}},{key:"exists",value:function(e){return e=(0,g.coercePath)(e),arguments.length>1&&(e=(0,g.arrayFrom)(arguments)),this._get(e).exists}},{key:"get",value:function(e){e=(0,g.coercePath)(e),arguments.length>1&&(e=(0,g.arrayFrom)(arguments));var t=this._get(e),n=t.data,r=t.solvedPath;return this.tree.emit("get",{data:n,solvedPath:r,path:this.path.concat(e)}),n}},{key:"serialize",value:function(e){if(e=(0,g.coercePath)(e),arguments.length>1&&(e=(0,g.arrayFrom)(arguments)),!d["default"].path(e))throw(0,g.makeError)("Baobab.Cursor.getters: invalid path.",{path:e});if(this.solvedPath){var t=this.solvedPath.concat(e),n=(0,g.deepClone)((0,g.getIn)(this.tree._data,t).data),r=(0,g.getIn)(this.tree._monkeys,t).data,i=function o(e,t){if(d["default"].object(t)&&d["default"].object(e))for(var n in t)t[n]instanceof p.Monkey?delete e[n]:o(e[n],t[n])};return i(n,r),n}}},{key:"project",value:function(e){if(d["default"].object(e)){var t={};for(var n in e)t[n]=this.get(e[n]);return t}if(d["default"].array(e)){for(var t=[],r=0,i=e.length;i>r;r++)t.push(this.get(e[r]));return t}throw(0,g.makeError)("Baobab.Cursor.project: wrong projection.",{projection:e})}},{key:"startRecording",value:function(e){if(e=e||1/0,1>e)throw(0,g.makeError)("Baobab.Cursor.startRecording: invalid max records.",{value:e});return this.state.recording=!0,this.archive?this:(this._lazyBind(),this.archive=new g.Archive(e),this)}},{key:"stopRecording",value:function(){return this.state.recording=!1,this}},{key:"undo",value:function(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];if(!this.state.recording)throw new Error("Baobab.Cursor.undo: cursor is not recording.");var t=this.archive.back(e);if(!t)throw Error("Baobab.Cursor.undo: cannot find a relevant record.");return this.state.undoing=!0,this.set(t),this}},{key:"hasHistory",value:function(){return!(!this.archive||!this.archive.get().length)}},{key:"getHistory",value:function(){return this.archive?this.archive.get():[]}},{key:"clearHistory",value:function(){return this.archive&&this.archive.clear(),this}},{key:"release",value:function(){this._dynamicPath&&this.tree.off("write",this._writeHandler),this.tree.off("update",this._updateHandler),this.hash&&delete this.tree._cursors[this.hash],delete this.tree,delete this.path,delete this.solvedPath,delete this.archive,this.kill(),this.state.killed=!0}},{key:"toJSON",value:function(){return this.serialize()}},{key:"toString",value:function(){return this._identity}}]),t}(f["default"]);t["default"]=v,"function"==typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(v.prototype[Symbol.iterator]=function(){var e=this._get().data;if(!d["default"].array(e))throw Error("baobab.Cursor.@@iterate: cannot iterate a non-list type.");var t=0,n=this,r=e.length;return{next:function(){return r>t?{value:n.select(t++)}:{done:!0}}}}),s("set"),s("unset"),s("apply",d["default"]["function"]),s("push"),s("concat",d["default"].array),s("unshift"),s("splice",d["default"].splicer),s("merge",d["default"].object),s("deepMerge",d["default"].object),e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){return(0,l.makeError)('Baobab.update: cannot apply the "'+e+'" on '+("a non "+t+" (path: /"+n.join("/")+")."),{path:n})}function a(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],a=n.type,s=n.value,c={root:e},f=["root"].concat(i(t)),p=[],h=c,d=void 0,g=void 0,v=void 0;for(d=0,g=f.length;g>d;d++){if(v=f[d],d>0&&p.push(v),d===g-1){if("set"===a){if(r.pure&&h[v]===s)return{node:h[v]};u["default"].lazyGetter(h,v)?Object.defineProperty(h,v,{value:s,enumerable:!0,configurable:!0}):r.persistent?h[v]=(0,l.shallowClone)(s):h[v]=s}else if("monkey"===a)Object.defineProperty(h,v,{get:s,enumerable:!0,configurable:!0});else if("apply"===a){var y=s(h[v]);if(r.pure&&h[v]===y)return{node:h[v]};u["default"].lazyGetter(h,v)?Object.defineProperty(h,v,{value:y,enumerable:!0,configurable:!0}):r.persistent?h[v]=(0,l.shallowClone)(y):h[v]=y}else if("push"===a){if(!u["default"].array(h[v]))throw o("push","array",p);r.persistent?h[v]=h[v].concat([s]):h[v].push(s)}else if("unshift"===a){if(!u["default"].array(h[v]))throw o("unshift","array",p);r.persistent?h[v]=[s].concat(h[v]):h[v].unshift(s)}else if("concat"===a){if(!u["default"].array(h[v]))throw o("concat","array",p);r.persistent?h[v]=h[v].concat(s):h[v].push.apply(h[v],s)}else if("splice"===a){if(!u["default"].array(h[v]))throw o("splice","array",p);r.persistent?h[v]=l.splice.apply(null,[h[v]].concat(s)):h[v].splice.apply(h[v],s)}else if("unset"===a)u["default"].object(h)?delete h[v]:u["default"].array(h)&&h.splice(v,1);else if("merge"===a){if(!u["default"].object(h[v]))throw o("merge","object",p);r.persistent?h[v]=(0,l.shallowMerge)({},h[v],s):h[v]=(0,l.shallowMerge)(h[v],s)}else if("deepMerge"===a){if(!u["default"].object(h[v]))throw o("deepMerge","object",p);r.persistent?h[v]=(0,l.deepMerge)({},h[v],s):h[v]=(0,l.deepMerge)(h[v],s)}r.immutable&&(0,l.deepFreeze)(h);break}u["default"].primitive(h[v])?h[v]={}:r.persistent&&(h[v]=(0,l.shallowClone)(h[v])),r.immutable&&g>0&&(0,l.freeze)(h),h=h[v]}return u["default"].lazyGetter(h,v)?{data:c.root}:{data:c.root,node:h[v]}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var s=n(5),u=r(s),l=n(6);e.exports=t["default"]},function(e,t,n){var r=n(54);e.exports=function(e,t,n){function i(){var c=r()-u;t>c&&c>0?o=setTimeout(i,t-c):(o=null,n||(l=e.apply(s,a),o||(s=a=null)))}var o,a,s,u,l;return null==t&&(t=100),function(){s=this,a=arguments,u=r();var c=n&&!o;return o||(o=setTimeout(i,t)),c&&(l=e.apply(s,a),s=a=null),l}}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){e.exports=function(e){return"<button type='"+(e.submit?"submit":"button")+"' class='ui-button'>"+e.label+"</button>"}},function(e,t){e.exports=function(e){return'<div class="grow">\n    <div class="measuringWrapper">\n        <div class="expand-collapse-content">'+e+"</div>\n    </div>\n</div>\n"}},function(e,t){e.exports=function(e){return"<span class='ui-current-location-"+e.name+" ui-curr-loc'></span>\n<span style='display: "+e.displayValue+" '>Use my current location</span>\n"}},function(e,t){e.exports=function(e){return"<select>\n"+e.options.map(function(e){return e.display?e.selected?"<option value="+e.value+" selected=true>"+e.display+"</option>":"<option value="+e.value+">"+e.display+"</option>":e.selected?"<option value="+e.value+" selected=true>"+e.value+"</option>":"<option value="+e.value+">"+e.value+"</option>"})+"\n</select>\n"}},function(e,t){e.exports=function(e){return"<span class='ui-text-input-icon'>"+e.icon+"</span>"}},function(e,t){e.exports=function(e){return"<input type='text' id='"+e.id+"'\nclass='ui-text-input form-control'\nplaceholder='"+e.placeholder+"'\nvalue='"+e.get()+"'/>\n"}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1);n(67);var s=n(22),u=n(2),l=function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var a=i(this,e.call(this,n));return a.label=o.label||"ClickMe!",a.submit=o.submit||!1,a.preventPropagation=o.preventPropagation||!1,a}return o(t,e),t.prototype.render=function(){var e=this;return this.$el.html(s(this)),this.$el.find("button").click(function(t){t.preventDefault(),e.preventPropagation?t.stopPropagation():a.noop,e.publish("click",e.id)}),this.$el.html()},t}(u);e.exports=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(1),o=(n(59),n(9)),a={evaluate:/\[\[([\s\S]+?)\]\]/g,interpolate:/\[\[=([\s\S]+?)\]\]/g,encode:/\[\[!([\s\S]+?)\]\]/g,use:/\[\[#([\s\S]+?)\]\]/g,define:/\[\[##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\]\]/g,conditional:/\[\[\?(\?)?\s*([\s\S]*?)\s*\]\]/g,iterate:/\[\[~\s*(?:\]\]|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\]\])/g,varname:"model",strip:!1,append:!0,selfcontained:!1},s={translate:function(e,t){return o.getInstance().t(e,t)}},u=function(){function e(t){r(this,e),this.doT=t}return e.prototype.renderIntoDOM=function(e,t,n){if(!e)throw new Error("Cannot render null template!");if(!t)throw new Error("You must specify a jquery-friendly css selector to render template into.");var r=this.doT.template(e,a,s);return i(t).html(r(n))},e.prototype.compile=function(e,t){return this.doT.template(e,a,s)(t)},e}();e.exports=new u(window.doT)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(69);var a=n(2),s=n(16),u=n(23),l=function(e){function t(n,o){var a;r(this,t);var u=i(this,e.call(this,n,{parentElement:o.parentElement,preserveChildElements:!0})),l=new s(o.toggleSelector,o);return l.render(),l.subscribe(function(e){u.expandCollapse(e)}),a=u,i(u,a)}return o(t,e),t.prototype.expandCollapse=function(e){if(e){var t=this.$el.find(".measuringWrapper")[0].clientHeight;this.$el.find(".grow").css("height",t+"px")}else this.$el.find(".grow").css("height","0")},t.prototype.render=function(){var e=this.$el.html();return this.$el.html(u(e)),this.$el[0].outerHTML},t}(a);e.exports=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n(2),u=n(20),l=function(e){function t(n){var o,s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var l=i(this,e.call(this,n,{preserveChildElements:!0}));if(!s.onScrollToBottom)throw new Error("You must provide an onScrollToBottom function");l.onScrollToBottom=s.onScrollToBottom;var c=s.debounceWait||500,f=s.windowScroll?a(window):l.$el;return f.scroll(u(function(){var e=f.scrollTop(),t=f.height(),n=f[0].scrollHeight||a(document).height(),r=s.scrollTrigger||.95;e/(n-t)>r&&l.onScrollToBottom()},c,!1)),o=l,i(l,o)}return o(t,e),t.prototype.render=function(){return this.$el.html()},t}(s);e.exports=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(71);var a=n(24),s=n(1),u=n(17),l=n(11),c=n(12),f=function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var u=new l({render:function(e){return e.displayValue="listItem"===e.name?"inline":"none",a(e)},controller:function(e){var t=new c(".ui-current-location-"+e.name,{geolocationAPI:o.geolocationAPI});t.subscribe(function(e){e.isLocation&&(f.set(e),f.textInput.$input.val("Your current location"))}),t.render()}});o.textInputOpts=o.textInputOpts||{},Object.assign(o.textInputOpts,{iconClearsValue:!1,icon:u.make({name:"icon"})}),o.fixedResults=(o.fixedResults||[]).concat([{useMyCurrentLocation:!0,preSelectHook:function(e){return s(".ui-current-location-listItem").click(),!1}}]);var f=i(this,e.call(this,n,o));return f.iconFactory=u,f.$el.addClass("ui-location-typeahead"),f}return o(t,e),t.prototype.renderItem=function(t){return t&&t.useMyCurrentLocation?this.iconFactory.make({name:"listItem"}):e.prototype.renderItem.call(this,t)},t}(u);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(76);var s=n(56),u=n(1),l=n(2),c=function(e){function t(n){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i(this,t);var a=o(this,e.call(this,n));return a.displayNameKey=r.displayNameKey||"displayName",a.renderItem=r.renderItem||a.renderItem,a.setOptions(r.options||[]),a}return a(t,e),t.prototype.renderItem=function(e){return JSON.stringify(e[this.displayNameKey])},t.prototype.setOptions=function(e){var t=this.get().map(function(e){return e.value});this.options=e.map(function(e){return"object"!==("undefined"==typeof e?"undefined":r(e))&&(e={value:e}),e.checked=-1!==t.indexOf(e.value),e})},t.prototype.get=function(){return this.options=this.options||[],this.options.filter(function(e){return e.checked})},t.prototype.render=function(){var e=this;return this.$el.html(s(this)),this.$el.find("label").click(function(t){e.set(u(t.target.parentElement).find("input").val())}),this.$el.find("input").click(function(t){e.set(u(t.target).val())}),this.$el.html()},t.prototype.set=function(e){return Array.isArray(e)?this.options.forEach(function(t){t.checked=-1===e.indexOf(t.value)?!1:!0}):this.options.forEach(function(t){t.checked=t.value===e?!t.checked:t.checked}),this.render(),this.publish(this.get()),this},t}(l);e.exports=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=(n(1),n(66),n(57),function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var a=i(this,e.call(this,n));return Object.assign(a,{cssStyle:o.cssStyle||"pagination",edges:o.edges||0,hrefTextPrefix:o.hrefTextPrefix||"#page-",items:o.items||100,itemsOnPage:o.itemsOnPage||10,nextText:o.nextText||"Next",onPageClick:o.onPageClick,prevText:o.prevText||"Prev",value:o.currentPage||1}),a}return o(t,e),t.prototype.pageChange=function(e,t){this.set(e),this.onPageClick&&(t.stopPropagation(),t.preventDefault(),this.onPageClick(e,t))},t.prototype.render=function(){return this.$el.pagination({currentPage:this.get(),cssStyle:this.cssStyle,edges:this.edges,hrefTextPrefix:this.hrefTextPrefix,nextText:this.nextText,onPageClick:this.pageChange.bind(this),prevText:this.prevText,items:this.items,itemsOnPage:this.itemsOnPage}),this.$el.html()},t}(a));e.exports=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(72);var a=(n(1),n(60)),s=n(2),u=function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var a=i(this,e.call(this,n));return Object.assign(a,{structure:o.structure||[],ordinality:o.ordinality||!1,delimiter:o.delimiter||null,regex:o.regex||/\$\{(?:\s*)([\S]+?)(?:\s*)\}/g,value:""}),a.ordinality&&(a.structure=o.structure.sort(function(e,t){return e-t})),a}return o(t,e),t.prototype.get=function(){return this.value},t.prototype.set=function(e){this.value="undefined"!=typeof e?e:{},this.render()},t.prototype.render=function(){for(var e="",t=this.regex,n=0;n<this.structure.length;n++){for(var r=this.structure[n],i=r["default"],o=r.required,s=r.fragment,u=void 0;null!==(u=t.exec(s));){var l=u[0],c=u[1];if(a.exists(this,c))s=s.replace(l,a.get(this,c));else if(i)s=i;else{if(o)return void this.$el.html("<span></span>");s=null}}null!==s&&(e+=s,this.delimiter&&n<this.structure.length-1&&(e+=this.delimiter))}this.$el.html("<span>"+e+"</span")},t}(s);e.exports=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(73);var a=n(25),s=n(1),u=n(2),l=function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var a=i(this,e.call(this,n));return a.options=(o.options||[]).map(function(e){return s.isPlainObject(e)?{display:e.display,value:e.value,selected:e.value===a.get()}:{value:e,selected:e===a.get()}}),a}return o(t,e),t.prototype.getDisplayValue=function(){var e=void 0,t=!0,n=!1,r=void 0;try{for(var i,o=this.options[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;a.selected&&(e=a.display?a.display:a.value)}}catch(s){n=!0,r=s}finally{try{!t&&o["return"]&&o["return"]()}finally{if(n)throw r}}return e},t.prototype.set=function(t){return this.options=this.options.map(function(e){return e.selected=e.value===t,e}),e.prototype.set.call(this,t)},t.prototype.render=function(){var e=this;return this.$el.html(a(this)),this.$el.find("select").change(function(t){e.set(s(t.target).val())}),this.$el.html()},t}(u);e.exports=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(42),o=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),this.state=new i(t),this.cursors={},this.modifiers={}}return e.prototype.commit=function(){return this.state.commit()},e.prototype.curse=function(e){return this.cursors[e]=this.state.select(e),this.cursors[e]},e.prototype.define=function(e,t){this.modifiers[e]=t.bind(this)},e}();e.exports=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(63),s=n(2),u=n(1),l=n(15),c=n(13),f=n(8),p=function(e){function t(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t);var s=i(this,e.call(this,n,o));return Object.assign(s,{fetch:o.fetch,results:[]}),f("function"==typeof s.fetch),s.$el.append(a),s.textInput=new l(s.$el.find(".input-container"),o.textInputOpts||{}),s.resultsListView=new c(s.$el.find(".results-list-container"),{fetch:function(e){s.refreshResults(e)},renderItem:o.renderItem||null}),s.resultsListView.subscribe(function(e){"refresh"!==e&&(s.handleSelection(e),s.textInput.$el.find("input").focus())}),s.textInput.subscribe(function(e){s.resultsListView.refresh()}),s}return o(t,e),t.prototype.handleSelection=function(e){this.set(e)},t.prototype.getDisplayValue=function(e){return u.isPlainObject(e)&&(e=e[this.displayProperty]),e},t.prototype.set=function(e){return this.textInput.set(this.getDisplayValue(e)),this.value=e,this.publish(this.get()),this},t.prototype.render=function(){return this.textInput.render(),this.resultsListView.refresh(),this.$el.html()},t.prototype.refreshResults=function(e){var t=this;this.fetch(this.textInput.get(),function(n){t.results=n,e(n)})},t}(s);e.exports=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(75);var a=n(1),s=n(38),u="ui-typeahead-highlight",l=function(e){function t(n){var o,a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r(this,t),a.renderItem=function(e){return o.renderItem(e)},o=i(this,e.call(this,n,a))}return o(t,e),t.prototype.render=function(){return e.prototype.render.call(this),this.resultsListView.$el.hide(),this.attachFocusEvents(),this.attachKeyEvents(),this.$el.html()},t.prototype.active=function(e){return"boolean"==typeof e&&(this.isActive=e,this.isActive?this.onActive():this.onInactive()),this.isActive},t.prototype.onActive=function(){this.resultsListView.$el.show()},t.prototype.onInactive=function(){this.resultsListView.$el.hide(),delete this.highlightIndex},t.prototype.attachFocusEvents=function(){var e=this;this.textInput.$el.find("input").on("focus",function(){e.active(!0)}),a(document).click(function(t){0===e.$el.find(a(t.target)).size()&&"input"!==a(t.target)[0].tagName&&(e.active(!1),e.textInput.$el.find("input").blur())})},t.prototype.renderItem=function(e){var t=String(this.getDisplayValue(e)),n=this.textInput.get()||"",r=-1;if(0!==n.length&&(r=t.indexOf(n)),r>=0){var i=r,o=i+n.length;e=t.substring(0,i),e+="<b>",e+=t.substring(i,o),e+="</b>",o<t.length&&(e+=t.substring(o))}return this.getDisplayValue(e)},t.prototype.attachKeyEvents=function(){var e=this;this.highlightIndex,a(document).on("keydown",function(t){if(e.active())switch(t.which){case e.keyEvents.UP:e.decrementHighlight(),t.preventDefault();break;case e.keyEvents.DOWN:e.incrementHighlight(),t.preventDefault();break;case e.keyEvents.ENTER:
e.selectByIndex(),t.preventDefault();case e.keyEvents.ESC:e.active(!1)}})},t.prototype.selectByIndex=function(){this.active()&&(this.resultsListView.$el.find("."+u).click(),this.textInput.$el.find("input").blur())},t.prototype.incrementHighlight=function(){this.highlightIndex="undefined"==typeof this.highlightIndex?0:this.highlightIndex+1,this.normalizeHighlightIndex(),this.renderHighlight()},t.prototype.decrementHighlight=function(){this.highlightIndex="undefined"==typeof this.highlightIndex?this.resultsListView.$el.find("li").size()-1:this.highlightIndex-1,this.normalizeHighlightIndex(),this.renderHighlight()},t.prototype.normalizeHighlightIndex=function(){var e=this.resultsListView.$el.find("li").size();this.highlightIndex=(this.highlightIndex+e)%e},t.prototype.renderHighlight=function(){this.resultsListView.$el.find("."+u).removeClass(u),this.resultsListView.$el.find("li").eq(this.highlightIndex).addClass(u)},t}(s);e.exports=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(64),o=n(85),a=function(){function e(t){r(this,e),this.location=t}return e.prototype.updateQueryParams=function(e){var t=o.parse(window.location.href);t.query=e,t.search=null,i.pushState(null,null,o.format(t))},e.prototype.redirect=function(e){this.location.href=e},e.prototype.getQueryParams=function(){return o.parse(this.location.search,!0).query},e}();e.exports=a},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t){r.createInstance(e.locale,e.TRANSLATIONS,t)}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return"λ"+e.map(function(e){return b["default"]["function"](e)||b["default"].object(e)?"#"+I()+"#":e}).join("λ")}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},f=n(10),p=i(f),h=n(18),d=i(h),g=n(7),v=n(43),y=i(v),m=n(5),b=i(m),x=n(19),A=i(x),w=n(6),k=r(w),O=k.arrayFrom,E=k.coercePath,P=k.deepFreeze,j=k.getIn,S=k.makeError,T=k.deepMerge,C=k.shallowClone,L=k.shallowMerge,I=k.uniqid,N={autoCommit:!0,asynchronous:!0,immutable:!0,lazyMonkeys:!0,persistent:!0,pure:!0,validate:null,validationBehavior:"rollback"},R=function(e){function t(e,n){var r=this;if(o(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),arguments.length<1&&(e={}),!b["default"].object(e)&&!b["default"].array(e))throw S("Baobab: invalid data.",{data:e});this.options=L({},N,n),this.options.persistent||(this.options.immutable=!1,this.options.pure=!1),this._identity="[object Baobab]",this._cursors={},this._future=null,this._transaction=[],this._affectedPathsIndex={},this._monkeys={},this._previousData=null,this._data=e,this.root=new d["default"](this,[],"λ"),delete this.root.release,this.options.immutable&&P(this._data);var i=function(e){r[e]=function(){var t=this.root[e].apply(this.root,arguments);return t instanceof d["default"]?this:t}};["apply","concat","deepMerge","exists","get","push","merge","project","serialize","set","splice","unset","unshift"].forEach(i),this._refreshMonkeys();var a=this.validate();if(a)throw Error("Baobab: invalid data.",{error:a})}return a(t,e),l(t,[{key:"_refreshMonkeys",value:function(e,t,n){var r=this,i=function u(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];if(e instanceof g.Monkey)return e.release(),void(0,A["default"])(r._monkeys,t,{type:"unset"},{immutable:!1,persistent:!1,pure:!1});if(b["default"].object(e))for(var n in e)u(e[n],t.concat(n))},o=[],a=function l(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];if(e instanceof g.MonkeyDefinition||e instanceof g.Monkey){var n=new g.Monkey(r,t,e instanceof g.Monkey?e.definition:e);return o.push(n),void(0,A["default"])(r._monkeys,t,{type:"set",value:n},{immutable:!1,persistent:!1,pure:!1})}if(b["default"].object(e))for(var i in e)l(e[i],t.concat(i))};if(arguments.length){var s=j(this._monkeys,t).data;s&&i(s,t),"unset"!==n&&(a(e,t),o.forEach(function(e){return e.checkRecursivity()}))}else a(this._data),o.forEach(function(e){return e.checkRecursivity()});return this}},{key:"validate",value:function n(e){var t=this.options,n=t.validate,r=t.validationBehavior;if("function"!=typeof n)return null;var i=n.call(this,this._previousData,this._data,e||[[]]);return i instanceof Error?("rollback"===r&&(this._data=this._previousData,this._affectedPathsIndex={},this._transaction=[],this._previousData=this._data),this.emit("invalid",{error:i}),i):null}},{key:"select",value:function(e){if(e=e||[],arguments.length>1&&(e=O(arguments)),!b["default"].path(e))throw S("Baobab.select: invalid path.",{path:e});e=[].concat(e);var t=s(e),n=this._cursors[t];return n||(n=new d["default"](this,e,t),this._cursors[t]=n),this.emit("select",{path:e,cursor:n}),n}},{key:"update",value:function(e,t){var n=this;if(e=E(e),!b["default"].operationType(t.type))throw S('Baobab.update: unknown operation type "'+t.type+'".',{operation:t});var r=j(this._data,e),i=r.solvedPath,o=r.exists;if(!i)throw S("Baobab.update: could not solve the given path.",{path:i});var a=b["default"].monkeyPath(this._monkeys,i);if(a&&i.length>a.length)throw S("Baobab.update: attempting to update a read-only path.",{path:i});if("unset"!==t.type||o){var l=t;if(/merge/.test(t.type)){var c=j(this._monkeys,i).data;b["default"].object(c)&&(l=C(l),/deep/.test(l.type)?l.value=T({},c,l.value):l.value=L({},c,l.value))}this._transaction.length||(this._previousData=this._data);var f=(0,A["default"])(this._data,i,l,this.options),p=f.data,h=f.node;if(!("data"in f))return h;var d=i.concat("push"===t.type?h.length-1:[]),g=s(d);return this._data=p,this._affectedPathsIndex[g]=!0,this._transaction.push(u({},t,{path:d})),this._refreshMonkeys(h,i,t.type),this.emit("write",{path:d}),this.options.autoCommit?this.options.asynchronous?(this._future||(this._future=setTimeout(function(){return n.commit()},0)),h):(this.commit(),h):h}}},{key:"commit",value:function(){this._future&&(this._future=clearTimeout(this._future));var e=Object.keys(this._affectedPathsIndex).map(function(e){return"λ"!==e?e.split("λ").slice(1):[]}),t=this.validate(e);if(t)return this;var n=this._transaction,r=this._previousData;return this._affectedPathsIndex={},this._transaction=[],this._previousData=this._data,this.emit("update",{paths:e,currentData:this._data,transaction:n,previousData:r}),this}},{key:"watch",value:function(e){return new y["default"](this,e)}},{key:"release",value:function(){var e=void 0;this.emit("release"),delete this.root,delete this._data,delete this._previousData,delete this._transaction,delete this._affectedPathsIndex,delete this._monkeys;for(e in this._cursors)this._cursors[e].release();delete this._cursors,this.kill()}},{key:"toJSON",value:function(){return this.serialize()}},{key:"toString",value:function(){return this._identity}}]),t}(p["default"]);t["default"]=R,R.monkey=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(!t.length)throw new Error("Baobab.monkey: missing definition.");return 1===t.length?new g.MonkeyDefinition(t[0]):new g.MonkeyDefinition(t)},R.dynamicNode=R.monkey,R.Cursor=d["default"],R.MonkeyDefinition=g.MonkeyDefinition,R.Monkey=g.Monkey,R.type=b["default"],R.helpers=k,Object.defineProperty(R,"version",{value:"2.2.1"}),t["default"]=R,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},u=n(10),l=r(u),c=n(18),f=r(c),p=n(5),h=r(p),d=n(6),g=function(e){function t(e,n){var r=this;i(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.tree=e,this.mapping=null,this.state={killed:!1},this.refresh(n),this.handler=function(e){if(!r.state.killed){var t=r.getWatchedPaths();return(0,d.solveUpdate)(e.data.paths,t)?r.emit("update"):void 0}},this.tree.on("update",this.handler)}return o(t,e),a(t,[{key:"getWatchedPaths",value:function(){var e=this,t=Object.keys(this.mapping).map(function(t){var n=e.mapping[t];return n instanceof f["default"]?n.solvedPath:e.mapping[t]});return t.reduce(function(t,n){if(n=[].concat(n),h["default"].dynamicPath(n)&&(n=(0,d.getIn)(e.tree._data,n).solvedPath),!n)return t;var r=h["default"].monkeyPath(e.tree._monkeys,n);return r?t.concat((0,d.getIn)(e.tree._monkeys,r).data.relatedPaths()):t.concat([n])},[])}},{key:"getCursors",value:function(){var e=this,t={};return Object.keys(this.mapping).forEach(function(n){var r=e.mapping[n];r instanceof f["default"]?t[n]=r:t[n]=e.tree.select(r)}),t}},{key:"refresh",value:function(e){if(!h["default"].watcherMapping(e))throw(0,d.makeError)("Baobab.watch: invalid mapping.",{mapping:e});this.mapping=e;var t={};for(var n in e)t[n]=e[n]instanceof f["default"]?e[n].path:e[n];this.get=this.tree.project.bind(this.tree,t)}},{key:"release",value:function(){this.tree.off("update",this.handler),this.state.killed=!0,this.kill()}}]),t}(l["default"]);t["default"]=g,e.exports=t["default"]},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".ui-button{cursor:pointer}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".ui-current-location{cursor:pointer;background-size:contain;background-repeat:no-repeat}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".grow{transition:height .5s;height:0;overflow:hidden}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".ui-curr-loc{display:inline-block;width:22px;height:22px}.ui-location-typeahead .ui-text-input-icon{right:0}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".ui-text-input{width:100%}.ui-text-input-icon-wrapper{position:relative}.ui-text-input-icon{font-size:1pc;position:absolute;top:5px;right:15px;cursor:pointer}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".ui-typeahead{font-family:Roboto,Helvetica Neue,sans-serif;position:relative}.ui-typeahead .results-list-container{z-index:1000;box-shadow:gray 1px 1px 5px;background-color:#fff;position:absolute;width:100%}.ui-typeahead .results-list-container ul{list-style:none;padding-left:0}.ui-typeahead .results-list-container li{padding:10px;border-bottom:1px solid #f3f3f3}.ui-typeahead .results-list-container li:hover{background-color:#00516f;color:#fff;cursor:pointer}.ui-typeahead .results-list-container .ui-typeahead-highlight{background-color:#00516f;color:#fff}",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"@media (max-width:768px){label{position:relative;cursor:pointer}label input[type=checkbox]{display:none}label input[type=checkbox]+span{display:inline-block;line-height:normal;cursor:pointer;padding:8px 14px;background-color:#fff;border:1px solid #d0d0d0}label input[type=checkbox]+span:hover,label input[type=checkbox]:checked+span{border-color:#000;background-color:#105b63;color:#fff}}",""])},function(e,t){function n(){return(new Date).getTime()}e.exports=Date.now||n},function(e,t){e.exports=function(e){var t="<ul class='ui-list'> ",n=e.results;if(n)for(var r,i=-1,o=n.length-1;o>i;){r=n[i+=1],t+=" ";var a=e.renderItem(r,i);t+=" ",a&&(t+=" <li id='"+e.id+"' class='ui-list-item' data-index='"+i+"'>"+a+"</li> "),t+=" "}return t+="</ul>"}},function(e,t){e.exports=function(e){var t="<div class='ui-multi-select'> ",n=e.options;if(n)for(var r,i=-1,o=n.length-1;o>i;)r=n[i+=1],t+=" <div class=\"select-option\"> <label> <input type='checkbox' name='"+e.id+"' value='"+r.value+"' ",r.checked&&(t+="checked=true"),t+="/> <span>"+e.renderItem(r)+"</span> </label> </div> ";return t+="</div>"}},function(e,t){e.exports=function(e){var t='<div> <ul class="pagination"> ';if(e.result.pageCount>2){t+=" ";var n=e.preparePreLink(e.result.prelink);if(t+=" ",e.result.previous&&(t+=' <li> <a href="'+(n+e.result.previous)+'">'+e.options.translator("PREVIOUS")+"</a> </li> "),t+=" ",e.result.range.length){t+=" ";var r=e.result.range;if(r)for(var i,o=-1,a=r.length-1;a>o;)i=r[o+=1],t+=" ",t+=i===e.result.current?' <li class="active"> <a href="'+(n+i)+'">'+i+"</a> </li> ":' <li> <a href="'+(n+i)+'">'+i+"</a> </li> ",t+=" ";t+=" "}t+=" ",e.result.next&&(t+=' <li> <a href="'+(n+e.result.next)+'" class="paginator-next">'+e.options.translator("NEXT")+"</a> </li> "),t+=" "}return t+=" </ul></div>"}},function(e,t,n){var r;!function(){"use strict";function i(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||l,function(t,r,i,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===i?(e.defineParams&&o.replace(e.defineParams,function(e,t,i){n[r]={arg:t,text:i}}),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""}).replace(e.use||l,function(t,r){e.useParams&&(r=r.replace(e.useParams,function(e,t,r,i){if(n[r]&&n[r].arg&&i){var o=(r+":"+i).replace(/'|\\/g,"_");return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+i+"$2"),t+"def.__exp['"+o+"']"}}));var o=new Function("def","return "+r)(n);return o?i(e,o,n):o})}function o(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var a,s={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0};s.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}},a=function(){return this||(0,eval)("this")}(),"undefined"!=typeof e&&e.exports?e.exports=s:(r=function(){return s}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)));var u={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},l=/$^/;s.template=function(e,t,n){t=t||s.templateSettings;var r,c,f=t.append?u.append:u.split,p=0,h=t.use||t.define?i(t,e,n||{}):e;h=("var out='"+(t.strip?h.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):h).replace(/'|\\/g,"\\$&").replace(t.interpolate||l,function(e,t){return f.start+o(t)+f.end}).replace(t.encode||l,function(e,t){return r=!0,f.startencode+o(t)+f.end}).replace(t.conditional||l,function(e,t,n){return t?n?"';}else if("+o(n)+"){out+='":"';}else{out+='":n?"';if("+o(n)+"){out+='":"';}out+='"}).replace(t.iterate||l,function(e,t,n,r){return t?(p+=1,c=r||"i"+p,t=o(t),"';var arr"+p+"="+t+";if(arr"+p+"){var "+n+","+c+"=-1,l"+p+"=arr"+p+".length-1;while("+c+"<l"+p+"){"+n+"=arr"+p+"["+c+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||l,function(e,t){return"';"+o(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(t.selfcontained||!a||a._encodeHTML||(a._encodeHTML=s.encodeHTMLSource(t.doNotSkipEncoded)),h="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+s.encodeHTMLSource.toString()+"("+(t.doNotSkipEncoded||"")+"));"+h);try{return new Function(t.varname,h)}catch(d){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+h),d}},s.compile=function(e,t){return s.template(e,null,t)}}()},function(e,t,n){function r(e){this.__path=e.path||"./","/"!==this.__path[this.__path.length-1]&&(this.__path+="/"),this.__destination=e.destination||this.__path,"/"!==this.__destination[this.__destination.length-1]&&(this.__destination+="/"),this.__global=e.global||"window.render",this.__rendermodule=e.rendermodule||{},this.__settings=e.templateSettings?o(e.templateSettings,o(u.templateSettings)):void 0,this.__includes={}}function i(e){for(var t="",n=0;n<e.length;n++)t+="itself."+e[n]+"="+e[n]+";";return t}function o(e,t){t=t||{};for(var n in e)t[n]=e[n];return t}function a(e){var t=s.readFileSync(e);return t?t.toString():void console.log("problems with "+e)}var s=n(61),u=e.exports=n(58);u.process=function(e){return new r(e).compileAll()},r.prototype.compileToFile=function(e,t,n){n=n||{};var r,a=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf(".")),l=o(this.__includes,o(n)),c=this.__settings||u.templateSettings,f=o(c),p=u.template(t,c,l),h=[],d="";for(var g in l)l[g]!==n[g]&&l[g]!==this.__includes[g]&&(r=void 0,"string"==typeof l[g]?r=u.template(l[g],c,l):"function"==typeof l[g]?r=l[g]:l[g].arg&&(f.varname=l[g].arg,r=u.template(l[g].text,f,l)),r&&(d+=r.toString().replace("anonymous",g),h.push(g)));d+=p.toString().replace("anonymous",a),s.writeFileSync(e,"(function(){"+d+"var itself="+a+", _encodeHTML=("+u.encodeHTMLSource.toString()+"("+(c.doNotSkipEncoded||"")+"));"+i(h)+"if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {"+this.__global+"="+this.__global+"||{};"+this.__global+"['"+a+"']=itself;}}());")},r.prototype.compilePath=function(e){var t=a(e);return t?u.template(t,this.__settings||u.templateSettings,o(this.__includes)):void 0},r.prototype.compileAll=function(){console.log("Compiling all doT templates...");var e,t,n,r=this.__path,i=s.readdirSync(r);for(e=0,t=i.length;t>e;e++)n=i[e],/\.def(\.dot|\.jst)?$/.test(n)&&(console.log("Loaded def "+n),this.__includes[n.substring(0,n.indexOf("."))]=a(r+n));for(e=0,t=i.length;t>e;e++)n=i[e],/\.dot(\.def|\.jst)?$/.test(n)&&(console.log("Compiling "+n+" to function"),this.__rendermodule[n.substring(0,n.indexOf("."))]=this.compilePath(r+n)),/\.jst(\.dot|\.def)?$/.test(n)&&(console.log("Compiling "+n+" to file"),this.compileToFile(this.__destination+n.substring(0,n.indexOf("."))+".js",a(r+n)));return this.__rendermodule}},function(e,t){e.exports.exists=function n(e,t){if("string"==typeof t&&(t=t.split(".")),!(t instanceof Array)||0===t.length)return!1;t=t.slice();var r=t.shift();return"object"!=typeof e||null===e?!1:0===t.length?Object.hasOwnProperty.apply(e,[r]):n(e[r],t)},e.exports.get=function r(e,t){if("string"==typeof t&&(t=t.split(".")),t instanceof Array&&0!==t.length){t=t.slice();var n=t.shift();if("object"==typeof e&&null!==e)return 0===t.length?e[n]:t.length?r(e[n],t):void 0}},e.exports.search=function i(e,t){if("string"==typeof t&&(t=t.split(".")),t instanceof Array&&0!==t.length){t=t.slice();var n=t.shift();if("object"==typeof e&&null!==e)return"*"===n&&(n=".*"),"string"==typeof n&&(n=new RegExp(n)),0===t.length?Object.keys(e).filter(n.test.bind(n)).map(function(t){return e[t]}):Array.prototype.concat.apply([],Object.keys(e).filter(n.test.bind(n)).map(function(n){return i(e[n],t)}))}},e.exports.put=function o(e,t,n){if("string"==typeof t&&(t=t.split(".")),!(t instanceof Array)||0===t.length)return!1;t=t.slice();var r=t.shift();return"object"!=typeof e||null===e?!1:0!==t.length?("undefined"==typeof e[r]&&(e[r]={}),"object"!=typeof e[r]||null===e[r]?!1:o(e[r],t,n)):void(e[r]=n)},e.exports.remove=function a(e,t,n){if("string"==typeof t&&(t=t.split(".")),!(t instanceof Array)||0===t.length)return!1;t=t.slice();var r=t.shift();return"object"!=typeof e||null===e?!1:0===t.length?Object.hasOwnProperty.call(e,r)?(delete e[r],!0):!1:a(e[r],t,n)},e.exports.deepKeys=function s(e,t){"undefined"==typeof t&&(t=[]);var n=[];for(var r in e)Object.hasOwnProperty.call(e,r)&&(n.push(t.concat([r])),"object"==typeof e[r]&&null!==e[r]&&(n=n.concat(s(e[r],t.concat([r])))));return n}},function(e,t){console.log("I'm `fs` modules")},function(e,t){e.exports="<div class=ui-text-input-icon-wrapper></div>"},function(e,t){e.exports="<div class=ui-typeahead><div class=input-container></div><div class=results-list-container></div></div>"},function(e,t,n){var r,i,o;(function(e){/*!
=======
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
		nodeType = context.nodeType;
	
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		if ( !seed && documentIsHTML ) {
	
			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;
	
		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return doc;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context !== document && context;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {
	
			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;
	
			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var matched = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}
	
			return matched;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});
	
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	Data.accepts = jQuery.acceptData;
	
	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}
	
			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];
	
			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;
	
				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );
	
				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}
	
			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}
	
			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];
	
			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}
	
			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			if ( key === undefined ) {
				this.cache[ unlock ] = {};
	
			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();
	
	var data_user = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );
	
					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}
	
			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};
	
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	
	
	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;
	
	
	
	support.focusinBubbles = "onfocusin" in window;
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );
	
					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
	
			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			_default: [ 0, "", "" ]
		};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}
	
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			data_user.set( dest, udataCur );
		}
	}
	
	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];
	
						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );
	
						// Remember the top-level container
						tmp = fragment.firstChild;
	
						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}
	
			// Remove wrapper from fragment
			fragment.textContent = "";
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			return fragment;
		},
	
		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];
	
					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});
	
	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},
	
		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}
	
				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var arg = arguments[ 0 ];
	
			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;
	
				jQuery.cleanData( getAll( this ) );
	
				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});
	
			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, callback ) {
	
			// Flatten any nested arrays
			args = concat.apply( [], args );
	
			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call( this[ i ], node, i );
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}
	
			return this;
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	
	var iframe,
		elemdisplay = {};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
	
				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = (/^margin/);
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}
	
			return window.getComputedStyle( elem, null );
		};
	
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}
	
		if ( computed ) {
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}
	
	
	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );
	
			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";
	
			docElem.removeChild( container );
		}
	
		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {
	
					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {
	
					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );
	
					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );
	
					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );
	
					docElem.removeChild( container );
					div.removeChild( marginDiv );
	
					return ret;
				}
			});
		}
	})();
	
	
	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend({
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;
	
				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );
	
					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}
	
				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}
	
				return tween;
			} ]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
	
				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
				ret = jQuery.find.attr( elem, name );
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});
	
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );
	
			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});
	
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Document location
		ajaxLocation = window.location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport(function( options ) {
		var callback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;
	
					xhr.open( options.type, options.url, options.async, options.username, options.password );
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
	
					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");
	
					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = jQuery.buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
	
	
	
	
	var docElem = window.document.documentElement;
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || docElem;
			});
		}
	});
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	
	}));


/***/ },
/* 2 */
/*!********************!*\
  !*** ./src/Dot.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var doT = __webpack_require__(/*! dot */ 3);
	
	// Note: this just mimics apply current setup
	var dotConfigOverrides = {
	  evaluate: /\[\[([\s\S]+?)\]\]/g,
	  interpolate: /\[\[=([\s\S]+?)\]\]/g,
	  encode: /\[\[!([\s\S]+?)\]\]/g,
	  use: /\[\[#([\s\S]+?)\]\]/g,
	  define: /\[\[##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\]\]/g,
	  conditional: /\[\[\?(\?)?\s*([\s\S]*?)\s*\]\]/g,
	  iterate: /\[\[~\s*(?:\]\]|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\]\])/g,
	  varname: 'model',
	  strip: false,
	  append: true,
	  selfcontained: false
	};
	
	var DotService = (function () {
	  function DotService(doT) {
	    _classCallCheck(this, DotService);
	
	    this.doT = doT;
	  }
	
	  /**
	   * gets a doT template, interpolates the model into it,
	   * converts it into a jQuery DOM, then appends it to the DOM
	   * based on the given css selector
	   * @param {String} template
	   * @param {String} cssSelector
	   * @param {Object} viewModel
	   */
	
	  DotService.prototype.renderIntoDOM = function renderIntoDOM(template, cssSelector, viewModel) {
	    if (!template) {
	      throw new Error('Cannot render null template!');
	    }
	
	    if (!cssSelector) {
	      throw new Error('You must specify a jquery-friendly css selector to render template into.');
	    }
	
	    var renderIntoDOMWith = this.doT.template(template, dotConfigOverrides);
	    return $(cssSelector).html(renderIntoDOMWith(viewModel));
	  };
	
	  DotService.prototype.compile = function compile(template, data) {
	    return this.doT.template(template, dotConfigOverrides)(data);
	  };
	
	  return DotService;
	})();
	
	module.exports = new DotService(window.doT);

/***/ },
/* 3 */
/*!************************!*\
  !*** ./~/dot/index.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* doT + auto-compilation of doT templates
	 *
	 * 2012, Laura Doktorova, https://github.com/olado/doT
	 * Licensed under the MIT license
	 *
	 * Compiles .def, .dot, .jst files found under the specified path.
	 * It ignores sub-directories.
	 * Template files can have multiple extensions at the same time.
	 * Files with .def extension can be included in other files via {{#def.name}}
	 * Files with .dot extension are compiled into functions with the same name and
	 * can be accessed as renderer.filename
	 * Files with .jst extension are compiled into .js files. Produced .js file can be
	 * loaded as a commonJS, AMD module, or just installed into a global variable
	 * (default is set to window.render).
	 * All inline defines defined in the .jst file are
	 * compiled into separate functions and are available via _render.filename.definename
	 *
	 * Basic usage:
	 * var dots = require("dot").process({path: "./views"});
	 * dots.mytemplate({foo:"hello world"});
	 *
	 * The above snippet will:
	 * 1. Compile all templates in views folder (.dot, .def, .jst)
	 * 2. Place .js files compiled from .jst templates into the same folder.
	 *    These files can be used with require, i.e. require("./views/mytemplate").
	 * 3. Return an object with functions compiled from .dot templates as its properties.
	 * 4. Render mytemplate template.
	 */
	
	var fs = __webpack_require__(/*! fs */ 4),
		doT = module.exports = __webpack_require__(/*! ./doT */ 5);
	
	doT.process = function(options) {
		//path, destination, global, rendermodule, templateSettings
		return new InstallDots(options).compileAll();
	};
	
	function InstallDots(o) {
		this.__path 		= o.path || "./";
		if (this.__path[this.__path.length-1] !== '/') this.__path += '/';
		this.__destination	= o.destination || this.__path;
		if (this.__destination[this.__destination.length-1] !== '/') this.__destination += '/';
		this.__global		= o.global || "window.render";
		this.__rendermodule	= o.rendermodule || {};
		this.__settings 	= o.templateSettings ? copy(o.templateSettings, copy(doT.templateSettings)) : undefined;
		this.__includes		= {};
	}
	
	InstallDots.prototype.compileToFile = function(path, template, def) {
		def = def || {};
		var modulename = path.substring(path.lastIndexOf("/")+1, path.lastIndexOf("."))
			, defs = copy(this.__includes, copy(def))
			, settings = this.__settings || doT.templateSettings
			, compileoptions = copy(settings)
			, defaultcompiled = doT.template(template, settings, defs)
			, exports = []
			, compiled = ""
			, fn;
	
		for (var property in defs) {
			if (defs[property] !== def[property] && defs[property] !== this.__includes[property]) {
				fn = undefined;
				if (typeof defs[property] === 'string') {
					fn = doT.template(defs[property], settings, defs);
				} else if (typeof defs[property] === 'function') {
					fn = defs[property];
				} else if (defs[property].arg) {
					compileoptions.varname = defs[property].arg;
					fn = doT.template(defs[property].text, compileoptions, defs);
				}
				if (fn) {
					compiled += fn.toString().replace('anonymous', property);
					exports.push(property);
				}
			}
		}
		compiled += defaultcompiled.toString().replace('anonymous', modulename);
		fs.writeFileSync(path, "(function(){" + compiled
			+ "var itself=" + modulename + ", _encodeHTML=(" + doT.encodeHTMLSource.toString() + "(" + (settings.doNotSkipEncoded || '') + "));"
			+ addexports(exports)
			+ "if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {"
			+ this.__global + "=" + this.__global + "||{};" + this.__global + "['" + modulename + "']=itself;}}());");
	};
	
	function addexports(exports) {
		for (var ret ='', i=0; i< exports.length; i++) {
			ret += "itself." + exports[i]+ "=" + exports[i]+";";
		}
		return ret;
	}
	
	function copy(o, to) {
		to = to || {};
		for (var property in o) {
			to[property] = o[property];
		}
		return to;
	}
	
	function readdata(path) {
		var data = fs.readFileSync(path);
		if (data) return data.toString();
		console.log("problems with " + path);
	}
	
	InstallDots.prototype.compilePath = function(path) {
		var data = readdata(path);
		if (data) {
			return doT.template(data,
						this.__settings || doT.templateSettings,
						copy(this.__includes));
		}
	};
	
	InstallDots.prototype.compileAll = function() {
		console.log("Compiling all doT templates...");
	
		var defFolder = this.__path,
			sources = fs.readdirSync(defFolder),
			k, l, name;
	
		for( k = 0, l = sources.length; k < l; k++) {
			name = sources[k];
			if (/\.def(\.dot|\.jst)?$/.test(name)) {
				console.log("Loaded def " + name);
				this.__includes[name.substring(0, name.indexOf('.'))] = readdata(defFolder + name);
			}
		}
	
		for( k = 0, l = sources.length; k < l; k++) {
			name = sources[k];
			if (/\.dot(\.def|\.jst)?$/.test(name)) {
				console.log("Compiling " + name + " to function");
				this.__rendermodule[name.substring(0, name.indexOf('.'))] = this.compilePath(defFolder + name);
			}
			if (/\.jst(\.dot|\.def)?$/.test(name)) {
				console.log("Compiling " + name + " to file");
				this.compileToFile(this.__destination + name.substring(0, name.indexOf('.')) + '.js',
						readdata(defFolder + name));
			}
		}
		return this.__rendermodule;
	};


/***/ },
/* 4 */
/*!***********************!*\
  !*** ./~/fs/index.js ***!
  \***********************/
/***/ function(module, exports) {

	console.log("I'm `fs` modules");


/***/ },
/* 5 */
/*!**********************!*\
  !*** ./~/dot/doT.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// doT.js
	// 2011-2014, Laura Doktorova, https://github.com/olado/doT
	// Licensed under the MIT license.
	
	(function() {
		"use strict";
	
		var doT = {
			version: "1.0.3",
			templateSettings: {
				evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
				interpolate: /\{\{=([\s\S]+?)\}\}/g,
				encode:      /\{\{!([\s\S]+?)\}\}/g,
				use:         /\{\{#([\s\S]+?)\}\}/g,
				useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
				define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
				defineParams:/^\s*([\w$]+):([\s\S]+)/,
				conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
				iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
				varname:	"it",
				strip:		true,
				append:		true,
				selfcontained: false,
				doNotSkipEncoded: false
			},
			template: undefined, //fn, compile template
			compile:  undefined  //fn, for express
		}, _globals;
	
		doT.encodeHTMLSource = function(doNotSkipEncoded) {
			var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
				matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(code) {
				return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
			};
		};
	
		_globals = (function(){ return this || (0,eval)("this"); }());
	
		if (typeof module !== "undefined" && module.exports) {
			module.exports = doT;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return doT;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			_globals.doT = doT;
		}
	
		var startend = {
			append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
			split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
		}, skip = /$^/;
	
		function resolveDefs(c, block, def) {
			return ((typeof block === "string") ? block : block.toString())
			.replace(c.define || skip, function(m, code, assign, value) {
				if (code.indexOf("def.") === 0) {
					code = code.substring(4);
				}
				if (!(code in def)) {
					if (assign === ":") {
						if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
							def[code] = {arg: param, text: v};
						});
						if (!(code in def)) def[code]= value;
					} else {
						new Function("def", "def['"+code+"']=" + value)(def);
					}
				}
				return "";
			})
			.replace(c.use || skip, function(m, code) {
				if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
					if (def[d] && def[d].arg && param) {
						var rw = (d+":"+param).replace(/'|\\/g, "_");
						def.__exp = def.__exp || {};
						def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
						return s + "def.__exp['"+rw+"']";
					}
				});
				var v = new Function("def", "return " + code)(def);
				return v ? resolveDefs(c, v, def) : v;
			});
		}
	
		function unescape(code) {
			return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
		}
	
		doT.template = function(tmpl, c, def) {
			c = c || doT.templateSettings;
			var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
				str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;
	
			str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
						.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
				.replace(/'|\\/g, "\\$&")
				.replace(c.interpolate || skip, function(m, code) {
					return cse.start + unescape(code) + cse.end;
				})
				.replace(c.encode || skip, function(m, code) {
					needhtmlencode = true;
					return cse.startencode + unescape(code) + cse.end;
				})
				.replace(c.conditional || skip, function(m, elsecase, code) {
					return elsecase ?
						(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
						(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
				})
				.replace(c.iterate || skip, function(m, iterate, vname, iname) {
					if (!iterate) return "';} } out+='";
					sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
					return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
						+vname+"=arr"+sid+"["+indv+"+=1];out+='";
				})
				.replace(c.evaluate || skip, function(m, code) {
					return "';" + unescape(code) + "out+='";
				})
				+ "';return out;")
				.replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
				.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
				//.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');
	
			if (needhtmlencode) {
				if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
				str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
					+ doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
					+ str;
			}
			try {
				return new Function(c.varname, str);
			} catch (e) {
				if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
				throw e;
			}
		};
	
		doT.compile = function(tmpl, def) {
			return doT.template(tmpl, null, def);
		};
	}());


/***/ },
/* 6 */
/*!************************************!*\
  !*** ./src/BaseFragmentFactory.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// # Fragment Factory
	//
	// - Generate a DOM fragment in memory, run a component controller
	//   against this DOM context and return the final HTML
	//
	// - Consumer must define `::render` recieving data and returning HTML
	//
	// - Consumer can define a controller function, which recieves the same data as render
	//   and will be run with the guarentee that the HTML returned from `::render` is available
	//   to the controller in the DOM
	
	// scripts
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var assert = __webpack_require__(/*! ./assert */ 7);
	
	var BaseFragmentFactory = (function () {
	  function BaseFragmentFactory() {
	    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, BaseFragmentFactory);
	
	    assert(typeof opts.render === 'function');
	    this.render = opts.render;
	    this.controller = opts.controller || $.noop;
	  }
	
	  BaseFragmentFactory.prototype.make = function make() {
	    var _this = this;
	
	    var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    // 1. get the generated html (consumer defines this)
	    var itemHTML = this.render(data);
	
	    var $context = $('<div></div>').html(itemHTML);
	
	    // 2. now run the controller against that context
	    // we delay here, in order to give the DOM time to actually render (happens on return)
	    setTimeout(function () {
	      _this.controller(data);
	    });
	
	    // 3. return the final html
	    return $context.html();
	  };
	
	  return BaseFragmentFactory;
	})();
	
	;
	
	module.exports = BaseFragmentFactory;

/***/ },
/* 7 */
/*!***********************!*\
  !*** ./src/assert.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (condition) {
	  if (!condition) {
	    throw new Error('Assertion failure');
	  }
	};

/***/ },
/* 8 */
/*!**************************!*\
  !*** ./src/PubSubHub.js ***!
  \**************************/
/***/ function(module, exports) {

	'use strict';
	
	// # Implements a simple 2 way stream of events
	//
	// Namespacing allows you to use this Hub for multiple components,
	// each component getting a single unique 2-way stream
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PubSubHub = (function () {
	  function PubSubHub() {
	    _classCallCheck(this, PubSubHub);
	
	    this.listeners = {
	      // namespace => [listener1, listener2, ... , listenN]
	    };
	  }
	
	  PubSubHub.prototype.push = function push(namespace, payload) {
	    if (!this.listeners[namespace]) {
	      this.listeners[namespace] = [];
	    }
	    this.listeners[namespace].push(payload);
	  };
	
	  PubSubHub.prototype.get = function get(namespace) {
	    if (!this.listeners[namespace]) {
	      this.listeners[namespace] = [];
	    }
	    return this.listeners[namespace];
	  };
	
	  PubSubHub.prototype.publish = function publish(namespace, payload) {
	    this.get(namespace).forEach(function (listener) {
	      listener(payload);
	    });
	  };
	
	  PubSubHub.prototype.subscribe = function subscribe(namespace, listener) {
	    this.push(namespace, listener);
	  };
	
	  return PubSubHub;
	})();
	
	module.exports = new PubSubHub();

/***/ },
/* 9 */
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Baobab = __webpack_require__(/*! baobab */ 10);
	
	// centralized state
	
	var State = (function () {
	  function State() {
	    var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, State);
	
	    this.state = new Baobab(initialState, opts);
	
	    this.cursors = {};
	    this.modifiers = {};
	  }
	
	  State.prototype.commit = function commit() {
	    return this.state.commit();
	  };
	
	  State.prototype.curse = function curse(selector) {
	    this.cursors[selector] = this.state.select(selector);
	    return this.cursors[selector];
	  };
	
	  State.prototype.define = function define(name, customFn) {
	    this.modifiers[name] = customFn.bind(this);
	  };
	
	  return State;
	})();
	
	module.exports = State;

/***/ },
/* 10 */
/*!*********************************!*\
  !*** ./~/baobab/dist/baobab.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Data Structure
	 * ======================
	 *
	 * A handy data tree with cursors.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(/*! emmett */ 11);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _cursor = __webpack_require__(/*! ./cursor */ 12);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _monkey = __webpack_require__(/*! ./monkey */ 13);
	
	var _watcher = __webpack_require__(/*! ./watcher */ 17);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _type = __webpack_require__(/*! ./type */ 14);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _update2 = __webpack_require__(/*! ./update */ 15);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 16);
	
	var helpers = _interopRequireWildcard(_helpers);
	
	var arrayFrom = helpers.arrayFrom;
	var coercePath = helpers.coercePath;
	var deepFreeze = helpers.deepFreeze;
	var getIn = helpers.getIn;
	var makeError = helpers.makeError;
	var deepMerge = helpers.deepMerge;
	var shallowClone = helpers.shallowClone;
	var shallowMerge = helpers.shallowMerge;
	var uniqid = helpers.uniqid;
	
	/**
	 * Baobab defaults
	 */
	var DEFAULTS = {
	
	  // Should the tree handle its transactions on its own?
	  autoCommit: true,
	
	  // Should the transactions be handled asynchronously?
	  asynchronous: true,
	
	  // Should the tree's data be immutable?
	  immutable: true,
	
	  // Should the monkeys be lazy?
	  lazyMonkeys: true,
	
	  // Should the tree be persistent?
	  persistent: true,
	
	  // Should the tree's update be pure?
	  pure: true,
	
	  // Validation specifications
	  validate: null,
	
	  // Validation behavior 'rollback' or 'notify'
	  validationBehavior: 'rollback'
	};
	
	/**
	 * Function returning a string hash from a non-dynamic path expressed as an
	 * array.
	 *
	 * @param  {array}  path - The path to hash.
	 * @return {string} string - The resultant hash.
	 */
	function hashPath(path) {
	  return 'λ' + path.map(function (step) {
	    if (_type2['default']['function'](step) || _type2['default'].object(step)) return '#' + uniqid() + '#';
	
	    return step;
	  }).join('λ');
	}
	
	/**
	 * Baobab class
	 *
	 * @constructor
	 * @param {object|array} [initialData={}]    - Initial data passed to the tree.
	 * @param {object}       [opts]              - Optional options.
	 * @param {boolean}      [opts.autoCommit]   - Should the tree auto-commit?
	 * @param {boolean}      [opts.asynchronous] - Should the tree's transactions
	 *                                             handled asynchronously?
	 * @param {boolean}      [opts.immutable]    - Should the tree be immutable?
	 * @param {boolean}      [opts.persistent]   - Should the tree be persistent?
	 * @param {boolean}      [opts.pure]         - Should the tree be pure?
	 * @param {function}     [opts.validate]     - Validation function.
	 * @param {string}       [opts.validationBehaviour] - "rollback" or "notify".
	 */
	
	var Baobab = (function (_Emitter) {
	  _inherits(Baobab, _Emitter);
	
	  function Baobab(initialData, opts) {
	    var _this = this;
	
	    _classCallCheck(this, Baobab);
	
	    _get(Object.getPrototypeOf(Baobab.prototype), 'constructor', this).call(this);
	
	    // Setting initialData to an empty object if no data is provided by use
	    if (arguments.length < 1) initialData = {};
	
	    // Checking whether given initial data is valid
	    if (!_type2['default'].object(initialData) && !_type2['default'].array(initialData)) throw makeError('Baobab: invalid data.', { data: initialData });
	
	    // Merging given options with defaults
	    this.options = shallowMerge({}, DEFAULTS, opts);
	
	    // Disabling immutability & persistence if persistence if disabled
	    if (!this.options.persistent) {
	      this.options.immutable = false;
	      this.options.pure = false;
	    }
	
	    // Privates
	    this._identity = '[object Baobab]';
	    this._cursors = {};
	    this._future = null;
	    this._transaction = [];
	    this._affectedPathsIndex = {};
	    this._monkeys = {};
	    this._previousData = null;
	    this._data = initialData;
	
	    // Properties
	    this.root = new _cursor2['default'](this, [], 'λ');
	    delete this.root.release;
	
	    // Does the user want an immutable tree?
	    if (this.options.immutable) deepFreeze(this._data);
	
	    // Bootstrapping root cursor's getters and setters
	    var bootstrap = function bootstrap(name) {
	      _this[name] = function () {
	        var r = this.root[name].apply(this.root, arguments);
	        return r instanceof _cursor2['default'] ? this : r;
	      };
	    };
	
	    ['apply', 'concat', 'deepMerge', 'exists', 'get', 'push', 'merge', 'project', 'serialize', 'set', 'splice', 'unset', 'unshift'].forEach(bootstrap);
	
	    // Registering the initial monkeys
	    this._refreshMonkeys();
	
	    // Initial validation
	    var validationError = this.validate();
	
	    if (validationError) throw Error('Baobab: invalid data.', { error: validationError });
	  }
	
	  /**
	   * Creating statics
	   */
	
	  /**
	   * Internal method used to refresh the tree's monkey register on every
	   * update.
	   * Note 1) For the time being, placing monkeys beneath array nodes is not
	   * allowed for performance reasons.
	   *
	   * @param  {mixed}   node      - The starting node.
	   * @param  {array}   path      - The starting node's path.
	   * @param  {string}  operation - The operation that lead to a refreshment.
	   * @return {Baobab}            - The tree instance for chaining purposes.
	   */
	
	  _createClass(Baobab, [{
	    key: '_refreshMonkeys',
	    value: function _refreshMonkeys(node, path, operation) {
	      var _this2 = this;
	
	      var clean = function clean(data) {
	        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        if (data instanceof _monkey.Monkey) {
	          data.release();
	          (0, _update3['default'])(_this2._monkeys, p, { type: 'unset' }, {
	            immutable: false,
	            persistent: false,
	            pure: false
	          });
	
	          return;
	        }
	
	        if (_type2['default'].object(data)) {
	          for (var k in data) {
	            clean(data[k], p.concat(k));
	          }
	        }
	      };
	
	      var register = [];
	
	      var walk = function walk(data) {
	        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        // Should we sit a monkey in the tree?
	        if (data instanceof _monkey.MonkeyDefinition || data instanceof _monkey.Monkey) {
	          var monkey = new _monkey.Monkey(_this2, p, data instanceof _monkey.Monkey ? data.definition : data);
	
	          register.push(monkey);
	
	          (0, _update3['default'])(_this2._monkeys, p, { type: 'set', value: monkey }, {
	            immutable: false,
	            persistent: false,
	            pure: false
	          });
	
	          return;
	        }
	
	        // Object iteration
	        if (_type2['default'].object(data)) {
	          for (var k in data) {
	            walk(data[k], p.concat(k));
	          }
	        }
	      };
	
	      // Walking the whole tree
	      if (!arguments.length) {
	        walk(this._data);
	        register.forEach(function (m) {
	          return m.checkRecursivity();
	        });
	      } else {
	        var monkeysNode = getIn(this._monkeys, path).data;
	
	        // Is this required that we clean some already existing monkeys?
	        if (monkeysNode) clean(monkeysNode, path);
	
	        // Let's walk the tree only from the updated point
	        if (operation !== 'unset') {
	          walk(node, path);
	          register.forEach(function (m) {
	            return m.checkRecursivity();
	          });
	        }
	      }
	
	      return this;
	    }
	
	    /**
	     * Method used to validate the tree's data.
	     *
	     * @return {boolean} - Is the tree valid?
	     */
	  }, {
	    key: 'validate',
	    value: function validate(affectedPaths) {
	      var _options = this.options;
	      var validate = _options.validate;
	      var behavior = _options.validationBehavior;
	
	      if (typeof validate !== 'function') return null;
	
	      var error = validate.call(this, this._previousData, this._data, affectedPaths || [[]]);
	
	      if (error instanceof Error) {
	
	        if (behavior === 'rollback') {
	          this._data = this._previousData;
	          this._affectedPathsIndex = {};
	          this._transaction = [];
	          this._previousData = this._data;
	        }
	
	        this.emit('invalid', { error: error });
	
	        return error;
	      }
	
	      return null;
	    }
	
	    /**
	     * Method used to select data within the tree by creating a cursor. Cursors
	     * are kept as singletons by the tree for performance and hygiene reasons.
	     *
	     * Arity (1):
	     * @param {path}    path - Path to select in the tree.
	     *
	     * Arity (*):
	     * @param {...step} path - Path to select in the tree.
	     *
	     * @return {Cursor}      - The resultant cursor.
	     */
	  }, {
	    key: 'select',
	    value: function select(path) {
	
	      // If no path is given, we simply return the root
	      path = path || [];
	
	      // Variadic
	      if (arguments.length > 1) path = arrayFrom(arguments);
	
	      // Checking that given path is valid
	      if (!_type2['default'].path(path)) throw makeError('Baobab.select: invalid path.', { path: path });
	
	      // Casting to array
	      path = [].concat(path);
	
	      // Computing hash (done here because it would be too late to do it in the
	      // cursor's constructor since we need to hit the cursors' index first).
	      var hash = hashPath(path);
	
	      // Creating a new cursor or returning the already existing one for the
	      // requested path.
	      var cursor = this._cursors[hash];
	
	      if (!cursor) {
	        cursor = new _cursor2['default'](this, path, hash);
	        this._cursors[hash] = cursor;
	      }
	
	      // Emitting an event to notify that a part of the tree was selected
	      this.emit('select', { path: path, cursor: cursor });
	      return cursor;
	    }
	
	    /**
	     * Method used to update the tree. Updates are simply expressed by a path,
	     * dynamic or not, and an operation.
	     *
	     * This is where path solving should happen and not in the cursor.
	     *
	     * @param  {path}   path      - The path where we'll apply the operation.
	     * @param  {object} operation - The operation to apply.
	     * @return {mixed} - Return the result of the update.
	     */
	  }, {
	    key: 'update',
	    value: function update(path, operation) {
	      var _this3 = this;
	
	      // Coercing path
	      path = coercePath(path);
	
	      if (!_type2['default'].operationType(operation.type)) throw makeError('Baobab.update: unknown operation type "' + operation.type + '".', { operation: operation });
	
	      // Solving the given path
	
	      var _getIn = getIn(this._data, path);
	
	      var solvedPath = _getIn.solvedPath;
	      var exists = _getIn.exists;
	
	      // If we couldn't solve the path, we throw
	      if (!solvedPath) throw makeError('Baobab.update: could not solve the given path.', {
	        path: solvedPath
	      });
	
	      // Read-only path?
	      var monkeyPath = _type2['default'].monkeyPath(this._monkeys, solvedPath);
	      if (monkeyPath && solvedPath.length > monkeyPath.length) throw makeError('Baobab.update: attempting to update a read-only path.', {
	        path: solvedPath
	      });
	
	      // We don't unset irrelevant paths
	      if (operation.type === 'unset' && !exists) return;
	
	      // If we merge data, we need to acknowledge monkeys
	      var realOperation = operation;
	      if (/merge/.test(operation.type)) {
	        var monkeysNode = getIn(this._monkeys, solvedPath).data;
	
	        if (_type2['default'].object(monkeysNode)) {
	          realOperation = shallowClone(realOperation);
	
	          if (/deep/.test(realOperation.type)) realOperation.value = deepMerge({}, monkeysNode, realOperation.value);else realOperation.value = shallowMerge({}, monkeysNode, realOperation.value);
	        }
	      }
	
	      // Stashing previous data if this is the frame's first update
	      if (!this._transaction.length) this._previousData = this._data;
	
	      // Applying the operation
	      var result = (0, _update3['default'])(this._data, solvedPath, realOperation, this.options);
	
	      var data = result.data;
	      var node = result.node;
	
	      // If because of purity, the update was moot, we stop here
	      if (!('data' in result)) return node;
	
	      // If the operation is push, the affected path is slightly different
	      var affectedPath = solvedPath.concat(operation.type === 'push' ? node.length - 1 : []);
	
	      var hash = hashPath(affectedPath);
	
	      // Updating data and transaction
	      this._data = data;
	      this._affectedPathsIndex[hash] = true;
	      this._transaction.push(_extends({}, operation, { path: affectedPath }));
	
	      // Updating the monkeys
	      this._refreshMonkeys(node, solvedPath, operation.type);
	
	      // Emitting a `write` event
	      this.emit('write', { path: affectedPath });
	
	      // Should we let the user commit?
	      if (!this.options.autoCommit) return node;
	
	      // Should we update asynchronously?
	      if (!this.options.asynchronous) {
	        this.commit();
	        return node;
	      }
	
	      // Updating asynchronously
	      if (!this._future) this._future = setTimeout(function () {
	        return _this3.commit();
	      }, 0);
	
	      // Finally returning the affected node
	      return node;
	    }
	
	    /**
	     * Method committing the updates of the tree and firing the tree's events.
	     *
	     * @return {Baobab} - The tree instance for chaining purposes.
	     */
	  }, {
	    key: 'commit',
	    value: function commit() {
	
	      // Clearing timeout if one was defined
	      if (this._future) this._future = clearTimeout(this._future);
	
	      var affectedPaths = Object.keys(this._affectedPathsIndex).map(function (h) {
	        return h !== 'λ' ? h.split('λ').slice(1) : [];
	      });
	
	      // Is the tree still valid?
	      var validationError = this.validate(affectedPaths);
	
	      if (validationError) return this;
	
	      // Caching to keep original references before we change them
	      var transaction = this._transaction,
	          previousData = this._previousData;
	
	      this._affectedPathsIndex = {};
	      this._transaction = [];
	      this._previousData = this._data;
	
	      // Emitting update event
	      this.emit('update', {
	        paths: affectedPaths,
	        currentData: this._data,
	        transaction: transaction,
	        previousData: previousData
	      });
	
	      return this;
	    }
	
	    /**
	     * Method used to watch a collection of paths within the tree. Very useful
	     * to bind UI components and such to the tree.
	     *
	     * @param  {object} mapping - Mapping of paths to listen.
	     * @return {Cursor}         - The created watcher.
	     */
	  }, {
	    key: 'watch',
	    value: function watch(mapping) {
	      return new _watcher2['default'](this, mapping);
	    }
	
	    /**
	     * Method releasing the tree and its attached data from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	      var k = undefined;
	
	      this.emit('release');
	
	      delete this.root;
	
	      delete this._data;
	      delete this._previousData;
	      delete this._transaction;
	      delete this._affectedPathsIndex;
	      delete this._monkeys;
	
	      // Releasing cursors
	      for (k in this._cursors) this._cursors[k].release();
	      delete this._cursors;
	
	      // Killing event emitter
	      this.kill();
	    }
	
	    /**
	     * Overriding the `toJSON` method for convenient use with JSON.stringify.
	     *
	     * @return {mixed} - Data at cursor.
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.serialize();
	    }
	
	    /**
	     * Overriding the `toString` method for debugging purposes.
	     *
	     * @return {string} - The baobab's identity.
	     */
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._identity;
	    }
	  }]);
	
	  return Baobab;
	})(_emmett2['default']);
	
	exports['default'] = Baobab;
	Baobab.monkey = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (!args.length) throw new Error('Baobab.monkey: missing definition.');
	
	  if (args.length === 1) return new _monkey.MonkeyDefinition(args[0]);
	
	  return new _monkey.MonkeyDefinition(args);
	};
	Baobab.dynamicNode = Baobab.monkey;
	
	/**
	 * Exposing some internals for convenience
	 */
	Baobab.Cursor = _cursor2['default'];
	Baobab.MonkeyDefinition = _monkey.MonkeyDefinition;
	Baobab.Monkey = _monkey.Monkey;
	Baobab.type = _type2['default'];
	Baobab.helpers = helpers;
	
	/**
	 * Version
	 */
	Object.defineProperty(Baobab, 'version', {
	  value: '2.2.1'
	});
	
	/**
	 * Exporting
	 */
	exports['default'] = Baobab;
	module.exports = exports['default'];

/***/ },
/* 11 */
/*!*************************************!*\
  !*** ./~/baobab/~/emmett/emmett.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  'use strict';
	
	  /**
	   * Here is the list of every allowed parameter when using Emitter#on:
	   * @type {Object}
	   */
	  var __allowedOptions = {
	    once: 'boolean',
	    scope: 'object'
	  };
	
	  /**
	   * Incremental id used to order event handlers.
	   */
	  var __order = 0;
	
	  /**
	   * A simple helper to shallowly merge two objects. The second one will "win"
	   * over the first one.
	   *
	   * @param  {object}  o1 First target object.
	   * @param  {object}  o2 Second target object.
	   * @return {object}     Returns the merged object.
	   */
	  function shallowMerge(o1, o2) {
	    var o = {},
	        k;
	
	    for (k in o1) o[k] = o1[k];
	    for (k in o2) o[k] = o2[k];
	
	    return o;
	  }
	
	  /**
	   * Is the given variable a plain JavaScript object?
	   *
	   * @param  {mixed}  v   Target.
	   * @return {boolean}    The boolean result.
	   */
	  function isPlainObject(v) {
	    return v &&
	           typeof v === 'object' &&
	           !Array.isArray(v) &&
	           !(v instanceof Function) &&
	           !(v instanceof RegExp);
	  }
	
	  /**
	   * Iterate over an object that may have ES6 Symbols.
	   *
	   * @param  {object}   object  Object on which to iterate.
	   * @param  {function} fn      Iterator function.
	   * @param  {object}   [scope] Optional scope.
	   */
	  function forIn(object, fn, scope) {
	    var symbols,
	        k,
	        i,
	        l;
	
	    for (k in object)
	      fn.call(scope || null, k, object[k]);
	
	    if (Object.getOwnPropertySymbols) {
	      symbols = Object.getOwnPropertySymbols(object);
	
	      for (i = 0, l = symbols.length; i < l; i++)
	        fn.call(scope || null, symbols[i], object[symbols[i]]);
	    }
	  }
	
	  /**
	   * The emitter's constructor. It initializes the handlers-per-events store and
	   * the global handlers store.
	   *
	   * Emitters are useful for non-DOM events communication. Read its methods
	   * documentation for more information about how it works.
	   *
	   * @return {Emitter}         The fresh new instance.
	   */
	  var Emitter = function() {
	    this._enabled = true;
	
	    // Dirty trick that will set the necessary properties to the emitter
	    this.unbindAll();
	  };
	
	  /**
	   * This method unbinds every handlers attached to every or any events. So,
	   * these functions will no more be executed when the related events are
	   * emitted. If the functions were not bound to the events, nothing will
	   * happen, and no error will be thrown.
	   *
	   * Usage:
	   * ******
	   * > myEmitter.unbindAll();
	   *
	   * @return {Emitter}      Returns this.
	   */
	  Emitter.prototype.unbindAll = function() {
	
	    this._handlers = {};
	    this._handlersAll = [];
	    this._handlersComplex = [];
	
	    return this;
	  };
	
	
	  /**
	   * This method binds one or more functions to the emitter, handled to one or a
	   * suite of events. So, these functions will be executed anytime one related
	   * event is emitted.
	   *
	   * It is also possible to bind a function to any emitted event by not
	   * specifying any event to bind the function to.
	   *
	   * Recognized options:
	   * *******************
	   *  - {?boolean} once   If true, the handlers will be unbound after the first
	   *                      execution. Default value: false.
	   *  - {?object}  scope  If a scope is given, then the listeners will be called
	   *                      with this scope as "this".
	   *
	   * Variant 1:
	   * **********
	   * > myEmitter.on('myEvent', function(e) { console.log(e); });
	   * > // Or:
	   * > myEmitter.on('myEvent', function(e) { console.log(e); }, { once: true });
	   *
	   * @param  {string}   event   The event to listen to.
	   * @param  {function} handler The function to bind.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 2:
	   * **********
	   * > myEmitter.on(
	   * >   ['myEvent1', 'myEvent2'],
	   * >   function(e) { console.log(e); }
	   * >);
	   * > // Or:
	   * > myEmitter.on(
	   * >   ['myEvent1', 'myEvent2'],
	   * >   function(e) { console.log(e); }
	   * >   { once: true }}
	   * >);
	   *
	   * @param  {array}    events  The events to listen to.
	   * @param  {function} handler The function to bind.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 3:
	   * **********
	   * > myEmitter.on({
	   * >   myEvent1: function(e) { console.log(e); },
	   * >   myEvent2: function(e) { console.log(e); }
	   * > });
	   * > // Or:
	   * > myEmitter.on({
	   * >   myEvent1: function(e) { console.log(e); },
	   * >   myEvent2: function(e) { console.log(e); }
	   * > }, { once: true });
	   *
	   * @param  {object}  bindings An object containing pairs event / function.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 4:
	   * **********
	   * > myEmitter.on(function(e) { console.log(e); });
	   * > // Or:
	   * > myEmitter.on(function(e) { console.log(e); }, { once: true});
	   *
	   * @param  {function} handler The function to bind to every events.
	   * @param  {?object}  options Eventually some options.
	   * @return {Emitter}          Returns this.
	   */
	  Emitter.prototype.on = function(a, b, c) {
	    var i,
	        l,
	        k,
	        event,
	        eArray,
	        handlersList,
	        bindingObject;
	
	    // Variant 3
	    if (isPlainObject(a)) {
	      forIn(a, function(name, fn) {
	        this.on(name, fn, b);
	      }, this);
	
	      return this;
	    }
	
	    // Variant 1, 2 and 4
	    if (typeof a === 'function') {
	      c = b;
	      b = a;
	      a = null;
	    }
	
	    eArray = [].concat(a);
	
	    for (i = 0, l = eArray.length; i < l; i++) {
	      event = eArray[i];
	
	      bindingObject = {
	        order: __order++,
	        fn: b
	      };
	
	      // Defining the list in which the handler should be inserted
	      if (typeof event === 'string' || typeof event === 'symbol') {
	        if (!this._handlers[event])
	          this._handlers[event] = [];
	        handlersList = this._handlers[event];
	        bindingObject.type = event;
	      }
	      else if (event instanceof RegExp) {
	        handlersList = this._handlersComplex;
	        bindingObject.pattern = event;
	      }
	      else if (event === null) {
	        handlersList = this._handlersAll;
	      }
	      else {
	        throw Error('Emitter.on: invalid event.');
	      }
	
	      // Appending needed properties
	      for (k in c || {})
	        if (__allowedOptions[k])
	          bindingObject[k] = c[k];
	
	      handlersList.push(bindingObject);
	    }
	
	    return this;
	  };
	
	
	  /**
	   * This method works exactly as the previous #on, but will add an options
	   * object if none is given, and set the option "once" to true.
	   *
	   * The polymorphism works exactly as with the #on method.
	   */
	  Emitter.prototype.once = function() {
	    var args = Array.prototype.slice.call(arguments),
	        li = args.length - 1;
	
	    if (isPlainObject(args[li]) && args.length > 1)
	      args[li] = shallowMerge(args[li], {once: true});
	    else
	      args.push({once: true});
	
	    return this.on.apply(this, args);
	  };
	
	
	  /**
	   * This method unbinds one or more functions from events of the emitter. So,
	   * these functions will no more be executed when the related events are
	   * emitted. If the functions were not bound to the events, nothing will
	   * happen, and no error will be thrown.
	   *
	   * Variant 1:
	   * **********
	   * > myEmitter.off('myEvent', myHandler);
	   *
	   * @param  {string}   event   The event to unbind the handler from.
	   * @param  {function} handler The function to unbind.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 2:
	   * **********
	   * > myEmitter.off(['myEvent1', 'myEvent2'], myHandler);
	   *
	   * @param  {array}    events  The events to unbind the handler from.
	   * @param  {function} handler The function to unbind.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 3:
	   * **********
	   * > myEmitter.off({
	   * >   myEvent1: myHandler1,
	   * >   myEvent2: myHandler2
	   * > });
	   *
	   * @param  {object} bindings An object containing pairs event / function.
	   * @return {Emitter}         Returns this.
	   *
	   * Variant 4:
	   * **********
	   * > myEmitter.off(myHandler);
	   *
	   * @param  {function} handler The function to unbind from every events.
	   * @return {Emitter}          Returns this.
	   *
	   * Variant 5:
	   * **********
	   * > myEmitter.off(event);
	   *
	   * @param  {string} event     The event we should unbind.
	   * @return {Emitter}          Returns this.
	   */
	  function filter(target, fn) {
	    target = target || [];
	
	    var a = [],
	        l,
	        i;
	
	    for (i = 0, l = target.length; i < l; i++)
	      if (target[i].fn !== fn)
	        a.push(target[i]);
	
	    return a;
	  }
	
	  Emitter.prototype.off = function(events, fn) {
	    var i,
	        n,
	        k,
	        event;
	
	    // Variant 4:
	    if (arguments.length === 1 && typeof events === 'function') {
	      fn = arguments[0];
	
	      // Handlers bound to events:
	      for (k in this._handlers) {
	        this._handlers[k] = filter(this._handlers[k], fn);
	
	        if (this._handlers[k].length === 0)
	          delete this._handlers[k];
	      }
	
	      // Generic Handlers
	      this._handlersAll = filter(this._handlersAll, fn);
	
	      // Complex handlers
	      this._handlersComplex = filter(this._handlersComplex, fn);
	    }
	
	    // Variant 5
	    else if (arguments.length === 1 &&
	             (typeof events === 'string' || typeof events === 'symbol')) {
	      delete this._handlers[events];
	    }
	
	    // Variant 1 and 2:
	    else if (arguments.length === 2) {
	      var eArray = [].concat(events);
	
	      for (i = 0, n = eArray.length; i < n; i++) {
	        event = eArray[i];
	
	        this._handlers[event] = filter(this._handlers[event], fn);
	
	        if ((this._handlers[event] || []).length === 0)
	          delete this._handlers[event];
	      }
	    }
	
	    // Variant 3
	    else if (isPlainObject(events)) {
	      forIn(events, this.off, this);
	    }
	
	    return this;
	  };
	
	  /**
	   * This method retrieve the listeners attached to a particular event.
	   *
	   * @param  {?string}    Name of the event.
	   * @return {array}      Array of handler functions.
	   */
	  Emitter.prototype.listeners = function(event) {
	    var handlers = this._handlersAll || [],
	        complex = false,
	        h,
	        i,
	        l;
	
	    if (!event)
	      throw Error('Emitter.listeners: no event provided.');
	
	    handlers = handlers.concat(this._handlers[event] || []);
	
	    for (i = 0, l = this._handlersComplex.length; i < l; i++) {
	      h = this._handlersComplex[i];
	
	      if (~event.search(h.pattern)) {
	        complex = true;
	        handlers.push(h);
	      }
	    }
	
	    // If we have any complex handlers, we need to sort
	    if (this._handlersAll.length || complex)
	      return handlers.sort(function(a, b) {
	        return a.order - b.order;
	      });
	    else
	      return handlers.slice(0);
	  };
	
	  /**
	   * This method emits the specified event(s), and executes every handlers bound
	   * to the event(s).
	   *
	   * Use cases:
	   * **********
	   * > myEmitter.emit('myEvent');
	   * > myEmitter.emit('myEvent', myData);
	   * > myEmitter.emit(['myEvent1', 'myEvent2']);
	   * > myEmitter.emit(['myEvent1', 'myEvent2'], myData);
	   * > myEmitter.emit({myEvent1: myData1, myEvent2: myData2});
	   *
	   * @param  {string|array} events The event(s) to emit.
	   * @param  {object?}      data   The data.
	   * @return {Emitter}             Returns this.
	   */
	  Emitter.prototype.emit = function(events, data) {
	
	    // Short exit if the emitter is disabled
	    if (!this._enabled)
	      return this;
	
	    // Object variant
	    if (isPlainObject(events)) {
	      forIn(events, this.emit, this);
	      return this;
	    }
	
	    var eArray = [].concat(events),
	        onces = [],
	        event,
	        parent,
	        handlers,
	        handler,
	        i,
	        j,
	        l,
	        m;
	
	    for (i = 0, l = eArray.length; i < l; i++) {
	      handlers = this.listeners(eArray[i]);
	
	      for (j = 0, m = handlers.length; j < m; j++) {
	        handler = handlers[j];
	        event = {
	          type: eArray[i],
	          target: this
	        };
	
	        if (arguments.length > 1)
	          event.data = data;
	
	        handler.fn.call('scope' in handler ? handler.scope : this, event);
	
	        if (handler.once)
	          onces.push(handler);
	      }
	
	      // Cleaning onces
	      for (j = onces.length - 1; j >= 0; j--) {
	        parent = onces[j].type ?
	          this._handlers[onces[j].type] :
	          onces[j].pattern ?
	            this._handlersComplex :
	            this._handlersAll;
	
	        parent.splice(parent.indexOf(onces[j]), 1);
	      }
	    }
	
	    return this;
	  };
	
	
	  /**
	   * This method will unbind all listeners and make it impossible to ever
	   * rebind any listener to any event.
	   */
	  Emitter.prototype.kill = function() {
	
	    this.unbindAll();
	    this._handlers = null;
	    this._handlersAll = null;
	    this._handlersComplex = null;
	    this._enabled = false;
	
	    // Nooping methods
	    this.unbindAll =
	    this.on =
	    this.once =
	    this.off =
	    this.emit =
	    this.listeners = Function.prototype;
	  };
	
	
	  /**
	   * This method disabled the emitter, which means its emit method will do
	   * nothing.
	   *
	   * @return {Emitter} Returns this.
	   */
	  Emitter.prototype.disable = function() {
	    this._enabled = false;
	
	    return this;
	  };
	
	
	  /**
	   * This method enables the emitter.
	   *
	   * @return {Emitter} Returns this.
	   */
	  Emitter.prototype.enable = function() {
	    this._enabled = true;
	
	    return this;
	  };
	
	
	  /**
	   * Version:
	   */
	  Emitter.version = '3.1.1';
	
	
	  // Export:
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports)
	      exports = module.exports = Emitter;
	    exports.Emitter = Emitter;
	  } else if (typeof define === 'function' && define.amd)
	    define('emmett', [], function() {
	      return Emitter;
	    });
	  else
	    this.Emitter = Emitter;
	}).call(this);


/***/ },
/* 12 */
/*!*********************************!*\
  !*** ./~/baobab/dist/cursor.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Cursors
	 * ===============
	 *
	 * Cursors created by selecting some data within a Baobab tree.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(/*! emmett */ 11);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _monkey = __webpack_require__(/*! ./monkey */ 13);
	
	var _type = __webpack_require__(/*! ./type */ 14);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 16);
	
	/**
	 * Traversal helper function for dynamic cursors. Will throw a legible error
	 * if traversal is not possible.
	 *
	 * @param {string} method     - The method name, to create a correct error msg.
	 * @param {array}  solvedPath - The cursor's solved path.
	 */
	function checkPossibilityOfDynamicTraversal(method, solvedPath) {
	  if (!solvedPath) throw (0, _helpers.makeError)('Baobab.Cursor.' + method + ': ' + ('cannot use ' + method + ' on an unresolved dynamic path.'), { path: solvedPath });
	}
	
	/**
	 * Cursor class
	 *
	 * @constructor
	 * @param {Baobab} tree   - The cursor's root.
	 * @param {array}  path   - The cursor's path in the tree.
	 * @param {string} hash   - The path's hash computed ahead by the tree.
	 */
	
	var Cursor = (function (_Emitter) {
	  _inherits(Cursor, _Emitter);
	
	  function Cursor(tree, path, hash) {
	    var _this = this;
	
	    _classCallCheck(this, Cursor);
	
	    _get(Object.getPrototypeOf(Cursor.prototype), 'constructor', this).call(this);
	
	    // If no path were to be provided, we fallback to an empty path (root)
	    path = path || [];
	
	    // Privates
	    this._identity = '[object Cursor]';
	    this._archive = null;
	
	    // Properties
	    this.tree = tree;
	    this.path = path;
	    this.hash = hash;
	
	    // State
	    this.state = {
	      killed: false,
	      recording: false,
	      undoing: false
	    };
	
	    // Checking whether the given path is dynamic or not
	    this._dynamicPath = _type2['default'].dynamicPath(this.path);
	
	    // Checking whether the given path will meet a monkey
	    this._monkeyPath = _type2['default'].monkeyPath(this.tree._monkeys, this.path);
	
	    if (!this._dynamicPath) this.solvedPath = this.path;else this.solvedPath = (0, _helpers.getIn)(this.tree._data, this.path).solvedPath;
	
	    /**
	     * Listener bound to the tree's writes so that cursors with dynamic paths
	     * may update their solved path correctly.
	     *
	     * @param {object} event - The event fired by the tree.
	     */
	    this._writeHandler = function (_ref) {
	      var data = _ref.data;
	
	      if (_this.state.killed || !(0, _helpers.solveUpdate)([data.path], _this._getComparedPaths())) return;
	
	      _this.solvedPath = (0, _helpers.getIn)(_this.tree._data, _this.path).solvedPath;
	    };
	
	    /**
	     * Function in charge of actually trigger the cursor's updates and
	     * deal with the archived records.
	     *
	     * @note: probably should wrap the current solvedPath in closure to avoid
	     * for tricky cases where it would fail.
	     *
	     * @param {mixed} previousData - the tree's previous data.
	     */
	    var fireUpdate = function fireUpdate(previousData) {
	      var self = _this;
	
	      var eventData = Object.defineProperties({}, {
	        previousData: {
	          get: function get() {
	            return (0, _helpers.getIn)(previousData, self.solvedPath).data;
	          },
	          configurable: true,
	          enumerable: true
	        },
	        currentData: {
	          get: function get() {
	            return self.get();
	          },
	          configurable: true,
	          enumerable: true
	        }
	      });
	
	      if (_this.state.recording && !_this.state.undoing) _this.archive.add(eventData.previousData);
	
	      _this.state.undoing = false;
	
	      return _this.emit('update', eventData);
	    };
	
	    /**
	     * Listener bound to the tree's updates and determining whether the
	     * cursor is affected and should react accordingly.
	     *
	     * Note that this listener is lazily bound to the tree to be sure
	     * one wouldn't leak listeners when only creating cursors for convenience
	     * and not to listen to updates specifically.
	     *
	     * @param {object} event - The event fired by the tree.
	     */
	    this._updateHandler = function (event) {
	      if (_this.state.killed) return;
	
	      var _event$data = event.data;
	      var paths = _event$data.paths;
	      var previousData = _event$data.previousData;
	      var update = fireUpdate.bind(_this, previousData);
	      var comparedPaths = _this._getComparedPaths();
	
	      if ((0, _helpers.solveUpdate)(paths, comparedPaths)) return update();
	    };
	
	    // Lazy binding
	    var bound = false;
	    this._lazyBind = function () {
	      if (bound) return;
	
	      bound = true;
	
	      if (_this._dynamicPath) _this.tree.on('write', _this._writeHandler);
	
	      return _this.tree.on('update', _this._updateHandler);
	    };
	
	    // If the path is dynamic, we actually need to listen to the tree
	    if (this._dynamicPath) {
	      this._lazyBind();
	    } else {
	
	      // Overriding the emitter `on` and `once` methods
	      this.on = (0, _helpers.before)(this._lazyBind, this.on.bind(this));
	      this.once = (0, _helpers.before)(this._lazyBind, this.once.bind(this));
	    }
	  }
	
	  /**
	   * Method used to allow iterating over cursors containing list-type data.
	   *
	   * e.g. for(let i of cursor) { ... }
	   *
	   * @returns {object} -  Each item sequentially.
	   */
	
	  /**
	   * Internal helpers
	   * -----------------
	   */
	
	  /**
	   * Method returning the paths of the tree watched over by the cursor and that
	   * should be taken into account when solving a potential update.
	   *
	   * @return {array} - Array of paths to compare with a given update.
	   */
	
	  _createClass(Cursor, [{
	    key: '_getComparedPaths',
	    value: function _getComparedPaths() {
	
	      // Checking whether we should keep track of some dependencies
	      var additionalPaths = this._monkeyPath ? (0, _helpers.getIn)(this.tree._monkeys, this._monkeyPath).data.relatedPaths() : [];
	
	      return [this.solvedPath].concat(additionalPaths);
	    }
	
	    /**
	     * Predicates
	     * -----------
	     */
	
	    /**
	     * Method returning whether the cursor is at root level.
	     *
	     * @return {boolean} - Is the cursor the root?
	     */
	  }, {
	    key: 'isRoot',
	    value: function isRoot() {
	      return !this.path.length;
	    }
	
	    /**
	     * Method returning whether the cursor is at leaf level.
	     *
	     * @return {boolean} - Is the cursor a leaf?
	     */
	  }, {
	    key: 'isLeaf',
	    value: function isLeaf() {
	      return _type2['default'].primitive(this._get().data);
	    }
	
	    /**
	     * Method returning whether the cursor is at branch level.
	     *
	     * @return {boolean} - Is the cursor a branch?
	     */
	  }, {
	    key: 'isBranch',
	    value: function isBranch() {
	      return !this.isRoot() && !this.isLeaf();
	    }
	
	    /**
	     * Traversal Methods
	     * ------------------
	     */
	
	    /**
	     * Method returning the root cursor.
	     *
	     * @return {Baobab} - The root cursor.
	     */
	  }, {
	    key: 'root',
	    value: function root() {
	      return this.tree.select();
	    }
	
	    /**
	     * Method selecting a subpath as a new cursor.
	     *
	     * Arity (1):
	     * @param  {path} path    - The path to select.
	     *
	     * Arity (*):
	     * @param  {...step} path - The path to select.
	     *
	     * @return {Cursor}       - The created cursor.
	     */
	  }, {
	    key: 'select',
	    value: function select(path) {
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      return this.tree.select(this.path.concat(path));
	    }
	
	    /**
	     * Method returning the parent node of the cursor or else `null` if the
	     * cursor is already at root level.
	     *
	     * @return {Baobab} - The parent cursor.
	     */
	  }, {
	    key: 'up',
	    value: function up() {
	      if (!this.isRoot()) return this.tree.select(this.path.slice(0, -1));
	
	      return null;
	    }
	
	    /**
	     * Method returning the child node of the cursor.
	     *
	     * @return {Baobab} - The child cursor.
	     */
	  }, {
	    key: 'down',
	    value: function down() {
	      checkPossibilityOfDynamicTraversal('down', this.solvedPath);
	
	      if (!(this._get().data instanceof Array)) throw Error('Baobab.Cursor.down: cannot go down on a non-list type.');
	
	      return this.tree.select(this.solvedPath.concat(0));
	    }
	
	    /**
	     * Method returning the left sibling node of the cursor if this one is
	     * pointing at a list. Returns `null` if this cursor is already leftmost.
	     *
	     * @return {Baobab} - The left sibling cursor.
	     */
	  }, {
	    key: 'left',
	    value: function left() {
	      checkPossibilityOfDynamicTraversal('left', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.left: cannot go left on a non-list type.');
	
	      return last ? this.tree.select(this.solvedPath.slice(0, -1).concat(last - 1)) : null;
	    }
	
	    /**
	     * Method returning the right sibling node of the cursor if this one is
	     * pointing at a list. Returns `null` if this cursor is already rightmost.
	     *
	     * @return {Baobab} - The right sibling cursor.
	     */
	  }, {
	    key: 'right',
	    value: function right() {
	      checkPossibilityOfDynamicTraversal('right', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.right: cannot go right on a non-list type.');
	
	      if (last + 1 === this.up()._get().data.length) return null;
	
	      return this.tree.select(this.solvedPath.slice(0, -1).concat(last + 1));
	    }
	
	    /**
	     * Method returning the leftmost sibling node of the cursor if this one is
	     * pointing at a list.
	     *
	     * @return {Baobab} - The leftmost sibling cursor.
	     */
	  }, {
	    key: 'leftmost',
	    value: function leftmost() {
	      checkPossibilityOfDynamicTraversal('leftmost', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.leftmost: cannot go left on a non-list type.');
	
	      return this.tree.select(this.solvedPath.slice(0, -1).concat(0));
	    }
	
	    /**
	     * Method returning the rightmost sibling node of the cursor if this one is
	     * pointing at a list.
	     *
	     * @return {Baobab} - The rightmost sibling cursor.
	     */
	  }, {
	    key: 'rightmost',
	    value: function rightmost() {
	      checkPossibilityOfDynamicTraversal('rightmost', this.solvedPath);
	
	      var last = +this.solvedPath[this.solvedPath.length - 1];
	
	      if (isNaN(last)) throw Error('Baobab.Cursor.rightmost: cannot go right on a non-list type.');
	
	      var list = this.up()._get().data;
	
	      return this.tree.select(this.solvedPath.slice(0, -1).concat(list.length - 1));
	    }
	
	    /**
	     * Method mapping the children nodes of the cursor.
	     *
	     * @param  {function} fn      - The function to map.
	     * @param  {object}   [scope] - An optional scope.
	     * @return {array}            - The resultant array.
	     */
	  }, {
	    key: 'map',
	    value: function map(fn, scope) {
	      checkPossibilityOfDynamicTraversal('map', this.solvedPath);
	
	      var array = this._get().data,
	          l = arguments.length;
	
	      if (!_type2['default'].array(array)) throw Error('baobab.Cursor.map: cannot map a non-list type.');
	
	      return array.map(function (item, i) {
	        return fn.call(l > 1 ? scope : this, this.select(i), i, array);
	      }, this);
	    }
	
	    /**
	     * Getter Methods
	     * ---------------
	     */
	
	    /**
	     * Internal get method. Basically contains the main body of the `get` method
	     * without the event emitting. This is sometimes needed not to fire useless
	     * events.
	     *
	     * @param  {path}   [path=[]]       - Path to get in the tree.
	     * @return {object} info            - The resultant information.
	     * @return {mixed}  info.data       - Data at path.
	     * @return {array}  info.solvedPath - The path solved when getting.
	     */
	  }, {
	    key: '_get',
	    value: function _get() {
	      var path = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	      if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', { path: path });
	
	      if (!this.solvedPath) return { data: undefined, solvedPath: null, exists: false };
	
	      return (0, _helpers.getIn)(this.tree._data, this.solvedPath.concat(path));
	    }
	
	    /**
	     * Method used to check whether a certain path exists in the tree starting
	     * from the current cursor.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to check in the tree.
	     *
	     * Arity (2):
	     * @param {..step}  path           - Path to check in the tree.
	     *
	     * @return {boolean}               - Does the given path exists?
	     */
	  }, {
	    key: 'exists',
	    value: function exists(path) {
	      path = (0, _helpers.coercePath)(path);
	
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      return this._get(path).exists;
	    }
	
	    /**
	     * Method used to get data from the tree. Will fire a `get` event from the
	     * tree so that the user may sometimes react upon it to fetch data, for
	     * instance.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to get in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to get in the tree.
	     *
	     * @return {mixed}                 - Data at path.
	     */
	  }, {
	    key: 'get',
	    value: function get(path) {
	      path = (0, _helpers.coercePath)(path);
	
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      var _get2 = this._get(path);
	
	      var data = _get2.data;
	      var solvedPath = _get2.solvedPath;
	
	      // Emitting the event
	      this.tree.emit('get', { data: data, solvedPath: solvedPath, path: this.path.concat(path) });
	
	      return data;
	    }
	
	    /**
	     * Method used to return raw data from the tree, by carefully avoiding
	     * computed one.
	     *
	     * @todo: should be more performant as the cloning should happen as well as
	     * when dropping computed data.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to serialize in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to serialize in the tree.
	     *
	     * @return {mixed}                 - The retrieved raw data.
	     */
	  }, {
	    key: 'serialize',
	    value: function serialize(path) {
	      path = (0, _helpers.coercePath)(path);
	
	      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);
	
	      if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', { path: path });
	
	      if (!this.solvedPath) return undefined;
	
	      var fullPath = this.solvedPath.concat(path);
	
	      var data = (0, _helpers.deepClone)((0, _helpers.getIn)(this.tree._data, fullPath).data),
	          monkeys = (0, _helpers.getIn)(this.tree._monkeys, fullPath).data;
	
	      var dropComputedData = function dropComputedData(d, m) {
	        if (!_type2['default'].object(m) || !_type2['default'].object(d)) return;
	
	        for (var k in m) {
	          if (m[k] instanceof _monkey.Monkey) delete d[k];else dropComputedData(d[k], m[k]);
	        }
	      };
	
	      dropComputedData(data, monkeys);
	      return data;
	    }
	
	    /**
	     * Method used to project some of the data at cursor onto a map or a list.
	     *
	     * @param  {object|array} projection - The projection's formal definition.
	     * @return {object|array}            - The resultant map/list.
	     */
	  }, {
	    key: 'project',
	    value: function project(projection) {
	      if (_type2['default'].object(projection)) {
	        var data = {};
	
	        for (var k in projection) {
	          data[k] = this.get(projection[k]);
	        }return data;
	      } else if (_type2['default'].array(projection)) {
	        var data = [];
	
	        for (var i = 0, l = projection.length; i < l; i++) {
	          data.push(this.get(projection[i]));
	        }return data;
	      }
	
	      throw (0, _helpers.makeError)('Baobab.Cursor.project: wrong projection.', { projection: projection });
	    }
	
	    /**
	     * History Methods
	     * ----------------
	     */
	
	    /**
	     * Methods starting to record the cursor's successive states.
	     *
	     * @param  {integer} [maxRecords] - Maximum records to keep in memory. Note
	     *                                  that if no number is provided, the cursor
	     *                                  will keep everything.
	     * @return {Cursor}               - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'startRecording',
	    value: function startRecording(maxRecords) {
	      maxRecords = maxRecords || Infinity;
	
	      if (maxRecords < 1) throw (0, _helpers.makeError)('Baobab.Cursor.startRecording: invalid max records.', {
	        value: maxRecords
	      });
	
	      this.state.recording = true;
	
	      if (this.archive) return this;
	
	      // Lazy binding
	      this._lazyBind();
	
	      this.archive = new _helpers.Archive(maxRecords);
	      return this;
	    }
	
	    /**
	     * Methods stopping to record the cursor's successive states.
	     *
	     * @return {Cursor} - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'stopRecording',
	    value: function stopRecording() {
	      this.state.recording = false;
	      return this;
	    }
	
	    /**
	     * Methods undoing n steps of the cursor's recorded states.
	     *
	     * @param  {integer} [steps=1] - The number of steps to rollback.
	     * @return {Cursor}            - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'undo',
	    value: function undo() {
	      var steps = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      if (!this.state.recording) throw new Error('Baobab.Cursor.undo: cursor is not recording.');
	
	      var record = this.archive.back(steps);
	
	      if (!record) throw Error('Baobab.Cursor.undo: cannot find a relevant record.');
	
	      this.state.undoing = true;
	      this.set(record);
	
	      return this;
	    }
	
	    /**
	     * Methods returning whether the cursor has a recorded history.
	     *
	     * @return {boolean} - `true` if the cursor has a recorded history?
	     */
	  }, {
	    key: 'hasHistory',
	    value: function hasHistory() {
	      return !!(this.archive && this.archive.get().length);
	    }
	
	    /**
	     * Methods returning the cursor's history.
	     *
	     * @return {array} - The cursor's history.
	     */
	  }, {
	    key: 'getHistory',
	    value: function getHistory() {
	      return this.archive ? this.archive.get() : [];
	    }
	
	    /**
	     * Methods clearing the cursor's history.
	     *
	     * @return {Cursor} - The cursor instance for chaining purposes.
	     */
	  }, {
	    key: 'clearHistory',
	    value: function clearHistory() {
	      if (this.archive) this.archive.clear();
	      return this;
	    }
	
	    /**
	     * Releasing
	     * ----------
	     */
	
	    /**
	     * Methods releasing the cursor from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      // Removing listeners on parent
	      if (this._dynamicPath) this.tree.off('write', this._writeHandler);
	
	      this.tree.off('update', this._updateHandler);
	
	      // Unsubscribe from the parent
	      if (this.hash) delete this.tree._cursors[this.hash];
	
	      // Dereferencing
	      delete this.tree;
	      delete this.path;
	      delete this.solvedPath;
	      delete this.archive;
	
	      // Killing emitter
	      this.kill();
	      this.state.killed = true;
	    }
	
	    /**
	     * Output
	     * -------
	     */
	
	    /**
	     * Overriding the `toJSON` method for convenient use with JSON.stringify.
	     *
	     * @return {mixed} - Data at cursor.
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.serialize();
	    }
	
	    /**
	     * Overriding the `toString` method for debugging purposes.
	     *
	     * @return {string} - The cursor's identity.
	     */
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._identity;
	    }
	  }]);
	
	  return Cursor;
	})(_emmett2['default']);
	
	exports['default'] = Cursor;
	if (typeof Symbol === 'function' && typeof Symbol.iterator !== 'undefined') {
	  Cursor.prototype[Symbol.iterator] = function () {
	    var array = this._get().data;
	
	    if (!_type2['default'].array(array)) throw Error('baobab.Cursor.@@iterate: cannot iterate a non-list type.');
	
	    var i = 0;
	
	    var cursor = this,
	        length = array.length;
	
	    return {
	      next: function next() {
	        if (i < length) {
	          return {
	            value: cursor.select(i++)
	          };
	        }
	
	        return {
	          done: true
	        };
	      }
	    };
	  };
	}
	
	/**
	 * Setter Methods
	 * ---------------
	 *
	 * Those methods are dynamically assigned to the class for DRY reasons.
	 */
	
	/**
	 * Function creating a setter method for the Cursor class.
	 *
	 * @param {string}   name          - the method's name.
	 * @param {function} [typeChecker] - a function checking that the given value is
	 *                                   valid for the given operation.
	 */
	function makeSetter(name, typeChecker) {
	
	  /**
	   * Binding a setter method to the Cursor class and having the following
	   * definition.
	   *
	   * Note: this is not really possible to make those setters variadic because
	   * it would create an impossible polymorphism with path.
	   *
	   * @todo: perform value validation elsewhere so that tree.update can
	   * beneficiate from it.
	   *
	   * Arity (1):
	   * @param  {mixed} value - New value to set at cursor's path.
	   *
	   * Arity (2):
	   * @param  {path}  path  - Subpath to update starting from cursor's.
	   * @param  {mixed} value - New value to set.
	   *
	   * @return {mixed}       - Data at path.
	   */
	  Cursor.prototype[name] = function (path, value) {
	
	    // We should warn the user if he applies to many arguments to the function
	    if (arguments.length > 2) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': too many arguments.');
	
	    // Handling arities
	    if (arguments.length === 1 && name !== 'unset') {
	      value = path;
	      path = [];
	    }
	
	    // Coerce path
	    path = (0, _helpers.coercePath)(path);
	
	    // Checking the path's validity
	    if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid path.', { path: path });
	
	    // Checking the value's validity
	    if (typeChecker && !typeChecker(value)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid value.', { path: path, value: value });
	
	    var fullPath = this.solvedPath.concat(path);
	
	    // Filing the update to the tree
	    return this.tree.update(fullPath, {
	      type: name,
	      value: value
	    });
	  };
	}
	
	/**
	 * Making the necessary setters.
	 */
	makeSetter('set');
	makeSetter('unset');
	makeSetter('apply', _type2['default']['function']);
	makeSetter('push');
	makeSetter('concat', _type2['default'].array);
	makeSetter('unshift');
	makeSetter('splice', _type2['default'].splicer);
	makeSetter('merge', _type2['default'].object);
	makeSetter('deepMerge', _type2['default'].object);
	module.exports = exports['default'];

/***/ },
/* 13 */
/*!*********************************!*\
  !*** ./~/baobab/dist/monkey.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Monkeys
	 * ===============
	 *
	 * Exposing both handy monkey definitions and the underlying working class.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _type = __webpack_require__(/*! ./type */ 14);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _update2 = __webpack_require__(/*! ./update */ 15);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 16);
	
	/**
	 * Monkey Definition class
	 * Note: The only reason why this is a class is to be able to spot it within
	 * otherwise ordinary data.
	 *
	 * @constructor
	 * @param {array|object} definition - The formal definition of the monkey.
	 */
	
	var MonkeyDefinition = function MonkeyDefinition(definition) {
	  var _this = this;
	
	  _classCallCheck(this, MonkeyDefinition);
	
	  var monkeyType = _type2['default'].monkeyDefinition(definition);
	
	  if (!monkeyType) throw (0, _helpers.makeError)('Baobab.monkey: invalid definition.', { definition: definition });
	
	  this.type = monkeyType;
	
	  if (this.type === 'object') {
	    this.getter = definition.get;
	    this.projection = definition.cursors || {};
	    this.paths = Object.keys(this.projection).map(function (k) {
	      return _this.projection[k];
	    });
	  } else {
	    this.getter = definition[definition.length - 1];
	    this.projection = definition.slice(0, -1);
	    this.paths = this.projection;
	  }
	
	  this.hasDynamicPaths = this.paths.some(_type2['default'].dynamicPath);
	}
	
	/**
	 * Monkey core class
	 *
	 * @constructor
	 * @param {Baobab}           tree       - The bound tree.
	 * @param {MonkeyDefinition} definition - A definition instance.
	 */
	;
	
	exports.MonkeyDefinition = MonkeyDefinition;
	
	var Monkey = (function () {
	  function Monkey(tree, pathInTree, definition) {
	    var _this2 = this;
	
	    _classCallCheck(this, Monkey);
	
	    // Properties
	    this.tree = tree;
	    this.path = pathInTree;
	    this.definition = definition;
	    this.isRecursive = false;
	
	    // Adapting the definition's paths & projection to this monkey's case
	    var projection = definition.projection,
	        relative = _helpers.solveRelativePath.bind(null, pathInTree.slice(0, -1));
	
	    if (definition.type === 'object') {
	      this.projection = Object.keys(projection).reduce(function (acc, k) {
	        acc[k] = relative(projection[k]);
	        return acc;
	      }, {});
	      this.depPaths = Object.keys(this.projection).map(function (k) {
	        return _this2.projection[k];
	      });
	    } else {
	      this.projection = projection.map(relative);
	      this.depPaths = this.projection;
	    }
	
	    // Internal state
	    this.state = {
	      killed: false
	    };
	
	    /**
	     * Listener on the tree's `write` event.
	     *
	     * When the tree writes, this listener will check whether the updated paths
	     * are of any use to the monkey and, if so, will update the tree's node
	     * where the monkey sits with a lazy getter.
	     */
	    this.listener = function (_ref) {
	      var path = _ref.data.path;
	
	      if (_this2.state.killed) return;
	
	      // Is the monkey affected by the current write event?
	      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths());
	
	      if (concerned) _this2.update();
	    };
	
	    // Binding listener
	    this.tree.on('write', this.listener);
	
	    // Updating relevant node
	    this.update();
	  }
	
	  /**
	   * Method triggering a recursivity check.
	   *
	   * @return {Monkey} - Returns itself for chaining purposes.
	   */
	
	  _createClass(Monkey, [{
	    key: 'checkRecursivity',
	    value: function checkRecursivity() {
	      var _this3 = this;
	
	      this.isRecursive = this.depPaths.some(function (p) {
	        return !!_type2['default'].monkeyPath(_this3.tree._monkeys, p);
	      });
	
	      // Putting the recursive monkeys' listeners at the end of the stack
	      // NOTE: this is a dirty hack and a more thorough solution should be found
	      if (this.isRecursive) {
	        this.tree.off('write', this.listener);
	        this.tree.on('write', this.listener);
	      }
	
	      return this;
	    }
	
	    /**
	     * Method returning solved paths related to the monkey.
	     *
	     * @return {array} - An array of related paths.
	     */
	  }, {
	    key: 'relatedPaths',
	    value: function relatedPaths() {
	      var _this4 = this;
	
	      var paths = undefined;
	
	      if (this.definition.hasDynamicPaths) paths = this.depPaths.map(function (p) {
	        return (0, _helpers.getIn)(_this4.tree._data, p).solvedPath;
	      });else paths = this.depPaths;
	
	      if (!this.isRecursive) return paths;
	
	      return paths.reduce(function (accumulatedPaths, path) {
	        var monkeyPath = _type2['default'].monkeyPath(_this4.tree._monkeys, path);
	
	        if (!monkeyPath) return accumulatedPaths.concat([path]);
	
	        // Solving recursive path
	        var relatedMonkey = (0, _helpers.getIn)(_this4.tree._monkeys, monkeyPath).data;
	
	        return accumulatedPaths.concat(relatedMonkey.relatedPaths());
	      }, []);
	    }
	
	    /**
	     * Method used to update the tree's internal data with a lazy getter holding
	     * the computed data.
	     *
	     * @return {Monkey} - Returns itself for chaining purposes.
	     */
	  }, {
	    key: 'update',
	    value: function update() {
	      var deps = this.tree.project(this.projection);
	
	      var lazyGetter = (function (tree, def, data) {
	        var cache = null,
	            alreadyComputed = false;
	
	        return function () {
	
	          if (!alreadyComputed) {
	            cache = def.getter.apply(tree, def.type === 'object' ? [data] : data);
	
	            // Freezing if required
	            if (tree.options.immutable) (0, _helpers.deepFreeze)(cache);
	
	            alreadyComputed = true;
	          }
	
	          return cache;
	        };
	      })(this.tree, this.definition, deps);
	
	      lazyGetter.isLazyGetter = true;
	
	      // If the tree does not accept lazy monkeys, we solve the lazy getter
	      if (this.tree.options.lazyMonkeys) {
	        this.tree._data = (0, _update3['default'])(this.tree._data, this.path, { type: 'monkey', value: lazyGetter }, this.tree.options).data;
	      } else {
	        var result = (0, _update3['default'])(this.tree._data, this.path, { type: 'set', value: lazyGetter() }, this.tree.options);
	
	        if ('data' in result) this.tree._data = result.data;
	      }
	
	      return this;
	    }
	
	    /**
	     * Method releasing the monkey from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      // Unbinding events
	      this.tree.off('write', this.listener);
	      this.state.killed = true;
	
	      // Deleting properties
	      // NOTE: not deleting this.definition because some strange things happen
	      // in the _refreshMonkeys method. See #372.
	      delete this.projection;
	      delete this.depPaths;
	      delete this.tree;
	    }
	  }]);
	
	  return Monkey;
	})();
	
	exports.Monkey = Monkey;

/***/ },
/* 14 */
/*!*******************************!*\
  !*** ./~/baobab/dist/type.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Type Checking
	 * =====================
	 *
	 * Helpers functions used throughout the library to perform some type
	 * tests at runtime.
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _monkey = __webpack_require__(/*! ./monkey */ 13);
	
	var type = {};
	
	/**
	 * Helpers
	 * --------
	 */
	
	/**
	 * Checking whether the given variable is of any of the given types.
	 *
	 * @todo   Optimize this function by dropping `some`.
	 *
	 * @param  {mixed} target  - Variable to test.
	 * @param  {array} allowed - Array of allowed types.
	 * @return {boolean}
	 */
	function anyOf(target, allowed) {
	  return allowed.some(function (t) {
	    return type[t](target);
	  });
	}
	
	/**
	 * Simple types
	 * -------------
	 */
	
	/**
	 * Checking whether the given variable is an array.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.array = function (target) {
	  return Array.isArray(target);
	};
	
	/**
	 * Checking whether the given variable is an object.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.object = function (target) {
	  return target && typeof target === 'object' && !Array.isArray(target) && !(target instanceof Date) && !(target instanceof RegExp) && !(typeof Map === 'function' && target instanceof Map) && !(typeof Set === 'function' && target instanceof Set);
	};
	
	/**
	 * Checking whether the given variable is a string.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.string = function (target) {
	  return typeof target === 'string';
	};
	
	/**
	 * Checking whether the given variable is a number.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.number = function (target) {
	  return typeof target === 'number';
	};
	
	/**
	 * Checking whether the given variable is a function.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type['function'] = function (target) {
	  return typeof target === 'function';
	};
	
	/**
	 * Checking whether the given variable is a JavaScript primitive.
	 *
	 * @param  {mixed} target - Variable to test.
	 * @return {boolean}
	 */
	type.primitive = function (target) {
	  return target !== Object(target);
	};
	
	/**
	 * Complex types
	 * --------------
	 */
	
	/**
	 * Checking whether the given variable is a valid splicer.
	 *
	 * @param  {mixed} target    - Variable to test.
	 * @param  {array} [allowed] - Optional valid types in path.
	 * @return {boolean}
	 */
	type.splicer = function (target) {
	  if (!type.array(target) || target.length < 2) return false;
	
	  return anyOf(target[0], ['number', 'function', 'object']) && type.number(target[1]);
	};
	
	/**
	 * Checking whether the given variable is a valid cursor path.
	 *
	 * @param  {mixed} target    - Variable to test.
	 * @param  {array} [allowed] - Optional valid types in path.
	 * @return {boolean}
	 */
	
	// Order is important for performance reasons
	var ALLOWED_FOR_PATH = ['string', 'number', 'function', 'object'];
	
	type.path = function (target) {
	  if (!target && target !== 0 && target !== '') return false;
	
	  return [].concat(target).every(function (step) {
	    return anyOf(step, ALLOWED_FOR_PATH);
	  });
	};
	
	/**
	 * Checking whether the given path is a dynamic one.
	 *
	 * @param  {mixed} path - The path to test.
	 * @return {boolean}
	 */
	type.dynamicPath = function (path) {
	  return path.some(function (step) {
	    return type['function'](step) || type.object(step);
	  });
	};
	
	/**
	 * Retrieve any monkey subpath in the given path or null if the path never comes
	 * across computed data.
	 *
	 * @param  {mixed} data - The data to test.
	 * @param  {array} path - The path to test.
	 * @return {boolean}
	 */
	type.monkeyPath = function (data, path) {
	  var subpath = [];
	
	  var c = data,
	      i = undefined,
	      l = undefined;
	
	  for (i = 0, l = path.length; i < l; i++) {
	    subpath.push(path[i]);
	
	    if (typeof c !== 'object') return null;
	
	    c = c[path[i]];
	
	    if (c instanceof _monkey.Monkey) return subpath;
	  }
	
	  return null;
	};
	
	/**
	 * Check if the given object property is a lazy getter used by a monkey.
	 *
	 * @param  {mixed}   o           - The target object.
	 * @param  {string}  propertyKey - The property to test.
	 * @return {boolean}
	 */
	type.lazyGetter = function (o, propertyKey) {
	  var descriptor = Object.getOwnPropertyDescriptor(o, propertyKey);
	
	  return descriptor && descriptor.get && descriptor.get.isLazyGetter === true;
	};
	
	/**
	 * Returns the type of the given monkey definition or `null` if invalid.
	 *
	 * @param  {mixed} definition - The definition to check.
	 * @return {string|null}
	 */
	type.monkeyDefinition = function (definition) {
	
	  if (type.object(definition)) {
	    if (!type['function'](definition.get) || definition.cursors && (!type.object(definition.cursors) || !Object.keys(definition.cursors).every(function (k) {
	      return type.path(definition.cursors[k]);
	    }))) return null;
	
	    return 'object';
	  } else if (type.array(definition)) {
	    if (!type['function'](definition[definition.length - 1]) || !definition.slice(0, -1).every(function (p) {
	      return type.path(p);
	    })) return null;
	
	    return 'array';
	  }
	
	  return null;
	};
	
	/**
	 * Checking whether the given watcher definition is valid.
	 *
	 * @param  {mixed}   definition - The definition to check.
	 * @return {boolean}
	 */
	type.watcherMapping = function (definition) {
	  return type.object(definition) && Object.keys(definition).every(function (k) {
	    return type.path(definition[k]);
	  });
	};
	
	/**
	 * Checking whether the given string is a valid operation type.
	 *
	 * @param  {mixed} string - The string to test.
	 * @return {boolean}
	 */
	
	// Ordered by likeliness
	var VALID_OPERATIONS = ['set', 'apply', 'push', 'unshift', 'concat', 'deepMerge', 'merge', 'splice', 'unset'];
	
	type.operationType = function (string) {
	  return typeof string === 'string' && !! ~VALID_OPERATIONS.indexOf(string);
	};
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!*********************************!*\
  !*** ./~/baobab/dist/update.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Update
	 * ==============
	 *
	 * The tree's update scheme.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = update;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _type = __webpack_require__(/*! ./type */ 14);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 16);
	
	function err(operation, expectedTarget, path) {
	  return (0, _helpers.makeError)('Baobab.update: cannot apply the "' + operation + '" on ' + ('a non ' + expectedTarget + ' (path: /' + path.join('/') + ').'), { path: path });
	}
	
	/**
	 * Function aiming at applying a single update operation on the given tree's
	 * data.
	 *
	 * @param  {mixed}  data      - The tree's data.
	 * @param  {path}   path      - Path of the update.
	 * @param  {object} operation - The operation to apply.
	 * @param  {object} [opts]    - Optional options.
	 * @return {mixed}            - Both the new tree's data and the updated node.
	 */
	
	function update(data, path, operation) {
	  var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	  var operationType = operation.type;
	  var value = operation.value;
	
	  // Dummy root, so we can shift and alter the root
	  var dummy = { root: data },
	      dummyPath = ['root'].concat(_toConsumableArray(path)),
	      currentPath = [];
	
	  // Walking the path
	  var p = dummy,
	      i = undefined,
	      l = undefined,
	      s = undefined;
	
	  for (i = 0, l = dummyPath.length; i < l; i++) {
	
	    // Current item's reference is therefore p[s]
	    // The reason why we don't create a variable here for convenience
	    // is because we actually need to mutate the reference.
	    s = dummyPath[i];
	
	    // Updating the path
	    if (i > 0) currentPath.push(s);
	
	    // If we reached the end of the path, we apply the operation
	    if (i === l - 1) {
	
	      /**
	       * Set
	       */
	      if (operationType === 'set') {
	
	        // Purity check
	        if (opts.pure && p[s] === value) return { node: p[s] };
	
	        if (_type2['default'].lazyGetter(p, s)) {
	          Object.defineProperty(p, s, {
	            value: value,
	            enumerable: true,
	            configurable: true
	          });
	        } else if (opts.persistent) {
	          p[s] = (0, _helpers.shallowClone)(value);
	        } else {
	          p[s] = value;
	        }
	      }
	
	      /**
	       * Monkey
	       */
	      else if (operationType === 'monkey') {
	          Object.defineProperty(p, s, {
	            get: value,
	            enumerable: true,
	            configurable: true
	          });
	        }
	
	        /**
	         * Apply
	         */
	        else if (operationType === 'apply') {
	            var result = value(p[s]);
	
	            // Purity check
	            if (opts.pure && p[s] === result) return { node: p[s] };
	
	            if (_type2['default'].lazyGetter(p, s)) {
	              Object.defineProperty(p, s, {
	                value: result,
	                enumerable: true,
	                configurable: true
	              });
	            } else if (opts.persistent) {
	              p[s] = (0, _helpers.shallowClone)(result);
	            } else {
	              p[s] = result;
	            }
	          }
	
	          /**
	           * Push
	           */
	          else if (operationType === 'push') {
	              if (!_type2['default'].array(p[s])) throw err('push', 'array', currentPath);
	
	              if (opts.persistent) p[s] = p[s].concat([value]);else p[s].push(value);
	            }
	
	            /**
	             * Unshift
	             */
	            else if (operationType === 'unshift') {
	                if (!_type2['default'].array(p[s])) throw err('unshift', 'array', currentPath);
	
	                if (opts.persistent) p[s] = [value].concat(p[s]);else p[s].unshift(value);
	              }
	
	              /**
	               * Concat
	               */
	              else if (operationType === 'concat') {
	                  if (!_type2['default'].array(p[s])) throw err('concat', 'array', currentPath);
	
	                  if (opts.persistent) p[s] = p[s].concat(value);else p[s].push.apply(p[s], value);
	                }
	
	                /**
	                 * Splice
	                 */
	                else if (operationType === 'splice') {
	                    if (!_type2['default'].array(p[s])) throw err('splice', 'array', currentPath);
	
	                    if (opts.persistent) p[s] = _helpers.splice.apply(null, [p[s]].concat(value));else p[s].splice.apply(p[s], value);
	                  }
	
	                  /**
	                   * Unset
	                   */
	                  else if (operationType === 'unset') {
	                      if (_type2['default'].object(p)) delete p[s];else if (_type2['default'].array(p)) p.splice(s, 1);
	                    }
	
	                    /**
	                     * Merge
	                     */
	                    else if (operationType === 'merge') {
	                        if (!_type2['default'].object(p[s])) throw err('merge', 'object', currentPath);
	
	                        if (opts.persistent) p[s] = (0, _helpers.shallowMerge)({}, p[s], value);else p[s] = (0, _helpers.shallowMerge)(p[s], value);
	                      }
	
	                      /**
	                       * Deep merge
	                       */
	                      else if (operationType === 'deepMerge') {
	                          if (!_type2['default'].object(p[s])) throw err('deepMerge', 'object', currentPath);
	
	                          if (opts.persistent) p[s] = (0, _helpers.deepMerge)({}, p[s], value);else p[s] = (0, _helpers.deepMerge)(p[s], value);
	                        }
	
	      if (opts.immutable) (0, _helpers.deepFreeze)(p);
	
	      break;
	    }
	
	    // If we reached a leaf, we override by setting an empty object
	    else if (_type2['default'].primitive(p[s])) {
	        p[s] = {};
	      }
	
	      // Else, we shift the reference and continue the path
	      else if (opts.persistent) {
	          p[s] = (0, _helpers.shallowClone)(p[s]);
	        }
	
	    // Should we freeze the current step before continuing?
	    if (opts.immutable && l > 0) (0, _helpers.freeze)(p);
	
	    p = p[s];
	  }
	
	  // If we are updating a dynamic node, we need not return the affected node
	  if (_type2['default'].lazyGetter(p, s)) return { data: dummy.root };
	
	  // Returning new data object
	  return { data: dummy.root, node: p[s] };
	}
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/*!**********************************!*\
  !*** ./~/baobab/dist/helpers.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* eslint eqeqeq: 0 */
	
	/**
	 * Baobab Helpers
	 * ===============
	 *
	 * Miscellaneous helper functions.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.arrayFrom = arrayFrom;
	exports.before = before;
	exports.coercePath = coercePath;
	exports.getIn = getIn;
	exports.makeError = makeError;
	exports.solveRelativePath = solveRelativePath;
	exports.solveUpdate = solveUpdate;
	exports.splice = splice;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _monkey = __webpack_require__(/*! ./monkey */ 13);
	
	var _type = __webpack_require__(/*! ./type */ 14);
	
	var _type2 = _interopRequireDefault(_type);
	
	/**
	 * Noop function
	 */
	var noop = Function.prototype;
	
	/**
	 * Function returning the index of the first element of a list matching the
	 * given predicate.
	 *
	 * @param  {array}     a  - The target array.
	 * @param  {function}  fn - The predicate function.
	 * @return {mixed}        - The index of the first matching item or -1.
	 */
	function index(a, fn) {
	  var i = undefined,
	      l = undefined;
	  for (i = 0, l = a.length; i < l; i++) {
	    if (fn(a[i])) return i;
	  }
	  return -1;
	}
	
	/**
	 * Efficient slice function used to clone arrays or parts of them.
	 *
	 * @param  {array} array - The array to slice.
	 * @return {array}       - The sliced array.
	 */
	function slice(array) {
	  var newArray = new Array(array.length);
	
	  var i = undefined,
	      l = undefined;
	
	  for (i = 0, l = array.length; i < l; i++) newArray[i] = array[i];
	
	  return newArray;
	}
	
	/**
	 * Archive abstraction
	 *
	 * @constructor
	 * @param {integer} size - Maximum number of records to store.
	 */
	
	var Archive = (function () {
	  function Archive(size) {
	    _classCallCheck(this, Archive);
	
	    this.size = size;
	    this.records = [];
	  }
	
	  /**
	   * Function creating a real array from what should be an array but is not.
	   * I'm looking at you nasty `arguments`...
	   *
	   * @param  {mixed} culprit - The culprit to convert.
	   * @return {array}         - The real array.
	   */
	
	  /**
	   * Method retrieving the records.
	   *
	   * @return {array} - The records.
	   */
	
	  _createClass(Archive, [{
	    key: 'get',
	    value: function get() {
	      return this.records;
	    }
	
	    /**
	     * Method adding a record to the archive
	     *
	     * @param {object}  record - The record to store.
	     * @return {Archive}       - The archive itself for chaining purposes.
	     */
	  }, {
	    key: 'add',
	    value: function add(record) {
	      this.records.unshift(record);
	
	      // If the number of records is exceeded, we truncate the records
	      if (this.records.length > this.size) this.records.length = this.size;
	
	      return this;
	    }
	
	    /**
	     * Method clearing the records.
	     *
	     * @return {Archive} - The archive itself for chaining purposes.
	     */
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.records = [];
	      return this;
	    }
	
	    /**
	     * Method to go back in time.
	     *
	     * @param {integer} steps - Number of steps we should go back by.
	     * @return {number}       - The last record.
	     */
	  }, {
	    key: 'back',
	    value: function back(steps) {
	      var record = this.records[steps - 1];
	
	      if (record) this.records = this.records.slice(steps);
	      return record;
	    }
	  }]);
	
	  return Archive;
	})();
	
	exports.Archive = Archive;
	
	function arrayFrom(culprit) {
	  return slice(culprit);
	}
	
	/**
	 * Function decorating one function with another that will be called before the
	 * decorated one.
	 *
	 * @param  {function} decorator - The decorating function.
	 * @param  {function} fn        - The function to decorate.
	 * @return {function}           - The decorated function.
	 */
	
	function before(decorator, fn) {
	  return function () {
	    decorator.apply(null, arguments);
	    fn.apply(null, arguments);
	  };
	}
	
	/**
	 * Function cloning the given regular expression. Supports `y` and `u` flags
	 * already.
	 *
	 * @param  {RegExp} re - The target regular expression.
	 * @return {RegExp}    - The cloned regular expression.
	 */
	function cloneRegexp(re) {
	  var pattern = re.source;
	
	  var flags = '';
	
	  if (re.global) flags += 'g';
	  if (re.multiline) flags += 'm';
	  if (re.ignoreCase) flags += 'i';
	  if (re.sticky) flags += 'y';
	  if (re.unicode) flags += 'u';
	
	  return new RegExp(pattern, flags);
	}
	
	/**
	 * Function cloning the given variable.
	 *
	 * @todo: implement a faster way to clone an array.
	 *
	 * @param  {boolean} deep - Should we deep clone the variable.
	 * @param  {mixed}   item - The variable to clone
	 * @return {mixed}        - The cloned variable.
	 */
	function cloner(deep, item) {
	  if (!item || typeof item !== 'object' || item instanceof Error || item instanceof _monkey.MonkeyDefinition || 'ArrayBuffer' in global && item instanceof ArrayBuffer) return item;
	
	  // Array
	  if (_type2['default'].array(item)) {
	    if (deep) {
	      var a = [];
	
	      var i = undefined,
	          l = undefined;
	
	      for (i = 0, l = item.length; i < l; i++) a.push(cloner(true, item[i]));
	      return a;
	    }
	
	    return slice(item);
	  }
	
	  // Date
	  if (item instanceof Date) return new Date(item.getTime());
	
	  // RegExp
	  if (item instanceof RegExp) return cloneRegexp(item);
	
	  // Object
	  if (_type2['default'].object(item)) {
	    var o = {};
	
	    var k = undefined;
	
	    // NOTE: could be possible to erase computed properties through `null`.
	    for (k in item) {
	      if (_type2['default'].lazyGetter(item, k)) {
	        Object.defineProperty(o, k, {
	          get: Object.getOwnPropertyDescriptor(item, k).get,
	          enumerable: true,
	          configurable: true
	        });
	      } else if (item.hasOwnProperty(k)) {
	        o[k] = deep ? cloner(true, item[k]) : item[k];
	      }
	    }
	    return o;
	  }
	
	  return item;
	}
	
	/**
	 * Exporting shallow and deep cloning functions.
	 */
	var shallowClone = cloner.bind(null, false),
	    deepClone = cloner.bind(null, true);
	
	exports.shallowClone = shallowClone;
	exports.deepClone = deepClone;
	
	/**
	 * Coerce the given variable into a full-fledged path.
	 *
	 * @param  {mixed} target - The variable to coerce.
	 * @return {array}        - The array path.
	 */
	
	function coercePath(target) {
	  if (target || target === 0 || target === '') return target;
	  return [];
	}
	
	/**
	 * Function comparing an object's properties to a given descriptive
	 * object.
	 *
	 * @param  {object} object      - The object to compare.
	 * @param  {object} description - The description's mapping.
	 * @return {boolean}            - Whether the object matches the description.
	 */
	function compare(object, description) {
	  var ok = true,
	      k = undefined;
	
	  // If we reached here via a recursive call, object may be undefined because
	  // not all items in a collection will have the same deep nesting structure.
	  if (!object) return false;
	
	  for (k in description) {
	    if (_type2['default'].object(description[k])) {
	      ok = ok && compare(object[k], description[k]);
	    } else if (_type2['default'].array(description[k])) {
	      ok = ok && !! ~description[k].indexOf(object[k]);
	    } else {
	      if (object[k] !== description[k]) return false;
	    }
	  }
	
	  return ok;
	}
	
	/**
	 * Function freezing the given variable if possible.
	 *
	 * @param  {boolean} deep - Should we recursively freeze the given objects?
	 * @param  {object}  o    - The variable to freeze.
	 * @return {object}    - The merged object.
	 */
	function freezer(deep, o) {
	  if (typeof o !== 'object' || o === null || o instanceof _monkey.Monkey) return;
	
	  Object.freeze(o);
	
	  if (!deep) return;
	
	  if (Array.isArray(o)) {
	
	    // Iterating through the elements
	    var i = undefined,
	        l = undefined;
	
	    for (i = 0, l = o.length; i < l; i++) freezer(true, o[i]);
	  } else {
	    var p = undefined,
	        k = undefined;
	
	    for (k in o) {
	      if (_type2['default'].lazyGetter(o, k)) continue;
	
	      p = o[k];
	
	      if (!p || !o.hasOwnProperty(k) || typeof p !== 'object' || Object.isFrozen(p)) continue;
	
	      freezer(true, p);
	    }
	  }
	}
	
	/**
	 * Exporting both `freeze` and `deepFreeze` functions.
	 * Note that if the engine does not support `Object.freeze` then this will
	 * export noop functions instead.
	 */
	var isFreezeSupported = typeof Object.freeze === 'function';
	
	var freeze = isFreezeSupported ? freezer.bind(null, false) : noop,
	    deepFreeze = isFreezeSupported ? freezer.bind(null, true) : noop;
	
	exports.freeze = freeze;
	exports.deepFreeze = deepFreeze;
	
	/**
	 * Function retrieving nested data within the given object and according to
	 * the given path.
	 *
	 * @todo: work if dynamic path hit objects also.
	 * @todo: memoized perfgetters.
	 *
	 * @param  {object}  object - The object we need to get data from.
	 * @param  {array}   path   - The path to follow.
	 * @return {object}  result            - The result.
	 * @return {mixed}   result.data       - The data at path, or `undefined`.
	 * @return {array}   result.solvedPath - The solved path or `null`.
	 * @return {boolean} result.exists     - Does the path exists in the tree?
	 */
	var notFoundObject = { data: undefined, solvedPath: null, exists: false };
	
	function getIn(object, path) {
	  if (!path) return notFoundObject;
	
	  var solvedPath = [];
	
	  var exists = true,
	      c = object,
	      idx = undefined,
	      i = undefined,
	      l = undefined;
	
	  for (i = 0, l = path.length; i < l; i++) {
	    if (!c) return { data: undefined, solvedPath: path, exists: false };
	
	    if (typeof path[i] === 'function') {
	      if (!_type2['default'].array(c)) return notFoundObject;
	
	      idx = index(c, path[i]);
	      if (! ~idx) return notFoundObject;
	
	      solvedPath.push(idx);
	      c = c[idx];
	    } else if (typeof path[i] === 'object') {
	      if (!_type2['default'].array(c)) return notFoundObject;
	
	      idx = index(c, function (e) {
	        return compare(e, path[i]);
	      });
	      if (! ~idx) return notFoundObject;
	
	      solvedPath.push(idx);
	      c = c[idx];
	    } else {
	      solvedPath.push(path[i]);
	      exists = typeof c === 'object' && path[i] in c;
	      c = c[path[i]];
	    }
	  }
	
	  return { data: c, solvedPath: solvedPath, exists: exists };
	}
	
	/**
	 * Little helper returning a JavaScript error carrying some data with it.
	 *
	 * @param  {string} message - The error message.
	 * @param  {object} [data]  - Optional data to assign to the error.
	 * @return {Error}          - The created error.
	 */
	
	function makeError(message, data) {
	  var err = new Error(message);
	
	  for (var k in data) {
	    err[k] = data[k];
	  }return err;
	}
	
	/**
	 * Function taking n objects to merge them together.
	 * Note 1): the latter object will take precedence over the first one.
	 * Note 2): the first object will be mutated to allow for perf scenarios.
	 * Note 3): this function will consider monkeys as leaves.
	 *
	 * @param  {boolean}   deep    - Whether the merge should be deep or not.
	 * @param  {...object} objects - Objects to merge.
	 * @return {object}            - The merged object.
	 */
	function merger(deep) {
	  for (var _len = arguments.length, objects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    objects[_key - 1] = arguments[_key];
	  }
	
	  var o = objects[0];
	
	  var t = undefined,
	      i = undefined,
	      l = undefined,
	      k = undefined;
	
	  for (i = 1, l = objects.length; i < l; i++) {
	    t = objects[i];
	
	    for (k in t) {
	      if (deep && _type2['default'].object(t[k]) && !(t[k] instanceof _monkey.Monkey)) {
	        o[k] = merger(true, o[k] || {}, t[k]);
	      } else {
	        o[k] = t[k];
	      }
	    }
	  }
	
	  return o;
	}
	
	/**
	 * Exporting both `shallowMerge` and `deepMerge` functions.
	 */
	var shallowMerge = merger.bind(null, false),
	    deepMerge = merger.bind(null, true);
	
	exports.shallowMerge = shallowMerge;
	exports.deepMerge = deepMerge;
	
	/**
	 * Solving a potentially relative path.
	 *
	 * @param  {array} base - The base path from which to solve the path.
	 * @param  {array} to   - The subpath to reach.
	 * @param  {array}      - The solved absolute path.
	 */
	
	function solveRelativePath(base, to) {
	  var solvedPath = [];
	
	  for (var i = 0, l = to.length; i < l; i++) {
	    var step = to[i];
	
	    if (step === '.') {
	      if (!i) solvedPath = base.slice(0);
	    } else if (step === '..') {
	      solvedPath = (!i ? base : solvedPath).slice(0, -1);
	    } else {
	      solvedPath.push(step);
	    }
	  }
	
	  return solvedPath;
	}
	
	/**
	 * Function determining whether some paths in the tree were affected by some
	 * updates that occurred at the given paths. This helper is mainly used at
	 * cursor level to determine whether the cursor is concerned by the updates
	 * fired at tree level.
	 *
	 * NOTES: 1) If performance become an issue, the following threefold loop
	 *           can be simplified to a complex twofold one.
	 *        2) A regex version could also work but I am not confident it would
	 *           be faster.
	 *        3) Another solution would be to keep a register of cursors like with
	 *           the monkeys and update along this tree.
	 *
	 * @param  {array} affectedPaths - The paths that were updated.
	 * @param  {array} comparedPaths - The paths that we are actually interested in.
	 * @return {boolean}             - Is the update relevant to the compared
	 *                                 paths?
	 */
	
	function solveUpdate(affectedPaths, comparedPaths) {
	  var i = undefined,
	      j = undefined,
	      k = undefined,
	      l = undefined,
	      m = undefined,
	      n = undefined,
	      p = undefined,
	      c = undefined,
	      s = undefined;
	
	  // Looping through possible paths
	  for (i = 0, l = affectedPaths.length; i < l; i++) {
	    p = affectedPaths[i];
	
	    if (!p.length) return true;
	
	    // Looping through logged paths
	    for (j = 0, m = comparedPaths.length; j < m; j++) {
	      c = comparedPaths[j];
	
	      if (!c || !c.length) return true;
	
	      // Looping through steps
	      for (k = 0, n = c.length; k < n; k++) {
	        s = c[k];
	
	        // If path is not relevant, we break
	        // NOTE: the '!=' instead of '!==' is required here!
	        if (s != p[k]) break;
	
	        // If we reached last item and we are relevant
	        if (k + 1 === n || k + 1 === p.length) return true;
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Non-mutative version of the splice array method.
	 *
	 * @param {array}    array        - The array to splice.
	 * @param {integer}  startIndex   - The start index.
	 * @param {integer}  nb           - Number of elements to remove.
	 * @param {...mixed} elements     - Elements to append after splicing.
	 * @return {array}                - The spliced array.
	 */
	
	function splice(array, startIndex, nb) {
	  for (var _len2 = arguments.length, elements = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	    elements[_key2 - 3] = arguments[_key2];
	  }
	
	  return array.slice(0, startIndex).concat(elements).concat(array.slice(startIndex + Math.max(0, nb)));
	}
	
	/**
	 * Function returning a unique incremental id each time it is called.
	 *
	 * @return {integer} - The latest unique id.
	 */
	var uniqid = (function () {
	  var i = 0;
	
	  return function () {
	    return i++;
	  };
	})();
	
	exports.uniqid = uniqid;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/*!**********************************!*\
  !*** ./~/baobab/dist/watcher.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Baobab Watchers
	 * ================
	 *
	 * Abstraction used to listen and retrieve data from multiple parts of a
	 * Baobab tree at once.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(/*! emmett */ 11);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _cursor = __webpack_require__(/*! ./cursor */ 12);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _type = __webpack_require__(/*! ./type */ 14);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 16);
	
	/**
	 * Watcher class.
	 *
	 * @constructor
	 * @param {Baobab} tree     - The watched tree.
	 * @param {object} mapping  - A mapping of the paths to watch in the tree.
	 */
	
	var Watcher = (function (_Emitter) {
	  _inherits(Watcher, _Emitter);
	
	  function Watcher(tree, mapping) {
	    var _this = this;
	
	    _classCallCheck(this, Watcher);
	
	    _get(Object.getPrototypeOf(Watcher.prototype), 'constructor', this).call(this);
	
	    // Properties
	    this.tree = tree;
	    this.mapping = null;
	
	    this.state = {
	      killed: false
	    };
	
	    // Initializing
	    this.refresh(mapping);
	
	    // Listening
	    this.handler = function (e) {
	      if (_this.state.killed) return;
	
	      var watchedPaths = _this.getWatchedPaths();
	
	      if ((0, _helpers.solveUpdate)(e.data.paths, watchedPaths)) return _this.emit('update');
	    };
	
	    this.tree.on('update', this.handler);
	  }
	
	  /**
	   * Method used to get the current watched paths.
	   *
	   * @return {array} - The array of watched paths.
	   */
	
	  _createClass(Watcher, [{
	    key: 'getWatchedPaths',
	    value: function getWatchedPaths() {
	      var _this2 = this;
	
	      var rawPaths = Object.keys(this.mapping).map(function (k) {
	        var v = _this2.mapping[k];
	
	        // Watcher mappings can accept a cursor
	        if (v instanceof _cursor2['default']) return v.solvedPath;
	
	        return _this2.mapping[k];
	      });
	
	      return rawPaths.reduce(function (cp, p) {
	
	        // Handling path polymorphisms
	        p = [].concat(p);
	
	        // Dynamic path?
	        if (_type2['default'].dynamicPath(p)) p = (0, _helpers.getIn)(_this2.tree._data, p).solvedPath;
	
	        if (!p) return cp;
	
	        // Facet path?
	        var monkeyPath = _type2['default'].monkeyPath(_this2.tree._monkeys, p);
	
	        if (monkeyPath) return cp.concat((0, _helpers.getIn)(_this2.tree._monkeys, monkeyPath).data.relatedPaths());
	
	        return cp.concat([p]);
	      }, []);
	    }
	
	    /**
	     * Method used to return a map of the watcher's cursors.
	     *
	     * @return {object} - TMap of relevant cursors.
	     */
	  }, {
	    key: 'getCursors',
	    value: function getCursors() {
	      var _this3 = this;
	
	      var cursors = {};
	
	      Object.keys(this.mapping).forEach(function (k) {
	        var path = _this3.mapping[k];
	
	        if (path instanceof _cursor2['default']) cursors[k] = path;else cursors[k] = _this3.tree.select(path);
	      });
	
	      return cursors;
	    }
	
	    /**
	     * Method used to refresh the watcher's mapping.
	     *
	     * @param  {object}  mapping  - The new mapping to apply.
	     * @return {Watcher}          - Itself for chaining purposes.
	     */
	  }, {
	    key: 'refresh',
	    value: function refresh(mapping) {
	
	      if (!_type2['default'].watcherMapping(mapping)) throw (0, _helpers.makeError)('Baobab.watch: invalid mapping.', { mapping: mapping });
	
	      this.mapping = mapping;
	
	      // Creating the get method
	      var projection = {};
	
	      for (var k in mapping) {
	        projection[k] = mapping[k] instanceof _cursor2['default'] ? mapping[k].path : mapping[k];
	      }this.get = this.tree.project.bind(this.tree, projection);
	    }
	
	    /**
	     * Methods releasing the watcher from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      this.tree.off('update', this.handler);
	      this.state.killed = true;
	      this.kill();
	    }
	  }]);
	
	  return Watcher;
	})(_emmett2['default']);
	
	exports['default'] = Watcher;
	module.exports = exports['default'];

/***/ },
/* 18 */
/*!********************!*\
  !*** ./src/URL.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var history = __webpack_require__(/*! html5-history-api */ 19);
	var url = __webpack_require__(/*! url */ 22);
	
	var URL = (function () {
	  function URL(locationAPI) {
	    _classCallCheck(this, URL);
	
	    this.location = locationAPI;
	  }
	
	  URL.prototype.updateQueryParams = function updateQueryParams(queryObj) {
	    var currentURL = url.parse(window.location.href);
	    currentURL.query = queryObj;
	    currentURL.search = null;
	    history.pushState(null, null, url.format(currentURL));
	  };
	
	  URL.prototype.redirect = function redirect(href) {
	    this.location.href = href;
	  };
	
	  URL.prototype.getQueryParams = function getQueryParams() {
	    return url.parse(this.location.search, true).query;
	  };
	
	  return URL;
	})();
	
	module.exports = URL;

/***/ },
/* 19 */
/*!****************************************!*\
  !*** ./~/html5-history-api/history.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
>>>>>>> JJT-1583
	 * History API JavaScript Library v4.2.5
	 *
	 * Support: IE8+, FF3+, Opera 9+, Safari, Chrome and other
	 *
	 * Copyright 2011-2015, Dmitrii Pakhtinov ( spb.piksel@gmail.com )
	 *
	 * http://spb-piksel.ru/
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *   http://www.gnu.org/licenses/gpl.html
	 *
	 * Update: 2015-12-22 14:26
<<<<<<< HEAD
	 */
!function(a){if(n(80).amd){var s="[history"+(new Date).getTime()+"]",u=requirejs.onError;a.toString=function(){return s},requirejs.onError=function(e){-1===e.message.indexOf(s)&&u.call(requirejs,e)},i=[],r=a,o="function"==typeof r?r.apply(t,i):r,!(void 0!==o&&(e.exports=o))}e.exports=a()}(function(){function e(){}function t(e,n,r){var i=/(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;if(null==e||""===e||n)e=n?e:O.href,(!T||r)&&(e=e.replace(/^[^#]*/,"")||"#",e=O.protocol.replace(/:.*$|$/,":")+"//"+O.host+z.basepath+e.replace(new RegExp("^#[/]?(?:"+z.type+")?"),""));else{var o=t(),a=x.getElementsByTagName("base")[0];!r&&a&&a.getAttribute("href")&&(a.href=a.href,o=t(a.href,null,!0));var s=o._pathname,u=o._protocol;e=""+e,e=/^(?:\w+\:)?\/\//.test(e)?0===e.indexOf("/")?u+e:e:u+"//"+o._host+(0===e.indexOf("/")?e:0===e.indexOf("?")?s+e:0===e.indexOf("#")?s+o._search+e:s.replace(/[^\/]+$/g,"")+e)}V.href=e;var l=i.exec(V.href),c=l[2]+(l[3]?":"+l[3]:""),f=l[4]||"/",p=l[5]||"",h="#"===l[6]?"":l[6]||"",d=f+p+h,g=f.replace(new RegExp("^"+z.basepath,"i"),z.type)+p;return{_href:l[1]+"//"+c+d,_protocol:l[1],_host:c,_hostname:l[2],_port:l[3]||"",_pathname:f,_search:p,_hash:h,_relative:d,_nohash:g,_special:g+h}}function n(){var e=m.navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?!!j:!1}function r(){var e;try{e=m.sessionStorage,e.setItem(X+"t","1"),e.removeItem(X+"t")}catch(t){e={getItem:function(e){var t=x.cookie.split(e+"=");return t.length>1&&t.pop().split(";").shift()||"null"},setItem:function(e,t){var n={};(n[O.href]=P.state)&&(x.cookie=e+"="+k.stringify(n))}}}try{Z=k.parse(e.getItem(X))||{}}catch(t){Z={}}J(N+"unload",function(){e.setItem(X,k.stringify(Z))},!1)}function i(t,n,r,i){var o=0;r||(r={set:e},o=1);var a=!r.set,s=!r.get,u={configurable:!0,set:function(){a=1},get:function(){s=1}};try{L(t,n,u),t[n]=t[n],L(t,n,r)}catch(l){}if(!(a&&s||(t.__defineGetter__&&(t.__defineGetter__(n,u.get),t.__defineSetter__(n,u.set),t[n]=t[n],r.get&&t.__defineGetter__(n,r.get),r.set&&t.__defineSetter__(n,r.set)),a&&s))){if(o)return!1;if(t===m){try{var c=t[n];t[n]=null}catch(l){}if("execScript"in m)m.execScript("Public "+n,"VBScript"),m.execScript("var "+n+";","JavaScript");else try{L(t,n,{value:e})}catch(l){"onpopstate"===n&&(J("popstate",r=function(){D("popstate",r,!1);var e=t.onpopstate;t.onpopstate=null,setTimeout(function(){t.onpopstate=e},1)},!1),K=0)}t[n]=c}else try{try{var f=w.create(t);L(w.getPrototypeOf(f)===t?f:t,n,r);for(var p in t)"function"==typeof t[p]&&(f[p]=t[p].bind(t));try{i.call(f,f,t)}catch(l){}t=f}catch(l){L(t.constructor.prototype,n,r)}}catch(l){return!1}}return t}function o(e,t,n){return n=n||{},e=e===ee?O:e,n.set=n.set||function(n){e[t]=n},n.get=n.get||function(){return e[t]},n}function a(e,t,n){e in Y?Y[e].push(t):arguments.length>3?J(e,t,n,arguments[3]):J(e,t,n)}function s(e,t,n){var r=Y[e];if(r){for(var i=r.length;i--;)if(r[i]===t){r.splice(i,1);break}}else D(e,t,n)}function u(t,n){var r=(""+("string"==typeof t?t:t.type)).replace(/^on/,""),o=Y[r];if(o){if(n="string"==typeof t?n:t,null==n.target)for(var a=["target","currentTarget","srcElement","type"];t=a.pop();)n=i(n,t,{get:"type"===t?function(){return r}:function(){return m}});K&&(("popstate"===r?m.onpopstate:m.onhashchange)||e).call(m,n);for(var s=0,u=o.length;u>s;s++)o[s].call(m,n);return!0}return F(t,n)}function l(){var e=x.createEvent?x.createEvent("Event"):x.createEventObject();e.initEvent?e.initEvent("popstate",!1,!1):e.type="popstate",e.state=P.state,u(e)}function c(){U&&(U=!1,l())}function f(e,n,r,i){if(T)B=O.href;else{0===H&&(H=2);var o=t(n,2===H&&-1!==(""+n).indexOf("#"));o._relative!==t()._relative&&(B=i,r?O.replace("#"+o._special):O.hash=o._special)}!C&&e&&(Z[O.href]=e),U=!1}function p(e){var n=B;if(B=O.href,n){M!==O.href&&l(),e=e||m.event;var r=t(n,!0),i=t();e.oldURL||(e.oldURL=r._href,e.newURL=i._href),r._hash!==i._hash&&u(e)}}function h(e){setTimeout(function(){J("popstate",function(e){M=O.href,C||(e=i(e,"state",{get:function(){return P.state}})),u(e)},!1)},0),!T&&e!==!0&&"location"in P&&(v(I.hash),c())}function d(e){for(;e;){if("A"===e.nodeName)return e;e=e.parentNode}}function g(e){var n=e||m.event,r=d(n.target||n.srcElement),i="defaultPrevented"in n?n.defaultPrevented:n.returnValue===!1;if(r&&"A"===r.nodeName&&!i){var o=t(),a=t(r.getAttribute("href",2)),s=o._href.split("#").shift()===a._href.split("#").shift();s&&a._hash&&(o._hash!==a._hash&&(I.hash=a._hash),v(a._hash),n.preventDefault?n.preventDefault():n.returnValue=!1)}}function v(e){var t=x.getElementById(e=(e||"").replace(/^#/,""));if(t&&t.id===e&&"A"===t.nodeName){var n=t.getBoundingClientRect();m.scrollTo(A.scrollLeft||0,n.top+(A.scrollTop||0)-(A.clientTop||0))}}function y(){var e=x.getElementsByTagName("script"),n=(e[e.length-1]||{}).src||"",a=-1!==n.indexOf("?")?n.split("?").pop():"";a.replace(/(\w+)(?:=([^&]*))?/g,function(e,t,n){z[t]=(n||"").replace(/^(0|false)$/,"")}),J(N+"hashchange",p,!1);var s=[ee,I,G,m,$,P];C&&delete $.state;for(var u=0;u<s.length;u+=2)for(var l in s[u])if(s[u].hasOwnProperty(l))if("object"!=typeof s[u][l])s[u+1][l]=s[u][l];else{var c=o(s[u],l,s[u][l]);if(!i(s[u+1],l,c,function(e,t){t===P&&(m.history=P=s[u+1]=e)}))return D(N+"hashchange",p,!1),!1;s[u+1]===m&&(Y[l]=Y[l.substr(2)]=[])}return P.setup(),z.redirect&&P.redirect(),z.init&&(H=1),!C&&k&&r(),T||x[R](N+"click",g,!1),"complete"===x.readyState?h(!0):(T||t()._relative===z.basepath||(U=!0),J(N+"load",h,!1)),!0}var m=("object"==typeof window?window:this)||{};if(!m.history||"emulate"in m.history)return m.history;var b,x=m.document,A=x.documentElement,w=m.Object,k=m.JSON,O=m.location,E=m.history,P=E,j=E.pushState,S=E.replaceState,T=n(),C="state"in E,L=w.defineProperty,I=i({},"t")?{}:x.createElement("a"),N="",R=m.addEventListener?"addEventListener":(N="on")&&"attachEvent",q=m.removeEventListener?"removeEventListener":"detachEvent",W=m.dispatchEvent?"dispatchEvent":"fireEvent",J=m[R],D=m[q],F=m[W],z={basepath:"/",redirect:0,type:"/",init:0},X="__historyAPI__",V=x.createElement("a"),B=O.href,M="",K=1,U=!1,H=0,Z={},Y={},Q=x.title,G={onhashchange:null,onpopstate:null},_=function(e,t){var n=m.history!==E;n&&(m.history=E),e.apply(E,t),n&&(m.history=P)},$={setup:function(e,t,n){z.basepath=(""+(null==e?z.basepath:e)).replace(/(?:^|\/)[^\/]*$/,"/"),z.type=null==t?z.type:t,z.redirect=null==n?z.redirect:!!n},redirect:function(e,n){if(P.setup(n,e),n=z.basepath,m.top==m.self){var r=t(null,!1,!0)._relative,i=O.pathname+O.search;T?(i=i.replace(/([^\/])$/,"$1/"),r!=n&&new RegExp("^"+n+"$","i").test(i)&&O.replace(r)):i!=n&&(i=i.replace(/([^\/])\?/,"$1/?"),new RegExp("^"+n,"i").test(i)&&O.replace(n+"#"+i.replace(new RegExp("^"+n,"i"),z.type)+O.hash))}},pushState:function(e,t,n){var r=x.title;null!=Q&&(x.title=Q),j&&_(j,arguments),f(e,n),x.title=r,Q=t},replaceState:function(e,t,n){var r=x.title;null!=Q&&(x.title=Q),delete Z[O.href],S&&_(S,arguments),f(e,n,!0),x.title=r,Q=t},location:{set:function(e){0===H&&(H=1),m.location=e},get:function(){return 0===H&&(H=1),I}},state:{get:function(){return"object"==typeof Z[O.href]?k.parse(k.stringify(Z[O.href])):"undefined"!=typeof Z[O.href]?Z[O.href]:null}}},ee={assign:function(e){T||0!==(""+e).indexOf("#")?O.assign(e):f(null,e)},reload:function(e){O.reload(e)},replace:function(e){T||0!==(""+e).indexOf("#")?O.replace(e):f(null,e,!0)},toString:function(){return this.href},origin:{get:function(){return void 0!==b?b:O.origin?O.origin:O.protocol+"//"+O.hostname+(O.port?":"+O.port:"")},set:function(e){b=e}},href:T?null:{get:function(){return t()._href}},protocol:null,host:null,hostname:null,port:null,pathname:T?null:{get:function(){return t()._pathname}},search:T?null:{get:function(){return t()._search}},hash:T?null:{set:function(e){f(null,(""+e).replace(/^(#|)/,"#"),!1,B)},get:function(){return t()._hash}}};return y()?(P.emulate=!T,m[R]=a,m[q]=s,m[W]=u,P):void 0})}).call(t,n(21)(e))},function(e,t,n){var r,r;!function(t){e.exports=t()}(function(){return function e(t,n,i){function o(s,u){if(!n[s]){if(!t[s]){var l="function"==typeof r&&r;if(!u&&l)return r(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,i)}return n[s].exports}for(var a="function"==typeof r&&r,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},p=e("./utils"),h=i(p),d=e("./logger"),g=r(d),v=e("./EventEmitter"),y=r(v),m=function(e){function t(e,n,r){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];o(this,t),f(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.backend=e,this.store=n,this.services=r,this.options=i,this.logger=g["default"].create("backendConnector"),this.state={},this.queue=[],this.backend&&this.backend.init(r,i.backend,i)}return a(t,e),c(t,[{key:"queueLoad",value:function(e,t,n){var r=this,i=[],o=[],a=[],s=[];return e.forEach(function(e){var n=!0;t.forEach(function(t){var a=e+"|"+t;r.store.hasResourceBundle(e,t)?r.state[a]=2:1===r.state[a]?o.indexOf(a)<0&&o.push(a):(r.state[a]=1,n=!1,o.indexOf(a)<0&&o.push(a),i.indexOf(a)<0&&i.push(a),s.indexOf(t)<0&&s.push(t))}),n||a.push(e)}),(i.length||o.length)&&this.queue.push({pending:o,loaded:{},errors:[],callback:n}),{toLoad:i,pending:o,toLoadLanguages:a,toLoadNamespaces:s}}},{key:"loaded",value:function(e,t,n){var r=this,i=e.split("|"),o=u(i,2),a=o[0],l=o[1];n&&this.store.addResourceBundle(a,l,n),this.state[e]=t?-1:2,this.queue.forEach(function(n){h.pushPath(n.loaded,[a],l),s(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(n.errors.length?n.callback(n.errors):n.callback(),r.emit("loaded",n.loaded),n.done=!0)})}},{key:"read",value:function(e,t,n,r,i,o){var a=this;return r||(r=0),i||(i=250),e.length?void this.backend[n](e,t,function(s,u){return s&&u&&5>r?void setTimeout(function(){a.read.call(a,e,t,n,++r,2*i,o)},i):void o(s,u)}):o(null,{})}},{key:"load",value:function(e,t,n){var r=this;if(!this.backend)return n&&n("no backend was defined.");var i=l({},this.backend.options,this.options.backend);"string"==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var o=this.queueLoad(e,t,n);return o.toLoad.length?void(i.allowMultiLoading&&this.backend.readMulti?this.read(o.toLoadLanguages,o.toLoadNamespaces,"readMulti",null,null,function(e,t){e&&r.logger.warn("loading namespaces "+o.toLoadNamespaces.join(", ")+" for languages "+o.toLoadLanguages.join(", ")+" via multiloading failed",e),!e&&t&&r.logger.log("loaded namespaces "+o.toLoadNamespaces.join(", ")+" for languages "+o.toLoadLanguages.join(", ")+" via multiloading",t),o.toLoad.forEach(function(n){var i=n.split("|"),o=u(i,2),a=o[0],s=o[1],l=h.getPath(t,[a,s]);if(l)r.loaded(n,e,l);else{var c="loading namespace "+s+" for language "+a+" via multiloading failed";r.loaded(n,c),r.logger.error(c)}})}):!function(){var e=function(e){var t=this,n=e.split("|"),r=u(n,2),i=r[0],o=r[1];this.read(i,o,"read",null,null,function(n,r){n&&t.logger.warn("loading namespace "+o+" for language "+i+" failed",n),!n&&r&&t.logger.log("loaded namespace "+o+" for language "+i,r),t.loaded(e,n,r)})};o.toLoad.forEach(function(t){e.call(r,t)})}()):void(o.pending.length||n())}},{key:"saveMissing",value:function(e,t,n,r){this.backend&&this.backend.create&&this.backend.create(e,t,n,r),this.store.addResource(e[0],t,n,r)}}]),t}(y["default"]);n["default"]=m,t.exports=n["default"]},{"./EventEmitter":3,"./logger":12,"./utils":14}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},c=e("./utils"),f=(i(c),e("./logger")),p=r(f),h=e("./EventEmitter"),d=r(h),g=function(e){function t(e,n,r){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.cache=e,this.store=n,this.services=r,this.options=i,this.logger=p["default"].create("cacheConnector"),this.cache&&this.cache.init(r,i.cache,i)}return a(t,e),u(t,[{key:"load",value:function(e,t,n){var r=this;if(!this.cache)return n&&n();var i=s({},this.cache.options,this.options.cache);"string"==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]),i.enabled?this.cache.load(e,function(t,i){if(t&&r.logger.error("loading languages "+e.join(", ")+" from cache failed",t),i)for(var o in i)for(var a in i[o])if("i18nStamp"!==a){var s=i[o][a];s&&r.store.addResourceBundle(o,a,s)}n&&n()}):n&&n()}},{key:"save",value:function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)}}]),t}(d["default"]);n["default"]=g,t.exports=n["default"]},{"./EventEmitter":3,"./logger":12,"./utils":14}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.observers={}}return i(e,[{key:"on",value:function(e,t){var n=this;e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})}},{key:"off",value:function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach(function(){if(t){var r=n.observers[e].indexOf(t);r>-1&&n.observers[e].splice(r,1)}else delete n.observers[e]})}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];this.observers[e]&&this.observers[e].forEach(function(e){e.apply(void 0,n)}),this.observers["*"]&&this.observers["*"].forEach(function(t){var r;t.apply(t,(r=[e]).concat.apply(r,n))})}}]),e}();t.exports=o},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./utils"),u=i(s),l=e("./logger"),c=r(l),f=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),this.logger=c["default"].create("interpolator"),this.init(t,!0)}return a(e,[{key:"init",value:function(e,t){void 0===e&&(e={}),t&&(this.options=e),e.interpolation||(e.interpolation={escapeValue:!0});var n=e.interpolation;this.escapeValue=n.escapeValue,this.prefix=n.prefix?u.regexEscape(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?u.regexEscape(n.suffix):n.suffixEscaped||"}}",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?u.regexEscape(n.nestingPrefix):n.nestingPrefixEscaped||u.regexEscape("$t("),this.nestingSuffix=n.nestingSuffix?u.regexEscape(n.nestingSuffix):n.nestingSuffixEscaped||u.regexEscape(")");var r=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(r,"g");var i=this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(i,"g");var o=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(o,"g")}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"interpolate",value:function(e,t){function n(e){return e.replace(/\$/g,"$$$$")}for(var r=void 0,i=void 0;r=this.regexpUnescape.exec(e);){var o=u.getPath(t,r[1].trim());e=e.replace(r[0],o)}for(;r=this.regexp.exec(e);)i=u.getPath(t,r[1].trim()),"string"!=typeof i&&(i=u.makeString(i)),i||(this.logger.warn("missed to pass in variable "+r[1]+" for interpolating "+e),i=""),i=n(this.escapeValue?u.escape(i):i),e=e.replace(r[0],i),this.regexp.lastIndex=0;return e}},{key:"nest",value:function(e,t){function n(e){return e.replace(/\$/g,"$$$$")}function r(e){if(e.indexOf(",")<0)return e;var t=e.split(",");e=t.shift();var n=t.join(",");n=this.interpolate(n,s);try{s=JSON.parse(n)}catch(r){this.logger.error("failed parsing options string in nesting for key "+e,r)}return e}var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=void 0,a=void 0,s=JSON.parse(JSON.stringify(i));for(s.applyPostProcessor=!1;o=this.nestingRegexp.exec(e);)a=t(r.call(this,o[1].trim()),s),"string"!=typeof a&&(a=u.makeString(a)),a||(this.logger.warn("missed to pass in variable "+o[1]+" for interpolating "+e),a=""),a=n(this.escapeValue?u.escape(a):a),e=e.replace(o[0],a),this.regexp.lastIndex=0;return e}}]),e}();n["default"]=f,t.exports=n["default"]},{"./logger":12,"./utils":14}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./logger"),u=r(s),l=function(){function e(t){i(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=u["default"].create("languageUtils")}return a(e,[{key:"getLanguagePartFromCode",value:function(e){if(e.indexOf("-")<0)return e;var t=["nb-NO","nn-NO","nb-no","nn-no"],n=e.split("-");return this.formatLanguageCode(t.indexOf(e)>-1?n[1].toLowerCase():n[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=e.split("-"),n=o(t,2),r=n[0],i=n[1];return this.options.lowerCaseLng?r.toLowerCase()+"-"+i.toLowerCase():r.toLowerCase()+"-"+i.toUpperCase()}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return"languageOnly"===this.options.load&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1?!0:!1}},{key:"toResolveHierarchy",value:function(e,t){var n=this;t=t||this.options.fallbackLng||[],"string"==typeof t&&(t=[t]);var r=[],i=function(e){n.isWhitelisted(e)?r.push(e):n.logger.warn("rejecting non-whitelisted language code: "+e)};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(e)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(e))):"string"==typeof e&&i(this.formatLanguageCode(e)),t.forEach(function(e){r.indexOf(e)<0&&i(n.formatLanguageCode(e))}),r}}]),e}();n["default"]=l,t.exports=n["default"]},{"./logger":12}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./logger"),s=r(a),u=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","es_ar","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt","pt_br","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],l={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&4>=e?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:7>e?2:11>e?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&20>e?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(10>e%100||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&11>e%100?1:e%100>10&&20>e%100?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&20>e%100?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},c=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i(this,e),this.rules=function(){var e={};return u.forEach(function(t){t.lngs.forEach(function(n){return e[n]={numbers:t.nr,plurals:l[t.fc]}})}),e}(),this.languageUtils=t,this.options=n,this.logger=s["default"].create("pluralResolver")}return o(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length<=1?!1:!0}},{key:"getSuffix",value:function(e,t){var n=this.getRule(e);if(n){if(1===n.numbers.length)return"";var r=n.noAbs?n.plurals(t):n.plurals(Math.abs(t)),i=n.numbers[r];if(2===n.numbers.length&&1===n.numbers[0]&&(2===i?i="plural":1===i&&(i="")),"v1"===this.options.compatibilityJSON){if(1===i)return"";if("number"==typeof i)return"_plural_"+i.toString()}return this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}return this.logger.warn("no plural rule found for: "+e),""}}]),e}();n["default"]=c,t.exports=n["default"]},{"./logger":12}],7:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},c=e("./EventEmitter"),f=i(c),p=e("./utils"),h=r(p),d=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments.length<=1||void 0===arguments[1]?{ns:["translation"],defaultNS:"translation"}:arguments[1];o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.data=e,this.options=n}return a(t,e),u(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],i=r.keySeparator||this.options.keySeparator||".",o=[e,t];return n&&"string"!=typeof n&&(o=o.concat(n)),n&&"string"==typeof n&&(o=o.concat(n.split(i))),e.indexOf(".")>-1&&(o=e.split(".")),h.getPath(this.data,o)}},{key:"addResource",value:function(e,t,n,r){var i=arguments.length<=4||void 0===arguments[4]?{silent:!1}:arguments[4],o=[e,t];n&&(o=o.concat(n.split(this.options.keySeparator||"."))),e.indexOf(".")>-1&&(o=e.split("."),r=t,t=o[1]),this.addNamespaces(t),h.setPath(this.data,o,r),i.silent||this.emit("added",e,t)}},{key:"addResources",value:function(e,t,n){for(var r in n)"string"==typeof n[r]&&this.addResource(e,t,r,n[r],{silent:!0});this.emit("added",e,t)}},{key:"addResourceBundle",value:function(e,t,n,r,i){var o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),r=n,n=t,t=o[1]),this.addNamespaces(t);var a=h.getPath(this.data,o)||{};r?h.deepExtend(a,n,i):a=s({},a,n),h.setPath(this.data,o,a),this.emit("added",e,t)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?s({},this.getResource(e,t)):this.getResource(e,t)}},{key:"toJSON",value:function(){return this.data}}]),t}(f["default"]);n["default"]=d,t.exports=n["default"]},{"./EventEmitter":3,"./utils":14}],8:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},c=e("./logger"),f=i(c),p=e("./EventEmitter"),h=i(p),d=e("./postProcessor"),g=i(d),v=e("./compatibility/v1"),y=r(v),m=e("./utils"),b=r(m),x=function(e){function t(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),b.copy(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],e,this),this.options=n,this.logger=f["default"].create("translator")}return a(t,e),u(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{interpolation:{}}:arguments[1];return"v1"===this.options.compatibilityAPI&&(t=y.convertTOptions(t)),void 0!==this.resolve(e,t)}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator||":",r=t.ns||this.options.defaultNS;if(e.indexOf(n)>-1){var i=e.split(n);r=i[0],e=i[1]}return"string"==typeof r&&(r=[r]),{key:e,namespaces:r}}},{key:"translate",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if("object"!=typeof t?t=this.options.overloadTranslationOptionHandler(arguments):"v1"===this.options.compatibilityAPI&&(t=y.convertTOptions(t)),void 0===e||null===e||""===e)return"";"number"==typeof e&&(e=String(e)),"string"==typeof e&&(e=[e]);var n=t.lng||this.language;if(n&&"cimode"===n.toLowerCase())return e[e.length-1];var r=t.keySeparator||this.options.keySeparator||".",i=this.extractFromKey(e[e.length-1],t),o=i.key,a=i.namespaces,u=a[a.length-1],l=this.resolve(e,t),c=Object.prototype.toString.apply(l),f=["[object Number]","[object Function]","[object RegExp]"],p=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays;if(l&&"string"!=typeof l&&f.indexOf(c)<0&&(!p||"[object Array]"!==c)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(o,l,t):"key '"+o+" ("+this.language+")' returned an object instead of string.";var h="[object Array]"===c?[]:{};for(var d in l)h[d]=this.translate(""+o+r+d,s({joinArrays:!1},t));l=h}else if(p&&"[object Array]"===c)l=l.join(p),l&&(l=this.extendTranslation(l,o,t));else{var g=!1,v=!1;if(!this.isValidLookup(l)&&t.defaultValue&&(g=!0,l=t.defaultValue),this.isValidLookup(l)||(v=!0,l=o),(v||g)&&(this.logger.log("missingKey",n,u,o,l),this.options.saveMissing)){var m=[];if("fallback"===this.options.saveMissingTo&&this.options.fallbackLng[0])for(var b=0;b<this.options.fallbackLng.length;b++)m.push(this.options.fallbackLng[b]);else"all"===this.options.saveMissingTo?m=this.languageUtils.toResolveHierarchy(t.lng||this.language):m.push(t.lng||this.language);this.options.missingKeyHandler?this.options.missingKeyHandler(m,u,o,l):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(m,u,o,l),this.emit("missingKey",m,u,o,l)}l=this.extendTranslation(l,o,t),v&&l===o&&this.options.appendNamespaceToMissingKey&&(l=u+":"+o),v&&this.options.parseMissingKeyHandler&&(l=this.options.parseMissingKeyHandler(l))}return l}},{key:"extendTranslation",value:function(e,t,n){var r=this;n.interpolation&&this.interpolator.init(n);var i=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(i=s({},this.options.interpolation.defaultVariables,i)),e=this.interpolator.interpolate(e,i),e=this.interpolator.nest(e,function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return r.translate.apply(r,t)},n),n.interpolation&&this.interpolator.reset();var o=n.postProcess||this.options.postProcess,a="string"==typeof o?[o]:o;return void 0!==e&&a&&a.length&&n.applyPostProcessor!==!1&&(e=g["default"].handle(a,e,t,n,this)),e}},{key:"resolve",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=void 0;return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!t.isValidLookup(r)){var i=t.extractFromKey(e,n),o=i.key,a=i.namespaces;t.options.fallbackNS&&(a=a.concat(t.options.fallbackNS));var s=void 0!==n.count&&"string"!=typeof n.count,u=void 0!==n.context&&"string"==typeof n.context&&""!==n.context,l=n.lngs?n.lngs:t.languageUtils.toResolveHierarchy(n.lng||t.language);a.forEach(function(e){t.isValidLookup(r)||l.forEach(function(i){if(!t.isValidLookup(r)){var a=o,l=[a];u&&l.push(a+="_"+n.context),s&&l.push(a+=t.pluralResolver.getSuffix(i,n.count));for(var c=void 0;c=l.pop();)t.isValidLookup(r)||(r=t.getResource(i,e,c,n))}})})}}),r}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];return this.resourceStore.getResource(e,t,n,r)}}]),t}(h["default"]);n["default"]=x,t.exports=n["default"]},{"./EventEmitter":3,"./compatibility/v1":9,"./logger":12,"./postProcessor":13,"./utils":14}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return e.interpolation={unescapeSuffix:"HTML"},e.interpolation.prefix=e.interpolationPrefix||"__",e.interpolation.suffix=e.interpolationSuffix||"__",e.interpolation.escapeValue=e.escapeInterpolation||!1,e.interpolation.nestingPrefix=e.reusePrefix||"$t(",e.interpolation.nestingSuffix=e.reuseSuffix||")",e}function o(e){return e.resStore&&(e.resources=e.resStore),e.ns&&e.ns.defaultNs?(e.defaultNS=e.ns.defaultNs,e.ns=e.ns.namespaces):e.defaultNS=e.ns||"translation",e.fallbackToDefaultNS&&e.defaultNS&&(e.fallbackNS=e.defaultNS),e.saveMissing=e.sendMissing,e.saveMissingTo=e.sendMissingTo||"current",e.returnNull=e.fallbackOnNull?!1:!0,e.returnEmptyString=e.fallbackOnEmpty?!1:!0,e.returnObjects=e.returnObjectTrees,e.joinArrays="\n",e.returnedObjectHandler=e.objectTreeKeyHandler,e.parseMissingKeyHandler=e.parseMissingKey,e.appendNamespaceToMissingKey=!0,e.nsSeparator=e.nsseparator,e.keySeparator=e.keyseparator,"sprintf"===e.shortcutFunction&&(e.overloadTranslationOptionHandler=function(e){for(var t=[],n=1;n<e.length;n++)t.push(e[n]);return{postProcess:"sprintf",sprintf:t}}),e.whitelist=e.lngWhitelist,e.preload=e.preload,"current"===e.load&&(e.load="currentOnly"),"unspecific"===e.load&&(e.load="languageOnly"),e.backend=e.backend||{},e.backend.loadPath=e.resGetPath||"locales/__lng__/__ns__.json",e.backend.addPath=e.resPostPath||"locales/add/__lng__/__ns__",e.backend.allowMultiLoading=e.dynamicLoad,e.cache=e.cache||{},e.cache.prefix="res_",e.cache.expirationTime=6048e5,e.cache.enabled=e.useLocalStorage?!0:!1,e=i(e),e.defaultVariables&&(e.interpolation.defaultVariables=e.defaultVariables),e}function a(e){return e=i(e),e.joinArrays="\n",e}function s(e){return(e.interpolationPrefix||e.interpolationSuffix||e.escapeInterpolation)&&(e=i(e)),e.nsSeparator=e.nsseparator,e.keySeparator=e.keyseparator,e.returnObjects=e.returnObjectTrees,e}function u(e){e.lng=function(){return c["default"].deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."),e.services.languageUtils.toResolveHierarchy(e.language)[0]},e.preload=function(t,n){c["default"].deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"),e.loadLanguages(t,n)},e.setLng=function(t,n,r){return c["default"].deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."),"function"==typeof n&&(r=n,n={}),n||(n={}),n.fixLng===!0&&r?r(null,e.getFixedT(t)):void e.changeLanguage(t,r)},e.addPostProcessor=function(t,n){c["default"].deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"),e.use({type:"postProcessor",name:t,process:n})}}Object.defineProperty(n,"__esModule",{value:!0}),n.convertAPIOptions=o,n.convertJSONOptions=a,n.convertTOptions=s,n.appendBackwardsAPI=u;var l=e("../logger"),c=r(l)},{"../logger":12}],10:[function(e,t,n){"use strict";function r(){return{debug:!1,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",saveMissing:!1,saveMissingTo:"fallback",missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,overloadTranslationOptionHandler:function(e){return{defaultValue:e[1]}},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",defaultVariables:void 0}}}function i(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e}Object.defineProperty(n,"__esModule",{value:!0}),n.get=r,n.transformOptions=i},{}],11:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=o,n=a,r=!0,s=l=void 0}},c=e("./logger"),f=i(c),p=e("./EventEmitter"),h=i(p),d=e("./ResourceStore"),g=i(d),v=e("./Translator"),y=i(v),m=e("./LanguageUtils"),b=i(m),x=e("./PluralResolver"),A=i(x),w=e("./Interpolator"),k=i(w),O=e("./BackendConnector"),E=i(O),P=e("./CacheConnector"),j=i(P),S=e("./defaults"),T=e("./postProcessor"),C=i(T),L=e("./compatibility/v1"),I=r(L),N=function(e){function t(e,n){void 0===e&&(e={}),o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.options=e,this.services={},this.logger=f["default"],this.modules={},n&&!this.isInitialized&&this.init(e,n)}return a(t,e),u(t,[{key:"init",value:function(e,t){function n(e){return e?"function"==typeof e?new e:e:void 0}var r=this;if("function"==typeof e&&(t=e,e={}),"v1"===e.compatibilityAPI?this.options=s({},(0,S.get)(),(0,S.transformOptions)(I.convertAPIOptions(e)),{}):"v1"===e.compatibilityJSON?this.options=s({},(0,S.get)(),(0,S.transformOptions)(I.convertJSONOptions(e)),{}):this.options=s({},(0,S.get)(),this.options,(0,S.transformOptions)(e)),t||(t=function(){}),!this.options.isClone){this.modules.logger?f["default"].init(n(this.modules.logger),this.options):f["default"].init(null,this.options);var i=new b["default"](this.options);this.store=new g["default"](this.options.resources,this.options);var o=this.services;o.logger=f["default"],o.resourceStore=this.store,o.resourceStore.on("added removed",function(e,t){o.cacheConnector.save()}),o.languageUtils=i,o.pluralResolver=new A["default"](i,{prepend:"_",compatibilityJSON:this.options.compatibilityJSON}),o.interpolator=new k["default"](this.options),o.backendConnector=new E["default"](n(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;t>i;i++)n[i-1]=arguments[i];r.emit.apply(r,[e].concat(n))}),o.backendConnector.on("loaded",function(e){o.cacheConnector.save()}),o.cacheConnector=new j["default"](n(this.modules.cache),o.resourceStore,o,this.options),o.cacheConnector.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;t>i;i++)n[i-1]=arguments[i];r.emit.apply(r,[e].concat(n))}),this.modules.languageDetector&&(o.languageDetector=n(this.modules.languageDetector),o.languageDetector.init(o,this.options.detection,this.options)),this.translator=new y["default"](this.services,this.options),this.translator.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;t>i;i++)n[i-1]=arguments[i];r.emit.apply(r,[e].concat(n))})}var a=["addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"];a.forEach(function(e){r[e]=function(){return this.store[e].apply(this.store,arguments)}}),"v1"===this.options.compatibilityAPI&&I.appendBackwardsAPI(this),this.changeLanguage(this.options.lng,function(e,n){r.emit("initialized",r.options),r.logger.log("initialized",r.options),t(e,n)})}},{key:"loadResources",value:function(e){var t=this;e||(e=function(){}),this.options.resources?e(null):!function(){var n=[],r=function(e){var r=t.services.languageUtils.toResolveHierarchy(e);r.forEach(function(e){n.indexOf(e)<0&&n.push(e)})};r(t.language),t.options.preload&&t.options.preload.forEach(function(e){r(e)}),t.services.cacheConnector.load(n,t.options.ns,function(){t.services.backendConnector.load(n,t.options.ns,e)})}()}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),"cache"===e.type&&(this.modules.cache=e),("logger"===e.type||e.log&&e.warn&&e.warn)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"postProcessor"===e.type&&C["default"].addPostProcessor(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,r=function(r){e&&(n.emit("languageChanged",e),n.logger.log("languageChanged",e)),t&&t(r,function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return n.t.apply(n,t)})};!e&&this.services.languageDetector&&(e=this.services.languageDetector.detect()),e&&(this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.translator.changeLanguage(e),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage(e)),this.loadResources(function(e){r(e)})}},{key:"getFixedT",value:function(e,t){var n=this,r=function i(e,t){return t=t||{},t.lng=t.lng||i.lng,t.ns=t.ns||i.ns,n.t(e,t)};return r.lng=e,r.ns=t,r}},{key:"t",value:function(){return this.translator&&this.translator.translate.apply(this.translator,arguments)}},{key:"exists",value:function(){return this.translator&&this.translator.exists.apply(this.translator,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"loadNamespaces",value:function(e,t){var n=this;return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),void this.loadResources(t)):t&&t()}},{key:"loadLanguages",value:function(e,t){"string"==typeof e&&(e=[e]),this.options.preload=this.options.preload?this.options.preload.concat(e):e,this.loadResources(t)}},{key:"dir",value:function(e){e||(e=this.language);var t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"];return t.indexOf(this.services.languageUtils.getLanguagePartFromCode(e))?"ltr":"rtl"}},{key:"createInstance",value:function(e,n){return void 0===e&&(e={}),new t(e,n)}},{key:"cloneInstance",value:function(e,n){var r=this;void 0===e&&(e={});var i=new t(s({},e,this.options,{isClone:!0}),n),o=["store","translator","services","language"];return o.forEach(function(e){i[e]=r[e]}),i}}]),t}(h["default"]);n["default"]=new N,t.exports=n["default"]},{"./BackendConnector":1,"./CacheConnector":2,"./EventEmitter":3,"./Interpolator":4,"./LanguageUtils":5,"./PluralResolver":6,"./ResourceStore":7,"./Translator":8,"./compatibility/v1":9,"./defaults":10,"./logger":12,"./postProcessor":13}],12:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a={type:"logger",log:function(e){this._output("log",e)},warn:function(e){this._output("warn",e)},error:function(e){this._output("error",e)},_output:function(e,t){console&&console[e]&&console[e].apply(console,Array.prototype.slice.call(t))}},s=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,e),this.subs=[],this.init(t,n)}return o(e,[{key:"init",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];this.prefix=t.prefix||"i18next:",this.logger=e||a,this.options=t,this.debug=t.debug===!1?!1:!0}},{key:"setDebug",value:function(e){this.debug=e,this.subs.forEach(function(t){t.setDebug(e)})}},{key:"log",value:function(){this.forward(arguments,"log","",!0)}},{key:"warn",value:function(){this.forward(arguments,"warn","",!0)}},{key:"error",value:function(){this.forward(arguments,"error","")}},{key:"deprecate",value:function(){this.forward(arguments,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){(!r||this.debug)&&("string"==typeof e[0]&&(e[0]=n+this.prefix+" "+e[0]),this.logger[t](e))}},{key:"create",value:function(t){var n=new e(this.logger,i({prefix:this.prefix+":"+t+":"},this.options));return this.subs.push(n),n}}]),e}();n["default"]=new s,t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,i){var o=this;return e.forEach(function(e){o.processors[e]&&(t=o.processors[e].process(t,n,r,i))}),t}},t.exports=n["default"]},{}],14:[function(e,t,n){"use strict";function r(e){return null==e?"":""+e}function i(e,t,n){e.forEach(function(e){t[e]&&(n[e]=t[e])})}function o(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}for(var i="string"!=typeof t?[].concat(t):t.split(".");i.length>1;){if(!e)return{};var o=r(i.shift());!e[o]&&n&&(e[o]=new n),e=e[o]}return e?{obj:e,k:r(i.shift())}:{}}function a(e,t,n){var r=o(e,t,Object),i=r.obj,a=r.k;i[a]=n}function s(e,t,n,r){var i=o(e,t,Object),a=i.obj,s=i.k;a[s]=a[s]||[],r&&(a[s]=a[s].concat(n)),r||a[s].push(n)}function u(e,t){var n=o(e,t),r=n.obj,i=n.k;return r?r[i]:void 0}function l(e,t,n){for(var r in t)r in e?"string"==typeof e[r]||e[r]instanceof String||"string"==typeof t[r]||t[r]instanceof String?n&&(e[r]=t[r]):l(e[r],t[r],n):e[r]=t[r];return e}function c(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function f(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return p[e]}):e}Object.defineProperty(n,"__esModule",{value:!0}),n.makeString=r,n.copy=i,n.setPath=a,n.pushPath=s,n.getPath=u,n.deepExtend=l,n.regexEscape=c,n.escape=f;var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}},{}]},{},[11])(11)})},function(e,t,n){var r=n(1);!function(e){var t={init:function(n){var r=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",ellipsePageSet:!0,cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:!0,nextAtFront:!1,invertPageOrder:!1,useStartEdge:!0,useEndEdge:!0,onPageClick:function(e,t){},onInit:function(){}},n||{}),i=this;return r.pages=r.pages?r.pages:Math.ceil(r.items/r.itemsOnPage)?Math.ceil(r.items/r.itemsOnPage):1,r.currentPage?r.currentPage=r.currentPage-1:r.currentPage=r.invertPageOrder?r.pages-1:0,r.halfDisplayed=r.displayedPages/2,this.each(function(){i.addClass(r.cssStyle+" simple-pagination").data("pagination",r),t._draw.call(i)}),r.onInit(),this},selectPage:function(e){return t._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage<e.pages-1&&t._selectPage.call(this,e.currentPage+1):e.currentPage>0&&t._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage>0&&t._selectPage.call(this,e.currentPage-1):e.currentPage<e.pages-1&&t._selectPage.call(this,e.currentPage+1),this},getPagesCount:function(){return this.data("pagination").pages},setPagesCount:function(e){this.data("pagination").pages=e},getCurrentPage:function(){return this.data("pagination").currentPage+1},destroy:function(){return this.empty(),this},drawPage:function(e){var n=this.data("pagination");return n.currentPage=e-1,this.data("pagination",n),t._draw.call(this),this},redraw:function(){return t._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),t._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),t._draw.call(this),this},updateItems:function(e){var n=this.data("pagination");n.items=e,n.pages=t._getPages(n),this.data("pagination",n),t._draw.call(this)},updateItemsOnPage:function(e){var n=this.data("pagination");return n.itemsOnPage=e,n.pages=t._getPages(n),this.data("pagination",n),t._selectPage.call(this,0),this},getItemsOnPage:function(){return this.data("pagination").itemsOnPage},_draw:function(){var n,r,i=this.data("pagination"),o=t._getInterval(i);t.destroy.call(this),r="function"==typeof this.prop?this.prop("tagName"):this.attr("tagName");var a="UL"===r?this:e("<ul"+(i.listStyle?' class="'+i.listStyle+'"':"")+"></ul>").appendTo(this);if(i.prevText&&t._appendItem.call(this,i.invertPageOrder?i.currentPage+1:i.currentPage-1,{text:i.prevText,classes:"prev"}),i.nextText&&i.nextAtFront&&t._appendItem.call(this,i.invertPageOrder?i.currentPage-1:i.currentPage+1,{text:i.nextText,classes:"next"}),i.invertPageOrder){if(o.end<i.pages&&i.edges>0){if(i.useStartEdge){var s=Math.max(i.pages-i.edges,o.end);for(n=i.pages-1;n>=s;n--)t._appendItem.call(this,n)}i.pages-i.edges>o.end&&i.pages-i.edges-o.end!=1?a.append('<li class="disabled"><span class="ellipse">'+i.ellipseText+"</span></li>"):i.pages-i.edges-o.end==1&&t._appendItem.call(this,o.end)}}else if(o.start>0&&i.edges>0){if(i.useStartEdge){var u=Math.min(i.edges,o.start);for(n=0;u>n;n++)t._appendItem.call(this,n)}i.edges<o.start&&o.start-i.edges!=1?a.append('<li class="disabled"><span class="ellipse">'+i.ellipseText+"</span></li>"):o.start-i.edges==1&&t._appendItem.call(this,i.edges)}if(i.invertPageOrder)for(n=o.end-1;n>=o.start;n--)t._appendItem.call(this,n);else for(n=o.start;n<o.end;n++)t._appendItem.call(this,n);if(i.invertPageOrder){if(o.start>0&&i.edges>0&&(i.edges<o.start&&o.start-i.edges!=1?a.append('<li class="disabled"><span class="ellipse">'+i.ellipseText+"</span></li>"):o.start-i.edges==1&&t._appendItem.call(this,i.edges),i.useEndEdge)){var u=Math.min(i.edges,o.start);for(n=u-1;n>=0;n--)t._appendItem.call(this,n)}}else if(o.end<i.pages&&i.edges>0&&(i.pages-i.edges>o.end&&i.pages-i.edges-o.end!=1?a.append('<li class="disabled"><span class="ellipse">'+i.ellipseText+"</span></li>"):i.pages-i.edges-o.end==1&&t._appendItem.call(this,o.end),i.useEndEdge)){var s=Math.max(i.pages-i.edges,o.end);for(n=s;n<i.pages;n++)t._appendItem.call(this,n)}i.nextText&&!i.nextAtFront&&t._appendItem.call(this,i.invertPageOrder?i.currentPage-1:i.currentPage+1,{text:i.nextText,classes:"next"}),i.ellipsePageSet&&!i.disabled&&t._ellipseClick.call(this,a)},_getPages:function(e){var t=Math.ceil(e.items/e.itemsOnPage);return t||1},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(n,r){var i,o,a=this,s=a.data("pagination"),u=e("<li></li>"),l=a.find("ul");n=0>n?0:n<s.pages?n:s.pages-1,i={text:n+1,classes:""},s.labelMap.length&&s.labelMap[n]&&(i.text=s.labelMap[n]),i=e.extend(i,r||{}),n==s.currentPage||s.disabled?(s.disabled||"prev"===i.classes||"next"===i.classes?u.addClass("disabled"):u.addClass("active"),o=e('<span class="current">'+i.text+"</span>")):(o=e('<a href="'+s.hrefTextPrefix+(n+1)+s.hrefTextSuffix+'" class="page-link">'+i.text+"</a>"),o.click(function(e){return t._selectPage.call(a,n,e)})),i.classes&&o.addClass(i.classes),u.append(o),l.length?l.append(u):a.append(u)},_selectPage:function(e,n){var r=this.data("pagination");return r.currentPage=e,r.selectOnClick&&t._draw.call(this),r.onPageClick(e+1,n)},_ellipseClick:function(n){var r=this,i=this.data("pagination"),o=n.find(".ellipse");o.addClass("clickable").parent().removeClass("disabled"),o.click(function(n){if(!i.disable){var a=e(this),s=(parseInt(a.parent().prev().text(),10)||0)+1;a.html('<input type="number" min="1" max="'+i.pages+'" step="1" value="'+s+'">').find("input").focus().click(function(e){e.stopPropagation()}).keyup(function(n){var a=e(this).val();13===n.which&&""!==a?a>0&&a<=i.pages&&t._selectPage.call(r,a-1):27===n.which&&o.empty().html(i.ellipseText)}).bind("blur",function(n){var a=e(this).val();return""!==a&&t._selectPage.call(r,a-1),o.empty().html(i.ellipseText),!1})}return!1})}};e.fn.pagination=function(n){return t[n]&&"_"!=n.charAt(0)?t[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.pagination"):t.init.apply(this,arguments)}}(r)},function(e,t,n){var r=n(44);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(45);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(46);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(47);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(48);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(49);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(50);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(51);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(52);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(53);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports="data:image/png;base64,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";
},function(e,t){(function(t){var n;if(t.crypto&&crypto.getRandomValues){var r=new Uint8Array(16);n=function(){return crypto.getRandomValues(r),r}}if(!n){var i=new Array(16);n=function(){for(var e,t=0;16>t;t++)0===(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}e.exports=n}).call(t,function(){return this}())},function(e,t,n){function r(e,t,n){var r=t&&n||0,i=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){16>i&&(t[r+i++]=l[e])});16>i;)t[r+i++]=0;return t}function i(e,t){var n=t||0,r=u;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function o(e,t,n){var r=t&&n||0,o=t||[];e=e||{};var a=void 0!==e.clockseq?e.clockseq:h,s=void 0!==e.msecs?e.msecs:(new Date).getTime(),u=void 0!==e.nsecs?e.nsecs:g+1,l=s-d+(u-g)/1e4;if(0>l&&void 0===e.clockseq&&(a=a+1&16383),(0>l||s>d)&&void 0===e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=s,g=u,h=a,s+=122192928e5;var c=(1e4*(268435455&s)+u)%4294967296;o[r++]=c>>>24&255,o[r++]=c>>>16&255,o[r++]=c>>>8&255,o[r++]=255&c;var f=s/4294967296*1e4&268435455;o[r++]=f>>>8&255,o[r++]=255&f,o[r++]=f>>>24&15|16,o[r++]=f>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var v=e.node||p,y=0;6>y;y++)o[r+y]=v[y];return t?t:i(o)}function a(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;16>a;a++)t[r+a]=o[a];return t||i(o)}for(var s=n(78),u=[],l={},c=0;256>c;c++)u[c]=(c+256).toString(16).substr(1),l[u[c]]=c;var f=s(),p=[1|f[0],f[1],f[2],f[3],f[4],f[5]],h=16383&(f[6]<<8|f[7]),d=0,g=0,v=a;v.v1=o,v.v4=a,v.parse=r,v.unparse=i,e.exports=v},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t,n){var r;(function(e,i){!function(o){function a(e){throw RangeError(I[e])}function s(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function u(e,t){var n=e.split("@"),r="";n.length>1&&(r=n[0]+"@",e=n[1]),e=e.replace(L,".");var i=e.split("."),o=s(i,t).join(".");return r+o}function l(e){for(var t,n,r=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(n=e.charCodeAt(i++),56320==(64512&n)?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--)):r.push(t);return r}function c(e){return s(e,function(e){var t="";return e>65535&&(e-=65536,t+=q(e>>>10&1023|55296),e=56320|1023&e),t+=q(e)}).join("")}function f(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:A}function p(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function h(e,t,n){var r=0;for(e=n?R(e/E):e>>1,e+=R(e/t);e>N*k>>1;r+=A)e=R(e/N);return R(r+(N+1)*e/(e+O))}function d(e){var t,n,r,i,o,s,u,l,p,d,g=[],v=e.length,y=0,m=j,b=P;for(n=e.lastIndexOf(S),0>n&&(n=0),r=0;n>r;++r)e.charCodeAt(r)>=128&&a("not-basic"),g.push(e.charCodeAt(r));for(i=n>0?n+1:0;v>i;){for(o=y,s=1,u=A;i>=v&&a("invalid-input"),l=f(e.charCodeAt(i++)),(l>=A||l>R((x-y)/s))&&a("overflow"),y+=l*s,p=b>=u?w:u>=b+k?k:u-b,!(p>l);u+=A)d=A-p,s>R(x/d)&&a("overflow"),s*=d;t=g.length+1,b=h(y-o,t,0==o),R(y/t)>x-m&&a("overflow"),m+=R(y/t),y%=t,g.splice(y++,0,m)}return c(g)}function g(e){var t,n,r,i,o,s,u,c,f,d,g,v,y,m,b,O=[];for(e=l(e),v=e.length,t=j,n=0,o=P,s=0;v>s;++s)g=e[s],128>g&&O.push(q(g));for(r=i=O.length,i&&O.push(S);v>r;){for(u=x,s=0;v>s;++s)g=e[s],g>=t&&u>g&&(u=g);for(y=r+1,u-t>R((x-n)/y)&&a("overflow"),n+=(u-t)*y,t=u,s=0;v>s;++s)if(g=e[s],t>g&&++n>x&&a("overflow"),g==t){for(c=n,f=A;d=o>=f?w:f>=o+k?k:f-o,!(d>c);f+=A)b=c-d,m=A-d,O.push(q(p(d+b%m,0))),c=R(b/m);O.push(q(p(c,0))),o=h(n,y,r==i),n=0,++r}++n,++t}return O.join("")}function v(e){return u(e,function(e){return T.test(e)?d(e.slice(4).toLowerCase()):e})}function y(e){return u(e,function(e){return C.test(e)?"xn--"+g(e):e})}var m=("object"==typeof t&&t&&!t.nodeType&&t,"object"==typeof e&&e&&!e.nodeType&&e,"object"==typeof i&&i);(m.global===m||m.window===m||m.self===m)&&(o=m);var b,x=2147483647,A=36,w=1,k=26,O=38,E=700,P=72,j=128,S="-",T=/^xn--/,C=/[^\x20-\x7E]/,L=/[\x2E\u3002\uFF0E\uFF61]/g,I={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},N=A-w,R=Math.floor,q=String.fromCharCode;b={version:"1.3.2",ucs2:{decode:l,encode:c},decode:d,encode:g,toASCII:y,toUnicode:v},r=function(){return b}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}(this)}).call(t,n(21)(e),function(){return this}())},function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var o={};if("string"!=typeof e||0===e.length)return o;var a=/\+/g;e=e.split(t);var s=1e3;i&&"number"==typeof i.maxKeys&&(s=i.maxKeys);var u=e.length;s>0&&u>s&&(u=s);for(var l=0;u>l;++l){var c,f,p,h,d=e[l].replace(a,"%20"),g=d.indexOf(r);g>=0?(c=d.substr(0,g),f=d.substr(g+1)):(c=d,f=""),p=decodeURIComponent(c),h=decodeURIComponent(f),n(o,p)?Array.isArray(o[p])?o[p].push(h):o[p]=[o[p],h]:o[p]=h}return o}},function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,i){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(i){var o=encodeURIComponent(n(i))+r;return Array.isArray(e[i])?e[i].map(function(e){return o+encodeURIComponent(n(e))}).join(t):o+encodeURIComponent(n(e[i]))}).join(t):i?encodeURIComponent(n(i))+r+encodeURIComponent(n(e)):""}},function(e,t,n){"use strict";t.decode=t.parse=n(82),t.encode=t.stringify=n(83)},function(e,t,n){function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(e,t,n){if(e&&l(e)&&e instanceof r)return e;var i=new r;return i.parse(e,t,n),i}function o(e){return u(e)&&(e=i(e)),e instanceof r?e.format():r.prototype.format.call(e)}function a(e,t){return i(e,!1,!0).resolve(t)}function s(e,t){return e?i(e,!1,!0).resolveObject(t):t}function u(e){return"string"==typeof e}function l(e){return"object"==typeof e&&null!==e}function c(e){return null===e}function f(e){return null==e}var p=n(81);t.parse=i,t.resolve=a,t.resolveObject=s,t.format=o,t.Url=r;var h=/^([a-z0-9.+-]+:)/i,d=/:[0-9]*$/,g=["<",">",'"',"`"," ","\r","\n","	"],v=["{","}","|","\\","^","`"].concat(g),y=["'"].concat(v),m=["%","/","?",";","#"].concat(y),b=["/","?","#"],x=255,A=/^[a-z0-9A-Z_-]{0,63}$/,w=/^([a-z0-9A-Z_-]{0,63})(.*)$/,k={javascript:!0,"javascript:":!0},O={javascript:!0,"javascript:":!0},E={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},P=n(84);r.prototype.parse=function(e,t,n){if(!u(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var r=e;r=r.trim();var i=h.exec(r);if(i){i=i[0];var o=i.toLowerCase();this.protocol=o,r=r.substr(i.length)}if(n||i||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===r.substr(0,2);!a||i&&O[i]||(r=r.substr(2),this.slashes=!0)}if(!O[i]&&(a||i&&!E[i])){for(var s=-1,l=0;l<b.length;l++){var c=r.indexOf(b[l]);-1!==c&&(-1===s||s>c)&&(s=c)}var f,d;d=-1===s?r.lastIndexOf("@"):r.lastIndexOf("@",s),-1!==d&&(f=r.slice(0,d),r=r.slice(d+1),this.auth=decodeURIComponent(f)),s=-1;for(var l=0;l<m.length;l++){var c=r.indexOf(m[l]);-1!==c&&(-1===s||s>c)&&(s=c)}-1===s&&(s=r.length),this.host=r.slice(0,s),r=r.slice(s),this.parseHost(),this.hostname=this.hostname||"";var g="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!g)for(var v=this.hostname.split(/\./),l=0,j=v.length;j>l;l++){var S=v[l];if(S&&!S.match(A)){for(var T="",C=0,L=S.length;L>C;C++)T+=S.charCodeAt(C)>127?"x":S[C];if(!T.match(A)){var I=v.slice(0,l),N=v.slice(l+1),R=S.match(w);R&&(I.push(R[1]),N.unshift(R[2])),N.length&&(r="/"+N.join(".")+r),this.hostname=I.join(".");break}}}if(this.hostname.length>x?this.hostname="":this.hostname=this.hostname.toLowerCase(),!g){for(var q=this.hostname.split("."),W=[],l=0;l<q.length;++l){var J=q[l];W.push(J.match(/[^A-Za-z0-9_-]/)?"xn--"+p.encode(J):J)}this.hostname=W.join(".")}var D=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+D,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==r[0]&&(r="/"+r))}if(!k[o])for(var l=0,j=y.length;j>l;l++){var z=y[l],X=encodeURIComponent(z);X===z&&(X=escape(z)),r=r.split(z).join(X)}var V=r.indexOf("#");-1!==V&&(this.hash=r.substr(V),r=r.slice(0,V));var B=r.indexOf("?");if(-1!==B?(this.search=r.substr(B),this.query=r.substr(B+1),t&&(this.query=P.parse(this.query)),r=r.slice(0,B)):t&&(this.search="",this.query={}),r&&(this.pathname=r),E[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var D=this.pathname||"",J=this.search||"";this.path=D+J}return this.href=this.format(),this},r.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&l(this.query)&&Object.keys(this.query).length&&(o=P.stringify(this.query));var a=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||E[t])&&i!==!1?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),a=a.replace("#","%23"),t+i+n+a+r},r.prototype.resolve=function(e){return this.resolveObject(i(e,!1,!0)).format()},r.prototype.resolveObject=function(e){if(u(e)){var t=new r;t.parse(e,!1,!0),e=t}var n=new r;if(Object.keys(this).forEach(function(e){n[e]=this[e]},this),n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol)return Object.keys(e).forEach(function(t){"protocol"!==t&&(n[t]=e[t])}),E[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n;if(e.protocol&&e.protocol!==n.protocol){if(!E[e.protocol])return Object.keys(e).forEach(function(t){n[t]=e[t]}),n.href=n.format(),n;if(n.protocol=e.protocol,e.host||O[e.protocol])n.pathname=e.pathname;else{for(var i=(e.pathname||"").split("/");i.length&&!(e.host=i.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),n.pathname=i.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var o=n.pathname||"",a=n.search||"";n.path=o+a}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var s=n.pathname&&"/"===n.pathname.charAt(0),l=e.host||e.pathname&&"/"===e.pathname.charAt(0),p=l||s||n.host&&e.pathname,h=p,d=n.pathname&&n.pathname.split("/")||[],i=e.pathname&&e.pathname.split("/")||[],g=n.protocol&&!E[n.protocol];if(g&&(n.hostname="",n.port=null,n.host&&(""===d[0]?d[0]=n.host:d.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===i[0]?i[0]=e.host:i.unshift(e.host)),e.host=null),p=p&&(""===i[0]||""===d[0])),l)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,d=i;else if(i.length)d||(d=[]),d.pop(),d=d.concat(i),n.search=e.search,n.query=e.query;else if(!f(e.search)){if(g){n.hostname=n.host=d.shift();var v=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1;v&&(n.auth=v.shift(),n.host=n.hostname=v.shift())}return n.search=e.search,n.query=e.query,c(n.pathname)&&c(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!d.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var y=d.slice(-1)[0],m=(n.host||e.host)&&("."===y||".."===y)||""===y,b=0,x=d.length;x>=0;x--)y=d[x],"."==y?d.splice(x,1):".."===y?(d.splice(x,1),b++):b&&(d.splice(x,1),b--);if(!p&&!h)for(;b--;b)d.unshift("..");!p||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),m&&"/"!==d.join("/").substr(-1)&&d.push("");var A=""===d[0]||d[0]&&"/"===d[0].charAt(0);if(g){n.hostname=n.host=A?"":d.length?d.shift():"";var v=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1;v&&(n.auth=v.shift(),n.host=n.hostname=v.shift())}return p=p||n.host&&d.length,p&&!A&&d.unshift(""),d.length?n.pathname=d.join("/"):(n.pathname=null,n.path=null),c(n.pathname)&&c(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var e=this.host,t=d.exec(e);t&&(t=t[0],":"!==t&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}}]);
=======
	 */
	(function(factory) {
	  if ("function" === 'function' && __webpack_require__(/*! !webpack amd define */ 21)['amd']) {
	    // https://github.com/devote/HTML5-History-API/issues/73
	    var rndKey = '[history' + (new Date()).getTime() + ']';
	    var onError = requirejs['onError'];
	    factory.toString = function() {
	      return rndKey;
	    };
	    requirejs['onError'] = function(err) {
	      if (err.message.indexOf(rndKey) === -1) {
	        onError.call(requirejs, err);
	      }
	    };
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // commonJS support
	  if (true) {
	    module['exports'] = factory();
	  } else {
	    // execute anyway
	    return factory();
	  }
	})(function() {
	  // Define global variable
	  var global = (typeof window === 'object' ? window : this) || {};
	  // Prevent the code from running if there is no window.history object or library already loaded
	  if (!global.history || "emulate" in global.history) return global.history;
	  // symlink to document
	  var document = global.document;
	  // HTML element
	  var documentElement = document.documentElement;
	  // symlink to constructor of Object
	  var Object = global['Object'];
	  // symlink to JSON Object
	  var JSON = global['JSON'];
	  // symlink to instance object of 'Location'
	  var windowLocation = global.location;
	  // symlink to instance object of 'History'
	  var windowHistory = global.history;
	  // new instance of 'History'. The default is a reference to the original object instance
	  var historyObject = windowHistory;
	  // symlink to method 'history.pushState'
	  var historyPushState = windowHistory.pushState;
	  // symlink to method 'history.replaceState'
	  var historyReplaceState = windowHistory.replaceState;
	  // if the browser supports HTML5-History-API
	  var isSupportHistoryAPI = isSupportHistoryAPIDetect();
	  // verifies the presence of an object 'state' in interface 'History'
	  var isSupportStateObjectInHistory = 'state' in windowHistory;
	  // symlink to method 'Object.defineProperty'
	  var defineProperty = Object.defineProperty;
	  // new instance of 'Location', for IE8 will use the element HTMLAnchorElement, instead of pure object
	  var locationObject = redefineProperty({}, 't') ? {} : document.createElement('a');
	  // prefix for the names of events
	  var eventNamePrefix = '';
	  // String that will contain the name of the method
	  var addEventListenerName = global.addEventListener ? 'addEventListener' : (eventNamePrefix = 'on') && 'attachEvent';
	  // String that will contain the name of the method
	  var removeEventListenerName = global.removeEventListener ? 'removeEventListener' : 'detachEvent';
	  // String that will contain the name of the method
	  var dispatchEventName = global.dispatchEvent ? 'dispatchEvent' : 'fireEvent';
	  // reference native methods for the events
	  var addEvent = global[addEventListenerName];
	  var removeEvent = global[removeEventListenerName];
	  var dispatch = global[dispatchEventName];
	  // default settings
	  var settings = {"basepath": '/', "redirect": 0, "type": '/', "init": 0};
	  // key for the sessionStorage
	  var sessionStorageKey = '__historyAPI__';
	  // Anchor Element for parseURL function
	  var anchorElement = document.createElement('a');
	  // last URL before change to new URL
	  var lastURL = windowLocation.href;
	  // Control URL, need to fix the bug in Opera
	  var checkUrlForPopState = '';
	  // for fix on Safari 8
	  var triggerEventsInWindowAttributes = 1;
	  // trigger event 'onpopstate' on page load
	  var isFireInitialState = false;
	  // if used history.location of other code
	  var isUsedHistoryLocationFlag = 0;
	  // store a list of 'state' objects in the current session
	  var stateStorage = {};
	  // in this object will be stored custom handlers
	  var eventsList = {};
	  // stored last title
	  var lastTitle = document.title;
	  // store a custom origin
	  var customOrigin;
	
	  /**
	   * Properties that will be replaced in the global
	   * object 'window', to prevent conflicts
	   *
	   * @type {Object}
	   */
	  var eventsDescriptors = {
	    "onhashchange": null,
	    "onpopstate": null
	  };
	
	  /**
	   * Fix for Chrome in iOS
	   * See https://github.com/devote/HTML5-History-API/issues/29
	   */
	  var fastFixChrome = function(method, args) {
	    var isNeedFix = global.history !== windowHistory;
	    if (isNeedFix) {
	      global.history = windowHistory;
	    }
	    method.apply(windowHistory, args);
	    if (isNeedFix) {
	      global.history = historyObject;
	    }
	  };
	
	  /**
	   * Properties that will be replaced/added to object
	   * 'window.history', includes the object 'history.location',
	   * for a complete the work with the URL address
	   *
	   * @type {Object}
	   */
	  var historyDescriptors = {
	    /**
	     * Setting library initialization
	     *
	     * @param {null|String} [basepath] The base path to the site; defaults to the root "/".
	     * @param {null|String} [type] Substitute the string after the anchor; by default "/".
	     * @param {null|Boolean} [redirect] Enable link translation.
	     */
	    "setup": function(basepath, type, redirect) {
	      settings["basepath"] = ('' + (basepath == null ? settings["basepath"] : basepath))
	        .replace(/(?:^|\/)[^\/]*$/, '/');
	      settings["type"] = type == null ? settings["type"] : type;
	      settings["redirect"] = redirect == null ? settings["redirect"] : !!redirect;
	    },
	    /**
	     * @namespace history
	     * @param {String} [type]
	     * @param {String} [basepath]
	     */
	    "redirect": function(type, basepath) {
	      historyObject['setup'](basepath, type);
	      basepath = settings["basepath"];
	      if (global.top == global.self) {
	        var relative = parseURL(null, false, true)._relative;
	        var path = windowLocation.pathname + windowLocation.search;
	        if (isSupportHistoryAPI) {
	          path = path.replace(/([^\/])$/, '$1/');
	          if (relative != basepath && (new RegExp("^" + basepath + "$", "i")).test(path)) {
	            windowLocation.replace(relative);
	          }
	        } else if (path != basepath) {
	          path = path.replace(/([^\/])\?/, '$1/?');
	          if ((new RegExp("^" + basepath, "i")).test(path)) {
	            windowLocation.replace(basepath + '#' + path.
	              replace(new RegExp("^" + basepath, "i"), settings["type"]) + windowLocation.hash);
	          }
	        }
	      }
	    },
	    /**
	     * The method adds a state object entry
	     * to the history.
	     *
	     * @namespace history
	     * @param {Object} state
	     * @param {string} title
	     * @param {string} [url]
	     */
	    pushState: function(state, title, url) {
	      var t = document.title;
	      if (lastTitle != null) {
	        document.title = lastTitle;
	      }
	      historyPushState && fastFixChrome(historyPushState, arguments);
	      changeState(state, url);
	      document.title = t;
	      lastTitle = title;
	    },
	    /**
	     * The method updates the state object,
	     * title, and optionally the URL of the
	     * current entry in the history.
	     *
	     * @namespace history
	     * @param {Object} state
	     * @param {string} title
	     * @param {string} [url]
	     */
	    replaceState: function(state, title, url) {
	      var t = document.title;
	      if (lastTitle != null) {
	        document.title = lastTitle;
	      }
	      delete stateStorage[windowLocation.href];
	      historyReplaceState && fastFixChrome(historyReplaceState, arguments);
	      changeState(state, url, true);
	      document.title = t;
	      lastTitle = title;
	    },
	    /**
	     * Object 'history.location' is similar to the
	     * object 'window.location', except that in
	     * HTML4 browsers it will behave a bit differently
	     *
	     * @namespace history
	     */
	    "location": {
	      set: function(value) {
	        if (isUsedHistoryLocationFlag === 0) isUsedHistoryLocationFlag = 1;
	        global.location = value;
	      },
	      get: function() {
	        if (isUsedHistoryLocationFlag === 0) isUsedHistoryLocationFlag = 1;
	        return locationObject;
	      }
	    },
	    /**
	     * A state object is an object representing
	     * a user interface state.
	     *
	     * @namespace history
	     */
	    "state": {
	      get: function() {
	        if (typeof stateStorage[windowLocation.href] === 'object') {
	          return JSON.parse(JSON.stringify(stateStorage[windowLocation.href]));
	        } else if(typeof stateStorage[windowLocation.href] !== 'undefined') {
	          return stateStorage[windowLocation.href];
	        } else {
	          return null;
	        }
	      }
	    }
	  };
	
	  /**
	   * Properties for object 'history.location'.
	   * Object 'history.location' is similar to the
	   * object 'window.location', except that in
	   * HTML4 browsers it will behave a bit differently
	   *
	   * @type {Object}
	   */
	  var locationDescriptors = {
	    /**
	     * Navigates to the given page.
	     *
	     * @namespace history.location
	     */
	    assign: function(url) {
	      if (!isSupportHistoryAPI && ('' + url).indexOf('#') === 0) {
	        changeState(null, url);
	      } else {
	        windowLocation.assign(url);
	      }
	    },
	    /**
	     * Reloads the current page.
	     *
	     * @namespace history.location
	     */
	    reload: function(flag) {
	      windowLocation.reload(flag);
	    },
	    /**
	     * Removes the current page from
	     * the session history and navigates
	     * to the given page.
	     *
	     * @namespace history.location
	     */
	    replace: function(url) {
	      if (!isSupportHistoryAPI && ('' + url).indexOf('#') === 0) {
	        changeState(null, url, true);
	      } else {
	        windowLocation.replace(url);
	      }
	    },
	    /**
	     * Returns the current page's location.
	     *
	     * @namespace history.location
	     */
	    toString: function() {
	      return this.href;
	    },
	    /**
	     * Returns the current origin.
	     *
	     * @namespace history.location
	     */
	    "origin": {
	      get: function() {
	        if (customOrigin !== void 0) {
	          return customOrigin;
	        }
	        if (!windowLocation.origin) {
	          return windowLocation.protocol + "//" + windowLocation.hostname + (windowLocation.port ? ':' + windowLocation.port: '');
	        }
	        return windowLocation.origin;
	      },
	      set: function(value) {
	        customOrigin = value;
	      }
	    },
	    /**
	     * Returns the current page's location.
	     * Can be set, to navigate to another page.
	     *
	     * @namespace history.location
	     */
	    "href": isSupportHistoryAPI ? null : {
	      get: function() {
	        return parseURL()._href;
	      }
	    },
	    /**
	     * Returns the current page's protocol.
	     *
	     * @namespace history.location
	     */
	    "protocol": null,
	    /**
	     * Returns the current page's host and port number.
	     *
	     * @namespace history.location
	     */
	    "host": null,
	    /**
	     * Returns the current page's host.
	     *
	     * @namespace history.location
	     */
	    "hostname": null,
	    /**
	     * Returns the current page's port number.
	     *
	     * @namespace history.location
	     */
	    "port": null,
	    /**
	     * Returns the current page's path only.
	     *
	     * @namespace history.location
	     */
	    "pathname": isSupportHistoryAPI ? null : {
	      get: function() {
	        return parseURL()._pathname;
	      }
	    },
	    /**
	     * Returns the current page's search
	     * string, beginning with the character
	     * '?' and to the symbol '#'
	     *
	     * @namespace history.location
	     */
	    "search": isSupportHistoryAPI ? null : {
	      get: function() {
	        return parseURL()._search;
	      }
	    },
	    /**
	     * Returns the current page's hash
	     * string, beginning with the character
	     * '#' and to the end line
	     *
	     * @namespace history.location
	     */
	    "hash": isSupportHistoryAPI ? null : {
	      set: function(value) {
	        changeState(null, ('' + value).replace(/^(#|)/, '#'), false, lastURL);
	      },
	      get: function() {
	        return parseURL()._hash;
	      }
	    }
	  };
	
	  /**
	   * Just empty function
	   *
	   * @return void
	   */
	  function emptyFunction() {
	    // dummy
	  }
	
	  /**
	   * Prepares a parts of the current or specified reference for later use in the library
	   *
	   * @param {string} [href]
	   * @param {boolean} [isWindowLocation]
	   * @param {boolean} [isNotAPI]
	   * @return {Object}
	   */
	  function parseURL(href, isWindowLocation, isNotAPI) {
	    var re = /(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;
	    if (href != null && href !== '' && !isWindowLocation) {
	      var current = parseURL(),
	          base = document.getElementsByTagName('base')[0];
	      if (!isNotAPI && base && base.getAttribute('href')) {
	        // Fix for IE ignoring relative base tags.
	        // See http://stackoverflow.com/questions/3926197/html-base-tag-and-local-folder-path-with-internet-explorer
	        base.href = base.href;
	        current = parseURL(base.href, null, true);
	      }
	      var _pathname = current._pathname, _protocol = current._protocol;
	      // convert to type of string
	      href = '' + href;
	      // convert relative link to the absolute
	      href = /^(?:\w+\:)?\/\//.test(href) ? href.indexOf("/") === 0
	        ? _protocol + href : href : _protocol + "//" + current._host + (
	        href.indexOf("/") === 0 ? href : href.indexOf("?") === 0
	          ? _pathname + href : href.indexOf("#") === 0
	          ? _pathname + current._search + href : _pathname.replace(/[^\/]+$/g, '') + href
	        );
	    } else {
	      href = isWindowLocation ? href : windowLocation.href;
	      // if current browser not support History-API
	      if (!isSupportHistoryAPI || isNotAPI) {
	        // get hash fragment
	        href = href.replace(/^[^#]*/, '') || "#";
	        // form the absolute link from the hash
	        // https://github.com/devote/HTML5-History-API/issues/50
	        href = windowLocation.protocol.replace(/:.*$|$/, ':') + '//' + windowLocation.host + settings['basepath']
	          + href.replace(new RegExp("^#[\/]?(?:" + settings["type"] + ")?"), "");
	      }
	    }
	    // that would get rid of the links of the form: /../../
	    anchorElement.href = href;
	    // decompose the link in parts
	    var result = re.exec(anchorElement.href);
	    // host name with the port number
	    var host = result[2] + (result[3] ? ':' + result[3] : '');
	    // folder
	    var pathname = result[4] || '/';
	    // the query string
	    var search = result[5] || '';
	    // hash
	    var hash = result[6] === '#' ? '' : (result[6] || '');
	    // relative link, no protocol, no host
	    var relative = pathname + search + hash;
	    // special links for set to hash-link, if browser not support History API
	    var nohash = pathname.replace(new RegExp("^" + settings["basepath"], "i"), settings["type"]) + search;
	    // result
	    return {
	      _href: result[1] + '//' + host + relative,
	      _protocol: result[1],
	      _host: host,
	      _hostname: result[2],
	      _port: result[3] || '',
	      _pathname: pathname,
	      _search: search,
	      _hash: hash,
	      _relative: relative,
	      _nohash: nohash,
	      _special: nohash + hash
	    }
	  }
	
	  /**
	   * Detect HistoryAPI support while taking into account false positives.
	   * Based on https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	   */
	  function isSupportHistoryAPIDetect(){
	    var ua = global.navigator.userAgent;
	    // We only want Android 2 and 4.0, stock browser, and not Chrome which identifies
	    // itself as 'Mobile Safari' as well, nor Windows Phone (issue #1471).
	    if ((ua.indexOf('Android 2.') !== -1 ||
	      (ua.indexOf('Android 4.0') !== -1)) &&
	      ua.indexOf('Mobile Safari') !== -1 &&
	      ua.indexOf('Chrome') === -1 &&
	      ua.indexOf('Windows Phone') === -1)
	    {
	      return false;
	    }
	    // Return the regular check
	    return !!historyPushState;
	  }
	
	  /**
	   * Initializing storage for the custom state's object
	   */
	  function storageInitialize() {
	    var sessionStorage;
	    /**
	     * sessionStorage throws error when cookies are disabled
	     * Chrome content settings when running the site in a Facebook IFrame.
	     * see: https://github.com/devote/HTML5-History-API/issues/34
	     * and: http://stackoverflow.com/a/12976988/669360
	     */
	    try {
	      sessionStorage = global['sessionStorage'];
	      sessionStorage.setItem(sessionStorageKey + 't', '1');
	      sessionStorage.removeItem(sessionStorageKey + 't');
	    } catch(_e_) {
	      sessionStorage = {
	        getItem: function(key) {
	          var cookie = document.cookie.split(key + "=");
	          return cookie.length > 1 && cookie.pop().split(";").shift() || 'null';
	        },
	        setItem: function(key, value) {
	          var state = {};
	          // insert one current element to cookie
	          if (state[windowLocation.href] = historyObject.state) {
	            document.cookie = key + '=' + JSON.stringify(state);
	          }
	        }
	      }
	    }
	
	    try {
	      // get cache from the storage in browser
	      stateStorage = JSON.parse(sessionStorage.getItem(sessionStorageKey)) || {};
	    } catch(_e_) {
	      stateStorage = {};
	    }
	
	    // hang up the event handler to event unload page
	    addEvent(eventNamePrefix + 'unload', function() {
	      // save current state's object
	      sessionStorage.setItem(sessionStorageKey, JSON.stringify(stateStorage));
	    }, false);
	  }
	
	  /**
	   * This method is implemented to override the built-in(native)
	   * properties in the browser, unfortunately some browsers are
	   * not allowed to override all the properties and even add.
	   * For this reason, this was written by a method that tries to
	   * do everything necessary to get the desired result.
	   *
	   * @param {Object} object The object in which will be overridden/added property
	   * @param {String} prop The property name to be overridden/added
	   * @param {Object} [descriptor] An object containing properties set/get
	   * @param {Function} [onWrapped] The function to be called when the wrapper is created
	   * @return {Object|Boolean} Returns an object on success, otherwise returns false
	   */
	  function redefineProperty(object, prop, descriptor, onWrapped) {
	    var testOnly = 0;
	    // test only if descriptor is undefined
	    if (!descriptor) {
	      descriptor = {set: emptyFunction};
	      testOnly = 1;
	    }
	    // variable will have a value of true the success of attempts to set descriptors
	    var isDefinedSetter = !descriptor.set;
	    var isDefinedGetter = !descriptor.get;
	    // for tests of attempts to set descriptors
	    var test = {configurable: true, set: function() {
	      isDefinedSetter = 1;
	    }, get: function() {
	      isDefinedGetter = 1;
	    }};
	
	    try {
	      // testing for the possibility of overriding/adding properties
	      defineProperty(object, prop, test);
	      // running the test
	      object[prop] = object[prop];
	      // attempt to override property using the standard method
	      defineProperty(object, prop, descriptor);
	    } catch(_e_) {
	    }
	
	    // If the variable 'isDefined' has a false value, it means that need to try other methods
	    if (!isDefinedSetter || !isDefinedGetter) {
	      // try to override/add the property, using deprecated functions
	      if (object.__defineGetter__) {
	        // testing for the possibility of overriding/adding properties
	        object.__defineGetter__(prop, test.get);
	        object.__defineSetter__(prop, test.set);
	        // running the test
	        object[prop] = object[prop];
	        // attempt to override property using the deprecated functions
	        descriptor.get && object.__defineGetter__(prop, descriptor.get);
	        descriptor.set && object.__defineSetter__(prop, descriptor.set);
	      }
	
	      // Browser refused to override the property, using the standard and deprecated methods
	      if (!isDefinedSetter || !isDefinedGetter) {
	        if (testOnly) {
	          return false;
	        } else if (object === global) {
	          // try override global properties
	          try {
	            // save original value from this property
	            var originalValue = object[prop];
	            // set null to built-in(native) property
	            object[prop] = null;
	          } catch(_e_) {
	          }
	          // This rule for Internet Explorer 8
	          if ('execScript' in global) {
	            /**
	             * to IE8 override the global properties using
	             * VBScript, declaring it in global scope with
	             * the same names.
	             */
	            global['execScript']('Public ' + prop, 'VBScript');
	            global['execScript']('var ' + prop + ';', 'JavaScript');
	          } else {
	            try {
	              /**
	               * This hack allows to override a property
	               * with the set 'configurable: false', working
	               * in the hack 'Safari' to 'Mac'
	               */
	              defineProperty(object, prop, {value: emptyFunction});
	            } catch(_e_) {
	              if (prop === 'onpopstate') {
	                /**
	                 * window.onpopstate fires twice in Safari 8.0.
	                 * Block initial event on window.onpopstate
	                 * See: https://github.com/devote/HTML5-History-API/issues/69
	                 */
	                addEvent('popstate', descriptor = function() {
	                  removeEvent('popstate', descriptor, false);
	                  var onpopstate = object.onpopstate;
	                  // cancel initial event on attribute handler
	                  object.onpopstate = null;
	                  setTimeout(function() {
	                    // restore attribute value after short time
	                    object.onpopstate = onpopstate;
	                  }, 1);
	                }, false);
	                // cancel trigger events on attributes in object the window
	                triggerEventsInWindowAttributes = 0;
	              }
	            }
	          }
	          // set old value to new variable
	          object[prop] = originalValue;
	
	        } else {
	          // the last stage of trying to override the property
	          try {
	            try {
	              // wrap the object in a new empty object
	              var temp = Object.create(object);
	              defineProperty(Object.getPrototypeOf(temp) === object ? temp : object, prop, descriptor);
	              for(var key in object) {
	                // need to bind a function to the original object
	                if (typeof object[key] === 'function') {
	                  temp[key] = object[key].bind(object);
	                }
	              }
	              try {
	                // to run a function that will inform about what the object was to wrapped
	                onWrapped.call(temp, temp, object);
	              } catch(_e_) {
	              }
	              object = temp;
	            } catch(_e_) {
	              // sometimes works override simply by assigning the prototype property of the constructor
	              defineProperty(object.constructor.prototype, prop, descriptor);
	            }
	          } catch(_e_) {
	            // all methods have failed
	            return false;
	          }
	        }
	      }
	    }
	
	    return object;
	  }
	
	  /**
	   * Adds the missing property in descriptor
	   *
	   * @param {Object} object An object that stores values
	   * @param {String} prop Name of the property in the object
	   * @param {Object|null} descriptor Descriptor
	   * @return {Object} Returns the generated descriptor
	   */
	  function prepareDescriptorsForObject(object, prop, descriptor) {
	    descriptor = descriptor || {};
	    // the default for the object 'location' is the standard object 'window.location'
	    object = object === locationDescriptors ? windowLocation : object;
	    // setter for object properties
	    descriptor.set = (descriptor.set || function(value) {
	      object[prop] = value;
	    });
	    // getter for object properties
	    descriptor.get = (descriptor.get || function() {
	      return object[prop];
	    });
	    return descriptor;
	  }
	
	  /**
	   * Wrapper for the methods 'addEventListener/attachEvent' in the context of the 'window'
	   *
	   * @param {String} event The event type for which the user is registering
	   * @param {Function} listener The method to be called when the event occurs.
	   * @param {Boolean} capture If true, capture indicates that the user wishes to initiate capture.
	   * @return void
	   */
	  function addEventListener(event, listener, capture) {
	    if (event in eventsList) {
	      // here stored the event listeners 'popstate/hashchange'
	      eventsList[event].push(listener);
	    } else {
	      // FireFox support non-standart four argument aWantsUntrusted
	      // https://github.com/devote/HTML5-History-API/issues/13
	      if (arguments.length > 3) {
	        addEvent(event, listener, capture, arguments[3]);
	      } else {
	        addEvent(event, listener, capture);
	      }
	    }
	  }
	
	  /**
	   * Wrapper for the methods 'removeEventListener/detachEvent' in the context of the 'window'
	   *
	   * @param {String} event The event type for which the user is registered
	   * @param {Function} listener The parameter indicates the Listener to be removed.
	   * @param {Boolean} capture Was registered as a capturing listener or not.
	   * @return void
	   */
	  function removeEventListener(event, listener, capture) {
	    var list = eventsList[event];
	    if (list) {
	      for(var i = list.length; i--;) {
	        if (list[i] === listener) {
	          list.splice(i, 1);
	          break;
	        }
	      }
	    } else {
	      removeEvent(event, listener, capture);
	    }
	  }
	
	  /**
	   * Wrapper for the methods 'dispatchEvent/fireEvent' in the context of the 'window'
	   *
	   * @param {Event|String} event Instance of Event or event type string if 'eventObject' used
	   * @param {*} [eventObject] For Internet Explorer 8 required event object on this argument
	   * @return {Boolean} If 'preventDefault' was called the value is false, else the value is true.
	   */
	  function dispatchEvent(event, eventObject) {
	    var eventType = ('' + (typeof event === "string" ? event : event.type)).replace(/^on/, '');
	    var list = eventsList[eventType];
	    if (list) {
	      // need to understand that there is one object of Event
	      eventObject = typeof event === "string" ? eventObject : event;
	      if (eventObject.target == null) {
	        // need to override some of the properties of the Event object
	        for(var props = ['target', 'currentTarget', 'srcElement', 'type']; event = props.pop();) {
	          // use 'redefineProperty' to override the properties
	          eventObject = redefineProperty(eventObject, event, {
	            get: event === 'type' ? function() {
	              return eventType;
	            } : function() {
	              return global;
	            }
	          });
	        }
	      }
	      if (triggerEventsInWindowAttributes) {
	        // run function defined in the attributes 'onpopstate/onhashchange' in the 'window' context
	        ((eventType === 'popstate' ? global.onpopstate : global.onhashchange)
	          || emptyFunction).call(global, eventObject);
	      }
	      // run other functions that are in the list of handlers
	      for(var i = 0, len = list.length; i < len; i++) {
	        list[i].call(global, eventObject);
	      }
	      return true;
	    } else {
	      return dispatch(event, eventObject);
	    }
	  }
	
	  /**
	   * dispatch current state event
	   */
	  function firePopState() {
	    var o = document.createEvent ? document.createEvent('Event') : document.createEventObject();
	    if (o.initEvent) {
	      o.initEvent('popstate', false, false);
	    } else {
	      o.type = 'popstate';
	    }
	    o.state = historyObject.state;
	    // send a newly created events to be processed
	    dispatchEvent(o);
	  }
	
	  /**
	   * fire initial state for non-HTML5 browsers
	   */
	  function fireInitialState() {
	    if (isFireInitialState) {
	      isFireInitialState = false;
	      firePopState();
	    }
	  }
	
	  /**
	   * Change the data of the current history for HTML4 browsers
	   *
	   * @param {Object} state
	   * @param {string} [url]
	   * @param {Boolean} [replace]
	   * @param {string} [lastURLValue]
	   * @return void
	   */
	  function changeState(state, url, replace, lastURLValue) {
	    if (!isSupportHistoryAPI) {
	      // if not used implementation history.location
	      if (isUsedHistoryLocationFlag === 0) isUsedHistoryLocationFlag = 2;
	      // normalization url
	      var urlObject = parseURL(url, isUsedHistoryLocationFlag === 2 && ('' + url).indexOf("#") !== -1);
	      // if current url not equal new url
	      if (urlObject._relative !== parseURL()._relative) {
	        // if empty lastURLValue to skip hash change event
	        lastURL = lastURLValue;
	        if (replace) {
	          // only replace hash, not store to history
	          windowLocation.replace("#" + urlObject._special);
	        } else {
	          // change hash and add new record to history
	          windowLocation.hash = urlObject._special;
	        }
	      }
	    } else {
	      lastURL = windowLocation.href;
	    }
	    if (!isSupportStateObjectInHistory && state) {
	      stateStorage[windowLocation.href] = state;
	    }
	    isFireInitialState = false;
	  }
	
	  /**
	   * Event handler function changes the hash in the address bar
	   *
	   * @param {Event} event
	   * @return void
	   */
	  function onHashChange(event) {
	    // https://github.com/devote/HTML5-History-API/issues/46
	    var fireNow = lastURL;
	    // new value to lastURL
	    lastURL = windowLocation.href;
	    // if not empty fireNow, otherwise skipped the current handler event
	    if (fireNow) {
	      // if checkUrlForPopState equal current url, this means that the event was raised popstate browser
	      if (checkUrlForPopState !== windowLocation.href) {
	        // otherwise,
	        // the browser does not support popstate event or just does not run the event by changing the hash.
	        firePopState();
	      }
	      // current event object
	      event = event || global.event;
	
	      var oldURLObject = parseURL(fireNow, true);
	      var newURLObject = parseURL();
	      // HTML4 browser not support properties oldURL/newURL
	      if (!event.oldURL) {
	        event.oldURL = oldURLObject._href;
	        event.newURL = newURLObject._href;
	      }
	      if (oldURLObject._hash !== newURLObject._hash) {
	        // if current hash not equal previous hash
	        dispatchEvent(event);
	      }
	    }
	  }
	
	  /**
	   * The event handler is fully loaded document
	   *
	   * @param {*} [noScroll]
	   * @return void
	   */
	  function onLoad(noScroll) {
	    // Get rid of the events popstate when the first loading a document in the webkit browsers
	    setTimeout(function() {
	      // hang up the event handler for the built-in popstate event in the browser
	      addEvent('popstate', function(e) {
	        // set the current url, that suppress the creation of the popstate event by changing the hash
	        checkUrlForPopState = windowLocation.href;
	        // for Safari browser in OS Windows not implemented 'state' object in 'History' interface
	        // and not implemented in old HTML4 browsers
	        if (!isSupportStateObjectInHistory) {
	          e = redefineProperty(e, 'state', {get: function() {
	            return historyObject.state;
	          }});
	        }
	        // send events to be processed
	        dispatchEvent(e);
	      }, false);
	    }, 0);
	    // for non-HTML5 browsers
	    if (!isSupportHistoryAPI && noScroll !== true && "location" in historyObject) {
	      // scroll window to anchor element
	      scrollToAnchorId(locationObject.hash);
	      // fire initial state for non-HTML5 browser after load page
	      fireInitialState();
	    }
	  }
	
	  /**
	   * Finds the closest ancestor anchor element (including the target itself).
	   *
	   * @param {HTMLElement} target The element to start scanning from.
	   * @return {HTMLElement} An element which is the closest ancestor anchor.
	   */
	  function anchorTarget(target) {
	    while (target) {
	      if (target.nodeName === 'A') return target;
	      target = target.parentNode;
	    }
	  }
	
	  /**
	   * Handles anchor elements with a hash fragment for non-HTML5 browsers
	   *
	   * @param {Event} e
	   */
	  function onAnchorClick(e) {
	    var event = e || global.event;
	    var target = anchorTarget(event.target || event.srcElement);
	    var defaultPrevented = "defaultPrevented" in event ? event['defaultPrevented'] : event.returnValue === false;
	    if (target && target.nodeName === "A" && !defaultPrevented) {
	      var current = parseURL();
	      var expect = parseURL(target.getAttribute("href", 2));
	      var isEqualBaseURL = current._href.split('#').shift() === expect._href.split('#').shift();
	      if (isEqualBaseURL && expect._hash) {
	        if (current._hash !== expect._hash) {
	          locationObject.hash = expect._hash;
	        }
	        scrollToAnchorId(expect._hash);
	        if (event.preventDefault) {
	          event.preventDefault();
	        } else {
	          event.returnValue = false;
	        }
	      }
	    }
	  }
	
	  /**
	   * Scroll page to current anchor in url-hash
	   *
	   * @param hash
	   */
	  function scrollToAnchorId(hash) {
	    var target = document.getElementById(hash = (hash || '').replace(/^#/, ''));
	    if (target && target.id === hash && target.nodeName === "A") {
	      var rect = target.getBoundingClientRect();
	      global.scrollTo((documentElement.scrollLeft || 0), rect.top + (documentElement.scrollTop || 0)
	        - (documentElement.clientTop || 0));
	    }
	  }
	
	  /**
	   * Library initialization
	   *
	   * @return {Boolean} return true if all is well, otherwise return false value
	   */
	  function initialize() {
	    /**
	     * Get custom settings from the query string
	     */
	    var scripts = document.getElementsByTagName('script');
	    var src = (scripts[scripts.length - 1] || {}).src || '';
	    var arg = src.indexOf('?') !== -1 ? src.split('?').pop() : '';
	    arg.replace(/(\w+)(?:=([^&]*))?/g, function(a, key, value) {
	      settings[key] = (value || '').replace(/^(0|false)$/, '');
	    });
	
	    /**
	     * hang up the event handler to listen to the events hashchange
	     */
	    addEvent(eventNamePrefix + 'hashchange', onHashChange, false);
	
	    // a list of objects with pairs of descriptors/object
	    var data = [locationDescriptors, locationObject, eventsDescriptors, global, historyDescriptors, historyObject];
	
	    // if browser support object 'state' in interface 'History'
	    if (isSupportStateObjectInHistory) {
	      // remove state property from descriptor
	      delete historyDescriptors['state'];
	    }
	
	    // initializing descriptors
	    for(var i = 0; i < data.length; i += 2) {
	      for(var prop in data[i]) {
	        if (data[i].hasOwnProperty(prop)) {
	          if (typeof data[i][prop] !== 'object') {
	            // If the descriptor is a simple function, simply just assign it an object
	            data[i + 1][prop] = data[i][prop];
	          } else {
	            // prepare the descriptor the required format
	            var descriptor = prepareDescriptorsForObject(data[i], prop, data[i][prop]);
	            // try to set the descriptor object
	            if (!redefineProperty(data[i + 1], prop, descriptor, function(n, o) {
	              // is satisfied if the failed override property
	              if (o === historyObject) {
	                // the problem occurs in Safari on the Mac
	                global.history = historyObject = data[i + 1] = n;
	              }
	            })) {
	              // if there is no possibility override.
	              // This browser does not support descriptors, such as IE7
	
	              // remove previously hung event handlers
	              removeEvent(eventNamePrefix + 'hashchange', onHashChange, false);
	
	              // fail to initialize :(
	              return false;
	            }
	
	            // create a repository for custom handlers onpopstate/onhashchange
	            if (data[i + 1] === global) {
	              eventsList[prop] = eventsList[prop.substr(2)] = [];
	            }
	          }
	        }
	      }
	    }
	
	    // check settings
	    historyObject['setup']();
	
	    // redirect if necessary
	    if (settings['redirect']) {
	      historyObject['redirect']();
	    }
	
	    // initialize
	    if (settings["init"]) {
	      // You agree that you will use window.history.location instead window.location
	      isUsedHistoryLocationFlag = 1;
	    }
	
	    // If browser does not support object 'state' in interface 'History'
	    if (!isSupportStateObjectInHistory && JSON) {
	      storageInitialize();
	    }
	
	    // track clicks on anchors
	    if (!isSupportHistoryAPI) {
	      document[addEventListenerName](eventNamePrefix + "click", onAnchorClick, false);
	    }
	
	    if (document.readyState === 'complete') {
	      onLoad(true);
	    } else {
	      if (!isSupportHistoryAPI && parseURL()._relative !== settings["basepath"]) {
	        isFireInitialState = true;
	      }
	      /**
	       * Need to avoid triggering events popstate the initial page load.
	       * Hang handler popstate as will be fully loaded document that
	       * would prevent triggering event onpopstate
	       */
	      addEvent(eventNamePrefix + 'load', onLoad, false);
	    }
	
	    // everything went well
	    return true;
	  }
	
	  /**
	   * Starting the library
	   */
	  if (!initialize()) {
	    // if unable to initialize descriptors
	    // therefore quite old browser and there
	    // is no sense to continue to perform
	    return;
	  }
	
	  /**
	   * If the property history.emulate will be true,
	   * this will be talking about what's going on
	   * emulation capabilities HTML5-History-API.
	   * Otherwise there is no emulation, ie the
	   * built-in browser capabilities.
	   *
	   * @type {boolean}
	   * @const
	   */
	  historyObject['emulate'] = !isSupportHistoryAPI;
	
	  /**
	   * Replace the original methods on the wrapper
	   */
	  global[addEventListenerName] = addEventListener;
	  global[removeEventListenerName] = removeEventListener;
	  global[dispatchEventName] = dispatchEvent;
	
	  return historyObject;
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 20)(module)))

/***/ },
/* 20 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 21 */
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 22 */
/*!**************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/url/url.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var punycode = __webpack_require__(/*! punycode */ 23);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(/*! querystring */ 24);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};
	
	function isString(arg) {
	  return typeof arg === "string";
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 23 */
/*!******************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/url/~/punycode/punycode.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../../buildin/module.js */ 20)(module), (function() { return this; }())))

/***/ },
/* 24 */
/*!******************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/url/~/querystring/index.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 25);
	exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 26);


/***/ },
/* 25 */
/*!*******************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/url/~/querystring/decode.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 26 */
/*!*******************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/url/~/querystring/encode.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 27 */
/*!*****************************!*\
  !*** ./src/Button/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 28);
	
	// html
	var buttonTmpl = __webpack_require__(/*! ./button.tmpl */ 32);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var Button = (function (_BaseComponent) {
	  _inherits(Button, _BaseComponent);
	
	  function Button(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Button);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.label = opts.label || 'ClickMe!';
	    _this.submit = opts.submit || false;
	    _this.preventPropagation = opts.preventPropagation || false;
	    return _this;
	  }
	
	  Button.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(buttonTmpl(this));
	    this.$el.find('button').click(function (evt) {
	      evt.preventDefault();
	      _this2.preventPropagation ? evt.stopPropagation() : $.noop;
	      _this2.publish('click', _this2.id);
	    });
	    return this.$el.html();
	  };
	
	  return Button;
	})(BaseComponent);
	
	;
	
	module.exports = Button;

/***/ },
/* 28 */
/*!*******************************!*\
  !*** ./src/Button/styles.css ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/*!**************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/Button/styles.css ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-button {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 30 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 31 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 32 */
/*!********************************!*\
  !*** ./src/Button/button.tmpl ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<button type='" + (scope.submit ? "submit" : "button") + "' class='ui-button'>" + scope.label + "</button>";
	};

/***/ },
/* 33 */
/*!******************************!*\
  !*** ./src/BaseComponent.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var uuid = __webpack_require__(/*! uuid */ 34);
	var PSHub = __webpack_require__(/*! ./PubSubHub */ 8);
	var assert = __webpack_require__(/*! ./assert */ 7);
	
	// for covenience
	var keyEvents = {
	  ENTER: 13,
	  ESC: 27,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40
	};
	
	var BaseComponent = (function () {
	  function BaseComponent(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, BaseComponent);
	
	    assert(el);
	
	    // find element in the client DOM, or...
	    if (!opts.parentElement) {
	      this.$el = $(el);
	    } else {
	      this.$el = opts.parentElement.find(el);
	    }
	
	    // ...when DOM aint there,
	    // just do it in memory, to support server-side rendering
	    if (this.$el.size() === 0) {
	      this.$el = $('<div></div>');
	    }
	
	    if (!opts.preserveChildElements) {
	      this.$el.html('');
	    }
	
	    Object.assign(this, {
	      keyEvents: keyEvents,
	      attrs: opts.attrs || {},
	      id: uuid.v4(),
	      value: null
	    });
	
	    return this;
	  }
	
	  BaseComponent.prototype.render = function render() {
	    throw new Error('BaseComponent::render must be defined by child');
	  };
	
	  BaseComponent.prototype.get = function get() {
	    return this.value;
	  };
	
	  BaseComponent.prototype.set = function set(v) {
	    this.value = v;
	    this.publish(this.get());
	    return this.render();
	  };
	
	  BaseComponent.prototype.subscribe = function subscribe(listener) {
	    PSHub.subscribe(this.id, listener);
	    return this;
	  };
	
	  BaseComponent.prototype.publish = function publish(msg) {
	    PSHub.publish(this.id, msg);
	  };
	
	  return BaseComponent;
	})();
	
	;
	
	module.exports = BaseComponent;

/***/ },
/* 34 */
/*!************************!*\
  !*** ./~/uuid/uuid.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(/*! ./rng */ 35);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });
	
	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }
	
	  return buf;
	}
	
	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : unparse(b);
	}
	
	// **`v4()` - Generate random UUID**
	
	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || unparse(rnds);
	}
	
	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;
	
	module.exports = uuid;


/***/ },
/* 35 */
/*!*******************************!*\
  !*** ./~/uuid/rng-browser.js ***!
  \*******************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return _rnds;
	  };
	}
	
	module.exports = rng;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/*!**************************************!*\
  !*** ./src/CurrentLocation/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 37);
	
	// assets
	var iconURL = __webpack_require__(/*! ./location.png */ 39);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var CurrentLocation = (function (_BaseComponent) {
	  _inherits(CurrentLocation, _BaseComponent);
	
	  function CurrentLocation(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, CurrentLocation);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.iconURL = opts.iconURL || iconURL;
	    _this.geolocationAPI = opts.geolocationAPI;
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  CurrentLocation.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.addClass('ui-current-location');
	    this.$el.on('click', function (evt) {
	      evt.stopPropagation();
	      _this2.getCurrentLocation();
	    });
	    this.$el.css('background-image', 'url(' + this.iconURL + ')');
	    return this.$el.html();
	  };
	
	  CurrentLocation.prototype.set = function set(lng, lat) {
	    this.lng = lng;
	    this.lat = lat;
	    this.publish(this.get());
	    return this;
	  };
	
	  CurrentLocation.prototype.get = function get() {
	    return {
	      lng: this.lng,
	      lat: this.lat,
	      isLocation: true
	    };
	  };
	
	  CurrentLocation.prototype.getCurrentLocation = function getCurrentLocation() {
	    var _this3 = this;
	
	    this.publish('current-location-requested');
	    this.geolocationAPI.getCurrentPosition(function (position) {
	      _this3.set(position.coords.longitude, position.coords.latitude);
	    }, function (error) {
	      console.error(error.message);
	      _this3.publish(error);
	    });
	    return this;
	  };
	
	  return CurrentLocation;
	})(BaseComponent);
	
	;
	
	module.exports = CurrentLocation;

/***/ },
/* 37 */
/*!****************************************!*\
  !*** ./src/CurrentLocation/styles.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/CurrentLocation/styles.css ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-current-location {\n  cursor: pointer;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n", ""]);
	
	// exports


/***/ },
/* 39 */
/*!******************************************!*\
  !*** ./src/CurrentLocation/location.png ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 40 */
/*!*************************************!*\
  !*** ./src/ExpandCollapse/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 41);
	
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	var Toggle = __webpack_require__(/*! ../Toggle/ */ 43);
	var collapseTmpl = __webpack_require__(/*! ./expandCollapseContent.tmpl */ 44);
	
	var ExpandCollapse = (function (_BaseComponent) {
	  _inherits(ExpandCollapse, _BaseComponent);
	
	  function ExpandCollapse(el, opts) {
	    var _ret;
	
	    _classCallCheck(this, ExpandCollapse);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, {
	      parentElement: opts.parentElement,
	      preserveChildElements: true
	    }));
	
	    var toggle = new Toggle(opts.toggleSelector, opts);
	    toggle.render();
	
	    toggle.subscribe(function (isToggled) {
	      _this.expandCollapse(isToggled);
	    });
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  ExpandCollapse.prototype.expandCollapse = function expandCollapse(isToggled) {
	    if (isToggled) {
	      var wrapperHeight = this.$el.find('.measuringWrapper')[0].clientHeight;
	      this.$el.find('.grow').css('height', wrapperHeight + 'px');
	    } else {
	      this.$el.find('.grow').css('height', '0');
	    }
	  };
	
	  ExpandCollapse.prototype.render = function render() {
	    var innerContent = this.$el.html();
	    this.$el.html(collapseTmpl(innerContent));
	    return this.$el[0].outerHTML;
	  };
	
	  return ExpandCollapse;
	})(BaseComponent);
	
	module.exports = ExpandCollapse;

/***/ },
/* 41 */
/*!***************************************!*\
  !*** ./src/ExpandCollapse/styles.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/*!**********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/ExpandCollapse/styles.css ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, ".grow {\n    transition: height .5s;\n    height: 0;\n    overflow: hidden;\n}", ""]);
	
	// exports


/***/ },
/* 43 */
/*!*****************************!*\
  !*** ./src/Toggle/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var Toggle = (function (_BaseComponent) {
	  _inherits(Toggle, _BaseComponent);
	
	  function Toggle(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Toggle);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, {
	      parentElement: opts.parentElement,
	      preserveChildElements: true
	    }));
	
	    Object.assign(_this, {
	      value: null
	    });
	    if (opts.untoggledClass) {
	      _this.$el.addClass(opts.untoggledClass);
	    }
	
	    _this.$el.click(function (evt) {
	      evt.stopPropagation();
	      evt.preventDefault();
	
	      // Execute untoggle
	      if (_this.value) {
	        if (opts.toggledClass) {
	          _this.$el.removeClass(opts.toggledClass);
	        }
	        if (opts.untoggledClass) {
	          _this.$el.addClass(opts.untoggledClass);
	        }
	      }
	      //Execute toggle
	      else if (!_this.value) {
	          if (opts.untoggledClass) {
	            _this.$el.removeClass(opts.untoggledClass);
	          }
	          if (opts.toggledClass) {
	            _this.$el.addClass(opts.toggledClass);
	          }
	        }
	      _this.set(!_this.value);
	    });
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  Toggle.prototype.render = function render() {
	    return this.$el.html();
	  };
	
	  return Toggle;
	})(BaseComponent);
	
	module.exports = Toggle;

/***/ },
/* 44 */
/*!*******************************************************!*\
  !*** ./src/ExpandCollapse/expandCollapseContent.tmpl ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	    return "<div class=\"grow\">\n    <div class=\"measuringWrapper\">\n        <div class=\"expand-collapse-content\">" + scope + "</div>\n    </div>\n</div>\n";
	};

/***/ },
/* 45 */
/*!*******************************!*\
  !*** ./src/ListView/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// # Render a list of results
	//
	//   - publishes an event when a list item is clicked 'selected'
	//
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 46);
	
	// html
	var listViewTmpl = __webpack_require__(/*! ./listView.dot */ 48);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var ListView = (function (_BaseComponent) {
	  _inherits(ListView, _BaseComponent);
	
	  function ListView(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ListView);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));
	
	    Object.assign(_this, {
	      fetch: opts.fetch,
	      listItemOpts: opts.listItemOpts || {},
	      renderItem: opts.renderItem || _this.renderItem,
	      results: opts.results || []
	    });
	    return _this;
	  }
	
	  ListView.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(listViewTmpl(this));
	
	    this.$el.find('ul.ui-list').attr(this.attrs);
	    this.$el.find('li.ui-list-item').attr(this.listItemOpts.attrs || {});
	    this.$el.find('li.ui-list-item').click(function (evt) {
	      _this2.set(_this2.results[$(evt.currentTarget).attr('data-index')]);
	    });
	    return this.$el.html();
	  };
	
	  // expected to be overriden
	
	  ListView.prototype.renderItem = function renderItem(item) {
	    return item.toString();
	  };
	
	  ListView.prototype.refresh = function refresh() {
	    var _this3 = this;
	
	    this.publish('refresh');
	    return this.fetch(function (results) {
	      _this3.results = results;
	      _this3.render();
	    });
	  };
	
	  return ListView;
	})(BaseComponent);
	
	;
	
	module.exports = ListView;

/***/ },
/* 46 */
/*!*********************************!*\
  !*** ./src/ListView/styles.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/*!****************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/ListView/styles.css ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 48 */
/*!***********************************!*\
  !*** ./src/ListView/listView.dot ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<ul class=\'ui-list\'> ';var arr1=it.results;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+=' ';var item = it.renderItem(value, index);out+=' ';if(item){out+=' <li id=\''+(it.id)+'\' class=\'ui-list-item\' data-index=\''+(index)+'\'>'+(item)+'</li> ';}out+=' ';} } out+='</ul>';return out;
	}

/***/ },
/* 49 */
/*!***********************************!*\
  !*** ./src/SingleSelect/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//  @title: SingleSelect
	//  @author: jhatcher
	//  @description:
	//    Simple dropdown list with the ability to choose one option
	//  @todo:
	//    - styles
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 50);
	
	// html
	var selectTmpl = __webpack_require__(/*! ./select.tmpl */ 52);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var SingleSelect = (function (_BaseComponent) {
	  _inherits(SingleSelect, _BaseComponent);
	
	  // @constructor
	  // @param {String} el   - The dom element to attach to
	  // @param {Object} opts - The options passed in to configure this component
	  // @param {Array} opts.options - each option to be rendered, containing 3 attributes (2 are passed in):
	  //    @prop {String} [optional] display - the display to render for the option
	  //    @prop {String} value - the data value to send to the server
	
	  function SingleSelect(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, SingleSelect);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.options = (opts.options || []).map(function (opt) {
	      if ($.isPlainObject(opt)) {
	        return {
	          display: opt.display,
	          value: opt.value,
	          selected: opt.value === _this.get()
	        };
	      }
	      return {
	        value: opt,
	        selected: opt === _this.get()
	      };
	    });
	    return _this;
	  }
	
	  // @method
	  // @returns the display attribute of the option if it exists, fallback to the value
	
	  SingleSelect.prototype.getDisplayValue = function getDisplayValue() {
	    var display = undefined;
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = this.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var opt = _step.value;
	
	        if (opt.selected) {
	          display = opt.display ? opt.display : opt.value;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return display;
	  };
	
	  // @method
	  // @param {Object} v - the Option Object (display,value,selected) to set
	
	  SingleSelect.prototype.set = function set(v) {
	    this.options = this.options.map(function (opt) {
	      opt.selected = opt.value === v;
	      return opt;
	    });
	
	    return _BaseComponent.prototype.set.call(this, v);
	  };
	
	  // @method
	  // @returns the HTML of the element
	
	  SingleSelect.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(selectTmpl(this));
	    this.$el.find('select').change(function (evt) {
	      _this2.set($(evt.target).val());
	    });
	    return this.$el.html();
	  };
	
	  return SingleSelect;
	})(BaseComponent);
	
	;
	
	module.exports = SingleSelect;

/***/ },
/* 50 */
/*!*************************************!*\
  !*** ./src/SingleSelect/styles.css ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/*!********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/SingleSelect/styles.css ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 52 */
/*!**************************************!*\
  !*** ./src/SingleSelect/select.tmpl ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return '<select>\n' + scope.options.map(function (option) {
	    if (option.display) {
	      if (option.selected) {
	        return '<option value=' + option.value + ' selected=true>' + option.display + '</option>';
	      } else {
	        return '<option value=' + option.value + '>' + option.display + '</option>';
	      }
	    } else {
	      if (option.selected) {
	        return '<option value=' + option.value + ' selected=true>' + option.value + '</option>';
	      } else {
	        return '<option value=' + option.value + '>' + option.value + '</option>';
	      }
	    }
	  }) + '\n</select>\n';
	};

/***/ },
/* 53 */
/*!**********************************!*\
  !*** ./src/MultiSelect/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// css
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.scss */ 54);
	
	// html
	var multiSelectTmpl = __webpack_require__(/*! ./multiSelect.dot */ 56);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var MultiSelect = (function (_BaseComponent) {
	  _inherits(MultiSelect, _BaseComponent);
	
	  function MultiSelect(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, MultiSelect);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.displayNameKey = opts.displayNameKey || 'displayName';
	    _this.renderItem = opts.renderItem || _this.renderItem;
	    _this.setOptions(opts.options || []);
	    return _this;
	  }
	
	  MultiSelect.prototype.renderItem = function renderItem(item) {
	    return JSON.stringify(item[this.displayNameKey]);
	  };
	
	  MultiSelect.prototype.setOptions = function setOptions(options) {
	    var selections = this.get().map(function (s) {
	      return s.value;
	    });
	
	    this.options = options.map(function (opt) {
	      if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object') {
	        opt = {
	          value: opt
	        };
	      }
	      opt.checked = selections.indexOf(opt.value) !== -1;
	      return opt;
	    });
	  };
	
	  MultiSelect.prototype.get = function get() {
	    this.options = this.options || [];
	    return this.options.filter(function (opt) {
	      return opt.checked;
	    });
	  };
	
	  MultiSelect.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(multiSelectTmpl(this));
	    this.$el.find('label').click(function (evt) {
	      _this2.set($(evt.target.parentElement).find('input').val());
	    });
	    this.$el.find('input').click(function (evt) {
	      _this2.set($(evt.target).val());
	    });
	    return this.$el.html();
	  };
	
	  /**
	   * Check the options that are in the array passed
	   * @param selected An array of selected values or a value to select
	   */
	
	  MultiSelect.prototype.set = function set(selected) {
	    if (Array.isArray(selected)) {
	      this.options.forEach(function (option) {
	        option.checked = selected.indexOf(option.value) === -1 ? false : true;
	      });
	    } else {
	      this.options.forEach(function (option) {
	        option.checked = option.value === selected ? !option.checked : option.checked;
	      });
	    }
	
	    this.render();
	    this.publish(this.get());
	    return this;
	  };
	
	  return MultiSelect;
	})(BaseComponent);
	
	;
	
	module.exports = MultiSelect;

/***/ },
/* 54 */
/*!*************************************!*\
  !*** ./src/MultiSelect/styles.scss ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./../../~/jsontosass-loader?{"checkedColor":"#105b63","uncheckedColor":"#ffffff"}!./styles.scss */ 55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/jsontosass-loader/index.js?{\"checkedColor\":\"#105b63\",\"uncheckedColor\":\"#ffffff\"}!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/jsontosass-loader/index.js?{\"checkedColor\":\"#105b63\",\"uncheckedColor\":\"#ffffff\"}!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./~/jsontosass-loader?{"checkedColor":"#105b63","uncheckedColor":"#ffffff"}!./src/MultiSelect/styles.scss ***!
  \************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 768px) {\n  label {\n    position: relative;\n    cursor: pointer; }\n    label input[type=\"checkbox\"] {\n      display: none; }\n  label input[type=\"checkbox\"] + span {\n    display: inline-block;\n    line-height: normal;\n    cursor: pointer;\n    padding: 8px 14px;\n    background-color: #ffffff;\n    border: 1px solid #D0D0D0; }\n  label input[type=\"checkbox\"] + span:hover {\n    border-color: #000;\n    background-color: #105b63;\n    color: #fff; }\n  label input[type=\"checkbox\"]:checked + span {\n    border-color: #000;\n    background-color: #105b63;\n    color: #fff; } }\n", ""]);
	
	// exports


/***/ },
/* 56 */
/*!*****************************************!*\
  !*** ./src/MultiSelect/multiSelect.dot ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<div class=\'ui-multi-select\'> ';var arr1=it.options;if(arr1){var opt,index=-1,l1=arr1.length-1;while(index<l1){opt=arr1[index+=1];out+=' <div class="select-option"> <label> <input type=\'checkbox\' name=\''+( it.id )+'\' value=\''+( opt.value )+'\' ';if(opt.checked){out+='checked=true';}out+='/> <span>'+(it.renderItem(opt))+'</span> </label> </div> ';} } out+='</div>';return out;
	}

/***/ },
/* 57 */
/*!*********************************!*\
  !*** ./src/Pagination/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	var $ = __webpack_require__(/*! jquery */ 1);
	var simplePagination = __webpack_require__(/*! imports?jQuery=jquery!../../~/simplePagination/jquery.simplePagination.js */ 58);
	var paginationTmpl = __webpack_require__(/*! ./pagination.dot */ 59);
	
	var Pagination = (function (_BaseComponent) {
	  _inherits(Pagination, _BaseComponent);
	
	  function Pagination(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Pagination);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    Object.assign(_this, {
	      cssStyle: opts.cssStyle || 'pagination',
	      edges: opts.edges || 0,
	      hrefTextPrefix: opts.hrefTextPrefix || '#page-',
	      items: opts.items || 100,
	      itemsOnPage: opts.itemsOnPage || 10,
	      nextText: opts.nextText || 'Next',
	      onPageClick: opts.onPageClick,
	      prevText: opts.prevText || 'Prev',
	      value: opts.currentPage || 1
	    });
	    return _this;
	  }
	
	  Pagination.prototype.pageChange = function pageChange(pageNumber, event) {
	    this.set(pageNumber);
	    if (this.onPageClick) {
	      event.stopPropagation();
	      event.preventDefault();
	      this.onPageClick(pageNumber, event);
	    }
	  };
	
	  Pagination.prototype.render = function render() {
	    this.$el.pagination({
	      currentPage: this.get(),
	      cssStyle: this.cssStyle,
	      edges: this.edges,
	      hrefTextPrefix: this.hrefTextPrefix,
	      nextText: this.nextText,
	      onPageClick: this.pageChange.bind(this),
	      prevText: this.prevText,
	      items: this.items,
	      itemsOnPage: this.itemsOnPage
	    });
	    return this.$el.html();
	  };
	
	  return Pagination;
	})(BaseComponent);
	
	module.exports = Pagination;

/***/ },
/* 58 */
/*!****************************************************************************************!*\
  !*** ./~/imports-loader?jQuery=jquery!./~/simplePagination/jquery.simplePagination.js ***!
  \****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(/*! jquery */ 1);
	
	/**
	* simplePagination.js v1.6
	* A simple jQuery pagination plugin.
	* http://flaviusmatis.github.com/simplePagination.js/
	*
	* Copyright 2012, Flavius Matis
	* Released under the MIT license.
	* http://flaviusmatis.github.com/license.html
	*/
	
	(function($){
	
		var methods = {
			init: function(options) {
				var o = $.extend({
					items: 1,
					itemsOnPage: 1,
					pages: 0,
					displayedPages: 5,
					edges: 2,
					currentPage: 0,
					hrefTextPrefix: '#page-',
					hrefTextSuffix: '',
					prevText: 'Prev',
					nextText: 'Next',
					ellipseText: '&hellip;',
					ellipsePageSet: true,
					cssStyle: 'light-theme',
					listStyle: '',
					labelMap: [],
					selectOnClick: true,
					nextAtFront: false,
					invertPageOrder: false,
					useStartEdge : true,
					useEndEdge : true,
					onPageClick: function(pageNumber, event) {
						// Callback triggered when a page is clicked
						// Page number is given as an optional parameter
					},
					onInit: function() {
						// Callback triggered immediately after initialization
					}
				}, options || {});
	
				var self = this;
	
				o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
				if (o.currentPage)
					o.currentPage = o.currentPage - 1;
				else
					o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
				o.halfDisplayed = o.displayedPages / 2;
	
				this.each(function() {
					self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
					methods._draw.call(self);
				});
	
				o.onInit();
	
				return this;
			},
	
			selectPage: function(page) {
				methods._selectPage.call(this, page - 1);
				return this;
			},
	
			prevPage: function() {
				var o = this.data('pagination');
				if (!o.invertPageOrder) {
					if (o.currentPage > 0) {
						methods._selectPage.call(this, o.currentPage - 1);
					}
				} else {
					if (o.currentPage < o.pages - 1) {
						methods._selectPage.call(this, o.currentPage + 1);
					}
				}
				return this;
			},
	
			nextPage: function() {
				var o = this.data('pagination');
				if (!o.invertPageOrder) {
					if (o.currentPage < o.pages - 1) {
						methods._selectPage.call(this, o.currentPage + 1);
					}
				} else {
					if (o.currentPage > 0) {
						methods._selectPage.call(this, o.currentPage - 1);
					}
				}
				return this;
			},
	
			getPagesCount: function() {
				return this.data('pagination').pages;
			},
	
			setPagesCount: function(count) {
				this.data('pagination').pages = count;
			},
	
			getCurrentPage: function () {
				return this.data('pagination').currentPage + 1;
			},
	
			destroy: function(){
				this.empty();
				return this;
			},
	
			drawPage: function (page) {
				var o = this.data('pagination');
				o.currentPage = page - 1;
				this.data('pagination', o);
				methods._draw.call(this);
				return this;
			},
	
			redraw: function(){
				methods._draw.call(this);
				return this;
			},
	
			disable: function(){
				var o = this.data('pagination');
				o.disabled = true;
				this.data('pagination', o);
				methods._draw.call(this);
				return this;
			},
	
			enable: function(){
				var o = this.data('pagination');
				o.disabled = false;
				this.data('pagination', o);
				methods._draw.call(this);
				return this;
			},
	
			updateItems: function (newItems) {
				var o = this.data('pagination');
				o.items = newItems;
				o.pages = methods._getPages(o);
				this.data('pagination', o);
				methods._draw.call(this);
			},
	
			updateItemsOnPage: function (itemsOnPage) {
				var o = this.data('pagination');
				o.itemsOnPage = itemsOnPage;
				o.pages = methods._getPages(o);
				this.data('pagination', o);
				methods._selectPage.call(this, 0);
				return this;
			},
	
			getItemsOnPage: function() {
				return this.data('pagination').itemsOnPage;
			},
	
			_draw: function() {
				var	o = this.data('pagination'),
					interval = methods._getInterval(o),
					i,
					tagName;
	
				methods.destroy.call(this);
	
				tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');
	
				var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);
	
				// Generate Prev link
				if (o.prevText) {
					methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {text: o.prevText, classes: 'prev'});
				}
	
				// Generate Next link (if option set for at front)
				if (o.nextText && o.nextAtFront) {
					methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
				}
	
				// Generate start edges
				if (!o.invertPageOrder) {
					if (interval.start > 0 && o.edges > 0) {
						if(o.useStartEdge) {
							var end = Math.min(o.edges, interval.start);
							for (i = 0; i < end; i++) {
								methods._appendItem.call(this, i);
							}
						}
						if (o.edges < interval.start && (interval.start - o.edges != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (interval.start - o.edges == 1) {
							methods._appendItem.call(this, o.edges);
						}
					}
				} else {
					if (interval.end < o.pages && o.edges > 0) {
						if(o.useStartEdge) {
							var begin = Math.max(o.pages - o.edges, interval.end);
							for (i = o.pages - 1; i >= begin; i--) {
								methods._appendItem.call(this, i);
							}
						}
	
						if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (o.pages - o.edges - interval.end == 1) {
							methods._appendItem.call(this, interval.end);
						}
					}
				}
	
				// Generate interval links
				if (!o.invertPageOrder) {
					for (i = interval.start; i < interval.end; i++) {
						methods._appendItem.call(this, i);
					}
				} else {
					for (i = interval.end - 1; i >= interval.start; i--) {
						methods._appendItem.call(this, i);
					}
				}
	
				// Generate end edges
				if (!o.invertPageOrder) {
					if (interval.end < o.pages && o.edges > 0) {
						if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (o.pages - o.edges - interval.end == 1) {
							methods._appendItem.call(this, interval.end);
						}
						if(o.useEndEdge) {
							var begin = Math.max(o.pages - o.edges, interval.end);
							for (i = begin; i < o.pages; i++) {
								methods._appendItem.call(this, i);
							}
						}
					}
				} else {
					if (interval.start > 0 && o.edges > 0) {
						if (o.edges < interval.start && (interval.start - o.edges != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (interval.start - o.edges == 1) {
							methods._appendItem.call(this, o.edges);
						}
	
						if(o.useEndEdge) {
							var end = Math.min(o.edges, interval.start);
							for (i = end - 1; i >= 0; i--) {
								methods._appendItem.call(this, i);
							}
						}
					}
				}
	
				// Generate Next link (unless option is set for at front)
				if (o.nextText && !o.nextAtFront) {
					methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
				}
	
				if (o.ellipsePageSet && !o.disabled) {
					methods._ellipseClick.call(this, $panel);
				}
	
			},
	
			_getPages: function(o) {
				var pages = Math.ceil(o.items / o.itemsOnPage);
				return pages || 1;
			},
	
			_getInterval: function(o) {
				return {
					start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
					end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
				};
			},
	
			_appendItem: function(pageIndex, opts) {
				var self = this, options, $link, o = self.data('pagination'), $linkWrapper = $('<li></li>'), $ul = self.find('ul');
	
				pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);
	
				options = {
					text: pageIndex + 1,
					classes: ''
				};
	
				if (o.labelMap.length && o.labelMap[pageIndex]) {
					options.text = o.labelMap[pageIndex];
				}
	
				options = $.extend(options, opts || {});
	
				if (pageIndex == o.currentPage || o.disabled) {
					if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
						$linkWrapper.addClass('disabled');
					} else {
						$linkWrapper.addClass('active');
					}
					$link = $('<span class="current">' + (options.text) + '</span>');
				} else {
					$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
					$link.click(function(event){
						return methods._selectPage.call(self, pageIndex, event);
					});
				}
	
				if (options.classes) {
					$link.addClass(options.classes);
				}
	
				$linkWrapper.append($link);
	
				if ($ul.length) {
					$ul.append($linkWrapper);
				} else {
					self.append($linkWrapper);
				}
			},
	
			_selectPage: function(pageIndex, event) {
				var o = this.data('pagination');
				o.currentPage = pageIndex;
				if (o.selectOnClick) {
					methods._draw.call(this);
				}
				return o.onPageClick(pageIndex + 1, event);
			},
	
	
			_ellipseClick: function($panel) {
				var self = this,
					o = this.data('pagination'),
					$ellip = $panel.find('.ellipse');
				$ellip.addClass('clickable').parent().removeClass('disabled');
				$ellip.click(function(event) {
					if (!o.disable) {
						var $this = $(this),
							val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
						$this
							.html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">')
							.find('input')
							.focus()
							.click(function(event) {
								// prevent input number arrows from bubbling a click event on $ellip
								event.stopPropagation();
							})
							.keyup(function(event) {
								var val = $(this).val();
								if (event.which === 13 && val !== '') {
									// enter to accept
									if ((val>0)&&(val<=o.pages))
									methods._selectPage.call(self, val - 1);
								} else if (event.which === 27) {
									// escape to cancel
									$ellip.empty().html(o.ellipseText);
								}
							})
							.bind('blur', function(event) {
								var val = $(this).val();
								if (val !== '') {
									methods._selectPage.call(self, val - 1);
								}
								$ellip.empty().html(o.ellipseText);
								return false;
							});
					}
					return false;
				});
			}
	
		};
	
		$.fn.pagination = function(method) {
	
			// Method calling logic
			if (methods[method] && method.charAt(0) != '_') {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' +  method + ' does not exist on jQuery.pagination');
			}
	
		};
	
	})(jQuery);
	


/***/ },
/* 59 */
/*!***************************************!*\
  !*** ./src/Pagination/pagination.dot ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<div> <ul class="pagination"> ';if(it.result.pageCount > 2){out+=' ';var prelink = it.preparePreLink(it.result.prelink);out+=' ';if(it.result.previous){out+=' <li> <a href="'+(prelink + it.result.previous)+'">'+(it.options.translator('PREVIOUS'))+'</a> </li> ';}out+=' ';if(it.result.range.length){out+=' ';var arr1=it.result.range;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+=' ';if(value === it.result.current){out+=' <li class="active"> <a href="'+(prelink + value)+'">'+(value)+'</a> </li> ';}else{out+=' <li> <a href="'+(prelink + value)+'">'+(value)+'</a> </li> ';}out+=' ';} } out+=' ';}out+=' ';if(it.result.next){out+=' <li> <a href="'+(prelink + it.result.next)+'" class="paginator-next">'+(it.options.translator('NEXT'))+'</a> </li> ';}out+=' ';}out+=' </ul></div>';return out;
	}

/***/ },
/* 60 */
/*!*************************************!*\
  !*** ./src/InfiniteScroll/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	var debounce = __webpack_require__(/*! debounce */ 61);
	
	var InfiniteScroll = (function (_BaseComponent) {
	  _inherits(InfiniteScroll, _BaseComponent);
	
	  function InfiniteScroll(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, InfiniteScroll);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, {
	      preserveChildElements: true
	    }));
	
	    if (!opts.onScrollToBottom) {
	      throw new Error('You must provide an onScrollToBottom function');
	    } else {
	      _this.onScrollToBottom = opts.onScrollToBottom;
	    }
	
	    var debounceWait = opts.debounceWait || 500;
	    var $scrollTarget = opts.windowScroll ? $(window) : _this.$el;
	
	    $scrollTarget.scroll(debounce(function () {
	      var scrollTop = $scrollTarget.scrollTop();
	      var elementHeight = $scrollTarget.height();
	      var elementScrollHeight = $scrollTarget[0].scrollHeight || $(document).height();
	      var scrollTrigger = opts.scrollTrigger || 0.95;
	
	      if (scrollTop / (elementScrollHeight - elementHeight) > scrollTrigger) {
	        _this.onScrollToBottom();
	      }
	    }, debounceWait, false));
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  InfiniteScroll.prototype.render = function render() {
	    return this.$el.html();
	  };
	
	  return InfiniteScroll;
	})(BaseComponent);
	
	module.exports = InfiniteScroll;

/***/ },
/* 61 */
/*!*****************************!*\
  !*** ./~/debounce/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(/*! date-now */ 62);
	
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	
	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;
	
	  function later() {
	    var last = now() - timestamp;
	
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	};


/***/ },
/* 62 */
/*!****************************************!*\
  !*** ./~/debounce/~/date-now/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 63 */
/*!********************************!*\
  !*** ./src/TextInput/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// # TextInput
	// publishes a nicely throttled text input event
	// adds a clearing x icon
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 64);
	
	// html
	var inputTmpl = __webpack_require__(/*! ./input.tmpl */ 66);
	var iconTmpl = __webpack_require__(/*! ./icon.tmpl */ 67);
	var iconWrapper = __webpack_require__(/*! ./iconWrapper.html */ 68);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	var debounce = __webpack_require__(/*! debounce */ 61);
	
	var TextInput = (function (_BaseComponent) {
	  _inherits(TextInput, _BaseComponent);
	
	  function TextInput(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    Object.assign(_this, {
	      $input: null,
	      icon: opts.icon || 'x',
	      iconClearsValue: typeof opts.iconClearsValue === 'undefined' ? true : opts.iconClearsValue,
	      placeholder: opts.placeholder || '',
	      value: opts.value || '',
	      wait: opts.wait || 300
	    });
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  TextInput.prototype.render = function render() {
	    var _this2 = this;
	
	    // the base input
	    this.$el.addClass('ui-text-input');
	    this.$el.html(inputTmpl(this));
	    this.$input = this.$el.find('input');
	
	    var onKeyup = debounce(function () {
	      _this2.get() !== _this2.$input.val() ? _this2.set(_this2.$input.val()) : '';
	    }, this.wait);
	
	    this.$input.keyup(onKeyup); // debounced slightly for ux
	
	    if (this.icon) {
	      // the wrapper to place a clearing icon (X)
	      this.$input.wrap(iconWrapper);
	      this.$wrapper = this.$el.find('.ui-text-input-icon-wrapper');
	
	      // the clearing icon itself (absolute positioned within wrapper to be on the right)
	      this.$wrapper.append(iconTmpl(this));
	      this.$icon = this.$el.find('.ui-text-input-icon');
	
	      if (this.iconClearsValue) {
	        this.$icon.click(function () {
	          _this2.set('');
	        });
	      }
	    }
	
	    return this.$el.html();
	  };
	
	  TextInput.prototype.get = function get() {
	    return typeof this.value === 'undefined' ? '' : this.value;
	  };
	
	  TextInput.prototype.set = function set(v) {
	    this.value = v;
	    if (this.$input) {
	      this.$input.val(this.value); // user will lose focus if we do a full render
	    } else {
	        this.render(); // first time
	      }
	    this.publish(this.get());
	    return this;
	  };
	
	  return TextInput;
	})(BaseComponent);
	
	;
	
	module.exports = TextInput;

/***/ },
/* 64 */
/*!**********************************!*\
  !*** ./src/TextInput/styles.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/*!*****************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/TextInput/styles.css ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-text-input {\n  width: 100%;\n}\n\n.ui-text-input-icon-wrapper {\n  position: relative;\n}\n\n.ui-text-input-icon {\n  font-size: 16px;\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 66 */
/*!**********************************!*\
  !*** ./src/TextInput/input.tmpl ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<input type='text' id='" + scope.id + "'\nclass='ui-text-input form-control'\nplaceholder='" + scope.placeholder + "'\nvalue='" + scope.get() + "'/>\n";
	};

/***/ },
/* 67 */
/*!*********************************!*\
  !*** ./src/TextInput/icon.tmpl ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-text-input-icon'>" + scope.icon + "</span>";
	};

/***/ },
/* 68 */
/*!****************************************!*\
  !*** ./src/TextInput/iconWrapper.html ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = "<div class='ui-text-input-icon-wrapper'></div>";

/***/ },
/* 69 */
/*!********************************!*\
  !*** ./src/Typeahead/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Extends PrettyTypeahead by adding:
	//
	// - support for results as objects instead of just simple values (selection value isn't just display string)
	// - option to force user to pick from dropdown or to let them type in freely also
	// - support for fixed result items
	
	// scripts
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var PrettyTypeahead = __webpack_require__(/*! ./PrettyTypeahead */ 70);
	
	var Typeahead = (function (_PrettyTypeahead) {
	  _inherits(Typeahead, _PrettyTypeahead);
	
	  function Typeahead(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Typeahead);
	
	    var _this = _possibleConstructorReturn(this, _PrettyTypeahead.call(this, el, opts));
	
	    _this.fixedResults = opts.fixedResults || [];
	    _this.results = _this.results.concat(_this.fixedResults);
	    _this.allowFreeForm = opts.allowFreeForm || false;
	    _this.displayProperty = opts.displayProperty || 'displayName';
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  Typeahead.prototype.refreshResults = function refreshResults(cb) {
	    var _this2 = this;
	
	    return _PrettyTypeahead.prototype.refreshResults.call(this, function (results) {
	      return cb(results.concat(_this2.fixedResults));
	    });
	  };
	
	  Typeahead.prototype.handleSelection = function handleSelection(selection) {
	    var runSelection = true;
	    if (selection && selection.preSelectHook) {
	      runSelection = selection.preSelectHook.apply(this, [selection]);
	    }
	
	    if (runSelection) {
	      console.log('proceed with selection', selection);
	      this.set(selection);
	    }
	  };
	
	  Typeahead.prototype.selectByIndex = function selectByIndex() {
	    if (!this.active()) {
	      return;
	    }
	
	    _PrettyTypeahead.prototype.selectByIndex.call(this);
	
	    if (this.allowFreeForm && this.resultsListView.results.length === 0) {
	      this.handleSelection(this.textInput.get());
	    }
	  };
	
	  return Typeahead;
	})(PrettyTypeahead);
	
	module.exports = Typeahead;

/***/ },
/* 70 */
/*!************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Extends BaseTypeahead by adding:
	//
	// - the concept of "active"
	// - the use of arrow keys/enter to pick from the results list
	// - blur/focus events to close/open the results list
	// - add highlights for partial matches
	// - ESC key forces blur
	// - point to click from results list and hover highlight
	// - hover highlight renders list view results on top of page instead of pushing elements down
	
	// ==================================================== //
	// use the child class `Typeahead` in your actual UI's! //
	// ==================================================== //
	
	// less
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.less */ 71);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseTypeahead = __webpack_require__(/*! ./BaseTypeahead */ 73);
	
	var HIGHLIGHT_CLASS = 'ui-typeahead-highlight';
	
	var PrettyTypeahead = (function (_BaseTypeahead) {
	  _inherits(PrettyTypeahead, _BaseTypeahead);
	
	  function PrettyTypeahead(el) {
	    var _this;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, PrettyTypeahead);
	
	    opts.renderItem = function (item) {
	      return _this.renderItem(item);
	    };
	
	    return _this = _possibleConstructorReturn(this, _BaseTypeahead.call(this, el, opts));
	  }
	
	  PrettyTypeahead.prototype.render = function render() {
	    _BaseTypeahead.prototype.render.call(this);
	
	    // layer on our new behavior - hiding/showing results when user blurs/focuses
	    this.resultsListView.$el.hide();
	    this.attachFocusEvents();
	
	    // we also want to let you pick results from just the keyboard
	    this.attachKeyEvents();
	
	    return this.$el.html();
	  };
	
	  PrettyTypeahead.prototype.active = function active(v) {
	    if (typeof v === 'boolean') {
	      this.isActive = v;
	
	      if (this.isActive) {
	        this.onActive();
	      } else {
	        this.onInactive();
	      }
	    }
	
	    return this.isActive;
	  };
	
	  PrettyTypeahead.prototype.onActive = function onActive() {
	    this.resultsListView.$el.show();
	  };
	
	  PrettyTypeahead.prototype.onInactive = function onInactive() {
	    this.resultsListView.$el.hide();
	    delete this.highlightIndex;
	  };
	
	  PrettyTypeahead.prototype.attachFocusEvents = function attachFocusEvents() {
	    var _this2 = this;
	
	    this.textInput.$el.find('input').on('focus', function () {
	      _this2.active(true);
	    });
	
	    $(document).click(function (evt) {
	      if (_this2.$el.find($(evt.target)).size() === 0 && $(evt.target)[0].tagName !== 'input') {
	        _this2.active(false);
	        _this2.textInput.$el.find('input').blur();
	      }
	    });
	  };
	
	  PrettyTypeahead.prototype.renderItem = function renderItem(item) {
	    // bold the matching part
	    var originalText = String(this.getDisplayValue(item));
	    var searchTerm = this.textInput.get() || '';
	    var matchIndex = -1;
	
	    if (searchTerm.length !== 0) {
	      matchIndex = originalText.indexOf(searchTerm);
	    }
	
	    if (matchIndex >= 0) {
	      var start = matchIndex;
	      var end = start + searchTerm.length;
	
	      item = originalText.substring(0, start);
	      item += '<b>';
	      item += originalText.substring(start, end);
	      item += '</b>';
	
	      if (end < originalText.length) {
	        item += originalText.substring(end);
	      }
	    }
	
	    return this.getDisplayValue(item);
	  };
	
	  PrettyTypeahead.prototype.attachKeyEvents = function attachKeyEvents() {
	    var _this3 = this;
	
	    this.highlightIndex;
	
	    $(document).on('keydown', function (evt) {
	      if (!_this3.active()) {
	        return;
	      }
	
	      switch (evt.which) {
	        case _this3.keyEvents.UP:
	          _this3.decrementHighlight();
	          evt.preventDefault();
	          break;
	
	        case _this3.keyEvents.DOWN:
	          _this3.incrementHighlight();
	          evt.preventDefault();
	          break;
	
	        case _this3.keyEvents.ENTER:
	          _this3.selectByIndex();
	          evt.preventDefault();
	
	        case _this3.keyEvents.ESC:
	          _this3.active(false);
	          break;
	
	        default:
	          break;
	      }
	    });
	  };
	
	  PrettyTypeahead.prototype.selectByIndex = function selectByIndex() {
	    if (this.active()) {
	      this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).click();
	      this.textInput.$el.find('input').blur();
	    }
	  };
	
	  PrettyTypeahead.prototype.incrementHighlight = function incrementHighlight() {
	    this.highlightIndex = typeof this.highlightIndex === 'undefined' ? 0 : this.highlightIndex + 1;
	    this.normalizeHighlightIndex();
	    this.renderHighlight();
	  };
	
	  PrettyTypeahead.prototype.decrementHighlight = function decrementHighlight() {
	    this.highlightIndex = typeof this.highlightIndex === 'undefined' ? this.resultsListView.$el.find('li').size() - 1 : this.highlightIndex - 1;
	    this.normalizeHighlightIndex();
	    this.renderHighlight();
	  };
	
	  PrettyTypeahead.prototype.normalizeHighlightIndex = function normalizeHighlightIndex() {
	    var length = this.resultsListView.$el.find('li').size();
	    this.highlightIndex = (this.highlightIndex + length) % length;
	  };
	
	  PrettyTypeahead.prototype.renderHighlight = function renderHighlight() {
	    // remove the highlight
	    this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).removeClass(HIGHLIGHT_CLASS);
	
	    // add it to the right index
	    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass(HIGHLIGHT_CLASS);
	  };
	
	  return PrettyTypeahead;
	})(BaseTypeahead);
	
	module.exports = PrettyTypeahead;

/***/ },
/* 71 */
/*!***************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/styles.less ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./styles.less */ 72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./styles.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./styles.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/*!**********************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./src/Typeahead/PrettyTypeahead/styles.less ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-typeahead {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  position: relative;\n}\n.ui-typeahead .results-list-container {\n  z-index: 1000;\n  box-shadow: gray 1px 1px 5px;\n  background-color: white;\n  position: absolute;\n  width: 100%;\n}\n.ui-typeahead .results-list-container ul {\n  list-style: none;\n  padding-left: 0;\n}\n.ui-typeahead .results-list-container li {\n  padding: 10px;\n  border-bottom: solid #F3F3F3 1px;\n}\n.ui-typeahead .results-list-container li:hover {\n  background-color: #00516f;\n  color: white;\n  cursor: pointer;\n}\n.ui-typeahead .results-list-container .ui-typeahead-highlight {\n  background-color: #00516f;\n  color: white;\n}\n", ""]);
	
	// exports


/***/ },
/* 73 */
/*!**************************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/BaseTypeahead/index.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// handle just the absolute core behavior of a typeahead
	//
	//   1. a text input
	//   2. a list view of results based on current text
	
	// ============================================================== //
	// its recommended using the child class `Typeahead` in your UI's //
	// ============================================================== //
	
	// html
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var containerHTML = __webpack_require__(/*! ./baseTypeahead.html */ 74);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../../../BaseComponent */ 33);
	var $ = __webpack_require__(/*! jquery */ 1);
	var TextInput = __webpack_require__(/*! ../../../TextInput */ 63);
	var ListView = __webpack_require__(/*! ../../../ListView */ 45);
	var assert = __webpack_require__(/*! ../../../assert.js */ 7);
	
	var BaseTypeahead = (function (_BaseComponent) {
	  _inherits(BaseTypeahead, _BaseComponent);
	
	  function BaseTypeahead(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, BaseTypeahead);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));
	
	    Object.assign(_this, {
	      fetch: opts.fetch,
	      results: []
	    });
	    assert(typeof _this.fetch === 'function');
	
	    _this.$el.append(containerHTML);
	    _this.textInput = new TextInput(_this.$el.find('.input-container'), opts.textInputOpts || {});
	    _this.resultsListView = new ListView(_this.$el.find('.results-list-container'), {
	      fetch: function fetch(cb) {
	        _this.refreshResults(cb);
	      },
	      renderItem: opts.renderItem || null
	    });
	
	    // when an item is picked from the list view:
	    _this.resultsListView.subscribe(function (evt) {
	      if (evt === 'refresh') {
	        return;
	      }
	
	      // update text input with this value, set typeahead internal value
	      _this.handleSelection(evt);
	      _this.textInput.$el.find('input').focus();
	    });
	
	    // when text input gets a new value:
	    _this.textInput.subscribe(function (term) {
	      // re render results list
	      _this.resultsListView.refresh();
	    });
	    return _this;
	  }
	
	  BaseTypeahead.prototype.handleSelection = function handleSelection(selection) {
	    this.set(selection);
	  };
	
	  BaseTypeahead.prototype.getDisplayValue = function getDisplayValue(item) {
	    if ($.isPlainObject(item)) {
	      item = item[this.displayProperty];
	    }
	    return item;
	  };
	
	  BaseTypeahead.prototype.set = function set(v) {
	    this.textInput.set(this.getDisplayValue(v));
	    this.value = v;
	    this.publish(this.get());
	    return this;
	  };
	
	  BaseTypeahead.prototype.render = function render() {
	    this.textInput.render();
	    this.resultsListView.refresh();
	    return this.$el.html();
	  };
	
	  BaseTypeahead.prototype.refreshResults = function refreshResults(cb) {
	    var _this2 = this;
	
	    this.fetch(this.textInput.get(), function (results) {
	      _this2.results = results;
	      cb(results);
	    });
	  };
	
	  return BaseTypeahead;
	})(BaseComponent);
	
	module.exports = BaseTypeahead;

/***/ },
/* 74 */
/*!************************************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/BaseTypeahead/baseTypeahead.html ***!
  \************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class='ui-typeahead'>\n  <div class='input-container'></div>\n  <div class='results-list-container'></div>\n</div>\n\n";

/***/ },
/* 75 */
/*!****************************************!*\
  !*** ./src/LocationTypeahead/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// # Location Search Typeahead
	//
	//   Extends `Typeahead` class to:
	//
	//   - add a "use my current location" icon to text input
	//   - add fixed result that triggers "use my current location" on click
	
	// styles
	__webpack_require__(/*! ./styles.css */ 76);
	
	// html
	var currentLocationTemplate = __webpack_require__(/*! ./useMyCurrentLocation.tmpl */ 78);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var Typeahead = __webpack_require__(/*! ../Typeahead */ 69);
	var FragFactory = __webpack_require__(/*! ../BaseFragmentFactory */ 6);
	var CurrentLocation = __webpack_require__(/*! ../CurrentLocation */ 36);
	
	var LocationTypeahead = (function (_Typeahead) {
	  _inherits(LocationTypeahead, _Typeahead);
	
	  function LocationTypeahead(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, LocationTypeahead);
	
	    // define the "current location" icon DOM fragment
	    var iconFactory = new FragFactory({
	      render: function render(data) {
	        data.displayValue = data.name === 'listItem' ? 'inline' : 'none';
	        return currentLocationTemplate(data);
	      },
	
	      controller: function controller(data) {
	        var currentLocationIcon = new CurrentLocation('.ui-current-location-' + data.name, {
	          geolocationAPI: opts.geolocationAPI
	        });
	
	        currentLocationIcon.subscribe(function (event) {
	          if (event.isLocation) {
	            _this.set(event);
	            _this.textInput.$input.val('Your current location'); // just for display
	          }
	        });
	        currentLocationIcon.render();
	      }
	    });
	
	    //Ensure we have an opts.textInputOpts object
	    opts.textInputOpts = opts.textInputOpts || {};
	
	    // setup the input icon to be a "use current location" component
	    Object.assign(opts.textInputOpts, {
	      iconClearsValue: false,
	      icon: iconFactory.make({
	        name: 'icon'
	      })
	    });
	
	    // setup "current location" fixed result
	    opts.fixedResults = (opts.fixedResults || []).concat([{
	      useMyCurrentLocation: true,
	      preSelectHook: function preSelectHook(item) {
	        $('.ui-current-location-listItem').click(); // trigger 'use my location' icon
	        return false; // don't run normal selection behavior
	      }
	    }]);
	
	    var _this = _possibleConstructorReturn(this, _Typeahead.call(this, el, opts));
	
	    _this.iconFactory = iconFactory;
	    _this.$el.addClass('ui-location-typeahead');
	    return _this;
	  }
	
	  LocationTypeahead.prototype.renderItem = function renderItem(item) {
	    if (item && item.useMyCurrentLocation) {
	      return this.iconFactory.make({
	        name: 'listItem'
	      });
	    } else {
	      return _Typeahead.prototype.renderItem.call(this, item);
	    }
	  };
	
	  return LocationTypeahead;
	})(Typeahead);
	
	module.exports = LocationTypeahead;

/***/ },
/* 76 */
/*!******************************************!*\
  !*** ./src/LocationTypeahead/styles.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/*!*************************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/LocationTypeahead/styles.css ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-curr-loc {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n}\n\n.ui-location-typeahead .ui-text-input-icon {\n  right: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 78 */
/*!*********************************************************!*\
  !*** ./src/LocationTypeahead/useMyCurrentLocation.tmpl ***!
  \*********************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-current-location-" + scope.name + " ui-curr-loc'></span>\n<span style='display: " + scope.displayValue + " '>Use my current location</span>\n";
	};

/***/ },
/* 79 */
/*!****************************************!*\
  !*** ./src/SentenceGenerator/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//  @title: Sentence Generator
	//  @author: Naveed Nadjmabadi
	//  @description: recieve a template config, and a data object. Render the parsed String.
	//
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 80);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var dotty = __webpack_require__(/*! dotty */ 82);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 33);
	
	var SentenceGenerator = (function (_BaseComponent) {
	  _inherits(SentenceGenerator, _BaseComponent);
	
	  /*  @constructor
	  **  @param {string} el   - The dom element to attach to
	  **  @param {Object} opts - The options passed in to configure this component
	  **  @param {Array} opts.structure - The sentence 'fragments' to be assembled. Each index
	  **    is an Object that takes at least 3 properties:
	  **
	  **    {
	  **      fragment: {String}  - part of the sentence with a ${} where the value should be interpolated
	  **      required: {Boolean} - whether the fragment is necessary for the string to exist
	  **      default: {String}   - a fallback string in case the value inside ${} is falsey
	  **      ordinality: {Number} [optional] - the order of the sentence fragment in the entire string
	  **    }
	  **
	  **  @param {Boolean} [optional] opts.ordinality - whether the fragment objects have explicit arrangement
	  **  @param {String} [optional] opts.delimiter - a character to put inbetween each sentence fragment
	  **  @param {Regex} [optional] opts.regex - the pattern to determine where string interpolation takes place
	  */
	
	  function SentenceGenerator(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, SentenceGenerator);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    Object.assign(_this, {
	      structure: opts.structure || [],
	      ordinality: opts.ordinality || false,
	      delimiter: opts.delimiter || null,
	      regex: opts.regex || /\$\{(?:\s*)([\S]+?)(?:\s*)\}/g,
	      value: ''
	    });
	
	    // sort the array by the ordinality of sentence fragments
	    if (_this.ordinality) {
	      _this.structure = opts.structure.sort(function (a, b) {
	        return a - b;
	      });
	    }
	    return _this;
	  }
	
	  SentenceGenerator.prototype.get = function get() {
	    return this.value;
	  };
	
	  /*
	  ** @method
	  ** @param {Object} data - An object containing the values to interpolate
	  **
	  */
	
	  SentenceGenerator.prototype.set = function set(data) {
	    this.value = typeof data !== 'undefined' ? data : {};
	    this.render();
	  };
	
	  SentenceGenerator.prototype.render = function render() {
	    var templateString = '';
	    var regex = this.regex;
	
	    for (var i = 0; i < this.structure.length; i++) {
	
	      // get the properties of each object
	      var segment = this.structure[i];
	      var fallback = segment.default;
	      var required = segment.required;
	      var fragment = segment.fragment;
	
	      // search and replace with the data values
	      var matches = undefined;
	      while ((matches = regex.exec(fragment)) !== null) {
	        var matchStr = matches[0];
	        var match = matches[1];
	
	        if (dotty.exists(this, match)) {
	          fragment = fragment.replace(matchStr, dotty.get(this, match));
	        } else if (fallback) {
	          fragment = fallback;
	        } else if (!required) {
	          fragment = null;
	        }
	
	        // the data object passed in is missing critical data. Fail softly.
	        else {
	            this.$el.html('<span></span>');
	            return;
	          }
	      }
	
	      // skip this fragment because theres no data :-(
	      if (fragment === null) {
	        continue;
	      }
	
	      templateString += fragment;
	
	      // optional inclusion of the delimiter
	      if (this.delimiter && i < this.structure.length - 1) {
	        templateString += this.delimiter;
	      }
	    }
	
	    this.$el.html('<span>' + templateString + '</span');
	  };
	
	  return SentenceGenerator;
	})(BaseComponent);
	
	;
	
	module.exports = SentenceGenerator;

/***/ },
/* 80 */
/*!******************************************!*\
  !*** ./src/SentenceGenerator/styles.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/cssnext-loader/index.js?compress!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/*!*************************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/SentenceGenerator/styles.css ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 30)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 82 */
/*!******************************!*\
  !*** ./~/dotty/lib/index.js ***!
  \******************************/
/***/ function(module, exports) {

	//
	// Dotty makes it easy to programmatically access arbitrarily nested objects and
	// their properties.
	//
	
	//
	// `object` is an object, `path` is the path to the property you want to check
	// for existence of.
	//
	// `path` can be provided as either a `"string.separated.with.dots"` or as
	// `["an", "array"]`.
	//
	// Returns `true` if the path can be completely resolved, `false` otherwise.
	//
	
	var exists = module.exports.exists = function exists(object, path) {
	  if (typeof path === "string") {
	    path = path.split(".");
	  }
	
	  if (!(path instanceof Array) || path.length === 0) {
	    return false;
	  }
	
	  path = path.slice();
	
	  var key = path.shift();
	
	  if (typeof object !== "object" || object === null) {
	    return false;
	  }
	
	  if (path.length === 0) {
	    return Object.hasOwnProperty.apply(object, [key]);
	  } else {
	    return exists(object[key], path);
	  }
	};
	
	//
	// These arguments are the same as those for `exists`.
	//
	// The return value, however, is the property you're trying to access, or
	// `undefined` if it can't be found. This means you won't be able to tell
	// the difference between an unresolved path and an undefined property, so you 
	// should not use `get` to check for the existence of a property. Use `exists`
	// instead.
	//
	
	var get = module.exports.get = function get(object, path) {
	  if (typeof path === "string") {
	    path = path.split(".");
	  }
	
	  if (!(path instanceof Array) || path.length === 0) {
	    return;
	  }
	
	  path = path.slice();
	
	  var key = path.shift();
	
	  if (typeof object !== "object" || object === null) {
	    return;
	  }
	
	  if (path.length === 0) {
	    return object[key];
	  }
	
	  if (path.length) {
	    return get(object[key], path);
	  }
	};
	
	//
	// Arguments are similar to `exists` and `get`, with the exception that path
	// components are regexes with some special cases. If a path component is `"*"`
	// on its own, it'll be converted to `/.*/`.
	//
	// The return value is an array of values where the key path matches the
	// specified criterion. If none match, an empty array will be returned.
	//
	
	var search = module.exports.search = function search(object, path) {
	  if (typeof path === "string") {
	    path = path.split(".");
	  }
	
	  if (!(path instanceof Array) || path.length === 0) {
	    return;
	  }
	
	  path = path.slice();
	
	  var key = path.shift();
	
	  if (typeof object !== "object" || object === null) {
	    return;
	  }
	
	  if (key === "*") {
	    key = ".*";
	  }
	
	  if (typeof key === "string") {
	    key = new RegExp(key);
	  }
	
	  if (path.length === 0) {
	    return Object.keys(object).filter(key.test.bind(key)).map(function(k) { return object[k]; });
	  } else {
	    return Array.prototype.concat.apply([], Object.keys(object).filter(key.test.bind(key)).map(function(k) { return search(object[k], path); }));
	  }
	};
	
	//
	// The first two arguments for `put` are the same as `exists` and `get`.
	//
	// The third argument is a value to `put` at the `path` of the `object`.
	// Objects in the middle will be created if they don't exist, or added to if
	// they do. If a value is encountered in the middle of the path that is *not*
	// an object, it will not be overwritten.
	//
	// The return value is `true` in the case that the value was `put`
	// successfully, or `false` otherwise.
	//
	
	var put = module.exports.put = function put(object, path, value) {
	  if (typeof path === "string") {
	    path = path.split(".");
	  }
	
	  if (!(path instanceof Array) || path.length === 0) {
	    return false;
	  }
	  
	  path = path.slice();
	
	  var key = path.shift();
	
	  if (typeof object !== "object" || object === null) {
	    return false;
	  }
	
	  if (path.length === 0) {
	    object[key] = value;
	  } else {
	    if (typeof object[key] === "undefined") {
	      object[key] = {};
	    }
	
	    if (typeof object[key] !== "object" || object[key] === null) {
	      return false;
	    }
	
	    return put(object[key], path, value);
	  }
	};
	
	//
	// `remove` is like `put` in reverse!
	//
	// The return value is `true` in the case that the value existed and was removed
	// successfully, or `false` otherwise.
	//
	
	var remove = module.exports.remove = function remove(object, path, value) {
	  if (typeof path === "string") {
	    path = path.split(".");
	  }
	
	  if (!(path instanceof Array) || path.length === 0) {
	    return false;
	  }
	  
	  path = path.slice();
	
	  var key = path.shift();
	
	  if (typeof object !== "object" || object === null) {
	    return false;
	  }
	
	  if (path.length === 0) {
	    if (!Object.hasOwnProperty.call(object, key)) {
	      return false;
	    }
	
	    delete object[key];
	
	    return true;
	  } else {
	    return remove(object[key], path, value);
	  }
	};
	
	//
	// `deepKeys` creates a list of all possible key paths for a given object.
	//
	// The return value is always an array, the members of which are paths in array
	// format. If you want them in dot-notation format, do something like this:
	//
	// ```js
	// dotty.deepKeys(obj).map(function(e) {
	//   return e.join(".");
	// });
	// ```
	//
	// *Note: this will probably explode on recursive objects. Be careful.*
	//
	
	var deepKeys = module.exports.deepKeys = function deepKeys(object, prefix) {
	  if (typeof prefix === "undefined") {
	    prefix = [];
	  }
	
	  var keys = [];
	
	  for (var k in object) {
	    if (!Object.hasOwnProperty.call(object, k)) {
	      continue;
	    }
	
	    keys.push(prefix.concat([k]));
	
	    if (typeof object[k] === "object" && object[k] !== null) {
	      keys = keys.concat(deepKeys(object[k], prefix.concat([k])));
	    }
	  }
	
	  return keys;
	};


/***/ }
/******/ ]);
//# sourceMappingURL=ui.js.map
>>>>>>> JJT-1583
