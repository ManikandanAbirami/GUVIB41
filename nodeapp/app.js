const express = require('express')

const port = process.env.PORT || 3000

const app = express();

app.listen(port, () => console.log(`Server listening on port ${port}`));

app.set('view engine', 'ejs');

var createRouter = require('./routes/create-route');
var readRouter = require('./routes/read-route');
var updateRouter = require('./routes/update-route');
var deleteRouter = require('./routes/delete-route');


app.use('/crud', createRouter);
app.use('/crud', readRouter);
app.use('/crud', updateRouter);
app.use('/crud', deleteRouter);