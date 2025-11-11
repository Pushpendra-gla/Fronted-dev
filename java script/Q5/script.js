document.getElementById("checkWeather").addEventListener("click", function () {

    let temperature = Number(document.getElementById("temp").value);
    let windSpeed = Number(document.getElementById("wind").value);
    let isRaining = document.getElementById("rain").value === "true";

    if (!temperature && temperature !== 0 || !windSpeed && windSpeed !== 0) {
        document.getElementById("output").innerHTML = `<div class="result-box">Please enter valid values.</div>`;
        return;
    }

    let message = "";

    if (isRaining) {
        message = "☕ Stay indoors with hot coffee.";
    } 
    else if (temperature > 35) {
        message = "🏊 Go swimming.";
    } 
    else if (temperature < 15 && windSpeed > 20) {
        message = "🥶 Too cold and windy — stay home.";
    } 
    else {
        message = "🚶 Perfect day for a walk.";
    }

    document.getElementById("output").innerHTML = `
        <div class="result-box">${message}</div>
    `;

    console.table({ Temperature: temperature, Wind_Speed: windSpeed, Raining: isRaining, Suggestion: message });
});
