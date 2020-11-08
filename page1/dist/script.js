/**
 * This was built using the scrollie jQuery Plugin
 */


$(function (){
  'use strict';
  var view = $(window).height();
  $('part')
  .height(view)
  .scrollie({
    scrollOffset:-50,
    scrollingInView: function (elem){
      var bgColor = elem.data('background');
      $('body').css('background-color', bgColor)
    }
  });
});