// Basic Coffee class
class Coffee {
  constructor() {
    this.cost = 5; // base cost of coffee
    this.description = "Basic Coffee";
  }

  getTotalCost() {
    return this.cost;
  }

  getDescription() {
    return this.description;
  }
}
// Decorator Base Class
class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getTotalCost() {
    return this.coffee.getTotalCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}
// Milk Decorator
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
    this.cost = 1;
    this.description = " with Milk";
  }

  getTotalCost() {
    return super.getTotalCost() + this.cost;
  }

  getDescription() {
    return super.getDescription() + this.description;
  }
}

// Sugar Decorator
class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
    this.cost = 0.5;
    this.description = " with Sugar";
  }

  getTotalCost() {
    return super.getTotalCost() + this.cost;
  }

  getDescription() {
    return super.getDescription() + this.description;
  }
}

// Cream Decorator
class CreamDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
    this.cost = 1.5;
    this.description = " with Cream";
  }

  getTotalCost() {
    return super.getTotalCost() + this.cost;
  }

  getDescription() {
    return super.getDescription() + this.description;
  }
}
// Creating a basic coffee order
let myCoffee = new Coffee();
console.log(myCoffee.getDescription() + ": $" + myCoffee.getTotalCost());

// Adding milk to the coffee
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getDescription() + ": $" + myCoffee.getTotalCost());

// Adding sugar to the coffee
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription() + ": $" + myCoffee.getTotalCost());

// Adding cream to the coffee
myCoffee = new CreamDecorator(myCoffee);
console.log(myCoffee.getDescription() + ": $" + myCoffee.getTotalCost());
