import React from "react";

import "./tripList.css";

export const TripList = ({ trips, onSelectTrip }) => {
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  };

  return (
    <div className="trips__list">
      {trips.map((trip, index) => (
        <div
          className="trips__card"
          key={index}
          onClick={() => onSelectTrip(trip)}
        >
          <img className="trips__card-img" src={trip.image} alt="" />

          <div className="trips__card-content">
            <h4 className="content__title">{trip.city}</h4>

            <p className="content__date">
              {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
