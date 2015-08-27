$( ".songs li p" ).hover(
  function() {
    $( this ).marquee( { duplicated: true } );
  }, function() {
    $( this ).marquee( "pause" );
  }
);