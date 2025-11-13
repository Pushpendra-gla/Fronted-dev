function formatTitle() {
    let product = document.getElementById("productInput").value;
    let cleaned = product.trim().toLowerCase();
    cleaned = cleaned.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    cleaned = cleaned.replace("Pro", "Pro Edition");
    let length = cleaned.length;
    document.getElementById("output").innerHTML = `
        🧾 Formatted Title: <strong>${cleaned}</strong><br>
        🔢 Title Length: ${length} characters
    `;
}
document.getElementById("processBtn").addEventListener("click", formatTitle);
