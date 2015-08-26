$(document).ready(function () {
  $('.songs li').mouseenter(function () {
    $(this).stop();
    var boxWidth = $(this).width();
    var textWidth = $('p', $(this)).width();
    if (textWidth > boxWidth) {
      var animSpeed = textWidth * 10;
      $(this).animate({
        scrollLeft: (textWidth - boxWidth)
      }, animSpeed, function () {
        $(this).animate({
          scrollLeft: 0
        }, animSpeed, function () {
          $(this).trigger('mouseenter');
        });
      });
    }
  }).mouseleave(function () {
    var animSpeed = $(this).scrollLeft() * 10;
    $(this).stop().animate({
      scrollLeft: 0
    }, animSpeed);
  });
});