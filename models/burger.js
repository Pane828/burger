var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    createOne: function(name, condition, cb){
        orm.createOne("burgers", condition, function(res){
            cb(res);
        })
    },
    updateOne: function(name_column, condition, cb){
        orm.updateOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;