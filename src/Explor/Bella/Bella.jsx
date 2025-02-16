import { useEffect } from "react";
import Banner from "./Banner";
import More from "./More";
import Place from "./Place";
import OverAll from "./OverAll";
import AllRating from "./AllRating";
import Also from "./Also";
import Footer from "../../Component/Footer";
import Pagination from "../../Reuse/Pagination";

function Bella() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <Pagination />
        <div>
          <Banner />
        </div>
        <div className="mt-20 xs:mt-5 xs:p-20 xs:pb-0 space-y-10">
          <Place />
          <More />
          <OverAll />
          <AllRating />
          <Also />
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Bella;
