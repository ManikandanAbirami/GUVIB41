class Vehicle {
  constructor() {
    console.log("Welcome to constructor!!");
  }
  display() {
    console.log("Welcome to class");
  }
}

// veh = new Vehicle();
//objectNAme = new className();
// veh.display();

//constructor - It is a fucntion in each calss. This function is the first function to be called when the class is instantiated.
//Instantiating - It means creating an object of the class and this is done using the new operator/keyword.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("From Person constructor");
  }

  getName() {
    console.log("From Person function getName: " + this.name);
  }
}

class Employee extends Person {
  constructor(name, id, age) {
    super(name, age);
    this.id = id;
    console.log("From Employee constructor");
  }

  getID() {
    console.log("From Employee function getID: " + this.id);
  }
}

emp = new Employee("Guvi", "B-41", 26);
emp.getID();
emp.getName();
