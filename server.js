// Dependencies required
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets up the Express app to handle data parsing for PUTS and POSTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());