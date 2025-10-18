let str = "Welcome to JavaScript!";

function showLength() {
  document.getElementById("result").innerHTML = 
    "String: " + str + "<br>Length: " + str.length;
}

function toUpper() {
  document.getElementById("result").innerHTML = 
    "Uppercase: " + str.toUpperCase();
}

function toLower() {
  document.getElementById("result").innerHTML = 
    "Lowercase: " + str.toLowerCase();
}

function showChar() {
  let index = 5;
  document.getElementById("result").innerHTML = 
    "Character at index " + index + ": " + str.charAt(index);
}

function showSubstring() {
  document.getElementById("result").innerHTML = 
    "Substring (0–7): " + str.substring(0, 7);
}

function replaceWord() {
  let newStr = str.replace("JavaScript", "HTML");
  document.getElementById("result").innerHTML = 
    "Replaced: " + newStr;
}

function concatString() {
  let add = " Let's learn more!";
  document.getElementById("result").innerHTML = 
    "Concatenated: " + str.concat(add);
}
