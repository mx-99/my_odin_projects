import { displayLocationInfo } from "./displayLocationInfo";
import { errorHandler } from "./errorHandler";


export async function extractRequiredData(apidata) {
    try {
        if (!apidata || !apidata.currentConditions) {
            throw new Error("Incomplete data received from API.");
        }

        const requiredData = {
            area: apidata.resolvedAddress || "Unknown location",
            temp: apidata.currentConditions.temp || "N/A",
            description: apidata.description || "No description",
            timezone: apidata.timezone || "Unknown",
            latitude: apidata.latitude || "N/A",
            longitude: apidata.longitude || "N/A",
            currentConditions: {
                datetime: apidata.currentConditions.datetime || "N/A",
                conditions: apidata.currentConditions.conditions || "No conditions",
                humidity: apidata.currentConditions.humidity || "N/A",
                windspeed: apidata.currentConditions.windspeed || "N/A",
            },
        };
        console.log(requiredData);
        displayLocationInfo(requiredData)
        return requiredData;
    } catch (error) {
        errorHandler(`Error fetching or processing weather data: ${error}`)
        console.error("Error fetching or processing weather data:", error);
        return { error: error.message };
    }
}
