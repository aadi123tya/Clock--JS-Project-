const timer = document.querySelector("#timer");
const stop = document.querySelector("#stop");
const input = document.querySelector("input");
const submit = document.querySelector("button");
const reset = document.querySelector('#reset')
let start_interval;

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
 reset.addEventListener('click',function(){
  location.reload();
  timer.innerHTML = `00:00:00:00`;
  console.log('reset clicked')
},false)


submit.addEventListener(
  "click",
  function () {


    start_interval = setInterval(function () {
        // console.log('start clicked')
      timer.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;

      milliseconds++;
      if (milliseconds < 10) milliseconds = `0${milliseconds}`;
      if (milliseconds == 100) {
        if (seconds < 60) {
          seconds++;
          milliseconds = 0;
          seconds = seconds < 10 ? `0${seconds}` : seconds;
          if (seconds == 60) {
            minutes++;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = 0;
            if (minutes == 60) {
              hours++;
              hours = hours < 10 ? `0${hours}` : hours;
              minutes = 0;
              seconds = 0;
            }
          }
        }
      }
    }, 10);
  },
  false
);

stop.addEventListener(
  "click",
  function () {
    clearInterval(start_interval)
    console.log('stop clicked')
  },
  false
);


