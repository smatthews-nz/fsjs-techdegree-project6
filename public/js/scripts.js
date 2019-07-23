//require express
const express = require('express');
//create an express application
const app = express();
//set the app to listen to port 3000
app.listen(3000);
//testing the route
app.get('/', (req, res, next) =>{
    res.send('Express is operational!');
});
