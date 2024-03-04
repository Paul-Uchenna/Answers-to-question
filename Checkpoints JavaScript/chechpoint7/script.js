const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".nothing-found");
const cityhide = document.querySelector(".city-hide");

// Adding event listener for the search button
search.addEventListener("click", () => {
  // API key for OpenWeatherMap API
  const APIkey = "ab5e5d97eff9f475107b59e5167c13ac";
  // Getting the city name from the input field
  const city = document.querySelector(".search-box input").value;

  // Checking if the input field is empty
  if (city == "") {
    return;
  }

  // Fetching weather data from OpenWeatherMap API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json()) // Parsing the JSON response
    .then((json) => {
      // Handling response data

      // If city is not found (error 404)
      if (json.cod == 404) {
        // Adjusting container height and showing error message
        cityhide.textContent = city;
        container.style.height = "400px";
        weatherBox.classList.remove("active");
        weatherDetails.classList.remove("active");
        error404.classList.add("active");
        return;
      }

      // Selecting elements to display weather information
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      cityhide.style.display = "block";
      cityhide.style.textTransform = "capitalize";
      cityhide.textContent = city;

      // If city is found
      container.style.height = "550px"; // Adjusting container height
      weatherBox.classList.add("active"); // Showing weather box
      weatherDetails.classList.add("active"); // Showing weather details
      error404.classList.remove("active"); // Hiding error message

      // Setting weather image based on weather conditions
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Clouds":
          image.src = "images/cloud.png";
          break;
        case "Mist":
          image.src = "images/mist.png";
          break;
        case "Haze":
          image.src = "images/mist.png";
          break;
        default:
          image.src = "images/cloud.png";
      }

      // Displaying temperature, weather description, humidity, and wind speed
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});
