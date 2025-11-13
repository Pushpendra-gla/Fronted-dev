function calculateMath() {
    let x = parseFloat(document.getElementById("numberInput").value);
    let rounded = Math.round(x);
    let sqrt = Math.sqrt(x);
    let power = Math.pow(x, 3);
    let random = Math.floor(Math.random() * 41) + 10;
    let result = `
        📘 Number: ${x}<br>
        🔹 Rounded Value: ${rounded}<br>
        🔹 Square Root: ${sqrt.toFixed(3)}<br>
        🔹 Cube (x³): ${power.toFixed(3)}<br>
        🎲 Random (10–50): ${random}
    `;
    document.getElementById("output").innerHTML = result;
}
document.getElementById("calcBtn").addEventListener("click", calculateMath);
