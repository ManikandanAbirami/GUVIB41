//ES5
// let a = 50;
// let b = 16;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

//ES6
// let a = 50, b = 16;

// [a, b] = [b, a];

// console.log(a, b);

//pass by value vs pass by reference

var a = 50; // a -> L1
var b = a; // b -> L2
//primitive type
a = 15;
console.log(a, b);

//non-primitive type
var aa = { key1: 1, key2: 2 }; // aa -> L11
var bb = aa; // bb -> L22 => L11
aa.key1 = 30;
console.log(aa, bb);



