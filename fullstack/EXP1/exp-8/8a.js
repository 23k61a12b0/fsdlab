function compareNumbers() {
    
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);

    let message = "";

    if (num1 === num2 && num2 === num3) {
        message = "<b>EQUAL NUMBERS</b>";
    } else {
        
        let largest = Math.max(num1, num2, num3);
        message = `<b>${largest} LARGER NUMBER</b>`;
    }

    
    alert(message);
}
