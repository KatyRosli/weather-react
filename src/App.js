import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="react-weather-container">
        <Weather />
        <footer>
          Open sourced by
          <a
            href="https://github.com/KatyRosli/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>{" "}
          Katy Rosli
          <a
            href="https://www.katyrosli.com"
            target="_blank"
            rel="nopener noreferrer"
          ></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
