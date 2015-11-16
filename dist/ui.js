var UI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var UIComponents = {
	  $: __webpack_require__(/*! jquery */ 1),
	  CurrentLocation: __webpack_require__(/*! ./CurrentLocation */ 3),
	  TextInput: __webpack_require__(/*! ./TextInput */ 14),
	  Button: __webpack_require__(/*! ./Button */ 22),
	  SingleSelect: __webpack_require__(/*! ./SingleSelect */ 26),
	  MultiSelect: __webpack_require__(/*! ./MultiSelect */ 30),
	  ListView: __webpack_require__(/*! ./ListView */ 34),
	  Typeahead: __webpack_require__(/*! ./Typeahead */ 38)
	};
	
	module.exports = UIComponents;

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./~/jquery/dist/jquery.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";function _typeof(obj){return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol?"symbol":typeof obj;} /*!
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
	 */(function(global,factory){if(( false?"undefined":_typeof(module)) === "object" && _typeof(module.exports) === "object"){ // For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports = global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);} // Pass this if window is not defined yet
	})(typeof window !== "undefined"?window:undefined,function(window,noGlobal){ // Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//
	var arr=[];var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var  // Use the correct document accordingly with window argument (sandbox)
	document=window.document,version="2.1.4", // Define a local copy of jQuery
	jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);}, // Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn = jQuery.prototype = { // The current version of jQuery being used
	jquery:version,constructor:jQuery, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num != null? // Return just the one element from the set
	num < 0?this[num + this.length]:this[num]: // Return all the elements in a clean array
	_slice.call(this);}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject = this;ret.context = this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each:function each(callback,args){return jQuery.each(this,callback,args);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i + (i < 0?len:0);return this.pushStack(j >= 0 && j < len?[this[j]]:[]);},end:function end(){return this.prevObject || this.constructor(null);}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend = jQuery.fn.extend = function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0] || {},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target === "boolean"){deep = target; // Skip the boolean and the target
	target = arguments[i] || {};i++;} // Handle case when target is a string or something (possible in deep copy)
	if((typeof target === "undefined"?"undefined":_typeof(target)) !== "object" && !jQuery.isFunction(target)){target = {};} // Extend jQuery itself if only one argument is passed
	if(i === length){target = this;i--;}for(;i < length;i++) { // Only deal with non-null/undefined values
	if((options = arguments[i]) != null){ // Extend the base object
	for(name in options) {src = target[name];copy = options[name]; // Prevent never-ending loop
	if(target === copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && jQuery.isArray(src)?src:[];}else {clone = src && jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name] = jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy !== undefined){target[name] = copy;}}}} // Return the modified object
	return target;};jQuery.extend({ // Unique for each copy of jQuery on the page
	expando:"jQuery" + (version + Math.random()).replace(/\D/g,""), // Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj) === "function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj != null && obj === obj.window;},isNumeric:function isNumeric(obj){ // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;},isPlainObject:function isPlainObject(obj){ // Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)){return false;}if(obj.constructor && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;} // If the function hasn't returned already, we're confident that
	// |obj| is a plain object, created by {} or constructed with new Object
	return true;},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj) {return false;}return true;},type:function type(obj){if(obj == null){return obj + "";} // Support: Android<4.0, iOS<6 (functionish RegExp)
	return (typeof obj === "undefined"?"undefined":_typeof(obj)) === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj === "undefined"?"undefined":_typeof(obj);}, // Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code = jQuery.trim(code);if(code){ // If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict") === 1){script = document.createElement("script");script.text = code;document.head.appendChild(script).parentNode.removeChild(script);}else { // Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}}, // Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();}, // args is for internal usage only
	each:function each(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i < length;i++) {value = callback.apply(obj[i],args);if(value === false){break;}}}else {for(i in obj) {value = callback.apply(obj[i],args);if(value === false){break;}}} // A special, fast, case for the most common use of each
	}else {if(isArray){for(;i < length;i++) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}else {for(i in obj) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}}return obj;}, // Support: Android<4.1
	trim:function trim(text){return text == null?"":(text + "").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results || [];if(arr != null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr === "string"?[arr]:arr);}else {push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr == null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j < len;j++) {first[i++] = second[j];}first.length = i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert; // Go through the array, only saving the items
	// that pass the validator function
	for(;i < length;i++) {callbackInverse = !callback(elems[i],i);if(callbackInverse !== callbackExpect){matches.push(elems[i]);}}return matches;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[]; // Go through the array, translating each of the items to their new values
	if(isArray){for(;i < length;i++) {value = callback(elems[i],i,arg);if(value != null){ret.push(value);}} // Go through every key on the object,
	}else {for(i in elems) {value = callback(elems[i],i,arg);if(value != null){ret.push(value);}}} // Flatten any nested arrays
	return concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context === "string"){tmp = fn[context];context = fn;fn = tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args = _slice.call(arguments,2);proxy = function(){return fn.apply(context || this,args.concat(_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;return proxy;},now:Date.now, // jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support}); // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object " + name + "]"] = name.toLowerCase();});function isArraylike(obj){ // Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length="length" in obj && obj.length,type=jQuery.type(obj);if(type === "function" || jQuery.isWindow(obj)){return false;}if(obj.nodeType === 1 && length){return true;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;}var Sizzle= /*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, // Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, // Instance-specific data
	expando="sizzle" + 1 * new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a === b){hasDuplicate = true;}return 0;}, // General-purpose constants
	MAX_NEGATIVE=1 << 31, // Instance methods
	hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i < len;i++) {if(list[i] === elem){return i;}}return -1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier=characterEncoding.replace("w","w#"), // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +  // Operator (capture 2)
	"*([*^$|!~]?=)" + whitespace +  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",pseudos=":(" + characterEncoding + ")(?:\\((" +  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +  // 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +  // 3. anything else (capture 2)
	".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace + "+","g"),rtrim=new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"),rcomma=new RegExp("^" + whitespace + "*," + whitespace + "*"),rcombinators=new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),rattributeQuotes=new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^" + identifier + "$"),matchExpr={"ID":new RegExp("^#(" + characterEncoding + ")"),"CLASS":new RegExp("^\\.(" + characterEncoding + ")"),"TAG":new RegExp("^(" + characterEncoding.replace("w","w*") + ")"),"ATTR":new RegExp("^" + attributes),"PSEUDO":new RegExp("^" + pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),"bool":new RegExp("^(?:" + booleans + ")$","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x" + escaped - 0x10000; // NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high !== high || escapedWhitespace?escaped:high < 0? // BMP codepoint
	String.fromCharCode(high + 0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high >> 10 | 0xD800,high & 0x3FF | 0xDC00);}, // Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();}; // Optimize for push.apply( _, NodeList )
	try{push.apply(arr = slice.call(preferredDoc.childNodes),preferredDoc.childNodes); // Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e) {push = {apply:arr.length? // Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}: // Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0; // Can't trust NodeList.length
	while(target[j++] = els[i++]) {}target.length = j - 1;}};}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType, // QSA vars
	i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument || context:preferredDoc) !== document){setDocument(context);}context = context || document;results = results || [];nodeType = context.nodeType;if(typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11){return results;}if(!seed && documentIsHTML){ // Try to shortcut find operations when possible (e.g., not under DocumentFragment)
	if(nodeType !== 11 && (match = rquickExpr.exec(selector))){ // Speed-up: Sizzle("#ID")
	if(m = match[1]){if(nodeType === 9){elem = context.getElementById(m); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document (jQuery #6963)
	if(elem && elem.parentNode){ // Handle the case where IE, Opera, and Webkit return items
	// by name instead of ID
	if(elem.id === m){results.push(elem);return results;}}else {return results;}}else { // Context is not a document
	if(context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context,elem) && elem.id === m){results.push(elem);return results;}} // Speed-up: Sizzle("TAG")
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results; // Speed-up: Sizzle(".CLASS")
	}else if((m = match[3]) && support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} // QSA path
	if(support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))){nid = old = expando;newContext = context;newSelector = nodeType !== 1 && selector; // qSA works strangely on Element-rooted queries
	// We can work around this by specifying an extra ID on the root
	// and working up from there (Thanks to Andrew Dupont for the technique)
	// IE 8 doesn't work on object elements
	if(nodeType === 1 && context.nodeName.toLowerCase() !== "object"){groups = tokenize(selector);if(old = context.getAttribute("id")){nid = old.replace(rescape,"\\$&");}else {context.setAttribute("id",nid);}nid = "[id='" + nid + "'] ";i = groups.length;while(i--) {groups[i] = nid + toSelector(groups[i]);}newContext = rsibling.test(selector) && testContext(context.parentNode) || context;newSelector = groups.join(",");}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError) {}finally {if(!old){context.removeAttribute("id");}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key + " ") > Expr.cacheLength){ // Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key + " "] = value;}return cache;} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando] = true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e) {return false;}finally { // Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);} // release memory in IE
	div = null;}} /**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--) {Expr.attrHandle[arr[i]] = handler;}} /**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b && a,diff=cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur = cur.nextSibling) {if(cur === b){return -1;}}}return a?1:-1;} /**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === type;};} /**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name === "input" || name === "button") && elem.type === type;};} /**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument = +argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--) {if(seed[j = matchIndexes[i]]){seed[j] = !(matches[j] = seed[j]);}}});});} /**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context && typeof context.getElementsByTagName !== "undefined" && context;} // Expose support vars for convenience
	support = Sizzle.support = {}; /**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML = Sizzle.isXML = function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem && (elem.ownerDocument || elem).documentElement;return documentElement?documentElement.nodeName !== "HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument = Sizzle.setDocument = function(node){var hasCompare,parent,doc=node?node.ownerDocument || node:preferredDoc; // If no document and documentElement is available, return
	if(doc === document || doc.nodeType !== 9 || !doc.documentElement){return document;} // Set our document
	document = doc;docElem = doc.documentElement;parent = doc.defaultView; // Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if(parent && parent !== parent.top){ // IE11 does not have attachEvent, so all must suffer
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}} /* Support tests
		---------------------------------------------------------------------- */documentIsHTML = !isXML(doc); /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function(div){div.className = "i";return !div.getAttribute("className");}); /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function(div){div.appendChild(doc.createComment(""));return !div.getElementsByTagName("*").length;}); // Support: IE<9
	support.getElementsByClassName = rnative.test(doc.getElementsByClassName); // Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function(div){docElem.appendChild(div).id = expando;return !doc.getElementsByName || !doc.getElementsByName(expando).length;}); // ID find and filter
	if(support.getById){Expr.find["ID"] = function(id,context){if(typeof context.getElementById !== "undefined" && documentIsHTML){var m=context.getElementById(id); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	return m && m.parentNode?[m]:[];}};Expr.filter["ID"] = function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id") === attrId;};};}else { // Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"] = function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");return node && node.value === attrId;};};} // Tag
	Expr.find["TAG"] = support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName !== "undefined"){return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag === "*"){while(elem = results[i++]) {if(elem.nodeType === 1){tmp.push(elem);}}return tmp;}return results;}; // Class
	Expr.find["CLASS"] = support.getElementsByClassName && function(className,context){if(documentIsHTML){return context.getElementsByClassName(className);}}; /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];if(support.qsa = rnative.test(doc.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");} // Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");} // Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
	if(!div.querySelectorAll("[id~=" + expando + "-]").length){rbuggyQSA.push("~=");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");} // Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#" + expando + "+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){ // Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D"); // Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch = matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")); /* Contains
		---------------------------------------------------------------------- */hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType === 9?a.documentElement:a,bup=b && b.parentNode;return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains?adown.contains(bup):a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));}:function(a,b){if(b){while(b = b.parentNode) {if(b === a){return true;}}}return false;}; /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
	sortOrder = hasCompare?function(a,b){ // Flag for duplicate removal
	if(a === b){hasDuplicate = true;return 0;} // Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition - !b.compareDocumentPosition;if(compare){return compare;} // Calculate position if both inputs belong to the same document
	compare = (a.ownerDocument || a) === (b.ownerDocument || b)?a.compareDocumentPosition(b): // Otherwise we know they are disconnected
	1; // Disconnected nodes
	if(compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare){ // Choose the first element that is related to our preferred document
	if(a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc,a)){return -1;}if(b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc,b)){return 1;} // Maintain original order
	return sortInput?indexOf(sortInput,a) - indexOf(sortInput,b):0;}return compare & 4?-1:1;}:function(a,b){ // Exit early if the nodes are identical
	if(a === b){hasDuplicate = true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Parentless nodes are either documents or disconnected
	if(!aup || !bup){return a === doc?-1:b === doc?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a) - indexOf(sortInput,b):0; // If the nodes are siblings, we can do a quick check
	}else if(aup === bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur = a;while(cur = cur.parentNode) {ap.unshift(cur);}cur = b;while(cur = cur.parentNode) {bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i] === bp[i]) {i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i] === preferredDoc?-1:bp[i] === preferredDoc?1:0;};return doc;};Sizzle.matches = function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector = function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument || elem) !== document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr = expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret || support.disconnectedMatch ||  // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document && elem.document.nodeType !== 11){return ret;}}catch(e) {}}return Sizzle(expr,document,null,[elem]).length > 0;};Sizzle.contains = function(context,elem){ // Set document vars if needed
	if((context.ownerDocument || context) !== document){setDocument(context);}return contains(context,elem);};Sizzle.attr = function(elem,name){ // Set document vars if needed
	if((elem.ownerDocument || elem) !== document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn && hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val !== undefined?val:support.attributes || !documentIsHTML?elem.getAttribute(name):(val = elem.getAttributeNode(name)) && val.specified?val.value:null;};Sizzle.error = function(msg){throw new Error("Syntax error, unrecognized expression: " + msg);}; /**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort = function(results){var elem,duplicates=[],j=0,i=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;sortInput = !support.sortStable && results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem = results[i++]) {if(elem === results[i]){j = duplicates.push(i);}}while(j--) {results.splice(duplicates[j],1);}} // Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;return results;}; /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText = Sizzle.getText = function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	while(node = elem[i++]) { // Do not traverse comment nodes
	ret += getText(node);}}else if(nodeType === 1 || nodeType === 9 || nodeType === 11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent === "string"){return elem.textContent;}else { // Traverse its children
	for(elem = elem.firstChild;elem;elem = elem.nextSibling) {ret += getText(elem);}}}else if(nodeType === 3 || nodeType === 4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr = Sizzle.selectors = { // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1] = match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3] = (match[3] || match[4] || match[5] || "").replace(runescape,funescape);if(match[2] === "~="){match[3] = " " + match[3] + " ";}return match.slice(0,4);},"CHILD":function CHILD(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1] = match[1].toLowerCase();if(match[1].slice(0,3) === "nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4] = +(match[4]?match[5] + (match[6] || 1):2 * (match[3] === "even" || match[3] === "odd"));match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6] && match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[3]){match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
	}else if(unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
	excess = tokenize(unquoted,true)) && ( // advance to the next closing parenthesis
	excess = unquoted.indexOf(")",unquoted.length - excess) - unquoted.length)){ // excess is a negative index
	match[0] = match[0].slice(0,excess);match[2] = unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector === "*"?function(){return true;}:function(elem){return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className + " "];return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className,function(elem){return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result == null){return operator === "!=";}if(!operator){return true;}result += "";return operator === "="?result === check:operator === "!="?result !== check:operator === "^="?check && result.indexOf(check) === 0:operator === "*="?check && result.indexOf(check) > -1:operator === "$="?check && result.slice(-check.length) === check:operator === "~="?(" " + result.replace(rwhitespace," ") + " ").indexOf(check) > -1:operator === "|="?result === check || result.slice(0,check.length + 1) === check + "-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3) !== "nth",forward=type.slice(-4) !== "last",ofType=what === "of-type";return first === 1 && last === 0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple !== forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType && elem.nodeName.toLowerCase(),useCache=!xml && !ofType;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir) {node = elem;while(node = node[dir]) {if(ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start = dir = type === "only" && !start && "nextSibling";}return true;}start = [forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward && useCache){ // Seek `elem` from a previously-cached index
	outerCache = parent[expando] || (parent[expando] = {});cache = outerCache[type] || [];nodeIndex = cache[0] === dirruns && cache[1];diff = cache[0] === dirruns && cache[2];node = nodeIndex && parent.childNodes[nodeIndex];while(node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
	diff = nodeIndex = 0) || start.pop()) { // When found, cache indexes on `parent` and break
	if(node.nodeType === 1 && ++diff && node === elem){outerCache[type] = [dirruns,nodeIndex,diff];break;}} // Use previously-cached element index if available
	}else if(useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns){diff = cache[1]; // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
	}else { // Use the same loop as above to seek `elem` from the start
	while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {if((ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1) && ++diff){ // Cache the index of each encountered element
	if(useCache){(node[expando] || (node[expando] = {}))[type] = [dirruns,diff];}if(node === elem){break;}}}} // Incorporate the offset, then check against cycle size
	diff -= last;return diff === first || diff % first === 0 && diff / first >= 0;}};},"PSEUDO":function PSEUDO(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length > 1){args = [pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--) {idx = indexOf(seed,matched[i]);seed[idx] = !(matches[idx] = matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--) {if(elem = unmatched[i]){seed[i] = !(matches[i] = elem);}}}):function(elem,context,xml){input[0] = elem;matcher(input,null,xml,results); // Don't keep the element (issue #299)
	input[0] = null;return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length > 0;};}),"contains":markFunction(function(text){text = text.replace(runescape,funescape);return function(elem){return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifier
	if(!ridentifier.test(lang || "")){Sizzle.error("unsupported lang: " + lang);}lang = lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang = documentIsHTML?elem.lang:elem.getAttribute("xml:lang") || elem.getAttribute("lang")){elemLang = elemLang.toLowerCase();return elemLang === lang || elemLang.indexOf(lang + "-") === 0;}}while((elem = elem.parentNode) && elem.nodeType === 1);return false;};}), // Miscellaneous
	"target":function target(elem){var hash=window.location && window.location.hash;return hash && hash.slice(1) === elem.id;},"root":function root(elem){return elem === docElem;},"focus":function focus(elem){return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);}, // Boolean properties
	"enabled":function enabled(elem){return elem.disabled === false;},"disabled":function disabled(elem){return elem.disabled === true;},"checked":function checked(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;},"selected":function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected === true;}, // Contents
	"empty":function empty(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem = elem.firstChild;elem;elem = elem.nextSibling) {if(elem.nodeType < 6){return false;}}return true;},"parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === "button" || name === "button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length - 1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument < 0?argument + length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i < length;i += 2) {matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i < length;i += 2) {matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument < 0?argument + length:argument;for(;--i >= 0;) {matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument < 0?argument + length:argument;for(;++i < length;) {matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}) {Expr.pseudos[i] = createInputPseudo(i);}for(i in {submit:true,reset:true}) {Expr.pseudos[i] = createButtonPseudo(i);} // Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype = Expr.filters = Expr.pseudos;Expr.setFilters = new setFilters();tokenize = Sizzle.tokenize = function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector + " "];if(cached){return parseOnly?0:cached.slice(0);}soFar = selector;groups = [];preFilters = Expr.preFilter;while(soFar) { // Comma and first run
	if(!matched || (match = rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar = soFar.slice(match[0].length) || soFar;}groups.push(tokens = []);}matched = false; // Combinators
	if(match = rcombinators.exec(soFar)){matched = match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar = soFar.slice(matched.length);} // Filters
	for(type in Expr.filter) {if((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))){matched = match.shift();tokens.push({value:matched,type:type,matches:match});soFar = soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i < len;i++) {selector += tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base && dir === "parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
	if(xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){outerCache = elem[expando] || (elem[expando] = {});if((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName){ // Assign to newCache so results back-propagate to previous elements
	return newCache[2] = oldCache[2];}else { // Reuse newcache so results back-propagate to previous elements
	outerCache[dir] = newCache; // A match means we're done; a fail means we have to keep checking
	if(newCache[2] = matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length > 1?function(elem,context,xml){var i=matchers.length;while(i--) {if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i < len;i++) {Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map != null;for(;i < len;i++) {if(elem = unmatched[i]){if(!filter || filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter && !postFilter[expando]){postFilter = setMatcher(postFilter);}if(postFinder && !postFinder[expando]){postFinder = setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed || multipleContexts(selector || "*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter && (seed || !selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder || (seed?preFilter:preexisting || postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp = condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i = temp.length;while(i--) {if(elem = temp[i]){matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);}}}if(seed){if(postFinder || preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp = [];i = matcherOut.length;while(i--) {if(elem = matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i] = elem);}}postFinder(null,matcherOut = [],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i = matcherOut.length;while(i--) {if((elem = matcherOut[i]) && (temp = postFinder?indexOf(seed,elem):preMap[i]) > -1){seed[temp] = !(results[temp] = elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut = condense(matcherOut === results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative || Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem === checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem) > -1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml)); // Avoid hanging onto element (issue #299)
	checkContext = null;return ret;}];for(;i < len;i++) {if(matcher = Expr.relative[tokens[i].type]){matchers = [addCombinator(elementMatcher(matchers),matcher)];}else {matcher = Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j = ++i;for(;j < len;j++) {if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i > 1 && elementMatcher(matchers),i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i - 1).concat({value:tokens[i - 2].type === " "?"*":""})).replace(rtrim,"$1"),matcher,i < j && matcherFromTokens(tokens.slice(i,j)),j < len && matcherFromTokens(tokens = tokens.slice(j)),j < len && toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length > 0,byElement=elementMatchers.length > 0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed && [],setMatched=[],contextBackup=outermostContext, // We must always have either seed elements or outermost context
	elems=seed || byElement && Expr.find["TAG"]("*",outermost), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns += contextBackup == null?1:Math.random() || 0.1,len=elems.length;if(outermost){outermostContext = context !== document && context;} // Add elements passing elementMatchers directly to results
	// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i !== len && (elem = elems[i]) != null;i++) {if(byElement && elem){j = 0;while(matcher = elementMatchers[j++]) {if(matcher(elem,context,xml)){results.push(elem);break;}}if(outermost){dirruns = dirrunsUnique;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem = !matcher && elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // Apply set filters to unmatched elements
	matchedCount += i;if(bySet && i !== matchedCount){j = 0;while(matcher = setMatchers[j++]) {matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount > 0){while(i--) {if(!(unmatched[i] || setMatched[i])){setMatched[i] = pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched = condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns = dirrunsUnique;outermostContext = contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile = Sizzle.compile = function(selector,match /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector + " "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!match){match = tokenize(selector);}i = match.length;while(i--) {cached = matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached = compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); // Save selector and tokenization
	cached.selector = selector;}return cached;}; /**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select = Sizzle.select = function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector === "function" && selector,match=!seed && tokenize(selector = compiled.selector || selector);results = results || []; // Try to minimize operations if there is no seed and only one group
	if(match.length === 1){ // Take a shortcut and set the context if the root selector is an ID
	tokens = match[0] = match[0].slice(0);if(tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]){context = (Expr.find["ID"](token.matches[0].replace(runescape,funescape),context) || [])[0];if(!context){return results; // Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context = context.parentNode;}selector = selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i = matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--) {token = tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type = token.type]){break;}if(find = Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed = find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector = seed.length && toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}} // Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled || compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector) && testContext(context.parentNode) || context);return results;}; // One-time assignments
	// Sort stability
	support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate; // Initialize against the default document
	setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function(div1){ // Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div")) & 1;}); // Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML = "<a href='#'></a>";return div.firstChild.getAttribute("href") === "#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase() === "type"?1:2);}});} // Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes || !assert(function(div){div.innerHTML = "<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value") === "";})){addHandle("value",function(elem,name,isXML){if(!isXML && elem.nodeName.toLowerCase() === "input"){return elem.defaultValue;}});} // Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled") == null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name] === true?name.toLowerCase():(val = elem.getAttributeNode(name)) && val.specified?val.value:null;}});}return Sizzle;})(window);jQuery.find = Sizzle;jQuery.expr = Sizzle.selectors;jQuery.expr[":"] = jQuery.expr.pseudos;jQuery.unique = Sizzle.uniqueSort;jQuery.text = Sizzle.getText;jQuery.isXMLDoc = Sizzle.isXML;jQuery.contains = Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){ /* jshint -W018 */return !!qualifier.call(elem,i,elem) !== not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem === qualifier !== not;});}if(typeof qualifier === "string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier = jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem) >= 0 !== not;});}jQuery.filter = function(expr,elems,not){var elem=elems[0];if(not){expr = ":not(" + expr + ")";}return elems.length === 1 && elem.nodeType === 1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType === 1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector !== "string"){return this.pushStack(jQuery(selector).filter(function(){for(i = 0;i < len;i++) {if(jQuery.contains(self[i],this)){return true;}}}));}for(i = 0;i < len;i++) {jQuery.find(selector,self[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret = this.pushStack(len > 1?jQuery.unique(ret):ret);ret.selector = this.selector?this.selector + " " + selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector || [],false));},not:function not(selector){return this.pushStack(winnow(this,selector || [],true));},is:function is(selector){return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector === "string" && rneedsContext.test(selector)?jQuery(selector):selector || [],false).length;}}); // Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init = function(selector,context){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Handle HTML strings
	if(typeof selector === "string"){if(selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match = [null,selector,null];}else {match = rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match && (match[1] || !context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context = context instanceof jQuery?context[0]:context; // Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context && context.nodeType?context.ownerDocument || context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1]) && jQuery.isPlainObject(context)){for(match in context) { // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem = document.getElementById(match[2]); // Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem && elem.parentNode){ // Inject the element directly into the jQuery object
	this.length = 1;this[0] = elem;}this.context = document;this.selector = selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context || context.jquery){return (context || rootjQuery).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context = this[0] = selector;this.length = 1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready !== "undefined"?rootjQuery.ready(selector): // Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector !== undefined){this.selector = selector.selector;this.context = selector.context;}return jQuery.makeArray(selector,this);}; // Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn; // Initialize central reference
	rootjQuery = jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function dir(elem,_dir,until){var matched=[],truncate=until !== undefined;while((elem = elem[_dir]) && elem.nodeType !== 9) {if(elem.nodeType === 1){if(truncate && jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;},sibling:function sibling(n,elem){var matched=[];for(;n;n = n.nextSibling) {if(n.nodeType === 1 && n !== elem){matched.push(n);}}return matched;}});jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i < l;i++) {if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors) || typeof selectors !== "string"?jQuery(selectors,context || this.context):0;for(;i < l;i++) {for(cur = this[i];cur && cur !== context;cur = cur.parentNode) { // Always skip document fragments
	if(cur.nodeType < 11 && (pos?pos.index(cur) > -1: // Don't pass non-elements to Sizzle
	cur.nodeType === 1 && jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length > 1?jQuery.unique(matched):matched);}, // Determine the position of an element within the set
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0] && this[0].parentNode?this.first().prevAll().length:-1;} // Index in selector
	if(typeof elem === "string"){return indexOf.call(jQuery(elem),this[0]);} // Locate the position of the desired element
	return indexOf.call(this, // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector == null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur = cur[dir]) && cur.nodeType !== 1) {}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent && parent.nodeType !== 11?parent:null;},parents:function parents(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function prevAll(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function siblings(elem){return jQuery.sibling((elem.parentNode || {}).firstChild,elem);},children:function children(elem){return jQuery.sibling(elem.firstChild);},contents:function contents(elem){return elem.contentDocument || jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name] = function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5) !== "Until"){selector = until;}if(selector && typeof selector === "string"){matched = jQuery.filter(selector,matched);}if(this.length > 1){ // Remove duplicates
	if(!guaranteedUnique[name]){jQuery.unique(matched);} // Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g; // String to Object options format cache
	var optionsCache={}; // Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options){var object=optionsCache[options] = {};jQuery.each(options.match(rnotwhite) || [],function(_,flag){object[flag] = true;});return object;} /*
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
	 */jQuery.Callbacks = function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string"?optionsCache[options] || createOptions(options):jQuery.extend({},options);var  // Last fire value (for non-forgettable lists)
	memory, // Flag to know if list was already fired
	_fired, // Flag to know if list is currently firing
	firing, // First callback to fire (used internally by add and fireWith)
	firingStart, // End of the loop when firing
	firingLength, // Index of currently firing callback (modified by remove if needed)
	firingIndex, // Actual callback list
	list=[], // Stack of fire calls for repeatable lists
	stack=!options.once && [], // Fire callbacks
	fire=function fire(data){memory = options.memory && data;_fired = true;firingIndex = firingStart || 0;firingStart = 0;firingLength = list.length;firing = true;for(;list && firingIndex < firingLength;firingIndex++) {if(list[firingIndex].apply(data[0],data[1]) === false && options.stopOnFalse){memory = false; // To prevent further calls using add
	break;}}firing = false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list = [];}else {self.disable();}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){ // First, we save the current length
	var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type === "function"){if(!options.unique || !self.has(arg)){list.push(arg);}}else if(arg && arg.length && type !== "string"){ // Inspect recursively
	add(arg);}});})(arguments); // Do we need to add the callbacks to the
	// current firing batch?
	if(firing){firingLength = list.length; // With memory, if we're not firing then
	// we should call right away
	}else if(memory){firingStart = start;fire(memory);}}return this;}, // Remove a callback from the list
	remove:function remove(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index = jQuery.inArray(arg,list,index)) > -1) {list.splice(index,1); // Handle firing indexes
	if(firing){if(index <= firingLength){firingLength--;}if(index <= firingIndex){firingIndex--;}}}});}return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list) > -1:!!(list && list.length);}, // Remove all callbacks from the list
	empty:function empty(){list = [];firingLength = 0;return this;}, // Have the list do nothing anymore
	disable:function disable(){list = stack = memory = undefined;return this;}, // Is it disabled?
	disabled:function disabled(){return !list;}, // Lock the list in its current state
	lock:function lock(){stack = undefined;if(!memory){self.disable();}return this;}, // Is it locked?
	locked:function locked(){return !stack;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(list && (!_fired || stack)){args = args || [];args = [context,args.slice?args.slice():args];if(firing){stack.push(args);}else {fire(args);}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i]) && fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn && fn.apply(this,arguments);if(returned && jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else {newDefer[tuple[0] + "With"](this === _promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns = null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj != null?jQuery.extend(obj,_promise):_promise;}},deferred={}; // Keep pipe for back-compat
	_promise.pipe = _promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	_promise[tuple[1]] = list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	_state = stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i ^ 1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]] = function(){deferred[tuple[0] + "With"](this === deferred?_promise:this,arguments);return this;};deferred[tuple[0] + "With"] = list.fireWith;}); // Make the deferred a promise
	_promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(subordinate /* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length !== 1 || subordinate && jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining === 1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i] = this;values[i] = arguments.length > 1?_slice.call(arguments):value;if(values === progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
	if(length > 1){progressValues = new Array(length);progressContexts = new Array(length);resolveContexts = new Array(length);for(;i < length;i++) {if(resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else {--remaining;}}} // If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}}); // The deferred used on DOM ready
	var readyList;jQuery.fn.ready = function(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Abort if there are pending holds or we're already ready
	if(wait === true?--jQuery.readyWait:jQuery.isReady){return;} // Remember that the DOM is ready
	jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait !== true && --jQuery.readyWait > 0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}}); /**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);jQuery.ready();}jQuery.ready.promise = function(obj){if(!readyList){readyList = jQuery.Deferred(); // Catch cases where $(document).ready() is called after the browser event has already occurred.
	// We once tried to use readyState "interactive" here, but it caused issues like the one
	// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
	if(document.readyState === "complete"){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	setTimeout(jQuery.ready);}else { // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed,false); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed,false);}}return readyList.promise(obj);}; // Kick off the DOM ready check even if the user does not
	jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=jQuery.access = function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key == null; // Sets many values
	if(jQuery.type(key) === "object"){chainable = true;for(i in key) {jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value !== undefined){chainable = true;if(!jQuery.isFunction(value)){raw = true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn = null; // ...except when executing function values
	}else {bulk = fn;fn = function(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i < len;i++) {fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;}; /**
	 * Determines whether an object can have data
	 */jQuery.acceptData = function(owner){ // Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType === 1 || owner.nodeType === 9 || ! +owner.nodeType;};function Data(){ // Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty(this.cache = {},0,{get:function get(){return {};}});this.expando = jQuery.expando + Data.uid++;}Data.uid = 1;Data.accepts = jQuery.acceptData;Data.prototype = {key:function key(owner){ // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return the key for a frozen object.
	if(!Data.accepts(owner)){return 0;}var descriptor={}, // Check if the owner object already has a cache key
	unlock=owner[this.expando]; // If not, create one
	if(!unlock){unlock = Data.uid++; // Secure it in a non-enumerable, non-writable property
	try{descriptor[this.expando] = {value:unlock};Object.defineProperties(owner,descriptor); // Support: Android<4
	// Fallback to a less secure definition
	}catch(e) {descriptor[this.expando] = unlock;jQuery.extend(owner,descriptor);}} // Ensure the cache object
	if(!this.cache[unlock]){this.cache[unlock] = {};}return unlock;},set:function set(owner,data,value){var prop, // There may be an unlock assigned to this node,
	// if there is no entry for this "owner", create one inline
	// and set the unlock as though an owner entry had always existed
	unlock=this.key(owner),cache=this.cache[unlock]; // Handle: [ owner, key, value ] args
	if(typeof data === "string"){cache[data] = value; // Handle: [ owner, { properties } ] args
	}else { // Fresh assignments by object are shallow copied
	if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data); // Otherwise, copy the properties one-by-one to the cache object
	}else {for(prop in data) {cache[prop] = data[prop];}}}return cache;},get:function get(owner,key){ // Either a valid cache is found, or will be created.
	// New caches will be created and the unlock returned,
	// allowing direct access to the newly created
	// empty data object. A valid owner object must be provided.
	var cache=this.cache[this.key(owner)];return key === undefined?cache:cache[key];},access:function access(owner,key,value){var stored; // In cases where either:
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
	if(key === undefined || key && typeof key === "string" && value === undefined){stored = this.get(owner,key);return stored !== undefined?stored:this.get(owner,jQuery.camelCase(key));} // [*]When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value); // Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value !== undefined?value:key;},remove:function remove(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];if(key === undefined){this.cache[unlock] = {};}else { // Support array or space separated string of keys
	if(jQuery.isArray(key)){ // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name = key.concat(key.map(jQuery.camelCase));}else {camel = jQuery.camelCase(key); // Try the string as a key before any manipulation
	if(key in cache){name = [key,camel];}else { // If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name = camel;name = name in cache?[name]:name.match(rnotwhite) || [];}}i = name.length;while(i--) {delete cache[name[i]];}}},hasData:function hasData(owner){return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});},discard:function discard(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]];}}};var data_priv=new Data();var data_user=new Data(); //	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){var name; // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data === undefined && elem.nodeType === 1){name = "data-" + key.replace(rmultiDash,"-$1").toLowerCase();data = elem.getAttribute(name);if(typeof data === "string"){try{data = data === "true"?true:data === "false"?false:data === "null"?null: // Only convert to a number if it doesn't change the string
	+data + "" === data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e) {} // Make sure we set the data so it isn't changed later
	data_user.set(elem,key,data);}else {data = undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return data_user.hasData(elem) || data_priv.hasData(elem);},data:function data(elem,name,_data){return data_user.access(elem,name,_data);},removeData:function removeData(elem,name){data_user.remove(elem,name);}, // TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data:function _data(elem,name,data){return data_priv.access(elem,name,data);},_removeData:function _removeData(elem,name){data_priv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem && elem.attributes; // Gets all values
	if(key === undefined){if(this.length){data = data_user.get(elem);if(elem.nodeType === 1 && !data_priv.get(elem,"hasDataAttrs")){i = attrs.length;while(i--) { // Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name = attrs[i].name;if(name.indexOf("data-") === 0){name = jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}data_priv.set(elem,"hasDataAttrs",true);}}return data;} // Sets multiple values
	if((typeof key === "undefined"?"undefined":_typeof(key)) === "object"){return this.each(function(){data_user.set(this,key);});}return access(this,function(value){var data,camelKey=jQuery.camelCase(key); // The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem && value === undefined){ // Attempt to get data from the cache
	// with the key as-is
	data = data_user.get(elem,key);if(data !== undefined){return data;} // Attempt to get data from the cache
	// with the key camelized
	data = data_user.get(elem,camelKey);if(data !== undefined){return data;} // Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data = dataAttr(elem,camelKey,undefined);if(data !== undefined){return data;} // We tried really hard, but the data doesn't exist.
	return;} // Set the data...
	this.each(function(){ // First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=data_user.get(this,camelKey); // For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	data_user.set(this,camelKey,value); // *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-") !== -1 && data !== undefined){data_user.set(this,key,value);}});},null,value,arguments.length > 1,null,true);},removeData:function removeData(key){return this.each(function(){data_user.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type = (type || "fx") + "queue";queue = data_priv.get(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue || jQuery.isArray(data)){queue = data_priv.access(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue || [];}},dequeue:function dequeue(elem,type){type = type || "fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn === "inprogress"){fn = queue.shift();startLength--;}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type === "fx"){queue.unshift("inprogress");} // Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength && hooks){hooks.empty.fire();}}, // Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type + "queueHooks";return data_priv.get(elem,key) || data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type + "queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type !== "string"){data = type;type = "fx";setter--;}if(arguments.length < setter){return jQuery.queue(this[0],type);}return data === undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type === "fx" && queue[0] !== "inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type || "fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type !== "string"){obj = type;type = undefined;}type = type || "fx";while(i--) {tmp = data_priv.get(elements[i],type + "queueHooks");if(tmp && tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;return jQuery.css(elem,"display") === "none" || !jQuery.contains(elem.ownerDocument,elem);};var rcheckableType=/^(?:checkbox|radio)$/i;(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input"); // Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input); // Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;})();var strundefined= true?"undefined":_typeof(undefined);support.focusinBubbles = "onfocusin" in window;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}function returnFalse(){return false;}function safeActiveElement(){try{return document.activeElement;}catch(err) {}} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event = {global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn = handler;handler = handleObjIn.handler;selector = handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid = jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events = elemData.events)){events = elemData.events = {};}if(!(eventHandle = elemData.handle)){eventHandle = elemData.handle = function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return (typeof jQuery === "undefined"?"undefined":_typeof(jQuery)) !== strundefined && jQuery.event.triggered !== e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} // Handle multiple events separated by a space
	types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;} // If event changes its type, use the special event handlers for the changed type
	special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type
	type = (selector?special.delegateType:special.bindType) || type; // Update special based on newly reset type
	special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers
	handleObj = jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector && jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers = events[type])){handlers = events[type] = [];handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false
	if(!special.setup || special.setup.call(elem,data,namespaces,eventHandle) === false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid = handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type] = true;}}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem) && data_priv.get(elem);if(!elemData || !(events = elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events) {jQuery.event.remove(elem,type + types[t],handler,selector,true);}continue;}special = jQuery.event.special[type] || {};type = (selector?special.delegateType:special.bindType) || type;handlers = events[type] || [];tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events
	origCount = j = handlers.length;while(j--) {handleObj = handlers[j];if((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount && !handlers.length){if(!special.teardown || special.teardown.call(elem,namespaces,elemData.handle) === false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){delete elemData.handle;data_priv.remove(elem,"events");}},trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem || document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur = tmp = elem = elem || document; // Don't do events on text and comment nodes
	if(elem.nodeType === 3 || elem.nodeType === 8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type + jQuery.event.triggered)){return;}if(type.indexOf(".") >= 0){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces = type.split(".");type = namespaces.shift();namespaces.sort();}ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event = event[jQuery.expando]?event:new jQuery.Event(type,(typeof event === "undefined"?"undefined":_typeof(event)) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger = onlyHandlers?2:3;event.namespace = namespaces.join(".");event.namespace_re = event.namespace?new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result = undefined;if(!event.target){event.target = elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data = data == null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special = jQuery.event.special[type] || {};if(!onlyHandlers && special.trigger && special.trigger.apply(elem,data) === false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)){bubbleType = special.delegateType || type;if(!rfocusMorph.test(bubbleType + type)){cur = cur.parentNode;}for(;cur;cur = cur.parentNode) {eventPath.push(cur);tmp = cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp === (elem.ownerDocument || document)){eventPath.push(tmp.defaultView || tmp.parentWindow || window);}} // Fire handlers on the event path
	i = 0;while((cur = eventPath[i++]) && !event.isPropagationStopped()) {event.type = i > 1?bubbleType:special.bindType || type; // jQuery handler
	handle = (data_priv.get(cur,"events") || {})[event.type] && data_priv.get(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle = ontype && cur[ontype];if(handle && handle.apply && jQuery.acceptData(cur)){event.result = handle.apply(cur,data);if(event.result === false){event.preventDefault();}}}event.type = type; // If nobody prevented the default action, do it now
	if(!onlyHandlers && !event.isDefaultPrevented()){if((!special._default || special._default.apply(eventPath.pop(),data) === false) && jQuery.acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp = elem[ontype];if(tmp){elem[ontype] = null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered = type;elem[type]();jQuery.event.triggered = undefined;if(tmp){elem[ontype] = tmp;}}}}return event.result;},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event = jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(data_priv.get(this,"events") || {})[event.type] || [],special=jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0] = event;event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch && special.preDispatch.call(this,event) === false){return;} // Determine handlers
	handlerQueue = jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i = 0;while((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {event.currentTarget = matched.elem;j = 0;while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.namespace_re || event.namespace_re.test(handleObj.namespace)){event.handleObj = handleObj;event.data = handleObj.data;ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem,args);if(ret !== undefined){if((event.result = ret) === false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target; // Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	// Avoid non-left-click bubbling in Firefox (#3861)
	if(delegateCount && cur.nodeType && (!event.button || event.type !== "click")){for(;cur !== this;cur = cur.parentNode || this) { // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.disabled !== true || event.type !== "click"){matches = [];for(i = 0;i < delegateCount;i++) {handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel = handleObj.selector + " ";if(matches[sel] === undefined){matches[sel] = handleObj.needsContext?jQuery(sel,this).index(cur) >= 0:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount < _handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which == null){event.which = original.charCode != null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX == null && original.clientX != null){eventDoc = event.target.ownerDocument || document;doc = eventDoc.documentElement;body = eventDoc.body;event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which && button !== undefined){event.which = button & 1?1:button & 2?3:button & 4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type] = fixHook = rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy = fixHook.props?this.props.concat(fixHook.props):this.props;event = new jQuery.Event(originalEvent);i = copy.length;while(i--) {prop = copy[i];event[prop] = originalEvent[prop];} // Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target = document;} // Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType === 3){event.target = event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this !== safeActiveElement() && this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this === safeActiveElement() && this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type === "checkbox" && this.click && jQuery.nodeName(this,"input")){this.click();return false;}}, // For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){ // Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result !== undefined && event.originalEvent){event.originalEvent.returnValue = event.result;}}}},simulate:function simulate(type,elem,event,bubble){ // Piggyback on a donor event to simulate a different one.
	// Fake originalEvent to avoid donor's stopPropagation, but if the
	// simulated event prevents default then we do the same on the donor.
	var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else {jQuery.event.dispatch.call(elem,e);}if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent = function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}};jQuery.Event = function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src && src.type){this.originalEvent = src;this.type = src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&  // Support: Android<4.0
	src.returnValue === false?returnTrue:returnFalse; // Event type
	}else {this.type = src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed
	this[jQuery.expando] = true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented = returnTrue;if(e && e.preventDefault){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped = returnTrue;if(e && e.stopPropagation){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped = returnTrue;if(e && e.stopImmediatePropagation){e.stopImmediatePropagation();}this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig] = {delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mousenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related || related !== target && !jQuery.contains(target,related)){event.type = handleObj.origType;ret = handleObj.handler.apply(this,arguments);event.type = fix;}return ret;}};}); // Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix] = {setup:function setup(){var doc=this.ownerDocument || this,attaches=data_priv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}data_priv.access(doc,fix,(attaches || 0) + 1);},teardown:function teardown(){var doc=this.ownerDocument || this,attaches=data_priv.access(doc,fix) - 1;if(!attaches){doc.removeEventListener(orig,handler,true);data_priv.remove(doc,fix);}else {data_priv.access(doc,fix,attaches);}}};});}jQuery.fn.extend({on:function on(types,selector,data,fn, /*INTERNAL*/one){var origFn,type; // Types can be a map of types/handlers
	if((typeof types === "undefined"?"undefined":_typeof(types)) === "object"){ // ( types-Object, selector, data )
	if(typeof selector !== "string"){ // ( types-Object, data )
	data = data || selector;selector = undefined;}for(type in types) {this.on(type,selector,data,types[type],one);}return this;}if(data == null && fn == null){ // ( types, fn )
	fn = selector;data = selector = undefined;}else if(fn == null){if(typeof selector === "string"){ // ( types, selector, fn )
	fn = data;data = undefined;}else { // ( types, data, fn )
	fn = data;data = selector;selector = undefined;}}if(fn === false){fn = returnFalse;}else if(!fn){return this;}if(one === 1){origFn = fn;fn = function(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);}return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function one(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types && types.preventDefault && types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj = types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType + "." + handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types === "undefined"?"undefined":_typeof(types)) === "object"){ // ( types-object [, selector] )
	for(type in types) {this.off(type,selector,types[type]);}return this;}if(selector === false || typeof selector === "function"){ // ( types [, fn] )
	fn = selector;selector = undefined;}if(fn === false){fn = returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, // We have to close these tags to support XHTML (#13200)
	wrapMap={ // Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}; // Support: IE9
	wrapMap.optgroup = wrapMap.option;wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;wrapMap.th = wrapMap.td; // Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table") && jQuery.nodeName(content.nodeType !== 11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type = match[1];}else {elem.removeAttribute("type");}return elem;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i < l;i++) {data_priv.set(elems[i],"globalEval",!refElements || data_priv.get(refElements[i],"globalEval"));}}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType !== 1){return;} // 1. Copy private data: events, handlers, etc.
	if(data_priv.hasData(src)){pdataOld = data_priv.access(src);pdataCur = data_priv.set(dest,pdataOld);events = pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events = {};for(type in events) {for(i = 0,l = events[type].length;i < l;i++) {jQuery.event.add(dest,type,events[type][i]);}}}} // 2. Copy user data
	if(data_user.hasData(src)){udataOld = data_user.access(src);udataCur = jQuery.extend({},udataOld);data_user.set(dest,udataCur);}}function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag || "*"):context.querySelectorAll?context.querySelectorAll(tag || "*"):[];return tag === undefined || tag && jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;} // Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName === "input" && rcheckableType.test(src.type)){dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName === "input" || nodeName === "textarea"){dest.defaultValue = src.defaultValue;}}jQuery.extend({clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem); // Fix IE cloning issues
	if(!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements = getAll(clone);srcElements = getAll(elem);for(i = 0,l = srcElements.length;i < l;i++) {fixInput(srcElements[i],destElements[i]);}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements = srcElements || getAll(elem);destElements = destElements || getAll(clone);for(i = 0,l = srcElements.length;i < l;i++) {cloneCopyEvent(srcElements[i],destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements = getAll(clone,"script");if(destElements.length > 0){setGlobalEval(destElements,!inPage && getAll(elem,"script"));} // Return the cloned set
	return clone;},buildFragment:function buildFragment(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i < l;i++) {elem = elems[i];if(elem || elem === 0){ // Add nodes directly
	if(jQuery.type(elem) === "object"){ // Support: QtWebKit, PhantomJS
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag = (rtagName.exec(elem) || ["",""])[1].toLowerCase();wrap = wrapMap[tag] || wrapMap._default;tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag,"<$1></$2>") + wrap[2]; // Descend through wrappers to the right content
	j = wrap[0];while(j--) {tmp = tmp.lastChild;} // Support: QtWebKit, PhantomJS
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes); // Remember the top-level container
	tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
	tmp.textContent = "";}}} // Remove wrapper from fragment
	fragment.textContent = "";i = 0;while(elem = nodes[i++]) { // #4087 - If origin and destination elements are the same, and this is
	// that element, do not do anything
	if(selection && jQuery.inArray(elem,selection) !== -1){continue;}contains = jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp = getAll(fragment.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j = 0;while(elem = tmp[j++]) {if(rscriptType.test(elem.type || "")){scripts.push(elem);}}}}return fragment;},cleanData:function cleanData(elems){var data,elem,type,key,special=jQuery.event.special,i=0;for(;(elem = elems[i]) !== undefined;i++) {if(jQuery.acceptData(elem)){key = elem[data_priv.expando];if(key && (data = data_priv.cache[key])){if(data.events){for(type in data.events) {if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}}if(data_priv.cache[key]){ // Discard any remaining `private` data
	delete data_priv.cache[key];}}} // Discard any remaining `user` data
	delete data_user.cache[elem[data_user.expando]];}}});jQuery.fn.extend({text:function text(value){return access(this,function(value){return value === undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){this.textContent = value;}});},null,value,arguments.length);},append:function append(){return this.domManip(arguments,function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return this.domManip(arguments,function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function remove(selector,keepData /* Internal Use Only */){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem = elems[i]) != null;i++) {if(!keepData && elem.nodeType === 1){jQuery.cleanData(getAll(elem));}if(elem.parentNode){if(keepData && jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}elem.parentNode.removeChild(elem);}}return this;},empty:function empty(){var elem,i=0;for(;(elem = this[i]) != null;i++) {if(elem.nodeType === 1){ // Prevent memory leaks
	jQuery.cleanData(getAll(elem,false)); // Remove any remaining nodes
	elem.textContent = "";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents = dataAndEvents == null?false:dataAndEvents;deepDataAndEvents = deepDataAndEvents == null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0] || {},i=0,l=this.length;if(value === undefined && elem.nodeType === 1){return elem.innerHTML;} // See if we can take a shortcut and just use innerHTML
	if(typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["",""])[1].toLowerCase()]){value = value.replace(rxhtmlTag,"<$1></$2>");try{for(;i < l;i++) {elem = this[i] || {}; // Remove element nodes and prevent memory leaks
	if(elem.nodeType === 1){jQuery.cleanData(getAll(elem,false));elem.innerHTML = value;}}elem = 0; // If using innerHTML throws an exception, use the fallback method
	}catch(e) {}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var arg=arguments[0]; // Make the changes, replacing each context element with the new content
	this.domManip(arguments,function(elem){arg = this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}}); // Force removal if there was no new content (e.g., from empty arguments)
	return arg && (arg.length || arg.nodeType)?this:this.remove();},detach:function detach(selector){return this.remove(selector,true);},domManip:function domManip(args,callback){ // Flatten any nested arrays
	args = concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l - 1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0] = value.call(this,index,self.html());}self.domManip(args,callback);});}if(l){fragment = jQuery.buildFragment(args,this[0].ownerDocument,false,this);first = fragment.firstChild;if(fragment.childNodes.length === 1){fragment = first;}if(first){scripts = jQuery.map(getAll(fragment,"script"),disableScript);hasScripts = scripts.length; // Use the original fragment for the last item instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i < l;i++) {node = fragment;if(i !== iNoClone){node = jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){ // Support: QtWebKit
	// jQuery.merge because push.apply(_, arraylike) throws
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(this[i],node,i);}if(hasScripts){doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i = 0;i < hasScripts;i++) {node = scripts[i];if(rscriptType.test(node.type || "") && !data_priv.access(node,"globalEval") && jQuery.contains(doc,node)){if(node.src){ // Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name] = function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length - 1,i=0;for(;i <= last;i++) {elems = i === last?this:this.clone(true);jQuery(insert[i])[original](elems); // Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={}; /**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */ // Called only from within defaultDisplay
	function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body), // getDefaultComputedStyle might be reliably used only on attached element
	display=window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0]))? // Use of this method is a temporary fix (more like optimization) until something better comes along,
	// since it was removed from specification and supported only in FF
	style.display:jQuery.css(elem[0],"display"); // We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;} /**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display = actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display === "none" || !display){ // Use the already-created iframe if possible
	iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc = iframe[0].contentDocument; // Support: IE
	doc.write();doc.close();display = actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName] = display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){ // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);}return window.getComputedStyle(elem,null);};function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed = computed || getStyles(elem); // Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ret = computed.getPropertyValue(name) || computed[name];}if(computed){if(ret === "" && !jQuery.contains(elem.ownerDocument,elem)){ret = jQuery.style(elem,name);} // Support: iOS < 6
	// A tribute to the "awesome hack by Dean Edwards"
	// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
	// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
	if(rnumnonpx.test(ret) && rmargin.test(name)){ // Remember the original values
	width = style.width;minWidth = style.minWidth;maxWidth = style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth = style.maxWidth = style.width = ret;ret = computed.width; // Revert the changed values
	style.width = width;style.minWidth = minWidth;style.maxWidth = maxWidth;}}return ret !== undefined? // Support: IE
	// IE returns zIndex value as an integer.
	ret + "":ret;}function addGetHookIf(conditionFn,hookFn){ // Define the hook, we'll check on the first run if it's really needed.
	return {get:function get(){if(conditionFn()){ // Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;} // Hook needed; redefine it so that the support test is not executed again.
	return (this.get = hookFn).apply(this,arguments);}};}(function(){var pixelPositionVal,boxSizingReliableVal,docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;} // Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";div.cloneNode(true).style.backgroundClip = "";support.clearCloneStyle = div.style.backgroundClip === "content-box";container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable(){div.style.cssText =  // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";div.innerHTML = "";docElem.appendChild(container);var divStyle=window.getComputedStyle(div,null);pixelPositionVal = divStyle.top !== "1%";boxSizingReliableVal = divStyle.width === "4px";docElem.removeChild(container);} // Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function pixelPosition(){ // This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computePixelPositionAndBoxSizingReliable();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal == null){computePixelPositionAndBoxSizingReliable();}return boxSizingReliableVal;},reliableMarginRight:function reliableMarginRight(){ // Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText = div.style.cssText =  // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight = marginDiv.style.width = "0";div.style.width = "1px";docElem.appendChild(container);ret = !parseFloat(window.getComputedStyle(marginDiv,null).marginRight);docElem.removeChild(container);div.removeChild(marginDiv);return ret;}});}})(); // A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options) {old[name] = elem.style[name];elem.style[name] = options[name];}ret = callback.apply(elem,args || []); // Revert the old values
	for(name in options) {elem.style[name] = old[name];}return ret;};var  // Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^(" + pnum + ")(.*)$","i"),rrelNum=new RegExp("^([+-])=(" + pnum + ")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"]; // Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style,name){ // Shortcut for names that are not vendor prefixed
	if(name in style){return name;} // Check for vendor prefixed names
	var capName=name[0].toUpperCase() + name.slice(1),origName=name,i=cssPrefixes.length;while(i--) {name = cssPrefixes[i] + capName;if(name in style){return name;}}return origName;}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[1] - (subtract || 0)) + (matches[2] || "px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra === (isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name === "width"?1:0,val=0;for(;i < 4;i += 2) { // Both box models exclude margin, so add it if we want it
	if(extra === "margin"){val += jQuery.css(elem,extra + cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra === "content"){val -= jQuery.css(elem,"padding" + cssExpand[i],true,styles);} // At this point, extra isn't border nor margin, so remove border
	if(extra !== "margin"){val -= jQuery.css(elem,"border" + cssExpand[i] + "Width",true,styles);}}else { // At this point, extra isn't content, so add padding
	val += jQuery.css(elem,"padding" + cssExpand[i],true,styles); // At this point, extra isn't content nor padding, so add border
	if(extra !== "padding"){val += jQuery.css(elem,"border" + cssExpand[i] + "Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name === "width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val <= 0 || val == null){ // Fall back to computed then uncomputed css if necessary
	val = curCSS(elem,name,styles);if(val < 0 || val == null){val = elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]); // Normalize "", auto, and prepare for extra
	val = parseFloat(val) || 0;} // Use the active box-sizing model to add/subtract irrelevant styles
	return val + augmentWidthOrHeight(elem,name,extra || (isBorderBox?"border":"content"),valueIsBorderBox,styles) + "px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index < length;index++) {elem = elements[index];if(!elem.style){continue;}values[index] = data_priv.get(elem,"olddisplay");display = elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index] && display === "none"){elem.style.display = "";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display === "" && isHidden(elem)){values[index] = data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else {hidden = isHidden(elem);if(display !== "none" || !hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index = 0;index < length;index++) {elem = elements[index];if(!elem.style){continue;}if(!show || elem.style.display === "none" || elem.style.display === ""){elem.style.display = show?values[index] || "":"none";}}return elements;}jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret === ""?"1":ret;}}}}, // Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style,origName)); // Gets hook for the prefixed version, then unprefixed version
	hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value !== undefined){type = typeof value === "undefined"?"undefined":_typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)
	if(type === "string" && (ret = rrelNum.exec(value))){value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem,name)); // Fixes bug #9237
	type = "number";} // Make sure that null and NaN values aren't set (#7116)
	if(value == null || value !== value){return;} // If a number, add 'px' to the (except for certain CSS properties)
	if(type === "number" && !jQuery.cssNumber[origName]){value += "px";} // Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle && value === "" && name.indexOf("background") === 0){style[name] = "inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks || !("set" in hooks) || (value = hooks.set(elem,value,extra)) !== undefined){style[name] = value;}}else { // If a hook was provided get the non-computed value from there
	if(hooks && "get" in hooks && (ret = hooks.get(elem,false,extra)) !== undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style,origName)); // Try prefixed name followed by the unprefixed name
	hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks && "get" in hooks){val = hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val === undefined){val = curCSS(elem,name,styles);} // Convert "normal" to computed value
	if(val === "normal" && name in cssNormalTransform){val = cssNormalTransform[name];} // Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra === "" || extra){num = parseFloat(val);return extra === true || jQuery.isNumeric(num)?num || 0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name] = {get:function get(elem,computed,extra){if(computed){ // Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display")) && elem.offsetWidth === 0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var styles=extra && getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles) === "border-box",styles):0);}};}); // Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}); // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix + suffix] = {expand:function expand(value){var i=0,expanded={}, // Assumes a single number if not a string
	parts=typeof value === "string"?value.split(" "):[value];for(;i < 4;i++) {expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles = getStyles(elem);len = name.length;for(;i < len;i++) {map[name[i]] = jQuery.css(elem,name[i],false,styles);}return map;}return value !== undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length > 1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state === "boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween = Tween;Tween.prototype = {constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem = elem;this.prop = prop;this.easing = easing || "swing";this.options = options;this.start = this.now = this.cur();this.end = end;this.unit = unit || (jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks && hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos = eased = jQuery.easing[this.easing](percent,this.options.duration * percent,0,1,this.options.duration);}else {this.pos = eased = percent;}this.now = (this.end - this.start) * eased + this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks && hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype = Tween.prototype;Tween.propHooks = {_default:{get:function get(tween){var result;if(tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)){return tween.elem[tween.prop];} // Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result = jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result || result === "auto"?0:result;},set:function set(tween){ // Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now + tween.unit);}else {tween.elem[tween.prop] = tween.now;}}}}; // Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set:function set(tween){if(tween.elem.nodeType && tween.elem.parentNode){tween.elem[tween.prop] = tween.now;}}};jQuery.easing = {linear:function linear(p){return p;},swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;}};jQuery.fx = Tween.prototype.init; // Back Compat <1.8 extension point
	jQuery.fx.step = {};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts && parts[3] || (jQuery.cssNumber[prop]?"":"px"), // Starting value computation is required for potential unit mismatches
	start=(jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start && start[3] !== unit){ // Trust units reported by jQuery.css
	unit = unit || start[3]; // Make sure we update the tween properties later on
	parts = parts || []; // Iteratively approximate from a nonzero starting point
	start = +target || 1;do { // If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale = scale || ".5"; // Adjust and apply
	start = start / scale;jQuery.style(tween.elem,prop,start + unit); // Update scale, tolerating zero or NaN from tween.cur(),
	// break the loop if scale is unchanged or perfect, or if we've just had enough
	}while(scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);} // Update tween properties
	if(parts){start = tween.start = +start || +target || 0;tween.unit = unit; // If a +=/-= token was provided, we're doing a relative animation
	tween.end = parts[1]?start + (parts[1] + 1) * parts[2]:+parts[2];}return tween;}]}; // Animations created synchronously will run synchronously
	function createFxNow(){setTimeout(function(){fxNow = undefined;});return fxNow = jQuery.now();} // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type}; // If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth?1:0;for(;i < 4;i += 2 - includeWidth) {which = cssExpand[i];attrs["margin" + which] = attrs["padding" + which] = type;}if(includeWidth){attrs.opacity = attrs.width = type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(tweeners[prop] || []).concat(tweeners["*"]),index=0,length=collection.length;for(;index < length;index++) {if(tween = collection[index].call(animation,prop,value)){ // We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){ /* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType && isHidden(elem),dataShow=data_priv.get(elem,"fxshow"); // Handle queue: false promises
	if(!opts.queue){hooks = jQuery._queueHooks(elem,"fx");if(hooks.unqueued == null){hooks.unqueued = 0;oldfire = hooks.empty.fire;hooks.empty.fire = function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // Height/width overflow pass
	if(elem.nodeType === 1 && ("height" in props || "width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow = [style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display = jQuery.css(elem,"display"); // Test default display if display is currently "none"
	checkDisplay = display === "none"?data_priv.get(elem,"olddisplay") || defaultDisplay(elem.nodeName):display;if(checkDisplay === "inline" && jQuery.css(elem,"float") === "none"){style.display = "inline-block";}}if(opts.overflow){style.overflow = "hidden";anim.always(function(){style.overflow = opts.overflow[0];style.overflowX = opts.overflow[1];style.overflowY = opts.overflow[2];});} // show/hide pass
	for(prop in props) {value = props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle = toggle || value === "toggle";if(value === (hidden?"hide":"show")){ // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
	if(value === "show" && dataShow && dataShow[prop] !== undefined){hidden = true;}else {continue;}}orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem,prop); // Any non-fx value stops us from restoring the original display value
	}else {display = undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden = dataShow.hidden;}}else {dataShow = data_priv.access(elem,"fxshow",{});} // Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden = !hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;data_priv.remove(elem,"fxshow");for(prop in orig) {jQuery.style(elem,prop,orig[prop]);}});for(prop in orig) {tween = createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop] = tween.start;if(hidden){tween.end = tween.start;tween.start = prop === "width" || prop === "height"?1:0;}}} // If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display === "none"?defaultDisplay(elem.nodeName):display) === "inline"){style.display = display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props) {name = jQuery.camelCase(index);easing = specialEasing[name];value = props[index];if(jQuery.isArray(value)){easing = value[1];value = props[index] = value[0];}if(index !== name){props[name] = value;delete props[index];}hooks = jQuery.cssHooks[name];if(hooks && "expand" in hooks){value = hooks.expand(value);delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value) {if(!(index in props)){props[index] = value[index];specialEasing[index] = easing;}}}else {specialEasing[name] = easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){ // Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow || createFxNow(),remaining=Math.max(0,animation.startTime + animation.duration - currentTime), // Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining / animation.duration || 0,percent=1 - temp,index=0,length=animation.tweens.length;for(;index < length;index++) {animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent < 1 && length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow || createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop] || animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0, // If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped = true;for(;index < length;index++) {animation.tweens[index].run(1);} // Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index < length;index++) {result = animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation = jQuery.extend(Animation,{tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback = props;props = ["*"];}else {props = props.split(" ");}var prop,index=0,length=props.length;for(;index < length;index++) {prop = props[index];tweeners[prop] = tweeners[prop] || [];tweeners[prop].unshift(callback);}},prefilter:function prefilter(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else {animationPrefilters.push(callback);}}});jQuery.speed = function(speed,easing,fn){var opt=speed && (typeof speed === "undefined"?"undefined":_typeof(speed)) === "object"?jQuery.extend({},speed):{complete:fn || !fn && easing || jQuery.isFunction(speed) && speed,duration:speed,easing:fn && easing || easing && !jQuery.isFunction(easing) && easing};opt.duration = jQuery.fx.off?0:typeof opt.duration === "number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue == null || opt.queue === true){opt.queue = "fx";} // Queueing
	opt.old = opt.complete;opt.complete = function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){ // Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall); // Empty animations, or finishing resolves immediately
	if(empty || data_priv.get(this,"finish")){anim.stop(true);}};doAnimation.finish = doAnimation;return empty || optall.queue === false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type !== "string"){gotoEnd = clearQueue;clearQueue = type;type = undefined;}if(clearQueue && type !== false){this.queue(type || "fx",[]);}return this.each(function(){var dequeue=true,index=type != null && type + "queueHooks",timers=jQuery.timers,data=data_priv.get(this);if(index){if(data[index] && data[index].stop){stopQueue(data[index]);}}else {for(index in data) {if(data[index] && data[index].stop && rrun.test(index)){stopQueue(data[index]);}}}for(index = timers.length;index--;) {if(timers[index].elem === this && (type == null || timers[index].queue === type)){timers[index].anim.stop(gotoEnd);dequeue = false;timers.splice(index,1);}} // Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue || !gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type !== false){type = type || "fx";}return this.each(function(){var index,data=data_priv.get(this),queue=data[type + "queue"],hooks=data[type + "queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // Enable finishing flag on private data
	data.finish = true; // Empty the queue first
	jQuery.queue(this,type,[]);if(hooks && hooks.stop){hooks.stop.call(this,true);} // Look for any active animations, and finish them
	for(index = timers.length;index--;) {if(timers[index].elem === this && timers[index].queue === type){timers[index].anim.stop(true);timers.splice(index,1);}} // Look for any animations in the old queue and finish them
	for(index = 0;index < length;index++) {if(queue[index] && queue[index].finish){queue[index].finish.call(this);}} // Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name] = function(speed,easing,callback){return speed == null || typeof speed === "boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};}); // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name] = function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers = [];jQuery.fx.tick = function(){var timer,i=0,timers=jQuery.timers;fxNow = jQuery.now();for(;i < timers.length;i++) {timer = timers[i]; // Checks the timer has not already been removed
	if(!timer() && timers[i] === timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow = undefined;};jQuery.fx.timer = function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval = 13;jQuery.fx.start = function(){if(!timerId){timerId = setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop = function(){clearInterval(timerId);timerId = null;};jQuery.fx.speeds = {slow:600,fast:200, // Default speed
	_default:400}; // Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function(time,type){time = jQuery.fx?jQuery.fx.speeds[time] || time:time;type = type || "fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop = function(){clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type = "checkbox"; // Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== ""; // Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected; // Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;support.optDisabled = !opt.disabled; // Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement("input");input.value = "t";input.type = "radio";support.radioValue = input.value === "t";})();var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length > 1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var hooks,ret,nType=elem.nodeType; // don't get/set attributes on text, comment and attribute nodes
	if(!elem || nType === 3 || nType === 8 || nType === 2){return;} // Fallback to prop when attributes are not supported
	if(_typeof(elem.getAttribute) === strundefined){return jQuery.prop(elem,name,value);} // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType !== 1 || !jQuery.isXMLDoc(elem)){name = name.toLowerCase();hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}if(value !== undefined){if(value === null){jQuery.removeAttr(elem,name);}else if(hooks && "set" in hooks && (ret = hooks.set(elem,value,name)) !== undefined){return ret;}else {elem.setAttribute(name,value + "");return value;}}else if(hooks && "get" in hooks && (ret = hooks.get(elem,name)) !== null){return ret;}else {ret = jQuery.find.attr(elem,name); // Non-existent attributes return null, we normalize to undefined
	return ret == null?undefined:ret;}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value && value.match(rnotwhite);if(attrNames && elem.nodeType === 1){while(name = attrNames[i++]) {propName = jQuery.propFix[name] || name; // Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){ // Set corresponding property to false
	elem[propName] = false;}elem.removeAttribute(name);}}},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue && value === "radio" && jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value = val;}return value;}}}}}); // Hooks for boolean attributes
	boolHook = {set:function set(elem,value,name){if(value === false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else {elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name] || jQuery.find.attr;attrHandle[name] = function(elem,name,isXML){var ret,handle;if(!isXML){ // Avoid an infinite loop by temporarily removing this function from the getter
	handle = attrHandle[name];attrHandle[name] = ret;ret = getter(elem,name,isXML) != null?name.toLowerCase():null;attrHandle[name] = handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length > 1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name] || name];});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function prop(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
	if(!elem || nType === 3 || nType === 8 || nType === 2){return;}notxml = nType !== 1 || !jQuery.isXMLDoc(elem);if(notxml){ // Fix name and attach hooks
	name = jQuery.propFix[name] || name;hooks = jQuery.propHooks[name];}if(value !== undefined){return hooks && "set" in hooks && (ret = hooks.set(elem,value,name)) !== undefined?ret:elem[name] = value;}else {return hooks && "get" in hooks && (ret = hooks.get(elem,name)) !== null?ret:elem[name];}},propHooks:{tabIndex:{get:function get(elem){return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href?elem.tabIndex:-1;}}}});if(!support.optSelected){jQuery.propHooks.selected = {get:function get(elem){var parent=elem.parentNode;if(parent && parent.parentNode){parent.parentNode.selectedIndex;}return null;}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()] = this;});var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value === "string" && value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}if(proceed){ // The disjunction here is for better compressibility (see removeClass)
	classes = (value || "").match(rnotwhite) || [];for(;i < len;i++) {elem = this[i];cur = elem.nodeType === 1 && (elem.className?(" " + elem.className + " ").replace(rclass," "):" ");if(cur){j = 0;while(clazz = classes[j++]) {if(cur.indexOf(" " + clazz + " ") < 0){cur += clazz + " ";}} // only assign if different to avoid unneeded rendering.
	finalValue = jQuery.trim(cur);if(elem.className !== finalValue){elem.className = finalValue;}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length === 0 || typeof value === "string" && value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}if(proceed){classes = (value || "").match(rnotwhite) || [];for(;i < len;i++) {elem = this[i]; // This expression is here for better compressibility (see addClass)
	cur = elem.nodeType === 1 && (elem.className?(" " + elem.className + " ").replace(rclass," "):"");if(cur){j = 0;while(clazz = classes[j++]) { // Remove *all* instances
	while(cur.indexOf(" " + clazz + " ") >= 0) {cur = cur.replace(" " + clazz + " "," ");}} // Only assign if different to avoid unneeded rendering.
	finalValue = value?jQuery.trim(cur):"";if(elem.className !== finalValue){elem.className = finalValue;}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value === "undefined"?"undefined":_typeof(value);if(typeof stateVal === "boolean" && type === "string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}return this.each(function(){if(type === "string"){ // Toggle individual class names
	var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite) || [];while(className = classNames[i++]) { // Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}} // Toggle whole class name
	}else if(type === strundefined || type === "boolean"){if(this.className){ // store className if set
	data_priv.set(this,"__className__",this.className);} // If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	this.className = this.className || value === false?"":data_priv.get(this,"__className__") || "";}});},hasClass:function hasClass(selector){var className=" " + selector + " ",i=0,l=this.length;for(;i < l;i++) {if(this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass," ").indexOf(className) >= 0){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks && "get" in hooks && (ret = hooks.get(elem,"value")) !== undefined){return ret;}ret = elem.value;return typeof ret === "string"? // Handle most common string cases
	ret.replace(rreturn,""): // Handle cases where value is null/undef or number
	ret == null?"":ret;}return;}isFunction = jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType !== 1){return;}if(isFunction){val = value.call(this,i,jQuery(this).val());}else {val = value;} // Treat null/undefined as ""; convert numbers to string
	if(val == null){val = "";}else if(typeof val === "number"){val += "";}else if(jQuery.isArray(val)){val = jQuery.map(val,function(value){return value == null?"":value + "";});}hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks || !("set" in hooks) || hooks.set(this,val,"value") === undefined){this.value = val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val != null?val: // Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	jQuery.trim(jQuery.text(elem));}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type === "select-one" || index < 0,values=one?null:[],max=one?index + 1:options.length,i=index < 0?max:one?index:0; // Loop through all the selected options
	for(;i < max;i++) {option = options[i]; // IE6-9 doesn't update selected after form reset (#2551)
	if((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value = jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--) {option = options[i];if(option.selected = jQuery.inArray(option.value,values) >= 0){optionSet = true;}} // Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex = -1;}return values;}}}}); // Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this] = {set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked = jQuery.inArray(jQuery(elem).val(),value) >= 0;}}};if(!support.checkOn){jQuery.valHooks[this].get = function(elem){return elem.getAttribute("value") === null?"on":elem.value;};}}); // Return jQuery for attributes-only inclusion
	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name] = function(data,fn){return arguments.length > 0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);},bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length === 1?this.off(selector,"**"):this.off(types,selector || "**",fn);}});var nonce=jQuery.now();var rquery=/\?/; // Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function(data){return JSON.parse(data + "");}; // Cross-browser xml parsing
	jQuery.parseXML = function(data){var xml,tmp;if(!data || typeof data !== "string"){return null;} // Support: IE9
	try{tmp = new DOMParser();xml = tmp.parseFromString(data,"text/xml");}catch(e) {xml = undefined;}if(!xml || xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: " + data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"), // Document location
	ajaxLocation=window.location.href, // Segment location into parts
	ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase()) || []; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression !== "string"){func = dataTypeExpression;dataTypeExpression = "*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite) || [];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType = dataTypes[i++]) { // Prepend if requested
	if(dataType[0] === "+"){dataType = dataType.slice(1) || "*";(structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
	}else {(structure[dataType] = structure[dataType] || []).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure === transports;function inspect(dataType){var selected;inspected[dataType] = true;jQuery.each(structure[dataType] || [],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected = dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions || {};for(key in src) {if(src[key] !== undefined){(flatOptions[key]?target:deep || (deep = {}))[key] = src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;} /* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; // Remove auto dataType and get content-type in the process
	while(dataTypes[0] === "*") {dataTypes.shift();if(ct === undefined){ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents) {if(contents[type] && contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType = dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses) {if(!dataTypes[0] || s.converters[type + " " + dataTypes[0]]){finalDataType = type;break;}if(!firstDataType){firstDataType = type;}} // Or just use first one
	finalDataType = finalDataType || firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType !== dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} /* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(); // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters) {converters[conv.toLowerCase()] = s.converters[conv];}}current = dataTypes.shift(); // Convert to each sequential dataType
	while(current) {if(s.responseFields[current]){jqXHR[s.responseFields[current]] = response;} // Apply the dataFilter if provided
	if(!prev && isSuccess && s.dataFilter){response = s.dataFilter(response,s.dataType);}prev = current;current = dataTypes.shift();if(current){ // There's only work to do if current dataType is non-auto
	if(current === "*"){current = prev; // Convert response if prev dataType is non-auto and differs from current
	}else if(prev !== "*" && prev !== current){ // Seek a direct converter
	conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters) { // If conv2 outputs current
	tmp = conv2.split(" ");if(tmp[1] === current){ // If prev can be converted to accepted input
	conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];if(conv){ // Condense equivalence converters
	if(conv === true){conv = converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2] !== true){current = tmp[0];dataTypes.unshift(tmp[1]);}break;}}}} // Apply converter (if not an equivalence)
	if(conv !== true){ // Unless errors are allowed to bubble, catch and return them
	if(conv && s["throws"]){response = conv(response);}else {try{response = conv(response);}catch(e) {return {state:"parsererror",error:conv?e:"No conversion from " + prev + " to " + current};}}}}}}return {state:"success",data:response};}jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if((typeof url === "undefined"?"undefined":_typeof(url)) === "object"){options = url;url = undefined;} // Force options to be an object
	options = options || {};var transport, // URL without anti-cache param
	cacheURL, // Response headers
	responseHeadersString,responseHeaders, // timeout handle
	timeoutTimer, // Cross-domain detection vars
	parts, // To know if global events are to be dispatched
	fireGlobals, // Loop variable
	i, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context && (callbackContext.nodeType || callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	_statusCode=s.statusCode || {}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state === 2){if(!responseHeaders){responseHeaders = {};while(match = rheaders.exec(responseHeadersString)) {responseHeaders[match[1].toLowerCase()] = match[2];}}match = responseHeaders[key.toLowerCase()];}return match == null?null:match;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state === 2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;requestHeaders[name] = value;}return this;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType = type;}return this;}, // Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state < 2){for(code in map) { // Lazy-add the new callback in a way that preserves old ones
	_statusCode[code] = [_statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function abort(statusText){var finalText=statusText || strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete = completeDeferred.add;jqXHR.success = jqXHR.done;jqXHR.error = jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url = ((url || s.url || ajaxLocation) + "").replace(rhash,"").replace(rprotocol,ajaxLocParts[1] + "//"); // Alias method option to type as per ticket #12004
	s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list
	s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""]; // A cross-domain request is in order when we have a protocol:host:port mismatch
	if(s.crossDomain == null){parts = rurl.exec(s.url.toLowerCase());s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:"?"80":"443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:"?"80":"443"))));} // Convert data if not already a string
	if(s.data && s.processData && typeof s.data !== "string"){s.data = jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state === 2){return jqXHR;} // We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals = jQuery.event && s.global; // Watch for a new set of requests
	if(fireGlobals && jQuery.active++ === 0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type = s.type.toUpperCase(); // Determine if request has content
	s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL = s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL = s.url += (rquery.test(cacheURL)?"&":"?") + s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache === false){s.url = rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_=" + nonce++): // Otherwise add one to the end
	cacheURL + (rquery.test(cacheURL)?"&":"?") + "_=" + nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data && s.hasContent && s.contentType !== false || options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0] && s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*"?", " + allTypes + "; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers) {jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend && (s.beforeSend.call(callbackContext,jqXHR,s) === false || state === 2)){ // Abort if not done already and return
	return jqXHR.abort();} // Aborting is no longer a cancellation
	strAbort = "abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}) {jqXHR[i](s[i]);} // Get transport
	transport = inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState = 1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // Timeout
	if(s.async && s.timeout > 0){timeoutTimer = setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state = 1;transport.send(requestHeaders,done);}catch(e) { // Propagate exception as error if not done
	if(state < 2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state === 2){return;} // State is "done" now
	state = 2; // Clear timeout if it exists
	if(timeoutTimer){clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport = undefined; // Cache response headers
	responseHeadersString = headers || ""; // Set readyState
	jqXHR.readyState = status > 0?4:0; // Determine if successful
	isSuccess = status >= 200 && status < 300 || status === 304; // Get response data
	if(responses){response = ajaxHandleResponses(s,jqXHR,responses);} // Convert no matter what (that way responseXXX fields are always set)
	response = ajaxConvert(s,response,jqXHR,isSuccess); // If successful, handle type chaining
	if(isSuccess){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified = jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL] = modified;}modified = jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL] = modified;}} // if no content
	if(status === 204 || s.type === "HEAD"){statusText = "nocontent"; // if not modified
	}else if(status === 304){statusText = "notmodified"; // If we have data, let's convert it
	}else {statusText = response.state;success = response.data;error = response.error;isSuccess = !error;}}else { // Extract error from statusText and normalize for non-aborts
	error = statusText;if(status || !statusText){statusText = "error";if(status < 0){status = 0;}}} // Set data for the fake xhr object
	jqXHR.status = status;jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode = undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method] = function(url,data,callback,type){ // Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type = type || callback;callback = data;data = undefined;}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery._evalUrl = function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	wrap = jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild) {elem = elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden = function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;};jQuery.expr.filters.visible = function(elem){return !jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional || rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix + "[" + ((typeof v === "undefined"?"undefined":_typeof(v)) === "object"?i:"") + "]",v,traditional,add);}});}else if(!traditional && jQuery.type(obj) === "object"){ // Serialize object item.
	for(name in obj) {buildParams(prefix + "[" + name + "]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function(a,traditional){var prefix,s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value = jQuery.isFunction(value)?value():value == null?"":value;s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional === undefined){traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a) {buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val == null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr = function(){try{return new XMLHttpRequest();}catch(e) {}};var xhrId=0,xhrCallbacks={},xhrSuccessStatus={ // file protocol always yields status code 0, assume 200
	0:200, // Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr(); // Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks) {xhrCallbacks[key]();}});}support.cors = !!xhrSupported && "withCredentials" in xhrSupported;support.ajax = xhrSupported = !!xhrSupported;jQuery.ajaxTransport(function(options){var callback; // Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors || xhrSupported && !options.crossDomain){return {send:function send(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password); // Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields) {xhr[i] = options.xhrFields[i];}} // Override mime type if needed
	if(options.mimeType && xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain && !headers["X-Requested-With"]){headers["X-Requested-With"] = "XMLHttpRequest";} // Set headers
	for(i in headers) {xhr.setRequestHeader(i,headers[i]);} // Callback
	callback = function(type){return function(){if(callback){delete xhrCallbacks[id];callback = xhr.onload = xhr.onerror = null;if(type === "abort"){xhr.abort();}else if(type === "error"){complete( // file: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}else {complete(xhrSuccessStatus[xhr.status] || xhr.status,xhr.statusText, // Support: IE9
	// Accessing binary-data responseText throws an exception
	// (#11426)
	typeof xhr.responseText === "string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders());}}};}; // Listen to events
	xhr.onload = callback();xhr.onerror = callback("error"); // Create the abort callback
	callback = xhrCallbacks[id] = callback("abort");try{ // Do send the request (this may raise an exception)
	xhr.send(options.hasContent && options.data || null);}catch(e) { // #14683: Only rethrow if this hasn't been notified as an error yet
	if(callback){throw e;}}},abort:function abort(){if(callback){callback();}}};}}); // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache === undefined){s.cache = false;}if(s.crossDomain){s.type = "GET";}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,callback;return {send:function send(_,complete){script = jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback = function(evt){script.remove();callback = null;if(evt){complete(evt.type === "error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function abort(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop() || jQuery.expando + "_" + nonce++;this[callback] = true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp !== false && (rjsonp.test(s.url)?"url":typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp || s.dataTypes[0] === "jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp] = s[jsonProp].replace(rjsonp,"$1" + callbackName);}else if(s.jsonp !== false){s.url += (rquery.test(s.url)?"&":"?") + s.jsonp + "=" + callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"] = function(){if(!responseContainer){jQuery.error(callbackName + " was not called");}return responseContainer[0];}; // force json dataType
	s.dataTypes[0] = "json"; // Install callback
	overwritten = window[callbackName];window[callbackName] = function(){responseContainer = arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // Restore preexisting value
	window[callbackName] = overwritten; // Save back as free
	if(s[callbackName]){ // make sure that re-using the options doesn't screw things around
	s.jsonpCallback = originalSettings.jsonpCallback; // save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer && jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer = overwritten = undefined;}); // Delegate to script
	return "script";}}); // data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function(data,context,keepScripts){if(!data || typeof data !== "string"){return null;}if(typeof context === "boolean"){keepScripts = context;context = false;}context = context || document;var parsed=rsingleTag.exec(data),scripts=!keepScripts && []; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed = jQuery.buildFragment([data],context,scripts);if(scripts && scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);}; // Keep a copy of the old load method
	var _load=jQuery.fn.load; /**
	 * Load a url into a page
	 */jQuery.fn.load = function(url,params,callback){if(typeof url !== "string" && _load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off >= 0){selector = jQuery.trim(url.slice(off));url = url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback = params;params = undefined; // Otherwise, build a param string
	}else if(params && (typeof params === "undefined"?"undefined":_typeof(params)) === "object"){type = "POST";} // If we have elements to modify, make the request
	if(self.length > 0){jQuery.ajax({url:url, // if "type" variable is undefined, then "GET" method will be used
	type:type,dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response = arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText);}).complete(callback && function(jqXHR,status){self.each(callback,response || [jqXHR.responseText,status,jqXHR]);});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type] = function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated = function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem === fn.elem;}).length;};var docElem=window.document.documentElement; /**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType === 9 && elem.defaultView;}jQuery.offset = {setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; // Set position first, in-case top/left are set even on static elem
	if(position === "static"){elem.style.position = "relative";}curOffset = curElem.offset();curCSSTop = jQuery.css(elem,"top");curCSSLeft = jQuery.css(elem,"left");calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition = curElem.position();curTop = curPosition.top;curLeft = curPosition.left;}else {curTop = parseFloat(curCSSTop) || 0;curLeft = parseFloat(curCSSLeft) || 0;}if(jQuery.isFunction(options)){options = options.call(elem,i,curOffset);}if(options.top != null){props.top = options.top - curOffset.top + curTop;}if(options.left != null){props.left = options.left - curOffset.left + curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options === undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem && elem.ownerDocument;if(!doc){return;}docElem = doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;} // Support: BlackBerry 5, iOS 3 (original iPhone)
	// If we don't have gBCR, just use 0,0 rather than error
	if(_typeof(elem.getBoundingClientRect) !== strundefined){box = elem.getBoundingClientRect();}win = getWindow(doc);return {top:box.top + win.pageYOffset - docElem.clientTop,left:box.left + win.pageXOffset - docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
	if(jQuery.css(elem,"position") === "fixed"){ // Assume getBoundingClientRect is there when computed position is fixed
	offset = elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent = this.offsetParent(); // Get correct offsets
	offset = this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset = offsetParent.offset();} // Add offsetParent borders
	parentOffset.top += jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left += jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	return {top:offset.top - parentOffset.top - jQuery.css(elem,"marginTop",true),left:offset.left - parentOffset.left - jQuery.css(elem,"marginLeft",true)};},offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent || docElem;while(offsetParent && !jQuery.nodeName(offsetParent,"html") && jQuery.css(offsetParent,"position") === "static") {offsetParent = offsetParent.offsetParent;}return offsetParent || docElem;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset" === prop;jQuery.fn[method] = function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val === undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset);}else {elem[method] = val;}},method,val,arguments.length,null);};}); // Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed = curCSS(elem,prop); // If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop] + "px":computed;}});}); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner" + name,content:type,"":"outer" + name},function(defaultExtra,funcName){ // Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName] = function(margin,value){var chainable=arguments.length && (defaultExtra || typeof margin !== "boolean"),extra=defaultExtra || (margin === true || value === true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client" + name];} // Get document width or height
	if(elem.nodeType === 9){doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll" + name],doc["scroll" + name],elem.body["offset" + name],doc["offset" + name],doc["client" + name]);}return value === undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});}); // The number of elements contained in the matched element set
	jQuery.fn.size = function(){return this.length;};jQuery.fn.andSelf = jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
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
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var  // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict = function(deep){if(window.$ === jQuery){window.$ = _$;}if(deep && window.jQuery === jQuery){window.jQuery = _jQuery;}return jQuery;}; // Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if((typeof noGlobal === "undefined"?"undefined":_typeof(noGlobal)) === strundefined){window.jQuery = window.$ = jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/module.js */ 2)(module)))

/***/ },
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./src/CurrentLocation/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 4);
	
	// assets
	var iconURL = __webpack_require__(/*! ./location.png */ 8);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 9);
	
	var CurrentLocation = (function (_BaseComponent) {
	  _inherits(CurrentLocation, _BaseComponent);
	
	  function CurrentLocation(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, CurrentLocation);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.iconURL = opts.iconURL || iconURL;
	    _this.geolocationAPI = opts.geolocationAPI;
	    return _possibleConstructorReturn(_this, _this);
	  }
	
	  CurrentLocation.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.addClass('ui-current-location');
	    this.$el.on('click', function () {
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
/* 4 */
/*!****************************************!*\
  !*** ./src/CurrentLocation/styles.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 5 */
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/CurrentLocation/styles.css ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-current-location {\n  cursor: pointer;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n", ""]);
	
	// exports


/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
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
/* 8 */
/*!******************************************!*\
  !*** ./src/CurrentLocation/location.png ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 9 */
/*!******************************!*\
  !*** ./src/BaseComponent.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var uuid = __webpack_require__(/*! uuid */ 10);
	var PSHub = __webpack_require__(/*! ./PubSubHub */ 12);
	var assert = __webpack_require__(/*! ./assert */ 13);
	
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
	    _classCallCheck(this, BaseComponent);
	
	    assert(el);
	    this.$el = $(el);
	    this.$el.html('');
	
	    // to support server-side rendering, when DOM aint there
	    if (this.$el.size() === 0) {
	      this.$el = $('<div></div>');
	    }
	
	    this.value = null;
	    this.id = uuid.v4();
	    this.keyEvents = keyEvents;
	
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
/* 10 */
/*!************************!*\
  !*** ./~/uuid/uuid.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(/*! ./rng */ 11);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = buf && offset || 0,
	      ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
	    if (ii < 16) {
	      // Don't overflow!
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
	  var i = offset || 0,
	      bth = _byteToHex;
	  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0,
	    _lastNSecs = 0;
	
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
	  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
	
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
	  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
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
	
	  if (typeof options == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = rnds[6] & 0x0f | 0x40;
	  rnds[8] = rnds[8] & 0x3f | 0x80;
	
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
/* 11 */
/*!*******************************!*\
  !*** ./~/uuid/rng-browser.js ***!
  \*******************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
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
	  var _rnds = new Array(16);
	  rng = function () {
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
/* 12 */
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
/* 13 */
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
/* 14 */
/*!********************************!*\
  !*** ./src/TextInput/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// # TextInput
	// publishes a nicely throttled text input event
	// adds a clearing x icon
	
	// css
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 15);
	
	// html
	var inputTmpl = __webpack_require__(/*! ./input.tmpl */ 17);
	var clearTmpl = __webpack_require__(/*! ./clear.tmpl */ 18);
	var clearWrapper = __webpack_require__(/*! ./clearWrapper.html */ 19);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 9);
	var debounce = __webpack_require__(/*! debounce */ 20);
	
	var TextInput = (function (_BaseComponent) {
	  _inherits(TextInput, _BaseComponent);
	
	  function TextInput(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.value = opts.value || '';
	    _this.wait = opts.wait || 300;
	    _this.clearingIcon = opts.clearingIcon || 'x';
	    _this.$input = null;
	    return _possibleConstructorReturn(_this, _this);
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
	
	    if (this.clearingIcon) {
	      // the wrapper to place a clearing icon (X)
	      this.$input.wrap(clearWrapper);
	      this.$wrapper = this.$el.find('.ui-text-input-clear-wrapper');
	
	      // the clearing icon itself (absolute positioned within wrapper to be on the right)
	      this.$wrapper.append(clearTmpl(this));
	      this.$clear = this.$el.find('.ui-text-input-clear');
	      this.$clear.click(function () {
	        _this2.set('');
	      });
	    }
	
	    return this.$el.html();
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
/* 15 */
/*!**********************************!*\
  !*** ./src/TextInput/styles.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 16 */
/*!*****************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/TextInput/styles.css ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-text-input {\n  width: 100%;\n}\n\n.ui-text-input-clear-wrapper {\n  position: relative;\n}\n\n.ui-text-input-clear {\n  font-size: 16px;\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 17 */
/*!**********************************!*\
  !*** ./src/TextInput/input.tmpl ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<input type='text' id='" + scope.id + "' class='ui-text-input form-control' value='" + scope.get() + "'/>";
	};

/***/ },
/* 18 */
/*!**********************************!*\
  !*** ./src/TextInput/clear.tmpl ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-text-input-clear'>" + scope.clearingIcon + "</span>";
	};

/***/ },
/* 19 */
/*!*****************************************!*\
  !*** ./src/TextInput/clearWrapper.html ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = "<div class='ui-text-input-clear-wrapper'></div>";

/***/ },
/* 20 */
/*!*****************************!*\
  !*** ./~/debounce/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(/*! date-now */ 21);
	
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
	
	module.exports = function debounce(func, wait, immediate) {
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
/* 21 */
/*!*****************************!*\
  !*** ./~/date-now/index.js ***!
  \*****************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = Date.now || now;
	
	function now() {
	    return new Date().getTime();
	}

/***/ },
/* 22 */
/*!*****************************!*\
  !*** ./src/Button/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// css
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 23);
	
	// html
	var buttonTmpl = __webpack_require__(/*! ./button.tmpl */ 25);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 9);
	
	var Button = (function (_BaseComponent) {
	  _inherits(Button, _BaseComponent);
	
	  function Button(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Button);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.label = opts.label || 'ClickMe!';
	    return _this;
	  }
	
	  Button.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(buttonTmpl(this));
	    this.$el.find('button').click(function () {
	      _this2.publish('click', _this2.id);
	    });
	    return this.$el.html();
	  };
	
	  return Button;
	})(BaseComponent);
	
	;
	
	module.exports = Button;

/***/ },
/* 23 */
/*!*******************************!*\
  !*** ./src/Button/styles.css ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 24 */
/*!**************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/Button/styles.css ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-button {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 25 */
/*!********************************!*\
  !*** ./src/Button/button.tmpl ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<button type='button' class='ui-button'>" + scope.label + "</button>";
	};

/***/ },
/* 26 */
/*!***********************************!*\
  !*** ./src/SingleSelect/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// # TODO
	//    - support separation of value from displayValue
	//    - styles
	
	// css
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 27);
	
	// html
	var selectTmpl = __webpack_require__(/*! ./select.tmpl */ 29);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 9);
	
	var SingleSelect = (function (_BaseComponent) {
	  _inherits(SingleSelect, _BaseComponent);
	
	  function SingleSelect(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, SingleSelect);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.options = (opts.options || []).map(function (opt) {
	      return {
	        value: opt,
	        selected: opt === _this.get()
	      };
	    });
	    return _this;
	  }
	
	  SingleSelect.prototype.set = function set(v) {
	    this.options = this.options.map(function (opt) {
	      opt.selected = opt.value === v;
	      return opt;
	    });
	    return _BaseComponent.prototype.set.call(this, v);
	  };
	
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
/* 27 */
/*!*************************************!*\
  !*** ./src/SingleSelect/styles.css ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 28 */
/*!********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/SingleSelect/styles.css ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 29 */
/*!**************************************!*\
  !*** ./src/SingleSelect/select.tmpl ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return '<select>\n' + scope.options.map(function (option) {
	    if (option.selected) {
	      return '<option selected=true>' + option.value + '</option>';
	    } else {
	      return '<option>' + option.value + '</option>';
	    }
	  }) + '\n</select>\n';
	};

/***/ },
/* 30 */
/*!**********************************!*\
  !*** ./src/MultiSelect/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// # TODO
	//    - support separation of value from displayValue
	//    - styles (like jnj staging mobile in particular)
	
	// css
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 31);
	
	// html
	var multiSelectTmpl = __webpack_require__(/*! ./multiSelect.dot */ 33);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 9);
	
	var MultiSelect = (function (_BaseComponent) {
	  _inherits(MultiSelect, _BaseComponent);
	
	  function MultiSelect(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, MultiSelect);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.options = (opts.options || []).map(function (opt) {
	      return {
	        value: opt
	      };
	    });
	    return _this;
	  }
	
	  MultiSelect.prototype.get = function get() {
	    return this.options.filter(function (opt) {
	      return opt.checked;
	    });
	  };
	
	  MultiSelect.prototype.set = function set(v) {
	    this.options = this.options.map(function (opt) {
	      opt.checked = opt.value === v ? !opt.checked : opt.checked;
	      return opt;
	    });
	    this.render();
	    this.publish(this.get());
	    return this;
	  };
	
	  MultiSelect.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(multiSelectTmpl(this));
	    this.$el.find('input').click(function (evt) {
	      _this2.set($(evt.target).val());
	    });
	    return this.$el.html();
	  };
	
	  return MultiSelect;
	})(BaseComponent);
	
	;
	
	module.exports = MultiSelect;

/***/ },
/* 31 */
/*!************************************!*\
  !*** ./src/MultiSelect/styles.css ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 32 */
/*!*******************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/MultiSelect/styles.css ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 33 */
/*!*****************************************!*\
  !*** ./src/MultiSelect/multiSelect.dot ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<div class=\'ui-multi-select\'>'; it.options.forEach(function (opt) { out+=' <input type=\'checkbox\' name=\''+( it.id )+'\' value=\''+( opt.value )+'\' ';if(opt.checked){out+='checked=true';}out+='/> <label for=\''+( it.id )+'\'>'+( opt.value )+'</label>'; }); out+='</div>';return out;
	}

/***/ },
/* 34 */
/*!*******************************!*\
  !*** ./src/ListView/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// # Render a list of results
	//
	//   - publishes an event when a list item is clicked 'selected'
	//
	
	// css
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 35);
	
	// html
	var listViewTmpl = __webpack_require__(/*! ./listView.dot */ 37);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 9);
	var assert = __webpack_require__(/*! ../assert */ 13);
	
	var ListView = (function (_BaseComponent) {
	  _inherits(ListView, _BaseComponent);
	
	  function ListView(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ListView);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.results = opts.results || [];
	    _this.fetch = opts.fetch;
	    _this.renderItem = opts.renderItem || _this.renderItem;
	    assert(typeof _this.fetch === 'function');
	    return _this;
	  }
	
	  ListView.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(listViewTmpl(this));
	    this.$el.find('li').click(function (evt) {
	      _this2.set(_this2.results[$(evt.target).attr('data-index')]);
	    });
	    return this.$el.html();
	  };
	
	  ListView.prototype.renderItem = function renderItem(item) {
	    return item.toString();
	  };
	
	  ListView.prototype.refresh = function refresh() {
	    var _this3 = this;
	
	    this.fetch(function (results) {
	      _this3.results = results;
	      _this3.render();
	    });
	  };
	
	  return ListView;
	})(BaseComponent);
	
	;
	
	module.exports = ListView;

/***/ },
/* 35 */
/*!*********************************!*\
  !*** ./src/ListView/styles.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 36 */
/*!****************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/ListView/styles.css ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 37 */
/*!***********************************!*\
  !*** ./src/ListView/listView.dot ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<ul>';var i=0; it.results.forEach(function (result) { out+=' <li id=\''+( it.id )+'\' data-index=\''+( i )+'\'>'+( it.renderItem(result) )+'</li>';  i++; }); out+='</ul>';return out;
	}

/***/ },
/* 38 */
/*!********************************!*\
  !*** ./src/Typeahead/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// Extends PrettyTypeahead by adding:
	//
	// - support for results as objects instead of just simple values (selection value isn't just display string)
	// - option to force user to pick from dropdown or to let them type in freely also
	// - support for fixed result items
	
	// scripts
	;
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var $ = __webpack_require__(/*! jquery */ 1);
	var PrettyTypeahead = __webpack_require__(/*! ./PrettyTypeahead */ 39);
	
	var Typeahead = (function (_PrettyTypeahead) {
	  _inherits(Typeahead, _PrettyTypeahead);
	
	  function Typeahead(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Typeahead);
	
	    var _this = _possibleConstructorReturn(this, _PrettyTypeahead.call(this, el, opts));
	
	    _this.fixedResults = opts.fixedResults || [];
	    _this.results = _this.results.concat(_this.fixedResults);
	    _this.allowFreeForm = opts.allowFreeForm || false;
	    _this.displayProperty = opts.displayProperty || 'displayName';
	    return _possibleConstructorReturn(_this, _this);
	  }
	
	  Typeahead.prototype.refreshResults = function refreshResults(cb) {
	    var _this2 = this;
	
	    return _PrettyTypeahead.prototype.refreshResults.call(this, function (results) {
	      return cb(results.concat(_this2.fixedResults));
	    });
	  };
	
	  Typeahead.prototype.getDisplayValue = function getDisplayValue(item) {
	    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	      item = item[this.displayProperty];
	    }
	    return item;
	  };
	
	  Typeahead.prototype.renderItem = function renderItem(item) {
	    return _PrettyTypeahead.prototype.renderItem.call(this, this.getDisplayValue(item));
	  };
	
	  Typeahead.prototype.handleSelection = function handleSelection(selection) {
	    this.textInput.set(this.getDisplayValue(selection));
	    this.set(selection);
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
/* 39 */
/*!************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// Extends BaseTypeahead by adding:
	//
	// - the concept of "active"
	// - the use of arrow keys/enter to pick from the results list
	// - blur/focus events to close/open the results list
	// - add highlights for partial matches
	// - ESC key forces blur
	// - point to click from results list and hover highlight
	// - TODO: configurable placeholder text (should prob go in `TextInput`)
	// - TODO: i18n
	
	// ==================================================== //
	// use the child class `Typeahead` in your actual UI's! //
	// ==================================================== //
	
	// less
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.less */ 40);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 1);
	var BaseTypeahead = __webpack_require__(/*! ./BaseTypeahead */ 42);
	
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
	    var originalText = String(item);
	    var searchTerm = this.textInput.get();
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
	
	    return item;
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
/* 40 */
/*!***************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/styles.less ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./styles.less */ 41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 7)(content, {});
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
/* 41 */
/*!**********************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./src/Typeahead/PrettyTypeahead/styles.less ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-typeahead {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n}\n.ui-typeahead .results-list-container {\n  z-index: 1000;\n  box-shadow: gray 1px 1px 5px;\n  background-color: white;\n}\n.ui-typeahead .results-list-container ul {\n  list-style: none;\n  padding-left: 0;\n}\n.ui-typeahead .results-list-container li {\n  padding: 10px;\n  border-bottom: solid #F3F3F3 1px;\n}\n.ui-typeahead .results-list-container li:hover {\n  background-color: #00516f;\n  color: white;\n  cursor: pointer;\n}\n.ui-typeahead .results-list-container .ui-typeahead-highlight {\n  background-color: #00516f;\n  color: white;\n}\n", ""]);
	
	// exports


/***/ },
/* 42 */
/*!**************************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/BaseTypeahead/index.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	// handle just the absolute core behavior of a typeahead
	//
	//   1. a text input
	//   2. a list view of results based on current text
	
	// ============================================================== //
	// its recommended using the child class `Typeahead` in your UI's //
	// ============================================================== //
	
	// html
	;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var containerHTML = __webpack_require__(/*! ./baseTypeahead.html */ 43);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../../../BaseComponent */ 9);
	var TextInput = __webpack_require__(/*! ../../../TextInput */ 14);
	var ListView = __webpack_require__(/*! ../../../ListView */ 34);
	var assert = __webpack_require__(/*! ../../../assert.js */ 13);
	
	var BaseTypeahead = (function (_BaseComponent) {
	  _inherits(BaseTypeahead, _BaseComponent);
	
	  function BaseTypeahead(el, opts) {
	    _classCallCheck(this, BaseTypeahead);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.results = [];
	    _this.fetch = opts.fetch;
	    assert(typeof _this.fetch === 'function');
	
	    _this.$el.append(containerHTML);
	    _this.textInput = new TextInput(_this.$el.find('.input-container'));
	    _this.resultsListView = new ListView(_this.$el.find('.results-list-container'), {
	      fetch: function fetch(cb) {
	        _this.refreshResults(cb);
	      },
	      renderItem: opts.renderItem || null
	    });
	
	    // when an item is picked from the list view:
	    _this.resultsListView.subscribe(function (selection) {
	      console.log(selection);
	      // update text input with this value, set typeahead internal value
	      _this.handleSelection(selection);
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
	    this.textInput.set(selection);
	    this.set(selection);
	  };
	
	  BaseTypeahead.prototype.set = function set(v) {
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
/* 43 */
/*!************************************************************************!*\
  !*** ./src/Typeahead/PrettyTypeahead/BaseTypeahead/baseTypeahead.html ***!
  \************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class='ui-typeahead'>\n  <div class='input-container'></div>\n  <div class='results-list-container'></div>\n</div>\n\n";

/***/ }
/******/ ]);
//# sourceMappingURL=ui.js.map