function checkArmstrong() {
    const num = parseInt(document.getElementById("num").value);
    let sum = 0;
    const numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        sum += Math.pow(parseInt(numStr[i]), numStr.length);
    }

    if (sum === num) {
        document.getElementById("result").innerText = num + " is an Armstrong Number";
    } else {
        document.getElementById("result").innerText = num + " is not an Armstrong Number";
    }
}
