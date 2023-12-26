import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import Home from "./pages";

import Home_4 from "./pages/homes/home_4";


import NotFoundPage from "./pages/not-found";
import About from "./pages/others/about";
import HelpCenter from "./pages/others/help-center";
import LogIn from "./pages/others/login";
import SignUp from "./pages/others/signup";
import Terms from "./pages/others/terms";
import Invoice from "./pages/others/invoice";
import DBDashboard from "./pages/dashboard/dashboard/db-dashboard";
import DBBooking from "./pages/dashboard/dashboard/db-booking";
import DBWishlist from "./pages/dashboard/dashboard/db-wishlist";
import DBSettings from "./pages/dashboard/dashboard/db-settings";
import VendorAddHotel from "./pages/dashboard/vendor-dashboard/add-hotel";
import VendorBooking from "./pages/dashboard/vendor-dashboard/booking";
import BVVendorHotel from "./pages/dashboard/vendor-dashboard/hotels";
import BDVendorRecovery from "./pages/dashboard/vendor-dashboard/recovery";
import VendorDashboard from "./pages/dashboard/vendor-dashboard/dashboard";

import Events from "./pages/hotel/hotel-list-v5";
import Results from "./pages/hotel/hotel-list-v6";

import HotelSingleV2Dynamic from "./pages/hotel/hotel-single-v2";
import BookingPage from "./pages/hotel/booking-page";


import Contact from "./pages/others/contact";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home_4" element={<Home_4 />} />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route path="about" element={<About />} />
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="terms" element={<Terms />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="contact" element={<Contact />} />
              
              <Route path="dashboard">
                <Route path="db-dashboard" element={<DBDashboard />} />
                <Route path="db-booking" element={<DBBooking />} />
                <Route path="db-wishlist" element={<DBWishlist />} />
                <Route path="db-settings" element={<DBSettings />} />
              </Route>

              <Route path="vendor-dashboard">
                <Route path="dashboard" element={<VendorDashboard />} />
                <Route path="add-hotel" element={<VendorAddHotel />} />
                <Route path="booking" element={<VendorBooking />} />
                <Route path="hotels" element={<BVVendorHotel />} />
                <Route path="recovery" element={<BDVendorRecovery />} />
              </Route>

              <Route path="events" element={<Events />} />
              <Route path="results" element={<Results />} />
            
              <Route
                path="hotel-single-v2/:id"
                element={<HotelSingleV2Dynamic />}
              />
              <Route path="booking-page" element={<BookingPage />} />

            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
