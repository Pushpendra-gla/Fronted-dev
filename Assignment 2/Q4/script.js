function analyzeScores() {
    let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
    let highest = Math.max(...scores);
    let lowest = Math.min(...scores);
    let average = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
    let passed = scores.filter(s => s >= 50).length;
    let result = `
        🎯 Scores: [${scores.join(", ")}]<br>
        🥇 Highest Score: ${highest}<br>
        🥈 Lowest Score: ${lowest}<br>
        📈 Average Score: ${average}<br>
        ✅ Passed Students: ${passed} / ${scores.length}
    `;
    document.getElementById("output").innerHTML = result;
}
document.getElementById("analyzeBtn").addEventListener("click", analyzeScores);
