const request = require("request");

module.exports = function (link, done) {
  request(link, function (error, response, body) {
    if (error) {
      done("Something went wrong!");
    } else {
      done(body);
    }
  });
};
