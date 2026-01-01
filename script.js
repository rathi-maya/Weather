const apiKey = "WEATHER_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temperature").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity +"%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
   const weatherMain = data.weather[0].main.toLowerCase();
    const iconElement = document.querySelector(".weatherIcon");

    if (weatherMain.includes("clear")) {
        iconElement.src = "images/clear.png";
    } else if (weatherMain.includes("cloud")) {
        iconElement.src = "images/clouds.png";
    } else if (weatherMain.includes("rain")) {
        iconElement.src = "images/rain.png";
    } else if (weatherMain.includes("snow")) {
        iconElement.src = "images/snow.png";
    } else if (weatherMain.includes("mist")) {
        iconElement.src = "images/mist.png";
    } else {
        iconElement.src = "images/default.png";
    }
}






