//Your First Node.js API
//API - Application Programming Interface
// require('dotenv').config();
const http = require('http') //Hyper Text Transfer Protocol
//require() - is a globally accessible function in Node.js and is always available.

const port = process.env.PORT || 1337

//We use http.createServer to create HTTP server object and assign it to the server variable.
//http.createServer() accepts a single argument: a request listener function.
//At this point our server object has been created.
//If a browser(client) request comes in, our request listener function will run,
//and we will send data back to the browser(client).
//Request --> server object(request listener function) --> run request listener function 
//--> send back data to browser(client)
const server = http.createServer(function (req, res) {
  res.end('Hello Guvi members, welcome to B41-WD batch.');
})

//server object to listen for requests on a particular port
server.listen(port);

//Print a message
console.log(`Server listening on port ${port}`);

//High performance web server with Node.js