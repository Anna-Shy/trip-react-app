import React, { useState } from "react";

import "./searchTripInput.css";

export const SearchTripInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <span className="search__icon icon"></span>
      <input
        className="search__input"
        type="text"
        placeholder="Search your trip"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};
