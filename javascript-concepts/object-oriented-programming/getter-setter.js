class Circle {
  constructor(radius) {
    if (radius < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = radius;
    }
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }
}

const c = new Circle(5);
console.log(c._radius);
c.radius = -10;
console.log(c._radius);
