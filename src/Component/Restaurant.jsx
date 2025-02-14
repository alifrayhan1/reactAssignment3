import Carousel from "./Carousel";
import Discover from "./Discover";
import Feedback from "./Feedback";
import LatestHotel from "./LatestHotel";
import Activities from "./Activity";
import Footer from "./Footer";

function Restaurant() {
  return (
    <>
      <Carousel />
      <LatestHotel />
      <Discover />
      <Feedback />
      <Activities />
      <Footer />
    </>
  );
}

export default Restaurant;
