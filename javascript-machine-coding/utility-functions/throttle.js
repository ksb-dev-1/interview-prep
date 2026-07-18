/*

Throttling is an optimization technique used to limit how often a function executes.
It ensures that a function executes only once within a fixed amount of time, no matter how many times the function is called.

*/

function throttle(fn, delay) {
  export default function throttle(func, wait) {
    let timeoutId = null;

    return function (...args) {
      const context = this;

      if (timeoutId === null) {
        func.apply(context, args);

        timeoutId = setTimeout(() => {
          timeoutId = null;
        }, wait);
      }
    };
  }
}

function handleScroll() {
  console.log("Scroll event");
}

const throttledScroll = throttle(handleScroll, 3000);

window.addEventListener("scroll", throttledScroll);
