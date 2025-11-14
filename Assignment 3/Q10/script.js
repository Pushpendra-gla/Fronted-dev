"use strict";

const originalOutput = document.getElementById("originalOutput");
const arrowOutput = document.getElementById("arrowOutput");
const explainBox = document.getElementById("explainBox");
const runBtn = document.getElementById("run");

function runOriginal() {
    let out = "";
    debugger;

    function outer() {
        out += "outer() console.log(count): " + count + "\n";
        var count = 5;

        function inner() {
            out += "inner() console.log(count): " + count + "\n";
            var count = 10;
        }

        inner();
    }

    outer();
    return out;
}

function runArrowVersion() {
    let out = "";
    debugger;

    function outer() {
        out += "outer() console.log(count): " + count + "\n";
        var count = 5;

        const inner = () => {
            out += "inner() console.log(count): " + count + "\n";
            var count = 10;
        };

        inner();
    }

    outer();
    return out;
}

function explanation() {
    return `
Execution Prediction
            
outer() → first console.log(count) → undefined 
(inner variable hoisted as var count)

inner() → console.log(count) → undefined
(inner has its own hoisted var count)

Memory Contexts
outer()
  count: undefined → 5
inner()
  count: undefined → 10

Arrow Function Behavior
The arrow inner uses "var count" inside, so its hoisting stays the same.
But arrows capture "this" and do NOT create their own 'this', though not used here.

Call Stack Flow
outer() pushed → executes → pushes inner() → executes → inner() popped → outer() popped
    `;
}

runBtn.addEventListener("click", () => {
    originalOutput.textContent = runOriginal();
    arrowOutput.textContent = runArrowVersion();
    explainBox.textContent = explanation();
});
