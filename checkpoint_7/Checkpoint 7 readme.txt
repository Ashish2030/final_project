-- Check point 7

We will be using below node module(s) for UUID and token generation if
user is valid:

> uuid-token-generator  : this will help us generate token
> uuidv4 : this will help us generate UUID
> b2a : this will help us change base for username / password passsed.

>To DO SO:
  Open command prompt and run below commands while being in root folder:
  npm install uuid-token-generator
  npm install  uuidv4
  npm install b2a

1. Code the app/controllers/user.controller.js for following api's
 
signUp() - to create a USER object and save it in USER schema.
         - also note; since there is no provision made in react app 
           to collect preferred username; we are adding 
           first_name + last_name as username in database
         - fields in db like uuid, access-token, isLoggedIn 
           are to be updated once user logs in 
           and same are to be cleaned when user logs out  

login() - to check the entered username and password is matching with data in USER schema. If yes , then the person has loggedIn.
        - fields in db like uuid, access-token, isLoggedIn 
          are to be updated once user logs in 

          Observe the code used for access-token creation & UUID creation

logout() - This requires the unique Id of the logged in person. 
           His loggedIn status is set to false. 
         - Also fields in db like uuid, access-token, isLoggedIn 
           are to be updated once user logs in 
           and same are to be cleaned when user logs out  
                
> Refer app/controllers/user.controller.js


Code the app/routes/user.routes.js for following routes
  
      Follow the routes and methods as 

      (considering base URL as http://localhost:3000/api):

      POST /auth/signup

      POST /auth/login

      POST /auth/logout

    

 > Refer app/routes/user.routes.js


In the next checkpoint; we will handle bookshow related routes 
