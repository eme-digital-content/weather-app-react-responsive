import React, { useState } from "react";
import "./Weather.css";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {unit === "celsius"
          ? Math.round(props.celsius)
          : Math.round((props.celsius * 9) / 5 + 32)}
      </span>
      <span className="unit">
        {unit === "celsius" ? (
          <>
            °C |{" "}
            <a
              href="/"
              className={`Fahrenheit ${unit === "fahrenheit" ? "active" : ""}`}
              onClick={convertFah}
            >
              °F
            </a>
          </>
        ) : (
          <>
            <a
              href="/"
              className={`Fahrenheit ${unit === "celsius" ? "active" : ""}`}
              onClick={convertCel}
            >
              °C
            </a>{" "}
            | °F
          </>
        )}
      </span>
    </div>
  );
}
