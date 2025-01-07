export function displayLocationInfo(data) {
    const weatherInfo = document.getElementById("weather-info");

    if (data.error) {
        weatherInfo.innerHTML = `<div class="error-message">Error: ${data.error}</div>`;
        return;
    }

    // Populate the weatherInfo element with the required data using a table
    weatherInfo.innerHTML = `
        <h2>Weather Information</h2>
        <table>
            <tr>
                <th>Location</th>
                <td>${data.area}</td>
            </tr>
            <tr>
                <th>Temperature</th>
                <td>${data.temp}°C</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${data.description}</td>
            </tr>
            <tr>
                <th>Timezone</th>
                <td>${data.timezone}</td>
            </tr>
            <tr>
                <th>Latitude</th>
                <td>${data.latitude}</td>
            </tr>
            <tr>
                <th>Longitude</th>
                <td>${data.longitude}</td>
            </tr>
        </table>
        
        <h3>Current Conditions:</h3>
        <table>
            <tr>
                <th>Datetime</th>
                <td>${data.currentConditions.datetime}</td>
            </tr>
            <tr>
                <th>Conditions</th>
                <td>${data.currentConditions.conditions}</td>
            </tr>
            <tr>
                <th>Humidity</th>
                <td>${data.currentConditions.humidity}%</td>
            </tr>
            <tr>
                <th>Windspeed</th>
                <td>${data.currentConditions.windspeed} km/h</td>
            </tr>
        </table>
    `;
}
