

;(function(){
  'use strict';
  $('#modal').modal({
    modal: 'modal__lg'
  });
  $('.notify').notify();

  var clipboard = new Clipboard('.btn');
  clipboard.on('success', function(e){
    console.log(e);
  });




})();
