//incluse database connection
var db = require('../database');
module.exports = {
  createData: function (inputData, callback) {
    var sql = 'INSERT INTO users SET ?';
    db.query(sql, inputData, function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  }
}

// function createData() {

// }

//It has 2 parameters, 'inputData' - it will take input values 
  //                  from the createData method of the controller