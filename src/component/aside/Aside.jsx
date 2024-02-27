import React from "react";

import { TodayWeather } from "../todayWeather/TodayWeather";
import { Countdown } from "../countdown/Countdown";

import "./aside.css";

export const Aside = ({ selectedTrip, todayWeather }) => {
  return (
    <div className="aside">
      {selectedTrip && todayWeather && (
        <TodayWeather weather={todayWeather} selectedTrip={selectedTrip} />
      )}

      <Countdown selectedTrip={selectedTrip} />
    </div>
  );
};
