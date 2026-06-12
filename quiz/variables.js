// ----- EXERCISE-1 -----

function func() {
  const a = (b = c = 1);
}
func();
console.log(typeof a, typeof b, typeof c);

// ________________________________________________________
