const request = require("request");
const config = require("../config/datonis")

module.exports.datonis_request = (url, options, callback) => {
  options.url = url;
  options.headers = {
    "X-Auth-Token": config.AUTH_TOKEN,
    "Content-Type": "application/json"
  };
  request(options, callback);
};
