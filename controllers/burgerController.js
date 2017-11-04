var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// add a '/' endpoint that redirects to the /index route
router.get('/', function(req, res) {
    res.redirect('/index');
});

// gets all the burgers
// then renders the index file by passing burgers object to handlebars
router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// posts the burger name the user entered
// then as a callback it redirects back to the /index route
router.post('/burgers/insertOne', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
        res.redirect('/index');
    });
});


// updates the status
router.put('/burgers/updateOne/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function() {
        res.redirect('/index');
    });
});

// export the router (controller) back to the server
module.exports = router;