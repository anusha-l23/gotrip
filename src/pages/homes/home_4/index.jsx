import DefaultFooter from "@/components/footer/default";
import Header4 from "@/components/header/header-4";
import Hero4 from "@/components/hero/hero-4";
import BlockGuide from "@/components/block/BlockGuide";
import CallToActions from "@/components/home/home-4/CallToActions";
import Testimonial from "@/components/home/home-4/Testimonial";
import Brand from "@/components/brand/Brand";
import ParallaxBanner from "@/components/banner/ParallaxBanner";
import FilterHotels2 from "@/components/hotels/FilterHotels2";
import { Link } from "react-router-dom";
import FilterHotels4 from "@/components/hotels/FilterHotels4";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-4 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Home_4 = () => {


  return (
    <>
      <MetaComponent meta={metadata} />


      <Header4 />
      <Hero4 />

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Upcoming Events</h2>
              </div>
            </div>
          </div>

          <FilterHotels4 />
        </div>

      </section>
    

   
      <section className="layout-pb-md">
      
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
    
          </div>
          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
      
        </div>
     
      </section> 
      {/* <CallToActions /> */}

      <DefaultFooter />

    </>
  );
};

export default Home_4;
