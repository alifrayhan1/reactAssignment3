import { useLocation } from "react-router-dom";

function SearchPage() {
  const location = useLocation();
  
  
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const locationQuery = searchParams.get("location");

  return (
    <div>
      <h1>Search Results</h1>
      <p>Query: {query}</p>
      <p>Location: {locationQuery}</p>
    </div>
  );
}

export default SearchPage;