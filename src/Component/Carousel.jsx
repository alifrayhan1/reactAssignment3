import { useState } from "react";
import Card from "../Reuse/UseCard";
import RestaurantInfo from "../Source/RestaurantInfo";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? RestaurantInfo.length - 6 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === RestaurantInfo.length - 6 ? 0 : prevIndex + 1
    );
  };

  return (
    <section>
      <div className="bg-primary rounded-md sm:pb-8 sm:px-8 pb-4 px-4 relative">
        <h1 className="py-4 text-xl text-white">
          Find the best restaurant ratings below
        </h1>

        <div className="relative">
          <div className="flex items-center space-x-6 overflow-x-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full w-8 h-8 flex justify-center items-center font-bold text-lg z-10"
            >
              &lt;
            </button>

            {/* Carousel Content: Display 4 Cards at a time */}
            <div className="flex items-center space-x-6">
              {RestaurantInfo.slice(currentIndex, currentIndex + 6).map((info, index) => (
                <Card
                  key={index}
                  imageSrc={info.imageSrc}
                  heading={info.heading}
                  description={info.description}
                  rating={info.rating}
                  reviewCount={info.reviewCount}
                  link={info.link}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full w-8 h-8 flex justify-center items-center font-bold text-lg z-10"
            >
              &gt;
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            {RestaurantInfo.slice(0, 3).map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
