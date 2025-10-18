
function showExternal() {
  document.getElementById("output").innerHTML =
    "Hello from <b>External JavaScript</b>!";
}


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn2").addEventListener("click", showExternal);
});
