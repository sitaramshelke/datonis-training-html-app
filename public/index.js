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


function loadChart() {
  loadData();
}

function loadData(labels, machineStatusData, jobCountData) {
  // First we will clear existing chart if any;
  $('#myChart').remove();
  $('#chartContainer').append('<canvas id="myChart" height="400"></canvas>');

  // Then we create our chart.
  var ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: "Shoes",
          data: [100, 113, 87, 98, 95, 130, 142, 93, 85, 75, 85, 93],
          backgroundColor: "#fd2423",
          borderColor: "#fd2423",
          fill: false
        },
        {
          label: "Sandals",
          data: [95, 83, 97, 88, 105, 114, 92, 103, 105, 99, 115, 103],
          backgroundColor: "#fd8423",
          borderColor: "#fd8423",
          fill: false
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
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