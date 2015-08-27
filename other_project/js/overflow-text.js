$('.songs li p').on('mouseover', function() {
  if ($(this).children().length > 0) {
    $(this).marquee("resume")
  } else {
    $(this).marquee( { duplicated: true, delayBeforeStart:0 } );
  }
});

$("p").hover(function(){
  $(this).marquee('resume');
}, function(){
  console.log(this)
  $(this).marquee('pause');
})
