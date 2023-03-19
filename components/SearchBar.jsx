"use client";
import { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((album) => {
          return (
            album && album.title && album.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <div className={styles.ingSearch}>
        <label className={styles.ingLabel}>Ingredients</label>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            name="inrSearchBar"
            placeholder="ex: black beans, rice, tomatoes..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <FaSearch id="searchIcon" />
        </div>
        <p className={styles.subIngLabel}>
          search & select 2 - 4 ingredients from your fridge/pantry
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
