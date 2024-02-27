import React, { useState, useEffect } from "react";

import { Aside } from "./component/aside/Aside";
import { Main } from "./component/main/Main";

import "./App.css";

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [todayWeather, setTodayWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      if (!selectedTrip) return;

      const apiKey = "U4E9VWSU349NSMEWEB2X6J32E";
      const baseUrl =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
      const unitGroup = "metric";
      const include = "days";
      const contentType = "json";

      const startDateString = selectedTrip.startDate
        .toISOString()
        .split("T")[0];
      const endDateString = selectedTrip.endDate.toISOString().split("T")[0];
      const location = encodeURIComponent(selectedTrip.city);

      const url = `${baseUrl}${location}/${startDateString}/${endDateString}?unitGroup=${unitGroup}&include=${include}&key=${apiKey}&contentType=${contentType}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather forecast");
        }
        const data = await response.json();
        setWeatherForecast(data.days);
      } catch (error) {
        console.error("Error fetching weather forecast:", error);
      }
    };

    const fetchTodayWeather = async () => {
      if (!selectedTrip) return;

      const apiKey = "U4E9VWSU349NSMEWEB2X6J32E";
      const baseUrl =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
      const unitGroup = "metric";
      const include = "days";
      const contentType = "json";

      const location = encodeURIComponent(selectedTrip.city);

      const url = `${baseUrl}${location}/today?unitGroup=${unitGroup}&include=${include}&key=${apiKey}&contentType=${contentType}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch today's weather forecast");
        }
        const data = await response.json();
        setTodayWeather(data.days[0]); 
      } catch (error) {
        console.error("Error fetching today's weather forecast:", error);
      }
    };

    fetchWeatherForecast();
    fetchTodayWeather();
  }, [selectedTrip]);

  return (
    <div className="page">
      <Main
        selectedTrip={selectedTrip}
        setSelectedTrip={setSelectedTrip}
        weatherForecast={weatherForecast}
        todayWeather={todayWeather}
      />
      <Aside selectedTrip={selectedTrip} todayWeather={todayWeather} />
    </div>
  );
}

export default App;
