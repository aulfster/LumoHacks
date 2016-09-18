
$(document).ready(function() {
  var jsonURL = "https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/values?alt=json-in-script&callback=json";
  $.getJSON( jsonURL, function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
});
