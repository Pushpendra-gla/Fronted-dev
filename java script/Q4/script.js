document.getElementById("checkBtn").addEventListener("click", function () {
    
    const inputs = document.querySelectorAll(".mark");
    let marks = [];

    inputs.forEach(input => {
        marks.push(Number(input.value));
    });

    if (marks.some(m => m === 0 || m === "")) {
        document.getElementById("output").innerHTML = `<div class="result-box fail">Please enter all marks.</div>`;
        return;
    }

    let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
    let average = total / marks.length;
    let percentage = (total / 500) * 100;

    let resultMessage = "";
    let className = "";

    if (marks.some(m => m < 35)) {
        resultMessage = "Detained (Failed in a Subject)";
        className = "fail";
    } else if (percentage >= 85) {
        resultMessage = "Promoted with Distinction 🎉";
        className = "success";
    } else if (percentage >= 50 && percentage <= 84) {
        resultMessage = "Promoted 🙂";
        className = "medium";
    } else {
        resultMessage = "Detained";
        className = "fail";
    }

    document.getElementById("output").innerHTML = `
        <div class="result-box ${className}">
            <p><strong>Total:</strong> ${total} / 500</p>
            <p><strong>Average:</strong> ${average.toFixed(2)}</p>
            <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
            <p><strong>Result:</strong> ${resultMessage}</p>
        </div>
    `;

    console.table({
        Total: total,
        Average: average.toFixed(2),
        Percentage: percentage.toFixed(2),
        Result: resultMessage
    });
});
