class Arrow {
  constructor(name) {
    this.name = name;
  }

  greet() {
    setTimeout(function () {
      console.log(this);
      console.log(this.name);
    }, 500);

    setTimeout(
      function () {
        console.log(this);
        console.log(this.name);
      }.bind(this),
      500
    );

    setTimeout(() => {
      console.log(this);
      console.log(this.name);
    }, 1000);
  }
}

const arrow = new Arrow("Kedar");
arrow.greet();
