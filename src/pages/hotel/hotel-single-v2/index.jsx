import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "@/data/hotels";
import DefaultHeader from "@/components/header/default-header";
import AvailableRooms2 from "@/components/hotel-single/AvailableRooms2";
import Faq from "@/components/faq/Faq";
import DefaultFooter from "@/components/footer/default";
import StickyHeader2 from "@/components/hotel-single/StickyHeader2";
import GalleryTwo from "@/components/hotel-single/GalleryTwo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Hotel Single v2 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const HotelSingleV2Dynamic = () => {
  let params = useParams();

  const [events, setEvents] = useState([])
  const fetchData = async()=> {
    const response = await axios.get("http://localhost:3001/santarun/get-results");
    setEvents(response.data);
  
  }

  useEffect(()=>{
fetchData();
  },[])
  const id = params.id;

  console.log(events, "events")
  
  const event = events.find((item) => item && String(item.id) === id);
console.log(typeof id, "id")
console.log(event, "event");
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="header-margin"></div>
      <DefaultHeader />
      <StickyHeader2 hotel={hotel} />
  <GalleryTwo event={event} />

      <section id="categories" className="pt-30">
        <div className="container">
          <div className="row pb-20">
            <div className="col-auto">
              <h3 className="text-22 fw-500">
                Choose Your Categories
                </h3>
            </div>
          </div>

          <AvailableRooms2 event={event} />
        </div>
      </section>

      <section id="faq" className="pt-40 layout-pb-md">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  FAQs about
                  <br /> The Crown Hotel
                </h2>
              </div>

              <div className="col-lg-8">
                <div className="accordion -simple row y-gap-20 js-accordion">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DefaultFooter />
    </>
  );
};

export default HotelSingleV2Dynamic;
