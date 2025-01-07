import { errorHandler } from "./errorHandler";
export async function getWeather(location) {
    // If location is undefined or empty, use a random location
    if (!location) {
        const randomLocation = [
            "Accra", "Moscow", "Tokyo", "New York City", "Sydney",
            "Cape Town", "Lagos", "Nairobi", "Rio de Janeiro", "Cairo"
        ];
        const citiesIndex = Math.floor(Math.random() * randomLocation.length);
        location = randomLocation[citiesIndex];
    }

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=FTRT7DE4HGYMP8S8V6G95NNFP`, { mode: 'cors' });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        errorHandler(`Error fetching weather: ${error.message}`);
        console.log(`There was a problem with the fetch operation: ${error.message}`);
        return null; 
    }
}
