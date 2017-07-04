
$.fn.navigation = function(options){

  var opt, resizeFix, self = $(this), resizeFix;

  opt = $.extend({
    format: "dropdown",
    width: 900
  }, options);

  // return this.each(function(){
    $(this).find('.nav__navicon').on('click', function(){
        var navWrapper = $('.nav__links__wrapper');
        navWrapper.slideToggle(400, function(){
          $(this).toggleClass('nav__links__wrapper--open').css('display', '');
        });
    }); /// click to open menu

    var items = $('.nav__links__item--dropdown > .nav__links__item');


    items.each(function(index, element){
      console.log(index, element);
    });



    resizeFix = function(){
      var mediasize  = opt.width,
          ww         = $(document).outerWidth(),
          navWrapper = $('.nav__links__wrapper');

      if( ww >= mediasize ) {
        navWrapper
          .removeClass('nav__links__wrapper--open')
          .css('display', '');
      }

    }

    resizeFix();
    return $(window).on('resize', resizeFix);

  // }); // return


};
