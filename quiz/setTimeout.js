// ----- EXERCISE-1 -----

let func = () => {
  console.log(1);
};

setTimeout(() => {
  func = () => {
    console.log(2);
  };
}, 0);

setTimeout(func, 100);

// ________________________________________________________
