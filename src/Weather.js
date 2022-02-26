import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container-fluid">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for a city"
            aria-label="Search"
          />{" "}
          or
          <button type="button" className="btn btn-primary">
            Locate my current location
          </button>
        </form>
      </div>
      <h1>Stockholm</h1>
      <img
        src="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
        alt="Weather icon"
        className="Main-icon"
      ></img>
      <h2>1°C</h2>
      <h3>Mostly cloudy</h3>
      <p>Last updated: Wed, 17:00</p>
      <div className="container-current">
        <div className="row">
          <div className="col-3">
            Wind
            <span>2m/s</span>
          </div>
          <div className="col-3">
            Humidity
            <span>73%</span>
          </div>
          <div className="col-3">
            Sunrise
            <span>07:00</span>
          </div>
          <div className="col-3">
            Sunset
            <span>18:00</span>
          </div>
        </div>
      </div>
      <div className="container-forecast">
        <div className="row">
          <div className="col-2">
            Mon
            <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
            <span>1°C</span>
          </div>
          <div className="col-2">
            Tue
            <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
            <span>1°C</span>
          </div>
          <div className="col-2">
            Wed
            <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
            <span>1°C</span>
          </div>
          <div className="col-2">
            Thu
            <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
            <span>1°C</span>
          </div>
          <div className="col-2">
            Fri
            <img src="https://youthful-mirzakhani-0d8d97.netlify.app/images/png/01d.png"></img>
            <span>1°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
