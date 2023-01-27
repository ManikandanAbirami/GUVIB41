var db = require('../database');
module.exports = {
  editData: function (editId, callback) {

    var sql = `SELECT * FROM users WHERE id=${editId}`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data[0]);
    });
  },
  updateData: function (inputData, updateId, callback) {

    var sql = `UPDATE users SET ? WHERE id= ?`;
    db.query(sql, [inputData, updateId], function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  }
}