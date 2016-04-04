var UI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	var initFunc = __webpack_require__(291);

	var UIComponents = {
	  // exposed dependences
	  Dot: __webpack_require__(309),
	  i18n: __webpack_require__(292),

	  // services
	  BaseFragmentFactory: __webpack_require__(314),
	  PubSubHub: __webpack_require__(316),
	  State: __webpack_require__(317),
	  url: __webpack_require__(326),

	  // components
	  Button: __webpack_require__(332),
	  CurrentLocation: __webpack_require__(343),
	  CustomTextInput: __webpack_require__(347),
	  ExpandCollapse: __webpack_require__(355),
	  InfiniteScroll: __webpack_require__(361),
	  ListView: __webpack_require__(362),
	  LocationTextInput: __webpack_require__(366),
	  LocationTypeahead: __webpack_require__(374),
	  MultiSelect: __webpack_require__(383),
	  Pagination: __webpack_require__(387),
	  RadioButtons: __webpack_require__(389),
	  SingleSelect: __webpack_require__(391),
	  TextInput: __webpack_require__(370),
	  Toggle: __webpack_require__(359),
	  Typeahead: __webpack_require__(378),
	  SentenceGenerator: __webpack_require__(395),
	  Spinner: __webpack_require__(399)
	};

	UIComponents.init = function init() {
	  return initFunc.apply(UIComponents, arguments);
	};

	module.exports = UIComponents;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* eslint max-len: 0 */

	"use strict";

	__webpack_require__(2);

	__webpack_require__(286);

	// Should be removed in the next major release:

	__webpack_require__(288);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(55);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(83);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(184);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(207);
	__webpack_require__(210);
	__webpack_require__(211);
	__webpack_require__(213);
	__webpack_require__(214);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(284);
	__webpack_require__(285);
	module.exports = __webpack_require__(5);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(5)
	  , has            = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(7)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(8)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , keyOf          = __webpack_require__(26)
	  , enumKeys       = __webpack_require__(39)
	  , isArray        = __webpack_require__(42)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(29)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(43)
	  , gOPNExt        = __webpack_require__(46)
	  , $GOPD          = __webpack_require__(48)
	  , $DP            = __webpack_require__(11)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
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

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
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
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
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
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(41).f  = $propertyIsEnumerable
	  __webpack_require__(40).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(49)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

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
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(8)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(5)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
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
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(7) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(6)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(5).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
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
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(6)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(8)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(6)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(27)
	  , toIObject = __webpack_require__(29);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(28)
	  , enumBugKeys = __webpack_require__(38);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(6)
	  , toIObject    = __webpack_require__(29)
	  , arrayIndexOf = __webpack_require__(33)(false)
	  , IE_PROTO     = __webpack_require__(37)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(30)
	  , defined = __webpack_require__(32);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(31);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(29)
	  , toLength  = __webpack_require__(34)
	  , toIndex   = __webpack_require__(36);
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(35)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(27)
	  , gOPS    = __webpack_require__(40)
	  , pIE     = __webpack_require__(41);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 41 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(31);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(44)
	  , enumBugKeys = __webpack_require__(38)
	  , IE_PROTO    = __webpack_require__(37)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(45).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(27);

	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(29)
	  , gOPN      = __webpack_require__(47).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(28)
	  , hiddenKeys = __webpack_require__(38).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(41)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(29)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(6)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(43)});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperties: __webpack_require__(44)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(29)
	  , $getOwnPropertyDescriptor = __webpack_require__(48).f;

	__webpack_require__(54)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(5)
	  , fails   = __webpack_require__(8);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(56)
	  , $getPrototypeOf = __webpack_require__(57);

	__webpack_require__(54)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(32);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(6)
	  , toObject    = __webpack_require__(56)
	  , IE_PROTO    = __webpack_require__(37)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(56)
	  , $keys    = __webpack_require__(27);

	__webpack_require__(54)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(54)('getOwnPropertyNames', function(){
	  return __webpack_require__(46).f;
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(54)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(54)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(54)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(54)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(54)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(54)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(67)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(27)
	  , gOPS     = __webpack_require__(40)
	  , pIE      = __webpack_require__(41)
	  , toObject = __webpack_require__(56)
	  , IObject  = __webpack_require__(30)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(8)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {is: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(71).set});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(73)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(31)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(9);

	$export($export.P, 'Function', {bind: __webpack_require__(75)});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(76)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 76 */
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(6)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || dP(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(57)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , $parseInt = __webpack_require__(80);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(81).trim
	  , ws        = __webpack_require__(82)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , defined = __webpack_require__(32)
	  , fails   = __webpack_require__(8)
	  , spaces  = __webpack_require__(82)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
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
/* 82 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(9)
	  , $parseFloat = __webpack_require__(84);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(81).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(82) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(6)
	  , cof               = __webpack_require__(31)
	  , inheritIfRequired = __webpack_require__(86)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(8)
	  , gOPN              = __webpack_require__(47).f
	  , gOPD              = __webpack_require__(48).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(81).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(43)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

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
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(7) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(71).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , anInstance   = __webpack_require__(88)
	  , toInteger    = __webpack_require__(35)
	  , aNumberValue = __webpack_require__(89)
	  , repeat       = __webpack_require__(90)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(8)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(31);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(35)
	  , defined   = __webpack_require__(32);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , $fails       = __webpack_require__(8)
	  , aNumberValue = __webpack_require__(89)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(9)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {isInteger: __webpack_require__(95)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(9)
	  , isInteger = __webpack_require__(95)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(9)
	  , $parseFloat = __webpack_require__(84);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , $parseInt = __webpack_require__(80);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(9)
	  , log1p   = __webpack_require__(103)
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
/* 103 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(9);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(9)
	  , sign    = __webpack_require__(107);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(9)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {expm1: __webpack_require__(111)});

/***/ },
/* 111 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(9)
	  , sign      = __webpack_require__(107)
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(9)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(9)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(8)(function(){
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {log1p: __webpack_require__(103)});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {sign: __webpack_require__(107)});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(9)
	  , expm1   = __webpack_require__(111)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(9)
	  , expm1   = __webpack_require__(111)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(9)
	  , toIndex        = __webpack_require__(36)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(29)
	  , toLength  = __webpack_require__(34);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(81)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(126)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(127)(String, 'String', function(iterated){
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35)
	  , defined   = __webpack_require__(32);
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(49)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(6)
	  , Iterators      = __webpack_require__(128)
	  , $iterCreate    = __webpack_require__(129)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(57)
	  , ITERATOR       = __webpack_require__(25)('iterator')
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
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
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
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(43)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $at     = __webpack_require__(126)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(9)
	  , toLength  = __webpack_require__(34)
	  , context   = __webpack_require__(132)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(134)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(133)
	  , defined  = __webpack_require__(32);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(31)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(9)
	  , context  = __webpack_require__(132)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(134)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(90)
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(9)
	  , toLength    = __webpack_require__(34)
	  , context     = __webpack_require__(132)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(134)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(139)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , fails   = __webpack_require__(8)
	  , defined = __webpack_require__(32)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(139)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(139)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(139)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(139)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(139)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(139)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(139)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(139)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(139)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(139)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(139)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(139)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(9);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(9)
	  , toObject    = __webpack_require__(56)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(8)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(9)
	  , fails   = __webpack_require__(8)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(157));

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(9);

	$export($export.S, 'Array', {isArray: __webpack_require__(42)});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(20)
	  , $export     = __webpack_require__(9)
	  , toObject    = __webpack_require__(56)
	  , call        = __webpack_require__(160)
	  , isArrayIter = __webpack_require__(161)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(162);
	$export($export.S + $export.F * !__webpack_require__(163)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
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
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
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
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(128)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(73)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(128);
	module.exports = __webpack_require__(5).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)result[index] = arguments[index++];
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(29)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(30) != Object || !__webpack_require__(166)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(8);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(9)
	  , html       = __webpack_require__(45)
	  , cof        = __webpack_require__(31)
	  , toIndex    = __webpack_require__(36)
	  , toLength   = __webpack_require__(34)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(8)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
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

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(9)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(56)
	  , fails     = __webpack_require__(8)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(166)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(9)
	  , $forEach = __webpack_require__(170)(0)
	  , STRICT   = __webpack_require__(166)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(30)
	  , toObject = __webpack_require__(56)
	  , toLength = __webpack_require__(34)
	  , asc      = __webpack_require__(171);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(42)
	  , SPECIES  = __webpack_require__(25)('species');
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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $map    = __webpack_require__(170)(1);

	$export($export.P + $export.F * !__webpack_require__(166)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $filter = __webpack_require__(170)(2);

	$export($export.P + $export.F * !__webpack_require__(166)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $some   = __webpack_require__(170)(3);

	$export($export.P + $export.F * !__webpack_require__(166)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $every  = __webpack_require__(170)(4);

	$export($export.P + $export.F * !__webpack_require__(166)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $reduce = __webpack_require__(177);

	$export($export.P + $export.F * !__webpack_require__(166)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(56)
	  , IObject   = __webpack_require__(30)
	  , toLength  = __webpack_require__(34);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9)
	  , $reduce = __webpack_require__(177);

	$export($export.P + $export.F * !__webpack_require__(166)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(9)
	  , $indexOf = __webpack_require__(33)(false);

	$export($export.P + $export.F * !__webpack_require__(166)([].indexOf), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(9)
	  , toIObject = __webpack_require__(29)
	  , toInteger = __webpack_require__(35)
	  , toLength  = __webpack_require__(34);

	$export($export.P + $export.F * !__webpack_require__(166)([].lastIndexOf), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index;
	    return -1;
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(182)});

	__webpack_require__(183)('copyWithin');

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(56)
	  , toIndex  = __webpack_require__(36)
	  , toLength = __webpack_require__(34);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', {fill: __webpack_require__(185)});

	__webpack_require__(183)('fill');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(56)
	  , toIndex  = __webpack_require__(36)
	  , toLength = __webpack_require__(34);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(170)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(183)(KEY);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(170)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(183)(KEY);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189)('Array');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(7)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(183)
	  , step             = __webpack_require__(191)
	  , Iterators        = __webpack_require__(128)
	  , toIObject        = __webpack_require__(29);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(127)(Array, 'Array', function(iterated, kind){
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
/* 191 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(86)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(47).f
	  , isRegExp          = __webpack_require__(133)
	  , $flags            = __webpack_require__(193)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(189)('RegExp');

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(195);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(193)
	  , DESCRIPTORS = __webpack_require__(7)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(8)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(7) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(193)
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(197)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(8)
	  , defined  = __webpack_require__(32)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(197)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(197)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(197)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(133)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(49)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(73)
	  , $export            = __webpack_require__(9)
	  , isObject           = __webpack_require__(13)
	  , anObject           = __webpack_require__(12)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(88)
	  , forOf              = __webpack_require__(202)
	  , setProto           = __webpack_require__(71).set
	  , speciesConstructor = __webpack_require__(203)
	  , task               = __webpack_require__(204).set
	  , microtask          = __webpack_require__(205)
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
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
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(206)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(189)(PROMISE);
	Wrapper = __webpack_require__(5)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(163)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
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
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(160)
	  , isArrayIter = __webpack_require__(161)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(162);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
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
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(76)
	  , html               = __webpack_require__(45)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
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
	var listener = function(event){
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
	  if(__webpack_require__(31)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
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
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(204).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(31)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, fn;
	  if(isNode && (parent = process.domain))parent.exit();
	  while(head){
	    fn = head.fn;
	    fn(); // <- currently we use it only for Promise - try / catch not required
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
	  var toggle = true
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = !toggle;
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

	module.exports = function(fn){
	  var task = {fn: fn, next: undefined};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(208);

	// 23.1 Map Objects
	module.exports = __webpack_require__(209)('Map', function(get){
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(43)
	  , hide        = __webpack_require__(10)
	  , redefineAll = __webpack_require__(206)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(88)
	  , defined     = __webpack_require__(32)
	  , forOf       = __webpack_require__(202)
	  , $iterDefine = __webpack_require__(127)
	  , step        = __webpack_require__(191)
	  , setSpecies  = __webpack_require__(189)
	  , DESCRIPTORS = __webpack_require__(7)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

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
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
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
	        anInstance(this, C, 'forEach');
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
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
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
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(9)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(206)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(202)
	  , anInstance        = __webpack_require__(88)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(8)
	  , $iterDetect       = __webpack_require__(163)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(86);

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
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
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
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(208);

	// 23.2 Set Objects
	module.exports = __webpack_require__(209)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(170)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(67)
	  , weak         = __webpack_require__(212)
	  , isObject     = __webpack_require__(13)
	  , has          = __webpack_require__(6)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(209)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(206)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(88)
	  , forOf             = __webpack_require__(202)
	  , createArrayMethod = __webpack_require__(170)
	  , $has              = __webpack_require__(6)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
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
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(212);

	// 23.4 WeakSet Objects
	__webpack_require__(209)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(9)
	  , $typed       = __webpack_require__(215)
	  , buffer       = __webpack_require__(216)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(36)
	  , toLength     = __webpack_require__(34)
	  , isObject     = __webpack_require__(13)
	  , TYPED_ARRAY  = __webpack_require__(25)('typed_array')
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(203)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(8)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(189)(ARRAY_BUFFER);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(49)
	  , $typed         = __webpack_require__(215)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(206)
	  , fails          = __webpack_require__(8)
	  , anInstance     = __webpack_require__(88)
	  , toInteger      = __webpack_require__(35)
	  , toLength       = __webpack_require__(34)
	  , gOPN           = __webpack_require__(47).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(185)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , parseInt       = global.parseInt
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , min            = Math.min
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	$export($export.G + $export.W + $export.F * !__webpack_require__(215).ABV, {
	  DataView: __webpack_require__(216).DataView
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(7)){
	  var LIBRARY             = __webpack_require__(49)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(8)
	    , $export             = __webpack_require__(9)
	    , $typed              = __webpack_require__(215)
	    , $buffer             = __webpack_require__(216)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(88)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(206)
	    , isInteger           = __webpack_require__(95)
	    , toInteger           = __webpack_require__(35)
	    , toLength            = __webpack_require__(34)
	    , toIndex             = __webpack_require__(36)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(6)
	    , same                = __webpack_require__(69)
	    , classof             = __webpack_require__(73)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(56)
	    , isArrayIter         = __webpack_require__(161)
	    , create              = __webpack_require__(43)
	    , getPrototypeOf      = __webpack_require__(57)
	    , gOPN                = __webpack_require__(47).f
	    , isIterable          = __webpack_require__(220)
	    , getIterFn           = __webpack_require__(162)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(170)
	    , createArrayIncludes = __webpack_require__(33)
	    , speciesConstructor  = __webpack_require__(203)
	    , ArrayIterators      = __webpack_require__(190)
	    , Iterators           = __webpack_require__(128)
	    , $iterDetect         = __webpack_require__(163)
	    , setSpecies          = __webpack_require__(189)
	    , arrayFill           = __webpack_require__(185)
	    , arrayCopyWithin     = __webpack_require__(182)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(48)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(73)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(128);
	module.exports = __webpack_require__(5).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(9)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(9)
	  , create    = __webpack_require__(43)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , isObject  = __webpack_require__(13)
	  , bind      = __webpack_require__(75);

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(8)(function(){
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
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(9)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(8)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(9)
	  , gOPD     = __webpack_require__(48).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(9)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(129)(Enumerate, 'Object', function(){
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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(57)
	  , has            = __webpack_require__(6)
	  , $export        = __webpack_require__(9)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(48)
	  , $export  = __webpack_require__(9)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(9)
	  , getProto = __webpack_require__(57)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(9)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(240)});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(47)
	  , gOPS     = __webpack_require__(40)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(9)
	  , anObject           = __webpack_require__(12)
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
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(57)
	  , has            = __webpack_require__(6)
	  , $export        = __webpack_require__(9)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(9)
	  , setProto = __webpack_require__(71);

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
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(9)
	  , $includes = __webpack_require__(33)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(183)('includes');

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(9)
	  , $at     = __webpack_require__(126)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9)
	  , $pad    = __webpack_require__(247);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(34)
	  , repeat   = __webpack_require__(90)
	  , defined  = __webpack_require__(32);

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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9)
	  , $pad    = __webpack_require__(247);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(81)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(81)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(9)
	  , defined     = __webpack_require__(32)
	  , toLength    = __webpack_require__(34)
	  , isRegExp    = __webpack_require__(133)
	  , getFlags    = __webpack_require__(193)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(129)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export    = __webpack_require__(9)
	  , ownKeys    = __webpack_require__(240)
	  , toIObject  = __webpack_require__(29)
	  , createDesc = __webpack_require__(17)
	  , gOPD       = __webpack_require__(48)
	  , dP         = __webpack_require__(11);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)dP.f(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(9)
	  , $values = __webpack_require__(254)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(27)
	  , toIObject = __webpack_require__(29)
	  , isEnum    = __webpack_require__(41).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
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
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(9)
	  , $entries = __webpack_require__(254)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(9)
	  , toObject        = __webpack_require__(56)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(257), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(49)|| !__webpack_require__(8)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(9)
	  , toObject        = __webpack_require__(56)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(257), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(9)
	  , toObject                 = __webpack_require__(56)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(57)
	  , getOwnPropertyDescriptor = __webpack_require__(48).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(257), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(9)
	  , toObject                 = __webpack_require__(56)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(57)
	  , getOwnPropertyDescriptor = __webpack_require__(48).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(257), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(9);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(262)('Map')});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(73)
	  , from    = __webpack_require__(263);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(202);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(9);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(262)('Set')});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(9);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(9)
	  , cof     = __webpack_require__(31);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(272)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(207)
	  , $export = __webpack_require__(9)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(211)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(272)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(272)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(57)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(210)
	  , from                    = __webpack_require__(263)
	  , metadata                = __webpack_require__(272)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(57)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(272)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(272)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(272)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(57)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(272)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(272)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(9)
	  , invoke     = __webpack_require__(76)
	  , partial    = __webpack_require__(282)
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
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(283)
	  , invoke    = __webpack_require__(76)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	  , $task   = __webpack_require__(204);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(190)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(128)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 286 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(287)))

/***/ },
/* 287 */
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
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(289);
	module.exports = __webpack_require__(5).RegExp.escape;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(9)
	  , $re     = __webpack_require__(290)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 290 */
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
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var i18n = __webpack_require__(292);

	module.exports = function init(opts, cb) {
	  i18n.createInstance(opts.locale, opts.TRANSLATIONS, cb);
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var i18next = __webpack_require__(293);

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
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(294).default;


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18next = __webpack_require__(295);

	var _i18next2 = _interopRequireDefault(_i18next);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _i18next2.default;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(297);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _ResourceStore = __webpack_require__(298);

	var _ResourceStore2 = _interopRequireDefault(_ResourceStore);

	var _Translator = __webpack_require__(300);

	var _Translator2 = _interopRequireDefault(_Translator);

	var _LanguageUtils = __webpack_require__(303);

	var _LanguageUtils2 = _interopRequireDefault(_LanguageUtils);

	var _PluralResolver = __webpack_require__(304);

	var _PluralResolver2 = _interopRequireDefault(_PluralResolver);

	var _Interpolator = __webpack_require__(305);

	var _Interpolator2 = _interopRequireDefault(_Interpolator);

	var _BackendConnector = __webpack_require__(306);

	var _BackendConnector2 = _interopRequireDefault(_BackendConnector);

	var _CacheConnector = __webpack_require__(307);

	var _CacheConnector2 = _interopRequireDefault(_CacheConnector);

	var _defaults2 = __webpack_require__(308);

	var _postProcessor = __webpack_require__(301);

	var _postProcessor2 = _interopRequireDefault(_postProcessor);

	var _v = __webpack_require__(302);

	var compat = _interopRequireWildcard(_v);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var I18n = function (_EventEmitter) {
	  _inherits(I18n, _EventEmitter);

	  function I18n() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var callback = arguments[1];

	    _classCallCheck(this, I18n);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.options = (0, _defaults2.transformOptions)(options);
	    _this.services = {};
	    _this.logger = _logger2.default;
	    _this.modules = {};

	    if (callback && !_this.isInitialized) _this.init(options, callback);
	    return _this;
	  }

	  I18n.prototype.init = function init(options, callback) {
	    var _this2 = this;

	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!options) options = {};

	    if (options.compatibilityAPI === 'v1') {
	      this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertAPIOptions(options)), {});
	    } else if (options.compatibilityJSON === 'v1') {
	      this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertJSONOptions(options)), {});
	    } else {
	      this.options = _extends({}, (0, _defaults2.get)(), this.options, (0, _defaults2.transformOptions)(options));
	    }
	    if (!callback) callback = function callback() {};

	    function createClassOnDemand(ClassOrObject) {
	      if (!ClassOrObject) return;
	      if (typeof ClassOrObject === 'function') return new ClassOrObject();
	      return ClassOrObject;
	    }

	    // init services
	    if (!this.options.isClone) {
	      if (this.modules.logger) {
	        _logger2.default.init(createClassOnDemand(this.modules.logger), this.options);
	      } else {
	        _logger2.default.init(null, this.options);
	      }

	      var lu = new _LanguageUtils2.default(this.options);
	      this.store = new _ResourceStore2.default(this.options.resources, this.options);

	      var s = this.services;
	      s.logger = _logger2.default;
	      s.resourceStore = this.store;
	      s.resourceStore.on('added removed', function (lng, ns) {
	        s.cacheConnector.save();
	      });
	      s.languageUtils = lu;
	      s.pluralResolver = new _PluralResolver2.default(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON });
	      s.interpolator = new _Interpolator2.default(this.options);

	      s.backendConnector = new _BackendConnector2.default(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
	      // pipe events from backendConnector
	      s.backendConnector.on('*', function (event) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        _this2.emit.apply(_this2, [event].concat(args));
	      });

	      s.backendConnector.on('loaded', function (loaded) {
	        s.cacheConnector.save();
	      });

	      s.cacheConnector = new _CacheConnector2.default(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
	      // pipe events from backendConnector
	      s.cacheConnector.on('*', function (event) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          args[_key2 - 1] = arguments[_key2];
	        }

	        _this2.emit.apply(_this2, [event].concat(args));
	      });

	      if (this.modules.languageDetector) {
	        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
	        s.languageDetector.init(s, this.options.detection, this.options);
	      }

	      this.translator = new _Translator2.default(this.services, this.options);
	      // pipe events from translator
	      this.translator.on('*', function (event) {
	        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	          args[_key3 - 1] = arguments[_key3];
	        }

	        _this2.emit.apply(_this2, [event].concat(args));
	      });
	    }

	    // append api
	    var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'];
	    storeApi.forEach(function (fcName) {
	      _this2[fcName] = function () {
	        return this.store[fcName].apply(this.store, arguments);
	      };
	    });

	    // TODO: COMPATIBILITY remove this
	    if (this.options.compatibilityAPI === 'v1') compat.appendBackwardsAPI(this);

	    var load = function load() {
	      _this2.changeLanguage(_this2.options.lng, function (err, t) {
	        _this2.emit('initialized', _this2.options);
	        _this2.logger.log('initialized', _this2.options);

	        callback(err, t);
	      });
	    };

	    if (this.options.resources) {
	      load();
	    } else {
	      setTimeout(load, 10);
	    }

	    return this;
	  };

	  I18n.prototype.loadResources = function loadResources(callback) {
	    var _this3 = this;

	    if (!callback) callback = function callback() {};

	    if (!this.options.resources) {
	      var _ret = function () {
	        if (_this3.language && _this3.language.toLowerCase() === 'cimode') return {
	            v: callback()
	          }; // avoid loading resources for cimode

	        var toLoad = [];

	        var append = function append(lng) {
	          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
	          lngs.forEach(function (l) {
	            if (toLoad.indexOf(l) < 0) toLoad.push(l);
	          });
	        };

	        append(_this3.language);

	        if (_this3.options.preload) {
	          _this3.options.preload.forEach(function (l) {
	            append(l);
	          });
	        }

	        _this3.services.cacheConnector.load(toLoad, _this3.options.ns, function () {
	          _this3.services.backendConnector.load(toLoad, _this3.options.ns, callback);
	        });
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      callback(null);
	    }
	  };

	  I18n.prototype.use = function use(module) {
	    if (module.type === 'backend') {
	      this.modules.backend = module;
	    }

	    if (module.type === 'cache') {
	      this.modules.cache = module;
	    }

	    if (module.type === 'logger' || module.log && module.warn && module.warn) {
	      this.modules.logger = module;
	    }

	    if (module.type === 'languageDetector') {
	      this.modules.languageDetector = module;
	    }

	    if (module.type === 'postProcessor') {
	      _postProcessor2.default.addPostProcessor(module);
	    }

	    return this;
	  };

	  I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
	    var _this4 = this;

	    var done = function done(err) {
	      if (lng) {
	        _this4.emit('languageChanged', lng);
	        _this4.logger.log('languageChanged', lng);
	      }

	      if (callback) callback(err, function () {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }

	        return _this4.t.apply(_this4, args);
	      });
	    };

	    if (!lng && this.services.languageDetector) lng = this.services.languageDetector.detect();

	    if (lng) {
	      this.language = lng;
	      this.languages = this.services.languageUtils.toResolveHierarchy(lng);

	      this.translator.changeLanguage(lng);

	      if (this.services.languageDetector) this.services.languageDetector.cacheUserLanguage(lng);
	    }

	    this.loadResources(function (err) {
	      done(err);
	    });
	  };

	  I18n.prototype.getFixedT = function getFixedT(lng, ns) {
	    var _this5 = this;

	    var fixedT = function fixedT(key, options) {
	      options = options || {};
	      options.lng = options.lng || fixedT.lng;
	      options.ns = options.ns || fixedT.ns;
	      return _this5.t(key, options);
	    };
	    fixedT.lng = lng;
	    fixedT.ns = ns;
	    return fixedT;
	  };

	  I18n.prototype.t = function t() {
	    return this.translator && this.translator.translate.apply(this.translator, arguments);
	  };

	  I18n.prototype.exists = function exists() {
	    return this.translator && this.translator.exists.apply(this.translator, arguments);
	  };

	  I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
	    this.options.defaultNS = ns;
	  };

	  I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
	    var _this6 = this;

	    if (!this.options.ns) return callback && callback();
	    if (typeof ns === 'string') ns = [ns];

	    ns.forEach(function (n) {
	      if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
	    });

	    this.loadResources(callback);
	  };

	  I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
	    if (typeof lngs === 'string') lngs = [lngs];
	    var preloaded = this.options.preload || [];

	    var newLngs = lngs.filter(function (lng) {
	      return preloaded.indexOf(lng) < 0;
	    });
	    // Exit early if all given languages are already preloaded
	    if (!newLngs.length) return callback();

	    this.options.preload = preloaded.concat(newLngs);
	    this.loadResources(callback);
	  };

	  I18n.prototype.dir = function dir(lng) {
	    if (!lng) lng = this.language;

	    var ltrLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

	    return ltrLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) ? 'ltr' : 'rtl';
	  };

	  I18n.prototype.createInstance = function createInstance() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var callback = arguments[1];

	    return new I18n(options, callback);
	  };

	  I18n.prototype.cloneInstance = function cloneInstance() {
	    var _this7 = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var callback = arguments[1];

	    var clone = new I18n(_extends({}, options, this.options, { isClone: true }), callback);
	    var membersToCopy = ['store', 'translator', 'services', 'language'];
	    membersToCopy.forEach(function (m) {
	      clone[m] = _this7[m];
	    });

	    return clone;
	  };

	  return I18n;
	}(_EventEmitter3.default);

	exports.default = new I18n();

/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var consoleLogger = {
	  type: 'logger',

	  log: function log(args) {
	    this._output('log', args);
	  },
	  warn: function warn(args) {
	    this._output('warn', args);
	  },
	  error: function error(args) {
	    this._output('error', args);
	  },
	  _output: function _output(type, args) {
	    if (console && console[type]) console[type].apply(console, Array.prototype.slice.call(args));
	  }
	};

	var Logger = function () {
	  function Logger(concreteLogger) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Logger);

	    this.subs = [];
	    this.init(concreteLogger, options);
	  }

	  Logger.prototype.init = function init(concreteLogger) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    this.prefix = options.prefix || 'i18next:';
	    this.logger = concreteLogger || consoleLogger;
	    this.options = options;
	    this.debug = options.debug === false ? false : true;
	  };

	  Logger.prototype.setDebug = function setDebug(bool) {
	    this.debug = bool;
	    this.subs.forEach(function (sub) {
	      sub.setDebug(bool);
	    });
	  };

	  Logger.prototype.log = function log() {
	    this.forward(arguments, 'log', '', true);
	  };

	  Logger.prototype.warn = function warn() {
	    this.forward(arguments, 'warn', '', true);
	  };

	  Logger.prototype.error = function error() {
	    this.forward(arguments, 'error', '');
	  };

	  Logger.prototype.deprecate = function deprecate() {
	    this.forward(arguments, 'warn', 'WARNING DEPRECATED: ', true);
	  };

	  Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
	    if (debugOnly && !this.debug) return;
	    if (typeof args[0] === 'string') args[0] = prefix + this.prefix + ' ' + args[0];
	    this.logger[lvl](args);
	  };

	  Logger.prototype.create = function create(moduleName) {
	    var sub = new Logger(this.logger, _extends({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));
	    this.subs.push(sub);

	    return sub;
	  };

	  // createInstance(options = {}) {
	  //   return new Logger(options, callback);
	  // }

	  return Logger;
	}();

	;

	exports.default = new Logger();

/***/ },
/* 297 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventEmitter = function () {
		function EventEmitter() {
			_classCallCheck(this, EventEmitter);

			this.observers = {};
		}

		EventEmitter.prototype.on = function on(events, listener) {
			var _this = this;

			events.split(' ').forEach(function (event) {
				_this.observers[event] = _this.observers[event] || [];
				_this.observers[event].push(listener);
			});
		};

		EventEmitter.prototype.off = function off(event, listener) {
			var _this2 = this;

			if (!this.observers[event]) {
				return;
			}

			this.observers[event].forEach(function () {
				if (!listener) {
					delete _this2.observers[event];
				} else {
					var index = _this2.observers[event].indexOf(listener);
					if (index > -1) {
						_this2.observers[event].splice(index, 1);
					}
				}
			});
		};

		EventEmitter.prototype.emit = function emit(event) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			if (this.observers[event]) {
				this.observers[event].forEach(function (observer) {
					observer.apply(undefined, args);
				});
			}

			if (this.observers['*']) {
				this.observers['*'].forEach(function (observer) {
					var _ref;

					observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
				});
			}
		};

		return EventEmitter;
	}();

	exports.default = EventEmitter;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _EventEmitter2 = __webpack_require__(297);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _utils = __webpack_require__(299);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ResourceStore = function (_EventEmitter) {
	  _inherits(ResourceStore, _EventEmitter);

	  function ResourceStore() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? { ns: ['translation'], defaultNS: 'translation' } : arguments[1];

	    _classCallCheck(this, ResourceStore);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.data = data;
	    _this.options = options;
	    return _this;
	  }

	  ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
	    if (this.options.ns.indexOf(ns) < 0) {
	      this.options.ns.push(ns);
	    }
	  };

	  ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
	    var index = this.options.ns.indexOf(ns);
	    if (index > -1) {
	      this.options.ns.splice(index, 1);
	    }
	  };

	  ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    var keySeparator = options.keySeparator || this.options.keySeparator;
	    if (keySeparator === undefined) keySeparator = '.';

	    var path = [lng, ns];
	    if (key && typeof key !== 'string') path = path.concat(key);
	    if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	    }

	    return utils.getPath(this.data, path);
	  };

	  ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
	    var options = arguments.length <= 4 || arguments[4] === undefined ? { silent: false } : arguments[4];

	    var keySeparator = this.options.keySeparator;
	    if (keySeparator === undefined) keySeparator = '.';

	    var path = [lng, ns];
	    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	      value = ns;
	      ns = path[1];
	    }

	    this.addNamespaces(ns);

	    utils.setPath(this.data, path, value);

	    if (!options.silent) this.emit('added', lng, ns, key, value);
	  };

	  ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
	    for (var m in resources) {
	      if (typeof resources[m] === 'string') this.addResource(lng, ns, m, resources[m], { silent: true });
	    }
	    this.emit('added', lng, ns, resources);
	  };

	  ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
	    var path = [lng, ns];
	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	      deep = resources;
	      resources = ns;
	      ns = path[1];
	    }

	    this.addNamespaces(ns);

	    var pack = utils.getPath(this.data, path) || {};

	    if (deep) {
	      utils.deepExtend(pack, resources, overwrite);
	    } else {
	      pack = _extends({}, pack, resources);
	    }

	    utils.setPath(this.data, path, pack);

	    this.emit('added', lng, ns, resources);
	  };

	  ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
	    if (this.hasResourceBundle(lng, ns)) {
	      delete this.data[lng][ns];
	    }
	    this.removeNamespaces(ns);

	    this.emit('removed', lng, ns);
	  };

	  ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
	    return this.getResource(lng, ns) !== undefined;
	  };

	  ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
	    if (!ns) ns = this.options.defaultNS;

	    // TODO: COMPATIBILITY remove extend in v2.1.0
	    if (this.options.compatibilityAPI === 'v1') return _extends({}, this.getResource(lng, ns));

	    return this.getResource(lng, ns);
	  };

	  ResourceStore.prototype.toJSON = function toJSON() {
	    return this.data;
	  };

	  return ResourceStore;
	}(_EventEmitter3.default);

	exports.default = ResourceStore;

/***/ },
/* 299 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeString = makeString;
	exports.copy = copy;
	exports.setPath = setPath;
	exports.pushPath = pushPath;
	exports.getPath = getPath;
	exports.deepExtend = deepExtend;
	exports.regexEscape = regexEscape;
	exports.escape = escape;
	function makeString(object) {
	  if (object == null) return '';
	  return '' + object;
	}

	function copy(a, s, t) {
	  a.forEach(function (m) {
	    if (s[m]) t[m] = s[m];
	  });
	}

	function getLastOfPath(object, path, Empty) {
	  function cleanKey(key) {
	    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
	  }

	  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
	  while (stack.length > 1) {
	    if (!object) return {};

	    var key = cleanKey(stack.shift());
	    if (!object[key] && Empty) object[key] = new Empty();
	    object = object[key];
	  }

	  if (!object) return {};
	  return {
	    obj: object,
	    k: cleanKey(stack.shift())
	  };
	}

	function setPath(object, path, newValue) {
	  var _getLastOfPath = getLastOfPath(object, path, Object);

	  var obj = _getLastOfPath.obj;
	  var k = _getLastOfPath.k;


	  obj[k] = newValue;
	}

	function pushPath(object, path, newValue, concat) {
	  var _getLastOfPath2 = getLastOfPath(object, path, Object);

	  var obj = _getLastOfPath2.obj;
	  var k = _getLastOfPath2.k;


	  obj[k] = obj[k] || [];
	  if (concat) obj[k] = obj[k].concat(newValue);
	  if (!concat) obj[k].push(newValue);
	}

	function getPath(object, path) {
	  var _getLastOfPath3 = getLastOfPath(object, path);

	  var obj = _getLastOfPath3.obj;
	  var k = _getLastOfPath3.k;


	  if (!obj) return undefined;
	  return obj[k];
	}

	function deepExtend(target, source, overwrite) {
	  for (var prop in source) {
	    if (prop in target) {
	      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
	      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
	        if (overwrite) target[prop] = source[prop];
	      } else {
	        deepExtend(target[prop], source[prop], overwrite);
	      }
	    } else {
	      target[prop] = source[prop];
	    }
	  }return target;
	}

	function regexEscape(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}

	/* eslint-disable */
	var _entityMap = {
	  "&": "&amp;",
	  "<": "&lt;",
	  ">": "&gt;",
	  '"': '&quot;',
	  "'": '&#39;',
	  "/": '&#x2F;'
	};
	/* eslint-enable */

	function escape(data) {
	  if (typeof data === 'string') {
	    return data.replace(/[&<>"'\/]/g, function (s) {
	      return _entityMap[s];
	    });
	  } else {
	    return data;
	  }
	}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(297);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _postProcessor = __webpack_require__(301);

	var _postProcessor2 = _interopRequireDefault(_postProcessor);

	var _v = __webpack_require__(302);

	var compat = _interopRequireWildcard(_v);

	var _utils = __webpack_require__(299);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Translator = function (_EventEmitter) {
	  _inherits(Translator, _EventEmitter);

	  function Translator(services) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Translator);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    utils.copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], services, _this);

	    _this.options = options;
	    _this.logger = _logger2.default.create('translator');
	    return _this;
	  }

	  Translator.prototype.changeLanguage = function changeLanguage(lng) {
	    if (lng) this.language = lng;
	  };

	  Translator.prototype.exists = function exists(key) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? { interpolation: {} } : arguments[1];

	    if (this.options.compatibilityAPI === 'v1') {
	      options = compat.convertTOptions(options);
	    }

	    return this.resolve(key, options) !== undefined;
	  };

	  Translator.prototype.extractFromKey = function extractFromKey(key, options) {
	    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
	    if (nsSeparator === undefined) nsSeparator = ':';

	    var namespaces = options.ns || this.options.defaultNS;
	    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
	      var parts = key.split(nsSeparator);
	      namespaces = parts[0];
	      key = parts[1];
	    }
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    return {
	      key: key,
	      namespaces: namespaces
	    };
	  };

	  Translator.prototype.translate = function translate(keys) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
	      options = this.options.overloadTranslationOptionHandler(arguments);
	    } else if (this.options.compatibilityAPI === 'v1') {
	      options = compat.convertTOptions(options);
	    }

	    // non valid keys handling
	    if (keys === undefined || keys === null || keys === '') return '';
	    if (typeof keys === 'number') keys = String(keys);
	    if (typeof keys === 'string') keys = [keys];

	    // return key on CIMode
	    var lng = options.lng || this.language;
	    if (lng && lng.toLowerCase() === 'cimode') return keys[keys.length - 1];

	    // separators
	    var keySeparator = options.keySeparator || this.options.keySeparator || '.';

	    // get namespace(s)

	    var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options);

	    var key = _extractFromKey.key;
	    var namespaces = _extractFromKey.namespaces;

	    var namespace = namespaces[namespaces.length - 1];

	    // resolve from store
	    var res = this.resolve(keys, options);

	    var resType = Object.prototype.toString.apply(res);
	    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
	    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

	    // object
	    if (res && typeof res !== 'string' && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
	      if (!options.returnObjects && !this.options.returnObjects) {
	        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
	        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(key, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
	      }

	      var copy = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

	      for (var m in res) {
	        copy[m] = this.translate('' + key + keySeparator + m, _extends({ joinArrays: false, ns: namespaces }, options));
	      }
	      res = copy;
	    }
	    // array special treatment
	    else if (joinArrays && resType === '[object Array]') {
	        res = res.join(joinArrays);
	        if (res) res = this.extendTranslation(res, key, options);
	      }
	      // string, empty or null
	      else {
	          var usedDefault = false,
	              usedKey = false;

	          // fallback value
	          if (!this.isValidLookup(res) && options.defaultValue) {
	            usedDefault = true;
	            res = options.defaultValue;
	          }
	          if (!this.isValidLookup(res)) {
	            usedKey = true;
	            res = key;
	          }

	          // save missing
	          if (usedKey || usedDefault) {
	            this.logger.log('missingKey', lng, namespace, key, res);

	            if (this.options.saveMissing) {
	              var lngs = [];
	              if (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng && this.options.fallbackLng[0]) {
	                for (var i = 0; i < this.options.fallbackLng.length; i++) {
	                  lngs.push(this.options.fallbackLng[i]);
	                }
	              } else if (this.options.saveMissingTo === 'all') {
	                lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
	              } else {
	                //(this.options.saveMissingTo === 'current' || (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng[0] === false) ) {
	                lngs.push(options.lng || this.language);
	              }

	              if (this.options.missingKeyHandler) {
	                this.options.missingKeyHandler(lngs, namespace, key, res);
	              } else if (this.backendConnector && this.backendConnector.saveMissing) {
	                this.backendConnector.saveMissing(lngs, namespace, key, res);
	              }

	              this.emit('missingKey', lngs, namespace, key, res);
	            }
	          }

	          // extend
	          res = this.extendTranslation(res, key, options);

	          // append namespace if still key
	          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ':' + key;

	          // parseMissingKeyHandler
	          if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
	        }

	    // return
	    return res;
	  };

	  Translator.prototype.extendTranslation = function extendTranslation(res, key, options) {
	    var _this2 = this;

	    if (options.interpolation) this.interpolator.init(options);

	    // interpolate
	    var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
	    if (this.options.interpolation.defaultVariables) data = _extends({}, this.options.interpolation.defaultVariables, data);
	    res = this.interpolator.interpolate(res, data);

	    // nesting
	    res = this.interpolator.nest(res, function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _this2.translate.apply(_this2, args);
	    }, options);

	    if (options.interpolation) this.interpolator.reset();

	    // post process
	    var postProcess = options.postProcess || this.options.postProcess;
	    var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

	    if (res !== undefined && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
	      res = _postProcessor2.default.handle(postProcessorNames, res, key, options, this);
	    }

	    return res;
	  };

	  Translator.prototype.resolve = function resolve(keys) {
	    var _this3 = this;

	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var found = void 0;

	    if (typeof keys === 'string') keys = [keys];

	    // forEach possible key
	    keys.forEach(function (k) {
	      if (_this3.isValidLookup(found)) return;

	      var _extractFromKey2 = _this3.extractFromKey(k, options);

	      var key = _extractFromKey2.key;
	      var namespaces = _extractFromKey2.namespaces;

	      if (_this3.options.fallbackNS) namespaces = namespaces.concat(_this3.options.fallbackNS);

	      var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
	      var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

	      var codes = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);

	      namespaces.forEach(function (ns) {
	        if (_this3.isValidLookup(found)) return;

	        codes.forEach(function (code) {
	          if (_this3.isValidLookup(found)) return;

	          var finalKey = key;
	          var finalKeys = [finalKey];

	          var pluralSuffix = void 0;
	          if (needsPluralHandling) pluralSuffix = _this3.pluralResolver.getSuffix(code, options.count);

	          // fallback for plural if context not found
	          if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);

	          // get key for context if needed
	          if (needsContextHandling) finalKeys.push(finalKey += '' + _this3.options.contextSeparator + options.context);

	          // get key for plural if needed
	          if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);

	          // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
	          var possibleKey = void 0;
	          while (possibleKey = finalKeys.pop()) {
	            if (_this3.isValidLookup(found)) continue;
	            found = _this3.getResource(code, ns, possibleKey, options);
	          }
	        });
	      });
	    });

	    return found;
	  };

	  Translator.prototype.isValidLookup = function isValidLookup(res) {
	    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
	  };

	  Translator.prototype.getResource = function getResource(code, ns, key) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    return this.resourceStore.getResource(code, ns, key, options);
	  };

	  return Translator;
	}(_EventEmitter3.default);

	exports.default = Translator;

/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  processors: {},

	  addPostProcessor: function addPostProcessor(module) {
	    this.processors[module.name] = module;
	  },
	  handle: function handle(processors, value, key, options, translator) {
	    var _this = this;

	    processors.forEach(function (processor) {
	      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
	    });

	    return value;
	  }
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertAPIOptions = convertAPIOptions;
	exports.convertJSONOptions = convertJSONOptions;
	exports.convertTOptions = convertTOptions;
	exports.appendBackwardsAPI = appendBackwardsAPI;

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function convertInterpolation(options) {

	  options.interpolation = {
	    unescapeSuffix: 'HTML'
	  };

	  options.interpolation.prefix = options.interpolationPrefix || '__';
	  options.interpolation.suffix = options.interpolationSuffix || '__';
	  options.interpolation.escapeValue = options.escapeInterpolation || false;

	  options.interpolation.nestingPrefix = options.reusePrefix || '$t(';
	  options.interpolation.nestingSuffix = options.reuseSuffix || ')';

	  return options;
	}

	function convertAPIOptions(options) {
	  if (options.resStore) options.resources = options.resStore;

	  if (options.ns && options.ns.defaultNs) {
	    options.defaultNS = options.ns.defaultNs;
	    options.ns = options.ns.namespaces;
	  } else {
	    options.defaultNS = options.ns || 'translation';
	  }

	  if (options.fallbackToDefaultNS && options.defaultNS) options.fallbackNS = options.defaultNS;

	  options.saveMissing = options.sendMissing;
	  options.saveMissingTo = options.sendMissingTo || 'current';
	  options.returnNull = options.fallbackOnNull ? false : true;
	  options.returnEmptyString = options.fallbackOnEmpty ? false : true;
	  options.returnObjects = options.returnObjectTrees;
	  options.joinArrays = '\n';

	  options.returnedObjectHandler = options.objectTreeKeyHandler;
	  options.parseMissingKeyHandler = options.parseMissingKey;
	  options.appendNamespaceToMissingKey = true;

	  options.nsSeparator = options.nsseparator;
	  options.keySeparator = options.keyseparator;

	  if (options.shortcutFunction === 'sprintf') {
	    options.overloadTranslationOptionHandler = function (args) {
	      var values = [];

	      for (var i = 1; i < args.length; i++) {
	        values.push(args[i]);
	      }

	      return {
	        postProcess: 'sprintf',
	        sprintf: values
	      };
	    };
	  }

	  options.whitelist = options.lngWhitelist;
	  options.preload = options.preload;
	  if (options.load === 'current') options.load = 'currentOnly';
	  if (options.load === 'unspecific') options.load = 'languageOnly';

	  // backend
	  options.backend = options.backend || {};
	  options.backend.loadPath = options.resGetPath || 'locales/__lng__/__ns__.json';
	  options.backend.addPath = options.resPostPath || 'locales/add/__lng__/__ns__';
	  options.backend.allowMultiLoading = options.dynamicLoad;

	  // cache
	  options.cache = options.cache || {};
	  options.cache.prefix = 'res_';
	  options.cache.expirationTime = 7 * 24 * 60 * 60 * 1000;
	  options.cache.enabled = options.useLocalStorage ? true : false;

	  options = convertInterpolation(options);
	  if (options.defaultVariables) options.interpolation.defaultVariables = options.defaultVariables;

	  // TODO: deprecation
	  // if (options.getAsync === false) throw deprecation error

	  return options;
	}

	function convertJSONOptions(options) {
	  options = convertInterpolation(options);
	  options.joinArrays = '\n';

	  return options;
	}

	function convertTOptions(options) {
	  if (options.interpolationPrefix || options.interpolationSuffix || options.escapeInterpolation) {
	    options = convertInterpolation(options);
	  }

	  options.nsSeparator = options.nsseparator;
	  options.keySeparator = options.keyseparator;

	  options.returnObjects = options.returnObjectTrees;

	  return options;
	}

	function appendBackwardsAPI(i18n) {
	  i18n.lng = function () {
	    _logger2.default.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.');
	    return i18n.services.languageUtils.toResolveHierarchy(i18n.language)[0];
	  };

	  i18n.preload = function (lngs, cb) {
	    _logger2.default.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()');
	    i18n.loadLanguages(lngs, cb);
	  };

	  i18n.setLng = function (lng, options, callback) {
	    _logger2.default.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.');
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!options) options = {};

	    if (options.fixLng === true) {
	      if (callback) return callback(null, i18n.getFixedT(lng));
	    }

	    i18n.changeLanguage(lng, callback);
	  };

	  i18n.addPostProcessor = function (name, fc) {
	    _logger2.default.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })');
	    i18n.use({
	      type: 'postProcessor',
	      name: name,
	      process: fc
	    });
	  };
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var LanguageUtil = function () {
	  function LanguageUtil(options) {
	    _classCallCheck(this, LanguageUtil);

	    this.options = options;

	    this.whitelist = this.options.whitelist || false;
	    this.logger = _logger2.default.create('languageUtils');
	  }

	  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
	    if (code.indexOf('-') < 0) return code;

	    var specialCases = ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'];
	    var p = code.split('-');
	    return this.formatLanguageCode(specialCases.indexOf(code) > -1 ? p[1].toLowerCase() : p[0]);
	  };

	  LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
	    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
	    if (typeof code === 'string' && code.indexOf('-') > -1) {
	      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
	      var p = code.split('-');

	      if (this.options.lowerCaseLng) {
	        p = p.map(function (part) {
	          return part.toLowerCase();
	        });
	      } else if (p.length === 2) {
	        p[0] = p[0].toLowerCase();
	        p[1] = p[1].toUpperCase();

	        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	      } else if (p.length === 3) {
	        p[0] = p[0].toLowerCase();

	        // if lenght 2 guess it's a country
	        if (p[1].length === 2) p[1] = p[1].toUpperCase();
	        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();

	        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
	      }

	      return p.join('-');
	    } else {
	      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	    }
	  };

	  LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code) {
	    if (this.options.load === 'languageOnly') code = this.getLanguagePartFromCode(code);
	    return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1 ? true : false;
	  };

	  LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
	    var _this = this;

	    fallbackCode = fallbackCode || this.options.fallbackLng || [];
	    if (typeof fallbackCode === 'string') fallbackCode = [fallbackCode];

	    var codes = [];
	    var addCode = function addCode(code) {
	      if (_this.isWhitelisted(code)) {
	        codes.push(code);
	      } else {
	        _this.logger.warn('rejecting non-whitelisted language code: ' + code);
	      }
	    };

	    if (typeof code === 'string' && code.indexOf('-') > -1) {
	      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
	      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
	    } else if (typeof code === 'string') {
	      addCode(this.formatLanguageCode(code));
	    }

	    fallbackCode.forEach(function (fc) {
	      if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
	    });

	    return codes;
	  };

	  return LanguageUtil;
	}();

	;

	exports.default = LanguageUtil;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
	/* eslint-disable */
	var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

	var _rulesPluralsTypes = {
	  1: function _(n) {
	    return Number(n > 1);
	  },
	  2: function _(n) {
	    return Number(n != 1);
	  },
	  3: function _(n) {
	    return 0;
	  },
	  4: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  5: function _(n) {
	    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
	  },
	  6: function _(n) {
	    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
	  },
	  7: function _(n) {
	    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  8: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
	  },
	  9: function _(n) {
	    return Number(n >= 2);
	  },
	  10: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
	  },
	  11: function _(n) {
	    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
	  },
	  12: function _(n) {
	    return Number(n % 10 != 1 || n % 100 == 11);
	  },
	  13: function _(n) {
	    return Number(n !== 0);
	  },
	  14: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
	  },
	  15: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  16: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
	  },
	  17: function _(n) {
	    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
	  },
	  18: function _(n) {
	    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
	  },
	  19: function _(n) {
	    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
	  },
	  20: function _(n) {
	    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
	  },
	  21: function _(n) {
	    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
	  }
	};
	/* eslint-enable */

	function createRules() {
	  var l,
	      rules = {};
	  sets.forEach(function (set) {
	    set.lngs.forEach(function (l) {
	      return rules[l] = {
	        numbers: set.nr,
	        plurals: _rulesPluralsTypes[set.fc]
	      };
	    });
	  });
	  return rules;
	}

	var PluralResolver = function () {
	  function PluralResolver(languageUtils) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, PluralResolver);

	    this.languageUtils = languageUtils;
	    this.options = options;

	    this.logger = _logger2.default.create('pluralResolver');

	    this.rules = createRules();
	  }

	  PluralResolver.prototype.addRule = function addRule(lng, obj) {
	    this.rules[lng] = obj;
	  };

	  PluralResolver.prototype.getRule = function getRule(code) {
	    return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
	  };

	  PluralResolver.prototype.needsPlural = function needsPlural(code) {
	    var rule = this.getRule(code);

	    return rule && rule.numbers.length <= 1 ? false : true;
	  };

	  PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
	    var rule = this.getRule(code);

	    if (rule) {
	      if (rule.numbers.length === 1) return ''; // only singular

	      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
	      var suffix = rule.numbers[idx];

	      // special treatment for lngs only having singular and plural
	      if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
	        if (suffix === 2) {
	          suffix = 'plural';
	        } else if (suffix === 1) {
	          suffix = '';
	        }
	      }

	      // COMPATIBILITY JSON
	      if (this.options.compatibilityJSON === 'v1') {
	        if (suffix === 1) return '';
	        if (typeof suffix === 'number') return '_plural_' + suffix.toString();
	      }

	      return this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
	    } else {
	      this.logger.warn('no plural rule found for: ' + code);
	      return '';
	    }
	  };

	  return PluralResolver;
	}();

	;

	exports.default = PluralResolver;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(299);

	var utils = _interopRequireWildcard(_utils);

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Interpolator = function () {
	  function Interpolator() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Interpolator);

	    this.logger = _logger2.default.create('interpolator');

	    this.init(options, true);
	  }

	  Interpolator.prototype.init = function init() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var reset = arguments[1];

	    if (reset) this.options = options;
	    if (!options.interpolation) options.interpolation = { escapeValue: true };

	    var iOpts = options.interpolation;

	    this.escapeValue = iOpts.escapeValue;

	    this.prefix = iOpts.prefix ? utils.regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
	    this.suffix = iOpts.suffix ? utils.regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';

	    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
	    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

	    this.nestingPrefix = iOpts.nestingPrefix ? utils.regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || utils.regexEscape('$t(');
	    this.nestingSuffix = iOpts.nestingSuffix ? utils.regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || utils.regexEscape(')');

	    // the regexp
	    var regexpStr = this.prefix + '(.+?)' + this.suffix;
	    this.regexp = new RegExp(regexpStr, 'g');

	    var regexpUnescapeStr = this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
	    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

	    var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
	    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
	  };

	  Interpolator.prototype.reset = function reset() {
	    if (this.options) this.init(this.options);
	  };

	  Interpolator.prototype.interpolate = function interpolate(str, data) {
	    var match = void 0,
	        value = void 0;

	    function regexSafe(val) {
	      return val.replace(/\$/g, '$$$$');
	    }

	    // unescape if has unescapePrefix/Suffix
	    while (match = this.regexpUnescape.exec(str)) {
	      var _value = utils.getPath(data, match[1].trim());
	      str = str.replace(match[0], _value);
	    }

	    // regular escape on demand
	    while (match = this.regexp.exec(str)) {
	      value = utils.getPath(data, match[1].trim());
	      if (typeof value !== 'string') value = utils.makeString(value);
	      if (!value) {
	        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
	        value = '';
	      }
	      value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
	      str = str.replace(match[0], value);
	      this.regexp.lastIndex = 0;
	    }
	    return str;
	  };

	  Interpolator.prototype.nest = function nest(str, fc) {
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    var match = void 0,
	        value = void 0;

	    var clonedOptions = JSON.parse(JSON.stringify(options));
	    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

	    function regexSafe(val) {
	      return val.replace(/\$/g, '$$$$');
	    }

	    // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"
	    function handleHasOptions(key) {
	      if (key.indexOf(',') < 0) return key;

	      var p = key.split(',');
	      key = p.shift();
	      var optionsString = p.join(',');
	      optionsString = this.interpolate(optionsString, clonedOptions);

	      try {
	        clonedOptions = JSON.parse(optionsString);
	      } catch (e) {
	        this.logger.error('failed parsing options string in nesting for key ' + key, e);
	      }

	      return key;
	    }

	    // regular escape on demand
	    while (match = this.nestingRegexp.exec(str)) {
	      value = fc(handleHasOptions.call(this, match[1].trim()), clonedOptions);
	      if (typeof value !== 'string') value = utils.makeString(value);
	      if (!value) {
	        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
	        value = '';
	      }
	      value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
	      str = str.replace(match[0], value);
	      this.regexp.lastIndex = 0;
	    }
	    return str;
	  };

	  return Interpolator;
	}();

	exports.default = Interpolator;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _utils = __webpack_require__(299);

	var utils = _interopRequireWildcard(_utils);

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(297);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function remove(arr, what) {
	  var found = arr.indexOf(what);

	  while (found !== -1) {
	    arr.splice(found, 1);
	    found = arr.indexOf(what);
	  }
	}

	var Connector = function (_EventEmitter) {
	  _inherits(Connector, _EventEmitter);

	  function Connector(backend, store, services) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    _classCallCheck(this, Connector);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.backend = backend;
	    _this.store = store;
	    _this.services = services;
	    _this.options = options;
	    _this.logger = _logger2.default.create('backendConnector');

	    _this.state = {};
	    _this.queue = [];

	    _this.backend && _this.backend.init && _this.backend.init(services, options.backend, options);
	    return _this;
	  }

	  Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
	    var _this2 = this;

	    // find what needs to be loaded
	    var toLoad = [],
	        pending = [],
	        toLoadLanguages = [],
	        toLoadNamespaces = [];

	    languages.forEach(function (lng) {
	      var hasAllNamespaces = true;

	      namespaces.forEach(function (ns) {
	        var name = lng + '|' + ns;

	        if (_this2.store.hasResourceBundle(lng, ns)) {
	          _this2.state[name] = 2; // loaded
	        } else if (_this2.state[name] < 0) {
	            // nothing to do for err
	          } else if (_this2.state[name] === 1) {
	              if (pending.indexOf(name) < 0) pending.push(name);
	            } else {
	              _this2.state[name] = 1; // pending

	              hasAllNamespaces = false;

	              if (pending.indexOf(name) < 0) pending.push(name);
	              if (toLoad.indexOf(name) < 0) toLoad.push(name);
	              if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
	            }
	      });

	      if (!hasAllNamespaces) toLoadLanguages.push(lng);
	    });

	    if (toLoad.length || pending.length) {
	      this.queue.push({
	        pending: pending,
	        loaded: {},
	        errors: [],
	        callback: callback
	      });
	    }

	    return {
	      toLoad: toLoad,
	      pending: pending,
	      toLoadLanguages: toLoadLanguages,
	      toLoadNamespaces: toLoadNamespaces
	    };
	  };

	  Connector.prototype.loaded = function loaded(name, err, data) {
	    var _this3 = this;

	    var _name$split = name.split('|');

	    var _name$split2 = _slicedToArray(_name$split, 2);

	    var lng = _name$split2[0];
	    var ns = _name$split2[1];


	    if (err) this.emit('failedLoading', lng, ns, err);

	    if (data) {
	      this.store.addResourceBundle(lng, ns, data);
	    }

	    // set loaded
	    this.state[name] = err ? -1 : 2;
	    // callback if ready
	    this.queue.forEach(function (q) {
	      utils.pushPath(q.loaded, [lng], ns);
	      remove(q.pending, name);

	      if (err) q.errors.push(err);

	      if (q.pending.length === 0 && !q.done) {
	        q.errors.length ? q.callback(q.errors) : q.callback();
	        _this3.emit('loaded', q.loaded);
	        q.done = true;
	      }
	    });

	    // remove done load requests
	    this.queue = this.queue.filter(function (q) {
	      return !q.done;
	    });
	  };

	  Connector.prototype.read = function read(lng, ns, fcName, tried, wait, callback) {
	    var _this4 = this;

	    if (!tried) tried = 0;
	    if (!wait) wait = 250;

	    if (!lng.length) return callback(null, {}); // noting to load

	    this.backend[fcName](lng, ns, function (err, data) {
	      if (err && data /* = retryFlag */ && tried < 5) {
	        setTimeout(function () {
	          _this4.read.call(_this4, lng, ns, fcName, ++tried, wait * 2, callback);
	        }, wait);
	        return;
	      }
	      callback(err, data);
	    });
	  };

	  Connector.prototype.load = function load(languages, namespaces, callback) {
	    var _this5 = this;

	    if (!this.backend) {
	      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
	      return callback && callback();
	    }
	    var options = _extends({}, this.backend.options, this.options.backend);

	    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    var toLoad = this.queueLoad(languages, namespaces, callback);
	    if (!toLoad.toLoad.length) {
	      if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now
	      return; // pendings will trigger callback
	    }

	    // load with multi-load
	    if (options.allowMultiLoading && this.backend.readMulti) {
	      this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, 'readMulti', null, null, function (err, data) {
	        if (err) _this5.logger.warn('loading namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading failed', err);
	        if (!err && data) _this5.logger.log('loaded namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading', data);

	        toLoad.toLoad.forEach(function (name) {
	          var _name$split3 = name.split('|');

	          var _name$split4 = _slicedToArray(_name$split3, 2);

	          var l = _name$split4[0];
	          var n = _name$split4[1];


	          var bundle = utils.getPath(data, [l, n]);
	          if (bundle) {
	            _this5.loaded(name, err, bundle);
	          } else {
	            var _err = 'loading namespace ' + n + ' for language ' + l + ' via multiloading failed';
	            _this5.loaded(name, _err);
	            _this5.logger.error(_err);
	          }
	        });
	      });
	    }

	    // load one by one
	    else {
	        (function () {
	          var read = function read(name) {
	            var _this6 = this;

	            var _name$split5 = name.split('|');

	            var _name$split6 = _slicedToArray(_name$split5, 2);

	            var lng = _name$split6[0];
	            var ns = _name$split6[1];


	            this.read(lng, ns, 'read', null, null, function (err, data) {
	              if (err) _this6.logger.warn('loading namespace ' + ns + ' for language ' + lng + ' failed', err);
	              if (!err && data) _this6.logger.log('loaded namespace ' + ns + ' for language ' + lng, data);

	              _this6.loaded(name, err, data);
	            });
	          };

	          ;

	          toLoad.toLoad.forEach(function (name) {
	            read.call(_this5, name);
	          });
	        })();
	      }
	  };

	  Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue) {
	    if (this.backend && this.backend.create) this.backend.create(languages, namespace, key, fallbackValue);

	    // write to store to avoid resending
	    this.store.addResource(languages[0], namespace, key, fallbackValue);
	  };

	  return Connector;
	}(_EventEmitter3.default);

	exports.default = Connector;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _utils = __webpack_require__(299);

	var utils = _interopRequireWildcard(_utils);

	var _logger = __webpack_require__(296);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(297);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Connector = function (_EventEmitter) {
	  _inherits(Connector, _EventEmitter);

	  function Connector(cache, store, services) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    _classCallCheck(this, Connector);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.cache = cache;
	    _this.store = store;
	    _this.services = services;
	    _this.options = options;
	    _this.logger = _logger2.default.create('cacheConnector');

	    _this.cache && _this.cache.init && _this.cache.init(services, options.cache, options);
	    return _this;
	  }

	  Connector.prototype.load = function load(languages, namespaces, callback) {
	    var _this2 = this;

	    if (!this.cache) return callback && callback();
	    var options = _extends({}, this.cache.options, this.options.cache);

	    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    if (options.enabled) {
	      this.cache.load(languages, function (err, data) {
	        if (err) _this2.logger.error('loading languages ' + languages.join(', ') + ' from cache failed', err);
	        if (data) {
	          for (var l in data) {
	            for (var n in data[l]) {
	              if (n === 'i18nStamp') continue;
	              var bundle = data[l][n];
	              if (bundle) _this2.store.addResourceBundle(l, n, bundle);
	            }
	          }
	        }
	        if (callback) callback();
	      });
	    } else {
	      if (callback) callback();
	    }
	  };

	  Connector.prototype.save = function save() {
	    if (this.cache && this.options.cache && this.options.cache.enabled) this.cache.save(this.store.data);
	  };

	  return Connector;
	}(_EventEmitter3.default);

	exports.default = Connector;

/***/ },
/* 308 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.get = get;
	exports.transformOptions = transformOptions;
	function get() {
	  return {
	    debug: false,

	    ns: ['translation'],
	    defaultNS: ['translation'],
	    fallbackLng: ['dev'],
	    fallbackNS: false, // string or array of namespaces

	    whitelist: false, // array with whitelisted languages
	    load: 'all', // | currentOnly | languageOnly
	    preload: false, // array with preload languages

	    keySeparator: '.',
	    nsSeparator: ':',
	    pluralSeparator: '_',
	    contextSeparator: '_',

	    saveMissing: false, // enable to send missing values
	    saveMissingTo: 'fallback', // 'current' || 'all'
	    missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

	    postProcess: false, // string or array of postProcessor names
	    returnNull: true, // allows null value as valid translation
	    returnEmptyString: true, // allows empty string value as valid translation
	    returnObjects: false,
	    joinArrays: false, // or string to join array
	    returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
	    parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
	    appendNamespaceToMissingKey: false,
	    overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
	      return { defaultValue: args[1] };
	    },

	    interpolation: {
	      escapeValue: true,
	      prefix: '{{',
	      suffix: '}}',
	      // prefixEscaped: '{{',
	      // suffixEscaped: '}}',
	      // unescapeSuffix: '',
	      unescapePrefix: '-',

	      nestingPrefix: '$t(',
	      nestingSuffix: ')',
	      // nestingPrefixEscaped: '$t(',
	      // nestingSuffixEscaped: ')',
	      defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
	    }
	  };
	}

	function transformOptions(options) {
	  // create namespace object if namespace is passed in as string
	  if (typeof options.ns === 'string') options.ns = [options.ns];
	  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
	  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

	  // extend whitelist with cimode
	  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) options.whitelist.push('cimode');

	  return options;
	}

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = __webpack_require__(310);
	var doT = __webpack_require__(311); //eslint-disable-line no-unused-vars
	var i18n = __webpack_require__(292);

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

	/**
	 * Class for working with dot and rendering DOM
	 */

	var DotService = function () {
	  /**
	   * Creates a new Dot instance
	   * @param {object} doT The doT object
	   */

	  function DotService(doT) {
	    _classCallCheck(this, DotService);

	    this.doT = doT;
	  }

	  /**
	   * Compile the passed dot template with the passed data
	   * @param {string} template - The dot template we want to compile
	   * @param {object} data - The model storing the data to insert into the dot template
	   * @returns {string} The compiled html to display
	   */


	  DotService.prototype.compile = function compile(template, data) {
	    return this.doT.template(template, dotConfigOverrides, globalTemplateMap)(data);
	  };

	  /**
	   * Gets a doT template, interpolates the model into it, converts it into a jQuery DOM,
	   * then appends it to the DOM based on the given css selector
	   * @param {string} template - The template string
	   * @param {string} cssSelector - The selector of the element to render the template into
	   * @param {object} viewModel - The model with the data to fill in the template
	   */


	  DotService.prototype.renderIntoDOM = function renderIntoDOM(template, cssSelector, viewModel) {
	    if (!template) {
	      throw new Error('Cannot render null template!');
	    }

	    if (!cssSelector) {
	      throw new Error('You must specify a jquery-friendly css selector to render template into.');
	    }

	    var renderIntoDOMWith = this.doT.template(template, dotConfigOverrides, globalTemplateMap);
	    $(cssSelector).html(renderIntoDOMWith(viewModel));
	  };

	  return DotService;
	}();

	module.exports = new DotService(window.doT);

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 311 */
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

	var fs = __webpack_require__(312),
		doT = module.exports = __webpack_require__(313);

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
/* 312 */
/***/ function(module, exports) {

	console.log("I'm `fs` modules");


/***/ },
/* 313 */
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
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = __webpack_require__(310);
	var assert = __webpack_require__(315);

	/**
	 * - Generate a DOM fragment in memory, run a component controller
	 *   against this DOM context and return the final HTML
	 *
	 * - Consumer must define `::render` recieving data and returning HTML
	 *
	 * - Consumer can define a controller function, which recieves the same data as render
	 *   and will be run with the guarentee that the HTML returned from `::render` is available
	 *   to the controller in the DOM
	 */

	var BaseFragmentFactory = function () {
	  /**
	   * Creates a new BaseFragmentFactory
	   * @param {object} opts - The options for the component
	   * @param {function} opts.render - The render function
	   */

	  function BaseFragmentFactory() {
	    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, BaseFragmentFactory);

	    assert(typeof opts.render === 'function');
	    this.render = opts.render;
	    this.controller = opts.controller || $.noop;
	  }

	  /**
	   * Generate the html for the fragment
	   * @param {object} data - the model with the data to render
	   * @returns {string} The html for the fragment
	   */


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
/* 315 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (condition, message) {
	  if (!condition) {
	    throw new Error(message || 'Assertion failure');
	  }
	};

/***/ },
/* 316 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Implements a simple 2 way stream of events
	 *
	 * Namespacing allows you to use this Hub for multiple components,
	 * each component getting a single unique 2-way stream
	 */

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PubSubHub = function () {
	  /**
	   * Creates a new PubSubHub
	   */

	  function PubSubHub() {
	    _classCallCheck(this, PubSubHub);

	    this.listeners = {
	      // namespace => [listener1, listener2, ... , listenN]
	    };
	  }

	  /**
	   * Get the listener for a namespace
	   * @param {string} namespace - The namespace at which to lookup the listener
	   * @returns {function} The listener for the namespace
	   */


	  PubSubHub.prototype.get = function get(namespace) {
	    if (!this.listeners[namespace]) {
	      this.listeners[namespace] = [];
	    }
	    return this.listeners[namespace];
	  };

	  /**
	   * Publish is called when a value is updated, and it will call all listeners listening to that value
	   * @param {string} namespace - The namespace at which to lookup the listener
	   * @param {*} payload - The new value
	   */


	  PubSubHub.prototype.publish = function publish(namespace, payload) {
	    this.get(namespace).forEach(function (listener) {
	      listener(payload);
	    });
	  };

	  /**
	   * Add a listener to the given namespace
	   * @param {string} namespace - The namespace at which to store the listener
	   * @param {function} payload - The new listener to store
	   */


	  PubSubHub.prototype.push = function push(namespace, payload) {
	    if (!this.listeners[namespace]) {
	      this.listeners[namespace] = [];
	    }
	    this.listeners[namespace].push(payload);
	  };

	  /**
	   * Add a listener to the given namespace
	   * @param {string} namespace - The namespace at which to lookup the listener
	   * @param {function} listener - The new listener to store
	   */


	  PubSubHub.prototype.subscribe = function subscribe(namespace, listener) {
	    this.push(namespace, listener);
	  };

	  return PubSubHub;
	}();

	module.exports = new PubSubHub();

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Baobab = __webpack_require__(318);

	/**
	 * Class representing centralized baobab state
	 */

	var State = function () {
	  /**
	   * Creates a new State instance
	   * @param {object} initialState - The initial state
	   * @param {object} opts - The opts for the state
	   */

	  function State() {
	    var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, State);

	    Object.assign(this, {
	      cursors: {},
	      modifiers: {},
	      state: new Baobab(initialState, opts)
	    });
	  }

	  /**
	   * Commit the changes to the state synchronously
	   * @returns {*} The commit
	   */


	  State.prototype.commit = function commit() {
	    return this.state.commit();
	  };

	  /**
	   * Create a new cursor
	   * @param {string} selector - The key to store a cursor at
	   * @returns {*} The new cursor
	   */


	  State.prototype.curse = function curse(selector) {
	    this.cursors[selector] = this.state.select(selector);
	    return this.cursors[selector];
	  };

	  /**
	   * Define a modifier for the given name
	   * @param {string} name - the name of the modifier
	   * @param {function} customFn - The function to store in modifiers
	   */


	  State.prototype.define = function define(name, customFn) {
	    this.modifiers[name] = customFn.bind(this);
	  };

	  return State;
	}();

	module.exports = State;

/***/ },
/* 318 */
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

	var _emmett = __webpack_require__(319);

	var _emmett2 = _interopRequireDefault(_emmett);

	var _cursor = __webpack_require__(320);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _monkey = __webpack_require__(321);

	var _watcher = __webpack_require__(325);

	var _watcher2 = _interopRequireDefault(_watcher);

	var _type = __webpack_require__(322);

	var _type2 = _interopRequireDefault(_type);

	var _update2 = __webpack_require__(323);

	var _update3 = _interopRequireDefault(_update2);

	var _helpers = __webpack_require__(324);

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
/* 319 */
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
/* 320 */
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

	var _emmett = __webpack_require__(319);

	var _emmett2 = _interopRequireDefault(_emmett);

	var _monkey = __webpack_require__(321);

	var _type = __webpack_require__(322);

	var _type2 = _interopRequireDefault(_type);

	var _helpers = __webpack_require__(324);

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
/* 321 */
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

	var _type = __webpack_require__(322);

	var _type2 = _interopRequireDefault(_type);

	var _update2 = __webpack_require__(323);

	var _update3 = _interopRequireDefault(_update2);

	var _helpers = __webpack_require__(324);

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
/* 322 */
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

	var _monkey = __webpack_require__(321);

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
/* 323 */
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

	var _type = __webpack_require__(322);

	var _type2 = _interopRequireDefault(_type);

	var _helpers = __webpack_require__(324);

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
/* 324 */
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

	var _monkey = __webpack_require__(321);

	var _type = __webpack_require__(322);

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
/* 325 */
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

	var _emmett = __webpack_require__(319);

	var _emmett2 = _interopRequireDefault(_emmett);

	var _cursor = __webpack_require__(320);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _type = __webpack_require__(322);

	var _type2 = _interopRequireDefault(_type);

	var _helpers = __webpack_require__(324);

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
/* 326 */
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

	var punycode = __webpack_require__(327);

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
	    querystring = __webpack_require__(329);

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
/* 327 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(328)(module), (function() { return this; }())))

/***/ },
/* 328 */
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
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(330);
	exports.encode = exports.stringify = __webpack_require__(331);


/***/ },
/* 330 */
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
/* 331 */
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
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(333);
	var $ = __webpack_require__(310);
	var buttonTmpl = __webpack_require__(337);
	var BaseComponent = __webpack_require__(338);
	var Utils = __webpack_require__(341);

	/**
	 * Class for creating an html button
	 */

	var Button = function (_BaseComponent) {
	  _inherits(Button, _BaseComponent);

	  /**
	   * Create a button
	   * @param {string} el - The selector for the element to put the button in
	   * @param {object} opts - The options for the component
	   * @param {string} [opts.label] - The text to display in the button
	   * @param {boolean} [opts.submit] - A boolean indicating if this is of type submit or not
	   * @param {boolean} [opts.preventPropogation] - A boolean to enable preventPropogation
	   */

	  function Button(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Button);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));

	    _this.label = opts.label || 'ClickMe!';
	    _this.submit = opts.submit || false;
	    _this.preventPropagation = opts.preventPropagation || false;
	    return _this;
	  }

	  /**
	   * Render the html for the button and apply event handlers
	   * @returns {string} The html for the button
	   */


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
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(334);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".ui-button{cursor:pointer}", ""]);

	// exports


/***/ },
/* 335 */
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
/* 336 */
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
		if(false) {
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
/* 337 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<button type='" + (scope.submit ? "submit" : "button") + "' class='ui-button'>" + scope.label + "</button>";
	};

/***/ },
/* 338 */
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

	var $ = __webpack_require__(310);
	var uuid = __webpack_require__(339);
	var PSHub = __webpack_require__(316);
	var assert = __webpack_require__(315);

	// for covenience
	var keyEvents = {
	  ENTER: 13,
	  ESC: 27,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40
	};

	/**
	 * Class for base component functionality that all components will inherit from
	 */

	var BaseComponent = function () {
	  /**
	   * Creates a new BaseComponent
	   * @param {string} el - The selector for the element to put the component in
	   * @param {object} opts - The options for the component
	   * @param {jQuery} opts.parentElement - A jQuery wrapped parent element, to find this child in
	   * @param {boolean} opts.preserveChildElements - A boolean for whether or not to clear out the innerHTML
	   * of the element when the component is created
	   */

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
	  }

	  /**
	   * Gets the component's current value
	   * @returns {*} The currently set value of the component
	   */


	  BaseComponent.prototype.get = function get() {
	    return this.value;
	  };

	  /**
	   * Call the PSHub publish
	   * @param {*} msg - The message to publish
	   */


	  BaseComponent.prototype.publish = function publish(msg) {
	    PSHub.publish(this.id, msg);
	  };

	  /**
	   * Render must be overridden by the child component
	   */


	  BaseComponent.prototype.render = function render() {
	    throw new Error('BaseComponent::render must be defined by child');
	  };

	  /**
	   * Sets the component's value
	   * @param {*} v - The new value for the component
	   * @returns {string} The newly updated html
	   */


	  BaseComponent.prototype.set = function set(v) {
	    this.value = v;
	    this.publish(this.get());
	    return this.render();
	  };

	  /**
	   * Subscribes the PSHub to the supplied listener
	   * @param {function} listener - The listener to call when the component's value changes
	   * @returns {BaseComponent} The component instance
	   */


	  BaseComponent.prototype.subscribe = function subscribe(listener) {
	    PSHub.subscribe(this.id, listener);
	    return this;
	  };

	  return BaseComponent;
	}();

	module.exports = BaseComponent;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(340);

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
/* 340 */
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
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = __webpack_require__(310);
	var bowser = __webpack_require__(342);

	/**
	 * A class to hold utils methods
	 */

	var Utils = function () {
	  /**
	   * Empty constructor
	   */

	  function Utils() {
	    _classCallCheck(this, Utils);
	  }

	  /**
	   * Binds to either click or touch, based on what is available
	   * @param {jQuery} element The jquery wrapped element to bind to
	   * @param {function} onClickFunction The function to call on click or touch
	   */


	  Utils.bindClick = function bindClick(element, onClickFunction) {
	    // JJT-2261
	    // detect windows8+chrome48 for touchstart bug
	    var isBadChrome48 = bowser.chrome && bowser.version >= 48 && !bowser.android && !bowser.windowsphone && !bowser.ios && !bowser.blackberry;

	    if ('ontouchstart' in document.documentElement && !isBadChrome48) {
	      (function () {
	        var dragging = false;
	        $('body').on('touchstart', function () {
	          dragging = false;
	        });
	        $('body').on('touchmove', function () {
	          dragging = true;
	        });

	        element.on('touchend', function (evt) {
	          if (dragging) {
	            dragging = false;
	          } else {
	            onClickFunction(evt);
	          }
	        });
	      })();
	    } else {
	      element.on('click', onClickFunction);
	    }
	  };

	  return Utils;
	}();

	module.exports = Utils;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */

	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result

	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(344);
	var iconURL = __webpack_require__(346);
	var BaseComponent = __webpack_require__(338);
	var Utils = __webpack_require__(341);

	/**
	 * Class for creating an icon to click and use your current location
	 */

	var CurrentLocation = function (_BaseComponent) {
	  _inherits(CurrentLocation, _BaseComponent);

	  /**
	   * Creates a CurrentLocation component
	   * @param {string} el - The selector for the element to put the CurrentLocation component in
	   * @param {object} opts - The options for the component
	   * @param {string} [opts.iconURL] - The path to the icon image to use
	   * @param {*} [opts.geolocationAPI] - The api to call to get the current location
	   */

	  function CurrentLocation(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, CurrentLocation);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));

	    _this.iconURL = opts.iconURL || iconURL;
	    _this.geolocationAPI = opts.geolocationAPI || window.navigator.geolocation;
	    return _this;
	  }

	  /**
	   * Returns an object with the current location lat and lng
	   * @returns {{lng: number, lat: number, isLocation: boolean}} The current location object
	   */


	  CurrentLocation.prototype.get = function get() {
	    return {
	      lng: this.lng,
	      lat: this.lat,
	      isLocation: true
	    };
	  };

	  /**
	   * Calls geolocationAPI to get the current location, and sets the location
	   * @returns {CurrentLocation} The CurrentLocation instance
	   */


	  CurrentLocation.prototype.getCurrentLocation = function getCurrentLocation() {
	    var _this2 = this;

	    this.publish('current-location-requested');
	    this.geolocationAPI.getCurrentPosition(function (position) {
	      _this2.set(position.coords.longitude, position.coords.latitude);
	    }, function (error) {
	      console.error(error.message);
	      _this2.publish(error);
	    });
	    return this;
	  };

	  /**
	   * Render the html for the CurrentLocation component and apply event handlers
	   * @returns {string} The html for the component
	   */


	  CurrentLocation.prototype.render = function render() {
	    var _this3 = this;

	    this.$el.addClass('ui-current-location');
	    Utils.bindClick(this.$el, function (evt) {
	      evt.stopPropagation();
	      _this3.getCurrentLocation();
	    });

	    this.$el.css('background-image', 'url(' + this.iconURL + ')');
	    return this.$el.html();
	  };

	  /**
	   * Sets the lat and lng for the current location and publishes the result
	   * @param {number} lng - The longitude of your location
	   * @param {number} lat - The latitude of your location
	   * @returns {CurrentLocation} The CurrentLocation instance
	   */


	  CurrentLocation.prototype.set = function set(lng, lat) {
	    this.lng = lng;
	    this.lat = lat;
	    this.publish(this.get());
	    return this;
	  };

	  return CurrentLocation;
	}(BaseComponent);

	module.exports = CurrentLocation;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(345);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".ui-current-location{cursor:pointer;background-size:contain;background-repeat:no-repeat}", ""]);

	// exports


/***/ },
/* 346 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(348);
	var inputTmpl = __webpack_require__(350);
	var iconTmpl = __webpack_require__(351);
	var iconWrapper = __webpack_require__(352);
	var BaseComponent = __webpack_require__(338);
	var debounce = __webpack_require__(353);
	var Utils = __webpack_require__(341);

	/**
	 * @deprecated
	 *
	 * publishes a nicely throttled text input event
	 * adds a clearing x icon
	 *
	 * Please do not use this class anymore. It has been kept around for legacy reasons, but will
	 * be deleted soon
	 */

	var TextInput = function (_BaseComponent) {
	  _inherits(TextInput, _BaseComponent);

	  /**
	   * Creates a new TextInput
	   * @param {string} el - The selector for the element to put the TextInput in
	   * @param {object} opts - The options for the component
	   */

	  function TextInput(el) {
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
	    return _this;
	  }

	  /**
	   * Renders the html for the component and sets up event listeners
	   * @returns {string} The html for the component
	   */


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

	  /**
	   * Shows/hides the icon
	   */


	  TextInput.prototype.showHideIcon = function showHideIcon() {
	    if (this.showIconOnNotEmpty) {
	      if (this.get()) {
	        this.$icon.show();
	      } else {
	        this.$icon.hide();
	      }
	    }
	  };

	  /**
	   * Gets the current value
	   * @returns {string} The current value
	   */


	  TextInput.prototype.get = function get() {
	    return typeof this.value === 'undefined' ? '' : this.value;
	  };

	  /**
	   * Sets the current value
	   * @param {string} v - the new value
	   * @returns {TextInput} the instance of TextInput
	   */


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
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(349);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".ui-text-input{width:100%;padding-right:30px}.ui-text-input-wrapper{position:relative}.ui-text-input-icon{font-size:16px;position:absolute;top:5px;right:15px;cursor:pointer;padding:0 5px;margin:0 5px}", ""]);

	// exports


/***/ },
/* 350 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<input type='text' id='" + scope.id + "'\nclass='ui-text-input form-control'\nplaceholder='" + scope.placeholder + "'\nvalue='" + scope.get() + "'/>\n";
	};

/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-text-input-icon'>" + scope.icon + "</span>";
	};

/***/ },
/* 352 */
/***/ function(module, exports) {

	module.exports = "<div class='ui-text-input-icon-wrapper'></div>";

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var now = __webpack_require__(354);

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
/* 354 */
/***/ function(module, exports) {

	module.exports = Date.now || now

	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(356);

	var _ = __webpack_require__(358);
	var BaseComponent = __webpack_require__(338);
	var Toggle = __webpack_require__(359);
	var collapseTmpl = __webpack_require__(360);

	/**
	 * Class for creating an expandable/collapsible component
	 * @author Robbie Wagner
	 */

	var ExpandCollapse = function (_BaseComponent) {
	  _inherits(ExpandCollapse, _BaseComponent);

	  /**
	   * Create an ExpandCollapse component
	   * @param {string} el - The selector for the element wrapping the content you want to expand/collapse
	   * @param {string} toggleSelector - The selector for the element to click to expand/collapse the content
	   * @param {object} opts - The options for the component
	   */

	  function ExpandCollapse(el, toggleSelector) {
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    _classCallCheck(this, ExpandCollapse);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, {
	      parentElement: opts.parentElement,
	      preserveChildElements: true
	    }));

	    if (_.isString(toggleSelector)) {
	      _this.toggleSelector = toggleSelector;
	      _this.opts = opts;
	    } else {
	      throw new Error('You must provide a toggleSelector');
	    }
	    return _this;
	  }

	  /**
	   * Expand/collapse the content
	   * @param {boolean} isToggled - A boolean indicating toggled or not
	   */


	  ExpandCollapse.prototype.expandCollapse = function expandCollapse(isToggled) {
	    if (isToggled) {
	      var wrapperHeight = this.$el.find('.measuringWrapper')[0].clientHeight;
	      this.$el.find('.grow').css('height', wrapperHeight + 'px');
	    } else {
	      this.$el.find('.grow').css('height', '0');
	    }
	  };

	  /**
	   * Render the html for the expand/collapse container and toggle and apply event listeners
	   * @returns {string} The html for the ExpandCollapse container component
	   */


	  ExpandCollapse.prototype.render = function render() {
	    var _this2 = this;

	    if (this.$el.find('.grow').length === 0) {
	      var innerContent = this.$el.html();
	      this.$el.html(collapseTmpl(innerContent));
	    }

	    var toggle = new Toggle(this.toggleSelector, this.opts);
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
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(357);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".grow{transition:height .5s;height:0;overflow:hidden}", ""]);

	// exports


/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = __webpack_require__(338);
	var Utils = __webpack_require__(341);

	/**
	 * Class for creating a Toggle component
	 */

	var Toggle = function (_BaseComponent) {
	  _inherits(Toggle, _BaseComponent);

	  /**
	   * Create a new Toggle component
	   * @param {string} el - The selector for the element to make into a toggle
	   * @param {object} opts - The options for the component
	   * @param {string} [opts.toggledClass] - A class to apply when the toggle is true
	   * @param {string} [opts.untoggledClass] - A class to apply when the toggle is false
	   */

	  function Toggle(el) {
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
	    return _this;
	  }

	  /**
	   * Render the html for the Toggle component
	   * @returns {string} The html for the Toggle component
	   */


	  Toggle.prototype.render = function render() {
	    return this.$el.html();
	  };

	  return Toggle;
	}(BaseComponent);

	module.exports = Toggle;

/***/ },
/* 360 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	    return "<div class=\"grow\">\n    <div class=\"measuringWrapper\">\n        <div class=\"expand-collapse-content\">" + scope + "</div>\n    </div>\n</div>\n";
	};

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var $ = __webpack_require__(310);
	var _ = __webpack_require__(358);
	var BaseComponent = __webpack_require__(338);
	var debounce = __webpack_require__(353);

	/**
	 * Class for implementing infinite scroll triggers and logic
	 * @author Robbie Wagner
	 */

	var InfiniteScroll = function (_BaseComponent) {
	  _inherits(InfiniteScroll, _BaseComponent);

	  /**
	   * Creates a new InfiniteScroll component
	   * @param {string} el - The selector for the element to apply InfiniteScroll to
	   * @param {function} onScrollToBottom - The function to call when you have scrolled to the bottom of the container
	   * @param {object} opts - The options for the component
	   */

	  function InfiniteScroll(el, onScrollToBottom) {
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    _classCallCheck(this, InfiniteScroll);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, {
	      preserveChildElements: true
	    }));

	    if (_.isFunction(onScrollToBottom)) {
	      _this.onScrollToBottom = onScrollToBottom;
	    } else {
	      throw new Error('You must provide an onScrollToBottom function');
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
	    return _this;
	  }

	  /**
	   * Renders the html for infinite scroll
	   * @returns {string} The html for the component
	   */


	  InfiniteScroll.prototype.render = function render() {
	    return this.$el.html();
	  };

	  return InfiniteScroll;
	}(BaseComponent);

	module.exports = InfiniteScroll;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// listItemOpts has the following properties:
	//  @param {Boolean} stopPropagation - prevents the click handler from bubbling the event upwards
	//  @param {Object} attrs - a list of CSS attributes to put on each ListItem

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(363);
	var listViewTmpl = __webpack_require__(365);
	var $ = __webpack_require__(310);
	var BaseComponent = __webpack_require__(338);
	var Utils = __webpack_require__(341);

	/**
	 * Render a list of results
	 * - publishes an event when a list item is clicked 'selected'
	 */

	var ListView = function (_BaseComponent) {
	  _inherits(ListView, _BaseComponent);

	  /**
	   * Creates a new ListView component
	   * @param {string} el - The selector for the element to put the ListView in
	   * @param {object} opts - The options for the component
	   * @param {function} [opts.fetch] - A function to pull new data
	   * @param {object} [opts.listItemOpts] - An object containing options specifically for each item in listView
	   * @param {object} [opts.listItemOpts.attrs] - a list of CSS attributes to put on each ListItem
	   * @param {boolean} [opts.listItemOpts.stopPropogation] - prevents the click handler from bubbling the event upwards
	   * @param {function} [opts.renderItem] - Determines how each listElement will be displayed in DOM
	   * @param {*[]} [opts.results] - Prefill the component with data
	   */

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

	  /**
	   * Render the html for the component and apply event listeners
	   * @returns {string} The html for the component
	   */


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

	  /**
	   * Expected to be overridden
	   * @param {*} item The item to render
	   * @returns {string} The string representation of the item
	   */


	  ListView.prototype.renderItem = function renderItem(item) {
	    return item.toString();
	  };

	  /**
	   * Fetch new results and render the list again
	   * @returns {*} The new list
	   */


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
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(364);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 365 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<ul class=\'ui-list\'> ';var arr1=it.results;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+=' ';var item = it.renderItem(value, index);out+=' ';if(item){out+=' <li id=\''+(it.id)+'\' class=\'ui-list-item\' data-index=\''+(index)+'\'>'+(item)+'</li> ';}out+=' ';} } out+='</ul>';return out;
	}

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(367);
	var inputTmpl = __webpack_require__(369);
	var $ = __webpack_require__(310);
	var TextInput = __webpack_require__(370);
	var CurrentLocation = __webpack_require__(343);

	/**
	 * This TextInput Implementation provides additional UI behaviors to the icon element
	 * over the default TextInput class.
	 * - If the icon is clicked while the value is empty, the browser's GeoLocation API
	 * will default the value with the user's current location
	 *
	 * @author: Naveed Nadjmabadi
	 */

	var LocationTextInput = function (_TextInput) {
	  _inherits(LocationTextInput, _TextInput);

	  /**
	   * Creates a new LocationTextInput
	   * @param {string} el - the selector for the element to attach to
	   * @param {object} opts - The options for the component
	   */

	  function LocationTextInput(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, LocationTextInput);

	    var _this = _possibleConstructorReturn(this, _TextInput.call(this, el, opts));

	    Object.assign(_this, {
	      locationIcon: null,
	      $location: null
	    });
	    return _this;
	  }

	  /**
	   * Gets the current value, and is it has a displayName, finds that
	   * @returns {string} The current value
	   */


	  LocationTextInput.prototype.get = function get() {
	    if ($.isPlainObject(this.value) && this.value.displayName) {
	      return this.value.displayName;
	    }

	    return _TextInput.prototype.get.call(this);
	  };

	  /**
	   * Sets the value of the LocationTextInput
	   * @param {string|object} v - the value to set
	   */


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

	  /**
	   * Renders the html for the LocationTextInput and its CurrentLocation icon
	   */


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

	  /**
	   * Shows or hides the icon
	   */


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
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(368);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".ui-text-input{width:100%}.ui-text-input-wrapper{position:relative}.ui-text-input-icon{font-size:16px;position:absolute;top:5px;right:5px;cursor:pointer;padding:0 5px;margin:0 5px}.ui-location-icon{width:22px;height:22px;position:absolute;top:5px;right:5px}", ""]);

	// exports


/***/ },
/* 369 */
/***/ function(module, exports) {

	module.exports = function (scope) {
		return "<div class='ui-text-input-wrapper'>\n\t<input type='text' id='" + scope.id + "' class='ui-text-input form-control' placeholder='" + scope.placeholder + "' value='" + scope.get() + "'/>\n\t<span class='ui-text-input-icon'>" + scope.icon + "</span>\n\t<span class='ui-location-icon'></span>\n</div>\n";
	};

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 **
	 **  @param {String} el - the DOM element to attach to
	 **  @param {Object} opts - the options to configure this element
	 **  @param {String} opts.icon - the string for the icon to show up
	 **  @param {Number} opts.wait - how long to debounce the input onKeyUp event
	 **  @param {Function} opts.submitHandler - if the enter key is pressed, run this function
	 **
	 **
	 */

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(348);
	var inputTmpl = __webpack_require__(371);
	var BaseTextInput = __webpack_require__(372);
	var debounce = __webpack_require__(353);

	/**
	 * This class is the main JUICE textInput Implementation. This class
	 * enhances the BaseTextInput class by providing nice UI interaction
	 * behaviors, such as:
	 *   - publishes a nicely throttled text input event
	 *   - firing event listeners when the enter key is pressed
	 *   - adds a clearing x icon
	 *
	 * If you plan on extending the textInput class, you can override the
	 * iconClickHandler(), keyUpHandler(), showHideIcon(), and renderDom()
	 * methods to override the default behavior of the render method
	 *
	 * @author John Hatcher
	 */

	var TextInput = function (_BaseTextInput) {
	  _inherits(TextInput, _BaseTextInput);

	  /**
	   * Creates a new TextInput component
	   * @param {string} el - The selector for the element to put the TextInput in
	   * @param {object} opts - The options for the component
	   * @param {string} opts.icon - The markup for the icon to display
	   * @param {number} opts.wait - The delay to debounce
	   * @param {function} opts.submitHandler - The function to call on submit
	   */

	  function TextInput(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, TextInput);

	    var _this = _possibleConstructorReturn(this, _BaseTextInput.call(this, el, opts));

	    Object.assign(_this, {
	      $icon: null,
	      icon: opts.icon || 'x',
	      submitHandler: opts.submitHandler || function () {},
	      wait: opts.wait || 300
	    });
	    return _this;
	  }

	  /**
	   * Set the value to empty string when you click the clear icon
	   */


	  TextInput.prototype.iconClickHandler = function iconClickHandler() {
	    var _this2 = this;

	    this.$icon.click(function () {
	      _this2.set('');
	    });
	  };

	  /**
	   * Listen to keyup and set the value
	   */


	  TextInput.prototype.keyUpHandler = function keyUpHandler() {
	    var _this3 = this;

	    var onKeyup = debounce(function (e) {
	      _this3.get() !== _this3.$input.val() ? _this3.set(_this3.$input.val()) : '';

	      if (e.keyCode == _this3.keyEvents.ENTER) {
	        _this3.$input.blur();
	        _this3.submitHandler(_this3.get());
	      }
	    }, this.wait);

	    this.$input.keyup(onKeyup);
	  };

	  /**
	   * Render the DOM and apply event listeners
	   * @returns {string} The html for the component
	   */


	  TextInput.prototype.render = function render() {
	    this.renderDom();

	    // set up various event handlers
	    this.keyUpHandler();
	    this.iconClickHandler();
	    this.showHideIcon();

	    return this.$el.html();
	  };

	  /**
	   * Put DOM for input into $el and grab a reference to $input and $icon
	   */


	  TextInput.prototype.renderDom = function renderDom() {
	    // the base input
	    this.$el.html(inputTmpl(this));
	    this.$input = this.$el.find('input');

	    this.$icon = this.$el.find('.ui-text-input-icon');
	  };

	  /**
	   * Set the value of the TextInput
	   * @param {string} v - The value to set the TextInput to
	   * @returns {TextInput} The TextInput instance
	   */


	  TextInput.prototype.set = function set(v) {
	    _BaseTextInput.prototype.set.call(this, v);
	    this.showHideIcon();
	    return this;
	  };

	  /**
	   * Show icon when there is text typed in, and hide when no text is typed
	   */


	  TextInput.prototype.showHideIcon = function showHideIcon() {
	    if (this.$icon) {
	      this.get() ? this.$icon.show() : this.$icon.hide();
	    }
	  };

	  return TextInput;
	}(BaseTextInput);

	module.exports = TextInput;

/***/ },
/* 371 */
/***/ function(module, exports) {

	module.exports = function (scope) {
		return "<div class='ui-text-input-wrapper'>\n\t<input type='text' id='" + scope.id + "' class='ui-text-input form-control' placeholder='" + scope.placeholder + "' value='" + scope.get() + "'/>\n\t<span class='ui-text-input-icon'>" + scope.icon + "</span>\n</div>\n";
	};

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var inputTmpl = __webpack_require__(373);
	var BaseComponent = __webpack_require__(338);

	/**
	 * This class provides a template for JUICE textInput Implementations. It is
	 * designed to function as an Abstract class. Do not instantiate Objects of
	 * this type -- instantiate a child component instead
	 *
	 * @author John Hatcher
	 */

	var BaseTextInput = function (_BaseComponent) {
	  _inherits(BaseTextInput, _BaseComponent);

	  /**
	   * Creates a BaseTextInput component
	   * @param {String} el - the DOM element to attach to
	   * @param {Object} opts - the options to configure this element
	   * @param {String} opts.placeholder - the html placeholder attribute for the component
	   * @param {String} opts.value - preset the value for the component to this string
	   */

	  function BaseTextInput(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, BaseTextInput);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));

	    Object.assign(_this, {
	      $input: null,
	      placeholder: opts.placeholder || '',
	      value: opts.value || ''
	    });
	    return _this;
	  }

	  /**
	   * Gets the current value or returns empty string
	   * @returns {*|string} The current value
	   */


	  BaseTextInput.prototype.get = function get() {
	    return this.value || '';
	  };

	  /**
	   * Render the html and save a reference to $input
	   * @returns {string} The html for the component
	   */


	  BaseTextInput.prototype.render = function render() {
	    // the base input
	    this.$el.html(inputTmpl(this));
	    this.$input = this.$el.find('input');

	    return this.$el.html();
	  };

	  /**
	   * Sets the current value on the component and the input, then publishes the new value
	   * @param {string} v - The new value for the input
	   */


	  BaseTextInput.prototype.set = function set(v) {
	    this.value = v;

	    if (this.$input) {
	      this.$input.val(v);
	    }

	    this.publish(this.get());
	  };

	  return BaseTextInput;
	}(BaseComponent);

	module.exports = BaseTextInput;

/***/ },
/* 373 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<input type='text' id='" + scope.id + "'\nclass='ui-text-input form-control'\nplaceholder='" + scope.placeholder + "'\nvalue='" + scope.get() + "'/>\n";
	};

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(375);
	var currentLocationTemplate = __webpack_require__(377);
	var $ = __webpack_require__(310);
	var Typeahead = __webpack_require__(378);
	var LocationTextInput = __webpack_require__(366);
	var FragFactory = __webpack_require__(314);
	var CurrentLocation = __webpack_require__(343);

	/**
	 * Location Search Typeahead
	 * Extends `Typeahead` class to:
	 * - add a "use my current location" icon to text input
	 * - add fixed result that triggers "use my current location" on click
	 */

	var LocationTypeahead = function (_Typeahead) {
	  _inherits(LocationTypeahead, _Typeahead);

	  /**
	   * Create a new LocationTypeahead
	   * @param {string} el - The selector for the element to put the LocationTypeahed in
	   * @param {function} fetch - The function to call to fetch/refresh results
	   * @param {object} opts - The options for the component
	   * @param {*[]} [opts.fixedResults] - An array of results to always display
	   */

	  function LocationTypeahead(el, fetch) {
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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

	    var _this = _possibleConstructorReturn(this, _Typeahead.call(this, el, fetch, opts));

	    _this.iconFactory = iconFactory;
	    _this.$el.addClass('ui-location-typeahead');
	    return _this;
	  }

	  /**
	   * Handles when the text input updates and sets the Typeahead
	   */


	  LocationTypeahead.prototype.handleTextInputUpdates = function handleTextInputUpdates() {
	    var _this2 = this;

	    this.textInput.subscribe(function (v) {
	      if ($.isPlainObject(v) && v.isLocation && !v.listItem) {
	        _this2.setInternal(v);
	      }
	    });

	    _Typeahead.prototype.handleTextInputUpdates.call(this);
	  };

	  /**
	   * Render the item based on the supplied iconFactory
	   * @param {object} item - The item to display in the ListView
	   * @returns {*} The markup for the icon
	   */


	  LocationTypeahead.prototype.renderItem = function renderItem(item) {
	    if (item && item.useMyCurrentLocation) {
	      return this.iconFactory.make({
	        name: 'listItem'
	      });
	    } else {
	      return _Typeahead.prototype.renderItem.call(this, item);
	    }
	  };

	  /**
	   * Sets the value of the LocationTypeahead
	   * @param {string} v - The value for the LocationTypeahead
	   * @returns {LocationTypeahead} The instance
	   */


	  LocationTypeahead.prototype.set = function set(v) {
	    this.textInput.set(v);
	    this.setInternal(v);
	    return this;
	  };

	  /**
	   * Creates a new LocationTextInput for use with the LocationTypeahead
	   * @param {object} textInputOpts - The options for the LocationTextInput
	   * @returns {LocationTextInput} A new LocationTextInput
	   */


	  LocationTypeahead.prototype.setupTextInput = function setupTextInput(textInputOpts) {
	    return new LocationTextInput(this.$el.find('.input-container'), textInputOpts);
	  };

	  return LocationTypeahead;
	}(Typeahead);

	module.exports = LocationTypeahead;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(376);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".ui-curr-loc{display:inline-block;width:22px;height:22px}.ui-location-typeahead .ui-text-input-icon{right:0}", ""]);

	// exports


/***/ },
/* 377 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return "<span class='ui-current-location-" + scope.name + " ui-curr-loc'></span>\n<span style='display: " + scope.displayValue + " '>Use my current location</span>\n";
	};

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(379);
	var _ = __webpack_require__(358);
	var $ = __webpack_require__(310);
	var BaseTypeahead = __webpack_require__(381);

	var HIGHLIGHT_CLASS = 'ui-typeahead-highlight';

	/**
	 * Extends BaseTypeahead by adding:
	 * - the concept of "active"
	 * - the use of arrow keys/enter to pick from the results list
	 * - blur/focus events to close/open the results list
	 * - add highlights for partial matches
	 * - ESC key forces blur
	 * - point to click from results list and hover highlight
	 * - hover highlight renders list view results on top of page instead of pushing elements down
	 */

	var Typeahead = function (_BaseTypeahead) {
	  _inherits(Typeahead, _BaseTypeahead);

	  /**
	   * Creates a new Typeahead component
	   * @param {string} el - The selector for the element to put the Typeahead in
	   * @param {function} fetch - The function to call to fetch/refresh results
	   * @param {object} opts - The options for the component
	   * @param {boolean} [opts.allowFreeForm] - A boolean indicating if free form input will be accepted
	   * @param {string} [opts.displayProperty] - A string indicating the property name of the property to display
	   * @param {*[]} [opts.fixedResults] - An array of results to always display
	   */

	  function Typeahead(el, fetch) {
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    _classCallCheck(this, Typeahead);

	    opts.renderItem = function (item) {
	      return _this.renderItem(item);
	    };

	    var _this = _possibleConstructorReturn(this, _BaseTypeahead.call(this, el, fetch, opts));

	    Object.assign(_this, {
	      allowFreeForm: opts.allowFreeForm || false,
	      displayProperty: opts.displayProperty || 'displayName',
	      fixedResults: opts.fixedResults || [],
	      isActive: false
	    });
	    return _this;
	  }

	  /**
	   * Show or hide the listView depending on if active is true or false, set isActive
	   * @param {boolean} v - Active or not
	   * @returns {boolean|*} if active is true or false
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

	    this.textInput.$el.find('input').on('blur', function () {
	      _this2.active(false);
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
	          _this3.textInput.$el.find('input').blur();
	          break;

	        default:
	          break;
	      }
	    });
	  };

	  /**
	   * Called when navigating with the arrow keys to decrease the index of which list item is highlighted
	   */


	  Typeahead.prototype.decrementHighlight = function decrementHighlight() {
	    var highlightIndex = !_.isFinite(this.highlightIndex) ? this.resultsListView.$el.find('li').length - 1 : this.highlightIndex - 1;
	    this.normalizeHighlightIndex(highlightIndex);
	    this.renderHighlight();
	  };

	  /**
	   * Handle selection and call preSelectHook if it is defined
	   * @param {*} selection - The selected item
	   */


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

	  /**
	   * When text input gets a new value, update typeahead
	   */


	  Typeahead.prototype.handleTextInputUpdates = function handleTextInputUpdates() {
	    var _this4 = this;

	    this.textInput.subscribe(function (v) {
	      _this4.highlightIndex = null;
	      if (v === '') {
	        _this4.setInternal({});
	      }
	    });

	    _BaseTypeahead.prototype.handleTextInputUpdates.call(this);
	  };

	  /**
	   * Called when navigating with the arrow keys to increase the index of which list item is highlighted
	   */


	  Typeahead.prototype.incrementHighlight = function incrementHighlight() {
	    var highlightIndex = !_.isFinite(this.highlightIndex) ? 0 : this.highlightIndex + 1;
	    this.normalizeHighlightIndex(highlightIndex);
	    this.renderHighlight();
	  };

	  /**
	   * Ensure that highlight index is reset back to beginning if you exceed the number in the list
	   * @param {number} highlightIndex - The index of the current highlighted item
	   */


	  Typeahead.prototype.normalizeHighlightIndex = function normalizeHighlightIndex(highlightIndex) {
	    var length = this.resultsListView.$el.find('li').length;
	    this.highlightIndex = (highlightIndex + length) % length;
	  };

	  /**
	   * Grabs new results from the data source
	   * @param {function} cb - the callback to pass the results to
	   * @returns {Promise} Return the promise
	   */


	  Typeahead.prototype.refreshResults = function refreshResults(cb) {
	    var _this5 = this;

	    return _BaseTypeahead.prototype.refreshResults.call(this, function (results) {
	      return cb(results.concat(_this5.fixedResults));
	    });
	  };

	  /**
	   * Apply event listeners and render html for the component
	   * @returns {string} The html for the component
	   */


	  Typeahead.prototype.render = function render() {
	    _BaseTypeahead.prototype.render.call(this);

	    // layer on our new behavior - hiding/showing results when user blurs/focuses
	    this.resultsListView.$el.hide();
	    this.attachFocusEvents();

	    // we also want to let you pick results from just the keyboard
	    this.attachKeyEvents();

	    return this.$el.html();
	  };

	  /**
	   * Apply highlight to correct element in the list based on the current highlightIndex
	   */


	  Typeahead.prototype.renderHighlight = function renderHighlight() {
	    // remove the highlight
	    this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).removeClass(HIGHLIGHT_CLASS);

	    // add it to the right index
	    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass(HIGHLIGHT_CLASS);
	  };

	  /**
	   * Handles the rendering of a single item
	   * @param {string|object} item - The item to render
	   * @returns {string} The display value of the item
	   */


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

	  /**
	   * Make a selection based on the index that is highlighted
	   */


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

	    if (this.allowFreeForm && this.resultsListView.results.length === 0) {
	      this.handleSelection(this.textInput.get());
	    }
	  };

	  return Typeahead;
	}(BaseTypeahead);

	module.exports = Typeahead;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(380);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./styles.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./styles.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".ui-typeahead{font-family:Roboto,Helvetica Neue,sans-serif;position:relative}.ui-typeahead .results-list-container{z-index:1000;box-shadow:1px 1px 5px gray;background-color:#fff;position:absolute;width:100%}.ui-typeahead .results-list-container ul{list-style:none;padding-left:0}.ui-typeahead .results-list-container li{padding:10px;border-bottom:1px solid #f3f3f3}.ui-typeahead .results-list-container li:hover{background-color:#00516f;color:#fff;cursor:pointer}.ui-typeahead .results-list-container .ui-typeahead-highlight{background-color:#00516f;color:#fff}", ""]);

	// exports


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var containerHTML = __webpack_require__(382);
	var BaseComponent = __webpack_require__(338);
	var _ = __webpack_require__(358);
	var $ = __webpack_require__(310);
	var TextInput = __webpack_require__(370);
	var ListView = __webpack_require__(362);
	var assert = __webpack_require__(315);

	/**
	 * Handles just the absolute core behavior of a typeahead
	 *
	 * 1. a text input
	 * 2. a list view of results based on current text
	 *
	 * ==============================================================
	 * its recommended using the child class `Typeahead` in your UI's
	 * ==============================================================
	 */

	var BaseTypeahead = function (_BaseComponent) {
	  _inherits(BaseTypeahead, _BaseComponent);

	  /**
	   * Creates a new BaseTypeahead component
	   * @param {string} el - The selector for the element to put the BaseTypeahead in
	   * @param {function} fetch - The function to call to fetch/refresh results
	   * @param {object} opts - The options for the component
	   * @param {object} opts.textInputOpts - The options to pass to the TextInput
	   */

	  function BaseTypeahead(el, fetch) {
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    _classCallCheck(this, BaseTypeahead);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el, opts));

	    Object.assign(_this, {
	      fetch: fetch,
	      textInputOpts: opts.textInputOpts || {}
	    });

	    assert(_.isFunction(_this.fetch), 'typeahead requires a fetch method');

	    _this.$el.append(containerHTML);

	    // create sub-components
	    _this.textInput = _this.setupTextInput(_this.textInputOpts);
	    _this.resultsListView = _this.setupListView(opts);

	    // handle their subscribe methods
	    _this.handleListViewUpdates();
	    _this.handleTextInputUpdates();
	    return _this;
	  }

	  /**
	   * Watch the list view, and set the textInput and Typeahead when a selection is made in the list
	   */


	  BaseTypeahead.prototype.handleListViewUpdates = function handleListViewUpdates() {
	    var _this2 = this;

	    // when an item is picked from the list view:
	    this.resultsListView.subscribe(function (evt) {
	      if (evt === 'refresh') {
	        return;
	      }

	      // update text input with this value, set typeahead internal value
	      _this2.handleSelection(evt);
	    });
	  };

	  /**
	   * Subscribe to the textInput, and when the value changes, refresh the resultsListView
	   */


	  BaseTypeahead.prototype.handleTextInputUpdates = function handleTextInputUpdates() {
	    var _this3 = this;

	    this.textInput.subscribe(function () {
	      _this3.resultsListView.refresh();
	    });
	  };

	  /**
	   * Set the value to the selection
	   * @param {*} selection - The value selected
	   */


	  BaseTypeahead.prototype.handleSelection = function handleSelection(selection) {
	    this.set(selection);
	  };

	  /**
	   * Gets the current value
	   * @returns {string} The current value of the BaseTypeahead or empty string
	   */


	  BaseTypeahead.prototype.get = function get() {
	    return this.value || '';
	  };

	  /**
	   * Checks if item is an object and, if it is, grabs the display value
	   * @param {string|object} item The item to check the display value of
	   * @returns {string} The display value
	   */


	  BaseTypeahead.prototype.getDisplayValue = function getDisplayValue(item) {
	    if ($.isPlainObject(item)) {
	      item = item[this.displayProperty];
	    }
	    return item;
	  };

	  /**
	   * Gets the value of the TextInput that is inside the BaseTypeahead
	   * @returns {string} The current text value in the TextInput
	   */


	  BaseTypeahead.prototype.getTextInput = function getTextInput() {
	    return this.textInput.get();
	  };

	  /**
	   * Fetches new results based on the current value of the TextInput
	   * @param {function} cb - The callback to pass the results to
	   */


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

	  /**
	   * Renders the TextInput and refreshes the ListView
	   * @returns {string} The html for the BaseTypeahead
	   */


	  BaseTypeahead.prototype.render = function render() {
	    this.textInput.render();
	    this.resultsListView.refresh();
	    return this.$el.html();
	  };

	  /**
	   * Small aux function that should be used instead of set when textInput does not
	   * need to be updated
	   * @param {string} v - The value to set
	   */


	  BaseTypeahead.prototype.setInternal = function setInternal(v) {
	    this.value = v;
	    this.publish(this.get());
	  };

	  /**
	   * Creates a new ListView to populate with suggestions
	   * @param {object} opts - The options for the ListView
	   * @returns {ListView} A new instance of ListView
	   */


	  BaseTypeahead.prototype.setupListView = function setupListView(opts) {
	    var _this4 = this;

	    return new ListView(this.$el.find('.results-list-container'), {
	      fetch: function fetch(cb) {
	        _this4.refreshResults(cb);
	      },
	      renderItem: opts.renderItem || null
	    });
	  };

	  /**
	   * Creates a new TextInput for use with the BaseTypeahead
	   * @param {object} textInputOpts - The options to pass to the TextInput
	   * @returns {TextInput} A new TextInput component
	   */


	  BaseTypeahead.prototype.setupTextInput = function setupTextInput(textInputOpts) {
	    return new TextInput(this.$el.find('.input-container'), textInputOpts);
	  };

	  /**
	   * Sets the value of the BaseTypeahead
	   * @param {*} v - The value to set BaseTypeahead to
	   * @returns {BaseTypeahead} The instance of BaseTypeahead
	   */


	  BaseTypeahead.prototype.set = function set(v) {
	    this.textInput.set(this.getDisplayValue(v));
	    this.value = v;
	    this.textInput.$el.find('input').blur();
	    this.publish(this.get());
	    return this;
	  };

	  return BaseTypeahead;
	}(BaseComponent);

	module.exports = BaseTypeahead;

/***/ },
/* 382 */
/***/ function(module, exports) {

	module.exports = "<div class='ui-typeahead'>\n  <div class='input-container'></div>\n  <div class='results-list-container'></div>\n</div>\n\n";

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(384);
	var multiSelectTmpl = __webpack_require__(386);
	var $ = __webpack_require__(310);
	var BaseComponent = __webpack_require__(338);
	var Utils = __webpack_require__(341);

	/**
	 * Class representing a MultiSelect component
	 */

	var MultiSelect = function (_BaseComponent) {
	  _inherits(MultiSelect, _BaseComponent);

	  /**
	   * Creates a new MultiSelect component
	   * @param {string} el - The selector for the element to put the MultiSelect in
	   * @param {object} opts - The options for the component
	   * @param {string} [opts.displayNameKey] - A string indicating the index of the displayName property
	   * @param {function} [opts.renderItem] - A function to render each item
	   */

	  function MultiSelect(el) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, MultiSelect);

	    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this, el));

	    _this.displayNameKey = opts.displayNameKey || 'displayName';
	    _this.renderItem = opts.renderItem || _this.renderItem;
	    _this.setOptions(opts.options || []);
	    return _this;
	  }

	  /**
	   * Get the currently selected options
	   * @returns {object[]} The array of selected items
	   */


	  MultiSelect.prototype.get = function get() {
	    this.options = this.options || [];
	    return this.options.filter(function (opt) {
	      return opt.checked;
	    });
	  };

	  /**
	   * Render the html for the component and apply event listeners
	   * @returns {string} The html for the component
	   */


	  MultiSelect.prototype.render = function render() {
	    var _this2 = this;

	    this.$el.html(multiSelectTmpl(this));

	    Utils.bindClick(this.$el.find('.ms-label'), function (evt) {
	      evt.stopPropagation();
	      _this2.set($(evt.target).parent().find('input').val());
	    });

	    return this.$el.html();
	  };

	  /**
	   * Grab the item and return its string representation
	   * @param {object} item The item to render
	   * @returns {string} The item stringified
	   */


	  MultiSelect.prototype.renderItem = function renderItem(item) {
	    return JSON.stringify(item[this.displayNameKey]);
	  };

	  /**
	   * Set the possible options for the MultiSelect
	   * @param {object[]|string[]} options An array of options to populate the MultiSelect
	   */


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

	  /**
	   * Check the options that are in the array passed
	   * @param {*[]|*} selected - An array of selected values or a value to select
	   * @returns {MultiSelect} An instance of MultiSelect
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
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(385);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/jsontosass-loader/index.js?path=./sassvars.json!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/jsontosass-loader/index.js?path=./sassvars.json!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, "@media (max-width:767px){label{position:relative;cursor:pointer}label input[type=checkbox]{display:none}label input[type=checkbox]+span{display:inline-block;line-height:normal;cursor:pointer;padding:8px 14px;background-color:#fff;border:1px solid #d0d0d0}label input[type=checkbox]+span:hover,label input[type=checkbox]:checked+span{border-color:#000;background-color:#105b63;color:#fff}}", ""]);

	// exports


/***/ },
/* 386 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {
			var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
				matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(code) {
				return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
			};
		}());var out='<div class=\'ui-multi-select\'> ';var arr1=it.options;if(arr1){var opt,index=-1,l1=arr1.length-1;while(index<l1){opt=arr1[index+=1];out+=' <div class="select-option"> <label class=\'ms-label\'> <input type=\'checkbox\' name=\''+( it.id )+'\' value=\''+encodeHTML(opt.value)+'\' ';if(opt.checked){out+='checked=true';}out+='/> <span>'+(it.renderItem(opt))+'</span> </label> </div> ';} } out+='</div>';return out;
	}

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(388);
	var _ = __webpack_require__(358);
	var BaseComponent = __webpack_require__(338);

	/**
	 * Class for creating a Pagination component
	 * @author Robbie Wagner
	 */

	var Pagination = function (_BaseComponent) {
	  _inherits(Pagination, _BaseComponent);

	  /**
	   * Create a new Pagination component
	   * @param {string} el - The selector for the element to put the Pagination component in
	   * @param {object} opts - The options for the component
	   * @param {number} [opts.currentPage] - The page we are currently on
	   * @param {number} [opts.edges] - How many page numbers are visible at the beginning and ending of pagination
	   * @param {string} [opts.hrefTextPrefix] - A string to prefix to the front of all hrefs
	   * @param {number} [opts.items] - The total number of items in the list
	   * @param {number} [opts.itemsOnPage] - The number of items to display per page
	   * @param {string} [opts.nextText] - The text to display in the next button
	   * @param {function} [opts.onPageClick] - A function to call when the page is changed
	   * @param {string} [opts.prevText] - The text to display in the previous button
	   */

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

	  /**
	   * Sets the value of the Pagination component to the given page number, and calls onPageClick, if it is defined
	   * @param {number} pageNumber - The page number transitioned to
	   * @param {event} event - The event fired
	   */


	  Pagination.prototype.pageChange = function pageChange(pageNumber, event) {
	    this.set(pageNumber);
	    if (_.isFunction(this.onPageClick)) {
	      event.stopPropagation();
	      event.preventDefault();
	      this.onPageClick(pageNumber, event);
	    }
	  };

	  /**
	   * Initializes a simplePagination instance, and returns the html for the Pagination component
	   * @returns {string} The html to render for the Pagination component
	   */


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
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(310);

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
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var $ = __webpack_require__(310);
	var BaseComponent = __webpack_require__(338);
	var radioButtonsTmpl = __webpack_require__(390);
	var Utils = __webpack_require__(341);

	/**
	 * Class for creating a RadioButtons component
	 */

	var RadioButtons = function (_BaseComponent) {
	  _inherits(RadioButtons, _BaseComponent);

	  /**
	   * Create a new RadioButtons component
	   * @param {string} el - The selector for the element to put the radio buttons in
	   * @param {object} opts - The options for the component
	   */

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

	  /**
	   * The render function for each individual radio button
	   * @param {object} item The item to display
	   * @returns {string} The string of the item object
	   */


	  RadioButtons.prototype.renderItem = function renderItem(item) {
	    return JSON.stringify(item[this.displayNameKey]);
	  };

	  /**
	   * Set the possible radio button options for the component
	   * @param {string[]|object[]} options - An array of options representing each radio button
	   */


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

	  /**
	   * Get the selected option
	   * @returns {object|null} The selected option
	   */


	  RadioButtons.prototype.get = function get() {
	    this.options = this.options || [];
	    var selected = this.options.filter(function (opt) {
	      return opt.checked;
	    });
	    return selected[0] || null;
	  };

	  /**
	   * Render the html for the RadioButtons component and apply event listeners
	   * @returns {string} The html for the RadioButtons component
	   */


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
	   * @param {*} selected a value to select
	   * @returns {RadioButtons} The RadioButtons instance
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
/* 390 */
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
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(392);
	var selectTmpl = __webpack_require__(394);
	var $ = __webpack_require__(310);
	var BaseComponent = __webpack_require__(338);

	/**
	 * Simple dropdown list with the ability to choose one option
	 * @todo
	 * - styles
	 * @author John Hatcher
	 */

	var SingleSelect = function (_BaseComponent) {
	  _inherits(SingleSelect, _BaseComponent);

	  /**
	   * Create a new SingleSelect
	   * @param {string} el - The dom element to attach to
	   * @param {object} opts - The options passed in to configure this component
	   * @param {*[]} opts.options - each option to be rendered, containing 3 attributes (2 are passed in):
	   *        {string} [display] - the display to render for the option
	   *        {string} value - the data value to send to the server
	   */

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

	  /**
	   * Get the display value
	   * @returns {*} the display attribute of the option if it exists, fallback to the value
	   */


	  SingleSelect.prototype.getDisplayValue = function getDisplayValue() {
	    var display = void 0;

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

	  /**
	   * Renders the html for the component and applies event listeners
	   * @returns {string} The html for the component
	   */


	  SingleSelect.prototype.render = function render() {
	    var _this2 = this;

	    this.$el.html(selectTmpl(this));
	    this.$el.find('select').change(function (evt) {
	      _this2.set($(evt.target).val());
	    });
	    return this.$el.html();
	  };

	  /**
	   * Set the selected value
	   * @param {object} v - the Option Object (display,value,selected) to set
	   * @returns {string} The html for the component
	   */


	  SingleSelect.prototype.set = function set(v) {
	    this.options = this.options.map(function (opt) {
	      opt.selected = opt.value === v;
	      return opt;
	    });

	    return _BaseComponent.prototype.set.call(this, v);
	  };

	  return SingleSelect;
	}(BaseComponent);

	module.exports = SingleSelect;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(393);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 394 */
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
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(396);
	var dotty = __webpack_require__(398);
	var BaseComponent = __webpack_require__(338);

	/**
	 * Receive a template config, and a data object. Render the parsed String.
	 * @author Naveed Nadjmabadi
	 */

	var SentenceGenerator = function (_BaseComponent) {
	  _inherits(SentenceGenerator, _BaseComponent);

	  /**
	   *
	   * @param {string} el   - The dom element to attach to
	   * @param {object} opts - The options passed in to configure this component
	   * @param {*[]} opts.structure - The sentence 'fragments' to be assembled. Each index
	   *   is an Object that takes at least 3 properties:
	   *    {
	   *     {string} fragment  - part of the sentence with a ${} where the value should be interpolated
	   *     {boolean} required - whether the fragment is necessary for the string to exist
	   *     {string} [default]  - a fallback string in case the value inside ${} is falsey
	   *     {number} [order] - the order of the sentence fragment in the entire string
	   *   }
	   * @param {boolean} [opts.ordinality] - whether the fragment objects have explicit arrangement
	   * @param {string} [opts.delimiter] - a character to put in between each sentence fragment
	   * @param {regex} [opts.regex] - the pattern to determine where string interpolation takes place
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

	  /**
	   * Gets the currently stored value
	   * @returns {{}|*} The value
	   */


	  SentenceGenerator.prototype.get = function get() {
	    return this.value;
	  };

	  /**
	   * Render the template string into the html
	   */


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
	      var matches = void 0;
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

	  /**
	   * Set the value
	   * @param {object} data - An object containing the values to interpolate
	   */


	  SentenceGenerator.prototype.set = function set(data) {
	    this.value = typeof data !== 'undefined' ? data : {};
	    this.render();
	  };

	  return SentenceGenerator;
	}(BaseComponent);

	module.exports = SentenceGenerator;

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(397);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 398 */
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
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(400);
	var $ = __webpack_require__(310);
	var BaseSpinner = __webpack_require__(402);
	var BaseComponent = __webpack_require__(338);

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

	/**
	 * Class to render a loading spinner
	 */

	var Spinner = function (_BaseComponent) {
	  _inherits(Spinner, _BaseComponent);

	  /**
	   * Create a new spinner
	   * @param {string} el - The selector for the element to put the spinner in
	   * @param {object} opts - The options for the component
	   */

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

	  /**
	   * Add the overlay and start the spinner
	   * @returns {Promise} The spinner spin Promise
	   */


	  Spinner.prototype.start = function start() {
	    this.toggleOverlay(true);
	    this.publish();

	    // retrieve native dom element
	    var target = this.$el.get(0);
	    return this.spinner.spin(target);
	  };

	  /**
	   * Remove the overlay and stop the spinner
	   * @returns {Promise} The spinner stop Promise
	   */


	  Spinner.prototype.stop = function stop() {
	    this.toggleOverlay(false);
	    return this.spinner.stop();
	  };

	  /**
	   * Starts the spinner on render
	   * @returns {Promise} The spinner start promise
	   */


	  Spinner.prototype.render = function render() {
	    return this.start();
	  };

	  /**
	   * Get the spinner
	   * @returns {object|null} The spinner or null
	   */


	  Spinner.prototype.get = function get() {
	    return this.spinner || null;
	  };

	  /**
	   * Shows/hides the greyed out overlay
	   * @param {boolean} toggle Whether to display the overlay or not
	   */


	  Spinner.prototype.toggleOverlay = function toggleOverlay(toggle) {

	    if (toggle) {
	      $('body').addClass('noScroll');
	      $('.juicy-spinner-container').css('display', 'block');
	    } else {
	      $('.juicy-spinner-container').css('display', 'none');
	      $('body').removeClass('noScroll');
	    }
	  };

	  /**
	   * Set the options and create a new spinner
	   * @param {object} opts - The options for the spinner
	   */


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
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(401);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(336)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(335)();
	// imports


	// module
	exports.push([module.id, ".juicy-spinner:before{content:'';display:block;position:fixed}.juicy-spinner-container{top:0;left:0;position:fixed;background-color:rgba(0,0,0,.5);z-index:9999;height:100%;width:100%}.noScroll{overflow:hidden;z-index:9998;display:block}", ""]);

	// exports


/***/ },
/* 402 */
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