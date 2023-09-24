import React from "react";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherConditions">
      <ul>
        <li className="humidity">🌡️ {props.data.humidity}%</li>
        <li className="clouds">☁️ {props.data.clouds}%</li>
        <li className="winds">🍃 {props.data.winds}m/s</li>
      </ul>
    </div>
  );
}
