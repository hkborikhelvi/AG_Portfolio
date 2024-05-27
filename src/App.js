import './App.css';
import AboutUs from './components/AboutUs';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Pricing />
      <AboutUs />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="#home" element={<Home />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
