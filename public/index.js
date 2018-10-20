// When page is ready with all HTML elements loaded, call necessary functions.
$(document).ready(function() {
  loadThings(); // Get all things and fill in the Thing Select box.
});

// This function is called after the HTML elements are loaded. This will get all the things list to fill in the select box.
function loadThings() {
  requestData("GET", "/things", {}, data => {
    var things = data.things;
    var thingSelect = document.getElementById("thingSelect");
    for (let i = 0; i < things.length; i++) {
      const thing = things[i];
      thingSelect.options.add(new Option(thing.name, thing.thing_key));
    }
  });
}

// This function makes an asynchronous call to our server and calls function onSuccess once the request is finished successfully
function requestData(type, url, data, onSuccess) {
  $.ajax({
    type: type,
    url: url,
    data: data,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: onSuccess
  });
}