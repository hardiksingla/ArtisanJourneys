import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ExploreExperiencesPage from "./components/Explore";
import RequestCustomItineraryPage from "./components/Custom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<ExploreExperiencesPage />} />
        <Route path="/custom" element={<RequestCustomItineraryPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
