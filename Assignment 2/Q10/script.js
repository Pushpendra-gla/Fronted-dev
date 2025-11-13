function evaluateDepartments() {
    const departments = [
        ["HR", 72],
        ["Finance", 88],
        ["Tech", 95],
        ["Support", 63]
    ];

    let outputHTML = "";

    for (let i = 0; i < departments.length; i++) {
        let [dept, score] = departments[i];
        let status = "";
        let cls = "";

        if (score >= 90) {
            status = "Excellent";
            cls = "excellent";
        } else if (score >= 75 && score <= 89) {
            status = "Good";
            cls = "good";
        } else if (score >= 60 && score <= 74) {
            status = "Average";
            cls = "average";
        } else {
            status = "Needs Improvement";
            cls = "needs";
        }

        outputHTML += `<div class="result ${cls}">${dept}: ${score} → ${status}</div>`;
    }

    document.getElementById("output").innerHTML = outputHTML;
}
