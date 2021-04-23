const request = require("request");
module.exports = function (link, done) {
  request(link, function (error, response, body) {
    if (error) {
      done("Something went wrong!");
    } else {
      done(console.log("statusCode:", response && response.statusCode)); // Print the response status code if a response was received
      done(console.log("body:", body)); // Print the HTML for the Google homepage.
    }
  });
};
