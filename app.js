//require express
const express = require('express');
//get data from data.json
const data = require('/home/sam/dev/fsjs-techdegree-project6/data.json');
//get projects from data
const {projects} = data;


//create an express application
const app = express();

//set the view engine to pug
app.set('view engine', 'pug');

//serve static assets
app.use('/static', express.static('public'));


/*
ROUTING-------------------------------//
*/
//setting the route for index
const index = require('/home/sam/dev/fsjs-techdegree-project6/public/routes');
app.use(index);

//setting about route
const about = require('./public/routes/about.js');
app.use(about);

//setting projects routes
const projectRoutes = require('./public/routes/projects.js');
app.use(projectRoutes);
/*
END OF ROUTING-------------------------------//
*/

/*
ERROR HANDLING-------------------------------//
*/
//middleware to handle any errors
app.use((req, res, next) => {
    const error = new Error('Sorry, URL not found');
    error.status = 404;
    next(error);
});

//if non-matching error
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});
/*
END OF ERROR HANDLING-------------------------------//
*/

//set the app to listen to port 3000
app.listen(3000, () => {
    console.log('Project is running on port 3000');
});


