import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import ModalVideo from "react-modal-video";
import SidebarRight2 from "@/components/hotel-single/SidebarRight2";
import {Link} from "react-router-dom";


export default function GalleryTwo({ event }) {
  console.log(event, "picture");
  
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
      <section className="pt-40">
        <div className="container">
          <div className="hotelSingleGrid">
            
            <div>
              <Gallery>
                <div className="galleryGrid -type-2">
                  <div className="galleryGrid__item relative d-flex justify-end">
                    <Item
                      // original={hotel?.img}
                      // thumbnail={hotel?.img}
                      width={660}
                      height={660}
                    >
                      {({ ref, open }) => (
                        <img
                        src={`http://localhost:3001/${event?.eventPicture.replace(/\\/g, '/')}`} width="100%" height="100%"
                          ref={ref}
                          onClick={open}
                          alt="image"
                          role="button"
                          className="rounded-4"
                        />
                      )}
                    </Item>
                    <div className="absolute px-20 py-20">
                      <button className="button -blue-1 size-40 rounded-full bg-white">
                        <i className="icon-heart text-16" />
                      </button>
                    </div>
                  </div>
                  
               
                </div>
              </Gallery>


              <div className="row justify-between items-end pt-40">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-30 sm:text-25 fw-600">
                        {event?.eventName}
                      </h1>
                    </div>
              
                    <div className="col-auto">
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                    </div>
                  </div>
          

                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {event?.location}
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div>
             
                </div>
          

                <div className="col-auto">
                  <div className="text-14 text-md-end">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      INR<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.425 20.7l-6.15-6.4q-.125-.125-.2-.312T7 13.6V13q0-.425.288-.712T8 12h2.5q1.325 0 2.288-.862T13.95 9H7q-.425 0-.712-.288T6 8q0-.425.288-.712T7 7h6.65q-.425-.875-1.263-1.437T10.5 5H7q-.425 0-.712-.288T6 4q0-.425.288-.712T7 3h10q.425 0 .713.288T18 4q0 .425-.288.713T17 5h-2.25q.35.425.625.925T15.8 7H17q.425 0 .713.288T18 8q0 .425-.288.713T17 9h-1.025q-.2 2.125-1.75 3.563T10.5 14h-.725l5.1 5.3q.45.475.188 1.088T14.15 21q-.2 0-.387-.075t-.338-.225"></path></svg>
                    </span>
                  </div>
                  <Link to={`/booking-page/${event?.id}`}
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Register <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
            
              </div>
     

              <div id="overview" className="row y-gap-40 pt-40 ">
                <div className="col-12">
                <Overview event={event}/>
                </div>
             

                <div className="col-12">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                  
                    Give Away
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities />
                  </div>
                </div>
           
              </div>
          
            </div>
        

            <div>
              <SidebarRight2 event={event}/>
           
            </div> 
            
          </div>
        </div>
     
      </section>
    </>
  );
}
