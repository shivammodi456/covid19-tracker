import React from "react";
import "./CountryPicker.css";
function CountryPicker({ data: { confirmed }, fetchedCountry, handleChange }) {
  if (!confirmed) {
    return " ";
  }
  return (
    <>
      <div className="select-box">
        <select
          className="custom-select"
          style={{ width: "auto" }}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountry.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CountryPicker;
