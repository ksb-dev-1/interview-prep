// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const g = gen();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// ------------------------------------------------

function* startGame() {
  const answer = yield "Do you love JavaScript?";
  console.log(answer);
  if (answer !== "Yes") {
    return "Oh wow... Guess we're done here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(game.next().value); // Do you love JavaScript?
console.log(game.next("Yes").value); // JavaScript loves you back ❤️

async function getData() {
  return await Promise.resolve("I made it!");
}

const data1 = getData();
console.log(data1);
const data2 = getData().then((data) => data);
console.log(data2);

console.log(String.raw`Hello\nworld`);
