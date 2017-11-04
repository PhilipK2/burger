var orm = require("../config/orm.js");

var burger = {
    // all burgers
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // adding burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    // changing status
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// export burger back to the controller
module.exports = burger;