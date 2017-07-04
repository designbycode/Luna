
(function(){

  'use strict';

  $.fn.notify = function(opt){

    var settings;

    settings = $.extend({
      speed: 300
    }, opt);


    return this.each(function(){
      var self = $(this), closeButton;

      closeButton = $('<span/>', {
        class: "notify__close",
        html: "&times;"
      });

      if(self.hasClass('notify__dismissable')){
        self.prepend(closeButton);
      }

      self.on('click', '.notify__close', function(){
        self.addClass('notify__close__closed')
          .delay(200).slideUp(settings.speed, function(){
            self.remove();
          });
      });


    });
  };

})();
