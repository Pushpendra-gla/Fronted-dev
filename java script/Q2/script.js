// Data Variables
let userName = "Pushpendra";
let userAge = 18;
let isPremiumUser = true;
let favoriteColors = ["Red", "Blue"];
let userAddress = { city: "Delhi", pin: 110001 };
let userToken = null;
let lastLogin;

// Create Data Summary Array
const summary = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Premium User", Value: isPremiumUser, Type: typeof isPremiumUser },
    { Label: "Favorite Colors", Value: favoriteColors, Type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors },
    { Label: "User Address", Value: JSON.stringify(userAddress), Type: typeof userAddress },
    { Label: "User Token", Value: userToken, Type: typeof userToken },
    { Label: "Last Login", Value: lastLogin, Type: typeof lastLogin }
];

document.getElementById("showDataBtn").addEventListener("click", function () {
    displayTable();
    console.table(summary);
});

function displayTable() {
    let output = `
        <table>
            <tr>
                <th>Label</th>
                <th>Value</th>
                <th>Type</th>
            </tr>
    `;

    summary.forEach(item => {
        output += `
            <tr>
                <td>${item.Label}</td>
                <td>${item.Value}</td>
                <td>${item.Type}</td>
            </tr>
        `;
    });

    output += `</table>`;
    document.getElementById("output").innerHTML = output;
}
