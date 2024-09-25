// calculate wind chill
const temp = parseFloat(document.querySelector('.temp').textContent);
const windSpeed = parseFloat(document.querySelector(".windSpeed").textContent);
const windChill = document.querySelector('.windChill');

function calculateWindChill() {
    if (temp <= 50 && windSpeed > 3) {
        const windChillNum = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
        windChill.innerHTML = windChillNum.toFixed(2) + "&deg;F";
    } else {
        document.querySelector(".windChill").textContent = "N/A";
    }
}
calculateWindChill();