//incluse database connection
var db = require('../database');

module.exports = {
  //It has 2 parameters, 'inputData' - it will take input values 
  //                  from the createData method of the controller
  createData: function (inputData, callback) {
    var mySql = 'INSERT INTO users SET ?';
    db.query(mySql, inputData, function (err, data) {
      if (err) throw err;
      return callback(data);
    })
  }
}

// function createData() {

// }