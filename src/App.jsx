import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Restaurant from "./Component/Restaurant";
import Bella from "./Explor/Bella/Bella";
import Hotel from "./Component/Hotel";
import Service from "./Component/Service";
import Singapore from "./BestRestaurant/Singapore";

function App() {
  return (
    <Router>
      <main className="p-4 space-y-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/home" element={<Restaurant />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/homeservice" element={<Hotel />} />
          <Route path="/shop" element={<Service />} />
          <Route path="/carlocation" element={<Service />} />
          <Route path="/spa" element={<Service />} />
          <Route path="/park" element={<Service />} />
          <Route path="/museum" element={<Service />} />
          <Route path="/carwash" element={<Service />} />
          <Route path="/bar" element={<Service />} />
          <Route path="/gym" element={<Service />} />
          
          <Route path="/bella" element={<Bella />} />
          <Route path="/singapore" element={<Singapore/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
