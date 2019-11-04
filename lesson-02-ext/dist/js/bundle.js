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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lesson-02-ext/src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lesson-02-ext/src/employers.mjs":
/*!*****************************************!*\
  !*** ./lesson-02-ext/src/employers.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Employers; });
// Массивы равно как и объекты обычно определяются константами, поскольку их содержимое можно менять даже в этом случае

class Employers {
  constructor(employers) {
    this.employers = employers
  }

  getNames() {
    return employers.filter(name => name).map(name => name.toLowerCase().trim());
  }
}


/***/ }),

/***/ "./lesson-02-ext/src/index.mjs":
/*!*************************************!*\
  !*** ./lesson-02-ext/src/index.mjs ***!
  \*************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers.mjs */ "./lesson-02-ext/src/employers.mjs");
/* harmony import */ var _sponsors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors.mjs */ "./lesson-02-ext/src/sponsors.mjs");



const employers = new _employers_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
const {cash, eu, rus} = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
const sponsors = new _sponsors_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](cash, eu, rus);


class Business {

  get owner() {
    return this._owner;
  }

  set owner(value) {
    this._owner = value;
  }

  get director() {
    return this._director || 'Victor';
  }

  set director(value) {
    this._director = value;
  }

  get capital() {
    return this._capital;
  }

  set capital(value) {
    this._capital = value;
  }

  get employers() {
    return this._employers;
  }

  set employers(value) {
    this._employers = value;
  }

  constructor(owner, director = 'Victor', capital, employers) {
    this._owner = owner;
    this._director = director;
    this._capital = capital;
    this._employers = employers;
  }

  getInfo() {
    const {
      eu: [riskedSponsor]
    } = sponsors;

    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${sponsors.calcCash(this.capital)}. 
And our employers: ${this.employers}
And we have a sponsors: ${sponsors.sumSponsors('unexpected sponsor')}
Note. Be careful with ${riskedSponsor}. It's a huge risk.`);
  }
}

const myBusiness = new Business('Sam', null, null, employers);
myBusiness.getInfo();


/***/ }),

/***/ "./lesson-02-ext/src/sponsors.mjs":
/*!****************************************!*\
  !*** ./lesson-02-ext/src/sponsors.mjs ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sponsors; });
class Sponsors {

  constructor(cash, eu, rus) {
    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }

  calcCash(ownCapital = 0) {

    // делаем проверку на мусор в ownCapital
    ownCapital = parseFloat(ownCapital);
    if (isNaN(ownCapital)) {
      ownCapital = 0;
    }

    return ownCapital + this.cash.reduce((prev, value) => prev + value);
  }

  sumSponsors(...additionalSponsors) {
    return [...this.eu, ...this.rus, ...additionalSponsors];
  }
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map