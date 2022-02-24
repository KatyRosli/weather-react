import React from "react";
import axios from "axios";

import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "313875bf8edc10d6e458db37d82896b3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Rings
      height="80"
      width="80"
      color="#00BFFF"
      ariaLabel="loading"
      timeout="3000"
    />
  );
}
