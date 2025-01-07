export function errorHandler(error) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `<div class="error-message">Error: ${error}</div>`;
}