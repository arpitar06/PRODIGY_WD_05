const apiKey = "replace your API key"; 

    async function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      if (!city) {
        alert("Please enter a city name.");
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        alert("City not found!");
        return;
      }

      const data = await response.json();
      document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
      document.getElementById("city-name").innerText = data.name;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} km/h`;

      const iconCode = data.weather[0].icon;
      document.getElementById("weather-icon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }