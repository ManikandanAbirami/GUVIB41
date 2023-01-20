var db = require('../database');

module.exports = {
  createData: function (inputData, callback) {
    var mySql = 'INSERT INTO users SET ?';
    db.query(mySql, inputData, function (err, data) {
      if (err) throw err;
      return callback(data);
    })
  }
}