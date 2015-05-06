/*******************************************************************************
Create Lightbox
*******************************************************************************/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);



/***************************************************
Add overlay
***************************************************/

$("body").append($overlay);



/***************************************************
To view image in overlay
***************************************************/

$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);

  $overlay.show();

});



/***************************************************
To remove image from overlay
***************************************************/

$overlay.click(function(){
  $overlay.hide();
});