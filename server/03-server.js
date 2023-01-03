const http = require('http')

const port = process.env.PORT || 1337

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/') return respondText(req, res)

  if (req.url === '/json') return respondJson(req, res)

  respondNotFound(req, res)
})

server.listen(port);

console.log(`Server listening on port ${port}`);

function respondText(req, res) {
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello')
}

function respondJson(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ text: 'Hello', numbers: [1, 2, 3, 4, 5] }))
}

function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not Found')
}