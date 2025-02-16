import { useState } from "react";
import Recent from "../Reuse/Recent";
import ActivityInfo from "../Source/ActivityInfo";

function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ActivityInfo.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ActivityInfo.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <section>
      <div className="p-6 relative">
        <h1 className="py-4 text-xl font-bold">Recent Activities</h1>

        <div className="relative">
          <div className="flex items-center space-x-4 overflow-x-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full w-8 h-8 flex justify-center items-center font-bold text-lg z-10"
            >
              &lt;
            </button>

            {/* Carousel Content: Display 4 Cards at a time */}
            <div className="flex items-center space-x-4">
              {ActivityInfo.slice(currentIndex, currentIndex + 4).map(
                (info, index) => (
                  <Recent
                    key={index}
                    user={info.user}
                    location={info.location}
                    date={info.date}
                    rating={info.rating}
                    reviewText={info.reviewText}
                    reviewText1={info.reviewText1}
                    images={info.images}
                  />
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full w-8 h-8 flex justify-center items-center font-bold text-lg z-10"
            >
              &gt;
            </button>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {ActivityInfo.slice(0, 3).map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-black" : "bg-gray-400"
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

export default Activities;
