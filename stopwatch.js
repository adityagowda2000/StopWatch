hours = document.getElementsByClassName("Hours");
mins = document.getElementsByClassName("Mins");
secs = document.getElementsByClassName("Seconds");
startbtn = document.getElementsByClassName("startbtn");
stopbtn = document.getElementsByClassName("stopbtn");
resetbtn = document.getElementsByClassName("resetbtn");
let isStarted = false;
let stopWatch;

startbtn[0].onclick = () => {
  start();
};

stopbtn[0].onclick = () => {
  stop();
};

resetbtn[0].onclick = () => {
  reset();
};

function start() {
  if (!isStarted) {
    console.log("started");
    stopWatch = setInterval(updateTime, 1000);
    isStarted = true;
  }
}

function stop() {
  console.log("stopped");
  clearInterval(stopWatch);
  isStarted = false;
}

function reset() {
  console.log("resetted");
  hours[0].innerHTML = "00";
  mins[0].innerHTML = "00";
  secs[0].innerHTML = "00";
  clearInterval(stopWatch);
  isStarted = false;
}

function updateTime() {
  h = Number(hours[0].innerHTML);
  m = Number(mins[0].innerHTML);
  s = Number(secs[0].innerHTML);
  if (s === 59) {
    if (m === 59) {
      mins[0].innerHTML = "00";
      secs[0].innerHTML = "00";
      let nexth = getNextTime(h);
      hours[0].innerHTML = nexth;
    } else {
      secs[0].innerHTML = "00";
      let nextm = getNextTime(m);
      mins[0].innerHTML = nextm;
    }
  } else {
    let nexts = getNextTime(s);
    secs[0].innerHTML = nexts;
  }
}

function getNextTime(t) {
  let next;
  if (t + 1 <= 9) {
    next = String(t + 1);
    next = "0" + next;
  } else {
    next = String(t + 1);
  }
  return next;
}
