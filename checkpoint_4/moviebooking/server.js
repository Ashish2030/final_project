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

const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url == '/movies') {
        if (request.method == 'GET') {
            response.write("All Movies Data in JSON format from Mongo DB");
        } 
    } 
    else if (request.url == '/genres') {
        if (request.method == 'GET') {
            response.write("All Genres Data in JSON format from Mongo DB");
        }
    } else if (request.url == '/artists') {
        if (request.method == 'GET') {
            response.write("All Artists Data in JSON format from Mongo DB");
        }
    }
    response.end();
});

//Below port no will be moved and read from config folder later on

server.listen(9000, () => {
    console.log('server started on port 9000');
});