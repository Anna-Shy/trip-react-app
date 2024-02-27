import React from "react";

import sunnyIcon from "./sun.svg";
import rainyIcon from "./rain.svg";
import cloudyIcon from "./cloud.svg";

import "./weatherForecast.css";

export const WeatherForecast = ({ weather }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return sunnyIcon;
      case "Rain":
        return rainyIcon;
      case "Rain, Partially cloudy":
        return rainyIcon;
      case "Rain, Overcast":
        return rainyIcon;
      case "Overcast":
        return cloudyIcon;
      case "Partially cloudy":
        return cloudyIcon;
      default:
        return null;
    }
  };

  return (
    <div className="weather__forecast">
      {weather.map((dayForecast, index) => (
        <div key={index} className="weather__forecast-item">
          <p className="item-text">
            {new Date(dayForecast.datetime).toLocaleDateString("en-US", {
              weekday: "long"
            })}
          </p>
          <img
            className="item-img"
            src={getWeatherIcon(dayForecast.conditions)}
            alt={dayForecast.conditions}
          />
          <p className="item-text">{dayForecast.tempmax}°C</p>
        </div>
      ))}
    </div>
  );
};
