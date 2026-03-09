import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);
      const data = await res.json();

      const c = data[0];

      setCountry({
        name: c.name.common,
        capital: c.capital ? c.capital[0] : "N/A",
        population: c.population,
        region: c.region,
        flag: c.flags.png,
      });

      setError("");
    } catch {
      setCountry(null);
      setError("Country not found");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">🌍 Country Information App</h1>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter country name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {country && (
        <div className="card">
          <img src={country.flag} alt="flag" className="flag" />

          <h2>{country.name}</h2>

          <p>
            <b>Capital:</b> {country.capital}
          </p>

          <p>
            <b>Population:</b> {country.population}
          </p>

          <p>
            <b>Region:</b> {country.region}
          </p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
