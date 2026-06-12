let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let continueBtn = document.querySelector(".continue");
let resetBtn = document.querySelector(".reset");

let errorContainer = document.querySelector(".error-container");
let errorMsg = document.querySelector(".error-msg");

let countdownTimer = null;

startBtn.addEventListener("click", function () {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) return;

  function startInterval() {
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";

    countdownTimer = setInterval(function () {
      timer();
    }, 1000);
  }

  startInterval();
});

stopBtn.addEventListener("click", function () {
  stopInterval("stop");
});

resetBtn.addEventListener("click", function () {
  hours.value = "";
  minutes.value = "";
  seconds.value = "";

  stopInterval();
});

function timer() {
  if (seconds.value > 60) {
    minutes.value++;
    seconds.value = parseInt(seconds.value) - 59;
  }

  if (minutes.value > 60) {
    hours.value++;
    minutes.value = parseInt(minutes.value) - 60;
  }

  minutes.value = minutes.value > 60 ? 60 : minutes.value;

  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    hoursvalue = "";
    minutes.value = "";
    seconds.value = "";
    stopInterval();
  } else if (seconds.value != 0) {
    seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`;
  } else if (hours.value != 0 && minutes.value == 0) {
    minutes.value = 60;
    hours.value = `${hours.value <= 10 ? "0" : ""}${hours.value - 1}`;
  }
}

function stopInterval(state) {
  startBtn.innerHTML = state === "stop" ? "Continue" : "Start";

  stopBtn.style.display = "none";
  startBtn.style.display = "initial";
  clearInterval(countdownTimer);
}
