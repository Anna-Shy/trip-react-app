import React, { useState } from "react";

import { SelectCity } from "../selectCity/SelectCity";

import { tripListArray } from "../../data/tripList";
import canselIcon from "./cancel.svg";

import "./addTripModal.css";

const DateInput = ({ htmlFor, title, date, setDate }) => {
  return (
    <div className="block">
      <label htmlFor={htmlFor}>
        <span className="labelStar">*</span> {title}
      </label>
      <input
        className="input"
        type="date"
        placeholder={title}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>
  );
};

export const AddTripModal = ({ onAddTrip, onClose }) => {
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAddTrip = () => {
    const today = new Date();

    const next15Days = new Date();
    next15Days.setDate(today.getDate() + 15);

    if (city && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (
        start >= today &&
        start <= next15Days &&
        end >= start &&
        end <= next15Days
      ) {
        onAddTrip({
          city,
          image: onSelectCity(city),
          startDate: new Date(startDate),
          endDate: new Date(endDate)
        });

        setCity("");
        setImage("");
        setStartDate("");
        setEndDate("");
      } else {
        alert(
          "Start date and end date should be within the next 15 days, and end date should be after the start date."
        );
      }
    }
  };

  const onSelectCity = (cityName) => {
    const selectedCity = tripListArray.find((city) => city.name === cityName);

    return selectedCity ? selectedCity.image : null;
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__header">
          <h4 className="modal__header-title">Create trip</h4>
          <img
            className="modal__header-img"
            src={canselIcon}
            onClick={onClose}
            alt="cancel"
          />
        </div>

        <div className="divider"></div>

        <div className="modal__content">
          <SelectCity cities={tripListArray} onSelectCity={setCity} />

          <DateInput
            htmlFor={"startDate"}
            title={"Start Date"}
            date={startDate}
            setDate={setStartDate}
          />

          <DateInput
            htmlFor={"endDate"}
            title={"End Date"}
            date={endDate}
            setDate={setEndDate}
          />
        </div>

        <div className="divider"></div>

        <div className="modal__btn">
          <button className="modal__btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal__btn-save" onClick={handleAddTrip}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
