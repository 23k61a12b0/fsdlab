let fruits = ["Apple", "Banana", "Cherry", "Mango"];

function showArray() {
  document.getElementById("arrayDisplay").innerHTML =
    "Fruits: " + fruits.join(", ") + "<br>Length: " + fruits.length;
}

function addElement() {
  fruits.push("Orange");
  showArray();
}

function removeElement() {
  fruits.pop();
  showArray();
}

function sortArray() {
  fruits.sort();
  showArray();
}

function reverseArray() {
  fruits.reverse();
  showArray();
}

function joinArray() {
  let joined = fruits.join(" | ");
  document.getElementById("arrayDisplay").innerHTML =
    "Joined Array: " + joined;
}

showArray();
