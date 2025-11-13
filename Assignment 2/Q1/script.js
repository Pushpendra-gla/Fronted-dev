let bonus = 5000;

function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = document.getElementById("permanentCheckbox").checked;

    let output = document.getElementById("output");
    if (isPermanent) {
        let total = salary + bonus;
        output.innerHTML = `
            ✅ Employee is Permanent.<br>
            💰 Base Salary: ₹${salary}<br>
            🎁 Bonus: ₹${bonus}<br>
            💵 <strong>Total Salary: ₹${total}</strong>
        `;
    } else {
        output.innerHTML = `
            ⚠️ Employee is Not Permanent.<br>
            💰 Base Salary: ₹${salary}<br>
            ❌ Bonus Not Added.<br>
            💵 <strong>Total Salary: ₹${salary}</strong>
        `;
    }

    console.log("Inside function, bonus =", bonus);
}

document.getElementById("calcBtn").addEventListener("click", calculateSalary);
console.log("Outside function, global bonus =", bonus);
