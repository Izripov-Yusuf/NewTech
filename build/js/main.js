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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ "./source/js/modules/burger-menu.js");
/* harmony import */ var _modules_sticky_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sticky-header */ "./source/js/modules/sticky-header.js");
/* harmony import */ var _modules_product_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/product-slider */ "./source/js/modules/product-slider.js");
/* harmony import */ var _modules_workings_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/workings-text */ "./source/js/modules/workings-text.js");




Object(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_sticky_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_product_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_workings_text__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./source/js/modules/burger-menu.js":
/*!******************************************!*\
  !*** ./source/js/modules/burger-menu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var burger = document.querySelector('.header-burger'),
      headerMobile = document.querySelector('.header--mobile'),
      headerClose = document.querySelector('.header--mobile-close');
  burger.addEventListener('click', function () {
    headerMobile.classList.add('header--mobile-active');
  });
  headerClose.addEventListener('click', function () {
    headerMobile.classList.remove('header--mobile-active');
  });
});

/***/ }),

/***/ "./source/js/modules/product-slider.js":
/*!*********************************************!*\
  !*** ./source/js/modules/product-slider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* import Slick from '../lib/slick.min.js'; */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.slider-for').slick({
    asNavFor: '.slider-nav',
    arrows: false
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 0,
    nextArrow: $('.slider-button-next'),
    prevArrow: $('.slider-button-prev'),
    asNavFor: '.slider-for',
    dots: true,
    appendDots: $('.slider-pagination'),
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.video-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    centerPadding: 0,
    nextArrow: $('.video-slider-next'),
    prevArrow: $('.video-slider-prev'),
    dots: false,
    centerMode: true //focusOnSelect: true,

  });
});

/***/ }),

/***/ "./source/js/modules/sticky-header.js":
/*!********************************************!*\
  !*** ./source/js/modules/sticky-header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var header = document.querySelector('.header');

  var stickyHeader = function stickyHeader() {
    if (window.pageYOffset > 10) {
      header.classList.add('header--sticky');
    }

    if (window.pageYOffset < 10) {
      header.classList.remove('header--sticky');
    }
  };

  window.addEventListener('scroll', stickyHeader);
});

/***/ }),

/***/ "./source/js/modules/workings-text.js":
/*!********************************************!*\
  !*** ./source/js/modules/workings-text.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var workingsText = document.querySelectorAll('.workings-text'),
      workingsWrap = document.querySelector('.workings-wrap');
  workingsWrap.addEventListener('click', function (event) {
    var target = event.target;
    target = target.closest('.workings-text');

    if (target) {
      if (target.classList.contains('workings-text-active')) {
        target.classList.remove('workings-text-active');
      } else {
        for (var i = 0; i < workingsText.length; i++) {
          if (target === workingsText[i]) {
            workingsText[i].classList.add('workings-text-active');
          } else {
            workingsText[i].classList.remove('workings-text-active');
          }
        }
      }
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map