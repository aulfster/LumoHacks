$(document).ready(function() {
  var url = "https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/basic?alt=json";

  $.getJSON(url, function(data) {
    for (var a = 0; a < data.feed.entry.length; a++) {
      var content = data.feed.entry[a].content.$t.split(", ");
      console.log(content);
      var username = "";
      var recipetitle = "";
      var typeofdiets = "";
      var ingredient1name = "";
      var ingredient1amount = "";
      var moreingredients1 = "";
      var ingredient2name = "";
      var ingredient2amount = "";
      var moreingredients2 = "";
      var ingredient3name = "";
      var ingredient3amount = "";
      var moreingredients3 = "";
      var instruction1 = "";
      var moreinstruction1 = "";
      var instruction2 = "";
      var moreinstruction2 = "";
      var instruction3 = "";
      var moreinstruction3 = "";

      username = content[0].split(": ");
      recipetitle = content[1].split(": ");
      typeofdiets = content[2].split(": ");

      ingredient1name = content[3].split(": ");
      ingredient1amount = content[4].split(": ");
      moreingredients1 = content[5].split(": ");
      if (moreingredients1 == "yes") {
          ingredient2name = content[6].split(": ");
          ingredient2amount = content[7].split(": ");
        }
        moreingredients2 = content[8].split(": ");
      if (moreingredients2 == "yes") {
        ingredient3name = content[9].split(": ");
        ingredient3amount = content[10].split(": ");
      }
        moreingredients3 = content[11].split(": ");
      if (moreingredients3 == "yes") {

      }
      instruction1 = content[12].split(": ");
        moreinstruction1 = content[13].split(": ");
      if (moreinstruction1 == "yes") {
        instruction2 = content[14].split(": ");
      }
        moreinstruction1 = content[15].split(": ");
      if (moreingredients2 == "yes") {
        instruction3 = content[16].split(": ");
      }
        moreinstruction3 = content[17].split(": ");

      var usernameHTML = "<p>Submitted by: <strong>" +username[1]+ "</strong></p>";
      var recipletitleHTML = "<p>Recipe Title: <strong>" +recipetitle[1]+ "</strong></p>";
      var typeofdietsHTML = "<p>Recipe Title: <strong>" + typeofdiets[1]+ "</strong></p>";
      var ingredient1nameHTML = "<p>Ingredients Needed: " +ingredient1name[1]+ ", " +ingredient2name[1]+ ", " +ingredient3name[1]+ "</p>";
      var ingredient1amountHTML = "<p>Amount Needed: " +ingredient1amount[1]+ ", " +ingredient2amount[1]+ ", " +ingredient3amount[1]+ "</p>";
      var instruction1HTML = "<p>Instructions:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. " +instruction1[1]+ "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. " +instruction2[1]+ "<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. " +instruction3[1]+ "</p>";
      var spacing = "<hr><br>"
      var all = usernameHTML+recipletitleHTML+ingredient1nameHTML+ingredient1amountHTML+instruction1HTML+spacing;
      $("#recipeBox").append(all);
    }


    //https://www.flickr.com/services/rest/?method=flickr.photos.search&text=QUERYHERE&sort=relevance&media=photo&per_page=1&format=json&api_key=39fe4a7afffef58c074ee5c23532fa6e
    /*
    var contentFormatted = [];
    for (var a = 0; a < contentArray.length; a++) {
      contentFormatted[a] = contentArray[a].split(":");
    }
    */

  });
});


//https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/basic?alt=json
