// Dependencies required
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();

// Sets up the Express app to handle data parsing for PUTS and POSTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up express to serve static files (index.html, notes.html, style.css, and index.js) in "public" directory
app.use(express.static('public'));

// process.env.PORT will allow any PORT that a user enters or 3000
// e.g. if you run node index.js ,Node will use 3000
// If you run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444 in this example
const PORT = process.env.PORT || 3000;












// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});