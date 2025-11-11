document.getElementById("checkBtn").addEventListener("click", function () {

    let age = Number(document.getElementById("ageInput").value);
    let isCitizen = document.getElementById("citizenInput").value;

    if (!age || age <= 0 || isCitizen === "") {
        document.getElementById("result").innerHTML =
            `<div class="result-box">Please enter valid details!</div>`;
        return;
    }

    isCitizen = (isCitizen === "true"); // converting string to boolean
    let message = "";

    if (isCitizen && age >= 18) {

        if (age >= 21) {
            message = "Eligible for all services.";
        } else {
            message = "Eligible to vote only.";
        }

    } else if (!isCitizen && age >= 18) {
        message = "Only age criteria met.";
    } else {
        message = "Not eligible yet.";
    }

    console.log(message);

    document.getElementById("result").innerHTML =
        `<div class="result-box">${message}</div>`;
});
