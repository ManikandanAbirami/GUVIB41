const fs = require('fs')

const express = require('express')

const port = process.env.PORT || 3000

const app = express();

app.get('/', respondText);
app.get('/json', respondJson);
app.get('/dr', respondDymanicResponse);
app.get('/static/*', respondStatic);

app.listen(port, () => console.log(`Server listening on port ${port}`));

function respondText(req, res) {
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello')
}

function respondJson(req, res) {
  // res.end(JSON.stringify({ text: 'Hello', numbers: [1, 2, 3, 4, 5] }))
  res.json({ text: 'Hello', numbers: [1, 2, 3, 4, 5] })
}

function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not Found')
}

function respondDymanicResponse(req, res) {
  // const { input = '' } = querystring.parse(
  //   req.url
  //     .split('?')
  //     .slice(1)
  //     .join('')
  // )
  const { input = '' } = req.query;
  // res.setHeader('Content-Type', 'application/json')
  res.json({
    normal: input,
    caps: input.toUpperCase(),
    count: input.length,
    reverse: input.split('').reverse().join('')
  })
}

function respondStatic(req, res) {
  // const filename = `${__dirname}/public${req.url.split('/static')[1]}`;
  const filename = `${__dirname}/public${req.params[0]}`;
  fs.createReadStream(filename)
    .on('error', () => respondNotFound(req, res))
    .pipe(res)
}