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
/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ "./source/js/modules/maskPhone.js");
/* harmony import */ var _modules_smoothScrollToBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/smoothScrollToBlock */ "./source/js/modules/smoothScrollToBlock.js");






Object(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_sticky_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_product_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_workings_text__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_smoothScrollToBlock__WEBPACK_IMPORTED_MODULE_5__["default"])();

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

/***/ "./source/js/modules/maskPhone.js":
/*!****************************************!*\
  !*** ./source/js/modules/maskPhone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var maskPhone = function maskPhone() {
  function maskPhoneFunc(selector) {
    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';
    var elem = document.querySelector(selector);

    function mask(event) {
      var keyCode = event.keyCode;
      var template = masked,
          def = template.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      var i = 0,
          newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf("_");

      if (i != -1) {
        newValue = newValue.slice(0, i);
      }

      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");

      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }

      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

  maskPhoneFunc('#tel');
  /* const inputValidation = () => {
    const body = document.querySelector('body');
    body.addEventListener('input', (event) => {
      let target = event.target;
      if (target.matches('input[name="name"]')) {
        target.value = target.value.replace(/[^а-яА-Я,.!?"';: ]/, '');
      }
    });
  };
  inputValidation(); */
};

/* harmony default export */ __webpack_exports__["default"] = (maskPhone);

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
      breakpoint: 1030,
      settings: {
        slidesToShow: 1,
        centerMode: false
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
  $('#contact-form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      usertel: {
        required: true
      },
      useremail: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        maxlength: jQuery.validator.format("Не больше 15 символов"),
        minlength: jQuery.validator.format("Осталось символов: {0}")
      },
      usertel: {
        required: "Заполните поле"
      },
      useremail: {
        required: "Заполните поле",
        email: "Неправильный формат email"
      }
    }
  });
});

/***/ }),

/***/ "./source/js/modules/smoothScrollToBlock.js":
/*!**************************************************!*\
  !*** ./source/js/modules/smoothScrollToBlock.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Плавное перемещение по якорям
var smoothScrollToBlock = function smoothScrollToBlock() {
  var menuAnchors = document.querySelectorAll('a[href^="#"]');

  var _iterator = _createForOfIteratorHelper(menuAnchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        var blockId = anchor.getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (smoothScrollToBlock);

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
  var workingsWrap = document.querySelector('.workings-wrap'),
      workingsItem = workingsWrap.querySelectorAll('.workings-item');
  workingsWrap.addEventListener('click', function (event) {
    var target = event.target;
    target = target.closest('.workings-item');

    if (target) {
      if (target.classList.contains('workings-item-active')) {
        target.classList.remove('workings-item-active');
      } else {
        for (var i = 0; i < workingsItem.length; i++) {
          if (target === workingsItem[i]) {
            workingsItem[i].classList.add('workings-item-active');
          } else {
            workingsItem[i].classList.remove('workings-item-active');
          }
        }
      }
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map