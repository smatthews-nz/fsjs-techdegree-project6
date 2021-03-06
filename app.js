//require express
const express = require('express');
//declare port
const port = process.env.PORT || 3000;


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
const index = require('./routes/index');
app.use(index);

//setting about route
const about = require('./routes/about.js');
app.use(about);

//setting projects routes
const projectRoutes = require('./routes/projects.js');
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
    console.error(error)
    next(error);
});

//if non-matching error
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
    console.error(err);
});
/*
END OF ERROR HANDLING-------------------------------//
*/

//set the app to listen to port 3000
app.listen( port, () => {
    console.log('Project is running on port 3000');
});


