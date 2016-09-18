$(document).ready(function() {
  var url = "https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/basic?alt=json";

  $.getJSON(url, function(data) {
    for (var a = 0; a < data.feed.entry.length; a++) {
      var content = data.feed.entry[a].content.$t;
      console.log(content);
      $("#results").append(content + "<br><br>");
    }

    //var contentArray = content.split(",");
    /*
    var contentFormatted = [];
    for (var a = 0; a < contentArray.length; a++) {
      contentFormatted[a] = contentArray[a].split(":");
    }
    */

  });
});


//https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/basic?alt=json
