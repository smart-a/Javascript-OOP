// Javacript Object

// Super or Parent Constructor
function Shape(color) {
  this.color = color;
}

// Intermediate function inheritance
function extend(Parent, Child) {
  // Inherite from Shape object
  Child.prototype = Object.create(Parent.prototype);

  // Restting contructor
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  this.radius = radius;

  // Calling super constructor arg (Shape constructor)
  Shape.call(this, color);

  let defualtLocation = { x: 0, y: 0 };

  this.getLocation = function () {
    return defualtLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  // Configure variable with setter and getter
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defualtLocation;
    },
    set: function (value) {
      defualtLocation = value;
    },
  });
}

// Prototype method
Shape.prototype.move = function () {
  console.log("move");
};

extend(Shape, Circle);
const c = new Circle(1, "blue");
c.draw();
c.move();
