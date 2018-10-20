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

// This function is called after `Load` button is clicked from the UI, this will get the thing key and the date. Then it will make a function call to get thing data.
function loadChart() {
  var date = document.getElementById("date").value;
  var thingKey = document.getElementById("thingSelect").value;
  if (date == undefined || date == "") {
    alert("Please select a valid date");
  } else {
    loadThingData(thingKey, date);
  }
}

// This function is called by `loadChart`, it prepares all the necessary request data necessary and will make a call to get the thing data. Once thing data is recieved, it will call `loadData` to render data in the form of a chart.
function loadThingData(thingKey, date) {
  var data = JSON.stringify({
    thing_key: thingKey,
    from: date + " 00:00:00",
    to: date + " 23:59:59",
    order: "asc",
    time_zone: "Mumbai",
    time_format: "str",
    per: "10000",
    metrics: ["machine.status", "job.count"]
  });

  requestData("POST", "/get_thing_data", data, function(data) {
    var result = data[thingKey];
    var eventData = result.event_data;
    var machineStatusData = [];
    var jobCountData = [];
    var labels = [];
    for (let i = 0; i < eventData.length; i++) {
      const item = eventData[i];
      const data = item.data;
      labels.push(item.timestamp);
      machineStatusData.push(data.machine.status || 0);
      jobCountData.push(data.job.count || 0);
    }
    loadData(labels, machineStatusData, jobCountData);
  });
}

// This function takes axis labels, and data to be plotted across y axis.
function loadData(labels, machineStatusData, jobCountData) {
  // First we will clear existing chart if any;
  $('#myChart').remove();
  $('#chartContainer').append('<canvas id="myChart" height="400"></canvas>');

  // Then we create our chart.
  var ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Machine Status",
          data: machineStatusData,
          backgroundColor: "#fd2423",
          borderColor: "#fd2423",
          fill: false
        },
        {
          label: "Job Count",
          data: jobCountData,
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