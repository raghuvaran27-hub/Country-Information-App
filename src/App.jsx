import React, { useState } from "react";
import "./App.css";

function App() {
  const [countryName, setCountryName] = useState("");
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");

  const searchCountry = () => {
    if (!countryName) return;

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        if (!res.ok) throw new Error("Country not found");
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setError("");
      })
      .catch(() => {
        setCountry(null);
        setError("Country not found");
      });
  };

  return (
    <div className="container">
      <h1 className="title">🌍  Country Information app</h1>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter country name..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button onClick={searchCountry}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {country && (
        <div className="card">
          <img src={country.flags.png} alt="flag" className="flag" />
          <h2>{country.name.common}</h2>
          <p>
            <b>Capital:</b> {country.capital ? country.capital[0] : "N/A"}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
