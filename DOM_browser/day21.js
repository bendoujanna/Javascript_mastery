const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("city-input");
const errorMessage = document.getElementById("error-message");
const weatherDisplay = document.getElementById("weather-display");
const cityNameDisplay = document.getElementById("city-name");
const temperatureDisplay = document.getElementById("temperature");
const conditionDisplay = document.getElementById("condition");


searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        console.log("Loading...");
        const response1 = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + searchInput.value + "&count=1");

        if (!response1.ok) {
            throw new Error("Network connection failed.");  
        }
        const data = await response1.json();
        console.log("Data received:", data);

        if (!data.results) {
            throw new Error("City not found. Please check the spelling and try again.");
        }

        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;
        const properCityName = data.results[0].name;

        const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        if (!response2.ok) {
            throw new Error("Failed to fetch weather data. Please try again later.");
        }
        const data2 = await response2.json();
        console.log("Weather data received:", data2);

        cityNameDisplay.textContent = properCityName;
        temperatureDisplay.textContent = data2.current_weather.temperature + "°C";
        conditionDisplay.textContent = "Wind: " + data2.current_weather.windspeed + "km/h";
        errorMessage.style.display = "none";
        weatherDisplay.style.display = "block";

    } catch (error) {
        console.error(error);
        errorMessage.textContent = error.message;
        weatherDisplay.style.display = "none";
        errorMessage.style.display = "block";

    }
});

