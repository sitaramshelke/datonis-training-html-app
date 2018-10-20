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

  const things_url = "https://api.datonis.io/api/v3/things";
  datonis.datonis_request(things_url, options, callback);
};