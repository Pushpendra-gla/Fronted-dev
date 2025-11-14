"use strict";

document.getElementById("genBtn").addEventListener("click", () => {
    var limit = Number(document.getElementById("rows").value) || 5;
    var output = "";

    for (var i = 1; i <= limit; i++) {
        debugger;
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += "* ";
        }
        output += row + "\n";
    }

    document.getElementById("output").textContent = output;
});
