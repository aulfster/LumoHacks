
$(document).ready(function() {
  var jsonURL = "https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/values?alt=json-in-script&callback=json";
  $.getJSON( jsonURL, function( data ) {
    console.log(data);
});
});
