/*

Event Bubbling is a concept in the DOM (Document Object Model). 
It happens when an element receives an event, and that event bubbles up 
(or you can say is transmitted or propagated) to its parent and ancestor 
elements in the DOM tree until it gets to the root element.

*/

// const body = document.querySelector("body")
// const div = document.querySelector("div")
// const span = document.querySelector("span")
// const button = document.querySelector("button")

// body.addEventListener('click', () => {
//   console.log("body was clicked")
// })

// div.addEventListener('click', () => {
//   console.log("div was clicked")
// })

// span.addEventListener('click', () => {
//   console.log("span was clicked")
// })

// button.addEventListener('click', (event) => {
//   event.stopPropagation()
//   console.log("button was clicked")
// })

const parent = document.querySelector("div");
const child = document.querySelector(".child");

parent.addEventListener("click", function () {
  console.log("clicked parent");
});

child.addEventListener("click", function () {
  console.log("clicked child");
});
