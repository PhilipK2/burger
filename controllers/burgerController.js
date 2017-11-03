var express = require("express");
var router = express.Router();
var burger = require("../models/burgerModel.js");


router.get("/", function(req, res) {
    res.redirect('/index');
});


router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condtion", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/burgers", function(req, res) {
        burger.create(["burger_name", "devoured", date], [req.body.name, false, req.body.date], function(result) {
            res.redirect('/index');
        });
    })
    //POSSIBLY MAKE THIS PART OF THE FUNCTION ABOE. THE ROUTER.GET

// router.post('/burgers/insertOne', function(req, res) {
// 	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
// 		res.redirect('/index');
// 	});
// });




module.exports = router;