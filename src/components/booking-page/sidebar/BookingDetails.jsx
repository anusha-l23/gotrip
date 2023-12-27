
import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {format} from "date-fns";
const BookingDetails = () => {

  const params = useParams();
  const id = params.id;
  console.log(id,"id") 

  const [events, setEvents] = useState([])

  const fetchData = async()=> {
    const response = await axios.get("http://localhost:3001/santarun/get-results");
    setEvents(response.data);
    console.log(response, "response")
  }
  useEffect(()=>{
fetchData();
  },[])
  const event = events.find(item => item.id === Number(id));
  console.log(event, "event")

const openDate = new Date(event?.regOpenDate);

const closeDate = new Date(event?.regCloseDate);

let openFormattedDate = "";
if (!isNaN(openDate.getTime())) {
  openFormattedDate = format(openDate, "MMMM dd, yyyy");
  console.log(openFormattedDate, "formatted");
} else {
  console.log("invalid date string");
}


let closeFormattedDate = "";
if (!isNaN(closeDate.getTime())) {
  closeFormattedDate = format(closeDate, "MMMM dd, yyyy");
  console.log(openFormattedDate, "formatted");
} else {
  console.log("invalid date string");
}


const openFormattedTime = openDate.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit'
});

const closeFormattedTime = closeDate.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit'
});


  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your booking details</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <img
            src={`http://localhost:3001/${event?.eventPicture.replace(/\\/g, '/')}`}
            alt="image"
            className="size-140 rounded-4 object-cover"
          />
        </div>
        
        <div className="col">
      

          <div className="lh-17 fw-500">
           {event?.eventName}
          </div>
          <div className="text-14 lh-15 mt-5">{event?.location}</div>
       
        </div>
      </div>

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between">
        <div className="col-auto">
          <div className="text-15">Check-in</div>
          <div className="fw-500">{openFormattedDate}</div>
          
      
          <div className="text-15 text-light-1">{openFormattedTime}</div>
        </div>
        <div className="col-auto md:d-none">
          <div className="h-full w-1 bg-border" />
        </div>
        <div className="col-auto text-right md:text-left">
          <div className="text-15">Check-out</div>
          <div className="fw-500">{closeFormattedDate}</div>
          <div className="text-15 text-light-1">{closeFormattedTime}</div>
        </div>
      </div>
      {/* End row */}

      {/* <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Total length of stay:</div>
        <div className="fw-500">9 nights</div>
        <a href="#" className="text-15 text-blue-1 underline">
          Travelling on different dates?
        </a>
      </div>

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between items-center">
        <div className="col-auto">
          <div className="text-15">You selected:</div>
          <div className="fw-500">Superior Double Studio</div>
          <a href="#" className="text-15 text-blue-1 underline">
            Change your selection
          </a>
        </div>
        <div className="col-auto">
          <div className="text-15">1 room, 4 adult</div>
        </div>
      </div> */}
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
