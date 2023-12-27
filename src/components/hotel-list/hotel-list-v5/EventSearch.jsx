import { useState, useEffect } from "react";
import axios from "axios";

const EventSearch = ({onEventChange}) => {

  const [searchValue, setSearchValue] = useState("");
const [eventNames, setEventNames] = useState([]);


const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/santarun/get-results');
    const eventNames = response.data.map(event => event.eventName);
    setEventNames(eventNames);
  } catch (error) {
    console.error('Error fetching Event Names:', error);
  }
};


const handleEventChange = (e)=> {
const value = e.target.value;
onEventChange(value);
setSearchValue(value);
}

useEffect(() => {
  fetchData();
}, []);

 

  const handleOptionClick = (eventName) => {
    setSearchValue(eventName);
    onEventChange(eventName)
  };

  return (
    <>
      <div className="searchMenu-loc pl-20 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">Event Name</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Please enter event name"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
     <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
             <ul className="y-gap-5 js-results">
 {eventNames.map((eventName, index) => (
  <>
  <div className="d-flex ">
  <div className="icon-location-2 text-light-1 text-20 pt-4" />
            <div
              key={index}
              style={{cursor:"pointer"}}
              className="dropdown-item"
              onClick={() => handleOptionClick(eventName)}
            >
              {eventName}
            </div>
            </div>
            </>
          ))} 
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSearch;
