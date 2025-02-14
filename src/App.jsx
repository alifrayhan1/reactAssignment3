import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Category from "./Component/Category";
import Restaurant from "./Component/Restaurant";

function App() {
  return (
    <>
      <main className="p-4 space-y-5">
        <Router>
          <Navbar />
          <Category />

          <Routes>
            <Route path="/restaurant" element={<Restaurant />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
