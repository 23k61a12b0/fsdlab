function printFor() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById("result").innerText = "For Loop: " + output;
}

function printWhile() {
    let output = "";
    let i = 1;
    while (i <= 10) {
        output += i + " ";
        i++;
    }
    document.getElementById("result").innerText = "While Loop: " + output;
}

function printDoWhile() {
    let output = "";
    let i = 1;
    do {
        output += i + " ";
        i++;
    } while (i <= 10);
    document.getElementById("result").innerText = "Do-While Loop: " + output;
}
