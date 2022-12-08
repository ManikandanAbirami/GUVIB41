var person = {
  name: "John",
  get: function () {
    console.log(this);
  }
}

// person.get();


var operation = {
  a: 1,
  b: 2,

  add: function () {
    console.log("a = " + this.a + ", b = " + this.b);
    var print = function () {
      var display = {
        a: 100,
        b: 200,
        disp: function () {
          console.log("a = " + this.a + ", b = " + this.b)
        }
      }
      display.disp();
    }
    print();
  }
}

operation.add();