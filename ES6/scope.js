//Scope - Local & GLobal [lexical]

//var(ES5), let, const(ES6)

//Local Scope : inside a function
//Global Scope : not inside any function

//function scope

//var - function scope
//let, const - block scope

// var y = 'english';

function tamilNadu() {
  var x = 'tamil'
  console.log(x)
  console.log(y)
}

function india() {

  console.log(y)
}

function northIndia() {
  var z = 'hindi'
  console.log(z)
  console.log(y)
}

// tamilNadu();
// india();
// northIndia();

//status : status == true
//!status : status == false

function placeOrder(status) {
  if (status) {
    const message = "Order placed successfully!!"
    console.log(message);
  }
  console.log(message);
}

// placeOrder(true);


function grandFather() {
  let x = 10;
  dad();


  function dad() {
    let y = 20;
    console.log(x, y);
    Son();

    function Son() {
      let z = 30;
      console.log(x, y, z);
    }
  }
}

grandFather();

//Lexical scope refers to the fact that when one function, referred to as the parent funciton contains another function
//referred to as the child function, then the child function can access everything defined inside the parent function.
//Top-down approach!!