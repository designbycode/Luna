(function(){

  'use strict';

  $.fn.modal = function(opt){

    var settings, createModal, $body, closeModal;

    settings = $.extend({
      'modal' : 'modal__md',
      'close' : 'modal__close',
      'overlay' : 'modal__overlay'
    }, opt);

    $body = $('body');

    closeModal = function(modal, overlay){
      modal.remove();
      overlay.remove();
    };

    createModal = function(data){
      var overlay, close, modal, icon;

      icon = $('<i/>', {
        class: "fr fr-close"
      });

      close = $('<div/>', {
        class: settings.close
      }).append(icon).on('click', function(e){
        e.preventDefault();
        //close modal and overlay
        closeModal(modal, overlay);
      });

      overlay = $('<div/>', {
        class: settings.overlay
      }).on('click', function(e){
        e.preventDefault();
        //close modal and overlay
        closeModal(modal, overlay);
      });

      modal = $('<div/>', {
        html: data,
        class: "modal " + settings.modal
      }).append(close);

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
      $body.addClass('has__model');
    });

  }




})();
