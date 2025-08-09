const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temp: ${data.main.temp} °C`;
        document.getElementById("condition").textContent = data.weather[0].description;
        document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById("weather-result").classList.remove("hidden");
      } else {
        alert("City not found");
      }
    })
    .catch(() => alert("Error fetching data"));
}
