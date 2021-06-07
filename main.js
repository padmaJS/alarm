const currentTimeElem = document.getElementById("current-time");
const alarmInput = document.getElementById("alarm-input");
let alarmCheckerInterval;
let currentTimeWithoutSec;
setInterval(showTime, 1000);
function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM"
  if (h > 12) {
    h = h - 12
    session = "PM"
  }
  if (h < 10) {
    h = "0" + h
  }
  if (m < 10) {
    m = "0" + m
  }
  if (s < 10) {
    s = "0" + s
  }
  currentTimeElem.innerText = h + ":" + m + ":" + s + " " + session;
}

var audio = document.getElementById("alarmSound");
 
function checkForAlarm() {
  if(!alarmInput.value) {
    return;
  }
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var hour = Number(alarmInput.value.slice(0,2))
  var minute = Number(alarmInput.value.slice(3))
  if(h - hour == 0 && m - minute == 0){
    audio.play();
  }
}
var startButton = document.getElementById("set-alarm")
var clearButton = document.getElementById("clear-alarm");
clearButton.disabled = true;

startButton.onclick = () => {
  alarmCheckerInterval = setInterval(checkForAlarm, 1000)
  clearButton.disabled = false;
  startButton.disabled = true;
}
 

clearButton.onclick = () => {
  clearInterval(alarmCheckerInterval);
  startButton.disabled = false;
  clearButton.disabled = true;
  audio.pause();
}
