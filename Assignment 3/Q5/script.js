"use strict";

document.getElementById("runBtn").addEventListener("click", () => {
    console.log(score);
    announce();
    var score = 50;
    function announce() { console.log("Game started"); }
    let status = "ready";
    start();
    function start() { console.log(status); }
});
