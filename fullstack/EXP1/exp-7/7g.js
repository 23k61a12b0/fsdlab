function showDate() {
  let today = new Date();
  let date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  document.getElementById("result").innerHTML = "Current Date: " + date;
}

function showTime() {
  let now = new Date();
  let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  document.getElementById("result").innerHTML = "Current Time: " + time;
}

function showFullDateTime() {
  let now = new Date();
  document.getElementById("result").innerHTML = "Full Date & Time: " + now.toLocaleString();
}

function dayOfWeek() {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let today = new Date();
  document.getElementById("result").innerHTML = "Today is: " + days[today.getDay()];
}
