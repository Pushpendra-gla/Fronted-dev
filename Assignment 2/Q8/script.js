function calculateDiscount() {
    const cart = [
        { item: "Laptop", category: "electronics", price: 45000 },
        { item: "Shoes", category: "fashion", price: 2500 },
        { item: "Book", category: "education", price: 600 }
    ];

    let total = 0;
    let details = "";

    cart.forEach(product => {
        let discount = 0;
        if (product.category === "electronics") discount = 0.10;
        else if (product.category === "fashion") discount = 0.05;
        let finalPrice = product.price - (product.price * discount);
        total += finalPrice;
        details += `<div class="item">${product.item} (${product.category}) → ₹${finalPrice.toFixed(2)}</div>`;
    });

    if (total > 50000) total -= total * 0.05;

    document.getElementById("output").innerHTML = `
        ${details}
        <p><strong>Final Total: ₹${total.toFixed(2)}</strong></p>
    `;
}
