const request = require("request");
const config = require("../config/datonis")

module.exports.datonis_request = (url, options, callback) => {
  options.url = url;
  options.headers = {
    "X-Access-Key": config.ACCESS_KEY,
    "Content-Type": "application/json"
  };
  request(options, callback);
};
