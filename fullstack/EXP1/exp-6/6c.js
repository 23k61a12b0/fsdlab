
document.getElementById("btn1").addEventListener("click", function () {
  let name = prompt("Enter your name:");
  document.getElementById("output").innerHTML =
    "Hello, " + name + "! (Taken using prompt())";
});


document.getElementById("btn2").addEventListener("click", function () {
  let name = document.getElementById("userInput").value;
  document.getElementById("output").innerHTML =
    "Hello, " + name + "! (Taken using input field)";
});

document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("output").innerHTML =
    "In browser: Use prompt() or input tag.<br>" +
    "In Node.js, use readline or prompt-sync library for console input.";
  console.log("Example (Node.js):");
  console.log("const readline = require('readline');");
  console.log("const rl = readline.createInterface({ input: process.stdin, output: process.stdout });");
  console.log("rl.question('Enter your name: ', ans => { console.log('Hello, ' + ans); rl.close(); });");
});
