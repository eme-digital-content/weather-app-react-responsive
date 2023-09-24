import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherConditions(props) {
  return (
    <div className="CurrentWeather text-capitalize">
      <i class="weather-icon" id="icon">
        <WeatherIcon code={props.data.icon} size={52} />
      </i>
      <div className="text-capitalize" class="weather-alert" id="weather-alert">
        {props.data.description}
      </div>
      <div class="realfeel">
        Feeling <span id="realfeel">{Math.round(props.data.realFeel)}</span>°
      </div>
    </div>
  );
}
