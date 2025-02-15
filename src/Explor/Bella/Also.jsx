import { useState, useEffect } from "react";
import Card from "../../Reuse/UseCard";
import LatestHotelInfo from "../../Source/LatestHotelInfo";

function Also() {
  const [randomHotels, setRandomHotels] = useState([]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setRandomHotels(shuffleArray(LatestHotelInfo).slice(0, 3));
  }, []);

  return (
    <section>
      <div>
        <h1 className="font-bold text-lg">Also discover...</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  gap-4">
          {randomHotels.map((info, index) => (
            <div key={index} className="text-[60%]">
              <Card
                imageSrc={info.imageSrc}
                heading={info.heading}
                description={info.description}
                rating={info.rating}
                reviewCount={info.reviewCount}
                link={info.link}
                width=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Also;
