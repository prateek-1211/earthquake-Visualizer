import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const EarthquakeList = ({ earthquakes }) => {
  return (
    <div className="list-container">
      <h2>Recent Earthquakes (Past 24 Hours)</h2>
      <ul>
        {earthquakes.map((eq) => (
          <li key={eq.id}>
            <FaMapMarkerAlt color="#ff4d4d" />{" "}
            <strong>{eq.properties.place}</strong> — Mag:{" "}
            {eq.properties.mag || "N/A"} <br />
            <span className="time">
              {new Date(eq.properties.time).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarthquakeList;
