import React, { useState } from "react";
import "./App.css";

function App() {
  const countries = [
    {
      name: "India",
      capital: "New Delhi",
      population: "1.43 Billion",
      region: "Asia",
      flag: "https://flagcdn.com/w320/in.png",
    },
    {
      name: "United States",
      capital: "Washington D.C.",
      population: "331 Million",
      region: "North America",
      flag: "https://flagcdn.com/w320/us.png",
    },
    {
      name: "China",
      capital: "Beijing",
      population: "1.41 Billion",
      region: "Asia",
      flag: "https://flagcdn.com/w320/cn.png",
    },
    {
      name: "Japan",
      capital: "Tokyo",
      population: "125 Million",
      region: "Asia",
      flag: "https://flagcdn.com/w320/jp.png",
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: "84 Million",
      region: "Europe",
      flag: "https://flagcdn.com/w320/de.png",
    },
    {
      name: "France",
      capital: "Paris",
      population: "67 Million",
      region: "Europe",
      flag: "https://flagcdn.com/w320/fr.png",
    },
    {
      name: "United Kingdom",
      capital: "London",
      population: "67 Million",
      region: "Europe",
      flag: "https://flagcdn.com/w320/gb.png",
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: "38 Million",
      region: "North America",
      flag: "https://flagcdn.com/w320/ca.png",
    },
    {
      name: "Brazil",
      capital: "Brasilia",
      population: "214 Million",
      region: "South America",
      flag: "https://flagcdn.com/w320/br.png",
    },
    {
      name: "Australia",
      capital: "Canberra",
      population: "26 Million",
      region: "Oceania",
      flag: "https://flagcdn.com/w320/au.png",
    },
    {
      name: "Russia",
      capital: "Moscow",
      population: "144 Million",
      region: "Europe/Asia",
      flag: "https://flagcdn.com/w320/ru.png",
    },
    {
      name: "South Korea",
      capital: "Seoul",
      population: "51 Million",
      region: "Asia",
      flag: "https://flagcdn.com/w320/kr.png",
    },
    {
      name: "South Africa",
      capital: "Pretoria",
      population: "60 Million",
      region: "Africa",
      flag: "https://flagcdn.com/w320/za.png",
    },
    {
      name: "Mexico",
      capital: "Mexico City",
      population: "126 Million",
      region: "North America",
      flag: "https://flagcdn.com/w320/mx.png",
    },
    {
      name: "Spain",
      capital: "Madrid",
      population: "47 Million",
      region: "Europe",
      flag: "https://flagcdn.com/w320/es.png",
    },
    {
      name: "Argentina",
      capital: "Buenos Aires",
      population: "45 Million",
      region: "South America",
      flag: "https://flagcdn.com/w320/ar.png",
    },
    {
      name: "Saudi Arabia",
      capital: "Riyadh",
      population: "35 Million",
      region: "Asia",
      flag: "https://flagcdn.com/w320/sa.png",
    },
    {
      name: "Indonesia",
      capital: "Jakarta",
      population: "273 Million",
      region: "Asia",
      flag: "https://flagcdn.com/w320/id.png",
    },
    {
      name: "Turkey",
      capital: "Ankara",
      population: "85 Million",
      region: "Europe/Asia",
      flag: "https://flagcdn.com/w320/tr.png",
    },
    {
      name: "Italy",
      capital: "Rome",
      population: "59 Million",
      region: "Europe",
      flag: "https://flagcdn.com/w320/it.png",
    },
  ];

  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = countries.find(
      (country) => country.name.toLowerCase() === search.toLowerCase().trim(),
    );

    setResult(found);
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

      {result ? (
        <div className="card">
          <img src={result.flag} alt="flag" className="flag" />

          <h2>{result.name}</h2>

          <p>
            <b>Capital:</b> {result.capital}
          </p>

          <p>
            <b>Population:</b> {result.population}
          </p>

          <p>
            <b>Region:</b> {result.region}
          </p>
        </div>
      ) : (
        search && <p className="error">Country not found</p>
      )}
    </div>
  );
}

export default App;
