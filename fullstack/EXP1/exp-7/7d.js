function showConstants() {
  document.getElementById("result").innerHTML =
    "PI: " + Math.PI + "<br>" +
    "E: " + Math.E + "<br>" +
    "SQRT2: " + Math.SQRT2;
}

function calculateSquareRoot() {
  let num = 49;
  document.getElementById("result").innerHTML =
    "Square root of " + num + " is " + Math.sqrt(num);
}

function generateRandom() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("result").innerHTML =
    "Random number between 1 and 100: " + randomNum;
}

function roundNumbers() {
  let n = 7.56;
  document.getElementById("result").innerHTML =
    "Number: " + n + "<br>" +
    "Math.floor(): " + Math.floor(n) + "<br>" +
    "Math.ceil(): " + Math.ceil(n) + "<br>" +
    "Math.round(): " + Math.round(n);
}

function findMaxMin() {
  let nums = [12, 45, 7, 89, 23];
  document.getElementById("result").innerHTML =
    "Numbers: " + nums.join(", ") + "<br>" +
    "Max: " + Math.max(...nums) + "<br>" +
    "Min: " + Math.min(...nums);
}
