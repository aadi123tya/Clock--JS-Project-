let switch_1 = true;
// constl
setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();

  if (hours < 10) {
    hours = `0${hours}`;
  } else if (minutes < 10) {
    minutes = `0${minutes}`;
  } else if (seconds < 10) {
    seconds = `0${seconds}`;
  }

const quotes_array = ['time is important','time is preciuous']

  const time = document.querySelector("#time");
  if (hours > 12) {
    time.innerHTML = `${hours}:${minutes}:${seconds} PM`;
  } else {
    time.innerHTML = `${hours}:${minutes}:${seconds} AM`;
  }
  document.querySelector("#day").innerHTML = dayName(day);
});

function dayName(n) {
  switch (n) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thrusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      "no day";
  }
}


