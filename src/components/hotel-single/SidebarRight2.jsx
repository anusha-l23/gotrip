import Map from "./Map";
import { format } from "date-fns";
import { Link } from "react-router-dom";
const SidebarRight2 = ({ event }) => {
  const dateString = event?.year || "";
  let formattedDate = "";
  if (dateString) {
    const date = new Date(dateString);

    if (!isNaN(date.getTime())) {
      formattedDate = format(date, "MMMM dd, yyyy - EEEE");
      console.log(formattedDate, "formatted");
    } else {
      console.log("invalid date string");
    }
  } else {
    console.error("Date string is undefined");
  }

const faceBookStyle ={
  backgroundColor: "#3B5998",
  borderRadius:"50%",
  color:"white",
  padding:"0.6em"
}

const twitterStyle ={
  backgroundColor: "#55ACEE",
  borderRadius:"50%",
  color:"white",
  padding:"0.2em 0.5em"
}

const whatsStyle ={
  backgroundColor: "#00E676",
  borderRadius:"50%",
  color:"white",
  padding:"0.2em 0.6em"
}

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-center bg-secondary text-white fw-bold mb-2">
        Event Details
      </div>

      <div className="row y-gap-10">
        <div className="col-12">
          <div className="d-flex items-center">
            {/* <i className="icon-award text-20 text-blue-1" /> */}
            <div className="text-14 fw-500 ml-10">
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="bi bi-calendar-fill mr-5"></i>
                  {formattedDate}
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="icon-location-2 text-16 mr-5" />
                  {event?.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-15">
          <Map />
        </div>
      </div>
      {/* End .row */}
      <div className="text-center bg-secondary text-white fw-bold mb-3">
        Organizer Details
      </div>

      <div className="row y-gap-10">
        <div className="col-12">
          <div className="d-flex items-center">
            <div className="text-14 fw-500 ml-10">
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="bi bi-envelope mr-5"></i>
                  info@acsofficialgmail.com
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="bi bi-globe mr-5" />
                  https://www.ifinish.in/
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="bi bi-telephone mr-5" />
                  Aarya Consultancy,9985100008
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-secondary text-white fw-bold my-3">
        Share
      </div>
      <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
  <Link to="#" className="mr-5">
  <i className="fab fa-facebook" style={faceBookStyle}></i>
  </Link>
  <Link to="#" className="mr-5" style={twitterStyle}>
    <i className="fab fa-twitter"></i>
  </Link>
  <Link to="#" className="mr-5" style={whatsStyle}>
    <i className="fab fa-whatsapp"></i>
  </Link>
</div>

<div className="text-center bg-secondary text-white fw-bold my-4">
        Support
      </div>
      <div className="row y-gap-10">
        <div className="col-12">
          <div className="d-flex items-center">
            <div className="text-14 fw-500 ml-10">
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="bi bi-envelope mr-5"></i>
                  support@ifinish.in
                </div>
              </div>
             
              <div className="col-auto">
                <div className="d-flex items-center text-15 text-light-1">
                  <i className="bi bi-telephone mr-5" />
                  +91 9985100008
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight2;
