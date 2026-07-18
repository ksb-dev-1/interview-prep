function Shape() {}

Shape.prototype.shape = function (shape = "square") {
  console.log(`The shape is ${shape}`);
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);

function Triangle() {}

Triangle.prototype = Object.create(Shape.prototype);

const s = new Shape();
const c = new Circle();
const t = new Triangle();

console.log(s.shape());
console.log(c.shape("circle"));
console.log(t.shape("triangle"));
