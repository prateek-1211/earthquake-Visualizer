import React, { useEffect, useState } from "react";
import { EARTHQUAKE_API_URL } from "./config";
import MapView from "./components/MapView";
import EarthquakeList from "./components/EarthquakeList";
import "./App.css";

const App = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const res = await fetch(EARTHQUAKE_API_URL);
        const data = await res.json();
        setEarthquakes(data.features);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch earthquake data!");
        setLoading(false);
      }
    };

    fetchEarthquakes();
  }, []);

  return (
    <div className="app">
      <header className="header">
        🌎 <span>Earthquake Visualizer</span>
      </header>

      {loading ? (
        <p className="loading">Loading earthquake data...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="content">
          <MapView earthquakes={earthquakes} />
          <EarthquakeList earthquakes={earthquakes} />
        </div>
      )}

      <footer className="footer">
        Built with by Prateek Sharma | Data from USGS API
      </footer>
    </div>
  );
};

export default App;
