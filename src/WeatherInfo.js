import React from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherConditions from "./WeatherConditions";
import CurrentWeather from "./CurrentWeather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-3">
          <div className="d-flex">
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div class="col-3">
          <CurrentWeather
            data={{
              icon: props.data.icon,
              description: props.data.description,
              realFeel: props.data.realFeel,
            }}
          />
        </div>
        <div class="col-3">
          <WeatherConditions
            data={{
              humidity: props.data.humidity,
              clouds: props.data.clouds,
              winds: props.data.winds,
            }}
          />
        </div>
      </div>
    </div>
  );
}
