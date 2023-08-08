// When any other file requires models folder 
// it would run this index page.
// something similar to a website where 
// www.amazon.com is same as www.amazon.com/index.php

// load the db.config.js file 
const dbConfig = require("../config/db.config.js");

// setup or Load mongoose
const mongoose = require("mongoose");

// set up the database object 
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movie.model.js")(mongoose);
// here mongoose is a variable we are passing to movie.model.js

db.users = require("./user.model.js")(mongoose);
// here mongoose is a variable we are passing to user.model.js

db.artists = require("./artist.model.js")(mongoose);
// here mongoose is a variable we are passing to artist.model.js

db.genres = require("./genre.model.js")(mongoose);
// here mongoose is a variable we are passing to user.model.js

module.exports = db;

