"use strict";

class InvalidOperationError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "InvalidOperationError";
    }
}

document.getElementById("calcBtn").addEventListener("click", () => {
    const op = document.getElementById("operation").value;
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    let resultBox = document.getElementById("result");

    try {
        let answer;
        switch (op) {
            case "add":
                answer = a + b;
                break;
            case "divide":
                if (b === 0) throw new Error("Cannot divide by zero");
                answer = a / b;
                break;
            case "power":
                answer = a ** b;
                break;
            case "root":
                if (a < 0) throw new Error("Cannot take root of negative number");
                answer = Math.sqrt(a);
                break;
            case "subtract":
                answer = a - b;
                break;
            default:
                throw new InvalidOperationError("Unknown operation");
        }

        resultBox.textContent = `Operation: ${op}\nResult: ${answer}`;
    } catch (e) {
        resultBox.textContent = `Error: ${e.name} → ${e.message}`;
    }
});
