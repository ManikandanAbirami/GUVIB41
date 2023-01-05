const http = require('http')

const querystring = require('querystring')

const fs = require('fs')

const port = process.env.PORT || 1337

//req.url - It will always contain the full path of the client request
//Routing - All client requests are not same, we should respond differently 
//           based on the requested url path
const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/') return respondText(req, res)

  if (req.url === '/json') return respondJson(req, res)

  // if (req.url.match(/^\/dr/)) return respondDymanicResponse(req, res)

  if (req.url.match(/^\/dr/)) return respondDymanicResponse(req, res)

  if (req.url.match(/^\/static/)) return respondStatic(req, res)

  respondNotFound(req, res)
})

server.listen(port);

console.log(`Server listening on port ${port}`);

function respondText(req, res) {
  // res.setHeader('Content-type', 'text/plain')
  res.end('Hello')
}

function respondJson(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ text: 'Hello', numbers: [1, 2, 3, 4, 5] }))
}

function respondNotFound(req, res) {
  // res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not Found')
}

function respondDymanicResponse(req, res) {
  const { input = '' } = querystring.parse(
    req.url
      .split('?')
      .slice(1)
      .join('')
  )
  const { inputB = '' } = querystring.parse(
    req.url
      .split('?')
      .slice(1)
      .join('')
  )
  console.log(input)
  console.log(inputB)
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify({
      normal: input,
      caps: input.toUpperCase(),
      count: input.length,
      reverse: input.split('').reverse().join('')
    })
  )
}

function respondStatic(req, res) {
  console.log("@@@@@@@@@ " + __dirname);
  console.log("File name: " + req.url.split('/static')[1]);
  const filename = `${__dirname}/public${req.url.split('/static')[1]}`;
  console.log('####' + filename);
  fs.createReadStream(filename)
    .on('error', () => respondNotFound(req, res))
    .pipe(res)
}