"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

document.getElementById("runBtn").addEventListener("click", () => {
    const validNumbers = [];
    const invalidNumbers = [];
    
    for (let item of apiData) {
        const num = Number(item);
        const bool = Boolean(item);
        const str = String(item);

        if (!isNaN(num) && item !== " " && item !== "100px") {
            validNumbers.push(num);
        } else {
            invalidNumbers.push(item);
        }

        console.log("Value:", item);
        console.log("Number:", num);
        console.log("Boolean:", bool);
        console.log("String:", str);
        console.log("--------------");
    }

    console.log("Valid Numbers:", validNumbers);
    console.log("Invalid Numbers:", invalidNumbers);

    console.log("Detailed Report:");
    for (let value of apiData) {
        const n = Number(value);
        if (!isNaN(n) && value !== " " && value !== "100px") {
            console.log(value, "=> Valid Number");
        } else {
            console.log(value, "=> Invalid Number");
        }
    }
});
