//Basic Shape class

class Shape {
  draw() {
    throw new Error("This method shoud be implemented by subclasses");
  }
}

class Circly extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing rectangle");
  }
}

// Decorator base class for shapes
class ShapeDecorator extends Shape {
  constructor(shape) {
    super();
    this.shape = shape;
  }
  draw() {
    this.shape.draw();
  }
}
//Color Decorator
class ColorDecorator extends ShapeDecorator {
  constructor(shape, color) {
    super(shape);
    this.color = color;
  }
  draw() {
    super.draw();
    console.log(`With color ${this.color}`);
  }
}

class BorderDecorator extends ShapeDecorator {
  constructor(shape, borderWith) {
    super(shape);
    this.borderWith = borderWith;
  }
  draw() {
    super.draw();
    console.log(` With border with ${this.borderWith}`);
  }
}

//Usage

// Creating basic shapes
let circle = new Circly();
let rectangle = new Rectangle();

// Drawing basic shapes
circle.draw(); // Output: Drawing a circle
rectangle.draw(); // Output: Drawing a rectangle

circle = new ColorDecorator(circle, "red");
circle.draw();

rectangle = new BorderDecorator(rectangle, "5px");
rectangle.draw();
