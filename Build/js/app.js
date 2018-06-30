/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['jquery'], function ($) {
			return factory($);
		});
	} else if (typeof module === "object" && typeof module.exports === "object") {
		exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($){

// Preserve the original jQuery "swing" easing as "jswing"
$.easing.jswing = $.easing.swing;

var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + 0.75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + 0.9375;
	} else {
		return n1*(x-=(2.625/d1))*x + 0.984375;
	}
}

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x) {
		return $.easing[$.easing.def](x);
	},
	easeInQuad: function (x) {
		return x * x;
	},
	easeOutQuad: function (x) {
		return 1 - ( 1 - x ) * ( 1 - x );
	},
	easeInOutQuad: function (x) {
		return x < 0.5 ?
			2 * x * x :
			1 - pow( -2 * x + 2, 2 ) / 2;
	},
	easeInCubic: function (x) {
		return x * x * x;
	},
	easeOutCubic: function (x) {
		return 1 - pow( 1 - x, 3 );
	},
	easeInOutCubic: function (x) {
		return x < 0.5 ?
			4 * x * x * x :
			1 - pow( -2 * x + 2, 3 ) / 2;
	},
	easeInQuart: function (x) {
		return x * x * x * x;
	},
	easeOutQuart: function (x) {
		return 1 - pow( 1 - x, 4 );
	},
	easeInOutQuart: function (x) {
		return x < 0.5 ?
			8 * x * x * x * x :
			1 - pow( -2 * x + 2, 4 ) / 2;
	},
	easeInQuint: function (x) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x) {
		return 1 - pow( 1 - x, 5 );
	},
	easeInOutQuint: function (x) {
		return x < 0.5 ?
			16 * x * x * x * x * x :
			1 - pow( -2 * x + 2, 5 ) / 2;
	},
	easeInSine: function (x) {
		return 1 - cos( x * PI/2 );
	},
	easeOutSine: function (x) {
		return sin( x * PI/2 );
	},
	easeInOutSine: function (x) {
		return -( cos( PI * x ) - 1 ) / 2;
	},
	easeInExpo: function (x) {
		return x === 0 ? 0 : pow( 2, 10 * x - 10 );
	},
	easeOutExpo: function (x) {
		return x === 1 ? 1 : 1 - pow( 2, -10 * x );
	},
	easeInOutExpo: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			pow( 2, 20 * x - 10 ) / 2 :
			( 2 - pow( 2, -20 * x + 10 ) ) / 2;
	},
	easeInCirc: function (x) {
		return 1 - sqrt( 1 - pow( x, 2 ) );
	},
	easeOutCirc: function (x) {
		return sqrt( 1 - pow( x - 1, 2 ) );
	},
	easeInOutCirc: function (x) {
		return x < 0.5 ?
			( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
			( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
	},
	easeInElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
	},
	easeOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
	},
	easeInOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
			pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
	},
	easeInBack: function (x) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x) {
		return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
	},
	easeInOutBack: function (x) {
		return x < 0.5 ?
			( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
			( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	},
	easeInBounce: function (x) {
		return 1 - bounceOut( 1 - x );
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x) {
		return x < 0.5 ?
			( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
			( 1 + bounceOut( 2 * x - 1 ) ) / 2;
	}
});

});


if ( typeof Object.create !== 'function' ) {
	Object.create = function(obj){
		function F(){}
		F.prototype = obj;
		return new F();
	};
}

(function($, window, document, undefined){

	'use strict';

	window.requestAnimFrame = function(){
		return (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback){
				window.setTimeout(callback, 1000 / 60);
			}
			);
	}();

	window.cancelAnimFrame  = function(){
		return (
			window.cancelAnimationFrame       ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame    ||
			window.oCancelAnimationFrame      ||
			window.msCancelAnimationFrame     ||
			function(id){
				window.clearTimeout(id);
			}
			);
	}();

	var Luna = {

		init: function( settings, element ){
			var self      = this;

			self.element  = element;
			self.$element = $( element );
			self.settings = $.extend({}, $.fn.Luna.settings, settings);

			self.menu();
			self.notification();
			self.scrollUp();
			self.scrollPosition();
			self.dropdown();
	  // self.modal();
	  self.accordian();

	},

	menu: function(){

		var resizeWindow,
		mm    = this.settings.nav.mobileMenu,
		speed = this.settings.nav.speed,
		nav   = $('.nav');



		nav.on('click', '.nav__navicon', function() {
			var $self        = $(this),
			$nav         = $self.parents('.nav'),
			$wrapperLink = $nav.find('.nav__links__wrapper'),
			sub          = $('.submenu-button');

			$wrapperLink.slideToggle(speed, function(){
				$(this).toggleClass('nav__links__wrapper--open').css('display', '');
			});

			if ( sub.hasClass('is-open')){
				sub.removeClass('is-open').siblings('ul.nav__links').css('display', '');
			}

	  });  /// click to open menu




		nav.find(".nav__links__item--dropdown").prepend('<span class="submenu-button"></span>');


		resizeWindow = function( settings ){
			var mediasize  = mm,
			ww         = $(document).outerWidth(),
			navWrapper = $('.nav__links__wrapper'),
			sub        = $('.submenu-button');

			if( ww >= mediasize ) {
				navWrapper
				.removeClass('nav__links__wrapper--open')
				.css('display', '');
				if ( sub.hasClass('is-open')){
					sub.removeClass('is-open').siblings('ul.nav__links').css('display', '');
				}

			}
		};

		nav.find(".submenu-button").on('click', function(){
			$(this).toggleClass('is-open').siblings('ul.nav__links').slideToggle(100);

		});


		resizeWindow();
		return $(window).on('resize', resizeWindow);

	},


	accordian: function () {
		var accordian = $('.accordian');

		var acc_speed = this.settings.accordian.speed;
		var callback = this.settings.accordian.callback;
		var easing = this.settings.accordian.easing;


		accordian.each(function (i, elem) {

			$(elem).find('.accordian__header').on('click' , function () {



				if ( $(this).siblings('.accordian__body').css('display') == 'block' ) {

					$(this).removeClass('accordian__header--active');
					$(elem).find('.accordian__body').slideUp(acc_speed, easing, callback);

				}else {

					$(elem).find('.accordian__header').removeClass('accordian__header--active');
					$(elem).find('.accordian__body').slideUp(acc_speed, easing, callback);
					$(this).siblings('.accordian__body').slideDown(acc_speed, easing, callback);

					$(this).addClass('accordian__header--active')
				}

			});

		});

	},

	notification: function(){

		var notify = $('.notify'), closeButton, speed = this.settings.notify.speed;

		closeButton = $('<span/>', {
			class: "notify__close",
			html: "&times;"
		});

		if(notify.hasClass('notify__dismissable')){
			notify.prepend(closeButton);
		}

		notify.on('click', '.notify__close', function(){
			$(this).parent('.notify').addClass('notify__close__closed')
			.delay(200).slideUp(speed, function(){
				$(this).parent('.notify').remove();
			});
		});


	},
	scrollPosition: function(){

		var body     = this.$element,
		show     = this.settings.scrolltop.showAt,
		scrollUp = $('.scrollup__button'),
		nav      = $('.nav');

		body.on('scroll', function(){
			var scrollP = body.scrollTop();
			if ( scrollP < show ) {
				scrollUp.css({
					'transform': 'translateY(200px)'
				});
			}else{
				scrollUp.css({
					'transform': 'translateY(0px)'
				});
			}

		});
	},

	windowWidth: function(){
		var ww = $('body').width();
		return ww;
	},

	scrollUp: function(){

		var stop  = this.settings.scrolltop.stopAt,
			speed = this.settings.scrolltop.speed,
			easing = this.settings.scrolltop.easing,
			callback = this.settings.scrolltop.callback;

		$('.scrollup__button').on('click', function(e){
			e.preventDefault();
			$('body, html').stop().animate({scrollTop: stop}, speed, easing, callback);
		});

	},

	dropdown: function() {

		$('.dropdown').on('click', '.dropdown__link ', function(e){
			e.preventDefault();
			var $self = $(this).parent();

			if ($self.hasClass('dropdown__active')){
				$('.dropdown').removeClass('dropdown__active');
			}else{
				$('.dropdown').removeClass('dropdown__active');
				$self.addClass('dropdown__active');
			}
		});
	},

	modal: function() {



	},

	keyframeLooper: function(){
		requestAnimFrame(this.keyframeLooper.bind(this));
	}

};


$.fn.Luna = function( settings ) {
	return this.each( function() {
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
		speed:      200
	},
	notify: {
		speed: 200
	},
	scrolltop:{
		speed:  1000,
		stopAt: 0,
		showAt: 500,
		easing: "swing",
		callback: null
	},
	accordian: {
		speed: 300,
		easing: "swing",
		callback: null
	}
   };




})(jQuery, window, document);

(function(){

  'use strict';

  $.fn.modal = function(opt){

    var settings, createModal, $body, closeModal;

    settings = $.extend({
      'modal' : 'modal',
      'close' : 'modal__close',
      'closecolor' : 'danger',
      'overlay' : 'modal__overlay'
    }, opt);

    $body = $('body');

    closeModal = function(modal, overlay){
      modal.remove();
      overlay.remove();
    };

    createModal = function(data){
      var overlay, close, modal, modalHeader, modalBody;

      modalHeader = $('<div/>', {
      
        class: "modal__header",
        html: 'MODAL HEADER'
      });


      close = $('<div/>', {
        class: settings.close + ' text--' + settings.closecolor + ' border--' + settings.closecolor
      }).on('click', function(e){
        e.preventDefault();
        //close modal and overlay
        closeModal(modal, overlay);
        $body.removeClass('has__modal');
      });

      overlay = $('<div/>', {
        class: settings.overlay
      }).on('click', function(e){
        e.preventDefault();
        //close modal and overlay
        closeModal(modal, overlay);
        $body.removeClass('has__modal');
      });

      modalBody = $('<div/>' , {
        class: "modal__body",
        html: data
      });

      modal = $('<div/>', {
        class: "modal " + settings.modal
      }).append(modalHeader, modalBody, close);

      $body.prepend(overlay, modal);
    };

    this.on('click', function(e){
      var self = $(this);
      e.preventDefault();
      $.ajax({
        url: self.data('content'),
        type: 'get',
        cache: false
      }).done(function(data){
        createModal(data);
      });
      $body.addClass('has__modal');
    });

  }




})();
