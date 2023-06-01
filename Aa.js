var person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    }
  };
  
  // Accessing object properties
  console.log(person.name); // Output: John Doe
  console.log(person.age); // Output: 30
  
  // Calling object method
  person.greet(); // Output: Hello, my name is John Doe and I'm 30 years old.
  
  // Modifying object properties
  person.age = 35;
  console.log(person.age); // Output: 35
  
  // Object creation using constructor function
  function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  // Creating instances of the Car object
  var car1 = new Car("Tesla", "Model S", 2020);
  var car2 = new Car("Toyota", "Camry", 2019);
  
  // Accessing object properties
  console.log(car1.brand); // Output: Tesla
  console.log(car2.model); // Output: Camry
   