/*

Event Delegation is a pattern based upon the concept of Event Bubbling. 
It is an event-handling pattern that allows you to handle events at a higher level 
in the DOM tree other than the level where the event was first received.

OR

Event delegation in JavaScript is a pattern that efficiently handles events. 
Instead of adding individual event listeners to each child element, you let the 
ancestor element handle the events and determine which child triggered the event. 
This technique reduces the number of event listeners in your code and offers several advantages.

Benefits 

It is useful because the event can be listened to on multiple elements by using just one vent handler. 
It also uses less memory and gives better performance.

The 3 steps to using event delegation

--> Determine the parent of elements to watch for events
--> Attach the event listener to the parent element
--> Use event.target to select the target element

*/

//const buttons = document.querySelectorAll('button')
//console.log(buttons)

// buttons.forEach(button => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText)
//   })
// })

// Above we have created 3 event listeners

const div = document.querySelector('div')
console.log(div)

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText)
  }
})

// Above we have created only 1 event listener
