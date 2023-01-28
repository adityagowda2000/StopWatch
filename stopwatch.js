hours = document.getElementsByClassName("Hours");
mins = document.getElementsByClassName("Mins");
secs = document.getElementsByClassName("Seconds");
startbtn = document.getElementsByClassName("startbtn");
stopbtn = document.getElementsByClassName("stopbtn");
resetbtn = document.getElementsByClassName("resetbtn");
title = document.getElementsByTagName("title");
let audio = new Audio("click1.wav");
let isStarted = false; //is the stopwatch stared already
let stopWatch;
let isResume = false; //is the start button modified to display resume

startbtn[0].onclick = () => {
  start();
  audio.play();
};

stopbtn[0].onclick = () => {
  stop();
  audio.play();
};

resetbtn[0].onclick = () => {
  reset();
  audio.play();
};

function start() {
  if (!isStarted) {
    console.log("started");
    stopWatch = setInterval(updateTime, 1000);
    isStarted = true;
    if (isResume) {
      startbtn[0].innerHTML = "Start";
      isResume = false;
    }
  }
}

function stop() {
  if (isStarted) {
    console.log("stopped");
    clearInterval(stopWatch);
    isStarted = false;
    startbtn[0].innerHTML = "Resume";
    isResume = true;
  }
}

function reset() {
  console.log("resetted");
  hours[0].innerHTML = "00";
  mins[0].innerHTML = "00";
  secs[0].innerHTML = "00";
  title[0].innerHTML = "Stopwatch";
  clearInterval(stopWatch);
  isStarted = false;
  if (isResume) {
    isResume = false;
    startbtn[0].innerHTML = "Start";
  }
}

function updateTime() {
  h = Number(hours[0].innerHTML);
  m = Number(mins[0].innerHTML);
  s = Number(secs[0].innerHTML);
  title[0].innerHTML = String(h) + ":" + String(m) + ":" + String(s); // now the document title will display the time and will change dynamically as the time changes
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
