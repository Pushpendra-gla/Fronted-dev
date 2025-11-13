function checkSecurity() {
    let isDoorLocked = document.getElementById("door").checked;
    let isWindowClosed = document.getElementById("window").checked;
    let isAlarmOn = document.getElementById("alarm").checked;
    let isOwnerInside = document.getElementById("owner").checked;
    let isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
    let status = isSecure ? "✅ Secure" : "❌ Unsafe";
    document.getElementById("output").innerHTML = `
        🚪 Door Locked: ${isDoorLocked}<br>
        🪟 Window Closed: ${isWindowClosed}<br>
        🔔 Alarm On: ${isAlarmOn}<br>
        👤 Owner Inside: ${isOwnerInside}<br><br>
        Security Status: <strong>${status}</strong>
    `;
}
document.getElementById("checkBtn").addEventListener("click", checkSecurity);
