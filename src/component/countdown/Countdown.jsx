import React, { useState, useEffect } from "react";

import "./countdown.css";

export const Countdown = ({ selectedTrip }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!selectedTrip) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = selectedTrip.startDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedTrip]);

  return (
    selectedTrip && (
      <div className="countdown">
        <p className="countdown__text">
          <span className="count__text-span">{countdown.days}</span>
          days
        </p>
        <p className="countdown__text">
          <span className="count__text-span">{countdown.hours}</span> hours
        </p>
        <p className="countdown__text">
          <span className="count__text-span"> {countdown.minutes} </span>
          minutes
        </p>
        <p className="countdown__text">
          <span className="count__text-span"> {countdown.seconds} </span>
          seconds
        </p>
      </div>
    )
  );
};
