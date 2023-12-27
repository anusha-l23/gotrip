import { Link } from "react-router-dom";
import Slider from "react-slick";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";
import axios from "axios";
const FilterHotels2 = ({ filterOption }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  const [events, setEvents] = useState([])
  const fetchData = async()=> {
    const response = await axios.get("http://localhost:3001/santarun/get-results");
    setEvents(response.data);
  
  }

  useEffect(()=>{
fetchData();
  },[])

  useEffect(() => {
    setFilteredItems(events.filter((elm) => elm.location == filterOption));
  }, [filterOption]);

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      {events.slice(0, 8).map((item) => (
        <div
          className="col-xl-3 col-lg-3 col-sm-6"
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
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                 
                    <div className="cardImage ratio ratio-1:1" key={item.id}>
                      <div className="cardImage__content ">
                        <img
                          className=""
                          src={`http://localhost:3001/${item.eventPicture.replace(/\\/g, '/')}`} width="100%" height="100%"
                          alt="image"
                        />
                      </div>
                    </div>
                
                </Slider>

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
                    {item?.tag}
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
              {/* <div className="d-flex items-center mt-20">
                <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                  {item?.ratings}
                </div>
                <div className="text-14 text-dark-1 fw-500 ml-10">
                  Exceptional
                </div>
                <div className="text-14 text-light-1 ml-10">
                  {item?.numberOfReviews} reviews
                </div>
              </div> */}
              {/* <div className="mt-5">
                <div className="fw-500">
                  Starting from{" "}
                  <span className="text-blue-1">US${item?.price}</span>
                </div>
              </div> */}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FilterHotels2;
