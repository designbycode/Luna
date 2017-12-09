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
