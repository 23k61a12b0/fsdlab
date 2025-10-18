function calculateDenomination() {
    let amount = parseInt(document.getElementById("amount").value);
    let denominations = [100, 50, 20, 10, 5, 2, 1];
    let result = "";

    for (let note of denominations) {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result += count + " - " + note + "'s\n";
            amount %= note;
        }
    }

    document.getElementById("result").innerText = result.trim();
}
