const nonStrictBox = document.getElementById("nonStrictBox");
const strictBox = document.getElementById("strictBox");
const fixedBox = document.getElementById("fixedBox");

function runNonStrict() {
    let output = "";
    try {
        function demo(a, a) {
            total = 10;
            output += "Total: " + total + "\n";
            delete total;
            output += "Deleted total? -> " + total + "\n";
        }
        demo(5, 10);
    } catch (e) {
        output += "Error: " + e + "\n";
    }
    nonStrictBox.textContent = output;
}

function runStrict() {
    let output = "";

    try {
        eval(`"use strict";
            function test(x, x){
                return x;
            }
            test(4,5);
        `);
    } catch(e) {
        output += "Error: " + e.message + "\n";
    }

    try {
        eval(`"use strict";
            total = 10;
        `);
    } catch(e) {
        output += "Error: " + e.message + "\n";
    }

    try {
        eval(`"use strict";
            let x = 10;
            delete x;
        `);
    } catch(e) {
        output += "Error: " + e.message + "\n";
    }

    strictBox.textContent = output;
}

function runFixed() {
    let output = "";
    try {
        "use strict";
        function demo(a, b) {
            let total = 10;
            output += "A: " + a + "\n";
            output += "B: " + b + "\n";
            output += "Total: " + total + "\n";
            total = null;
            output += "Updated Total: " + total + "\n";
        }
        demo(5, 10);
    } catch (e) {
        output += "Error: " + e.message + "\n";
    }
    fixedBox.textContent = output;
}

runNonStrict();
runStrict();
runFixed();
