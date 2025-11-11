let secretNumber = Math.floor(Math.random() * 50) + 1;

document.getElementById("guessBtn").addEventListener("click", function () {

    let userGuess = Number(document.getElementById("guessInput").value);

    if (!userGuess || userGuess < 1 || userGuess > 50) {
        document.getElementById("result").innerHTML =
            `<div class="result-box high">Enter a valid number between 1 to 50!</div>`;
        return;
    }

    if (userGuess === secretNumber) {
        document.getElementById("result").innerHTML =
            `<div class="result-box correct">✅ Correct Guess! 🎉</div>`;

    } else {
        // Nested condition for close guess
        if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
            document.getElementById("result").innerHTML =
                `<div class="result-box close">✨ Very Close! Try again!</div>`;
        } else {
            if (userGuess > secretNumber) {
                document.getElementById("result").innerHTML =
                    `<div class="result-box high">📈 Too High!</div>`;
            } else {
                document.getElementById("result").innerHTML =
                    `<div class="result-box low">📉 Too Low!</div>`;
            }
        }
    }

    console.table({
        Secret_Number: secretNumber,
        User_Guess: userGuess,
        Difference: Math.abs(userGuess - secretNumber)
    });
});
