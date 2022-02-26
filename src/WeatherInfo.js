import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <p className="current-date">
        <FormattedDate date={props.data.date} />
      </p>
      <h2 className="Current temperature">
        <WeatherTemperature celsius={props.data.temperature} />
        <span className="celsius">°C</span>
      </h2>
      <img
        src={props.data.icon}
        alt={props.data.description}
        className="weather-icon-currentday"
      />
      <h3 className="conditions">{props.data.description}</h3>
      <div className="container-current">
        <div className="row">
          <div className="col-3">
            Wind
            <br />
            <strong>{props.data.wind}km/h</strong>
          </div>
          <div className="col-3">
            Humidity
            <br />
            <strong>{props.data.humidity}%</strong>
          </div>
          <div className="col-3">
            Sunrise
            <br />
            <strong>{props.data.sunrise}</strong>
          </div>
          <div className="col-3">
            Sunset
            <br />
            <strong>{props.data.sunset}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
