let text = "The rain in SPAIN stays mainly in the plain.";
let pattern = /ain/gi; 

function testRegex() {
  let result = pattern.test(text);
  document.getElementById("result").innerHTML =
    "Does the text contain 'ain'? " + result;
}

function execRegex() {
  let result = pattern.exec(text);
  document.getElementById("result").innerHTML =
    "First match found: " + result;
}

function matchRegex() {
  let result = text.match(pattern);
  document.getElementById("result").innerHTML =
    "All matches: " + result.join(", ");
}

function replaceRegex() {
  let result = text.replace(pattern, "XYZ");
  document.getElementById("result").innerHTML =
    "After replacement: " + result;
}

function searchRegex() {
  let result = text.search(/SPAIN/i);
  document.getElementById("result").innerHTML =
    "Position of 'SPAIN': " + result;
}
