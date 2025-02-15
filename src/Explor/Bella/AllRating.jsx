import { useState, useEffect } from "react";
import ActivityInfo from "../../Source/ActivityInfo";
import FilterComponent from "./Filter";
import SortComponent from "./Sort";

function AllRating() {
  const [visibleItems, setVisibleItems] = useState(9);
  const [filteredData, setFilteredData] = useState(ActivityInfo);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortType, setSortType] = useState("latest");

  useEffect(() => {
    let filtered = [...ActivityInfo];

    
    if (selectedFilter !== "all") {
      const minRating = parseInt(selectedFilter[0]); // 
      filtered = filtered.filter((item) => item.rating >= minRating);
    }

   
    if (sortType === "latest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === "highest") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "lowest") {
      filtered.sort((a, b) => a.rating - b.rating);
    }

    setFilteredData(filtered);
  }, [selectedFilter, sortType]);

  return (
    <section>
      {/* Filter & Sort Buttons */}
      <div className="flex items-center gap-2">
        <FilterComponent onFilterChange={setSelectedFilter} />
        <SortComponent onSortChange={setSortType} />
      </div>

      {/* Review List */}
      <div>
        {filteredData.slice(0, visibleItems).map((info, index) => {
          const rating = info.rating;
          const reviewCount = info.reviewCount;
          const fullStars = Math.floor(rating);
          const hasHalfStar = rating % 1 !== 0;

          return (
            <div key={index} className="flex gap-2 bg-gray-50 rounded-xl my-3 p-4">
              {/* User Image */}
              <div>
                <img
                  className="w-8 h-8 mt-2.5 bg-white rounded-full p-1.5"
                  src={info.user.profileImage}
                  alt={info.user.name}
                />
              </div>
              {/* Review Content */}
              <div>
                <h1 className="font-bold">{info.user.name}</h1>
                <p className="text-gray-600">{info.date}</p>

                {/* Star Ratings */}
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, starIndex) => {
                    if (starIndex < fullStars) {
                      return <img key={starIndex} src="Star.png" alt="full-star" className="w-4 h-4 bg-yellow-500" />;
                    } else if (starIndex === fullStars && hasHalfStar) {
                      return <img key={starIndex} src="HalfStar.svg" alt="half-star" className="w-4 h-4 bg-yellow-500" />;
                    } else {
                      return <img key={starIndex} src="Star.png" alt="empty-star" className="w-4 h-4 bg-gray-300" />;
                    }
                  })}
                  <div className="flex items-center ml-0.5">
                    <span className="font-bold">{rating}</span>
                    <span className="text-gray-600"> ({reviewCount} reviews)</span>
                  </div>
                </div>

                <p className="text-xs my-4">{info.reviewText1}</p>
              </div>
            </div>
          );
        })}

        {/* Show More Button */}
        {visibleItems < filteredData.length && (
          <div className="flex justify-center items-center">
            <button
              className="bg-primary py-2 px-5 rounded-full text-white"
              onClick={() => setVisibleItems(filteredData.length)}
            >
              Show more reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllRating;
