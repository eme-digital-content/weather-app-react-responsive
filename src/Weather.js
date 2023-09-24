import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import Cities from "./Cities";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    search();
  }, [city]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      winds: response.data.wind.speed,
      city: response.data.name,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      realFeel: response.data.main.feels_like,
      clouds: response.data.clouds.all,
      weather: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleNewYorkClick() {
    setCity("New York");
  }

  function handleParisClick() {
    setCity("Paris");
  }

  function handleTorontoClick() {
    setCity("Toronto");
  }

  function handleTokyoClick() {
    setCity("Tokyo");
  }

  function handleLimaClick() {
    setCity("Lima");
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <p class="type-city">Search for a city</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="type-city"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search 🔍"
                className="search"
                id="search"
              />
            </div>
          </div>
        </form>
        <Cities />
        <button onClick={handleNewYorkClick} class="popular-city">
          New York
        </button>
        <button onClick={handleParisClick} class="popular-city">
          Paris
        </button>
        <button onClick={handleTorontoClick} class="popular-city">
          Toronto
        </button>
        <button onClick={handleTokyoClick} class="popular-city">
          Tokyo
        </button>
        <button onClick={handleLimaClick} class="popular-city">
          Lima
        </button>
        <WeatherInfo data={weatherData} />
        <br></br>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
