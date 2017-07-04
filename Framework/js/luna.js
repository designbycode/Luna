
if ( typeof Object.create !== 'function' ) {
  Object.create = function(obj){
    function F(){}
    F.prototype = obj;
    return new F();
  };
};;;




;(function($, window, document, undefined){

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

  window.cancelAnimFrame = function(){
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
    init: function( settings, elem ) {
      var self      = this;
      self.elem     = elem;
      self.$elem    = $( elem );
      self.settings = $.extend({}, $.fn.Luna.settings, settings);

      self.menu();
      self.notification();
      self.scrollUp();

      self.scrollPosition();

    },

    menu: function( ) {
        var mm    = this.settings.nav.mobileMenu,
            speed = this.settings.nav.speed;

      $('.nav').on('click', '.nav__navicon', function() {
        var $self        = $(this),
            $nav         = $self.parents('.nav'),
            $wrapperLink = $nav.find('.nav__links__wrapper');

        $wrapperLink.slideToggle(speed, function(){
          $(this).toggleClass('nav__links__wrapper--open').css('display', '');
        });

      }); /// click to open menu



      var resizeFix = function( settings ){

        var mediasize  = mm,
            ww         = $(document).outerWidth(),
            navWrapper = $('.nav__links__wrapper');

        if( ww >= mediasize ) {
          navWrapper
          .removeClass('nav__links__wrapper--open')
          .css('display', '');
        }
      };

      resizeFix();
      return $(window).on('resize', resizeFix);
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

      var body     = this.$elem,
          show     = this.settings.scrolltop.showAt,
          scrollUp = $('.scrollup__button'),
          nav = $('.nav');

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

        // if (scrollP < 200){
        //   nav.addClass('nav--strip');
        //
        // }else{
        //   nav.removeClass('nav--strip');
        // }

      });
    },

    windowWidth: function(){
      var ww = $('body').width();
      return ww;
    },

    scrollUp: function(){

      var stop = this.settings.scrolltop.stopAt,
          speed = this.settings.scrolltop.speed;

      $('.scrollup__button').on('click', function(e){
        e.preventDefault();
        $('body, html').stop().animate({scrollTop: stop}, speed);
      });

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

  $.fn.Luna.settings = {
    nav : {
      mobileMenu: 900,
      speed: 200
    },
    notify: {
      speed: 200
    },
    scrolltop: {
      speed: 1000,
      stopAt: 0,
      showAt: 500
    }
  };

})(jQuery, window, document);
