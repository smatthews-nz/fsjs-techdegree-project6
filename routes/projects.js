const express = require('express');
const router = express.Router();

//get data from data.json
const data = require('../data.json');
//get projects from data
const {projects} = data;

router.get('/project/:index', (req, res) => {
    
    //declare variables to build the project template data
    const project = projects[req.params.index];
    const index = project.id;
    const title = project.project_name;
    const desc = project.description;
    const tech = project.technologies;
    const live = project.live_link;
    const github = project.github_link;
    const banner = project.image_urls[0];

    //build template data object
    const templateData = {title, desc, tech, live, github, banner}

    //render selected project
    res.render('project', templateData);
});

module.exports = router;