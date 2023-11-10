const showtime = document.querySelector(".showTime");
const submit = document.querySelector("#start");
const hours_input = document.querySelector("#hours");
const minutes_input = document.querySelector("#minutes");
const seconds_input = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let running_watch;



submit.addEventListener(
  "click",
  function () {
    let hours = hours_input.value;
    let minutes = minutes_input.value;
    let seconds = seconds_input.value;

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes > 60 || hours < 0 || minutes < 0 || seconds < 0 || seconds > 60)
      alert("Not Valid");
    else {
      if (hours >= 0 && seconds >= 0 && minutes >= 0) {
        stopwatch(hours, minutes, seconds);
      } else console.log("finish");
    }
  },
  false
);

function change_value(hours, minutes, seconds) {}

function stopwatch(hours, minutes, seconds) {
   running_watch = setInterval(() => {
    if (seconds >= 0) showtime.innerHTML = `${hours}:${minutes}:${seconds}`;

    seconds--;
    if (seconds < 10) seconds = `0${seconds}`;
    if (seconds == 0) {
      if (minutes > 0) {
        minutes--;
        if (minutes < 10) minutes = `0${minutes}`;
        seconds = 60;
      } else if (minutes == 0) {
        if (hours > 0) {
          hours--;
          if (hours < 10) hours = `0${hours}`;
          minutes = 60;
          seconds = 60;
        }
        else {
          setTimeout(() => {
            alert("stop");
          }, 2000);
        }
      } else {
        setTimeout(() => {
          alert("stop");
        }, 2000);
      }
    }
  }, 1000);




}

stop.addEventListener('click',function(){
  console.log('stop clicked')
  clearInterval(running_watch)
},false)


reset.addEventListener('click',function(){
  console.log('reset clicked')
  showtime.innerHTML = '00:00:00'
  clearInterval(running_watch)
},false)