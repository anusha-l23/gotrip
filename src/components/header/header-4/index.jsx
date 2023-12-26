import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";

import MobileMenu from "../MobileMenu";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <>
      <header
        className={`header -type-2 ${navbar ? "bg-dark-1 is-sticky" : ""}`}
      >
        <div className="header__container px-60 xl:px-30 sm:px-20">
          <div className="row justify-between items-center">
          <div className="col-auto">
              <div className="d-flex items-center">
                <Link to="/" className="header-logo mr-20">
                  <img src="/img/general/logo-light.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark.svg" alt="logo icon" />
                </Link>

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-white" />
                  </div>
                </div>

              </div>
            </div>
                     <div className="col-auto">
              <div className="d-flex items-center">
   
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
               
                  <Link
                    to="/signup"
                    className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                  >
                    Sign In / Register
                  </Link>
                </div>
    
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                  <div>
                    <Link
                      to="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                    </div>
                  </div>
                </div>
       
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
