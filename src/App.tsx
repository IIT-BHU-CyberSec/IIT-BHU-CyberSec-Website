import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import AboutUs from "./pages/aboutUs";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </>
      </Router>
    </>
  );
};

export default App;
