const fs = require('fs')

const filename = 'callback1.js'

// fs.readFile(
//   filename, // agr 1
//   (err, fileData) => { //arg 2
//     if (err) return console.error(err)

//     console.log(`${filename}: ${fileData.length}`)
//   }
// )

fs.readFile(
  filename, function rv(err, fileData) {
    if (err) {
      return console.error(err);
    }
    console.log(`${filename}: ${fileData.length}`);
  }
)

// function add() {
//   return 1 + 1;
// }

// let val = () => {
//   return 1 + 1;
// }

let a = 10;
let b = 20;

let aa = 100;
let bb = 200;

function addValues(a, b) {
  return a + b;
}
console.log("The result is : " + addValues(a, b));

let val = (a, b) => {
  return a + b;
}
console.log("The 2nd result is : " + val(aa, bb));