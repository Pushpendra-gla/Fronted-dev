function analyzeNumbers() {
    let numbers = [];
    for (let i = 1; i <= 30; i++) {
        numbers.push(i);
    }

    let results = [];
    numbers.forEach(num => {
        if (num % 3 === 0 && num % 5 === 0) results.push("FizzBuzz");
        else if (num % 2 === 0) results.push("Even");
        else results.push("Odd");
    });

    let outputHTML = "";
    numbers.forEach((num, index) => {
        let cls = results[index] === "FizzBuzz" ? "fizzbuzz" : 
                  results[index] === "Even" ? "even" : "odd";
        outputHTML += `<div class="result ${cls}">${num} → ${results[index]}</div>`;
    });

    document.getElementById("output").innerHTML = outputHTML;
}
