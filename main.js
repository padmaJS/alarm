var time1;
function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  time1 = h + m + s;
  if (h < 10) {
    h = "0" + h
  }
  if (m < 10) {
    m = "0" + m
  }
  if (s < 10) {
    s = "0" + s
  }
  
  var time2 = h + ":" + m + ":" + s ;
  document.getElementById("realTime").innerText = time2;
  
}

setInterval(showTime, 1000);
  
  var alrm_h = document.getElementById("hours").value;
  var alrm_m = document.getElementById("minutes").value;
  var alrm_s = document.getElementById("seconds").value;
  var alarmTime = alrm_h + alrm_m + alrm_s;
  
  if (alarmTime == time1) {
    console.log("wake up")
  }
