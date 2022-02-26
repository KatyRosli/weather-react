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
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: response.data.main.sunrise,
      sunset: response.data.main.sunset,
      data: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search for a city..."
            autoFocus="on"
            aria-label="Search"
            onChange={handleCityChange}
          />{" "}
          <button type="button" className="btn btn-warning">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button type="button" className="btn btn-outline-warning">
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </form>

        <div className="container-forecast">
          <div className="row">
            <div className="col-2">
              Mon
              <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
              <br />
              <strong>1°C</strong>
            </div>
            <div className="col-2">
              Tue
              <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
              <br />
              <strong>1°C</strong>
            </div>
            <div className="col-2">
              Wed
              <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
              <br />
              <strong>1°C</strong>
            </div>
            <div className="col-2">
              Thu
              <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
              <br />
              <strong>1°C</strong>
            </div>
            <div className="col-2">
              Fri
              <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
              <br />
              <strong>1°C</strong>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "313875bf8edc10d6e458db37d82896b3";
    let city = "Stockholm";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
