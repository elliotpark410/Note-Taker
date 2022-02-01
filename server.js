// Dependencies required
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets up the Express app to handle data parsing for PUTS and POSTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// process.env.PORT will allow any PORT that a user enters or 3000
// e.g. if you run node index.js ,Node will use 3000
// If you run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444 in this example
var PORT = process.env.PORT || 3000;