import { useState, useEffect } from "react";

function SortComponent({ onSortChange }) {
  const [sortType, setSortType] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (sort) => {
    setSortType(sort);
    onSortChange(sort);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".sort-dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative sort-dropdown">
      {/* Sort Button */}
      <button
        className="bg-gray-600 text-white  rounded-full px-4 py-2 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/BellaImage/Sort.svg" alt="Sort Icon" className="w-4 h-4" />
        {sortType === "latest" ? "Sort" : sortType}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-40 z-10">
          {["latest", "highest", "lowest"].map((item) => (
            <button
              key={item}
              onClick={() => handleSortChange(item)}
              className={`block px-4 py-2 w-full text-left ${
                sortType === item ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              {item === "latest"
                ? "Latest"
                : item === "highest"
                ? "Highest Rated"
                : "Lowest Rated"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortComponent;
