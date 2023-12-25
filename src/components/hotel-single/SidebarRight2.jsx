import Map from "./Map";
import {format} from "date-fns";

const SidebarRight2 = ({event}) => {

  const dateString = event?.year || "";
  let formattedDate = "";
  if (dateString) {
  const date = new Date(dateString);

  if (!isNaN(date.getTime())) {
formattedDate = format(date, "MMMM dd, yyyy - EEEE");
  console.log(formattedDate,"formatted")
  }
  else{
    console.log("invalid date string")
  }
}
else{
  console.error('Date string is undefined');
}

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="mb-15">
        <Map />
      </div>
      {/* End map */}

      <div className="row y-gap-10">
        <div className="col-12">
          <div className="d-flex items-center">
            {/* <i className="icon-award text-20 text-blue-1" /> */}
            <div className="text-14 fw-500 ml-10">
            <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {event?.location}
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        {formattedDate}
                      </div>
                    </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12">
          <div className="d-flex items-center">
            <i className="icon-pedestrian text-20 text-blue-1" />
            <div className="text-14 fw-500 ml-10">Exceptional for walking</div>
          </div>
        </div> */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-15 mb-15" />
      <div className="text-15 fw-500">Popular landmarks</div>
      <div className="d-flex justify-between pt-10">
        <div className="text-14">Royal Pump Room Museum</div>
        <div className="text-14 text-light-1">0.1 km</div>
      </div>

      <div className="d-flex justify-between pt-5">
        <div className="text-14">Harrogate Turkish Baths</div>
        <div className="text-14 text-light-1">0.1 km</div>
      </div>
      <button className="d-block text-14 fw-500 underline text-blue-1 mt-10">
        Show More
      </button>
    </div>
  );
};

export default SidebarRight2;
