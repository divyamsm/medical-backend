# medical-backend
Simple Medical Bill Upload service

To run this application, you would need Node, Express, Supertest and Jest pre-installed. Also, API can be tested using Postman.

1. Navigate to node-app/ and run ```node app.js```
 <p> This will launch the server, on port 3000. Then you can use Postman to call GET or POST requests for the API. The URL for Postman requests are http://localhost:3000/items
 
 2. The tests for the API are written in api.test.js and can be run using ```npx jest api.test.js```. Note: Ensure that the log statement (last line in app.js is commented as log statements throw a warning when running the tests.)
 
 
