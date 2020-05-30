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
/* harmony import */ var _modules_arrowUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/arrowUp */ "./source/js/modules/arrowUp.js");







Object(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_sticky_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_product_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_workings_text__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_smoothScrollToBlock__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_arrowUp__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ }),

/***/ "./source/js/modules/arrowUp.js":
/*!**************************************!*\
  !*** ./source/js/modules/arrowUp.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var upArrow = document.querySelector('.top');

  if (upArrow) {
    upArrow.style.display = 'none';

    var scrollToNext = function scrollToNext() {
      if (window.pageYOffset > 100) {
        upArrow.style.display = 'block';
      } else if (window.pageYOffset < 100) {
        upArrow.style.display = 'none';
      }
    };

    scrollToNext();
    window.addEventListener('scroll', scrollToNext);
  }
});

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
      headerClose = document.querySelector('.header--mobile-close'),
      headerMobileLinks = headerMobile.querySelectorAll('a'),
      body = document.querySelector('body');

  var handlerMenu = function handlerMenu() {
    headerMobile.classList.toggle('header--mobile-active');
  };

  var scrollToBlock = function scrollToBlock(index) {
    for (var i = 0; i < headerMobileLinks.length; i++) {
      if (index === i) {
        handlerMenu();
      }
    }
  };

  body.addEventListener('click', function (event) {
    var target = event.target,
        parent = target.parentNode;

    if (target === burger || parent.classList.contains('burger')) {
      handlerMenu();
    }

    if (target === headerClose) {
      handlerMenu();
    } else if (parent.tagName === 'LI') {
      headerMobileLinks.forEach(function (item, i) {
        if (item === target) {
          scrollToBlock(i);
        }
      });
    }
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
    centerMode: true,
    adaptiveHeight: true //focusOnSelect: true,

  });
  var modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal-block__close');
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
    },
    submitHandler: function submitHandler() {
      event.preventDefault();
      modal.classList.add('modal--active');
      modal.addEventListener('click', function (event) {
        var target = event.target;

        if (target.classList.contains('modal-block__close') || target.classList.contains('modal--active')) {
          modal.classList.remove('modal--active');
        }
      });
      setTimeout(function () {
        modal.classList.remove('modal--active');
      }, 5000);
      $('#contact-form').trigger("reset");
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
// Плавное перемещение по якорям
var smoothScrollToBlock = function smoothScrollToBlock() {
  /* const menuAnchors = document.querySelectorAll('a[href^="#"]');
    for (let anchor of menuAnchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  } */
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 130
    }, 800);
  });
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
  var workingsWrap = document.querySelector('.workings-wrap');

  if (workingsWrap) {
    var workingsItem = workingsWrap.querySelectorAll('.workings-item');
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
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map