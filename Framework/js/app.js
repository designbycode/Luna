// onScreen jQuery plugin v0.2.1
// (c) 2011-2013 Ben Pickles
//
// http://benpickles.github.io/onScreen
//
// Released under MIT license.
// ;(function($) {
//   $.expr[":"].onScreen = function(elem) {
//     var $window = $(window)
//     var viewport_top = $window.scrollTop()
//     var viewport_height = $window.height()
//     var viewport_bottom = viewport_top + viewport_height
//     var $elem = $(elem)
//     var top = $elem.offset().top
//     var height = $elem.height()
//     var bottom = top + height
//
//     return (top >= viewport_top && top < viewport_bottom) ||
//            (bottom > viewport_top && bottom <= viewport_bottom) ||
//            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
//   }
// })(jQuery);
// $(function() {
//   setInterval(function() {
//     $("h2")                             // get all <h2>s
//       .css("color", "")      // reset their background colours
//       .filter(":onScreen")              // get only <h2>s on screen
//         .css("color", "red") // give them a red background
//   }, 1000)                              // repeat every second
// })


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



  // $('.btn').each(function(i, elem){
	// 			$(this).before($(elem).clone().addClass('clone-anchor'));
	// 		})

})();


$('.nav').navigation({

})
