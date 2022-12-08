function greet(name) {
  var greeting = "Hello, " + name;
  return function () {
    console.log(greeting);
  }
  // return console.log(greeting);
}

var display = greet("GUVI");
// display();

//A closure is basically an inner function that has access to the outer(enclosing) function's resources
//due to the scope chain where a child can access all the resources of its parent.

function modifyCartItems() {
  let items = 0;

  return {
    add: function () {
      console.log("Items Added to cart!!");
      items++;
    },

    getCount: function () {
      console.log("Items in cart = " + items);
    }
  }
}
var item = modifyCartItems();

item.add();
item.add();
item.add();
item.add();
item.getCount();
