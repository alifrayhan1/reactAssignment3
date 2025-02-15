import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Restaurant from "./Component/Restaurant";
import Banner from "./Explor/Bella/Banner";

function App() {
  return (
    <Router>
      <main className="p-4 space-y-5">
        <Navbar />
        <Routes>
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/bella" element={<Banner />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

