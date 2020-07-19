const currentTimeElem = document.getElementById("current-time");
const alarmInput = document.getElementById("alarm-input");
let alarmCheckerInterval;
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
  currentTimeWithoutSec = currentTimeElem.innerText.slice(0,5)
  if(alarmInput.value == currentTimeWithoutSec){
    audio.play();
  }
}
 
document.getElementById("set-alarm").onclick = () => {
  clearInterval(alarmCheckerInterval);
  alarmCheckerInterval = setInterval(checkForAlarm, 1000)
  clearButton.disabled = false;
}
 
var clearButton = document.getElementById("clear-alarm");

clearButton.onclick = () => {
  clearInterval(alarmCheckerInterval);
  clearButton.disabled = true;
  audio.pause();
}
