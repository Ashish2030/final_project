//This file is entry point of node application.
//We will be handling movies related WEB API end pnd points here using http module
//Later on for maintainance purpose; 
//we will be moving these entry points to routes folder using express


//Here we need to handle WEB API End points initially

//---  GET /movies
//---  GET /genres
//---  GET /artists

//We also will have to work with URL parameters; but we will deal 
//with those parameters directly using Express 

//Commented in Checkpoint 5 itself------------------------from here
// // // // // const http = require('http');

// // // // // const server = http.createServer((request, response) => {
// // // // //     if (request.url == '/movies') {
// // // // //         if (request.method == 'GET') {
// // // // //             response.write("All Movies Data in JSON format from Mongo DB");
// // // // //         } 
// // // // //     } 
// // // // //     else if (request.url == '/genres') {
// // // // //         if (request.method == 'GET') {
// // // // //             response.write("All Genres Data in JSON format from Mongo DB");
// // // // //         }
// // // // //     } else if (request.url == '/artists') {
// // // // //         if (request.method == 'GET') {
// // // // //             response.write("All Artists Data in JSON format from Mongo DB");
// // // // //         }
// // // // //     }
// // // // //     response.end();
// // // // // });

// // // // // //Below port no will be moved and read from config folder later on

// // // // // server.listen(9000, () => {
// // // // //     console.log('server started on port 9000');
// // // // // });

//Commented in Checkpoint 5 itself------------------------till here

//--------------------------------------------------------------------
//------------------Replacement Code Below----------------------------
//--------------------------------------------------------------------

// we would load all libraries like express , bodyParser and core here 
// something like this 
/*
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
*/


// make express object 
// something like this 
// const app = express();



// use the CORS object 


// parse requests of content-type - application/json
// using bodyParser



// parse requests of content-type - application/x-www-form-urlencoded
// using bodyParser


// will create a mongoose object and connect to it.
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
    // console.log(typeof(db.movies.));
    // console.log(db.movies);
    
    //var marr = [...db.movies];
    // marr.forEach(movie => {
    //     console.log(movie.title);
    // });
    // console.log({...db.movies});
    // console.log({...db.artists});
    // console.log({...db.genres});
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

