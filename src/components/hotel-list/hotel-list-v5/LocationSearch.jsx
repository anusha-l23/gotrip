
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onLocationChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/santarun/get-results');
      const eventLocations = response.data.map(event => event.location);
      const uniqueLocations = Array.from(new Set(eventLocations));
      setLocations(uniqueLocations);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLocationInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    onLocationChange(value); 
  };

  const handleLocationClick = (location) => {
    setInputValue(location);
    setShowDropdown(false);
    onLocationChange(location);
  };

  return (
    <div className="searchMenu-loc pl-20 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          <input
            autoComplete="off"
            type="search"
            placeholder="Where are you going?"
            className="js-search js-dd-focus"
            value={inputValue}
            onChange={handleLocationInputChange}
            onFocus={() => setShowDropdown(true)}
          />
        </div>
      </div>
      {showDropdown && (

<div className="shadow-2 dropdown-menu min-width-400">
     <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
             <ul className="y-gap-5 js-results">
 {locations.map((location, index) => (
            <div
              key={index}
              style={{cursor:"pointer"}}
              className="dropdown-item"
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </div>
          ))} 
            </ul>
          </div>
        </div>

        // <div className="dropdown-menu">
        //   {locations.map((location, index) => (
        //     <div
        //       key={index}
        //       className="dropdown-item"
        //       onClick={() => handleLocationClick(location)}
        //     >
        //       {location}
        //     </div>
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default SearchBar;
