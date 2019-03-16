
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
            self.settings = $.extend({}, settings, $.fn.Luna.settings);

            self.menu();
            self.notification();
            self.scrollUp();
            self.scrollPosition();
            self.dropdown();
            self.spyscroll();
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

    spyscroll: function() {

        var el = this.settings.spyscroll.trigger;
        var $offset = this.settings.spyscroll.offset;   
        var $active = this.settings.spyscroll.activeClass;

        $(window).bind('scroll', function() {
            var currentTop = $(window).scrollTop();
            var elems = $(el);

            elems.each(function(index){
                var elemTop     = $(this).offset().top - $offset;
                var elemBottom  = elemTop + $(this).height();
                if( currentTop >= elemTop && currentTop <= elemBottom ) {
                    var id      = $(this).attr('id');
                    var navElem = $('a[href="#' + id+ '"]');
                    navElem.parent().addClass($active).siblings().removeClass( $active );
                }
            });
        }); 

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
        },
        spyscroll: {
            trigger: ".scrollspy",
            offset: 0,
            activeClass: "active"
        },
   };




})(jQuery, window, document);
