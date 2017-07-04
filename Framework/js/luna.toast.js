
$.fn.toast = function(opt){

  var settings;

  settings = $.extend({
    class: "toaster",
    text: "hello claude",
    delay: 2000
  }, opt);

  return this.each(function(){

    var self = $(this),
        makeToaster,
        height;


    makeToaster = $('<div/>', {
      class: settings.class,
      html: settings.text
    }).prependTo($('body'));

    var topOffset = 15
    makeToaster.each(function(){
      var $this = $(this),
          height = $this.outerHeight(),
          offset = 15;

      $this.css({
        'top': topOffset + 'px'
      });

      // topOffset += height + offset;
      topOffset += height + offset;
      console.log(topOffset);
    });



    makeToaster
    .delay(settings.delay)
    .queue(function(){
      $(this).css({
        'right': -$(this).outerWidth() - 20,
        'opacity': 0
      });
    });


    setTimeout(function(){
      makeToaster.remove();
    }, settings.delay + 1000)

  });


};
