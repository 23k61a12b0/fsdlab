
document.getElementById("btn1").addEventListener("click", function () {
  alert("This is output using alert()");
});

document.getElementById("btn2").addEventListener("click", function () {
  document.write("<h3>This is output using document.write()</h3>");
});

document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("result").innerHTML =
    "This is output using innerHTML property.";
});

document.getElementById("btn4").addEventListener("click", function () {
  console.log("This is output shown using console.log()");
  alert("Open the browser console (F12 → Console) to view the message!");
});
