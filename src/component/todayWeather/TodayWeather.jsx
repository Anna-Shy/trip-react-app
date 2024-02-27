import React from "react";

import sunnyIcon from "./sun.svg";
import rainyIcon from "./rain.svg";
import cloudyIcon from "./cloud.svg";

import "./todayWeather.css";

export const TodayWeather = ({ weather, selectedTrip }) => {
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
    weather && (
      <div className="today__weather">
        <h4 className="today__weather-title">
          {new Date(weather.datetime).toLocaleDateString("en-US", {
            weekday: "long"
          })}
        </h4>

        <div className="today__weather-block">
          <img
            className="block-img"
            src={getWeatherIcon(weather.conditions)}
            alt={weather.conditions}
          />
          <p className="block-text">{weather.tempmax}°C</p>
        </div>
        
        <p className="block-text">{selectedTrip.city}</p>
      </div>
    )
  );
};
