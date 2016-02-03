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
	
	__webpack_require__(/*! babel-polyfill */ 1);
	var initFunc = __webpack_require__(/*! ./init */ 191);
	
	var UIComponents = {
	  // exposed dependences
	  Dot: __webpack_require__(/*! ./Dot */ 194),
	  i18n: __webpack_require__(/*! ./i18n */ 192),
	
	  // services
	  BaseFragmentFactory: __webpack_require__(/*! ./BaseFragmentFactory */ 199),
	  PubSubHub: __webpack_require__(/*! ./PubSubHub */ 201),
	  State: __webpack_require__(/*! ./State */ 202),
	  URL: __webpack_require__(/*! ./URL */ 211),
	  url: __webpack_require__(/*! url */ 212),
	
	  // components
	  Button: __webpack_require__(/*! ./Button */ 220),
	  CurrentLocation: __webpack_require__(/*! ./CurrentLocation */ 228),
	  CustomTextInput: __webpack_require__(/*! ./TextInput/CustomTextInput */ 232),
	  ExpandCollapse: __webpack_require__(/*! ./ExpandCollapse/ */ 240),
	  InfiniteScroll: __webpack_require__(/*! ./InfiniteScroll */ 245),
	  ListView: __webpack_require__(/*! ./ListView */ 246),
	  LocationTextInput: __webpack_require__(/*! ./LocationTextInput */ 250),
	  LocationTypeahead: __webpack_require__(/*! ./LocationTypeahead */ 258),
	  MultiSelect: __webpack_require__(/*! ./MultiSelect */ 268),
	  Pagination: __webpack_require__(/*! ./Pagination */ 272),
	  RadioButtons: __webpack_require__(/*! ./RadioButtons */ 274),
	  SingleSelect: __webpack_require__(/*! ./SingleSelect */ 276),
	  TextInput: __webpack_require__(/*! ./TextInput */ 254),
	  Toggle: __webpack_require__(/*! ./Toggle */ 243),
	  Typeahead: __webpack_require__(/*! ./Typeahead */ 262),
	  SentenceGenerator: __webpack_require__(/*! ./SentenceGenerator */ 280),
	  Spinner: __webpack_require__(/*! ./Spinner */ 284)
	};
	
	UIComponents.init = function init() {
	  return initFunc.apply(UIComponents, arguments);
	};
	
	module.exports = UIComponents;

/***/ },
/* 1 */
/*!***************************************!*\
  !*** ./~/babel-polyfill/lib/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(/*! core-js/shim */ 2);
	
	__webpack_require__(/*! babel-regenerator-runtime */ 189);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!***************************!*\
  !*** ./~/core-js/shim.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./modules/es5 */ 3);
	__webpack_require__(/*! ./modules/es6.symbol */ 36);
	__webpack_require__(/*! ./modules/es6.object.assign */ 42);
	__webpack_require__(/*! ./modules/es6.object.is */ 44);
	__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ 46);
	__webpack_require__(/*! ./modules/es6.object.to-string */ 48);
	__webpack_require__(/*! ./modules/es6.object.freeze */ 50);
	__webpack_require__(/*! ./modules/es6.object.seal */ 52);
	__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ 53);
	__webpack_require__(/*! ./modules/es6.object.is-frozen */ 54);
	__webpack_require__(/*! ./modules/es6.object.is-sealed */ 55);
	__webpack_require__(/*! ./modules/es6.object.is-extensible */ 56);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ 57);
	__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ 58);
	__webpack_require__(/*! ./modules/es6.object.keys */ 59);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ 60);
	__webpack_require__(/*! ./modules/es6.function.name */ 61);
	__webpack_require__(/*! ./modules/es6.function.has-instance */ 62);
	__webpack_require__(/*! ./modules/es6.number.constructor */ 63);
	__webpack_require__(/*! ./modules/es6.number.epsilon */ 66);
	__webpack_require__(/*! ./modules/es6.number.is-finite */ 67);
	__webpack_require__(/*! ./modules/es6.number.is-integer */ 68);
	__webpack_require__(/*! ./modules/es6.number.is-nan */ 70);
	__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ 71);
	__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ 72);
	__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ 73);
	__webpack_require__(/*! ./modules/es6.number.parse-float */ 74);
	__webpack_require__(/*! ./modules/es6.number.parse-int */ 75);
	__webpack_require__(/*! ./modules/es6.math.acosh */ 76);
	__webpack_require__(/*! ./modules/es6.math.asinh */ 78);
	__webpack_require__(/*! ./modules/es6.math.atanh */ 79);
	__webpack_require__(/*! ./modules/es6.math.cbrt */ 80);
	__webpack_require__(/*! ./modules/es6.math.clz32 */ 82);
	__webpack_require__(/*! ./modules/es6.math.cosh */ 83);
	__webpack_require__(/*! ./modules/es6.math.expm1 */ 84);
	__webpack_require__(/*! ./modules/es6.math.fround */ 86);
	__webpack_require__(/*! ./modules/es6.math.hypot */ 87);
	__webpack_require__(/*! ./modules/es6.math.imul */ 88);
	__webpack_require__(/*! ./modules/es6.math.log10 */ 89);
	__webpack_require__(/*! ./modules/es6.math.log1p */ 90);
	__webpack_require__(/*! ./modules/es6.math.log2 */ 91);
	__webpack_require__(/*! ./modules/es6.math.sign */ 92);
	__webpack_require__(/*! ./modules/es6.math.sinh */ 93);
	__webpack_require__(/*! ./modules/es6.math.tanh */ 94);
	__webpack_require__(/*! ./modules/es6.math.trunc */ 95);
	__webpack_require__(/*! ./modules/es6.string.from-code-point */ 96);
	__webpack_require__(/*! ./modules/es6.string.raw */ 97);
	__webpack_require__(/*! ./modules/es6.string.trim */ 98);
	__webpack_require__(/*! ./modules/es6.string.iterator */ 99);
	__webpack_require__(/*! ./modules/es6.string.code-point-at */ 104);
	__webpack_require__(/*! ./modules/es6.string.ends-with */ 105);
	__webpack_require__(/*! ./modules/es6.string.includes */ 109);
	__webpack_require__(/*! ./modules/es6.string.repeat */ 110);
	__webpack_require__(/*! ./modules/es6.string.starts-with */ 112);
	__webpack_require__(/*! ./modules/es6.array.from */ 113);
	__webpack_require__(/*! ./modules/es6.array.of */ 118);
	__webpack_require__(/*! ./modules/es6.array.iterator */ 119);
	__webpack_require__(/*! ./modules/es6.array.species */ 122);
	__webpack_require__(/*! ./modules/es6.array.copy-within */ 124);
	__webpack_require__(/*! ./modules/es6.array.fill */ 126);
	__webpack_require__(/*! ./modules/es6.array.find */ 128);
	__webpack_require__(/*! ./modules/es6.array.find-index */ 129);
	__webpack_require__(/*! ./modules/es6.regexp.constructor */ 130);
	__webpack_require__(/*! ./modules/es6.regexp.flags */ 132);
	__webpack_require__(/*! ./modules/es6.regexp.match */ 133);
	__webpack_require__(/*! ./modules/es6.regexp.replace */ 135);
	__webpack_require__(/*! ./modules/es6.regexp.search */ 136);
	__webpack_require__(/*! ./modules/es6.regexp.split */ 137);
	__webpack_require__(/*! ./modules/es6.promise */ 138);
	__webpack_require__(/*! ./modules/es6.map */ 145);
	__webpack_require__(/*! ./modules/es6.set */ 148);
	__webpack_require__(/*! ./modules/es6.weak-map */ 149);
	__webpack_require__(/*! ./modules/es6.weak-set */ 151);
	__webpack_require__(/*! ./modules/es6.reflect.apply */ 152);
	__webpack_require__(/*! ./modules/es6.reflect.construct */ 153);
	__webpack_require__(/*! ./modules/es6.reflect.define-property */ 154);
	__webpack_require__(/*! ./modules/es6.reflect.delete-property */ 155);
	__webpack_require__(/*! ./modules/es6.reflect.enumerate */ 156);
	__webpack_require__(/*! ./modules/es6.reflect.get */ 157);
	__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ 158);
	__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ 159);
	__webpack_require__(/*! ./modules/es6.reflect.has */ 160);
	__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ 161);
	__webpack_require__(/*! ./modules/es6.reflect.own-keys */ 162);
	__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ 164);
	__webpack_require__(/*! ./modules/es6.reflect.set */ 165);
	__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ 166);
	__webpack_require__(/*! ./modules/es7.array.includes */ 167);
	__webpack_require__(/*! ./modules/es7.string.at */ 168);
	__webpack_require__(/*! ./modules/es7.string.pad-left */ 169);
	__webpack_require__(/*! ./modules/es7.string.pad-right */ 171);
	__webpack_require__(/*! ./modules/es7.string.trim-left */ 172);
	__webpack_require__(/*! ./modules/es7.string.trim-right */ 173);
	__webpack_require__(/*! ./modules/es7.regexp.escape */ 174);
	__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ 176);
	__webpack_require__(/*! ./modules/es7.object.values */ 177);
	__webpack_require__(/*! ./modules/es7.object.entries */ 179);
	__webpack_require__(/*! ./modules/es7.map.to-json */ 180);
	__webpack_require__(/*! ./modules/es7.set.to-json */ 182);
	__webpack_require__(/*! ./modules/js.array.statics */ 183);
	__webpack_require__(/*! ./modules/web.timers */ 184);
	__webpack_require__(/*! ./modules/web.immediate */ 187);
	__webpack_require__(/*! ./modules/web.dom.iterable */ 188);
	module.exports = __webpack_require__(/*! ./modules/$.core */ 7);

/***/ },
/* 3 */
/*!**********************************!*\
  !*** ./~/core-js/modules/es5.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(/*! ./$ */ 4)
	  , $export           = __webpack_require__(/*! ./$.export */ 5)
	  , DESCRIPTORS       = __webpack_require__(/*! ./$.descriptors */ 10)
	  , createDesc        = __webpack_require__(/*! ./$.property-desc */ 9)
	  , html              = __webpack_require__(/*! ./$.html */ 16)
	  , cel               = __webpack_require__(/*! ./$.dom-create */ 17)
	  , has               = __webpack_require__(/*! ./$.has */ 19)
	  , cof               = __webpack_require__(/*! ./$.cof */ 20)
	  , invoke            = __webpack_require__(/*! ./$.invoke */ 21)
	  , fails             = __webpack_require__(/*! ./$.fails */ 11)
	  , anObject          = __webpack_require__(/*! ./$.an-object */ 22)
	  , aFunction         = __webpack_require__(/*! ./$.a-function */ 15)
	  , isObject          = __webpack_require__(/*! ./$.is-object */ 18)
	  , toObject          = __webpack_require__(/*! ./$.to-object */ 23)
	  , toIObject         = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , toInteger         = __webpack_require__(/*! ./$.to-integer */ 27)
	  , toIndex           = __webpack_require__(/*! ./$.to-index */ 28)
	  , toLength          = __webpack_require__(/*! ./$.to-length */ 29)
	  , IObject           = __webpack_require__(/*! ./$.iobject */ 26)
	  , IE_PROTO          = __webpack_require__(/*! ./$.uid */ 13)('__proto__')
	  , createArrayMethod = __webpack_require__(/*! ./$.array-methods */ 30)
	  , arrayIndexOf      = __webpack_require__(/*! ./$.array-includes */ 35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(/*! ./$.is-array */ 32)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/*!********************************!*\
  !*** ./~/core-js/modules/$.js ***!
  \********************************/
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/*!***************************************!*\
  !*** ./~/core-js/modules/$.export.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 6)
	  , core      = __webpack_require__(/*! ./$.core */ 7)
	  , hide      = __webpack_require__(/*! ./$.hide */ 8)
	  , redefine  = __webpack_require__(/*! ./$.redefine */ 12)
	  , ctx       = __webpack_require__(/*! ./$.ctx */ 14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/*!***************************************!*\
  !*** ./~/core-js/modules/$.global.js ***!
  \***************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/*!*************************************!*\
  !*** ./~/core-js/modules/$.core.js ***!
  \*************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/*!*************************************!*\
  !*** ./~/core-js/modules/$.hide.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 4)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 9);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/$.property-desc.js ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/*!********************************************!*\
  !*** ./~/core-js/modules/$.descriptors.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/*!**************************************!*\
  !*** ./~/core-js/modules/$.fails.js ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/$.redefine.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(/*! ./$.global */ 6)
	  , hide      = __webpack_require__(/*! ./$.hide */ 8)
	  , SRC       = __webpack_require__(/*! ./$.uid */ 13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(/*! ./$.core */ 7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/*!************************************!*\
  !*** ./~/core-js/modules/$.uid.js ***!
  \************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/*!************************************!*\
  !*** ./~/core-js/modules/$.ctx.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.a-function.js ***!
  \*******************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/*!*************************************!*\
  !*** ./~/core-js/modules/$.html.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.global */ 6).document && document.documentElement;

/***/ },
/* 17 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.dom-create.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 18)
	  , document = __webpack_require__(/*! ./$.global */ 6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.is-object.js ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/*!************************************!*\
  !*** ./~/core-js/modules/$.has.js ***!
  \************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/*!************************************!*\
  !*** ./~/core-js/modules/$.cof.js ***!
  \************************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/*!***************************************!*\
  !*** ./~/core-js/modules/$.invoke.js ***!
  \***************************************/
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.an-object.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.to-object.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./$.defined */ 24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/*!****************************************!*\
  !*** ./~/core-js/modules/$.defined.js ***!
  \****************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.to-iobject.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 26)
	  , defined = __webpack_require__(/*! ./$.defined */ 24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/*!****************************************!*\
  !*** ./~/core-js/modules/$.iobject.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.to-integer.js ***!
  \*******************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/$.to-index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.to-length.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/$.array-methods.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(/*! ./$.ctx */ 14)
	  , IObject  = __webpack_require__(/*! ./$.iobject */ 26)
	  , toObject = __webpack_require__(/*! ./$.to-object */ 23)
	  , toLength = __webpack_require__(/*! ./$.to-length */ 29)
	  , asc      = __webpack_require__(/*! ./$.array-species-create */ 31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/$.array-species-create.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18)
	  , isArray  = __webpack_require__(/*! ./$.is-array */ 32)
	  , SPECIES  = __webpack_require__(/*! ./$.wks */ 33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/$.is-array.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./$.cof */ 20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/*!************************************!*\
  !*** ./~/core-js/modules/$.wks.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(/*! ./$.shared */ 34)('wks')
	  , uid    = __webpack_require__(/*! ./$.uid */ 13)
	  , Symbol = __webpack_require__(/*! ./$.global */ 6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/*!***************************************!*\
  !*** ./~/core-js/modules/$.shared.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$.global */ 6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/$.array-includes.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , toLength  = __webpack_require__(/*! ./$.to-length */ 29)
	  , toIndex   = __webpack_require__(/*! ./$.to-index */ 28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/es6.symbol.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(/*! ./$ */ 4)
	  , global         = __webpack_require__(/*! ./$.global */ 6)
	  , has            = __webpack_require__(/*! ./$.has */ 19)
	  , DESCRIPTORS    = __webpack_require__(/*! ./$.descriptors */ 10)
	  , $export        = __webpack_require__(/*! ./$.export */ 5)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 12)
	  , $fails         = __webpack_require__(/*! ./$.fails */ 11)
	  , shared         = __webpack_require__(/*! ./$.shared */ 34)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 37)
	  , uid            = __webpack_require__(/*! ./$.uid */ 13)
	  , wks            = __webpack_require__(/*! ./$.wks */ 33)
	  , keyOf          = __webpack_require__(/*! ./$.keyof */ 38)
	  , $names         = __webpack_require__(/*! ./$.get-names */ 39)
	  , enumKeys       = __webpack_require__(/*! ./$.enum-keys */ 40)
	  , isArray        = __webpack_require__(/*! ./$.is-array */ 32)
	  , anObject       = __webpack_require__(/*! ./$.an-object */ 22)
	  , toIObject      = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , createDesc     = __webpack_require__(/*! ./$.property-desc */ 9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(/*! ./$.library */ 41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/$.set-to-string-tag.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./$ */ 4).setDesc
	  , has = __webpack_require__(/*! ./$.has */ 19)
	  , TAG = __webpack_require__(/*! ./$.wks */ 33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/*!**************************************!*\
  !*** ./~/core-js/modules/$.keyof.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(/*! ./$ */ 4)
	  , toIObject = __webpack_require__(/*! ./$.to-iobject */ 25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.get-names.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , getNames  = __webpack_require__(/*! ./$ */ 4).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.enum-keys.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(/*! ./$ */ 4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/*!****************************************!*\
  !*** ./~/core-js/modules/$.library.js ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.assign.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(/*! ./$.object-assign */ 43)});

/***/ },
/* 43 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/$.object-assign.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(/*! ./$ */ 4)
	  , toObject = __webpack_require__(/*! ./$.to-object */ 23)
	  , IObject  = __webpack_require__(/*! ./$.iobject */ 26);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(/*! ./$.fails */ 11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.object.is.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	$export($export.S, 'Object', {is: __webpack_require__(/*! ./$.same-value */ 45)});

/***/ },
/* 45 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.same-value.js ***!
  \*******************************************/
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./$.set-proto */ 47).set});

/***/ },
/* 47 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.set-proto.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(/*! ./$ */ 4).getDesc
	  , isObject = __webpack_require__(/*! ./$.is-object */ 18)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(/*! ./$.ctx */ 14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.to-string.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(/*! ./$.classof */ 49)
	  , test    = {};
	test[__webpack_require__(/*! ./$.wks */ 33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(/*! ./$.redefine */ 12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/*!****************************************!*\
  !*** ./~/core-js/modules/$.classof.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 20)
	  , TAG = __webpack_require__(/*! ./$.wks */ 33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.freeze.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.object-sap.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , core    = __webpack_require__(/*! ./$.core */ 7)
	  , fails   = __webpack_require__(/*! ./$.fails */ 11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.object.seal.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es6.object.prevent-extensions.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-frozen.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-sealed.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-extensible.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/*!*********************************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 25);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-prototype-of.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(/*! ./$.to-object */ 23);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.object.keys.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./$.to-object */ 23);
	
	__webpack_require__(/*! ./$.object-sap */ 51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/*!****************************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-own-property-names.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(/*! ./$.object-sap */ 51)('getOwnPropertyNames', function(){
	  return __webpack_require__(/*! ./$.get-names */ 39).get;
	});

/***/ },
/* 61 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.function.name.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(/*! ./$ */ 4).setDesc
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 9)
	  , has        = __webpack_require__(/*! ./$.has */ 19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(/*! ./$.descriptors */ 10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es6.function.has-instance.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(/*! ./$ */ 4)
	  , isObject      = __webpack_require__(/*! ./$.is-object */ 18)
	  , HAS_INSTANCE  = __webpack_require__(/*! ./$.wks */ 33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.number.constructor.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(/*! ./$ */ 4)
	  , global      = __webpack_require__(/*! ./$.global */ 6)
	  , has         = __webpack_require__(/*! ./$.has */ 19)
	  , cof         = __webpack_require__(/*! ./$.cof */ 20)
	  , toPrimitive = __webpack_require__(/*! ./$.to-primitive */ 64)
	  , fails       = __webpack_require__(/*! ./$.fails */ 11)
	  , $trim       = __webpack_require__(/*! ./$.string-trim */ 65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(/*! ./$.descriptors */ 10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(/*! ./$.redefine */ 12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/$.to-primitive.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./$.is-object */ 18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/*!********************************************!*\
  !*** ./~/core-js/modules/$.string-trim.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , defined = __webpack_require__(/*! ./$.defined */ 24)
	  , fails   = __webpack_require__(/*! ./$.fails */ 11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 66 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.number.epsilon.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-finite.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(/*! ./$.export */ 5)
	  , _isFinite = __webpack_require__(/*! ./$.global */ 6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-integer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(/*! ./$.is-integer */ 69)});

/***/ },
/* 69 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.is-integer.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-nan.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-safe-integer.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(/*! ./$.export */ 5)
	  , isInteger = __webpack_require__(/*! ./$.is-integer */ 69)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.number.max-safe-integer.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.number.min-safe-integer.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.number.parse-float.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.number.parse-int.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.acosh.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , log1p   = __webpack_require__(/*! ./$.math-log1p */ 77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.math-log1p.js ***!
  \*******************************************/
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.asinh.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.atanh.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.cbrt.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , sign    = __webpack_require__(/*! ./$.math-sign */ 81);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.math-sign.js ***!
  \******************************************/
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.clz32.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.cosh.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.expm1.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(/*! ./$.math-expm1 */ 85)});

/***/ },
/* 85 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.math-expm1.js ***!
  \*******************************************/
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.math.fround.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(/*! ./$.export */ 5)
	  , sign      = __webpack_require__(/*! ./$.math-sign */ 81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.hypot.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.imul.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(/*! ./$.fails */ 11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.log10.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.log1p.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(/*! ./$.math-log1p */ 77)});

/***/ },
/* 91 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.log2.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.sign.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(/*! ./$.math-sign */ 81)});

/***/ },
/* 93 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.sinh.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , expm1   = __webpack_require__(/*! ./$.math-expm1 */ 85)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(/*! ./$.fails */ 11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.tanh.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , expm1   = __webpack_require__(/*! ./$.math-expm1 */ 85)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.trunc.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.string.from-code-point.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(/*! ./$.export */ 5)
	  , toIndex        = __webpack_require__(/*! ./$.to-index */ 28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.raw.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(/*! ./$.export */ 5)
	  , toIObject = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , toLength  = __webpack_require__(/*! ./$.to-length */ 29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.trim.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(/*! ./$.string-trim */ 65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.iterator.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./$.string-at */ 100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.string-at.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 27)
	  , defined   = __webpack_require__(/*! ./$.defined */ 24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/*!********************************************!*\
  !*** ./~/core-js/modules/$.iter-define.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./$.library */ 41)
	  , $export        = __webpack_require__(/*! ./$.export */ 5)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 12)
	  , hide           = __webpack_require__(/*! ./$.hide */ 8)
	  , has            = __webpack_require__(/*! ./$.has */ 19)
	  , Iterators      = __webpack_require__(/*! ./$.iterators */ 102)
	  , $iterCreate    = __webpack_require__(/*! ./$.iter-create */ 103)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 37)
	  , getProto       = __webpack_require__(/*! ./$ */ 4).getProto
	  , ITERATOR       = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.iterators.js ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/*!********************************************!*\
  !*** ./~/core-js/modules/$.iter-create.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 4)
	  , descriptor     = __webpack_require__(/*! ./$.property-desc */ 9)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 37)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 8)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es6.string.code-point-at.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $at     = __webpack_require__(/*! ./$.string-at */ 100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.string.ends-with.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(/*! ./$.export */ 5)
	  , toLength  = __webpack_require__(/*! ./$.to-length */ 29)
	  , context   = __webpack_require__(/*! ./$.string-context */ 106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(/*! ./$.fails-is-regexp */ 108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/$.string-context.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(/*! ./$.is-regexp */ 107)
	  , defined  = __webpack_require__(/*! ./$.defined */ 24);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.is-regexp.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(/*! ./$.is-object */ 18)
	  , cof      = __webpack_require__(/*! ./$.cof */ 20)
	  , MATCH    = __webpack_require__(/*! ./$.wks */ 33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/*!************************************************!*\
  !*** ./~/core-js/modules/$.fails-is-regexp.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(/*! ./$.wks */ 33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.includes.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(/*! ./$.export */ 5)
	  , context  = __webpack_require__(/*! ./$.string-context */ 106)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(/*! ./$.fails-is-regexp */ 108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.repeat.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(/*! ./$.string-repeat */ 111)
	});

/***/ },
/* 111 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/$.string-repeat.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 27)
	  , defined   = __webpack_require__(/*! ./$.defined */ 24);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(/*! ./$.export */ 5)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 29)
	  , context     = __webpack_require__(/*! ./$.string-context */ 106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(/*! ./$.fails-is-regexp */ 108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.from.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(/*! ./$.ctx */ 14)
	  , $export     = __webpack_require__(/*! ./$.export */ 5)
	  , toObject    = __webpack_require__(/*! ./$.to-object */ 23)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 114)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 115)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 29)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 116);
	$export($export.S + $export.F * !__webpack_require__(/*! ./$.iter-detect */ 117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.iter-call.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./$.an-object */ 22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/$.is-array-iter.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./$.iterators */ 102)
	  , ITERATOR   = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/core.get-iterator-method.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 49)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 102);
	module.exports = __webpack_require__(/*! ./$.core */ 7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/*!********************************************!*\
  !*** ./~/core-js/modules/$.iter-detect.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.array.of.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(/*! ./$.fails */ 11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 120)
	  , step             = __webpack_require__(/*! ./$.iter-step */ 121)
	  , Iterators        = __webpack_require__(/*! ./$.iterators */ 102)
	  , toIObject        = __webpack_require__(/*! ./$.to-iobject */ 25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/$.add-to-unscopables.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(/*! ./$.wks */ 33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(/*! ./$.hide */ 8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.iter-step.js ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.array.species.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./$.set-species */ 123)('Array');

/***/ },
/* 123 */
/*!********************************************!*\
  !*** ./~/core-js/modules/$.set-species.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(/*! ./$.global */ 6)
	  , $           = __webpack_require__(/*! ./$ */ 4)
	  , DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 10)
	  , SPECIES     = __webpack_require__(/*! ./$.wks */ 33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.array.copy-within.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(/*! ./$.array-copy-within */ 125)});
	
	__webpack_require__(/*! ./$.add-to-unscopables */ 120)('copyWithin');

/***/ },
/* 125 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/$.array-copy-within.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(/*! ./$.to-object */ 23)
	  , toIndex  = __webpack_require__(/*! ./$.to-index */ 28)
	  , toLength = __webpack_require__(/*! ./$.to-length */ 29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.fill.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(/*! ./$.array-fill */ 127)});
	
	__webpack_require__(/*! ./$.add-to-unscopables */ 120)('fill');

/***/ },
/* 127 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.array-fill.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(/*! ./$.to-object */ 23)
	  , toIndex  = __webpack_require__(/*! ./$.to-index */ 28)
	  , toLength = __webpack_require__(/*! ./$.to-length */ 29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.find.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $find   = __webpack_require__(/*! ./$.array-methods */ 30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./$.add-to-unscopables */ 120)(KEY);

/***/ },
/* 129 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.array.find-index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $find   = __webpack_require__(/*! ./$.array-methods */ 30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./$.add-to-unscopables */ 120)(KEY);

/***/ },
/* 130 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.constructor.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(/*! ./$ */ 4)
	  , global   = __webpack_require__(/*! ./$.global */ 6)
	  , isRegExp = __webpack_require__(/*! ./$.is-regexp */ 107)
	  , $flags   = __webpack_require__(/*! ./$.flags */ 131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(/*! ./$.descriptors */ 10) && (!CORRECT_NEW || __webpack_require__(/*! ./$.fails */ 11)(function(){
	  re2[__webpack_require__(/*! ./$.wks */ 33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(/*! ./$.redefine */ 12)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(/*! ./$.set-species */ 123)('RegExp');

/***/ },
/* 131 */
/*!**************************************!*\
  !*** ./~/core-js/modules/$.flags.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(/*! ./$.an-object */ 22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(/*! ./$ */ 4);
	if(__webpack_require__(/*! ./$.descriptors */ 10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(/*! ./$.flags */ 131)
	});

/***/ },
/* 133 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.match.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(/*! ./$.fix-re-wks */ 134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.fix-re-wks.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(/*! ./$.hide */ 8)
	  , redefine = __webpack_require__(/*! ./$.redefine */ 12)
	  , fails    = __webpack_require__(/*! ./$.fails */ 11)
	  , defined  = __webpack_require__(/*! ./$.defined */ 24)
	  , wks      = __webpack_require__(/*! ./$.wks */ 33);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(/*! ./$.fix-re-wks */ 134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.search.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(/*! ./$.fix-re-wks */ 134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.split.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(/*! ./$.fix-re-wks */ 134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/*!******************************************!*\
  !*** ./~/core-js/modules/es6.promise.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(/*! ./$ */ 4)
	  , LIBRARY    = __webpack_require__(/*! ./$.library */ 41)
	  , global     = __webpack_require__(/*! ./$.global */ 6)
	  , ctx        = __webpack_require__(/*! ./$.ctx */ 14)
	  , classof    = __webpack_require__(/*! ./$.classof */ 49)
	  , $export    = __webpack_require__(/*! ./$.export */ 5)
	  , isObject   = __webpack_require__(/*! ./$.is-object */ 18)
	  , anObject   = __webpack_require__(/*! ./$.an-object */ 22)
	  , aFunction  = __webpack_require__(/*! ./$.a-function */ 15)
	  , strictNew  = __webpack_require__(/*! ./$.strict-new */ 139)
	  , forOf      = __webpack_require__(/*! ./$.for-of */ 140)
	  , setProto   = __webpack_require__(/*! ./$.set-proto */ 47).set
	  , same       = __webpack_require__(/*! ./$.same-value */ 45)
	  , SPECIES    = __webpack_require__(/*! ./$.wks */ 33)('species')
	  , speciesConstructor = __webpack_require__(/*! ./$.species-constructor */ 141)
	  , asap       = __webpack_require__(/*! ./$.microtask */ 142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(/*! ./$.descriptors */ 10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(/*! ./$.redefine-all */ 144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(/*! ./$.set-to-string-tag */ 37)(P, PROMISE);
	__webpack_require__(/*! ./$.set-species */ 123)(PROMISE);
	Wrapper = __webpack_require__(/*! ./$.core */ 7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./$.iter-detect */ 117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.strict-new.js ***!
  \*******************************************/
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/*!***************************************!*\
  !*** ./~/core-js/modules/$.for-of.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./$.ctx */ 14)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 114)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 115)
	  , anObject    = __webpack_require__(/*! ./$.an-object */ 22)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 29)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/$.species-constructor.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./$.an-object */ 22)
	  , aFunction = __webpack_require__(/*! ./$.a-function */ 15)
	  , SPECIES   = __webpack_require__(/*! ./$.wks */ 33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/*!******************************************!*\
  !*** ./~/core-js/modules/$.microtask.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 6)
	  , macrotask = __webpack_require__(/*! ./$.task */ 143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(/*! ./$.cof */ 20)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/*!*************************************!*\
  !*** ./~/core-js/modules/$.task.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(/*! ./$.ctx */ 14)
	  , invoke             = __webpack_require__(/*! ./$.invoke */ 21)
	  , html               = __webpack_require__(/*! ./$.html */ 16)
	  , cel                = __webpack_require__(/*! ./$.dom-create */ 17)
	  , global             = __webpack_require__(/*! ./$.global */ 6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(/*! ./$.cof */ 20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/$.redefine-all.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(/*! ./$.redefine */ 12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/*!**************************************!*\
  !*** ./~/core-js/modules/es6.map.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(/*! ./$.collection-strong */ 146);
	
	// 23.1 Map Objects
	__webpack_require__(/*! ./$.collection */ 147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/$.collection-strong.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(/*! ./$ */ 4)
	  , hide         = __webpack_require__(/*! ./$.hide */ 8)
	  , redefineAll  = __webpack_require__(/*! ./$.redefine-all */ 144)
	  , ctx          = __webpack_require__(/*! ./$.ctx */ 14)
	  , strictNew    = __webpack_require__(/*! ./$.strict-new */ 139)
	  , defined      = __webpack_require__(/*! ./$.defined */ 24)
	  , forOf        = __webpack_require__(/*! ./$.for-of */ 140)
	  , $iterDefine  = __webpack_require__(/*! ./$.iter-define */ 101)
	  , step         = __webpack_require__(/*! ./$.iter-step */ 121)
	  , ID           = __webpack_require__(/*! ./$.uid */ 13)('id')
	  , $has         = __webpack_require__(/*! ./$.has */ 19)
	  , isObject     = __webpack_require__(/*! ./$.is-object */ 18)
	  , setSpecies   = __webpack_require__(/*! ./$.set-species */ 123)
	  , DESCRIPTORS  = __webpack_require__(/*! ./$.descriptors */ 10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.collection.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(/*! ./$.global */ 6)
	  , $export        = __webpack_require__(/*! ./$.export */ 5)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 12)
	  , redefineAll    = __webpack_require__(/*! ./$.redefine-all */ 144)
	  , forOf          = __webpack_require__(/*! ./$.for-of */ 140)
	  , strictNew      = __webpack_require__(/*! ./$.strict-new */ 139)
	  , isObject       = __webpack_require__(/*! ./$.is-object */ 18)
	  , fails          = __webpack_require__(/*! ./$.fails */ 11)
	  , $iterDetect    = __webpack_require__(/*! ./$.iter-detect */ 117)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 37);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 148 */
/*!**************************************!*\
  !*** ./~/core-js/modules/es6.set.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(/*! ./$.collection-strong */ 146);
	
	// 23.2 Set Objects
	__webpack_require__(/*! ./$.collection */ 147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.weak-map.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(/*! ./$ */ 4)
	  , redefine     = __webpack_require__(/*! ./$.redefine */ 12)
	  , weak         = __webpack_require__(/*! ./$.collection-weak */ 150)
	  , isObject     = __webpack_require__(/*! ./$.is-object */ 18)
	  , has          = __webpack_require__(/*! ./$.has */ 19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(/*! ./$.collection */ 147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/*!************************************************!*\
  !*** ./~/core-js/modules/$.collection-weak.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(/*! ./$.hide */ 8)
	  , redefineAll       = __webpack_require__(/*! ./$.redefine-all */ 144)
	  , anObject          = __webpack_require__(/*! ./$.an-object */ 22)
	  , isObject          = __webpack_require__(/*! ./$.is-object */ 18)
	  , strictNew         = __webpack_require__(/*! ./$.strict-new */ 139)
	  , forOf             = __webpack_require__(/*! ./$.for-of */ 140)
	  , createArrayMethod = __webpack_require__(/*! ./$.array-methods */ 30)
	  , $has              = __webpack_require__(/*! ./$.has */ 19)
	  , WEAK              = __webpack_require__(/*! ./$.uid */ 13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.weak-set.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(/*! ./$.collection-weak */ 150);
	
	// 23.4 WeakSet Objects
	__webpack_require__(/*! ./$.collection */ 147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.apply.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.construct.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(/*! ./$ */ 4)
	  , $export   = __webpack_require__(/*! ./$.export */ 5)
	  , aFunction = __webpack_require__(/*! ./$.a-function */ 15)
	  , anObject  = __webpack_require__(/*! ./$.an-object */ 22)
	  , isObject  = __webpack_require__(/*! ./$.is-object */ 18)
	  , bind      = Function.bind || __webpack_require__(/*! ./$.core */ 7).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(/*! ./$.fails */ 11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.define-property.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(/*! ./$ */ 4)
	  , $export  = __webpack_require__(/*! ./$.export */ 5)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(/*! ./$.fails */ 11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.delete-property.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(/*! ./$.export */ 5)
	  , getDesc  = __webpack_require__(/*! ./$ */ 4).getDesc
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.enumerate.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(/*! ./$.export */ 5)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(/*! ./$.iter-create */ 103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(/*! ./$ */ 4)
	  , has      = __webpack_require__(/*! ./$.has */ 19)
	  , $export  = __webpack_require__(/*! ./$.export */ 5)
	  , isObject = __webpack_require__(/*! ./$.is-object */ 18)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/*!**********************************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(/*! ./$ */ 4)
	  , $export  = __webpack_require__(/*! ./$.export */ 5)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(/*! ./$.export */ 5)
	  , getProto = __webpack_require__(/*! ./$ */ 4).getProto
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.has.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.is-extensible.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(/*! ./$.export */ 5)
	  , anObject      = __webpack_require__(/*! ./$.an-object */ 22)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.own-keys.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(/*! ./$.own-keys */ 163)});

/***/ },
/* 163 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/$.own-keys.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(/*! ./$ */ 4)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 22)
	  , Reflect  = __webpack_require__(/*! ./$.global */ 6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/*!*************************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(/*! ./$.export */ 5)
	  , anObject           = __webpack_require__(/*! ./$.an-object */ 22)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.set.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(/*! ./$ */ 4)
	  , has        = __webpack_require__(/*! ./$.has */ 19)
	  , $export    = __webpack_require__(/*! ./$.export */ 5)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 9)
	  , anObject   = __webpack_require__(/*! ./$.an-object */ 22)
	  , isObject   = __webpack_require__(/*! ./$.is-object */ 18);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(/*! ./$.export */ 5)
	  , setProto = __webpack_require__(/*! ./$.set-proto */ 47);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.array.includes.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(/*! ./$.export */ 5)
	  , $includes = __webpack_require__(/*! ./$.array-includes */ 35)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(/*! ./$.add-to-unscopables */ 120)('includes');

/***/ },
/* 168 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es7.string.at.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $at     = __webpack_require__(/*! ./$.string-at */ 100)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es7.string.pad-left.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $pad    = __webpack_require__(/*! ./$.string-pad */ 170);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/$.string-pad.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(/*! ./$.to-length */ 29)
	  , repeat   = __webpack_require__(/*! ./$.string-repeat */ 111)
	  , defined  = __webpack_require__(/*! ./$.defined */ 24);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.pad-right.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $pad    = __webpack_require__(/*! ./$.string-pad */ 170);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.trim-left.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(/*! ./$.string-trim */ 65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es7.string.trim-right.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(/*! ./$.string-trim */ 65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es7.regexp.escape.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $re     = __webpack_require__(/*! ./$.replacer */ 175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/$.replacer.js ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/*!**********************************************************************!*\
  !*** ./~/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(/*! ./$ */ 4)
	  , $export    = __webpack_require__(/*! ./$.export */ 5)
	  , ownKeys    = __webpack_require__(/*! ./$.own-keys */ 163)
	  , toIObject  = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 9);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es7.object.values.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $values = __webpack_require__(/*! ./$.object-to-array */ 178)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/*!************************************************!*\
  !*** ./~/core-js/modules/$.object-to-array.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(/*! ./$ */ 4)
	  , toIObject = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.object.entries.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(/*! ./$.export */ 5)
	  , $entries = __webpack_require__(/*! ./$.object-to-array */ 178)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es7.map.to-json.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(/*! ./$.collection-to-json */ 181)('Map')});

/***/ },
/* 181 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/$.collection-to-json.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(/*! ./$.for-of */ 140)
	  , classof = __webpack_require__(/*! ./$.classof */ 49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es7.set.to-json.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(/*! ./$.export */ 5);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(/*! ./$.collection-to-json */ 181)('Set')});

/***/ },
/* 183 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/js.array.statics.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(/*! ./$ */ 4)
	  , $export = __webpack_require__(/*! ./$.export */ 5)
	  , $ctx    = __webpack_require__(/*! ./$.ctx */ 14)
	  , $Array  = __webpack_require__(/*! ./$.core */ 7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/web.timers.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(/*! ./$.global */ 6)
	  , $export    = __webpack_require__(/*! ./$.export */ 5)
	  , invoke     = __webpack_require__(/*! ./$.invoke */ 21)
	  , partial    = __webpack_require__(/*! ./$.partial */ 185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/*!****************************************!*\
  !*** ./~/core-js/modules/$.partial.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(/*! ./$.path */ 186)
	  , invoke    = __webpack_require__(/*! ./$.invoke */ 21)
	  , aFunction = __webpack_require__(/*! ./$.a-function */ 15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/*!*************************************!*\
  !*** ./~/core-js/modules/$.path.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.global */ 6);

/***/ },
/* 187 */
/*!********************************************!*\
  !*** ./~/core-js/modules/web.immediate.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./$.export */ 5)
	  , $task   = __webpack_require__(/*! ./$.task */ 143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/web.dom.iterable.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 119);
	var global      = __webpack_require__(/*! ./$.global */ 6)
	  , hide        = __webpack_require__(/*! ./$.hide */ 8)
	  , Iterators   = __webpack_require__(/*! ./$.iterators */ 102)
	  , ITERATOR    = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/*!************************************************!*\
  !*** ./~/babel-regenerator-runtime/runtime.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./~/node-libs-browser/~/process/browser.js */ 190)))

/***/ },
/* 190 */
/*!**************************************************!*\
  !*** ./~/node-libs-browser/~/process/browser.js ***!
  \**************************************************/
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 191 */
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var i18n = __webpack_require__(/*! ./i18n */ 192);
	
	module.exports = function init(opts, cb) {
	  i18n.createInstance(opts.locale, opts.TRANSLATIONS, cb);
	};

/***/ },
/* 192 */
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var i18next = __webpack_require__(/*! i18next */ 193);
	
	var instance = null;
	
	module.exports = {
	  createInstance: function createInstance() {
	    var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en-US' : arguments[0];
	    var translations = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var cb = arguments[2];
	
	    var opts = {
	      resources: {},
	      lng: locale,
	      interpolation: {
	        prefix: '{{',
	        Suffix: '}}'
	      }
	    };
	
	    // namespacing
	    opts.ns = 'ja';
	    opts.defaultNS = opts.ns;
	
	    // actual token-key/value pairs
	    opts.resources[locale] = {};
	    opts.resources[locale][opts.ns] = translations;
	
	    instance = i18next.createInstance(opts, function () {
	      setTimeout(function () {
	        cb(instance);
	      });
	    });
	  },
	
	  getInstance: function getInstance() {
	    return instance;
	  }
	};

/***/ },
/* 193 */
/*!********************************!*\
  !*** ./~/i18next/bin/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var require;var require;!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.i18next=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return require(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=a,r=!0,s=l=void 0}},p=e("./utils"),g=o(p),d=e("./logger"),h=r(d),v=e("./EventEmitter"),y=r(v),b=function(e){function t(e,n,r){var o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];i(this,t),f(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.backend=e,this.store=n,this.services=r,this.options=o,this.logger=h["default"].create("backendConnector"),this.state={},this.queue=[],this.backend&&this.backend.init(r,o.backend,o)}return a(t,e),c(t,[{key:"queueLoad",value:function(e,t,n){var r=this,o=[],i=[],a=[],s=[];return e.forEach(function(e){var n=!0;t.forEach(function(t){var a=e+"|"+t;r.store.hasResourceBundle(e,t)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?i.indexOf(a)<0&&i.push(a):(r.state[a]=1,n=!1,i.indexOf(a)<0&&i.push(a),o.indexOf(a)<0&&o.push(a),s.indexOf(t)<0&&s.push(t)))}),n||a.push(e)}),(o.length||i.length)&&this.queue.push({pending:i,loaded:{},errors:[],callback:n}),{toLoad:o,pending:i,toLoadLanguages:a,toLoadNamespaces:s}}},{key:"loaded",value:function(e,t,n){var r=this,o=e.split("|"),i=u(o,2),a=i[0],l=i[1];t&&this.emit("failedLoading",a,l,t),n&&this.store.addResourceBundle(a,l,n),this.state[e]=t?-1:2,this.queue.forEach(function(n){g.pushPath(n.loaded,[a],l),s(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(n.errors.length?n.callback(n.errors):n.callback(),r.emit("loaded",n.loaded),n.done=!0)}),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,n,r,o,i){var a=this;return r||(r=0),o||(o=250),e.length?void this.backend[n](e,t,function(s,u){return s&&u&&5>r?void setTimeout(function(){a.read.call(a,e,t,n,++r,2*o,i)},o):void i(s,u)}):i(null,{})}},{key:"load",value:function(e,t,n){var r=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();var o=l({},this.backend.options,this.options.backend);"string"==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var i=this.queueLoad(e,t,n);return i.toLoad.length?void(o.allowMultiLoading&&this.backend.readMulti?this.read(i.toLoadLanguages,i.toLoadNamespaces,"readMulti",null,null,function(e,t){e&&r.logger.warn("loading namespaces "+i.toLoadNamespaces.join(", ")+" for languages "+i.toLoadLanguages.join(", ")+" via multiloading failed",e),!e&&t&&r.logger.log("loaded namespaces "+i.toLoadNamespaces.join(", ")+" for languages "+i.toLoadLanguages.join(", ")+" via multiloading",t),i.toLoad.forEach(function(n){var o=n.split("|"),i=u(o,2),a=i[0],s=i[1],l=g.getPath(t,[a,s]);if(l)r.loaded(n,e,l);else{var c="loading namespace "+s+" for language "+a+" via multiloading failed";r.loaded(n,c),r.logger.error(c)}})}):!function(){var e=function(e){var t=this,n=e.split("|"),r=u(n,2),o=r[0],i=r[1];this.read(o,i,"read",null,null,function(n,r){n&&t.logger.warn("loading namespace "+i+" for language "+o+" failed",n),!n&&r&&t.logger.log("loaded namespace "+i+" for language "+o,r),t.loaded(e,n,r)})};i.toLoad.forEach(function(t){e.call(r,t)})}()):void(i.pending.length||n())}},{key:"saveMissing",value:function(e,t,n,r){this.backend&&this.backend.create&&this.backend.create(e,t,n,r),this.store.addResource(e[0],t,n,r)}}]),t}(y["default"]);n["default"]=b,t.exports=n["default"]},{"./EventEmitter":3,"./logger":12,"./utils":14}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=a,r=!0,s=l=void 0}},c=e("./utils"),f=(o(c),e("./logger")),p=r(f),g=e("./EventEmitter"),d=r(g),h=function(e){function t(e,n,r){var o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];i(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.cache=e,this.store=n,this.services=r,this.options=o,this.logger=p["default"].create("cacheConnector"),this.cache&&this.cache.init(r,o.cache,o)}return a(t,e),u(t,[{key:"load",value:function(e,t,n){var r=this;if(!this.cache)return n&&n();var o=s({},this.cache.options,this.options.cache);"string"==typeof e&&(e=this.services.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]),o.enabled?this.cache.load(e,function(t,o){if(t&&r.logger.error("loading languages "+e.join(", ")+" from cache failed",t),o)for(var i in o)for(var a in o[i])if("i18nStamp"!==a){var s=o[i][a];s&&r.store.addResourceBundle(i,a,s)}n&&n()}):n&&n()}},{key:"save",value:function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)}}]),t}(d["default"]);n["default"]=h,t.exports=n["default"]},{"./EventEmitter":3,"./logger":12,"./utils":14}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.observers={}}return o(e,[{key:"on",value:function(e,t){var n=this;e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})}},{key:"off",value:function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach(function(){if(t){var r=n.observers[e].indexOf(t);r>-1&&n.observers[e].splice(r,1)}else delete n.observers[e]})}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];this.observers[e]&&this.observers[e].forEach(function(e){e.apply(void 0,n)}),this.observers["*"]&&this.observers["*"].forEach(function(t){var r;t.apply(t,(r=[e]).concat.apply(r,n))})}}]),e}();t.exports=i},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./utils"),u=o(s),l=e("./logger"),c=r(l),f=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e),this.logger=c["default"].create("interpolator"),this.init(t,!0)}return a(e,[{key:"init",value:function(e,t){void 0===e&&(e={}),t&&(this.options=e),e.interpolation||(e.interpolation={escapeValue:!0});var n=e.interpolation;this.escapeValue=n.escapeValue,this.prefix=n.prefix?u.regexEscape(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?u.regexEscape(n.suffix):n.suffixEscaped||"}}",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?u.regexEscape(n.nestingPrefix):n.nestingPrefixEscaped||u.regexEscape("$t("),this.nestingSuffix=n.nestingSuffix?u.regexEscape(n.nestingSuffix):n.nestingSuffixEscaped||u.regexEscape(")");var r=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(r,"g");var o=this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(o,"g");var i=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(i,"g")}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"interpolate",value:function(e,t){function n(e){return e.replace(/\$/g,"$$$$")}for(var r=void 0,o=void 0;r=this.regexpUnescape.exec(e);){var i=u.getPath(t,r[1].trim());e=e.replace(r[0],i)}for(;r=this.regexp.exec(e);)o=u.getPath(t,r[1].trim()),"string"!=typeof o&&(o=u.makeString(o)),o||(this.logger.warn("missed to pass in variable "+r[1]+" for interpolating "+e),o=""),o=n(this.escapeValue?u.escape(o):o),e=e.replace(r[0],o),this.regexp.lastIndex=0;return e}},{key:"nest",value:function(e,t){function n(e){return e.replace(/\$/g,"$$$$")}function r(e){if(e.indexOf(",")<0)return e;var t=e.split(",");e=t.shift();var n=t.join(",");n=this.interpolate(n,s);try{s=JSON.parse(n)}catch(r){this.logger.error("failed parsing options string in nesting for key "+e,r)}return e}var o=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],i=void 0,a=void 0,s=JSON.parse(JSON.stringify(o));for(s.applyPostProcessor=!1;i=this.nestingRegexp.exec(e);)a=t(r.call(this,i[1].trim()),s),"string"!=typeof a&&(a=u.makeString(a)),a||(this.logger.warn("missed to pass in variable "+i[1]+" for interpolating "+e),a=""),a=n(this.escapeValue?u.escape(a):a),e=e.replace(i[0],a),this.regexp.lastIndex=0;return e}}]),e}();n["default"]=f,t.exports=n["default"]},{"./logger":12,"./utils":14}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./logger"),u=r(s),l=function(){function e(t){o(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=u["default"].create("languageUtils")}return a(e,[{key:"getLanguagePartFromCode",value:function(e){if(e.indexOf("-")<0)return e;var t=["nb-NO","nn-NO","nb-no","nn-no"],n=e.split("-");return this.formatLanguageCode(t.indexOf(e)>-1?n[1].toLowerCase():n[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=e.split("-"),n=i(t,2),r=n[0],o=n[1];return this.options.lowerCaseLng?r.toLowerCase()+"-"+o.toLowerCase():r.toLowerCase()+"-"+o.toUpperCase()}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return"languageOnly"===this.options.load&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1?!0:!1}},{key:"toResolveHierarchy",value:function(e,t){var n=this;t=t||this.options.fallbackLng||[],"string"==typeof t&&(t=[t]);var r=[],o=function(e){n.isWhitelisted(e)?r.push(e):n.logger.warn("rejecting non-whitelisted language code: "+e)};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),t.forEach(function(e){r.indexOf(e)<0&&o(n.formatLanguageCode(e))}),r}}]),e}();n["default"]=l,t.exports=n["default"]},{"./logger":12}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./logger"),s=r(a),u=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","es_ar","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt","pt_br","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],l={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&4>=e?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:7>e?2:11>e?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&20>e?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(10>e%100||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&11>e%100?1:e%100>10&&20>e%100?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&20>e%100?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},c=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];o(this,e),this.rules=function(){var e={};return u.forEach(function(t){t.lngs.forEach(function(n){return e[n]={numbers:t.nr,plurals:l[t.fc]}})}),e}(),this.languageUtils=t,this.options=n,this.logger=s["default"].create("pluralResolver")}return i(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length<=1?!1:!0}},{key:"getSuffix",value:function(e,t){var n=this.getRule(e);if(n){if(1===n.numbers.length)return"";var r=n.noAbs?n.plurals(t):n.plurals(Math.abs(t)),o=n.numbers[r];if(2===n.numbers.length&&1===n.numbers[0]&&(2===o?o="plural":1===o&&(o="")),"v1"===this.options.compatibilityJSON){if(1===o)return"";if("number"==typeof o)return"_plural_"+o.toString()}return this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}return this.logger.warn("no plural rule found for: "+e),""}}]),e}();n["default"]=c,t.exports=n["default"]},{"./logger":12}],7:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=a,r=!0,s=l=void 0}},c=e("./EventEmitter"),f=o(c),p=e("./utils"),g=r(p),d=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments.length<=1||void 0===arguments[1]?{ns:["translation"],defaultNS:"translation"}:arguments[1];i(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.data=e,this.options=n}return a(t,e),u(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],o=r.keySeparator||this.options.keySeparator||".",i=[e,t];return n&&"string"!=typeof n&&(i=i.concat(n)),n&&"string"==typeof n&&(i=i.concat(n.split(o))),e.indexOf(".")>-1&&(i=e.split(".")),g.getPath(this.data,i)}},{key:"addResource",value:function(e,t,n,r){var o=arguments.length<=4||void 0===arguments[4]?{silent:!1}:arguments[4],i=[e,t];n&&(i=i.concat(n.split(this.options.keySeparator||"."))),e.indexOf(".")>-1&&(i=e.split("."),r=t,t=i[1]),this.addNamespaces(t),g.setPath(this.data,i,r),o.silent||this.emit("added",e,t,n,r)}},{key:"addResources",value:function(e,t,n){for(var r in n)"string"==typeof n[r]&&this.addResource(e,t,r,n[r],{silent:!0});this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,r,o){var i=[e,t];e.indexOf(".")>-1&&(i=e.split("."),r=n,n=t,t=i[1]),this.addNamespaces(t);var a=g.getPath(this.data,i)||{};r?g.deepExtend(a,n,o):a=s({},a,n),g.setPath(this.data,i,a),this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?s({},this.getResource(e,t)):this.getResource(e,t)}},{key:"toJSON",value:function(){return this.data}}]),t}(f["default"]);n["default"]=d,t.exports=n["default"]},{"./EventEmitter":3,"./utils":14}],8:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=a,r=!0,s=l=void 0}},c=e("./logger"),f=o(c),p=e("./EventEmitter"),g=o(p),d=e("./postProcessor"),h=o(d),v=e("./compatibility/v1"),y=r(v),b=e("./utils"),m=r(b),O=function(e){function t(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),m.copy(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],e,this),this.options=n,this.logger=f["default"].create("translator")}return a(t,e),u(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{interpolation:{}}:arguments[1];return"v1"===this.options.compatibilityAPI&&(t=y.convertTOptions(t)),void 0!==this.resolve(e,t)}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator||":",r=t.ns||this.options.defaultNS;if(e.indexOf(n)>-1){var o=e.split(n);r=o[0],e=o[1]}return"string"==typeof r&&(r=[r]),{key:e,namespaces:r}}},{key:"translate",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if("object"!=typeof t?t=this.options.overloadTranslationOptionHandler(arguments):"v1"===this.options.compatibilityAPI&&(t=y.convertTOptions(t)),void 0===e||null===e||""===e)return"";"number"==typeof e&&(e=String(e)),"string"==typeof e&&(e=[e]);var n=t.lng||this.language;if(n&&"cimode"===n.toLowerCase())return e[e.length-1];var r=t.keySeparator||this.options.keySeparator||".",o=this.extractFromKey(e[e.length-1],t),i=o.key,a=o.namespaces,u=a[a.length-1],l=this.resolve(e,t),c=Object.prototype.toString.apply(l),f=["[object Number]","[object Function]","[object RegExp]"],p=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays;if(l&&"string"!=typeof l&&f.indexOf(c)<0&&(!p||"[object Array]"!==c)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(i,l,t):"key '"+i+" ("+this.language+")' returned an object instead of string.";var g="[object Array]"===c?[]:{};for(var d in l)g[d]=this.translate(""+i+r+d,s({joinArrays:!1,ns:a},t));l=g}else if(p&&"[object Array]"===c)l=l.join(p),l&&(l=this.extendTranslation(l,i,t));else{var h=!1,v=!1;if(!this.isValidLookup(l)&&t.defaultValue&&(h=!0,l=t.defaultValue),this.isValidLookup(l)||(v=!0,l=i),(v||h)&&(this.logger.log("missingKey",n,u,i,l),this.options.saveMissing)){var b=[];if("fallback"===this.options.saveMissingTo&&this.options.fallbackLng&&this.options.fallbackLng[0])for(var m=0;m<this.options.fallbackLng.length;m++)b.push(this.options.fallbackLng[m]);else"all"===this.options.saveMissingTo?b=this.languageUtils.toResolveHierarchy(t.lng||this.language):b.push(t.lng||this.language);this.options.missingKeyHandler?this.options.missingKeyHandler(b,u,i,l):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(b,u,i,l),this.emit("missingKey",b,u,i,l)}l=this.extendTranslation(l,i,t),v&&l===i&&this.options.appendNamespaceToMissingKey&&(l=u+":"+i),v&&this.options.parseMissingKeyHandler&&(l=this.options.parseMissingKeyHandler(l))}return l}},{key:"extendTranslation",value:function(e,t,n){var r=this;n.interpolation&&this.interpolator.init(n);var o=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(o=s({},this.options.interpolation.defaultVariables,o)),e=this.interpolator.interpolate(e,o),e=this.interpolator.nest(e,function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return r.translate.apply(r,t)},n),n.interpolation&&this.interpolator.reset();var i=n.postProcess||this.options.postProcess,a="string"==typeof i?[i]:i;return void 0!==e&&a&&a.length&&n.applyPostProcessor!==!1&&(e=h["default"].handle(a,e,t,n,this)),e}},{key:"resolve",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=void 0;return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!t.isValidLookup(r)){var o=t.extractFromKey(e,n),i=o.key,a=o.namespaces;t.options.fallbackNS&&(a=a.concat(t.options.fallbackNS));var s=void 0!==n.count&&"string"!=typeof n.count,u=void 0!==n.context&&"string"==typeof n.context&&""!==n.context,l=n.lngs?n.lngs:t.languageUtils.toResolveHierarchy(n.lng||t.language);a.forEach(function(e){t.isValidLookup(r)||l.forEach(function(o){if(!t.isValidLookup(r)){var a=i,l=[a];u&&l.push(a+=""+t.options.contextSeparator+n.context),s&&l.push(a+=t.pluralResolver.getSuffix(o,n.count));for(var c=void 0;c=l.pop();)t.isValidLookup(r)||(r=t.getResource(o,e,c,n))}})})}}),r}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];return this.resourceStore.getResource(e,t,n,r)}}]),t}(g["default"]);n["default"]=O,t.exports=n["default"]},{"./EventEmitter":3,"./compatibility/v1":9,"./logger":12,"./postProcessor":13,"./utils":14}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e.interpolation={unescapeSuffix:"HTML"},e.interpolation.prefix=e.interpolationPrefix||"__",e.interpolation.suffix=e.interpolationSuffix||"__",e.interpolation.escapeValue=e.escapeInterpolation||!1,e.interpolation.nestingPrefix=e.reusePrefix||"$t(",e.interpolation.nestingSuffix=e.reuseSuffix||")",e}function i(e){return e.resStore&&(e.resources=e.resStore),e.ns&&e.ns.defaultNs?(e.defaultNS=e.ns.defaultNs,e.ns=e.ns.namespaces):e.defaultNS=e.ns||"translation",e.fallbackToDefaultNS&&e.defaultNS&&(e.fallbackNS=e.defaultNS),e.saveMissing=e.sendMissing,e.saveMissingTo=e.sendMissingTo||"current",e.returnNull=e.fallbackOnNull?!1:!0,e.returnEmptyString=e.fallbackOnEmpty?!1:!0,e.returnObjects=e.returnObjectTrees,e.joinArrays="\n",e.returnedObjectHandler=e.objectTreeKeyHandler,e.parseMissingKeyHandler=e.parseMissingKey,e.appendNamespaceToMissingKey=!0,e.nsSeparator=e.nsseparator,e.keySeparator=e.keyseparator,"sprintf"===e.shortcutFunction&&(e.overloadTranslationOptionHandler=function(e){for(var t=[],n=1;n<e.length;n++)t.push(e[n]);return{postProcess:"sprintf",sprintf:t}}),e.whitelist=e.lngWhitelist,e.preload=e.preload,"current"===e.load&&(e.load="currentOnly"),"unspecific"===e.load&&(e.load="languageOnly"),e.backend=e.backend||{},e.backend.loadPath=e.resGetPath||"locales/__lng__/__ns__.json",e.backend.addPath=e.resPostPath||"locales/add/__lng__/__ns__",e.backend.allowMultiLoading=e.dynamicLoad,e.cache=e.cache||{},e.cache.prefix="res_",e.cache.expirationTime=6048e5,e.cache.enabled=e.useLocalStorage?!0:!1,e=o(e),e.defaultVariables&&(e.interpolation.defaultVariables=e.defaultVariables),e}function a(e){return e=o(e),e.joinArrays="\n",e}function s(e){return(e.interpolationPrefix||e.interpolationSuffix||e.escapeInterpolation)&&(e=o(e)),e.nsSeparator=e.nsseparator,e.keySeparator=e.keyseparator,e.returnObjects=e.returnObjectTrees,e}function u(e){e.lng=function(){return c["default"].deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."),e.services.languageUtils.toResolveHierarchy(e.language)[0]},e.preload=function(t,n){c["default"].deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"),e.loadLanguages(t,n)},e.setLng=function(t,n,r){return c["default"].deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."),"function"==typeof n&&(r=n,n={}),n||(n={}),n.fixLng===!0&&r?r(null,e.getFixedT(t)):void e.changeLanguage(t,r)},e.addPostProcessor=function(t,n){c["default"].deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"),
	e.use({type:"postProcessor",name:t,process:n})}}Object.defineProperty(n,"__esModule",{value:!0}),n.convertAPIOptions=i,n.convertJSONOptions=a,n.convertTOptions=s,n.appendBackwardsAPI=u;var l=e("../logger"),c=r(l)},{"../logger":12}],10:[function(e,t,n){"use strict";function r(){return{debug:!1,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,saveMissingTo:"fallback",missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,overloadTranslationOptionHandler:function(e){return{defaultValue:e[1]}},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",defaultVariables:void 0}}}function o(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&e.whitelist.push("cimode"),e}Object.defineProperty(n,"__esModule",{value:!0}),n.get=r,n.transformOptions=o},{}],11:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=a,r=!0,s=l=void 0}},c=e("./logger"),f=o(c),p=e("./EventEmitter"),g=o(p),d=e("./ResourceStore"),h=o(d),v=e("./Translator"),y=o(v),b=e("./LanguageUtils"),m=o(b),O=e("./PluralResolver"),k=o(O),x=e("./Interpolator"),w=o(x),P=e("./BackendConnector"),j=o(P),_=e("./CacheConnector"),S=o(_),E=e("./defaults"),L=e("./postProcessor"),N=o(L),C=e("./compatibility/v1"),R=r(C),M=function(e){function t(e,n){void 0===e&&(e={}),i(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.options=(0,E.transformOptions)(e),this.services={},this.logger=f["default"],this.modules={},n&&!this.isInitialized&&this.init(e,n)}return a(t,e),u(t,[{key:"init",value:function(e,t){function n(e){return e?"function"==typeof e?new e:e:void 0}var r=this;if("function"==typeof e&&(t=e,e={}),e||(e={}),"v1"===e.compatibilityAPI?this.options=s({},(0,E.get)(),(0,E.transformOptions)(R.convertAPIOptions(e)),{}):"v1"===e.compatibilityJSON?this.options=s({},(0,E.get)(),(0,E.transformOptions)(R.convertJSONOptions(e)),{}):this.options=s({},(0,E.get)(),this.options,(0,E.transformOptions)(e)),t||(t=function(){}),!this.options.isClone){this.modules.logger?f["default"].init(n(this.modules.logger),this.options):f["default"].init(null,this.options);var o=new m["default"](this.options);this.store=new h["default"](this.options.resources,this.options);var i=this.services;i.logger=f["default"],i.resourceStore=this.store,i.resourceStore.on("added removed",function(e,t){i.cacheConnector.save()}),i.languageUtils=o,i.pluralResolver=new k["default"](o,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON}),i.interpolator=new w["default"](this.options),i.backendConnector=new j["default"](n(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];r.emit.apply(r,[e].concat(n))}),i.backendConnector.on("loaded",function(e){i.cacheConnector.save()}),i.cacheConnector=new S["default"](n(this.modules.cache),i.resourceStore,i,this.options),i.cacheConnector.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];r.emit.apply(r,[e].concat(n))}),this.modules.languageDetector&&(i.languageDetector=n(this.modules.languageDetector),i.languageDetector.init(i,this.options.detection,this.options)),this.translator=new y["default"](this.services,this.options),this.translator.on("*",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];r.emit.apply(r,[e].concat(n))})}var a=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"];a.forEach(function(e){r[e]=function(){return this.store[e].apply(this.store,arguments)}}),"v1"===this.options.compatibilityAPI&&R.appendBackwardsAPI(this),this.changeLanguage(this.options.lng,function(e,n){r.emit("initialized",r.options),r.logger.log("initialized",r.options),t(e,n)})}},{key:"loadResources",value:function(e){var t=this;if(e||(e=function(){}),this.options.resources)e(null);else{var n=function(){if(t.language&&"cimode"===t.language.toLowerCase())return{v:e()};var n=[],r=function(e){var r=t.services.languageUtils.toResolveHierarchy(e);r.forEach(function(e){n.indexOf(e)<0&&n.push(e)})};r(t.language),t.options.preload&&t.options.preload.forEach(function(e){r(e)}),t.services.cacheConnector.load(n,t.options.ns,function(){t.services.backendConnector.load(n,t.options.ns,e)})}();if("object"==typeof n)return n.v}}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),"cache"===e.type&&(this.modules.cache=e),("logger"===e.type||e.log&&e.warn&&e.warn)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"postProcessor"===e.type&&N["default"].addPostProcessor(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,r=function(r){e&&(n.emit("languageChanged",e),n.logger.log("languageChanged",e)),t&&t(r,function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return n.t.apply(n,t)})};!e&&this.services.languageDetector&&(e=this.services.languageDetector.detect()),e&&(this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.translator.changeLanguage(e),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage(e)),this.loadResources(function(e){r(e)})}},{key:"getFixedT",value:function(e,t){var n=this,r=function o(e,t){return t=t||{},t.lng=t.lng||o.lng,t.ns=t.ns||o.ns,n.t(e,t)};return r.lng=e,r.ns=t,r}},{key:"t",value:function(){return this.translator&&this.translator.translate.apply(this.translator,arguments)}},{key:"exists",value:function(){return this.translator&&this.translator.exists.apply(this.translator,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"loadNamespaces",value:function(e,t){var n=this;return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),void this.loadResources(t)):t&&t()}},{key:"loadLanguages",value:function(e,t){"string"==typeof e&&(e=[e]),this.options.preload=this.options.preload?this.options.preload.concat(e):e,this.loadResources(t)}},{key:"dir",value:function(e){e||(e=this.language);var t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"];return t.indexOf(this.services.languageUtils.getLanguagePartFromCode(e))?"ltr":"rtl"}},{key:"createInstance",value:function(e,n){return void 0===e&&(e={}),new t(e,n)}},{key:"cloneInstance",value:function(e,n){var r=this;void 0===e&&(e={});var o=new t(s({},e,this.options,{isClone:!0}),n),i=["store","translator","services","language"];return i.forEach(function(e){o[e]=r[e]}),o}}]),t}(g["default"]);n["default"]=new M,t.exports=n["default"]},{"./BackendConnector":1,"./CacheConnector":2,"./EventEmitter":3,"./Interpolator":4,"./LanguageUtils":5,"./PluralResolver":6,"./ResourceStore":7,"./Translator":8,"./compatibility/v1":9,"./defaults":10,"./logger":12,"./postProcessor":13}],12:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a={type:"logger",log:function(e){this._output("log",e)},warn:function(e){this._output("warn",e)},error:function(e){this._output("error",e)},_output:function(e,t){console&&console[e]&&console[e].apply(console,Array.prototype.slice.call(t))}},s=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,e),this.subs=[],this.init(t,n)}return i(e,[{key:"init",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];this.prefix=t.prefix||"i18next:",this.logger=e||a,this.options=t,this.debug=t.debug===!1?!1:!0}},{key:"setDebug",value:function(e){this.debug=e,this.subs.forEach(function(t){t.setDebug(e)})}},{key:"log",value:function(){this.forward(arguments,"log","",!0)}},{key:"warn",value:function(){this.forward(arguments,"warn","",!0)}},{key:"error",value:function(){this.forward(arguments,"error","")}},{key:"deprecate",value:function(){this.forward(arguments,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){(!r||this.debug)&&("string"==typeof e[0]&&(e[0]=n+this.prefix+" "+e[0]),this.logger[t](e))}},{key:"create",value:function(t){var n=new e(this.logger,o({prefix:this.prefix+":"+t+":"},this.options));return this.subs.push(n),n}}]),e}();n["default"]=new s,t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,o){var i=this;return e.forEach(function(e){i.processors[e]&&(t=i.processors[e].process(t,n,r,o))}),t}},t.exports=n["default"]},{}],14:[function(e,t,n){"use strict";function r(e){return null==e?"":""+e}function o(e,t,n){e.forEach(function(e){t[e]&&(n[e]=t[e])})}function i(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}for(var o="string"!=typeof t?[].concat(t):t.split(".");o.length>1;){if(!e)return{};var i=r(o.shift());!e[i]&&n&&(e[i]=new n),e=e[i]}return e?{obj:e,k:r(o.shift())}:{}}function a(e,t,n){var r=i(e,t,Object),o=r.obj,a=r.k;o[a]=n}function s(e,t,n,r){var o=i(e,t,Object),a=o.obj,s=o.k;a[s]=a[s]||[],r&&(a[s]=a[s].concat(n)),r||a[s].push(n)}function u(e,t){var n=i(e,t),r=n.obj,o=n.k;return r?r[o]:void 0}function l(e,t,n){for(var r in t)r in e?"string"==typeof e[r]||e[r]instanceof String||"string"==typeof t[r]||t[r]instanceof String?n&&(e[r]=t[r]):l(e[r],t[r],n):e[r]=t[r];return e}function c(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function f(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return p[e]}):e}Object.defineProperty(n,"__esModule",{value:!0}),n.makeString=r,n.copy=o,n.setPath=a,n.pushPath=s,n.getPath=u,n.deepExtend=l,n.regexEscape=c,n.escape=f;var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}},{}]},{},[11])(11)});

/***/ },
/* 194 */
/*!********************!*\
  !*** ./src/Dot.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 195);
	var doT = __webpack_require__(/*! dot */ 196); //eslint-disable-line no-unused-vars
	var i18n = __webpack_require__(/*! ./i18n */ 192);
	
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
	
	var globalTemplateMap = {
	  translate: function translate(token, context) {
	    return i18n.getInstance().t(token, context);
	  }
	};
	
	var DotService = function () {
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
	
	    var renderIntoDOMWith = this.doT.template(template, dotConfigOverrides, globalTemplateMap);
	    return $(cssSelector).html(renderIntoDOMWith(viewModel));
	  };
	
	  DotService.prototype.compile = function compile(template, data) {
	    return this.doT.template(template, dotConfigOverrides, globalTemplateMap)(data);
	  };
	
	  return DotService;
	}();
	
	module.exports = new DotService(window.doT);

/***/ },
/* 195 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 196 */
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
	
	var fs = __webpack_require__(/*! fs */ 197),
		doT = module.exports = __webpack_require__(/*! ./doT */ 198);
	
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
/* 197 */
/*!***********************!*\
  !*** ./~/fs/index.js ***!
  \***********************/
/***/ function(module, exports) {

	console.log("I'm `fs` modules");


/***/ },
/* 198 */
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
/* 199 */
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
	
	var $ = __webpack_require__(/*! jquery */ 195);
	var assert = __webpack_require__(/*! ./assert */ 200);
	
	var BaseFragmentFactory = function () {
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
	}();
	
	module.exports = BaseFragmentFactory;

/***/ },
/* 200 */
/*!***********************!*\
  !*** ./src/assert.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (condition, message) {
	  if (!condition) {
	    throw new Error(message || 'Assertion failure');
	  }
	};

/***/ },
/* 201 */
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
	
	var PubSubHub = function () {
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
	}();
	
	module.exports = new PubSubHub();

/***/ },
/* 202 */
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Baobab = __webpack_require__(/*! baobab */ 203);
	
	// centralized state
	
	var State = function () {
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
	}();
	
	module.exports = State;

/***/ },
/* 203 */
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _emmett = __webpack_require__(/*! emmett */ 204);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _cursor = __webpack_require__(/*! ./cursor */ 205);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _monkey = __webpack_require__(/*! ./monkey */ 206);
	
	var _watcher = __webpack_require__(/*! ./watcher */ 210);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _type = __webpack_require__(/*! ./type */ 207);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _update2 = __webpack_require__(/*! ./update */ 208);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 209);
	
	var helpers = _interopRequireWildcard(_helpers);
	
	var arrayFrom = helpers.arrayFrom;
	var coercePath = helpers.coercePath;
	var deepFreeze = helpers.deepFreeze;
	var getIn = helpers.getIn;
	var makeError = helpers.makeError;
	var deepClone = helpers.deepClone;
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
	
	    ['apply', 'clone', 'concat', 'deepClone', 'deepMerge', 'exists', 'get', 'push', 'merge', 'pop', 'project', 'serialize', 'set', 'shift', 'splice', 'unset', 'unshift'].forEach(bootstrap);
	
	    // Registering the initial monkeys
	    this._refreshMonkeys();
	
	    // Initial validation
	    var validationError = this.validate();
	
	    if (validationError) throw Error('Baobab: invalid data.', { error: validationError });
	  }
	
	  /**
	   * Monkey helper.
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
	
	      var walk = function walk(data) {
	        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        // Should we sit a monkey in the tree?
	        if (data instanceof _monkey.MonkeyDefinition || data instanceof _monkey.Monkey) {
	          var monkeyInstance = new _monkey.Monkey(_this2, p, data instanceof _monkey.Monkey ? data.definition : data);
	
	          (0, _update3['default'])(_this2._monkeys, p, { type: 'set', value: monkeyInstance }, {
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
	      } else {
	        var monkeysNode = getIn(this._monkeys, path).data;
	
	        // Is this required that we clean some already existing monkeys?
	        if (monkeysNode) clean(monkeysNode, path);
	
	        // Let's walk the tree only from the updated point
	        if (operation !== 'unset') {
	          walk(node, path);
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
	      if (/merge/i.test(operation.type)) {
	        var monkeysNode = getIn(this._monkeys, solvedPath).data;
	
	        if (_type2['default'].object(monkeysNode)) {
	
	          // Cloning the operation not to create weird behavior for the user
	          realOperation = shallowClone(realOperation);
	
	          // Fetching the existing node in the current data
	          var currentNode = getIn(this._data, solvedPath).data;
	
	          if (/deep/i.test(realOperation.type)) realOperation.value = deepMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);else realOperation.value = shallowMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);
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
	      this._transaction.push(shallowMerge({}, operation, { path: affectedPath }));
	
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
	
	      // Do not fire update if the transaction is empty
	      if (!this._transaction.length) return this;
	
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
	     * Method returning a monkey at the given path or else `null`.
	     *
	     * @param  {path}        path - Path of the monkey to retrieve.
	     * @return {Monkey|null}      - The Monkey instance of `null`.
	     */
	  }, {
	    key: 'getMonkey',
	    value: function getMonkey(path) {
	      path = coercePath(path);
	
	      var monkey = getIn(this._monkeys, [].concat(path)).data;
	
	      if (monkey instanceof _monkey.Monkey) return monkey;
	
	      return null;
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
	
	  if (args.length === 1 && typeof args[0] !== 'function') return new _monkey.MonkeyDefinition(args[0]);
	
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
	Baobab.VERSION = '2.3.2';
	module.exports = exports['default'];

/***/ },
/* 204 */
/*!****************************!*\
  !*** ./~/emmett/emmett.js ***!
  \****************************/
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
/* 205 */
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
	
	var _emmett = __webpack_require__(/*! emmett */ 204);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _monkey = __webpack_require__(/*! ./monkey */ 206);
	
	var _type = __webpack_require__(/*! ./type */ 207);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 209);
	
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
	     * Method used to shallow clone data from the tree.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to get in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to get in the tree.
	     *
	     * @return {mixed}                 - Cloned data at path.
	     */
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var data = this.get.apply(this, arguments);
	
	      return (0, _helpers.shallowClone)(data);
	    }
	
	    /**
	     * Method used to deep clone data from the tree.
	     *
	     * Arity (1):
	     * @param  {path}   path           - Path to get in the tree.
	     *
	     * Arity (2):
	     * @param  {..step} path           - Path to get in the tree.
	     *
	     * @return {mixed}                 - Cloned data at path.
	     */
	  }, {
	    key: 'deepClone',
	    value: function deepClone() {
	      var data = this.get.apply(this, arguments);
	
	      return (0, _helpers.deepClone)(data);
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
	
	// Not using a Set so that ES5 consumers don't pay a bundle size price
	var INTRANSITIVE_SETTERS = {
	  unset: true,
	  pop: true,
	  shift: true
	};
	
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
	    if (arguments.length === 1 && !INTRANSITIVE_SETTERS[name]) {
	      value = path;
	      path = [];
	    }
	
	    // Coerce path
	    path = (0, _helpers.coercePath)(path);
	
	    // Checking the path's validity
	    if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid path.', { path: path });
	
	    // Checking the value's validity
	    if (typeChecker && !typeChecker(value)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid value.', { path: path, value: value });
	
	    // Checking the solvability of the cursor's dynamic path
	    if (!this.solvedPath) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': the dynamic path of the cursor cannot be solved.', { path: this.path });
	
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
	makeSetter('pop');
	makeSetter('shift');
	makeSetter('splice', _type2['default'].splicer);
	makeSetter('merge', _type2['default'].object);
	makeSetter('deepMerge', _type2['default'].object);
	module.exports = exports['default'];

/***/ },
/* 206 */
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
	
	var _type = __webpack_require__(/*! ./type */ 207);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _update2 = __webpack_require__(/*! ./update */ 208);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 209);
	
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
	    this.options = definition.options || {};
	  } else {
	    var offset = 1,
	        options = {};
	
	    if (_type2['default'].object(definition[definition.length - 1])) {
	      offset++;
	      options = definition[definition.length - 1];
	    }
	
	    this.getter = definition[definition.length - offset];
	    this.projection = definition.slice(0, -offset);
	    this.paths = this.projection;
	    this.options = options;
	  }
	
	  // Coercing paths for convenience
	  this.paths = this.paths.map(function (p) {
	    return [].concat(p);
	  });
	
	  // Does the definition contain dynamic paths
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
	     * where the monkey sits.
	     */
	    this.writeListener = function (_ref) {
	      var path = _ref.data.path;
	
	      if (_this2.state.killed) return;
	
	      // Is the monkey affected by the current write event?
	      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths());
	
	      if (concerned) _this2.update();
	    };
	
	    /**
	     * Listener on the tree's `monkey` event.
	     *
	     * When another monkey updates, this listener will check whether the
	     * updated paths are of any use to the monkey and, if so, will update the
	     * tree's node where the monkey sits.
	     */
	    this.recursiveListener = function (_ref2) {
	      var _ref2$data = _ref2.data;
	      var monkey = _ref2$data.monkey;
	      var path = _ref2$data.path;
	
	      if (_this2.state.killed) return;
	
	      // Breaking if this is the same monkey
	      if (_this2 === monkey) return;
	
	      // Is the monkey affected by the current monkey event?
	      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths(false));
	
	      if (concerned) _this2.update();
	    };
	
	    // Binding listeners
	    this.tree.on('write', this.writeListener);
	    this.tree.on('_monkey', this.recursiveListener);
	
	    // Updating relevant node
	    this.update();
	  }
	
	  /**
	   * Method returning solved paths related to the monkey.
	   *
	   * @param  {boolean} recursive - Should we compute recursive paths?
	   * @return {array}             - An array of related paths.
	   */
	
	  _createClass(Monkey, [{
	    key: 'relatedPaths',
	    value: function relatedPaths() {
	      var _this3 = this;
	
	      var recursive = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      var paths = undefined;
	
	      if (this.definition.hasDynamicPaths) paths = this.depPaths.map(function (p) {
	        return (0, _helpers.getIn)(_this3.tree._data, p).solvedPath;
	      });else paths = this.depPaths;
	
	      var isRecursive = recursive && this.depPaths.some(function (p) {
	        return !!_type2['default'].monkeyPath(_this3.tree._monkeys, p);
	      });
	
	      if (!isRecursive) return paths;
	
	      return paths.reduce(function (accumulatedPaths, path) {
	        var monkeyPath = _type2['default'].monkeyPath(_this3.tree._monkeys, path);
	
	        if (!monkeyPath) return accumulatedPaths.concat([path]);
	
	        // Solving recursive path
	        var relatedMonkey = (0, _helpers.getIn)(_this3.tree._monkeys, monkeyPath).data;
	
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
	
	            if (tree.options.immutable && def.options.immutable !== false) (0, _helpers.deepFreeze)(cache);
	
	            alreadyComputed = true;
	          }
	
	          return cache;
	        };
	      })(this.tree, this.definition, deps);
	
	      lazyGetter.isLazyGetter = true;
	
	      // Should we write the lazy getter in the tree or solve it right now?
	      if (this.tree.options.lazyMonkeys) {
	        this.tree._data = (0, _update3['default'])(this.tree._data, this.path, {
	          type: 'monkey',
	          value: lazyGetter
	        }, this.tree.options).data;
	      } else {
	        var result = (0, _update3['default'])(this.tree._data, this.path, {
	          type: 'set',
	          value: lazyGetter(),
	          options: {
	            mutableLeaf: !this.definition.options.immutable
	          }
	        }, this.tree.options);
	
	        if ('data' in result) this.tree._data = result.data;
	      }
	
	      // Notifying the monkey's update so we can handle recursivity
	      this.tree.emit('_monkey', { monkey: this, path: this.path });
	
	      return this;
	    }
	
	    /**
	     * Method releasing the monkey from memory.
	     */
	  }, {
	    key: 'release',
	    value: function release() {
	
	      // Unbinding events
	      this.tree.off('write', this.writeListener);
	      this.tree.off('_monkey', this.monkeyListener);
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
/* 207 */
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
	
	var _monkey = __webpack_require__(/*! ./monkey */ 206);
	
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
	    var offset = 1;
	
	    if (type.object(definition[definition.length - 1])) offset++;
	
	    if (!type['function'](definition[definition.length - offset]) || !definition.slice(0, -offset).every(function (p) {
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
	var VALID_OPERATIONS = ['set', 'apply', 'push', 'unshift', 'concat', 'pop', 'shift', 'deepMerge', 'merge', 'splice', 'unset'];
	
	type.operationType = function (string) {
	  return typeof string === 'string' && !! ~VALID_OPERATIONS.indexOf(string);
	};
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ },
/* 208 */
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
	
	var _type = __webpack_require__(/*! ./type */ 207);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 209);
	
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
	  var _operation$options = operation.options;
	  var operationOptions = _operation$options === undefined ? {} : _operation$options;
	
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
	        } else if (opts.persistent && !operationOptions.mutableLeaf) {
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
	                   * Pop
	                   */
	                  else if (operationType === 'pop') {
	                      if (!_type2['default'].array(p[s])) throw err('pop', 'array', currentPath);
	
	                      if (opts.persistent) p[s] = (0, _helpers.splice)(p[s], -1, 1);else p[s].pop();
	                    }
	
	                    /**
	                     * Shift
	                     */
	                    else if (operationType === 'shift') {
	                        if (!_type2['default'].array(p[s])) throw err('shift', 'array', currentPath);
	
	                        if (opts.persistent) p[s] = (0, _helpers.splice)(p[s], 0, 1);else p[s].shift();
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
	
	      // Deep freezing the resulting value
	      if (opts.immutable && !operationOptions.mutableLeaf) (0, _helpers.deepFreeze)(p);
	
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
/* 209 */
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
	
	var _monkey = __webpack_require__(/*! ./monkey */ 206);
	
	var _type = __webpack_require__(/*! ./type */ 207);
	
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
	  if (!item || typeof item !== 'object' || item instanceof Error || item instanceof _monkey.MonkeyDefinition || item instanceof _monkey.Monkey || 'ArrayBuffer' in global && item instanceof ArrayBuffer) return item;
	
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
	var NOT_FOUND_OBJECT = { data: undefined, solvedPath: null, exists: false };
	
	function getIn(object, path) {
	  if (!path) return NOT_FOUND_OBJECT;
	
	  var solvedPath = [];
	
	  var exists = true,
	      c = object,
	      idx = undefined,
	      i = undefined,
	      l = undefined;
	
	  for (i = 0, l = path.length; i < l; i++) {
	    if (!c) return {
	      data: undefined,
	      solvedPath: solvedPath.concat(path.slice(i)),
	      exists: false
	    };
	
	    if (typeof path[i] === 'function') {
	      if (!_type2['default'].array(c)) return NOT_FOUND_OBJECT;
	
	      idx = index(c, path[i]);
	      if (! ~idx) return NOT_FOUND_OBJECT;
	
	      solvedPath.push(idx);
	      c = c[idx];
	    } else if (typeof path[i] === 'object') {
	      if (!_type2['default'].array(c)) return NOT_FOUND_OBJECT;
	
	      idx = index(c, function (e) {
	        return compare(e, path[i]);
	      });
	      if (! ~idx) return NOT_FOUND_OBJECT;
	
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
	
	  // Coercing to array
	  to = [].concat(to);
	
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
	 * @param  {array}    array        - The array to splice.
	 * @param  {integer}  startIndex   - The start index.
	 * @param  {integer}  nb           - Number of elements to remove.
	 * @param  {...mixed} elements     - Elements to append after splicing.
	 * @return {array}                 - The spliced array.
	 */
	
	function splice(array, startIndex, nb) {
	  nb = Math.max(0, nb);
	
	  // Solving startIndex
	  if (_type2['default']['function'](startIndex)) startIndex = index(array, startIndex);
	  if (_type2['default'].object(startIndex)) startIndex = index(array, function (e) {
	    return compare(e, startIndex);
	  });
	
	  // Positive index
	
	  for (var _len2 = arguments.length, elements = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	    elements[_key2 - 3] = arguments[_key2];
	  }
	
	  if (startIndex >= 0) return array.slice(0, startIndex).concat(elements).concat(array.slice(startIndex + nb));
	
	  // Negative index
	  return array.slice(0, array.length + startIndex).concat(elements).concat(array.slice(array.length + startIndex + nb));
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
/* 210 */
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
	
	var _emmett = __webpack_require__(/*! emmett */ 204);
	
	var _emmett2 = _interopRequireDefault(_emmett);
	
	var _cursor = __webpack_require__(/*! ./cursor */ 205);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _type = __webpack_require__(/*! ./type */ 207);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 209);
	
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
/* 211 */
/*!********************!*\
  !*** ./src/URL.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// const history = require('html5-history'); // requires us to `npm i console`
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var url = __webpack_require__(/*! url */ 212);
	var uuid = __webpack_require__(/*! uuid */ 218);
	
	var URL = function () {
	  function URL(window) {
	    _classCallCheck(this, URL);
	
	    this.window = window;
	    this.id = uuid.v4();
	    this.pushing = false;
	  }
	
	  URL.prototype.updateQueryParams = function updateQueryParams() /*queryObj*/{
	    // const currentURL = url.parse(this.window.location.href);
	    // currentURL.query = queryObj;
	    // currentURL.search = null;
	
	    // this.pushing = true;
	    // history.pushState(null, null, url.format(currentURL));
	  };
	
	  URL.prototype.onHistoryChange = function onHistoryChange() /*cb*/{
	    // // hacky unbind
	    // const uid = history.Adapter.uid(this.window);
	    // history.Adapter.handlers[uid]['statechange'] = [];
	
	    // // bind
	    // history.Adapter.bind(this.window,'statechange', () => { // Note: We are using statechange instead of popstate
	    //   if (this.pushing) {
	    //     this.pushing = false;
	    //   } else {
	    //     cb();
	    //   }
	    // });
	  };
	
	  URL.prototype.redirect = function redirect(href) {
	    this.window.location.href = href;
	  };
	
	  URL.prototype.getQueryParams = function getQueryParams() {
	    return url.parse(this.window.location.search, true).query;
	  };
	
	  return URL;
	}();
	
	module.exports = URL;

/***/ },
/* 212 */
/*!**********************!*\
  !*** ./~/url/url.js ***!
  \**********************/
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
	
	var punycode = __webpack_require__(/*! punycode */ 213);
	
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
	    querystring = __webpack_require__(/*! querystring */ 215);
	
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
/* 213 */
/*!**************************************!*\
  !*** ./~/url/~/punycode/punycode.js ***!
  \**************************************/
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ 214)(module), (function() { return this; }())))

/***/ },
/* 214 */
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
/* 215 */
/*!********************************!*\
  !*** ./~/querystring/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 216);
	exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 217);


/***/ },
/* 216 */
/*!*********************************!*\
  !*** ./~/querystring/decode.js ***!
  \*********************************/
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
/* 217 */
/*!*********************************!*\
  !*** ./~/querystring/encode.js ***!
  \*********************************/
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
/* 218 */
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
	var _rng = __webpack_require__(/*! ./rng */ 219);
	
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
/* 219 */
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
/* 220 */
/*!*****************************!*\
  !*** ./src/Button/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// scripts
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var $ = __webpack_require__(/*! jquery */ 195);
	
	// css
	__webpack_require__(/*! ./styles.css */ 221);
	
	// html
	var buttonTmpl = __webpack_require__(/*! ./button.tmpl */ 225);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Utils = __webpack_require__(/*! ../Utils */ 227);
	
	var Button = function (_BaseComponent) {
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
	    Utils.bindClick(this.$el.find('button'), function (evt) {
	      evt.preventDefault();
	      _this2.preventPropagation ? evt.stopPropagation() : $.noop;
	      _this2.publish('click', _this2.id);
	    });
	
	    return this.$el.html();
	  };
	
	  return Button;
	}(BaseComponent);
	
	module.exports = Button;

/***/ },
/* 221 */
/*!*******************************!*\
  !*** ./src/Button/styles.css ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 222);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 222 */
/*!**************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/Button/styles.css ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-button {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 223 */
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
/* 224 */
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
/* 225 */
/*!********************************!*\
  !*** ./src/Button/button.tmpl ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<button type='" + (scope.submit ? "submit" : "button") + "' class='ui-button'>" + scope.label + "</button>";
	};

/***/ },
/* 226 */
/*!******************************!*\
  !*** ./src/BaseComponent.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	** @description
	**  The root class of all UI components. This component is meant to function as an
	**  abstract class. DO NOT try and instantiate this, only one of its child components.
	**  The purpose of this class is to:
	**    - to handle the publish() and subscribe() methods (for communication with pubSub)
	**    - to create the DOM element for the UI component
	**    - default implementations of get() and set()
	**
	** @param {String} el - the DOM element associated with this UI component
	** @param {Object} opts - the set of options to configure this component
	** @param {String} opts.parentElement - the parent node to attach this component to
	** @param {Boolean} opts.preserveChildElements - whether or not to remove DOM nodes that are
	** child elements of the current el passed in
	**
	** @author: John Hatcher
	*/
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 195);
	var uuid = __webpack_require__(/*! uuid */ 218);
	var PSHub = __webpack_require__(/*! ./PubSubHub */ 201);
	var assert = __webpack_require__(/*! ./assert */ 200);
	
	// for covenience
	var keyEvents = {
	  ENTER: 13,
	  ESC: 27,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40
	};
	
	var BaseComponent = function () {
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
	    if (this.$el.length === 0) {
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
	}();
	
	module.exports = BaseComponent;

/***/ },
/* 227 */
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = __webpack_require__(/*! jquery */ 195);
	
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	  }
	
	  /**
	   * Binds to either click or touch, based on what is available
	   * @param element The jquery wrapped element to bind to
	   * @param onClickFunction The function to call on click or touch
	   */
	
	  Utils.bindClick = function bindClick(element, onClickFunction) {
	
	    if ('ontouchstart' in document.documentElement) {
	      element.on('touchstart', function () {
	        element.on('touchend', function () {
	          onClickFunction();
	          element.off('touchend');
	        });
	        element.on('touchmove', function () {
	          element.off('touchend');
	        });
	      });
	    } else {
	      element.on('click', onClickFunction);
	    }
	  };
	
	  return Utils;
	}();
	
	module.exports = Utils;

/***/ },
/* 228 */
/*!**************************************!*\
  !*** ./src/CurrentLocation/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 229);
	
	// assets
	var iconURL = __webpack_require__(/*! ./location.png */ 231);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Utils = __webpack_require__(/*! ../Utils */ 227);
	
	var CurrentLocation = function (_BaseComponent) {
	  _inherits(CurrentLocation, _BaseComponent);
	
	  function CurrentLocation(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, CurrentLocation);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    _this.iconURL = opts.iconURL || iconURL;
	    _this.geolocationAPI = opts.geolocationAPI || window.navigator.geolocation;
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  CurrentLocation.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.addClass('ui-current-location');
	    Utils.bindClick(this.$el, function (evt) {
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
	}(BaseComponent);
	
	module.exports = CurrentLocation;

/***/ },
/* 229 */
/*!****************************************!*\
  !*** ./src/CurrentLocation/styles.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 230);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 230 */
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/CurrentLocation/styles.css ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-current-location {\n  cursor: pointer;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n", ""]);
	
	// exports


/***/ },
/* 231 */
/*!******************************************!*\
  !*** ./src/CurrentLocation/location.png ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 232 */
/*!************************************************!*\
  !*** ./src/TextInput/CustomTextInput/index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @deprecated
	// # TextInput
	// publishes a nicely throttled text input event
	// adds a clearing x icon
	//
	// Please do not use this class anymore. It has been kept around for legacy reasons, but will
	// be deleted soon
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ../styles.css */ 233);
	
	// html
	var inputTmpl = __webpack_require__(/*! ./input.tmpl */ 235);
	var iconTmpl = __webpack_require__(/*! ./icon.tmpl */ 236);
	var iconWrapper = __webpack_require__(/*! ./iconWrapper.html */ 237);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../../BaseComponent */ 226);
	var debounce = __webpack_require__(/*! debounce */ 238);
	var Utils = __webpack_require__(/*! ../../Utils */ 227);
	
	var TextInput = function (_BaseComponent) {
	  _inherits(TextInput, _BaseComponent);
	
	  function TextInput(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    Object.assign(_this, {
	      $input: null,
	      icon: opts.icon || 'x',
	      onEnterPressed: opts.onEnterPressed || null,
	      onIconClick: opts.onIconClick || null,
	      iconClearsValue: typeof opts.iconClearsValue === 'undefined' ? true : opts.iconClearsValue,
	      placeholder: opts.placeholder || '',
	      showIconOnNotEmpty: opts.showIconOnNotEmpty || false,
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
	
	    var onKeyup = debounce(function (e) {
	      _this2.get() !== _this2.$input.val() ? _this2.set(_this2.$input.val()) : '';
	      if (e.keyCode == 13) {
	        _this2.$input.blur();
	        if (_this2.onEnterPressed) {
	          _this2.onEnterPressed(_this2.get());
	        }
	      }
	    }, this.wait);
	
	    this.$input.keyup(onKeyup); // debounced slightly for ux
	
	    if (this.icon) {
	      // the wrapper to place a clearing icon (X)
	      this.$input.wrap(iconWrapper);
	      this.$wrapper = this.$el.find('.ui-text-input-icon-wrapper');
	
	      // the clearing icon itself (absolute positioned within wrapper to be on the right)
	      this.$wrapper.append(iconTmpl(this));
	      this.$icon = this.$el.find('.ui-text-input-icon');
	
	      this.showHideIcon();
	
	      if (this.iconClearsValue || this.onIconClick) {
	        Utils.bindClick(this.$icon, function () {
	          if (_this2.iconClearsValue) {
	            _this2.set('');
	          }
	          if (_this2.onIconClick) {
	            _this2.onIconClick();
	          }
	        });
	      }
	    }
	
	    return this.$el.html();
	  };
	
	  TextInput.prototype.showHideIcon = function showHideIcon() {
	    if (this.showIconOnNotEmpty) {
	      if (this.get()) {
	        this.$icon.show();
	      } else {
	        this.$icon.hide();
	      }
	    }
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
	
	    this.showHideIcon();
	    this.publish(this.get());
	    return this;
	  };
	
	  return TextInput;
	}(BaseComponent);
	
	module.exports = TextInput;

/***/ },
/* 233 */
/*!**********************************!*\
  !*** ./src/TextInput/styles.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 234);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 234 */
/*!*****************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/TextInput/styles.css ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-text-input {\n  width: 100%;\n}\n\n.ui-text-input-wrapper {\n  position: relative;\n}\n\n.ui-text-input-icon {\n  font-size: 16px;\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  cursor: pointer;\n  padding: 0 5px;\n  margin: 0 5px;\n}\n", ""]);
	
	// exports


/***/ },
/* 235 */
/*!**************************************************!*\
  !*** ./src/TextInput/CustomTextInput/input.tmpl ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<input type='text' id='" + scope.id + "'\nclass='ui-text-input form-control'\nplaceholder='" + scope.placeholder + "'\nvalue='" + scope.get() + "'/>\n";
	};

/***/ },
/* 236 */
/*!*************************************************!*\
  !*** ./src/TextInput/CustomTextInput/icon.tmpl ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-text-input-icon'>" + scope.icon + "</span>";
	};

/***/ },
/* 237 */
/*!********************************************************!*\
  !*** ./src/TextInput/CustomTextInput/iconWrapper.html ***!
  \********************************************************/
/***/ function(module, exports) {

	module.exports = "<div class='ui-text-input-icon-wrapper'></div>";

/***/ },
/* 238 */
/*!*****************************!*\
  !*** ./~/debounce/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(/*! date-now */ 239);
	
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
/* 239 */
/*!*****************************!*\
  !*** ./~/date-now/index.js ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 240 */
/*!*************************************!*\
  !*** ./src/ExpandCollapse/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 241);
	
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Toggle = __webpack_require__(/*! ../Toggle/ */ 243);
	var collapseTmpl = __webpack_require__(/*! ./expandCollapseContent.tmpl */ 244);
	
	var ExpandCollapse = function (_BaseComponent) {
	  _inherits(ExpandCollapse, _BaseComponent);
	
	  function ExpandCollapse(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ExpandCollapse);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, {
	      parentElement: opts.parentElement,
	      preserveChildElements: true
	    }));
	
	    _this.opts = opts;
	
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
	    var _this2 = this;
	
	    if (this.$el.find('.grow').length === 0) {
	      var innerContent = this.$el.html();
	      this.$el.html(collapseTmpl(innerContent));
	    }
	
	    var toggle = new Toggle(this.opts.toggleSelector, this.opts);
	    toggle.render();
	
	    toggle.subscribe(function (isToggled) {
	      _this2.expandCollapse(isToggled);
	    });
	    return this.$el[0].outerHTML;
	  };
	
	  return ExpandCollapse;
	}(BaseComponent);
	
	module.exports = ExpandCollapse;

/***/ },
/* 241 */
/*!***************************************!*\
  !*** ./src/ExpandCollapse/styles.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 242 */
/*!**********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/ExpandCollapse/styles.css ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, ".grow {\n    transition: height .5s;\n    height: 0;\n    overflow: hidden;\n}", ""]);
	
	// exports


/***/ },
/* 243 */
/*!*****************************!*\
  !*** ./src/Toggle/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Utils = __webpack_require__(/*! ../Utils */ 227);
	
	var Toggle = function (_BaseComponent) {
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
	
	    Utils.bindClick(_this.$el, function (evt) {
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
	}(BaseComponent);
	
	module.exports = Toggle;

/***/ },
/* 244 */
/*!*******************************************************!*\
  !*** ./src/ExpandCollapse/expandCollapseContent.tmpl ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	    return "<div class=\"grow\">\n    <div class=\"measuringWrapper\">\n        <div class=\"expand-collapse-content\">" + scope + "</div>\n    </div>\n</div>\n";
	};

/***/ },
/* 245 */
/*!*************************************!*\
  !*** ./src/InfiniteScroll/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var debounce = __webpack_require__(/*! debounce */ 238);
	
	var InfiniteScroll = function (_BaseComponent) {
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
	
	    $(window).scroll(debounce(function () {
	      var scrollTop = $(window).scrollTop();
	      var elementScrollHeight = $scrollTarget[0].scrollHeight || $(document).height();
	      var scrollTrigger = opts.scrollTrigger || 0.95;
	
	      if (scrollTop / elementScrollHeight > scrollTrigger) {
	        _this.onScrollToBottom();
	      }
	    }, debounceWait, false));
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  InfiniteScroll.prototype.render = function render() {
	    return this.$el.html();
	  };
	
	  return InfiniteScroll;
	}(BaseComponent);
	
	module.exports = InfiniteScroll;

/***/ },
/* 246 */
/*!*******************************!*\
  !*** ./src/ListView/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// # Render a list of results
	//
	//   - publishes an event when a list item is clicked 'selected'
	//
	//
	// Object expects 4 things in the options:
	//  @param {Function} fetch - a function to pull new data
	//  @param {Object} listItemOpts - an object containing options specifically for each item in listView
	//  @param {Function} renderItem - determines how each listElement will be displayed in DOM
	//  @param {Array} results - prefill the component with data
	
	// listItemOpts has the following properties:
	//  @param {Boolean} stopPropagation - prevents the click handler from bubbling the event upwards
	//  @param {Object} attrs - a list of CSS attributes to put on each ListItem
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 247);
	
	// html
	var listViewTmpl = __webpack_require__(/*! ./listView.dot */ 249);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Utils = __webpack_require__(/*! ../Utils */ 227);
	
	var ListView = function (_BaseComponent) {
	  _inherits(ListView, _BaseComponent);
	
	  function ListView(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ListView);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));
	
	    Object.assign(_this, {
	      fetch: opts.fetch || $.noop,
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
	    Utils.bindClick(this.$el.find('li.ui-list-item'), function (evt) {
	      _this2.set(_this2.results[$(evt.currentTarget).attr('data-index')]);
	
	      if (_this2.listItemOpts.stopPropagation) {
	        evt.stopPropagation();
	      }
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
	}(BaseComponent);
	
	module.exports = ListView;

/***/ },
/* 247 */
/*!*********************************!*\
  !*** ./src/ListView/styles.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 248 */
/*!****************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/ListView/styles.css ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 249 */
/*!***********************************!*\
  !*** ./src/ListView/listView.dot ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<ul class=\'ui-list\'> ';var arr1=it.results;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+=' ';var item = it.renderItem(value, index);out+=' ';if(item){out+=' <li id=\''+(it.id)+'\' class=\'ui-list-item\' data-index=\''+(index)+'\'>'+(item)+'</li> ';}out+=' ';} } out+='</ul>';return out;
	}

/***/ },
/* 250 */
/*!****************************************!*\
  !*** ./src/LocationTextInput/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 **  @class: LocationTextInput
	 **  @description:
	 **    This textInput Implementation provides additional UI behaviors to the icon element
	 **    over the default textInput class.
	 **      - If the icon is clicked while the value is empty, the browser's GeoLocation API
	 **        will default the value with the user's current location
	 **
	 **  @param {String} el - the DOM element to attach to
	 **  @param {Object} opts - the options to configure this element
	 **
	 **  @author: Naveed Nadjmabadi
	 */
	
	// css
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 251);
	
	// html
	var inputTmpl = __webpack_require__(/*! ./input.tmpl */ 253);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var TextInput = __webpack_require__(/*! ../TextInput */ 254);
	var CurrentLocation = __webpack_require__(/*! ../CurrentLocation */ 228);
	
	var LocationTextInput = function (_TextInput) {
	  _inherits(LocationTextInput, _TextInput);
	
	  function LocationTextInput(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, LocationTextInput);
	
	    var _this = _possibleConstructorReturn(this, _TextInput.call(this, el, opts));
	
	    Object.assign(_this, {
	      locationIcon: null,
	      $location: null
	    });
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  LocationTextInput.prototype.get = function get() {
	
	    if ($.isPlainObject(this.value) && this.value.displayName) {
	      return this.value.displayName;
	    }
	
	    return _TextInput.prototype.get.call(this);
	  };
	
	  LocationTextInput.prototype.set = function set(v) {
	
	    // If the textInput contains location data
	    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
	      this.value = v;
	
	      if (this.$input) {
	        this.$input.val(v.isLocation ? 'Use the Current Location' : v.displayName);
	      }
	
	      this.publish(this.get());
	      this.showHideIcon();
	    } else {
	      _TextInput.prototype.set.call(this, v);
	    }
	  };
	
	  LocationTextInput.prototype.renderDom = function renderDom() {
	    var _this2 = this;
	
	    // the base input
	    this.$el.html(inputTmpl(this));
	    this.$input = this.$el.find('input');
	
	    this.$icon = this.$el.find('.ui-text-input-icon');
	
	    // adding the CurrentLocation sub-component
	    this.locationIcon = new CurrentLocation('.ui-location-icon');
	    this.$locationIcon = this.$el.find('.ui-location-icon');
	
	    this.locationIcon.subscribe(function (event) {
	      if (event.isLocation) {
	        _this2.set(event);
	      }
	    });
	
	    this.locationIcon.render();
	  };
	
	  LocationTextInput.prototype.showHideIcon = function showHideIcon() {
	    if (this.$icon) {
	      if (this.get()) {
	        this.$icon.show();
	        this.$locationIcon.hide();
	      } else {
	        this.$icon.hide();
	        this.$locationIcon.show();
	      }
	    }
	  };
	
	  return LocationTextInput;
	}(TextInput);
	
	module.exports = LocationTextInput;

/***/ },
/* 251 */
/*!******************************************!*\
  !*** ./src/LocationTextInput/styles.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 252 */
/*!*************************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/LocationTextInput/styles.css ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.ui-text-input {\n  width: 100%;\n}\n\n.ui-text-input-wrapper {\n  position: relative;\n}\n\n.ui-text-input-icon {\n  font-size: 16px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  cursor: pointer;\n  padding: 0 5px;\n  margin: 0 5px;\n}\n\n.ui-location-icon {\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}", ""]);
	
	// exports


/***/ },
/* 253 */
/*!******************************************!*\
  !*** ./src/LocationTextInput/input.tmpl ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
		return "<div class='ui-text-input-wrapper'>\n\t<input type='text' id='" + scope.id + "' class='ui-text-input form-control' placeholder='" + scope.placeholder + "' value='" + scope.get() + "'/>\n\t<span class='ui-text-input-icon'>" + scope.icon + "</span>\n\t<span class='ui-location-icon'></span>\n</div>\n";
	};

/***/ },
/* 254 */
/*!********************************!*\
  !*** ./src/TextInput/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 **  @class: TextInput
	 **  @description:
	 **    This class is the main JUICE textInput Implementation. This class
	 **    enhances the BaseTextInput class by providing nice UI interaction
	 **    behaviors, such as:
	 **      - publishes a nicely throttled text input event
	 **      - firing event listeners when the enter key is pressed
	 **      - adds a clearing x icon
	 **
	 **    If you plan on extending the textInput class, you can override the
	 **    iconClickHandler(), keyUpHandler(), showHideIcon(), and renderDom()
	 **    methods to override the default behavior of the render method
	 **
	 **  @param {String} el - the DOM element to attach to
	 **  @param {Object} opts - the options to configure this element
	 **  @param {String} opts.icon - the string for the icon to show up
	 **  @param {Number} opts.wait - how long to debounce the input onKeyUp event
	 **  @param {Function} opts.submitHandler - if the enter key is pressed, run this function
	 **
	 **  @author: Robbie Wagner
	 */
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 233);
	
	// html
	var inputTmpl = __webpack_require__(/*! ./input.tmpl */ 255);
	
	// scripts
	var BaseTextInput = __webpack_require__(/*! ./BaseTextInput */ 256);
	var debounce = __webpack_require__(/*! debounce */ 238);
	
	var TextInput = function (_BaseTextInput) {
	  _inherits(TextInput, _BaseTextInput);
	
	  function TextInput(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, _BaseTextInput.call(this, el, opts));
	
	    Object.assign(_this, {
	      $icon: null,
	      icon: opts.icon || 'x',
	      wait: opts.wait || 300,
	      submitHandler: opts.submitHandler || function () {}
	    });
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  TextInput.prototype.set = function set(v) {
	    _BaseTextInput.prototype.set.call(this, v);
	    this.showHideIcon();
	    return this;
	  };
	
	  TextInput.prototype.render = function render() {
	    this.renderDom();
	
	    // set up various event handlers
	    this.keyUpHandler();
	    this.iconClickHandler();
	    this.showHideIcon();
	
	    return this.$el.html();
	  };
	
	  TextInput.prototype.renderDom = function renderDom() {
	    // the base input
	    this.$el.html(inputTmpl(this));
	    this.$input = this.$el.find('input');
	
	    this.$icon = this.$el.find('.ui-text-input-icon');
	  };
	
	  TextInput.prototype.keyUpHandler = function keyUpHandler() {
	    var _this2 = this;
	
	    var onKeyup = debounce(function (e) {
	      _this2.get() !== _this2.$input.val() ? _this2.set(_this2.$input.val()) : '';
	
	      if (e.keyCode == _this2.keyEvents.ENTER) {
	        _this2.$input.blur();
	        _this2.submitHandler(_this2.get());
	      }
	    }, this.wait);
	
	    this.$input.keyup(onKeyup);
	  };
	
	  TextInput.prototype.iconClickHandler = function iconClickHandler() {
	    var _this3 = this;
	
	    this.$icon.click(function () {
	      _this3.set('');
	    });
	  };
	
	  TextInput.prototype.showHideIcon = function showHideIcon() {
	    if (this.$icon) {
	      this.get() ? this.$icon.show() : this.$icon.hide();
	    }
	  };
	
	  return TextInput;
	}(BaseTextInput);
	
	module.exports = TextInput;

/***/ },
/* 255 */
/*!**********************************!*\
  !*** ./src/TextInput/input.tmpl ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
		return "<div class='ui-text-input-wrapper'>\n\t<input type='text' id='" + scope.id + "' class='ui-text-input form-control' placeholder='" + scope.placeholder + "' value='" + scope.get() + "'/>\n\t<span class='ui-text-input-icon'>" + scope.icon + "</span>\n</div>\n";
	};

/***/ },
/* 256 */
/*!**********************************************!*\
  !*** ./src/TextInput/BaseTextInput/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	**  @class: BaseTextInput
	**  @description:
	**    This class provides a template for JUICE textInput Implementations. It is 
	**    designed to function as an Abstract class. Do not instantiate Objects of 
	**    this type -- instantiate a child component instead
	**
	**  @param {String} el - the DOM element to attach to
	**  @param {Object} opts - the options to configure this element
	**  @param {String} opts.placeholder - the html placeholder attribute for the component
	**  @param {String} opts.value - preset the value for the component to this string
	**
	**  @author: Robbie Wagner
	*/
	
	// html
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var inputTmpl = __webpack_require__(/*! ./input.tmpl */ 257);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../../BaseComponent */ 226);
	
	var BaseTextInput = function (_BaseComponent) {
	  _inherits(BaseTextInput, _BaseComponent);
	
	  function BaseTextInput(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, BaseTextInput);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));
	
	    Object.assign(_this, {
	      $input: null,
	      placeholder: opts.placeholder || '',
	      value: opts.value || ''
	    });
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  BaseTextInput.prototype.get = function get() {
	    return this.value || '';
	  };
	
	  BaseTextInput.prototype.set = function set(v) {
	    this.value = v;
	
	    if (this.$input) {
	      this.$input.val(v);
	    }
	
	    this.publish(this.get());
	  };
	
	  BaseTextInput.prototype.render = function render() {
	    // the base input
	    this.$el.html(inputTmpl(this));
	    this.$input = this.$el.find('input');
	
	    return this.$el.html();
	  };
	
	  return BaseTextInput;
	}(BaseComponent);
	
	module.exports = BaseTextInput;

/***/ },
/* 257 */
/*!************************************************!*\
  !*** ./src/TextInput/BaseTextInput/input.tmpl ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<input type='text' id='" + scope.id + "'\nclass='ui-text-input form-control'\nplaceholder='" + scope.placeholder + "'\nvalue='" + scope.get() + "'/>\n";
	};

/***/ },
/* 258 */
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
	__webpack_require__(/*! ./styles.css */ 259);
	
	// html
	var currentLocationTemplate = __webpack_require__(/*! ./useMyCurrentLocation.tmpl */ 261);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var Typeahead = __webpack_require__(/*! ../Typeahead */ 262);
	var LocationTextInput = __webpack_require__(/*! ../LocationTextInput */ 250);
	var FragFactory = __webpack_require__(/*! ../BaseFragmentFactory */ 199);
	var CurrentLocation = __webpack_require__(/*! ../CurrentLocation */ 228);
	
	var LocationTypeahead = function (_Typeahead) {
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
	        var currentLocationIcon = new CurrentLocation('.ui-current-location-' + data.name);
	
	        currentLocationIcon.subscribe(function (event) {
	          if (event.isLocation) {
	            event.listItem = true; // set this to prevent repeating
	            _this.set(event);
	          }
	        });
	        currentLocationIcon.render();
	      }
	    });
	
	    // setup "current location" fixed result
	    opts.fixedResults = (opts.fixedResults || []).concat([{
	      useMyCurrentLocation: true,
	      preSelectHook: function preSelectHook() {
	        $('.ui-current-location-listItem').click(); // trigger 'use my location' icon
	        return false; // don't run normal selection behavior
	      }
	    }]);
	
	    var _this = _possibleConstructorReturn(this, _Typeahead.call(this, el, opts));
	
	    _this.iconFactory = iconFactory;
	    _this.$el.addClass('ui-location-typeahead');
	    return _this;
	  }
	
	  LocationTypeahead.prototype.setupTextInput = function setupTextInput(textInputOpts) {
	    return new LocationTextInput(this.$el.find('.input-container'), textInputOpts);
	  };
	
	  LocationTypeahead.prototype.handleTextInputUpdates = function handleTextInputUpdates() {
	    var _this2 = this;
	
	    // when text input gets a new value, update typeahead:
	    this.textInput.subscribe(function (v) {
	
	      if (v === '') {
	        _this2.setInternal({});
	      } else if ($.isPlainObject(v) && v.isLocation && !v.listItem) {
	        _this2.setInternal(v);
	      } else {
	        _Typeahead.prototype.handleTextInputUpdates.call(_this2);
	      }
	    });
	  };
	
	  LocationTypeahead.prototype.renderItem = function renderItem(item) {
	    if (item && item.useMyCurrentLocation) {
	      return this.iconFactory.make({
	        name: 'listItem'
	      });
	    } else {
	      return _Typeahead.prototype.renderItem.call(this, item);
	    }
	  };
	
	  LocationTypeahead.prototype.set = function set(v) {
	    this.textInput.set(v);
	    this.setInternal(v);
	    return this;
	  };
	
	  return LocationTypeahead;
	}(Typeahead);
	
	module.exports = LocationTypeahead;

/***/ },
/* 259 */
/*!******************************************!*\
  !*** ./src/LocationTypeahead/styles.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 260);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 260 */
/*!*************************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/LocationTypeahead/styles.css ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-curr-loc {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n}\n\n.ui-location-typeahead .ui-text-input-icon {\n  right: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 261 */
/*!*********************************************************!*\
  !*** ./src/LocationTypeahead/useMyCurrentLocation.tmpl ***!
  \*********************************************************/
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-current-location-" + scope.name + " ui-curr-loc'></span>\n<span style='display: " + scope.displayValue + " '>Use my current location</span>\n";
	};

/***/ },
/* 262 */
/*!********************************!*\
  !*** ./src/Typeahead/index.js ***!
  \********************************/
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
	
	// less
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.less */ 263);
	
	// scripts
	var _ = __webpack_require__(/*! lodash */ 265);
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseTypeahead = __webpack_require__(/*! ./BaseTypeahead */ 266);
	
	var HIGHLIGHT_CLASS = 'ui-typeahead-highlight';
	
	var Typeahead = function (_BaseTypeahead) {
	  _inherits(Typeahead, _BaseTypeahead);
	
	  function Typeahead(el) {
	    var _ret;
	
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Typeahead);
	
	    opts.renderItem = function (item) {
	      return _this.renderItem(item);
	    };
	
	    var _this = _possibleConstructorReturn(this, _BaseTypeahead.call(this, el, opts));
	
	    _this.fixedResults = opts.fixedResults || [];
	    _this.allowFreeForm = opts.allowFreeForm || false;
	    _this.displayProperty = opts.displayProperty || 'displayName';
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	   * Show of hide the listView depending on if active is true or false, set isActive
	   * @param v The boolean for whether active or not
	   * @returns {boolean|*}
	   */
	
	  Typeahead.prototype.active = function active(v) {
	    if (_.isBoolean(v)) {
	      this.isActive = v;
	
	      if (this.isActive) {
	        this.resultsListView.$el.show();
	      } else {
	        this.resultsListView.$el.hide();
	        delete this.highlightIndex;
	      }
	    }
	
	    return this.isActive;
	  };
	
	  /**
	   * Setup focus events to set active to true when focused, and false when blurred
	   */
	
	  Typeahead.prototype.attachFocusEvents = function attachFocusEvents() {
	    var _this2 = this;
	
	    this.textInput.$el.find('input').on('focus', function () {
	      _this2.active(true);
	    });
	
	    $(document).click(function (evt) {
	      if (_this2.$el.find($(evt.target)).length === 0 && $(evt.target)[0].tagName !== 'input') {
	        _this2.active(false);
	        _this2.textInput.$el.find('input').blur();
	      }
	    });
	  };
	
	  /**
	   * Set up events for pressing up, down, enter and escape
	   */
	
	  Typeahead.prototype.attachKeyEvents = function attachKeyEvents() {
	    var _this3 = this;
	
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
	          break;
	
	        case _this3.keyEvents.ESC:
	          _this3.active(false);
	          break;
	
	        default:
	          break;
	      }
	    });
	  };
	
	  Typeahead.prototype.decrementHighlight = function decrementHighlight() {
	    this.highlightIndex = !_.isFinite(this.highlightIndex) ? this.resultsListView.$el.find('li').length - 1 : this.highlightIndex - 1;
	    this.normalizeHighlightIndex();
	    this.renderHighlight();
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
	
	  Typeahead.prototype.handleTextInputUpdates = function handleTextInputUpdates() {
	    var _this4 = this;
	
	    // when text input gets a new value, update typeahead:
	    this.textInput.subscribe(function (v) {
	      _this4.highlightIndex = null;
	      if (v === '') {
	        _this4.setInternal({});
	      }
	    });
	
	    _BaseTypeahead.prototype.handleTextInputUpdates.call(this);
	  };
	
	  Typeahead.prototype.incrementHighlight = function incrementHighlight() {
	    this.highlightIndex = !_.isFinite(this.highlightIndex) ? 0 : this.highlightIndex + 1;
	    this.normalizeHighlightIndex();
	    this.renderHighlight();
	  };
	
	  Typeahead.prototype.normalizeHighlightIndex = function normalizeHighlightIndex() {
	    var length = this.resultsListView.$el.find('li').length;
	    this.highlightIndex = (this.highlightIndex + length) % length;
	  };
	
	  Typeahead.prototype.refreshResults = function refreshResults(cb) {
	    var _this5 = this;
	
	    return _BaseTypeahead.prototype.refreshResults.call(this, function (results) {
	      return cb(results.concat(_this5.fixedResults));
	    });
	  };
	
	  Typeahead.prototype.render = function render() {
	    _BaseTypeahead.prototype.render.call(this);
	
	    // layer on our new behavior - hiding/showing results when user blurs/focuses
	    this.resultsListView.$el.hide();
	    this.attachFocusEvents();
	
	    // we also want to let you pick results from just the keyboard
	    this.attachKeyEvents();
	
	    return this.$el.html();
	  };
	
	  Typeahead.prototype.renderHighlight = function renderHighlight() {
	    // remove the highlight
	    this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).removeClass(HIGHLIGHT_CLASS);
	
	    // add it to the right index
	    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass(HIGHLIGHT_CLASS);
	  };
	
	  Typeahead.prototype.renderItem = function renderItem(item) {
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
	
	  Typeahead.prototype.selectByIndex = function selectByIndex() {
	    if (!this.active()) {
	      return;
	    }
	
	    if (this.active()) {
	      var highlighted = this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS);
	      if (highlighted.length) {
	        highlighted.click();
	      } else {
	        var valueToSet = this.textInput.get();
	        if (valueToSet) this.set(valueToSet);
	      }
	    }
	    this.textInput.$el.find('input').blur();
	
	    if (this.allowFreeForm && this.resultsListView.results.length === 0) {
	      this.handleSelection(this.textInput.get());
	    }
	  };
	
	  return Typeahead;
	}(BaseTypeahead);
	
	module.exports = Typeahead;

/***/ },
/* 263 */
/*!***********************************!*\
  !*** ./src/Typeahead/styles.less ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/less-loader!./styles.less */ 264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./styles.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./styles.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 264 */
/*!******************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./src/Typeahead/styles.less ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-typeahead {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  position: relative;\n}\n.ui-typeahead .results-list-container {\n  z-index: 1000;\n  box-shadow: gray 1px 1px 5px;\n  background-color: white;\n  position: absolute;\n  width: 100%;\n}\n.ui-typeahead .results-list-container ul {\n  list-style: none;\n  padding-left: 0;\n}\n.ui-typeahead .results-list-container li {\n  padding: 10px;\n  border-bottom: solid #F3F3F3 1px;\n}\n.ui-typeahead .results-list-container li:hover {\n  background-color: #00516f;\n  color: white;\n  cursor: pointer;\n}\n.ui-typeahead .results-list-container .ui-typeahead-highlight {\n  background-color: #00516f;\n  color: white;\n}\n", ""]);
	
	// exports


/***/ },
/* 265 */
/*!********************!*\
  !*** external "_" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 266 */
/*!**********************************************!*\
  !*** ./src/Typeahead/BaseTypeahead/index.js ***!
  \**********************************************/
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
	
	var containerHTML = __webpack_require__(/*! ./baseTypeahead.html */ 267);
	
	// scripts
	var BaseComponent = __webpack_require__(/*! ../../BaseComponent */ 226);
	var $ = __webpack_require__(/*! jquery */ 195);
	var TextInput = __webpack_require__(/*! ../../TextInput */ 254);
	var ListView = __webpack_require__(/*! ../../ListView */ 246);
	var assert = __webpack_require__(/*! ../../assert.js */ 200);
	
	var BaseTypeahead = function (_BaseComponent) {
	  _inherits(BaseTypeahead, _BaseComponent);
	
	  function BaseTypeahead(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, BaseTypeahead);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));
	
	    Object.assign(_this, {
	      fetch: opts.fetch,
	      textInputOpts: opts.textInputOpts || {}
	    });
	
	    assert(typeof _this.fetch === 'function', 'typeahead requires a fetch method');
	
	    _this.$el.append(containerHTML);
	
	    // create sub-components
	    _this.textInput = _this.setupTextInput(_this.textInputOpts);
	    _this.resultsListView = _this.setupListView(opts);
	
	    // handle their subscribe methods
	    _this.handleListViewUpdates();
	    _this.handleTextInputUpdates();
	    return _this;
	  }
	
	  BaseTypeahead.prototype.setupTextInput = function setupTextInput(textInputOpts) {
	    return new TextInput(this.$el.find('.input-container'), textInputOpts);
	  };
	
	  BaseTypeahead.prototype.setupListView = function setupListView(opts) {
	    var _this2 = this;
	
	    return new ListView(this.$el.find('.results-list-container'), {
	      fetch: function fetch(cb) {
	        _this2.refreshResults(cb);
	      },
	      renderItem: opts.renderItem || null
	    });
	  };
	
	  BaseTypeahead.prototype.handleListViewUpdates = function handleListViewUpdates() {
	    var _this3 = this;
	
	    // when an item is picked from the list view:
	    this.resultsListView.subscribe(function (evt) {
	      if (evt === 'refresh') {
	        return;
	      }
	
	      // update text input with this value, set typeahead internal value
	      _this3.handleSelection(evt);
	      _this3.textInput.$el.find('input').focus();
	    });
	  };
	
	  BaseTypeahead.prototype.handleTextInputUpdates = function handleTextInputUpdates() {
	    var _this4 = this;
	
	    // when text input gets a new value:
	    this.textInput.subscribe(function () {
	      // re render results list
	      _this4.resultsListView.refresh();
	    });
	  };
	
	  BaseTypeahead.prototype.handleSelection = function handleSelection(selection) {
	    this.set(selection);
	  };
	
	  BaseTypeahead.prototype.getDisplayValue = function getDisplayValue(item) {
	    if ($.isPlainObject(item)) {
	      item = item[this.displayProperty];
	    }
	    return item;
	  };
	
	  // small aux function that should be used instead of set when textInput does not
	  // need to be updated
	
	  BaseTypeahead.prototype.setInternal = function setInternal(v) {
	    this.value = v;
	    this.publish(this.get());
	  };
	
	  BaseTypeahead.prototype.get = function get() {
	    return this.value || '';
	  };
	
	  BaseTypeahead.prototype.getTextInput = function getTextInput() {
	    return this.textInput.get();
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
	    var textInputVal = this.textInput.get();
	    if (textInputVal) {
	      this.fetch(textInputVal, function (results) {
	        cb(results);
	      });
	    } else {
	      cb([]);
	    }
	  };
	
	  return BaseTypeahead;
	}(BaseComponent);
	
	module.exports = BaseTypeahead;

/***/ },
/* 267 */
/*!********************************************************!*\
  !*** ./src/Typeahead/BaseTypeahead/baseTypeahead.html ***!
  \********************************************************/
/***/ function(module, exports) {

	module.exports = "<div class='ui-typeahead'>\n  <div class='input-container'></div>\n  <div class='results-list-container'></div>\n</div>\n\n";

/***/ },
/* 268 */
/*!**********************************!*\
  !*** ./src/MultiSelect/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// css
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.scss */ 269);
	
	// html
	var multiSelectTmpl = __webpack_require__(/*! ./multiSelect.dot */ 271);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Utils = __webpack_require__(/*! ../Utils */ 227);
	
	var MultiSelect = function (_BaseComponent) {
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
	    Utils.bindClick(this.$el.find('label'), function (evt) {
	      _this2.set($(evt.target.parentElement).find('input').val());
	    });
	    Utils.bindClick(this.$el.find('input'), function (evt) {
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
	}(BaseComponent);
	
	module.exports = MultiSelect;

/***/ },
/* 269 */
/*!*************************************!*\
  !*** ./src/MultiSelect/styles.scss ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./../../~/jsontosass-loader?path=./sassvars.json!./styles.scss */ 270);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/jsontosass-loader/index.js?path=./sassvars.json!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/jsontosass-loader/index.js?path=./sassvars.json!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 270 */
/*!***************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./~/jsontosass-loader?path=./sassvars.json!./src/MultiSelect/styles.scss ***!
  \***************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n  label {\n    position: relative;\n    cursor: pointer; }\n    label input[type=\"checkbox\"] {\n      display: none; }\n  label input[type=\"checkbox\"] + span {\n    display: inline-block;\n    line-height: normal;\n    cursor: pointer;\n    padding: 8px 14px;\n    background-color: #ffffff;\n    border: 1px solid #D0D0D0; }\n  label input[type=\"checkbox\"] + span:hover {\n    border-color: #000;\n    background-color: #105b63;\n    color: #fff; }\n  label input[type=\"checkbox\"]:checked + span {\n    border-color: #000;\n    background-color: #105b63;\n    color: #fff; } }\n", ""]);
	
	// exports


/***/ },
/* 271 */
/*!*****************************************!*\
  !*** ./src/MultiSelect/multiSelect.dot ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {
			var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
				matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(code) {
				return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
			};
		}());var out='<div class=\'ui-multi-select\'> ';var arr1=it.options;if(arr1){var opt,index=-1,l1=arr1.length-1;while(index<l1){opt=arr1[index+=1];out+=' <div class="select-option"> <label> <input type=\'checkbox\' name=\''+( it.id )+'\' value=\''+encodeHTML(opt.value)+'\' ';if(opt.checked){out+='checked=true';}out+='/> <span>'+(it.renderItem(opt))+'</span> </label> </div> ';} } out+='</div>';return out;
	}

/***/ },
/* 272 */
/*!*********************************!*\
  !*** ./src/Pagination/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! imports?jQuery=jquery!../../~/simplePagination/jquery.simplePagination.js */ 273);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	
	var Pagination = function (_BaseComponent) {
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
	}(BaseComponent);
	
	module.exports = Pagination;

/***/ },
/* 273 */
/*!****************************************************************************************!*\
  !*** ./~/imports-loader?jQuery=jquery!./~/simplePagination/jquery.simplePagination.js ***!
  \****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(/*! jquery */ 195);
	
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
/* 274 */
/*!***********************************!*\
  !*** ./src/RadioButtons/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// html
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var radioButtonsTmpl = __webpack_require__(/*! ./radioButtons.dot */ 275);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	var Utils = __webpack_require__(/*! ../Utils */ 227);
	
	var RadioButtons = function (_BaseComponent) {
	  _inherits(RadioButtons, _BaseComponent);
	
	  function RadioButtons(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, RadioButtons);
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));
	
	    Object.assign(_this, {
	      displayNameKey: opts.displayNameKey || 'displayName',
	      radioBoxes: opts.radioBoxes || false,
	      renderItem: opts.renderItem || _this.renderItem
	    });
	
	    _this.setOptions(opts.options || []);
	    return _this;
	  }
	
	  RadioButtons.prototype.renderItem = function renderItem(item) {
	    return JSON.stringify(item[this.displayNameKey]);
	  };
	
	  RadioButtons.prototype.setOptions = function setOptions(options) {
	    var selection = this.get();
	    this.options = options.map(function (opt) {
	      if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object') {
	        opt = {
	          value: opt
	        };
	      }
	      if (selection && selection.value) {
	        opt.checked = selection.value === opt.value;
	      } else {
	        opt.checked = false;
	      }
	      return opt;
	    });
	  };
	
	  RadioButtons.prototype.get = function get() {
	    this.options = this.options || [];
	    var selected = this.options.filter(function (opt) {
	      return opt.checked;
	    });
	    return selected[0] || null;
	  };
	
	  RadioButtons.prototype.render = function render() {
	    var _this2 = this;
	
	    this.$el.html(radioButtonsTmpl(this));
	    Utils.bindClick(this.$el.find('label'), function (evt) {
	      _this2.set($(evt.target.parentElement).find('input').val());
	    });
	    Utils.bindClick(this.$el.find('input'), function (evt) {
	      _this2.set($(evt.target).val());
	    });
	    return this.$el.html();
	  };
	
	  /**
	   * Check the options against the value passed
	   * @param selected a value to select
	   */
	
	  RadioButtons.prototype.set = function set(selected) {
	    var _this3 = this;
	
	    this.options.forEach(function (option) {
	      if (option.value === selected) {
	        option.checked = _this3.radioBoxes ? !option.checked : true;
	      } else {
	        option.checked = false;
	      }
	    });
	
	    this.render();
	    this.publish(this.get());
	    return this;
	  };
	
	  return RadioButtons;
	}(BaseComponent);
	
	module.exports = RadioButtons;

/***/ },
/* 275 */
/*!*******************************************!*\
  !*** ./src/RadioButtons/radioButtons.dot ***!
  \*******************************************/
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {
			var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
				matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(code) {
				return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
			};
		}());var out='<div class=\'ui-radio-buttons\'> ';var arr1=it.options;if(arr1){var opt,index=-1,l1=arr1.length-1;while(index<l1){opt=arr1[index+=1];out+=' <div class="select-option"> <label> <input ';if(it.radioBoxes){out+='type=\'checkbox\'';}else{out+='type=\'radio\'';}out+=' name=\''+( it.id )+'\' value=\''+encodeHTML(opt.value)+'\' ';if(opt.checked){out+='checked=true';}out+='/> <span>'+(it.renderItem(opt))+'</span> </label> </div> ';} } out+='</div>';return out;
	}

/***/ },
/* 276 */
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
	
	__webpack_require__(/*! ./styles.css */ 277);
	
	// html
	var selectTmpl = __webpack_require__(/*! ./select.tmpl */ 279);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	
	var SingleSelect = function (_BaseComponent) {
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
	}(BaseComponent);
	
	module.exports = SingleSelect;

/***/ },
/* 277 */
/*!*************************************!*\
  !*** ./src/SingleSelect/styles.css ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 278);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 278 */
/*!********************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/SingleSelect/styles.css ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 279 */
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
/* 280 */
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
	
	__webpack_require__(/*! ./styles.css */ 281);
	
	// scripts
	var dotty = __webpack_require__(/*! dotty */ 283);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	
	var SentenceGenerator = function (_BaseComponent) {
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
	   **      default: {String} [optional]  - a fallback string in case the value inside ${} is falsey
	   **      order: {Number} [optional] - the order of the sentence fragment in the entire string
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
	        return a.order - b.order;
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
	
	    // strip trailing delimiter
	    if (this.delimiter) {
	      templateString = templateString.replace(new RegExp(this.delimiter + '$'), '');
	    }
	
	    this.$el.html('<span>' + templateString + '</span>');
	  };
	
	  return SentenceGenerator;
	}(BaseComponent);
	
	module.exports = SentenceGenerator;

/***/ },
/* 281 */
/*!******************************************!*\
  !*** ./src/SentenceGenerator/styles.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 282);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 282 */
/*!*************************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/SentenceGenerator/styles.css ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 283 */
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


/***/ },
/* 284 */
/*!******************************!*\
  !*** ./src/Spinner/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// # Render a spinner
	
	// css
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./styles.css */ 285);
	
	// scripts
	var $ = __webpack_require__(/*! jquery */ 195);
	var BaseSpinner = __webpack_require__(/*! spin.js */ 287);
	var BaseComponent = __webpack_require__(/*! ../BaseComponent */ 226);
	
	/**
	 * Example:
	    var opts = {
	      lines: 12,             // The number of lines to draw
	      length: 7,             // The length of each line
	      width: 5,              // The line thickness
	      radius: 10,            // The radius of the inner circle
	      scale: 1.0,            // Scales overall size of the spinner
	      corners: 1,            // Roundness (0..1)
	      color: '#000',         // #rgb or #rrggbb
	      opacity: 1/4,          // Opacity of the lines
	      rotate: 0,             // Rotation offset
	      direction: 1,          // 1: clockwise, -1: counterclockwise
	      speed: 1,              // Rounds per second
	      trail: 100,            // Afterglow percentage
	      fps: 20,               // Frames per second when using setTimeout()
	      zIndex: 2e9,           // Use a high z-index by default
	      className: 'spinner',  // CSS class to assign to the element
	      top: '50%',            // center vertically
	      left: '50%',           // center horizontally
	      shadow: false,         // Whether to render a shadow
	      hwaccel: false,        // Whether to use hardware acceleration (might be buggy)
	      position: 'absolute'   // Element positioning
	    }
	
	    var target = document.getElementById('foo')
	    var spinner = new Spinner(opts).spin(target)
	 */
	
	var Spinner = function (_BaseComponent) {
	  _inherits(Spinner, _BaseComponent);
	
	  function Spinner(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Spinner);
	
	    $('.juicy-spinner').remove();
	    $('.juicy-spinner-container').remove();
	
	    // determine if global
	    if (!el) {
	      $('body').prepend('<div class=\'juicy-spinner-container\' style=\'display:none\'></div>');
	      el = $('body');
	    }
	
	    // needed so elements aren't destroyed
	    opts.preserveChildElements = true;
	    opts.className = 'juicy-spinner';
	    opts.position = 'fixed';
	
	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));
	
	    Object.assign(_this, {
	      opts: opts,
	      _toggled: false
	    });
	
	    _this.spinner = new BaseSpinner(opts);
	    return _this;
	  }
	
	  Spinner.prototype.start = function start() {
	    this.toggleOverlay(true);
	    this.publish();
	
	    // retrieve native dom element
	    var target = this.$el.get(0);
	    return this.spinner.spin(target);
	  };
	
	  Spinner.prototype.stop = function stop() {
	    this.toggleOverlay(false);
	    return this.spinner.stop();
	  };
	
	  Spinner.prototype.render = function render() {
	    return this.start();
	  };
	
	  Spinner.prototype.get = function get() {
	    return this.spinner || null;
	  };
	
	  Spinner.prototype.toggleOverlay = function toggleOverlay(toggle) {
	
	    if (toggle) {
	      $('body').addClass('noScroll');
	      $('.juicy-spinner-container').css('display', 'block');
	    } else {
	      $('.juicy-spinner-container').css('display', 'none');
	      $('body').removeClass('noScroll');
	    }
	  };
	
	  Spinner.prototype.set = function set(opts) {
	    var newOpts = $.extend({}, this.opts, opts);
	
	    // destroy reference to spinner & recreate w/ newOpts
	    this.spinner = null;
	    this.spinner = new BaseSpinner(newOpts);
	  };
	
	  return Spinner;
	}(BaseComponent);
	
	module.exports = Spinner;

/***/ },
/* 285 */
/*!********************************!*\
  !*** ./src/Spinner/styles.css ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/cssnext-loader?compress!./styles.css */ 286);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 224)(content, {});
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
/* 286 */
/*!***************************************************************************!*\
  !*** ./~/css-loader!./~/cssnext-loader?compress!./src/Spinner/styles.css ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 223)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Transparent Overlay */\n.juicy-spinner:before {\n  content: '';\n  display: block;\n  position: fixed;\n\n}\n\n.juicy-spinner-container {\n\ttop: 0;\n\tleft: 0;\n  position: fixed;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 1001;\n  height: 100%;\n  width: 100%;\n}\n\n.noScroll {\n  overflow: hidden;\n  z-index: 1000;\n  display: block;\n}", ""]);
	
	// exports


/***/ },
/* 287 */
/*!***************************!*\
  !*** ./~/spin.js/spin.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Copyright (c) 2011-2014 Felix Gnass
	 * Licensed under the MIT license
	 * http://spin.js.org/
	 *
	 * Example:
	    var opts = {
	      lines: 12             // The number of lines to draw
	    , length: 7             // The length of each line
	    , width: 5              // The line thickness
	    , radius: 10            // The radius of the inner circle
	    , scale: 1.0            // Scales overall size of the spinner
	    , corners: 1            // Roundness (0..1)
	    , color: '#000'         // #rgb or #rrggbb
	    , opacity: 1/4          // Opacity of the lines
	    , rotate: 0             // Rotation offset
	    , direction: 1          // 1: clockwise, -1: counterclockwise
	    , speed: 1              // Rounds per second
	    , trail: 100            // Afterglow percentage
	    , fps: 20               // Frames per second when using setTimeout()
	    , zIndex: 2e9           // Use a high z-index by default
	    , className: 'spinner'  // CSS class to assign to the element
	    , top: '50%'            // center vertically
	    , left: '50%'           // center horizontally
	    , shadow: false         // Whether to render a shadow
	    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	    , position: 'absolute'  // Element positioning
	    }
	    var target = document.getElementById('foo')
	    var spinner = new Spinner(opts).spin(target)
	 */
	;(function (root, factory) {
	
	  /* CommonJS */
	  if (typeof module == 'object' && module.exports) module.exports = factory()
	
	  /* AMD module */
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	
	  /* Browser global */
	  else root.Spinner = factory()
	}(this, function () {
	  "use strict"
	
	  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
	    , animations = {} /* Animation rules keyed by their name */
	    , useCssAnimations /* Whether to use CSS animations or setTimeout */
	    , sheet /* A stylesheet to hold the @keyframe or VML rules. */
	
	  /**
	   * Utility function to create elements. If no tag name is given,
	   * a DIV is created. Optionally properties can be passed.
	   */
	  function createEl (tag, prop) {
	    var el = document.createElement(tag || 'div')
	      , n
	
	    for (n in prop) el[n] = prop[n]
	    return el
	  }
	
	  /**
	   * Appends children and returns the parent.
	   */
	  function ins (parent /* child1, child2, ...*/) {
	    for (var i = 1, n = arguments.length; i < n; i++) {
	      parent.appendChild(arguments[i])
	    }
	
	    return parent
	  }
	
	  /**
	   * Creates an opacity keyframe animation rule and returns its name.
	   * Since most mobile Webkits have timing issues with animation-delay,
	   * we create separate rules for each line/segment.
	   */
	  function addAnimation (alpha, trail, i, lines) {
	    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
	      , start = 0.01 + i/lines * 100
	      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
	      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
	      , pre = prefix && '-' + prefix + '-' || ''
	
	    if (!animations[name]) {
	      sheet.insertRule(
	        '@' + pre + 'keyframes ' + name + '{' +
	        '0%{opacity:' + z + '}' +
	        start + '%{opacity:' + alpha + '}' +
	        (start+0.01) + '%{opacity:1}' +
	        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
	        '100%{opacity:' + z + '}' +
	        '}', sheet.cssRules.length)
	
	      animations[name] = 1
	    }
	
	    return name
	  }
	
	  /**
	   * Tries various vendor prefixes and returns the first supported property.
	   */
	  function vendor (el, prop) {
	    var s = el.style
	      , pp
	      , i
	
	    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
	    if (s[prop] !== undefined) return prop
	    for (i = 0; i < prefixes.length; i++) {
	      pp = prefixes[i]+prop
	      if (s[pp] !== undefined) return pp
	    }
	  }
	
	  /**
	   * Sets multiple style properties at once.
	   */
	  function css (el, prop) {
	    for (var n in prop) {
	      el.style[vendor(el, n) || n] = prop[n]
	    }
	
	    return el
	  }
	
	  /**
	   * Fills in default values.
	   */
	  function merge (obj) {
	    for (var i = 1; i < arguments.length; i++) {
	      var def = arguments[i]
	      for (var n in def) {
	        if (obj[n] === undefined) obj[n] = def[n]
	      }
	    }
	    return obj
	  }
	
	  /**
	   * Returns the line color from the given string or array.
	   */
	  function getColor (color, idx) {
	    return typeof color == 'string' ? color : color[idx % color.length]
	  }
	
	  // Built-in defaults
	
	  var defaults = {
	    lines: 12             // The number of lines to draw
	  , length: 7             // The length of each line
	  , width: 5              // The line thickness
	  , radius: 10            // The radius of the inner circle
	  , scale: 1.0            // Scales overall size of the spinner
	  , corners: 1            // Roundness (0..1)
	  , color: '#000'         // #rgb or #rrggbb
	  , opacity: 1/4          // Opacity of the lines
	  , rotate: 0             // Rotation offset
	  , direction: 1          // 1: clockwise, -1: counterclockwise
	  , speed: 1              // Rounds per second
	  , trail: 100            // Afterglow percentage
	  , fps: 20               // Frames per second when using setTimeout()
	  , zIndex: 2e9           // Use a high z-index by default
	  , className: 'spinner'  // CSS class to assign to the element
	  , top: '50%'            // center vertically
	  , left: '50%'           // center horizontally
	  , shadow: false         // Whether to render a shadow
	  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	  , position: 'absolute'  // Element positioning
	  }
	
	  /** The constructor */
	  function Spinner (o) {
	    this.opts = merge(o || {}, Spinner.defaults, defaults)
	  }
	
	  // Global defaults that override the built-ins:
	  Spinner.defaults = {}
	
	  merge(Spinner.prototype, {
	    /**
	     * Adds the spinner to the given target element. If this instance is already
	     * spinning, it is automatically removed from its previous target b calling
	     * stop() internally.
	     */
	    spin: function (target) {
	      this.stop()
	
	      var self = this
	        , o = self.opts
	        , el = self.el = createEl(null, {className: o.className})
	
	      css(el, {
	        position: o.position
	      , width: 0
	      , zIndex: o.zIndex
	      , left: o.left
	      , top: o.top
	      })
	
	      if (target) {
	        target.insertBefore(el, target.firstChild || null)
	      }
	
	      el.setAttribute('role', 'progressbar')
	      self.lines(el, self.opts)
	
	      if (!useCssAnimations) {
	        // No CSS animation support, use setTimeout() instead
	        var i = 0
	          , start = (o.lines - 1) * (1 - o.direction) / 2
	          , alpha
	          , fps = o.fps
	          , f = fps / o.speed
	          , ostep = (1 - o.opacity) / (f * o.trail / 100)
	          , astep = f / o.lines
	
	        ;(function anim () {
	          i++
	          for (var j = 0; j < o.lines; j++) {
	            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)
	
	            self.opacity(el, j * o.direction + start, alpha, o)
	          }
	          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
	        })()
	      }
	      return self
	    }
	
	    /**
	     * Stops and removes the Spinner.
	     */
	  , stop: function () {
	      var el = this.el
	      if (el) {
	        clearTimeout(this.timeout)
	        if (el.parentNode) el.parentNode.removeChild(el)
	        this.el = undefined
	      }
	      return this
	    }
	
	    /**
	     * Internal method that draws the individual lines. Will be overwritten
	     * in VML fallback mode below.
	     */
	  , lines: function (el, o) {
	      var i = 0
	        , start = (o.lines - 1) * (1 - o.direction) / 2
	        , seg
	
	      function fill (color, shadow) {
	        return css(createEl(), {
	          position: 'absolute'
	        , width: o.scale * (o.length + o.width) + 'px'
	        , height: o.scale * o.width + 'px'
	        , background: color
	        , boxShadow: shadow
	        , transformOrigin: 'left'
	        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
	        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
	        })
	      }
	
	      for (; i < o.lines; i++) {
	        seg = css(createEl(), {
	          position: 'absolute'
	        , top: 1 + ~(o.scale * o.width / 2) + 'px'
	        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
	        , opacity: o.opacity
	        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
	        })
	
	        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
	        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
	      }
	      return el
	    }
	
	    /**
	     * Internal method that adjusts the opacity of a single line.
	     * Will be overwritten in VML fallback mode below.
	     */
	  , opacity: function (el, i, val) {
	      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
	    }
	
	  })
	
	
	  function initVML () {
	
	    /* Utility function to create a VML tag */
	    function vml (tag, attr) {
	      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
	    }
	
	    // No CSS transforms but VML support, add a CSS rule for VML elements:
	    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')
	
	    Spinner.prototype.lines = function (el, o) {
	      var r = o.scale * (o.length + o.width)
	        , s = o.scale * 2 * r
	
	      function grp () {
	        return css(
	          vml('group', {
	            coordsize: s + ' ' + s
	          , coordorigin: -r + ' ' + -r
	          })
	        , { width: s, height: s }
	        )
	      }
	
	      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
	        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
	        , i
	
	      function seg (i, dx, filter) {
	        ins(
	          g
	        , ins(
	            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
	          , ins(
	              css(
	                vml('roundrect', {arcsize: o.corners})
	              , { width: r
	                , height: o.scale * o.width
	                , left: o.scale * o.radius
	                , top: -o.scale * o.width >> 1
	                , filter: filter
	                }
	              )
	            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
	            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
	            )
	          )
	        )
	      }
	
	      if (o.shadow)
	        for (i = 1; i <= o.lines; i++) {
	          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
	        }
	
	      for (i = 1; i <= o.lines; i++) seg(i)
	      return ins(el, g)
	    }
	
	    Spinner.prototype.opacity = function (el, i, val, o) {
	      var c = el.firstChild
	      o = o.shadow && o.lines || 0
	      if (c && i + o < c.childNodes.length) {
	        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
	        if (c) c.opacity = val
	      }
	    }
	  }
	
	  if (typeof document !== 'undefined') {
	    sheet = (function () {
	      var el = createEl('style', {type : 'text/css'})
	      ins(document.getElementsByTagName('head')[0], el)
	      return el.sheet || el.styleSheet
	    }())
	
	    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})
	
	    if (!vendor(probe, 'transform') && probe.adj) initVML()
	    else useCssAnimations = vendor(probe, 'animation')
	  }
	
	  return Spinner
	
	}));


/***/ }
/******/ ]);
//# sourceMappingURL=ui.js.map