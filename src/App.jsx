// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSearch from './components/HomeSearch';
import About from './components/About';
import Testimonials from './components/Testimonials';
import PropertyDetails from './components/PropertyDetails'; // Import PropertyDetails

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>
          <Hero />
          <About id='about' />
          <Testimonials />
        </div>} />
        <Route path="/home-search" element={<HomeSearch />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
