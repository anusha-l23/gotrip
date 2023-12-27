import { Link } from "react-router-dom";
import Slider from "react-slick";
import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";
import { useState, useEffect } from "react";
import axios from "axios";

const HotelProperties = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [events, setEvents] = useState([])
  const fetchData = async()=> {
    const response = await axios.get("http://localhost:3001/santarun/get-results");
    setEvents(response.data);
    console.log(response, "response")
  }
  useEffect(()=>{
fetchData();
  },[])

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {events.map((item) => (
        
        <div
        className="col-lg-3 col-sm-6"
        key={item?.id}
        data-aos="fade"
        data-aos-delay={item.delayAnimation}
      >
        <Link
          to={`/hotel-single-v2/${item.id}`}
          className="hotelsCard -type-1 hover-inside-slider"
        >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                {/* <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content ">
                        <img
                          className="rounded-4 col-12 js-lazy"
                          src={slide}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </Slider> */}
<img src={`http://localhost:3001/${item.eventPicture.replace(/\\/g, '/')}`} width="100%" height="100%" alt="Event" />
                <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "Open")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "Closed")
                        ? "bg-blue-1 text-white"
                        : ""
                    } 
                    } ${
                      isTextMatched(item?.tag, "Fast Filling")
                        ? "bg-brown-1 text-white"
                        : ""
                    } 
                    `}
                  >
                    { item?.tag }
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.eventName}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.location}
              </p>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.year.split("T")[0]}
              </p>
             
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default HotelProperties;
