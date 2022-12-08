//Primitive type - Number, string, boolean etc
//Non-primitive type - Objects, arrays

//declaration & Initialization
//var, let, const

//Prototype - __proto__

var num; //declaration

num = 100; //initialization

var name = "Mani";

console.log(num.__proto__);
console.log(typeof (num));

// console.log(name.__proto__);

//Prototypal inheritance

const vehicle = {
  run: true,
  brake: true,
  turn: true,
  wheel: 4,
};

const car = {

};

const swift = {
  type: "Hatchback"
}


const bike = {
  wheel: 2,
}

car.__proto__ = vehicle;
swift.__proto__ = car;
console.log(swift.run);