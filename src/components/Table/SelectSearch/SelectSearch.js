import React from "react";

export const SelectSearch = ({ options, value, onChange }) => {
  return (
    <div>
      <label>Search by: </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          Choose a filter
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
