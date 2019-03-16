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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/js/luna.app.js":
/*!**********************************!*\
  !*** ./Framework/js/luna.app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use stric';

  $(document).Luna({
    spyscroll: {
      trigger: ".scrollspy",
      offset: 0,
      activeClass: "list__item--active"
    }
  });
})();

/***/ }),

/***/ "./Framework/js/luna.js":
/*!******************************!*\
  !*** ./Framework/js/luna.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}

    F.prototype = obj;
    return new F();
  };
}

(function ($, window, document, undefined) {
  'use strict';

  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
    /* function */
    callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  window.cancelAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  var Luna = {
    init: function init(settings, element) {
      var self = this;
      self.element = element;
      self.$element = $(element);
      self.settings = $.extend({}, settings, $.fn.Luna.settings);
      self.menu();
      self.notification();
      self.scrollUp();
      self.scrollPosition();
      self.dropdown();
      self.spyscroll(); // self.modal();

      self.accordian();
    },
    menu: function menu() {
      var resizeWindow,
          mm = this.settings.nav.mobileMenu,
          speed = this.settings.nav.speed,
          nav = $('.nav');
      nav.on('click', '.nav__navicon', function () {
        var $self = $(this),
            $nav = $self.parents('.nav'),
            $wrapperLink = $nav.find('.nav__links__wrapper'),
            sub = $('.submenu-button');
        $wrapperLink.slideToggle(speed, function () {
          $(this).toggleClass('nav__links__wrapper--open').css('display', '');
        });

        if (sub.hasClass('is-open')) {
          sub.removeClass('is-open').siblings('ul.nav__links').css('display', '');
        }
      }); /// click to open menu

      nav.find(".nav__links__item--dropdown").prepend('<span class="submenu-button"></span>');

      resizeWindow = function resizeWindow(settings) {
        var mediasize = mm,
            ww = $(document).outerWidth(),
            navWrapper = $('.nav__links__wrapper'),
            sub = $('.submenu-button');

        if (ww >= mediasize) {
          navWrapper.removeClass('nav__links__wrapper--open').css('display', '');

          if (sub.hasClass('is-open')) {
            sub.removeClass('is-open').siblings('ul.nav__links').css('display', '');
          }
        }
      };

      nav.find(".submenu-button").on('click', function () {
        $(this).toggleClass('is-open').siblings('ul.nav__links').slideToggle(100);
      });
      resizeWindow();
      return $(window).on('resize', resizeWindow);
    },
    spyscroll: function spyscroll() {
      var el = this.settings.spyscroll.trigger;
      var $offset = this.settings.spyscroll.offset;
      var $active = this.settings.spyscroll.activeClass;
      $(window).bind('scroll', function () {
        var currentTop = $(window).scrollTop();
        var elems = $(el);
        elems.each(function (index) {
          var elemTop = $(this).offset().top - $offset;
          var elemBottom = elemTop + $(this).height();

          if (currentTop >= elemTop && currentTop <= elemBottom) {
            var id = $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            navElem.parent().addClass($active).siblings().removeClass($active);
          }
        });
      });
    },
    accordian: function accordian() {
      var accordian = $('.accordian');
      var acc_speed = this.settings.accordian.speed;
      var callback = this.settings.accordian.callback;
      var easing = this.settings.accordian.easing;
      accordian.each(function (i, elem) {
        $(elem).find('.accordian__header').on('click', function () {
          if ($(this).siblings('.accordian__body').css('display') == 'block') {
            $(this).removeClass('accordian__header--active');
            $(elem).find('.accordian__body').slideUp(acc_speed, easing, callback);
          } else {
            $(elem).find('.accordian__header').removeClass('accordian__header--active');
            $(elem).find('.accordian__body').slideUp(acc_speed, easing, callback);
            $(this).siblings('.accordian__body').slideDown(acc_speed, easing, callback);
            $(this).addClass('accordian__header--active');
          }
        });
      });
    },
    notification: function notification() {
      var notify = $('.notify'),
          closeButton,
          speed = this.settings.notify.speed;
      closeButton = $('<span/>', {
        class: "notify__close",
        html: "&times;"
      });

      if (notify.hasClass('notify__dismissable')) {
        notify.prepend(closeButton);
      }

      notify.on('click', '.notify__close', function () {
        $(this).parent('.notify').addClass('notify__close__closed').delay(200).slideUp(speed, function () {
          $(this).parent('.notify').remove();
        });
      });
    },
    scrollPosition: function scrollPosition() {
      var body = this.$element,
          show = this.settings.scrolltop.showAt,
          scrollUp = $('.scrollup__button'),
          nav = $('.nav');
      body.on('scroll', function () {
        var scrollP = body.scrollTop();

        if (scrollP < show) {
          scrollUp.css({
            'transform': 'translateY(200px)'
          });
        } else {
          scrollUp.css({
            'transform': 'translateY(0px)'
          });
        }
      });
    },
    windowWidth: function windowWidth() {
      var ww = $('body').width();
      return ww;
    },
    scrollUp: function scrollUp() {
      var stop = this.settings.scrolltop.stopAt,
          speed = this.settings.scrolltop.speed,
          easing = this.settings.scrolltop.easing,
          callback = this.settings.scrolltop.callback;
      $('.scrollup__button').on('click', function (e) {
        e.preventDefault();
        $('body, html').stop().animate({
          scrollTop: stop
        }, speed, easing, callback);
      });
    },
    dropdown: function dropdown() {
      $('.dropdown').on('click', '.dropdown__link ', function (e) {
        e.preventDefault();
        var $self = $(this).parent();

        if ($self.hasClass('dropdown__active')) {
          $('.dropdown').removeClass('dropdown__active');
        } else {
          $('.dropdown').removeClass('dropdown__active');
          $self.addClass('dropdown__active');
        }
      });
    },
    modal: function modal() {},
    keyframeLooper: function keyframeLooper() {
      requestAnimFrame(this.keyframeLooper.bind(this));
    }
  };

  $.fn.Luna = function (settings) {
    return this.each(function () {
      var luna = Object.create(Luna);
      luna.init(settings, this);
    });
  };
  /**
   * Luna Settings
   */


  $.fn.Luna.settings = {
    nav: {
      mobileMenu: 900,
      speed: 200
    },
    notify: {
      speed: 200
    },
    scrolltop: {
      speed: 1000,
      stopAt: 0,
      showAt: 500,
      easing: "swing",
      callback: null
    },
    accordian: {
      speed: 300,
      easing: "swing",
      callback: null
    },
    spyscroll: {
      trigger: ".scrollspy",
      offset: 0,
      activeClass: "active"
    }
  };
})(jQuery, window, document);

/***/ }),

/***/ "./Framework/js/lunaapp.js":
/*!*********************************!*\
  !*** ./Framework/js/lunaapp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./luna.js */ "./Framework/js/luna.js");

__webpack_require__(/*! ./luna.app.js */ "./Framework/js/luna.app.js");

/***/ }),

/***/ "./Framework/sass/style.sass":
/*!***********************************!*\
  !*** ./Framework/sass/style.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./Framework/js/lunaapp.js ./Framework/sass/style.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\MyProjects\Luna\Framework\js\lunaapp.js */"./Framework/js/lunaapp.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\MyProjects\Luna\Framework\sass\style.sass */"./Framework/sass/style.sass");


/***/ })

/******/ });