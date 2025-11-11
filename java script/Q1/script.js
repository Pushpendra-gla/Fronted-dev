function showGreeting() {
    let userName = document.getElementById("nameInput").value;
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = `Good Morning ${userName}!`;
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = `Good Afternoon ${userName}!`;
    } else {
        greeting = `Good Evening ${userName}!`;
    }

    document.getElementById("result").innerText = greeting;
}
