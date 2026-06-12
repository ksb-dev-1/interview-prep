/*

Debouncing is an optimization technique used to limit how often a function executes, such as, typing in a search box.
Instead of executing a function every single time the event is triggered, debouncing ensures the function only runs
after a event stopped firing for a specified amout of time.

*/

/*

const searchInput = document.getElementById("search");

export default function debounce(func, wait) {
  let timeoutId;

  return function(...args){
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }
}
  
function handleSearch(value) {
  console.log("API call : ", value);
}

const debouncedSearch = debounce(handleSearch, 1000);

searchInput.addEventListener("input", function (e) {
  debouncedSearch(e.target.value);
});

*/

/*

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const user = {
  name: "John",

  greet(age) {
    console.log(`${this.name} is ${age} years old`);
  },
};

const debouncedGreet1 = debounce(user.greet, 5000);
debouncedGreet1();
const debouncedGreet2 = debounce(user.greet.bind(user), 5000);
debouncedGreet2(34);

*/

/*

debounce()
   ↓
creates special wrapper function ONCE
   ↓
wrapper remembers timer using closure
   ↓
wrapper called many times
   ↓
same timer reused
   ↓
old executions cancelled

*/
