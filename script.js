const feels_like_Element = document.getElementById("feels_like");
const humidity_Element = document.getElementById("humidity");
const max_temp_Element = document.getElementById("max_temp");
const min_temp_Element = document.getElementById("min_temp");
const sunrise_Element = document.getElementById("sunrise");
const sunset_Element = document.getElementById("sunset");
const temp_Element = document.getElementById("temp");
const wind_degrees_Element = document.getElementById("wind_degrees");
const wind_speed_Element = document.getElementById("wind_speed");

const cityInput = document.getElementById('city')
const submit = document.getElementById('submit')

const url = ` https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`;
// const url = "https://api.api-ninjas.com/v1/weather?city="
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "31062c1b78msh84cf8c54ba28472p1aaf43jsn1946ebeccc68",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

getWeather = (city) => {
  cityName.innerHTML = city;
  // https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric
  fetch(
    " https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like_Element.innerHTML = response.feels_like;
      humidity_Element.innerHTML = response.humidity;
      max_temp_Element.innerHTML = response.max_temp;
      min_temp_Element.innerHTML = response.min_temp;
      sunrise_Element.innerHTML = response.sunrise;
      sunset_Element.innerHTML = response.sunset;
      temp_Element.innerHTML = response.temp;
      wind_degrees_Element.innerHTML = response.wind_degrees;
      wind_speed_Element.innerHTML = response.wind_speed;
    })
    .then((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
});

// getWeatherofBoston = (Boston) => {

//   cityName.innerHTML = Boston;

//   fetch(' https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
//   // fetch('https://api.api-ninjas.com/v1/weather?city=' + city, options)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       feels_like_boston.innerHTML = response.feels_like_boston;
//       humidity.innerHTML = response.humidity;
//       max_temp.innerHTML = response.max_temp;
//       min_temp.innerHTML = response.min_temp;
//       sunrise.innerHTML = response.sunrise;
//       sunset.innerHTML = response.sunset;
//       temp.innerHTML = response.temp;
//       wind_degrees.innerHTML = response.wind_degrees;
//       wind_speed.innerHTML = response.wind_speed;
//     })
//     .then((err) => console.log(err));
// };
// console.log("weather of Boston is")
// getWeatherofBoston();

getWeather("Delhi");

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
