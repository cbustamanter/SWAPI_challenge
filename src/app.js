const app = require("./config/express.config");
const conn = require("./database/config");

/* conn.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

conn.end(); */

module.exports = app;
