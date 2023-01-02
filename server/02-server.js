const http = require('http')

const port = process.env.PORT || 1337

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ text: 'Hello', numbers: [1, 2, 3, 4] }))
})

server.listen(port);

console.log(`Server listening on port ${port}`);