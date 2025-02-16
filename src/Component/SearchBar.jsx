import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockData = [
  { name: "The Royal Restaurant", location: "Singapore", link: "/royal-restaurant" },
  { name: "Ocean View Hotel", location: "Singapore", link: "/ocean-view-hotel" },
  { name: "Sunset Cafe", location: "Malaysia", link: "/sunset-cafe" },
  { name: "Tech Repair Service", location: "India", link: "/tech-repair" },
  { name: "City Spa", location: "Dubai", link: "/city-spa" },
];

function SearchBar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    if (search || location) {
      const filtered = mockData.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) &&
          item.location.toLowerCase().includes(location.toLowerCase())
      );
      setSuggestions(filtered);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
    }
  }, [search, location]);

  const handleSubmit = () => {
    if (!search && !location) return;

    const matchedItem = mockData.find(
      (item) =>
        item.name.toLowerCase() === search.toLowerCase() &&
        item.location.toLowerCase() === location.toLowerCase()
    );

    if (matchedItem) {
      navigate(matchedItem.link);
    } else {
      const query = search ? `query=${search}` : "";
      const loc = location ? `location=${location}` : "";
      const queryString = [query, loc].filter(Boolean).join("&");
      navigate(`/search?${queryString}`);
    }

    setSearch("");
    setLocation("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (item) => {
    setSearch(item.name);
    setLocation(item.location);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        const selectedItem = suggestions[selectedIndex];
        setSearch(selectedItem.name);
        setLocation(selectedItem.location);
        setSuggestions([]);
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center border-2 border-[#ADADAD] rounded-full py-0.5 px-1 gap-2 w-full">
      <input
        type="text"
        className="ml-1 outline-none w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="restaurant, hotel, service..."
        onKeyDown={handleKeyDown}
      />
      <span className="h-4 w-0.5 mx-1 bg-[#ADADAD]"></span>
      <input
        type="text"
        className="outline-none w-full"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location..."
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="text-quinary bg-primary rounded-full p-2"
        onClick={handleSubmit}
      >
        <Search size={18} />
      </button>

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md z-50 mt-1 max-h-48 overflow-auto">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer ${
                selectedIndex === index ? "bg-blue-100" : "hover:bg-gray-200"
              }`}
              onMouseDown={() => handleSuggestionClick(item)}
            >
              {item.name} - {item.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;

