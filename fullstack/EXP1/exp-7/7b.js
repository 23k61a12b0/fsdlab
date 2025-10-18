let newWin;

function showAlert() {
  window.alert("This is an alert using the window object!");
}

function askName() {
  let name = window.prompt("Enter your name:");
  if (name) document.getElementById("message").innerHTML = "Hello, " + name + "!";
}

function confirmAction() {
  let result = window.confirm("Do you want to continue?");
  document.getElementById("message").innerHTML = result ? "You chose OK." : "You chose Cancel.";
}

function openWindow() {
  newWin = window.open("", "newWindow", "width=400,height=300");
  newWin.document.write("<h2>New Window Opened!</h2>");
  setTimeout(() => newWin.document.body.style.backgroundColor = "#ffeb3b", 1000);
}

function closeWindow() {
  if (newWin) newWin.close();
}
