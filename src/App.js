import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-card">
          <Weather defaultCity="Stockholm" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/KatyRosli/weather-react"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Open sourced on Github{" "}
        </a>
        by
        <a
          href="https://www.katyrosli.com"
          target="_blank"
          rel="nopener noreferrer"
          className="name"
        >
          {" "}
          Katy Rosli
        </a>
      </footer>
    </div>
  );
}

export default App;
