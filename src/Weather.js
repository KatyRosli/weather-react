import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search for a city..."
          autoFocus="on"
          aria-label="Search"
        />{" "}
        <button type="button" className="btn btn-warning">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button type="button" className="btn btn-outline-warning">
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </form>
      <h1>Stockholm</h1>
      <p>Wednesday 17:00</p>
      <h2 className="Current temperature">
        1<span className="celsius">°C</span>
      </h2>
      <img
        src="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
        alt="Weather icon"
        className="Weather-icon-current-day"
      ></img>
      <h3>Mostly sunny</h3>
      <div className="container-current">
        <div className="row">
          <div className="col-3">
            Wind
            <br />
            <strong>2m/s</strong>
          </div>
          <div className="col-3">
            Humidity
            <br />
            <strong>73%</strong>
          </div>
          <div className="col-3">
            Sunrise
            <br />
            <strong>07:00</strong>
          </div>
          <div className="col-3">
            Sunset
            <br />
            <strong>18:00</strong>
          </div>
        </div>
      </div>
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
}
