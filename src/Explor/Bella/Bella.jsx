import Banner from "./Banner"
import More from "./More"
import Place from "./Place"
import OverAll from "./OverAll"
import AllRating from "./AllRating"
import Also from "./Also"
import Footer from "../../Component/Footer"
import { Link, useLocation } from "react-router-dom";


function Bella() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
        <section>
        <div className="flex items-center text-primary text-sm pb-2 font-bold">
      <Link to="/" className="hover:text-black">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <div key={index} className="flex items-center">
            <span>/</span>
            <Link to={routeTo} className="hover:text-black capitalize">{name}</Link>
          </div>
        );
      })}
    </div>
            <div>
                <Banner/>
            </div>
            <div className="mt-20 xs:mt-5 xs:p-20 xs:pb-0 space-y-10">
                <Place/>
                <More/>
                <OverAll/>
                <AllRating/>
                <Also/>
                <Footer/>
            </div>
        </section>
    </>
  )
}

export default Bella