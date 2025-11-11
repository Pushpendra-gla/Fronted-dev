document.getElementById("calcDiscount").addEventListener("click", function () {

    let total = Number(document.getElementById("amount").value);

    if (!total || total <= 0) {
        document.getElementById("output").innerHTML = `<div class="result-box">Please enter a valid purchase amount.</div>`;
        return;
    }

    let discount = 0;

    if (total >= 10000) {
        discount = 25;
    } else if (total >= 5000) {
        discount = 15;
    } else if (total >= 2000) {
        discount = 5;
    } else {
        discount = 0;
    }

    let discountAmount = (total * discount) / 100;
    let finalPrice = total - discountAmount;

    let roundedFinal = Math.round(finalPrice);
    let roundedDiscountAmt = Math.round(discountAmount);

    document.getElementById("output").innerHTML = `
        <div class="result-box">
            <p><strong>Original Total:</strong> ₹${total}</p>
            <p><strong>Discount:</strong> ${discount}%</p>
            <p><strong>Discount Amount:</strong> ₹${roundedDiscountAmt}</p>
            <p><strong>Final Price After Discount:</strong> ₹${roundedFinal}</p>
        </div>
    `;

    console.table({
        Original_Total: total,
        Discount_Percentage: discount + "%",
        Discount_Amount: roundedDiscountAmt,
        Final_Price: roundedFinal
    });
});
