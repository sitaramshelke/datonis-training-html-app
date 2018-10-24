const datonis = require("./datonis");

module.exports.get_things = (req, res) => {
  res.set("Content-Type", "application/json");

  let callback = (error, response, body) => {
    if (!error) {
      var info = JSON.parse(body);
      res.json(info);
    } else {
      console.log(error);
      res.json({ message: "Internal Server Error" });
    }
  };

  let options = {
    method: "GET"
  };

  const things_url = "https://api.datonis.io/api/v3/things?per=100";
  datonis.datonis_request(things_url, options, callback);
};


module.exports.thing_aggregated_data = (req, res) => {
  res.set("Content-Type", "application/json");

  let callback = (error, response, body) => {
    if (!error) {
      var info = JSON.parse(body);
      res.json(info);
    } else {
      console.log(error);
      res.json({ message: "Internal Server Error" });
    }
  };

  let options = {
    method: "POST",
    body: JSON.stringify(req.body)
  };

  const things_url = "https://api.datonis.io/api/v3/datonis_query/thing_aggregated_data";
  datonis.datonis_request(things_url, options, callback);
};

