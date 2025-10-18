const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

function printForIn() {
    let output = "";
    for (let key in person) {
        output += key + ": " + person[key] + "\n";
    }
    document.getElementById("result").innerText = "For-In Loop:\n" + output;
}

function printForEach() {
    let output = "";
    Object.entries(person).forEach(([key, value]) => {
        output += key + ": " + value + "\n";
    });
    document.getElementById("result").innerText = "forEach Loop:\n" + output;
}

function printForOf() {
    let output = "";
    for (let [key, value] of Object.entries(person)) {
        output += key + ": " + value + "\n";
    }
    document.getElementById("result").innerText = "For-Of Loop:\n" + output;
}
