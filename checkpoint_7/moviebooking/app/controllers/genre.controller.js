// load the schema models 
//const { movies } = require("../models");
const { genres } = require("../models");
const db = require("../models");
// use the Schema for the Courses
//const Movies = db.movies;
const Genres = db.genres;

  exports.findAllGenres = (req, res) => {
      Genres.find()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Genres."
          });
        });
     };