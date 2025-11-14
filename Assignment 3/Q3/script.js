"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

document.getElementById("validateBtn").addEventListener("click", () => {
    const valid = [];
    const invalid = [];

    for (let t of transactions) {
        try {
            debugger;

            if (t === null) throw "Null transaction";
            if (!t.id || t.amount === undefined) throw "Missing fields";
            if (t.amount < 0) throw "Negative amount";

            valid.push(t);
            console.log(`Transaction ${t.id} passed`);

        } catch (e) {
            invalid.push({ entry: t, error: e });
            console.log("Error:", e, "Entry:", t);
        }
    }

    console.log("Valid Transactions:", valid);
    console.log("Invalid Transactions:", invalid);
    console.log("Successful:", valid.length);
    console.log("Failed:", invalid.length);
});
