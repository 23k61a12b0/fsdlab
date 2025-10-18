function changeContent() {
  let paragraph = document.getElementById("info");
  paragraph.innerHTML = "The content has been changed using the <b>document</b> object!";
  paragraph.style.color = "#d62828";
}

function showInfo() {
  alert(
    "Document Title: " + document.title +
    "\nURL: " + document.URL +
    "\nLast Modified: " + document.lastModified
  );
}

document.title = "DOM Object Example";
