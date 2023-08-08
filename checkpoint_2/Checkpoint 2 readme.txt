-- Check point 2

Note : The project is uploaded with out the node modules to save space.

01. Create a project folder.
02. Name it as "moviebooking".
03. Open project folder in VSCode Editor.
04. In parallel, Open project folder using command prompt. 
05. Run the below command to create package.json
   npm init --yes

06. In VSCode start updating package.json as given.   

07. We need to install necessary modules: 
    express, mongoose, body-parser and cors.
     
    Run the command on command prompt:
    npm install express mongoose body-parser cors --S

08. Create app folder inside moviebooking project folder.
09. Create below folders inside app folder.
    config 
    controllers
    models
    routes

10. Create following .js files ( no code to be added for now )

Under config
	db.config.js

Under controllers
	movie.controller.js
	user.controller.js
	artist.controller.js
	genre.controller.js

Under models 
	index.js
	movie.model.js
	user.model.js
	artist.model.js
	genre.model.js

Under routes
	movie.routes.js
	user.routes.js
	artist.routes.js
	genre.routes.js

finally under root ( project ) folder    
	server.js

 



