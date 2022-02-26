import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="react-weather-container">
        <Weather />
        <footer>
          <a
            href="https://github.com/KatyRosli/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open sourced on Github{" "}
          </a>
          by
          <a
            href="https://www.katyrosli.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            {" "}
            Katy Rosli
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
