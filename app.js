//require express
const express = require('express');
//get data from data.json
const data = require('./data.json');
//get projects from data
const {projects} = data;


//create an express application
const app = express();

//set the view engine to pug
app.set('view engine', 'pug');

//serve static assets
app.use('/static', express.static('public'));

//setting the route for index
app.get('/', (req, res) =>{
    res.render('index', {projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

//set the app to listen to port 3000
app.listen(3000, () => {
    console.log('Project is running on port 3000');
});
