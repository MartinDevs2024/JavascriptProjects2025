window.addEventListener("load", () => {
  let long;
  let lat;
  const apiKey = "your_api_key_here"; // Replace this with your actual API key

  const timezone = document.querySelector(".location-timezone");
  const temperature = document.querySelector(".temperature-degree");
  const description = document.querySelector(".tempperature-description");
  const iconContainer = document.querySelector(".location p");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

      fetch(apiURL)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const { temp } = data.main;
          const weatherDescription = data.weather[0].description;
          const icon = data.weather[0].icon;
          const city = data.name;

          // Update DOM
          temperature.textContent = Math.round(temp);
          description.textContent = weatherDescription.toUpperCase();
          timezone.textContent = city;
          iconContainer.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${weatherDescription}">`;
        })
        .catch(err => {
          console.error("Weather fetch error:", err);
          timezone.textContent = "Unable to fetch weather";
          description.textContent = "Check API key or connection";
        });
    });
  } else {
    timezone.textContent = "Geolocation not supported";
  }
});
