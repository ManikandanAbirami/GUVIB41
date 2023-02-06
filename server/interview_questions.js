//Missed topics:

// template literals
// spread & rest prarameter
// array & object destructure
// property shorthand
// Deploying react to netlify
// Working with array lists
// useRef, useReducer
// Front end game demonstration - hangman / tictactoe / tile match
// Context-API
// What is context, provide, createContext
// Avoid props drilling
// Session-based Hands-on practice Task with any Admin Dashboard
// Playing around with API
// fetch() or axios
// Completed recap by implementing any Front end game/CRUD to understand the importance of hooks 
// ex: - hangman / tictactoe / tile match
// Intro to Redux - to understand the state management with react application




//Node.js
//Definition - Node.js is an open source and cross-platform runtime environment
//             for executing JavaScript code outside of a browser.
//             Node.js uses an event driven non-blocking I/O model.
//Advantages of using node.js
//1. Open source 
//2. Multi-Platform support
//3. Wide Support through NPM(Node package manager) Library - https://www.npmjs.com/

//Data types:
//There are mainly two custom data types used in node.js:
//1. Arrays
//2. Objects

//Node Architecture:
//JS runtime has several components,
//1. Execution/Call stack
//2. Web API container
//3. Callback Queue
//4. Event Loop

//Basic Routing
//req.url - It will always contain the full path of the client request
//Routing - All client requests are not same, we should respond differently 
//           based on the requested url path

//Dynamic Response:
//Endpoint that accepts arguments via query parameters

//File Serving
//core modules in Node.js - http, querystring, fs

//Express.js:
//Fast and minimalist web framework for Node.js
//Express is a replacement for the core http module.
//The major difference between http and express is routing.
//Express comes with a built in router!

//Instead of http module use express to do the following,
//1. Text
//2. json
//3. Querystring
//4. file serving
//5. Not found - give a try

//CORS - Cross Origin Resource Sharing

//Async
//1. Callback - A callback is a function which is called when a task is completed.
//              Thus, it helps in preventing any kind of blocking and a callback function
//              allows other code to run in the meantime.
//              A callback is a function that we are going to call when the result
//              of an asynchronous operation is ready.

//2. Callback Hell - Callback has deeply nested structure.

//3. PROMISE - Holds the eventual result of an asynchronous operation.
//             A Promise basically promises you that it would give you the 
//             result of an asynchronous operation. 
//             Promise object can be in one of the 3 states. 
//             Pending -->(async operation)-->Fulfilled(Resolved)/Rejected

//Application(Web/Mobile) ==> FrontEnd(UI/Client), BackEnd(Server), DataBase(DB)

//DB - DataBase
//Relational DB vs Non-Relational DB

//1. DataBase - A database is a set of data held in a computer that can 
//              be accessible in various manners.

//2. Relational DataBase - A relational database is structured, meaning the data 
//                         is organized in tables. Many times, the data within these 
//                         tables have relationships with one another, or dependencies.
//                         (SQL, MySQL, ORACLE) - Structured Query Language

//3. Non-Relational DataBase - A non relational database is document-oriented, meaning, 
//                             all information gets stored in more of a laundry list order. 
//                             Within a single construct, or document, you will have all of 
//                             your data listed out.(NoSQL) - MongoDB

//MVC:
//Model is data part.
//View is User Interface part.
//Controller is request - response handler.