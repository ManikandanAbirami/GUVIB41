// const { process } = require("ipaddr.js");

let count = 0;

setInterval(
  () => console.log(`${++count} count`), // 1st parameter(arg)
  1000 //2nd parameter(arg)
)

setTimeout(
  () => {
    console.log('hello all!!!')
    // process.exit()
  }, // 1st parameter(arg) - callback
  5000) //2nd parameter(arg) - delay