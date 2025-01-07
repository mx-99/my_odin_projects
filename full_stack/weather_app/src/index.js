import { extractRequiredData } from "./extractRequiredData";
import { getLocationFromUser } from "./getLocationFromUser";
import { getWeather } from "./getWeather";
import './styles.css'; 

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');

    // Check for a previously entered location or fall back to random location
    let location = getLocationFromUser();
    if (!location) {
        location = undefined;  // If no location is entered, use random location
    }

    // If there's no location from the input, load random location's weather
    if (!location) {
        getWeather().then(data => {
            if (data) {
                extractRequiredData(data); 
            }
        }).catch(error => {
            console.log("Error fetching weather:", error);
        });
    }

    // Handle form submission (location entry from user)
    btn.addEventListener('click', (event) => {
        event.preventDefault(); 
        location = getLocationFromUser();
        if (!location) {
            location = undefined;  // If no location input, fallback to random
        }
        getWeather(location).then(data => {
            if (data) {
                extractRequiredData(data); 
            }
        }).catch(error => {
            console.log("Error fetching weather:", error);
        });
    });
});

