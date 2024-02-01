import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div
      className="filter"
      style={{
        margin: "50px",
        boder: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h1>FILTER MOVIES</h1>
      <label>
        Title:
        <input
          type="text"
          onChange={(e) => onFilterChange("title", e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="text"
          onChange={(e) => onFilterChange("rating", e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
