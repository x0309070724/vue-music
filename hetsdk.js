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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(94);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(9);
	var toObject = __webpack_require__(6);
	var IE_PROTO = __webpack_require__(10)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(11)('keys');
	var uid = __webpack_require__(15);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(12);
	var global = __webpack_require__(13);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(14) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(17);
	var core = __webpack_require__(12);
	var fails = __webpack_require__(26);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(13);
	var core = __webpack_require__(12);
	var ctx = __webpack_require__(18);
	var hide = __webpack_require__(20);
	var has = __webpack_require__(9);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
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


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(21);
	var createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(22);
	var IE8_DOM_DEFINE = __webpack_require__(24);
	var toPrimitive = __webpack_require__(28);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function () {
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	var document = __webpack_require__(13).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(37);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(65);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	__webpack_require__(60);
	module.exports = __webpack_require__(64).f('iterator');


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(40)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(42)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(41);
	var defined = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(14);
	var $export = __webpack_require__(17);
	var redefine = __webpack_require__(43);
	var hide = __webpack_require__(20);
	var Iterators = __webpack_require__(44);
	var $iterCreate = __webpack_require__(45);
	var setToStringTag = __webpack_require__(58);
	var getPrototypeOf = __webpack_require__(8);
	var ITERATOR = __webpack_require__(59)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(46);
	var descriptor = __webpack_require__(29);
	var setToStringTag = __webpack_require__(58);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(59)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(22);
	var dPs = __webpack_require__(47);
	var enumBugKeys = __webpack_require__(56);
	var IE_PROTO = __webpack_require__(10)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(21);
	var anObject = __webpack_require__(22);
	var getKeys = __webpack_require__(48);

	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(49);
	var enumBugKeys = __webpack_require__(56);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(9);
	var toIObject = __webpack_require__(50);
	var arrayIndexOf = __webpack_require__(53)(false);
	var IE_PROTO = __webpack_require__(10)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51);
	var defined = __webpack_require__(7);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50);
	var toLength = __webpack_require__(54);
	var toAbsoluteIndex = __webpack_require__(55);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(41);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(41);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(13).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f;
	var has = __webpack_require__(9);
	var TAG = __webpack_require__(59)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(11)('wks');
	var uid = __webpack_require__(15);
	var Symbol = __webpack_require__(13).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var global = __webpack_require__(13);
	var hide = __webpack_require__(20);
	var Iterators = __webpack_require__(44);
	var TO_STRING_TAG = __webpack_require__(59)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(62);
	var step = __webpack_require__(63);
	var Iterators = __webpack_require__(44);
	var toIObject = __webpack_require__(50);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(42)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(59);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(12).Symbol;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(13);
	var has = __webpack_require__(9);
	var DESCRIPTORS = __webpack_require__(25);
	var $export = __webpack_require__(17);
	var redefine = __webpack_require__(43);
	var META = __webpack_require__(68).KEY;
	var $fails = __webpack_require__(26);
	var shared = __webpack_require__(11);
	var setToStringTag = __webpack_require__(58);
	var uid = __webpack_require__(15);
	var wks = __webpack_require__(59);
	var wksExt = __webpack_require__(64);
	var wksDefine = __webpack_require__(69);
	var enumKeys = __webpack_require__(70);
	var isArray = __webpack_require__(73);
	var anObject = __webpack_require__(22);
	var isObject = __webpack_require__(23);
	var toIObject = __webpack_require__(50);
	var toPrimitive = __webpack_require__(28);
	var createDesc = __webpack_require__(29);
	var _create = __webpack_require__(46);
	var gOPNExt = __webpack_require__(74);
	var $GOPD = __webpack_require__(76);
	var $DP = __webpack_require__(21);
	var $keys = __webpack_require__(48);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(14)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(15)('meta');
	var isObject = __webpack_require__(23);
	var has = __webpack_require__(9);
	var setDesc = __webpack_require__(21).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(26)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(13);
	var core = __webpack_require__(12);
	var LIBRARY = __webpack_require__(14);
	var wksExt = __webpack_require__(64);
	var defineProperty = __webpack_require__(21).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(48);
	var gOPS = __webpack_require__(71);
	var pIE = __webpack_require__(72);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(50);
	var gOPN = __webpack_require__(75).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(49);
	var hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(72);
	var createDesc = __webpack_require__(29);
	var toIObject = __webpack_require__(50);
	var toPrimitive = __webpack_require__(28);
	var has = __webpack_require__(9);
	var IE8_DOM_DEFINE = __webpack_require__(24);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('asyncIterator');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('observable');


/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(95); // iOS最新框架补丁
	__webpack_require__(96);

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Hetsdk iOS-patch v1.0.1
	 * Copyright: Shenzhen H&T Intelligent Control Co., Ltd.
	 * Date: 2016-11-31
	 */

	;(function () {
	    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.bindJavaScript && window.webkit.messageHandlers.bindJavaScript.postMessage) {
	        var callOC = function callOC(func, params) {
	            var url = 'func=' + func + ':';
	            for (var i = 0; i < params.length; i++) {
	                url = url + '&' + params[i].key + '=' + encodeURIComponent(params[i].value);
	            }
	            window.webkit.messageHandlers.bindJavaScript.postMessage(url);
	        };

	        window.bindJavaScript = {
	            config: function config(data) {
	                var data = [{ key: 'data', value: data }];
	                callOC('config', data);
	            },
	            send: function send(dataString, sucCallbackId, errCallbackId) {
	                var data = [{ key: 'data', value: dataString }, { key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }];
	                callOC('send', data);
	            },
	            setTitle: function setTitle(title) {
	                var data = [{ key: 'data', value: title }];
	                callOC('setTitle', data);
	            },
	            tips: function tips(msg) {
	                var data = [{ key: 'data', value: msg }];
	                callOC('tips', data);
	            },
	            h5SendDataToNative: function h5SendDataToNative(routeUrl, dataString, sucCallbackId, errCallbackId) {
	                var data = [{ key: 'routeUrl', value: routeUrl }, { key: 'data', value: dataString }, { key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }];
	                callOC('h5SendDataToNative', data);
	            },
	            h5GetDataFromNative: function h5GetDataFromNative(routeUrl, sucCallbackId, errCallbackId) {
	                var data = [{ key: 'routeUrl', value: routeUrl }, { key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }];
	                callOC('h5GetDataFromNative', data);
	            },
	            relProxyHttp: function relProxyHttp(path, dataString, type, sucCallbackId, errCallbackId, needSign) {
	                var data = [{ key: 'url', value: path }, { key: 'data', value: dataString }, { key: 'type', value: type }, { key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }, { key: 'needSign', value: needSign }];
	                callOC('relProxyHttp', data);
	            },
	            absProxyHttp: function absProxyHttp(path, dataString, type, sucCallbackId, errCallbackId) {
	                var data = [{ key: 'url', value: path }, { key: 'data', value: dataString }, { key: 'type', value: type }, { key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }];
	                callOC('absProxyHttp', data);
	            },
	            getDeviceInfo: function getDeviceInfo(sucCallbackId, errCallbackId) {
	                var data = [{ key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }];
	                callOC('getDeviceInfo', data);
	            },
	            getBLERealTimeData: function getBLERealTimeData(sucCallbackId, errCallbackId) {
	                var data = [{ key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }];
	                callOC('getBLERealTimeData', data);
	            },
	            getBLEHistoryData: function getBLEHistoryData(sucCallbackId, errCallbackId, progressCallbackId) {
	                var data = [{ key: 'sucCallbackId', value: sucCallbackId }, { key: 'errCallbackId', value: errCallbackId }, { key: 'progressCallbackId', value: progressCallbackId }];
	                callOC('getBLEHistoryData', data);
	            },
	            getAPPJSBridegeVersion: function getAPPJSBridegeVersion(jssdkversion, completeCallbackId) {
	                var data = [{ key: 'jssdkversion', value: jssdkversion }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('getAPPJSBridegeVersion', data);
	            },
	            getAPPLanguage: function getAPPLanguage(completeCallbackId) {
	                var data = [{ key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('getAPPLanguage', data);
	            },
	            onLoadH5Failed: function onLoadH5Failed(errCode, errMsg) {
	                var data = [{ key: 'errCode', value: errCode }, { key: 'errMsg', value: errMsg }];
	                callOC('onLoadH5Failed', data);
	            },
	            showToast: function showToast(title, icon, image, duration, mask, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'title', value: title }, { key: 'icon', value: icon }, { key: 'image', value: image }, { key: 'duration', value: duration }, { key: 'mask', value: mask }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('showToast', data);
	            },
	            hideToast: function hideToast() {
	                var data = [];
	                callOC('hideToast', data);
	            },
	            showAlertView: function showAlertView(title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'title', value: title }, { key: 'content', value: content }, { key: 'showCancel', value: showCancel }, { key: 'cancelText', value: cancelText }, { key: 'cancelColor', value: cancelColor }, { key: 'confirmText', value: confirmText }, { key: 'confirmColor', value: confirmColor }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('showAlertView', data);
	            },
	            showActionSheet: function showActionSheet(title, itemList, itemColor, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'title', value: title }, { key: 'itemList', value: itemList }, { key: 'itemColor', value: itemColor }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('showActionSheet', data);
	            },
	            setNavigationBarTitle: function setNavigationBarTitle(title, frontColor, backgroundColor, image, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'title', value: title }, { key: 'frontColor', value: frontColor }, { key: 'backgroundColor', value: backgroundColor }, { key: 'image', value: image }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('setNavigationBarTitle', data);
	            },
	            setNavigationBarButton: function setNavigationBarButton(colorStyle, rightButtonHide, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'colorStyle', value: colorStyle }, { key: 'rightButtonHide', value: rightButtonHide }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('setNavigationBarButton', data);
	            },
	            setNavigationBarLeftBarButtonItems: function setNavigationBarLeftBarButtonItems(itemList, successCallbackId, failCallbackId) {
	                var data = [{ key: 'itemList', value: itemList }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('setNavigationBarLeftBarButtonItems', data);
	            },
	            setNavigationBarRightBarButtonItems: function setNavigationBarRightBarButtonItems(itemList, successCallbackId, failCallbackId) {
	                var data = [{ key: 'itemList', value: itemList }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('setNavigationBarRightBarButtonItems', data);
	            },
	            setNavigationBarMenuItem: function setNavigationBarMenuItem(itemList, backgroundColor, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'itemList', value: itemList }, { key: 'backgroundColor', value: backgroundColor }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('setNavigationBarMenuItem', data);
	            },
	            getNetworkType: function getNetworkType(successCallbackId, failCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('getNetworkType', data);
	            },
	            onNetworkStatusChange: function onNetworkStatusChange(successCallbackId, failCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('onNetworkStatusChange', data);
	            },
	            getBLETimeData: function getBLETimeData(successCallbackId, failCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('getBLETimeData', data);
	            },
	            setBLETimeData: function setBLETimeData(successCallbackId, failCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('setBLETimeData', data);
	            },
	            getDeviceMcuUpgrade: function getDeviceMcuUpgrade(successCallbackId, failCallbackId, progressCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'progressCallbackId', value: progressCallbackId }];
	                callOC('getDeviceMcuUpgrade', data);
	            },
	            showShareActionSheet: function showShareActionSheet(title, content, images, url, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'title', value: title }, { key: 'content', value: content }, { key: 'images', value: images }, { key: 'url', value: url }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('showShareActionSheet', data);
	            },
	            userLocation: function userLocation(type, altitude, successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'type', value: type }, { key: 'altitude', value: altitude }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('userLocation', data);
	            },
	            onBluetoothAdapterStateChange: function onBluetoothAdapterStateChange(successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('onBluetoothAdapterStateChange', data);
	            },
	            getBluetoothAdapterState: function getBluetoothAdapterState(successCallbackId, failCallbackId, completeCallbackId) {
	                var data = [{ key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }, { key: 'completeCallbackId', value: completeCallbackId }];
	                callOC('getBluetoothAdapterState', data);
	            },
	            proxyHttpWithHet: function proxyHttpWithHet(host, path, paramJson, successCallbackId, failCallbackId) {
	                var data = [{ key: 'host', value: host }, { key: 'path', value: path }, { key: 'paramJson', value: paramJson }, { key: 'successCallbackId', value: successCallbackId }, { key: 'failCallbackId', value: failCallbackId }];
	                callOC('proxyHttpWithHet', data);
	            }
	        };
	    }
	})();

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(36);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(97);

	var _keys2 = _interopRequireDefault(_keys);

	var _stringify = __webpack_require__(100);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Hetsdk v2.0.1
	 * Copyright: Shenzhen H&T Intelligent Control Co., Ltd.
	 * Date: 2017-07-06
	 */

	window.het = function () {
	    'use strict';

	    var appInterfaceNS = 'bindJavaScript'; // app注入接口的命名空间
	    var webInterfaceNS = 'webInterface'; // web暴露给app调用接口的命名空间
	    function HET() {
	        // 默认配置
	        var settings = {
	            callbackExpire: 30000, // 回调函数超时时间，
	            torporTime: 5000, // 迟钝时间，当调用send方法之后，忽略所有在该时间内接收到的repaint请求
	            webDataMap: {}, // web <-> app数据映射表，缺省不映射
	            useUpdateFlag: false, // （该参数将弃用，为兼容旧版，暂时保留）是否自动添加updateFlag标记，缺省不添加
	            updateFlagMap: {}, // 配置updateFlag标记映射表，缺省为空
	            onceConfigData: true, // 只接受一次控制数据
	            renderConfigData: false, // 控制数据是否用于页面渲染，缺省不渲染
	            filter: {}, // 过滤器
	            company: 'het', // 公司名称
	            line: 'common', // 产品线名称
	            sdkVersion: '2.0.1', // sdk版本
	            nativeVersion: '', // app公共模块版本
	            language: 'zh_CN', //语言版本,简体中文:zh_CN,繁体中文:zh_TW，英文:en 。默认为zh_CN
	            debugMode: '' // 开启debug，缺省不开启，目前可选模式为print
	        };
	        var $this = this;
	        var __AppInterface = window[appInterfaceNS] || {}; // 接入APP接口
	        var readyFuncList = []; // 准备就绪后将执行的函数列表
	        var bleFuncList = []; // 接收到蓝牙状态更新后将执行的函数列表
	        var blePowerFuncList = []; //接收到蓝牙设备电量变化后将执行的函数列表
	        var repaintFuncList = []; // 响应repaint请求的函数列表

	        var updateRunDataFuncList = []; //响应updateRunData请求的函数列表
	        var updateControlDataFuncList = []; //响应updateControlData请求的函数列表
	        var updateErrorDataFuncList = []; //响应updateErrorData请求的函数列表
	        var updateConfigDataFuncList = []; //响应updateConfigData请求的函数列表
	        var updateOnOffStateFuncList = []; //响应updateOnOffState请求的函数列表

	        var nativeVersionFuncList = []; // 响应版本请求的函数列表
	        var languageFuncList = []; // 响应语言请求的函数列表
	        var bleStateDataFuncList = []; //接收到蓝牙设备状态数据变化后将执行的函数列表
	        var callbackList = {}; // 回调函数表
	        var defaultCallbackId = register(print, true); // 缺省回调ID
	        var appCommandData = {}; // app控制数据，send接口采用此格式发送数据
	        var appCommandTime = 0; // app控制数据计时器，配合settings.torporTime使用

	        var viewAppearList = [];
	        var viewDisAppearList = [];

	        /**
	         * 通知app开始初始化
	         * @param  {json}     options 配置信息及提交给app的初始化信息
	         * @return {Function}         返回值由app决定，该值为非必须值
	         */
	        $this.config = function (options) {
	            var data = {};
	            for (var k in options) {
	                if (typeof settings[k] !== 'undefined') {
	                    settings[k] = options[k]; // 检出本地配置信息
	                } else {
	                    data[k] = options[k]; // 非本地配置信息，发送至APP
	                }
	            }
	            data = (0, _stringify2.default)(data);
	            return typeof __AppInterface.config === 'function' && __AppInterface.config(data);
	        };

	        /**
	         * 通知app相关数据
	         * @param  {json}     options     数据设置
	         * @param  {function} sucCallback 可选，app处理成功时的回调函数
	         * @param  {function} errCallback 可选，app处理异常时的回调函数
	         */
	        $this.nativeConfig = function (options, sucCallback, errCallback) {
	            if (!options || !options.method || !options.data) return;
	            var company = options.company || settings.company || "het",
	                line = options.line || settings.line || "common",
	                routeUrl = company + "://h5/" + line + "/" + options.method,
	                data = options.data,
	                sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback); // 登记异常时的回调
	            for (var key in data) {
	                if (data.hasOwnProperty(key) && typeof data[key] === 'function') {
	                    data[key] = register(data[key], true); //检出回调函数进行登记
	                }
	            }
	            data = (0, _stringify2.default)(data);
	            return typeof __AppInterface.h5SendDataToNative === 'function' && __AppInterface.h5SendDataToNative(routeUrl, data, sucCallbackId, errCallbackId);
	        };

	        /**
	         * 从app获取相关数据
	         * @param  {json}     options     数据设置
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         */
	        $this.nativeData = function (options, sucCallback, errCallback) {
	            if (!options || !options.method) return;
	            var company = options.company || settings.company || "het",
	                line = options.line || settings.line || "common",
	                routeUrl = company + "://h5get/" + line + "/" + options.method,
	                sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback); // 登记异常时的回调
	            return typeof __AppInterface.h5GetDataFromNative === 'function' && __AppInterface.h5GetDataFromNative(routeUrl, sucCallbackId, errCallbackId);
	        };

	        /**
	         * 从app获取设备相关数据
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         */
	        $this.getDeviceInfo = function (sucCallback, errCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback); // 登记异常时的回调
	            return typeof __AppInterface.getDeviceInfo === 'function' && __AppInterface.getDeviceInfo(sucCallbackId, errCallbackId);
	        };

	        /**
	         * 从app获取蓝牙设备实时数据
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         */
	        $this.getBLERealTimeData = function (sucCallback, errCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback); // 登记异常时的回调
	            return typeof __AppInterface.getBLERealTimeData === 'function' && __AppInterface.getBLERealTimeData(sucCallbackId, errCallbackId);
	        };

	        /**
	         * 从app获取蓝牙设备时间
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         */
	        $this.getBLETimeData = function (sucCallback, errCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback); // 登记异常时的回调
	            return typeof __AppInterface.getBLETimeData === 'function' && __AppInterface.getBLETimeData(sucCallbackId, errCallbackId);
	        };

	        /**
	         * 通过app设置蓝牙设备时间
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         */
	        $this.setBLETimeData = function (sucCallback, errCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback); // 登记异常时的回调
	            return typeof __AppInterface.setBLETimeData === 'function' && __AppInterface.setBLETimeData(sucCallbackId, errCallbackId);
	        };

	        /**
	         * 从app获取蓝牙设备历史数据
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         * @param  {function} progressCallback 必填，app处理进度变更时的回调函数
	         */
	        $this.getBLEHistoryData = function (sucCallback, errCallback, progressCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback),
	                // 登记异常时的回调
	            progressCallbackId = register(progressCallback, true); // 登记进度变更时的回调
	            return typeof __AppInterface.getBLEHistoryData === 'function' && __AppInterface.getBLEHistoryData(sucCallbackId, errCallbackId, progressCallbackId);
	        };

	        /**
	         * 设备MCU升级
	         * @param  {function} sucCallback 必填，app处理成功时的回调函数
	         * @param  {function} errCallback 必填，app处理异常时的回调函数
	         * @param  {function} progressCallback 必填，app处理进度变更时的回调函数
	         */
	        $this.getDeviceMcuUpgrade = function (sucCallback, errCallback, progressCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            errCallbackId = register(errCallback),
	                // 登记异常时的回调
	            progressCallbackId = register(progressCallback, true); // 登记异常时的回调
	            return typeof __AppInterface.getDeviceMcuUpgrade === 'function' && __AppInterface.getDeviceMcuUpgrade(sucCallbackId, errCallbackId, progressCallbackId);
	        };

	        /**
	         * 从app获取公共模块版本号
	         * @param  {string} jssdkversion 选填，默认选用jssdk内置的版本号，格式要求x.x.x
	         */
	        $this.getAPPJSBridgeVersion = function (callback, jssdkversion) {
	            nativeVersionFuncList.push(register(callback));
	            return typeof __AppInterface.getAPPJSBridgeVersion === 'function' && __AppInterface.getAPPJSBridgeVersion(jssdkversion || settings.sdkVersion);
	        };

	        /**
	         * 从app获取用户语言设置
	         */
	        $this.getAPPLanguage = function (callback) {
	            languageFuncList.push(register(callback));
	            return typeof __AppInterface.getAPPLanguage === 'function' && __AppInterface.getAPPLanguage();
	        };

	        /**
	         * 发送错误报告给APP
	         * @param  {string} errCode 必填，错误码
	         * @param  {string} errMsg 必填，错误详情
	         */
	        $this.onLoadH5Failed = function (errCode, errMsg) {
	            return typeof __AppInterface.onLoadH5Failed === 'function' && __AppInterface.onLoadH5Failed(errCode, errMsg);
	        };

	        /**
	         * 准备就绪时将执行该方法登记的函数
	         * @param  {Function} callback 欲登记的回调函数
	         */
	        $this.ready = function (callback) {
	            readyFuncList.push(register(callback, true));
	        };

	        /**
	         * 蓝牙连接状态变更时将执行该方法登记的函数
	         * @param  {Function} callback 欲登记的回调函数
	         */
	        $this.listenBLEState = function (callback) {
	            bleFuncList.push(register(callback, true));
	        };

	        /**
	         * 蓝牙状态数据变更时将执行该方法登记的函数
	         * @param  {Function} callback 欲登记的回调函数
	         */
	        $this.listenBLEStateData = function (callback) {
	            bleStateDataFuncList.push(register(callback, true));
	        };

	        /**
	         * 蓝牙电量状态变更时将执行该方法登记的函数
	         * @param  {Function} callback 欲登记的回调函数
	         */
	        $this.listenBLEPower = function (callback) {
	            blePowerFuncList.push(register(callback, true));
	        };

	        /**
	         * 登记网页加载完成时调用的函数
	         * @param {Function} callback 欲登记的回调函数
	         */
	        $this.domReady = function (callback) {
	            document.addEventListener('DOMContentLoaded', callback);
	        };

	        /**
	         * 登记接收APP方repaint推送数据的函数
	         * @param  {Function} callback 回调函数
	         */
	        $this.repaint = function (callback) {
	            repaintFuncList.push(register(callback, true));
	        };

	        /**
	        * 登记接收APP方updataRunData推送数据的函数
	        * @param  {Function} callback 回调函数
	        */
	        $this.updateRunData = function (callback) {
	            updateRunDataFuncList.push(register(callback, true));
	        };
	        /**
	         * 登记接收APP方updataControlData推送数据的函数
	         * @param  {Function} callback 回调函数
	         */
	        $this.updateControlData = function (callback) {
	            updateControlDataFuncList.push(register(callback, true));
	        };
	        /**
	         * 登记接收APP方updataErrorData 推送数据的函数
	         * @param  {Function} callback 回调函数
	         */
	        $this.updateErrorData = function (callback) {
	            updateErrorDataFuncList.push(register(callback, true));
	        };
	        /**
	         * 登记接收APP方updataConfigData推送数据的函数
	         * @param  {Function} callback 回调函数
	         */
	        $this.updateConfigData = function (callback) {
	            updateConfigDataFuncList.push(register(callback, true));
	        };
	        /**
	        * 登记接收APP方updataOnOffState推送数据的函数
	        * @param  {Function} callback 回调函数
	        */
	        $this.updateOnOffState = function (callback) {
	            updateOnOffStateFuncList.push(register(callback, true));
	        };

	        /**
	         * 发送数据至app
	         * @param  {json}     data        要提交给app的数据，json格式
	         * @param  {function} sucCallback 可选，app处理成功时的回调函数
	         * @param  {function} errCallback 可选，app处理异常时的回调函数
	         * @return {Function}             返回值由app决定，该值为非必须值
	         */
	        $this.send = function (data, sucCallback, errCallback) {
	            if (typeof appCommandData.updateFlag !== 'undefined') {
	                appCommandData.updateFlag = 0; // updateFlag清零以便重新计算
	            }
	            var sucCallbackId = register(sucCallback); // 登记成功时的回调
	            var errCallbackId = register(errCallback); // 登记异常时的回调
	            var dataString = (0, _stringify2.default)(commandData(data, true)); // 把运行数据替换为控制数据发送
	            appCommandTime = +new Date(); // 重置控制数据计时器
	            if (settings.debugMode == 'print') {
	                print('send:', dataString);
	            }
	            return typeof __AppInterface.send === 'function' && dataString != '{}' && __AppInterface.send(dataString, sucCallbackId, errCallbackId);
	        };

	        /**
	         * 请求app代理get方式的http请求
	         * @param    {string}   url         请求地址
	         * @param    {json}     data        可选，发送的数据，要求json格式
	         * @param    {function} sucCallback 可选，成功时的回调函数
	         * @param    {function} errCallback 可选，失败时的回调函数
	         * @param    {integer}  needSign    可选，接口是否需要签名
	         */
	        $this.get = function (url, data, sucCallback, errCallback, needSign) {
	            proxyHttp(url, data, 'GET', sucCallback, errCallback, needSign);
	        };

	        /**
	         * 请求app代理post方式的http请求
	         * 参数说明同$this.get
	         */
	        $this.post = function (url, data, sucCallback, errCallback, needSign) {
	            proxyHttp(url, data, 'POST', sucCallback, errCallback, needSign);
	        };

	        /**
	         * 与控制数据进行对比
	         * @param    {json}   jsonData 接收格式形为：{key1:value1,key2:value2,...}
	         * @return   {json}            返回对比后的差集
	         */
	        $this.diff = function (jsonData) {
	            var data = webToAppData(jsonData);
	            var result = {};
	            for (var k in data) {
	                if (typeof appCommandData[k] !== 'undefined' && data[k] != appCommandData[k]) {
	                    result[k] = data[k];
	                }
	            }
	            return appToWebData(result);
	        };

	        /**
	         * 设置页面标题
	         * @param {string} title 标题
	         */
	        $this.setTitle = function (title) {
	            if (typeof __AppInterface.setTitle === 'function') {
	                __AppInterface.setTitle(title);
	            }
	            document.title = title;
	        };

	        /**
	         * 计算updateFlag值
	         * @param  {Integer} offset 偏移量（二进制位）
	         * @return {Integer}        返回十进制计算结果
	         */
	        $this.calcUpdateFlag = function (offset) {
	            return Math.pow(2, offset - 1);
	        };

	        /**
	         * 计算16进制updateFlag值
	         * @param    {integer}   index        功能位索引值
	         * @param    {integer}   length       功能字节长度
	         * @param    {integer}   upLength     upFlag字节长度
	         * @param    {string}    originUpFlag 可选，原始updateFlag值
	         * @return   {string}                 16进制字符串
	         */
	        $this.hexUpFlag = function (index, length, upLength, originUpFlag) {
	            var upHex = (originUpFlag || 0).toString(16).replace(/(?=\b\w\b)/, '0'); // 确保upFlag为16进制
	            var upArr = []; // 原始upFlag的decArray表达
	            var orBin = ''; // 用于或运算的二进制字符串
	            var orArr; // orBin的decArray表达
	            var reArr = []; // 计算结果的decArray表达
	            length = length || 1;
	            upLength = upLength || 4;
	            // 计算原始upFlag的decArray表达
	            for (var h = 0; h < upHex.length; h += 2) {
	                upArr.push(parseInt(upHex.substring(h, h + 2), 16));
	            }
	            // 移位
	            for (var i = 0; i < index; i++) {
	                orBin = '0' + orBin;
	            }
	            // 填1
	            for (var j = 0; j < length; j++) {
	                orBin = '1' + orBin;
	            }
	            orArr = bin2DecArray(orBin);
	            // 开始计算
	            for (var k = 0; k < upArr.length || k < orArr.length || k < upLength; k++) {
	                reArr.push((upArr[k] || 0) | (orArr[k] || 0));
	            }
	            return decArray2Hex(reArr);
	        };

	        /**
	         * 调用系统toast
	         * @param    {string}   msg 提示信息
	         * @return   {[type]}       返回值由app决定
	         */
	        $this.toast = function (msg) {
	            return typeof __AppInterface.tips === 'function' ? __AppInterface.tips(msg) : alert(msg);
	        };

	        /**
	         * 调用系统toast
	         * @param    {string}     title               必填，提示的内容
	         * @param    {string}     icon                选填，图标，有效值 "success", "loading"
	         * @param    {string}     image               选填，自定义图标的路径，image 的优先级高于 icon
	         * @param    {number}     duration            选填，提示的延迟时间，单位毫秒，默认：1500
	         * @param    {string}     mask                选填，是否显示透明蒙层，防止触摸穿透，默认：0
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.showToast = function (title, icon, image, duration, mask, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                completeCallbackId = register(completeCallback); // 登记异常时的回调
	            return typeof __AppInterface.showToast === 'function' ? __AppInterface.showToast(title, icon, image, duration || 1500, mask || 0, sucCallbackId, failCallbackId, completeCallbackId) : alert(title);
	        };

	        /*
	         * 隐藏系统toast
	         */
	        $this.hideToast = function () {
	            return typeof __AppInterface.hideToast === 'function' && __AppInterface.hideToast();
	        };

	        /**
	         * 调用native提供的alert/confirm
	         * @param    {string}     title               必填，提示的标题
	         * @param    {string}     content             必填，提示的内容
	         * @param    {string}     showCancel          选填，是否显示取消按钮，默认为 true
	         * @param    {string}     cancelText          选填，取消按钮的文字，默认为"取消"，最多 4 个字符
	         * @param    {string}     cancelColor         选填，取消按钮的文字颜色，默认为"#000000",16进制字符串表示
	         * @param    {string}     confirmText         选填，确定按钮的文字，默认为"确定"，最多 4 个字符
	         * @param    {string}     confirmColor        选填，确定按钮的文字颜色，默认为"#3CC51F"
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.showAlertView = function (title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.showAlertView === 'function' && __AppInterface.showAlertView(title, content, showCancel || true, cancelText || "取消", cancelColor || "#000000", confirmText || "确定", confirmColor || "#3CC51F", sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * H5分享接口
	         * @param    {string}     title               必填，提示的标题
	         * @param    {string}     content             必填，提示的内容
	         * @param    {string}     images              选填，分享的图片数组
	         * @param    {string}     url                 选填，分享的链接url
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        必填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    必填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.showShareActionSheet = function (title, content, images, url, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.showShareActionSheet === 'function' && __AppInterface.showShareActionSheet(title, content, images, url, sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * 调用系统操作菜单
	         * @param    {string}     title               必填，提示的标题
	         * @param    {array}      itemList            必填，按钮的文字数组，数组长度最大为6个
	         * @param    {string}     itemColor           选填，按钮的文字颜色，默认为"#000000"
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.showActionSheet = function (title, itemList, itemColor, sucCallback, failCallback, completeCallback) {
	            itemList = (0, _stringify2.default)(itemList);
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.showActionSheet === 'function' && __AppInterface.showActionSheet(title, itemList, itemColor || "#000000", sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * 设置导航栏标题与颜色
	         * @param    {string}     title               必填，标题
	         * @param    {string}     frontColor          必填，前景颜色值，包括按钮、标题、状态栏的颜色,有效值为十六进制颜色
	         * @param    {string}     backgroundColor     必填，背景颜色值，有效值为十六进制颜色
	         * @param    {string}     image               选填，图片路径
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.setNavigationBarTitle = function (title, frontColor, backgroundColor, image, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.setNavigationBarTitle === 'function' && __AppInterface.setNavigationBarTitle(title, frontColor, backgroundColor, image, sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * 设置导航栏按钮
	         * @param    {string}     colorStyle          必填，左右导航栏的样式颜色，0代表白色样式，1代表黑色样式
	         * @param    {string}     rightButtonHide     必填，导航栏右边按钮是否隐藏，0代表不隐藏，1代表隐藏
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.setNavigationBarButton = function (colorStyle, rightButtonHide, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.setNavigationBarButton === 'function' && __AppInterface.setNavigationBarButton(colorStyle, rightButtonHide, sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * 设置导航栏左边按钮
	         * @param    {array}      itemList            必填，按钮集合对象数组，最多两个按钮（按钮顺序是从左到右）,按钮元素参数{title: '按钮标题',image:'按钮图片路径',tintColor:'按钮字体颜色HexColor',backgroundColor:'按钮背景颜色HexColor'}
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         */
	        $this.setNavigationBarLeftBarButtonItems = function (itemList, sucCallback, failCallback) {
	            itemList = (0, _stringify2.default)(itemList);
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback); // 登记异常时的回调
	            return typeof __AppInterface.setNavigationBarLeftBarButtonItems === 'function' && __AppInterface.setNavigationBarLeftBarButtonItems(itemList, sucCallbackId, failCallbackId);
	        };

	        /**
	         * 设置导航栏右边按钮
	         * @param    {array}      itemList            必填，按钮集合对象数组，最多两个按钮（按钮顺序是从左到右）,按钮元素参数{title: '按钮标题',image:'按钮图片路径',tintColor:'按钮字体颜色HexColor',backgroundColor:'按钮背景颜色HexColor'}
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         */
	        $this.setNavigationBarRightBarButtonItems = function (itemList, sucCallback, failCallback) {
	            itemList = (0, _stringify2.default)(itemList);
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback); // 登记异常时的回调
	            return typeof __AppInterface.setNavigationBarRightBarButtonItems === 'function' && __AppInterface.setNavigationBarRightBarButtonItems(itemList, sucCallbackId, failCallbackId);
	        };

	        /**
	         * 设置导航栏菜单
	         * @param    {string}     itemList            必填，按钮集合对象数组，（按钮顺序是从上到下）,按钮元素参数{title: '标题',image:'图片路径',tintColor:'字体颜色HexColor',backgroundColor:'背景颜色HexColor'}
	         * @param    {string}     backgroundColor     必填，背景颜色值，有效值为十六进制颜色
	         * @param    {function}   sucCallback         选填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.setNavigationBarMenuItem = function (itemList, backgroundColor, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.setNavigationBarMenuItem === 'function' && __AppInterface.setNavigationBarMenuItem(itemList, backgroundColor, sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * 获取网络类型
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        必填，接口调用失败的回调函数
	         */
	        $this.getNetworkType = function (sucCallback, failCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback); // 登记失败时的回调
	            return typeof __AppInterface.getNetworkType === 'function' && __AppInterface.getNetworkType(sucCallbackId, failCallbackId);
	        };

	        /**
	         * 监听网络状态变化
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        必填，接口调用失败的回调函数
	         */
	        $this.onNetworkStatusChange = function (sucCallback, failCallback) {
	            var sucCallbackId = register(sucCallback, true),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback, true); // 登记失败时的回调
	            return typeof __AppInterface.onNetworkStatusChange === 'function' && __AppInterface.onNetworkStatusChange(sucCallbackId, failCallbackId);
	        };

	        /**
	         * 获取APP当前的地理位置信息
	         * @param    {String}     type                选填，默认为 wgs84 返回 GPS 坐标；gcj02 返回国测局坐标
	         * @param    {Boolean}    altitude            必填，传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        选填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.userLocation = function (type, altitude, sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.userLocation === 'function' && __AppInterface.userLocation(type, altitude, sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * 监听蓝牙适配器状态变化事件
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        必填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.onBluetoothAdapterStateChange = function (sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback, true),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback, true),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback, true); // 登记完成时的回调
	            return typeof __AppInterface.onBluetoothAdapterStateChange === 'function' && __AppInterface.onBluetoothAdapterStateChange(sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         *  获取当前蓝牙适配器状态
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        必填，接口调用失败的回调函数
	         * @param    {function}   completeCallback    选填，接口调用结束的回调函数（调用成功、失败都会执行）
	         */
	        $this.getBluetoothAdapterState = function (sucCallback, failCallback, completeCallback) {
	            var sucCallbackId = register(sucCallback),
	                // 登记成功时的回调
	            failCallbackId = register(failCallback),
	                // 登记异常时的回调
	            completeCallbackId = register(completeCallback); // 登记完成时的回调
	            return typeof __AppInterface.getBluetoothAdapterState === 'function' && __AppInterface.getBluetoothAdapterState(sucCallbackId, failCallbackId, completeCallbackId);
	        };

	        /**
	         * JS调用app端HTTP功能（带het业务）
	         * @param    {String}     host                必填，http请求地址
	         * @param    {String}     path                必填，http接口的path
	         * @param    {json}       paramJson           必填，配置http参数，以及http请求参数
	         * @param    {function}   sucCallback         必填，接口调用成功的回调函数
	         * @param    {function}   failCallback        必填，接口调用失败的回调函数
	         */
	        $this.proxyHttpWithHet = function (host, path, paramJson, sucCallback, failCallback) {
	            var sucessCallbackId = register(sucCallback, true),
	                // 登记成功时的回调
	            errorCallbackId = register(failCallback, true); // 登记异常时的回调
	            paramJson = typeof paramJson === 'string' ? paramJson : (0, _stringify2.default)(paramJson);
	            return typeof __AppInterface.proxyHttpWithHet === 'function' && __AppInterface.proxyHttpWithHet(host, path, paramJson, sucessCallbackId, errorCallbackId);
	        };

	        //  /**
	        //  * H5端调用业务线的终端自扩展的接口
	        //  * @param    {String}     funcnam             必填，接口名
	        //  * @param    {Array}      argarr              必填，接口需要传的参数键值对数组，可以为空数组[]， [{key:a,value:b},...]，a为参数名，b为参数值
	        //  * @param    {Array}      backfuncarr         选填，接口回调函数数组，[{key:a,value:b},...]，a为参数名（例如"sucessCallbackId"） b为回调函数（type===function）
	        //  */
	        // $this.selfExtendFunc = function(funcnam,argarr,backfuncarr) {
	        //     var iosurl = 'func=' + funcnam + ':',
	        //         androidargument = [];
	        //     for (var i=0; i<argarr.length; i++) {
	        //         var val = argarr[i].value;
	        //         iosurl = iosurl + '&' + argarr[i].key + '=' + encodeURIComponent(val);
	        //         androidargument.push(val);
	        //     }
	        //     if(backfuncarr){
	        //         for (var j=0; j<backfuncarr.length; j++) {
	        //             var backfuncid = register(backfuncarr[i].value,true);
	        //             iosurl = iosurl + '&' + backfuncarr[i].key + '=' + encodeURIComponent(backfuncid);
	        //             androidargument.push(backfuncid);
	        //         }
	        //     }
	        //     if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.bindJavaScript && window.webkit.messageHandlers.bindJavaScript.postMessage){
	        //         window.webkit.messageHandlers.bindJavaScript.postMessage(iosurl);
	        //     }else{
	        //         return typeof __AppInterface[""+funcnam] === 'function' &&
	        //         __AppInterface[""+funcnam].apply(__AppInterface,androidargument);
	        //     }
	        // }


	        /**
	         * H5端调用业务线的终端自扩展的接口
	         * @param    {String}     funcnam             必填，接口名
	         * @param    {Array}      argarr              必填，接口需要传的参数键值对数组，可以为空数组[]， [{a:b},...]，a为参数名，b为参数值
	         * @param    {Array}      backfuncarr         选填，接口回调函数数组
	            backfuncarr: [{
	                idnam:"sucessCallbackId"
	                func:function(){},
	                expire:"forever" /"60000" /不传该字段   （表示回调函数有效期：不传该字段默认值30000，30秒；"forever"表示永久有效不做回收；具体数字字符串表示自定义的有效期）
	            },
	            .
	            .
	        ]
	        */
	        // var argarr = [{"jumpNativePage":"..."}],
	        //     backfuncarr = [
	        //         {idnam:"successCallbackId",func:data=>{console.log("===>>>success, data: "+data);}},
	        //         {idnam:"errorCallbackId",func:data=>{console.log("===>>>fail, data: "+data);}}
	        //     ];
	        // het.selfExtendFunc('jumpNativePage',argarr,backfuncarr);


	        $this.selfExtendFunc = function (funcnam, argarr, backfuncarr) {
	            var iosurl = 'func=' + funcnam + ':',
	                androidargument = [];
	            for (var i = 0; i < argarr.length; i++) {
	                var obj = argarr[i];
	                var key = (0, _keys2.default)(obj)[0],
	                    val = obj[key];
	                iosurl = iosurl + '&' + key + '=' + encodeURIComponent(val);
	                androidargument.push(val);
	            }
	            if (backfuncarr) {
	                for (var j = 0; j < backfuncarr.length; j++) {
	                    var funcobj = backfuncarr[j];
	                    var func = funcobj.func,
	                        idnam = funcobj.idnam,
	                        funcid;
	                    if (funcobj.hasOwnProperty("expire")) {
	                        var expire = funcobj.expire;
	                        if (expire == "forever") {
	                            funcid = register(func, true);
	                        } else {
	                            funcid = register(func, false, expire);
	                        }
	                    } else {
	                        funcid = register(func);
	                    }
	                    iosurl = iosurl + '&' + idnam + '=' + encodeURIComponent(funcid);
	                    androidargument.push(funcid);
	                }
	            }
	            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.bindJavaScript && window.webkit.messageHandlers.bindJavaScript.postMessage) {
	                window.webkit.messageHandlers.bindJavaScript.postMessage(iosurl);
	            } else {
	                return typeof __AppInterface["" + funcnam] === 'function' && __AppInterface["" + funcnam].apply(__AppInterface, androidargument);
	            }
	        };

	        /**
	         * H5监听原⽣视图⽣命周期
	         * @param  {Function} callback 必填，欲登记的回调函数
	         * @param  {Number}   type     必填，1 原生视图显示  0 原生视图消失
	         */
	        $this.listenViewAppear = function (type, callback) {
	            if (type === 1) {
	                viewAppearList.push(register(callback, true));
	            } else if (type === 0) {
	                viewDisAppearList.push(register(callback, true));
	            } else {
	                alert("参数错误");
	            }
	        };
	        /**
	         * 执行 listenViewAppear 登记的函数
	         */
	        function execViewAppearList(type) {
	            if (type === 1) {
	                for (var i in viewAppearList) {
	                    execCallback(viewAppearList[i]);
	                }
	            } else {
	                for (var i in viewDisAppearList) {
	                    execCallback(viewDisAppearList[i]);
	                }
	            }
	            return true;
	        }
	        /**
	         * 登记回调函数，以供jssdk回调
	         * @param  {Function} callback 需要登记的回调函数
	         * @param  {boolean}  persist  可选，是否永久回调，缺省为false
	         * @param  {Integer}  expire   可选，指定临时回调有效期，以便回收，缺省为30秒
	         *                             注：该有效期用于回收从未被调用过的临时回调
	         * @return {string}            登记后返回一个唯一的ID
	         */
	        function register(callback, persist, expire) {
	            var timestamp = +new Date();
	            var id = 'CB_' + timestamp.toString().slice(5) + Math.floor(Math.random() * 10000);
	            if (typeof callback === 'function') {
	                persist = persist || false;
	                expire = typeof expire === 'undefined' ? settings.callbackExpire : expire;
	                callbackList[id] = {
	                    fun: callback,
	                    persist: persist,
	                    expire: persist ? 0 : timestamp + expire
	                };
	                return id;
	            } else {
	                return defaultCallbackId;
	            }
	        }

	        /**
	         * 执行回调函数
	         * @param  {string}   id   之前已通过register登记的回调函数id
	         * @param  {array}    args 参数数组
	         * @return {Function}      调用登记过的回调函数并返回结果
	         */
	        function execCallback(id, args) {
	            var result;
	            var timestamp = +new Date();
	            if ((0, _typeof3.default)(callbackList[id]) === 'object') {
	                if ((callbackList[id].persist ? true : callbackList[id].expire > timestamp) && typeof callbackList[id].fun === 'function') {
	                    result = callbackList[id].fun.apply(null, args);
	                } else {
	                    print('%cError: Callback Time-out', 'color:red');
	                }
	                delCallback(id); // 临时回调只调用一次
	            }
	            gc();
	            return result;
	        }

	        /**
	         * 执行$this.ready方法登记的函数
	         */
	        function execReadyFuncList(data) {
	            while (readyFuncList.length) {
	                execCallback(readyFuncList.shift(), [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.listenBLEState方法登记的函数
	         */
	        function execBLEStateFuncList(data) {
	            for (var i in bleFuncList) {
	                execCallback(bleFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.listenBLEStateData方法登记的函数
	         */
	        function execBLEStatusDataFuncList(data) {
	            for (var i in bleStateDataFuncList) {
	                execCallback(bleStateDataFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.listenBLEPower方法登记的函数
	         */
	        function execBLEPowerFuncList(data) {
	            for (var i in blePowerFuncList) {
	                execCallback(blePowerFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.repaint方法登记的函数
	         */
	        function execRepaintFuncList(type, data) {
	            type = typeof type !== 'undefined' ? parseInt(type) : 1; // 默认为运行数据
	            commandData(data); // 缓存控制数据
	            data = filter(type, data); // 过滤数据
	            // 若不渲染控制数据，或数据为空，则退出
	            if (type === 0 && !settings.renderConfigData || isEmpty(data)) {
	                return false;
	            }
	            for (var i in repaintFuncList) {
	                execCallback(repaintFuncList[i], [data, type]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.updataRunData方法登记的函数
	         */
	        function execUpdataRunDataFuncList(data) {
	            data = filter(1, data); // 过滤数据
	            if (typeof data.type !== 'undefined') {
	                delete data.type; //去掉数据的类型
	            }
	            if (isEmpty(data)) {
	                return false;
	            }
	            for (var i in updateRunDataFuncList) {
	                execCallback(updateRunDataFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.updataRunData方法登记的函数
	         */
	        function execUpdataControlDataFuncList(data) {
	            data = filter(0, data); // 过滤数据
	            if (typeof data.type !== 'undefined') {
	                delete data.type; //去掉数据的类型
	            }
	            if (isEmpty(data)) {
	                return false;
	            }
	            for (var i in updateControlDataFuncList) {
	                execCallback(updateControlDataFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.updataErrorData方法登记的函数
	         */
	        function execUpdataErrorDataFuncList(data) {
	            data = filter(1, data); // 过滤数据
	            if (typeof data.type !== 'undefined') {
	                delete data.type; //去掉数据的类型
	            }
	            if (isEmpty(data)) {
	                return false;
	            }
	            for (var i in updateErrorDataFuncList) {
	                execCallback(updateErrorDataFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.updataConfigData方法登记的函数
	         */
	        function execUpdataConfigDataFuncList(data) {
	            data = filter(1, data); // 过滤数据
	            if (typeof data.type !== 'undefined') {
	                delete data.type; //去掉数据的类型
	            }
	            if (isEmpty(data)) {
	                return false;
	            }
	            for (var i in updateConfigDataFuncList) {
	                execCallback(updateConfigDataFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 执行$this.updataOnOffStateData方法登记的函数
	         */
	        function execUpdataOnOffStateFuncList(data) {
	            data = filter(1, data); // 过滤数据
	            if (typeof data.type !== 'undefined') {
	                delete data.type; //去掉数据的类型
	            }
	            if (isEmpty(data)) {
	                return false;
	            }
	            for (var i in updateOnOffStateFuncList) {
	                execCallback(updateOnOffStateFuncList[i], [data]);
	            }
	            return true;
	        }

	        /**
	         * 删除登记过的临时回调函数
	         * @param  {string} id 登记的回调函数id
	         * @return {boolean}   删除永久回调函数将返回false
	         */
	        function delCallback(id) {
	            if (callbackList[id] && !callbackList[id].persist) {
	                return delete callbackList[id].fun && delete callbackList[id].persist && delete callbackList[id].expire && delete callbackList[id];
	            } else {
	                return false;
	            }
	        }

	        /**
	         * app代理发起http请求
	         * @param    {string}   url         请求地址
	         * @param    {json}     data        发送的数据，要求json格式
	         * @param    {string}   type        请求类型，GET / POST
	         * @param    {function} sucCallback 成功时的回调函数
	         * @param    {function} errCallback 失败时的回调函数
	         * @param    {integer}  needSign    接口是否需要签名，1-需要，0-不需要
	         */
	        function proxyHttp(url, data, type, sucCallback, errCallback, needSign) {
	            var isRelativePath = url.indexOf('/') === 0 ? true : false; // 仅当“/”开头时，做为相对地址发起请求
	            var requestData = makeHttpRequestData(data);
	            var sucCallbackId = register(sucCallback); // 登记成功时的回调
	            var errCallbackId = register(errCallback); // 登记异常时的回调
	            var dataString;
	            var path;
	            needSign = needSign ? 1 : 0; // 缺省为不需要签名
	            if (type === 'GET' && !isRelativePath) {
	                // GET方式请求需重新拼装url
	                path = packRequestUrl(url, requestData);
	                dataString = '{}';
	            } else {
	                path = url.replace(/\?.+$/, '');
	                dataString = packDataString(data, url);
	            }
	            if (isRelativePath && typeof __AppInterface.relProxyHttp === 'function') {
	                __AppInterface.relProxyHttp(path, dataString, type, sucCallbackId, errCallbackId, needSign);
	            } else if (typeof __AppInterface.absProxyHttp === 'function') {
	                __AppInterface.absProxyHttp(path, dataString, type, sucCallbackId, errCallbackId);
	            } else {
	                ajax(url, requestData, type, sucCallbackId, errCallbackId); // 无app代理，调用ajax执行请求
	            }
	        }

	        /**
	         * ajax请求函数
	         * @param    {string}   url         请求地址
	         * @param    {string}   data        发送的数据，格式为：name=张三&age=21
	         * @param    {string}   type        请求类型，GET / POST
	         * @param    {function} sucCallbackId 成功时的回调函数id
	         * @param    {function} errCallbackId 失败时的回调函数id
	         */
	        function ajax(url, data, type, sucCallbackId, errCallbackId) {
	            var xhr = new XMLHttpRequest();
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState === 4) {
	                    if (xhr.status === 200 || xhr.status === 304) {
	                        execCallback(sucCallbackId, [xhr.responseText]);
	                    } else {
	                        execCallback(errCallbackId, ['Request failed! Status code: ' + xhr.status]);
	                    }
	                }
	            };
	            xhr.open(type, url, true);
	            // xhr.withCredentials = true;
	            if (type === 'POST') {
	                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	            }
	            xhr.send(data);
	        }

	        /**
	         * 拼装get方式的url
	         * @param    {string}   url     请求地址
	         * @param    {string}   strData 要发送的数据，格式为：name=张三&age=21
	         * @return   {string}           拼接后的地址
	         */
	        function packRequestUrl(url, strData) {
	            var patt = /^([^\?#]+)(\?[^#]+)?(#.+)?$/;
	            var urls = patt.exec(url);
	            var path = urls[1];
	            var search = urls[2] ? '&' + urls[2].substring(1) : '';
	            var hash = urls[3] || '';
	            return path + '?' + strData + search + hash;
	        }

	        /**
	         * 检出url里的data数据，并拼装到data部分
	         * @param    {json}     data 现有json格式的data
	         * @param    {string}   url  可能含data的url
	         * @return   {string}        拼装后，并转化成string格式的data
	         */
	        function packDataString(data, url) {
	            var patt = /(?:\?|&)(\w+)=([^&]*)/g;
	            var mat;
	            while ((mat = patt.exec(url)) != null) {
	                data[mat[1]] = mat[2];
	            }
	            return (0, _stringify2.default)(data);
	        }

	        /**
	         * 转换json数据为http请求数据格式
	         * @param    {json}   data json格式的数据
	         * @return   {string}      返回http请求数据格式(形如：name=张三&age=21)
	         */
	        function makeHttpRequestData(data) {
	            var dataString = '';
	            for (var k in data) {
	                dataString += k + '=' + encodeURI(data[k]) + '&';
	            }
	            return dataString.slice(0, -1);
	        }

	        /**
	         * 筛查接收到的数据，以检出控制数据(type=0为控制数据)
	         * @param  {json} data 接收到的数据
	         * @return {json}      返回可直接使用的数据
	         */
	        function detectData(data) {
	            if (data.data) {
	                if (parseInt(data.type) === 0) {
	                    resetCommandData(data.data);
	                }
	                return appToWebData(data.data);
	            } else {
	                resetCommandData(data);
	                return appToWebData(data);
	            }
	        }

	        /**
	         * 重置/生成控制数据
	         * @param  {json} data 新的控制数据
	         */
	        function resetCommandData(data) {
	            var len = 0;
	            for (var i in appCommandData) {
	                len++;
	            }
	            if (!settings.onceConfigData || len <= 1) {
	                appCommandData = data;
	            }
	        }

	        /**
	         * 将要发送的数据转换成控制数据，以便发送
	         * @param  {json}    data           将要发送的数据
	         * @param  {boolean} calcUpdateFlag 是否计算updateFlag
	         * @return {json}                   返回可直接发送的控制数据
	         */
	        // function commandData(data, calcUpdateFlag) {
	        //     data = typeof data === 'string' ? JSON.parse(data) : data;
	        //     data = webToAppData(data);
	        //     var updateFlagMap = webToAppData(settings.updateFlagMap);
	        //     for (var k in appCommandData) {
	        //         if (typeof data[k] !== 'undefined' && appCommandData[k] !== data[k]) {
	        //             if (k === 'updateFlag' && typeof data[k] !== 'string') {
	        //                 appCommandData[k] |= data[k];
	        //             } else {
	        //                 appCommandData[k] = data[k];
	        //             }
	        //             if (calcUpdateFlag && updateFlagMap[k]) {
	        //                 appCommandData.updateFlag = appCommandData.updateFlag || 0; // 强制添加updateFlag
	        //                 appCommandData.updateFlag |= Math.pow(2, updateFlagMap[k] - 1);
	        //             }
	        //         }
	        //     }
	        //     // 添加updateFlag标记（已弃用，为兼容旧版，暂时保留）
	        //     if (settings.useUpdateFlag && typeof appCommandData.updateFlag === 'undefined') {
	        //         appCommandData.updateFlag = 0;
	        //     }
	        //     return appCommandData;
	        // }


	        /**  只返回用户发送的命令
	        * 将要发送的数据转换成控制数据，以便发送
	        * @param  {json}    data           将要发送的数据
	        * @param  {boolean} calcUpdateFlag 是否计算updateFlag
	        * @return {json}                   返回可直接发送的控制数据
	        */
	        function commandData(data, calcUpdateFlag) {
	            data = typeof data === 'string' ? JSON.parse(data) : data;
	            data = webToAppData(data);
	            var updateFlagMap = webToAppData(settings.updateFlagMap);
	            var deviceCommandData = {};
	            // 标记data是否包含updateflag
	            var commandContainerUpdateFlag = false;
	            for (var k in appCommandData) {
	                if (typeof data[k] !== 'undefined' && appCommandData[k] !== data[k]) {
	                    if (k === 'updateFlag' && typeof data[k] !== 'string') {
	                        appCommandData[k] |= data[k];
	                    } else {
	                        appCommandData[k] = data[k];
	                    }
	                    if (calcUpdateFlag && updateFlagMap[k]) {
	                        appCommandData.updateFlag = appCommandData.updateFlag || 0; // 强制添加updateFlag
	                        appCommandData.updateFlag |= Math.pow(2, updateFlagMap[k] - 1);
	                    }
	                }
	                if (typeof data[k] !== 'undefined') {
	                    deviceCommandData[k] = data[k];
	                }
	                if (k === 'updateFlag' && typeof data[k] !== 'undefined') {
	                    commandContainerUpdateFlag = true;
	                }
	            }
	            // 添加updateFlag标记（已弃用，为兼容旧版，暂时保留）
	            if (settings.useUpdateFlag && typeof appCommandData.updateFlag === 'undefined') {
	                appCommandData.updateFlag = 0;
	            }
	            // yunlong 2018.7.26
	            // 1、如果H5开发人员计算了updateflag，就发送全部控制字段+updateflag给原生SDK
	            // 2、如果H5开发人员不计算updateflag，就发送data包含的控制字段给原生SDK，由原生SDK计算updateflag
	            if (commandContainerUpdateFlag) {
	                return appCommandData;
	            } else {
	                return deviceCommandData;
	            }
	        }

	        /**
	         * 将Web端的数据格式映射成App端的数据格式
	         * @param  {json} data Web端提交的数据
	         * @return {json}      返回按App端数据格式重新封装的数据
	         */
	        function webToAppData(data, m) {
	            var rData = {};
	            m = m || settings.webDataMap;
	            for (var k in data) {
	                if (typeof m[k] !== 'undefined') {
	                    rData[m[k]] = data[k];
	                } else {
	                    rData[k] = data[k];
	                }
	            }
	            return rData;
	        }

	        /**
	         * 将App端的数据格式映射成Web端的数据格式
	         * @param  {json} data App端提交的数据
	         * @return {json}      返回按Web端数据格式重新封装的数据
	         */
	        function appToWebData(data) {
	            var oldMap = settings.webDataMap;
	            var revMap = {};
	            for (var i in oldMap) {
	                revMap[oldMap[i]] = i;
	            }
	            return webToAppData(data, revMap);
	        }

	        /**
	         * 根据过滤配置进行数据过滤
	         * @param    {integer}   type 数据类型（控制/运行）
	         * @param    {object}    data 将处理的数据
	         * @return   {object}         处理完成的数据
	         */
	        function filter(type, data) {
	            for (var k in settings.filter) {
	                try {
	                    switch (settings.filter[k]) {
	                        case 0:
	                            // 只取控制数据
	                            if (type !== 0) {
	                                delete data[k];
	                            }
	                            break;
	                        case 1:
	                            // 只取运行数据
	                            if (type !== 1) {
	                                delete data[k];
	                            }
	                            break;
	                        default:
	                            if (!settings.filter[k](type, data)) {
	                                delete data[k];
	                            }
	                    }
	                } catch (err) {
	                    // console.log(err);
	                }
	            }
	            return data;
	        }

	        /**
	         * 垃圾回收函数，目前主要用于回收登记的临时回调函数
	         * @return {boolean} 发生异常时返回false
	         */
	        function gc() {
	            var timestamp = +new Date();
	            try {
	                for (var id in callbackList) {
	                    if (!callbackList[id].persist && callbackList[id].expire < timestamp) {
	                        delete callbackList[id].fun;
	                    }
	                }
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }

	        /**
	         * 二进制字符串转为10进制数组
	         * @param    {string}   binString 二进制字符串
	         * @return   {array}              以字节为单位的10进制数组
	         */
	        function bin2DecArray(binString) {
	            var arr = [],
	                matt = /^(\d*)(\d{8})$|^\d{1,7}$/,
	                str = binString.replace(/[^01]/g, '');
	            while (str.length) {
	                str = str.replace(matt, pd);
	            }

	            function pd(a, b, c) {
	                var dec = parseInt(typeof c === 'undefined' ? a : c, 2);
	                arr.push(dec);
	                return typeof b !== 'undefined' ? b : '';
	            }
	            return arr;
	        }

	        /**
	         * 10进制数组转为16进制字符串
	         * @param    {array}   decArr 以字节为单位的10进制数组
	         * @return   {string}         16进制字符串
	         */
	        function decArray2Hex(decArr) {
	            var hex = '';
	            for (var i = 0; i < decArr.length; i++) {
	                hex += decArr[i].toString(16).replace(/(?=\b\w\b)/, '0');
	            }
	            return hex;
	        }

	        /**
	         * 判断对象是否为空
	         * @param    {object}   obj 对象或数组
	         * @return   {Boolean}      为空返回true
	         */
	        function isEmpty(obj) {
	            var n = 0;
	            if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
	                return false;
	            }
	            for (var i in obj) {
	                n++;
	            }
	            return !n;
	        }

	        /**
	         * 打印日志，调用console.log方法
	         */
	        function print() {
	            var d = new Date(),
	                t = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + d.getMilliseconds()).replace(/(?=\b\d\b)|(?=\b\d\d$)/g, '0'),
	                args = [].slice.call(arguments);
	            if (!/%c/.test(args[0])) {
	                [].splice.call(args, 0, 0, '[' + t + ']');
	            }
	            if (typeof console !== 'undefined') {
	                console.log.apply(console, args);
	            }
	        }

	        /**
	         * 通用回调方法
	         */
	        function commonExec(data, callbackId) {
	            return execCallback(callbackId, Array.prototype.slice.call(arguments, 0, -1));
	        }

	        /**
	         * 供app调用的接口
	         * .ready   {function} app准备就绪时调用该方法，交互由$this.config发起
	         * .success {function} app处理成功时调用该方法，交互由$this.send发起
	         * .error   {function} app处理异常时调用该方法，交互由$this.send发起
	         * .httpResponse {function} app代理http请求响应时调用该方法，交互由$this.get或$this.post发起
	         * .repaint {function} app单方向推送消息给web时调用该方法
	         */
	        var web = {
	            ready: function ready(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                return execReadyFuncList(data);
	            },
	            success: function success(data, callbackId) {
	                appCommandTime = 0; // 解除迟钝时间
	                data = !data ? data : typeof data === 'string' ? JSON.parse(data) : data;
	                return execCallback(callbackId, Array.prototype.slice.call(arguments, 0, -1));
	            },
	            error: commonExec,
	            httpResponseSuccess: commonExec,
	            httpResponseError: commonExec,
	            nativeResponse: commonExec,
	            repaint: function repaint(data, defaultType) {
	                if (settings.debugMode == 'print') {
	                    print('repaint:', typeof data === 'string' ? data : (0, _stringify2.default)(data));
	                }
	                // alert(typeof data === "string" ? data : JSON.stringify(data));
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                if (+new Date() - appCommandTime < settings.torporTime) {
	                    // 请求发生在迟钝时间内，忽略该请求！
	                    print('%cWarning: torpid time', 'color:#5f3e05');
	                    return false;
	                }
	                switch (defaultType) {
	                    case 'run':
	                        execUpdataRunDataFuncList(detectData(data));
	                        break;
	                    case 'control':
	                        execUpdataControlDataFuncList(detectData(data));
	                        break;
	                    case 'error':
	                        execUpdataErrorDataFuncList(detectData(data));
	                        break;
	                    case 'config':
	                        execUpdataConfigDataFuncList(detectData(data));
	                        break;
	                    case 'onOffState':
	                        execUpdataOnOffStateFuncList(detectData(data));
	                        break;
	                }

	                return execRepaintFuncList(data.type, detectData(data));
	            },
	            updataRunData: function updataRunData(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                data.type = 1;
	                web.repaint(data, 'run');
	            },
	            updataControlData: function updataControlData(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                data.type = 0;
	                web.repaint(data, 'control');
	            },
	            updataErrorData: function updataErrorData(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                data.type = 1;
	                web.repaint(data, 'error');
	            },
	            updataConfigData: function updataConfigData(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                data.type = 1;
	                web.repaint(data, 'config');
	            },
	            updataOnOffState: function updataOnOffState(data) {
	                var obj = {};
	                obj.type = 1;
	                obj.data = { onlineStatus: data };
	                web.repaint(obj, 'onOffState');
	            },
	            getDeviceInfoResponse: commonExec,
	            getBLERealTimeDataResponse: commonExec,
	            getBLEHistoryDataResponse: commonExec,
	            sendBLEStateType: function sendBLEStateType(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                return execBLEStateFuncList(data);
	            },
	            sendBLEPower: function sendBLEPower(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                return execBLEPowerFuncList(data);
	            },
	            sendAPPJSBridgeVersion: function sendAPPJSBridgeVersion(data) {
	                while (nativeVersionFuncList.length) {
	                    execCallback(nativeVersionFuncList.shift(), [data]);
	                }
	            },
	            sendAPPLanguage: function sendAPPLanguage(data) {
	                while (languageFuncList.length) {
	                    execCallback(languageFuncList.shift(), [data || window.navigator.language]);
	                }
	            },
	            showToastResponse: commonExec,
	            showAlertViewResponse: commonExec,
	            showActionSheetResponse: commonExec,
	            setNavigationBarTitleResponse: commonExec,
	            setNavigationBarButtonResponse: commonExec,
	            setNavigationBarLeftBarButtonItemsResponse: commonExec,
	            setNavigationBarRightBarButtonItemsResponse: commonExec,
	            setNavigationBarMenuItemResponse: commonExec,
	            getNetworkTypeResponse: commonExec,
	            onNetworkStatusChangeResponse: commonExec,
	            getBLETimeDataResponse: commonExec,
	            setBLETimeDataResponse: commonExec,
	            getDeviceMcuUpgradeResponse: commonExec,
	            showShareActionSheetResponse: commonExec,
	            userLocationResponse: commonExec,
	            onBluetoothAdapterStateChangeResponse: commonExec,
	            getBluetoothAdapterStateResponse: commonExec,
	            proxyHttpWithHetResponse: commonExec,
	            sendBLEStatusData: function sendBLEStatusData(data) {
	                data = typeof data === 'string' ? JSON.parse(data) : data;
	                return execBLEStatusDataFuncList(data);
	            },
	            selfExtendFuncResponse: commonExec,
	            viewAppear: function viewAppear() {
	                return execViewAppearList(1);
	            },
	            viewDisAppear: function viewDisAppear() {
	                return execViewAppearList(0);
	            }

	        };
	        window[webInterfaceNS] = web; // 暴露web接口给app调用
	    }
	    return new HET();
	}();

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(99);
	module.exports = __webpack_require__(12).Object.keys;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6);
	var $keys = __webpack_require__(48);

	__webpack_require__(16)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(12);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ })
/******/ ]);