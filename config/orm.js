var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  createOne: function(tableName, name, condition, vals, cb) {
    var queryString = "INSERT INTO " + tableName + " ("+ name.toString() + ", " + condition + ")";
    queryString += "VALUES (" + printQuestionMarks(vals.length) + ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(tableName, name_column, condition, cb){
    var queryString = "UPDATE " + tableName;

    queryString += " SET ";
    queryString += objToSql(name_column);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}  
module.exports = orm;
