"use strict";

function showMessage() {
    debugger;
    let greeting = "Welcome";
    console.log(greeting);
}

document.getElementById("runBtn").addEventListener("click", () => {
    showMessage();
});
