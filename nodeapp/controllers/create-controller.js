var createModel = require('../models/create-model');
module.exports = {
  crud: function (req, res) {
    res.render('crud-form');
  },
  createData: function (req, res) {
    const inputData = {
      full_name: req.body.full_name,
      email_address: req.body.email_address,
      city: req.body.city,
      country: req.body.country
    };
    createModel.createData(inputData, function (data) {
      res.redirect('/crud/form');
      console.log(data.affectedRows + " record created");
    })
  }
}