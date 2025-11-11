let expenses = [8000, 2500, 15000, 3000, 2000];

document.getElementById("calcBtn").addEventListener("click", function () {
    
    let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
    let average = total / expenses.length;

    total += total * 0.10;  // Add 10% tax

    let finalTotal = total.toFixed(2);
    let avgRounded = average.toFixed(2);

    document.getElementById("output").innerHTML = `
        <div class="result-box">
            <p><i class="fa-solid fa-chart-line"></i> <strong>Total before tax:</strong> ₹${(average * expenses.length).toFixed(2)}</p>
            <p><i class="fa-solid fa-calculator"></i> <strong>Average Expense:</strong> ₹${avgRounded}</p>
            <p><i class="fa-solid fa-receipt"></i> <strong>Final Total after 10% Tax:</strong> ₹${finalTotal}</p>
        </div>
    `;

    console.table({
        Total_Before_Tax: (average * expenses.length).toFixed(2),
        Average: avgRounded,
        Final_Total_After_Tax: finalTotal
    });
});
