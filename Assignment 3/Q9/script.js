"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const runBtn = document.getElementById("run");
const clearBtn = document.getElementById("clear");
const summaryBox = document.getElementById("summary");
const validBox = document.getElementById("valid");
const minorsBox = document.getElementById("minors");
const errorsBox = document.getElementById("errors");

function auditData(dataArray) {
    const clean = [];
    const invalidLogs = [];
    const minors = [];

    for (let i = 0; i < dataArray.length; i++) {
        debugger;
        const lineNo = i + 1;
        const raw = dataArray[i];

        try {
            const parsed = JSON.parse(raw);

            if (!parsed || typeof parsed !== "object") {
                throw new Error("Parsed value is not an object");
            }

            if (!Object.prototype.hasOwnProperty.call(parsed, "user") || !Object.prototype.hasOwnProperty.call(parsed, "age")) {
                const missing = [];
                if (!Object.prototype.hasOwnProperty.call(parsed, "user")) missing.push("user");
                if (!Object.prototype.hasOwnProperty.call(parsed, "age")) missing.push("age");
                throw new Error(`Missing keys: ${missing.join(", ")}`);
            }

            const ageNum = Number(parsed.age);
            if (Number.isNaN(ageNum)) throw new Error("Age is not a number");

            const entry = { user: String(parsed.user), age: ageNum, __line: lineNo };

            if (ageNum < 18) {
                minors.push(entry);
            } else {
                clean.push(entry);
            }

            console.log(`Line ${lineNo}: Parsed OK →`, entry);

        } catch (err) {
            const message = `Line ${lineNo}: ${err.message} — raw: ${raw}`;
            invalidLogs.push(message);
            console.log(message);
        }
    }

    return { clean, minors, invalidLogs };
}

function renderReport(result) {
    const { clean, minors, invalidLogs } = result;

    const summaryText = [
        `Total raw entries: ${rawData.length}`,
        `Valid (adult) entries: ${clean.length}`,
        `Minors: ${minors.length}`,
        `Errors: ${invalidLogs.length}`
    ].join("\n");

    summaryBox.textContent = summaryText;

    if (clean.length) {
        validBox.textContent = clean.map(e => `Line ${e.__line} — ${e.user} (${e.age})`).join("\n");
    } else {
        validBox.textContent = "-";
    }

    if (minors.length) {
        minorsBox.textContent = minors.map(e => `Line ${e.__line} — ${e.user} (${e.age})`).join("\n");
    } else {
        minorsBox.textContent = "-";
    }

    if (invalidLogs.length) {
        errorsBox.textContent = invalidLogs.join("\n");
    } else {
        errorsBox.textContent = "-";
    }

    console.log("=== AUDIT SUMMARY ===");
    console.log(summaryText);
    console.log("Valid entries:", clean);
    console.log("Minors:", minors);
    console.log("Errors:", invalidLogs);
    console.log("=====================");
}

runBtn.addEventListener("click", () => {
    const res = auditData(rawData);
    renderReport(res);
});

clearBtn.addEventListener("click", () => {
    summaryBox.textContent = "Press \"Run Audit\" to begin.";
    validBox.textContent = "-";
    minorsBox.textContent = "-";
    errorsBox.textContent = "-";
});
