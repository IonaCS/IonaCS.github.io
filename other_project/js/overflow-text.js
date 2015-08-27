$('.songs li p').on('mouseover', function() {
  if ($(this).children().length > 0) {
    $(this).marquee("resume")
  } else {
    $(this).marquee();
  }
});

$("p").hover(function(){
  $(this).marquee('resume');
}, function(){
  console.log(this)
  $(this).marquee('pause');
})
