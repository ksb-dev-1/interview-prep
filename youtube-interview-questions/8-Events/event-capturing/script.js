const parent = document.querySelector("div");
const child = document.querySelector(".child");

parent.addEventListener(
  "click",
  function () {
    console.log("clicked parent");
  },
  true
);

child.addEventListener("click", function () {
  console.log("clicked child");
});
