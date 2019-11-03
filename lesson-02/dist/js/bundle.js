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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/employers.js":
/*!**************************!*\
  !*** ./src/employers.js ***!
  \**************************/
/*! exports provided: employersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employersNames", function() { return employersNames; });
// Массивы равно как и объекты обычно определяются константами, поскольку их содержимое можно менять даже в этом случае
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (name) {
  return name;
}).map(function (name) {
  return name.toLowerCase().trim();
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers */ "./src/employers.js");
/* harmony import */ var _sponsors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors */ "./src/sponsors.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Business =
/*#__PURE__*/
function () {
  _createClass(Business, [{
    key: "owner",
    get: function get() {
      return this._owner;
    },
    set: function set(value) {
      this._owner = value;
    }
  }, {
    key: "director",
    get: function get() {
      return this._director || 'Victor';
    },
    set: function set(value) {
      this._director = value;
    }
  }, {
    key: "capital",
    get: function get() {
      return this._capital;
    },
    set: function set(value) {
      this._capital = value;
    }
  }, {
    key: "employers",
    get: function get() {
      return this._employers;
    },
    set: function set(value) {
      this._employers = value;
    }
  }]);

  function Business(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
    var capital = arguments.length > 2 ? arguments[2] : undefined;
    var employers = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Business);

    this._owner = owner;
    this._director = director;
    this._capital = capital;
    this._employers = employers;
  }

  _createClass(Business, [{
    key: "getInfo",
    value: function getInfo() {
      var _sponsors$eu = _slicedToArray(_sponsors__WEBPACK_IMPORTED_MODULE_1__["sponsors"].eu, 1),
          riskedSponsor = _sponsors$eu[0];

      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(_sponsors__WEBPACK_IMPORTED_MODULE_1__["sponsors"].calcCash(this.capital), ". \nAnd our employers: ").concat(this.employers, "\nAnd we have a sponsors: ").concat(_sponsors__WEBPACK_IMPORTED_MODULE_1__["sponsors"].sumSponsors('unexpected sponsor'), "\nNote. Be careful with ").concat(riskedSponsor, ". It's a huge risk."));
    }
  }]);

  return Business;
}();

var myBusiness = new Business('Sam', null, null, _employers__WEBPACK_IMPORTED_MODULE_0__["employersNames"]);
myBusiness.getInfo();

/***/ }),

/***/ "./src/sponsors.js":
/*!*************************!*\
  !*** ./src/sponsors.js ***!
  \*************************/
/*! exports provided: sponsors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sponsors", function() { return sponsors; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
  calcCash: function calcCash() {
    var ownCapital = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    // делаем проверку на мусор в ownCapital
    ownCapital = parseFloat(ownCapital);

    if (isNaN(ownCapital)) {
      ownCapital = 0;
    }

    return ownCapital + this.cash.reduce(function (prev, value) {
      return prev + value;
    });
  },
  sumSponsors: function sumSponsors() {
    for (var _len = arguments.length, additionalSponsors = new Array(_len), _key = 0; _key < _len; _key++) {
      additionalSponsors[_key] = arguments[_key];
    }

    return [].concat(_toConsumableArray(this.eu), _toConsumableArray(this.rus), additionalSponsors);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map