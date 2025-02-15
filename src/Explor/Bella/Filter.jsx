import { useState, useEffect } from "react";

function FilterComponent({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
    onFilterChange(filter);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".filter-dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative filter-dropdown">
      <button
        className="border rounded-full px-4 py-2 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/BellaImage/Filter.png" alt="Filter Icon" className="w-4 h-4" />
        {selectedFilter === "all" 
  ? "Filter" 
  : selectedFilter === "5-star" 
  ? "5 Stars" 
  : selectedFilter.replace("-star", " Stars & Up")}

      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-40 z-10">
          {["all", "5-star", "4-star", "3-star"].map((item) => (
            <button
              key={item}
              onClick={() => handleFilterChange(item)}
              className={`block px-4 py-2 w-full text-left ${
                selectedFilter === item ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              {item === "all"
                ? "All Ratings"
                : item === "5-star"
                ? "5 Stars"
                : `${item.replace("-star", " Stars & Up")}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterComponent;


