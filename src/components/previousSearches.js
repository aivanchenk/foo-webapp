import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches({ onSearch }) {
  const [searches, setSearches] = useState([
    "pizza",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice cream",
    "lasagna",
    "pudding",
    "soup",
  ]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
    if (searchTerm && !searches.includes(searchTerm)) {
      setSearches([searchTerm, ...searches]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      handleSearch(searchInput.trim());
      setSearchInput("");
    }
  };

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => handleSearch(search)}
          >
            {search}
          </div>
        ))}
      </div>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search ..."
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
