-- Check point 5 

1. Define the Schema according to Client requirements. 

>  refer app/models/artist.model.js 

>  refer app/models/genre.model.js 

>  refer app/models/movie.model.js 

>  refer app/models/user.model.js 



2. Set up the Index file for models folder. 
It would set up mongoose and a database object for all the controller 
and routes.

> refer app/models/index.js

3. In the server.js , we would later add more code.  
For backend programming only below code is needed in server.js.

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// refer server.js for changes

4. Run below command on command prompt to test is connectivity to Mongo DB is successful!
>  node server.js
 