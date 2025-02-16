import { useState, useEffect } from "react";
import SortComponent from "../Explor/Bella/Sort";
import Pagination from "../Reuse/Pagination";
import Card from "../Reuse/UseCard";
import LatestHotelInfo from "../Source/LatestHotelInfo";

function Singapore() {
  const [visibleItems, setVisibleItems] = useState(7);
  const [filteredData, setFilteredData] = useState(LatestHotelInfo);
  const [sortType, setSortType] = useState("latest");

  useEffect(() => {
    let sortedData = [...LatestHotelInfo];

    // Sort the data based on the selected sort type
    if (sortType === "latest") {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === "highest") {
      sortedData.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "lowest") {
      sortedData.sort((a, b) => a.rating - b.rating);
    }

    setFilteredData(sortedData);
  }, [sortType]);

  const handlePagination = (page) => {
    const itemsPerPage = 9; // Number of items per page
    const newVisibleItems = itemsPerPage * page;
    setVisibleItems(newVisibleItems);
  };

  return (
    <>
      <section className="pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="space-y-5">
            <Pagination onPageChange={handlePagination} />
            <div className="flex  justify-between px-3 items-center">
              <h1 className="text-xl font-bold">
                Best Restaurants in Singapore
              </h1>
              <SortComponent onSortChange={setSortType} />
            </div>
            <div>
              {filteredData.slice(0, visibleItems).map((info, index) => (
                <div key={index}>
                  <Card
                    imageSrc={info.imageSrc}
                    heading={info.heading}
                    description={info.description}
                    rating={info.rating}
                    reviewCount={info.reviewCount}
                    link={info.link}
                    width=""
                    flex="flex m-2 text-[60%]"
                    imageStyle="h-full my-auto"
                  />
                </div>
              ))}
            </div>
            <div>
          {visibleItems < filteredData.length && (
            <div className="flex justify-center items-center">
              <button
                className="bg-primary py-1 px-5 rounded-full text-white"
                onClick={() => setVisibleItems(filteredData.length)}
              >
                Show more
              </button>
            </div>
          )}
        </div>
          </div>
          <div>
            <img src="MapSin.png" alt="" />
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Singapore;
