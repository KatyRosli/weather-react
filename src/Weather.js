import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      windspeed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feels_like: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `/images/openweathermap/${response.data.weather[0].icon}.svg`,
      city: response.data.name,
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
    const apiKey = "313875bf8edc10d6e458db37d82896b3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function currentLocation(position) {
    let locationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(locationApiUrl).then(handleResponse);
  }

  function displayCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Search for a city..."
            autoFocus="on"
            aria-label="Search"
            onChange={handleCityChange}
          />
          <button type="submit" value="Search" className="btn btn-warning">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button type="current-location" className="btn btn-outline-warning">
            <i
              onClick={displayCurrentLocation}
              className="fa-solid fa-location-dot"
            ></i>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
