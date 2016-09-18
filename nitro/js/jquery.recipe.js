var jsonURL = "https://spreadsheets.google.com/feeds/list/1eUdfXnxuwqZPScarg9bxeNDhmK7Pbjex_1JB4yPeFAk/1/public/values?alt=json-in-script&callback=json";

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

loadJSON(jsonURL,
         function(data) { console.log(data); },
         function(xhr) { console.error(xhr); }
);
