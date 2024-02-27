import React from "react";

import "./selectCity.css";

export const SelectCity = ({ cities, onSelectCity }) => {
  return (
    <div className="select-city">
      <label htmlFor="city">
        <span className="select__labelStar">*</span> City
      </label>
      <select
        className="select__option"
        id="city"
        onChange={(e) => onSelectCity(e.target.value)}
        required
      >
        <option value="">Please select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};
