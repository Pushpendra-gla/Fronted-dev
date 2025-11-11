document.getElementById("generateBtn").addEventListener("click", function () {
    
    const operators = ['+', '-', '*', '/'];
    let quizData = [];
    let outputHTML = `<div class='question-list'>`;

    for (let i = 1; i <= 10; i++) {

        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;
        let operator = operators[Math.floor(Math.random() * operators.length)];

        let correctAnswer;

        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                correctAnswer = (num1 / num2).toFixed(2);
                break;
        }

        quizData.push({
            Question_No: i,
            Question: `${num1} ${operator} ${num2}`,
            Correct_Answer: correctAnswer
        });

        outputHTML += `
            <div class='question-item'>
                <strong>Q${i}:</strong> ${num1} ${operator} ${num2} = <em>${correctAnswer}</em>
            </div>
        `;
    }

    outputHTML += `</div>`;
    document.getElementById("questions").innerHTML = outputHTML;

    console.clear();
    console.table(quizData);
});
