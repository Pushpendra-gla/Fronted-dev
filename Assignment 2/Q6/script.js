let count = 0;

function increment() {
    function update() {
        count++;
        document.getElementById("counterDisplay").textContent = count;
        document.getElementById("output").innerHTML = `Count incremented → ${count}`;
        console.log("Count incremented:", count);
    }
    update();
}

function decrement() {
    function update() {
        count--;
        document.getElementById("counterDisplay").textContent = count;
        document.getElementById("output").innerHTML = `Count decremented → ${count}`;
        console.log("Count decremented:", count);
    }
    update();
}

document.getElementById("incrementBtn").addEventListener("click", increment);
document.getElementById("decrementBtn").addEventListener("click", decrement);

increment();
decrement();
