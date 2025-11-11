document.getElementById("calcBtn").addEventListener("click", function () {

    let currentSalary = Number(document.getElementById("salary").value);
    let incrementRate = Number(document.getElementById("increment").value);

    if (!currentSalary || !incrementRate || currentSalary <= 0 || incrementRate <= 0) {
        document.getElementById("output").innerHTML =
            `<div class="result-box">Enter valid salary & increment values!</div>`;
        return;
    }

    let salaryData = [];
    let displayHTML = `<div class='result-box'><h3>5-Year Salary Growth</h3>`;

    for (let year = 1; year <= 5; year++) {
        currentSalary += currentSalary * (incrementRate / 100);
        let roundedSalary = Math.round(currentSalary);

        salaryData.push({
            Year: year,
            Salary: `₹${roundedSalary}`
        });

        displayHTML += `<p>Year ${year}: <strong>₹${roundedSalary}</strong></p>`;
    }

    displayHTML += `</div>`;
    document.getElementById("output").innerHTML = displayHTML;

    console.table(salaryData);
});
