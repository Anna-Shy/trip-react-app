import React, { useState } from "react";

import { SearchTripInput } from "../searchTripInput/SearchTrip";
import { TripList } from "../tripList/TripList";
import { AddTripModal } from "../addTripModal/AddTripModal";
import { WeatherForecast } from "../weatherForecast/WeatherForecast";

import { tripListArray } from "../../data/tripList";

import addIcon from "./add-icon.svg";

import "./main.css";

export const Main = ({ setSelectedTrip, weatherForecast }) => {
  const [trips, setTrips] = useState([
    {
      city: tripListArray[0].name,
      image: tripListArray[0].image,
      startDate: new Date("2024-03-01"),
      endDate: new Date("2024-03-05")
    }
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleTripSelect = (trip) => {
    setSelectedTrip(trip);
  };

  const handleAddTrip = (trip) => {
    setTrips([...trips, trip]);
    setModalOpen(false);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main">
      <h2 className="main__title">
        Weather <span className="main__title-span">Forecast</span>
      </h2>

      <SearchTripInput onSearch={setSearchQuery} />

      <section className="trips">
        <TripList trips={filteredTrips} onSelectTrip={handleTripSelect} />

        <button className="trips__btn" onClick={() => setModalOpen(true)}>
          <img className="trips__btn-img" src={addIcon} alt="icon" />
          Add Trip
        </button>
      </section>

      <section className="weather">
        <h2 className="weather__title">Week</h2>

        <WeatherForecast weather={weatherForecast} />
      </section>

      {modalOpen && (
        <AddTripModal
          onAddTrip={handleAddTrip}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};
