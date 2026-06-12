class Circle {
  #radius;
  //#value
  constructor(radius, value) {
    this.#radius = radius;
    //this.#value = value
  }

  #privateMethod() {}
}

const c = new Circle(5, 6);
//console.log(c.#radius);
//console.log(c.#privateMethod)
