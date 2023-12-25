import { useEffect, useState } from "react";
import FilterBox2 from "./filter-box-2";
const StickyHeader2 = ({ hotel }) => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={`singleMenu js-singleMenu ${header ? "-is-active" : ""}`}>
      <div className="col-12">
        <div className="py-10 bg-dark-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <FilterBox2 /> */}
              </div>
            </div>
          </div>
          {/* End .contaienr */}
        </div>
        {/* End Search filter top */}

        <div className="singleMenu__content">
          <div className="container">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-auto">
                <div className="singleMenu__links row x-gap-30 y-gap-10">
                  <div className="col-auto">
                    <a href="#overview">
                      {/* Overview */}
                      About
                      </a>
                  </div>
                  <div className="col-auto">
                    <a href="#categories">
                      {/* Rooms */}
                      Race Category
                      </a>
                  </div>
                  <div className="col-auto">
                    <a href="#reviews">
                      {/* Reviews */}
                      Price Details
                      </a>
                  </div>
                  {/* <div className="col-auto">
                    <a href="#facilities">
                      Facilities
                      </a>
                  </div> */}
                  <div className="col-auto">
                    <a href="#faq">Faq</a>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-auto">
                <div className="row x-gap-15 y-gap-15 items-center">
                  <div className="col-auto">
                    <div className="text-14">
                      From{" "}
                      <span className="text-22 text-dark-1 fw-500">
                        INR<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.425 20.7l-6.15-6.4q-.125-.125-.2-.312T7 13.6V13q0-.425.288-.712T8 12h2.5q1.325 0 2.288-.862T13.95 9H7q-.425 0-.712-.288T6 8q0-.425.288-.712T7 7h6.65q-.425-.875-1.263-1.437T10.5 5H7q-.425 0-.712-.288T6 4q0-.425.288-.712T7 3h10q.425 0 .713.288T18 4q0 .425-.288.713T17 5h-2.25q.35.425.625.925T15.8 7H17q.425 0 .713.288T18 8q0 .425-.288.713T17 9h-1.025q-.2 2.125-1.75 3.563T10.5 14h-.725l5.1 5.3q.45.475.188 1.088T14.15 21q-.2 0-.387-.075t-.338-.225"></path></svg>{hotel?.price}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a
                      href="#"
                      className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                    >
                      Select Category <div className="icon-arrow-top-right ml-15" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .singleMenu__content */}
      </div>
    </div>
  );
};

export default StickyHeader2;
