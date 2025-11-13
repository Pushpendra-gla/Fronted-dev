function processFeedback() {
    let feedback = document.getElementById("feedback").value;
    let words = feedback.split(" ").filter(word => word !== "");
    let wordCount = words.length;
    let isNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
    let result = isNegative ? "Needs Improvement 😞" : "Positive Feedback 🌟";
    document.getElementById("output").innerHTML = `
        <p>${result}</p>
        <p>Total Words: ${wordCount}</p>
    `;
}
