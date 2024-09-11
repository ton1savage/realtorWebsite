import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSearch from './components/HomeSearch';
import About from './components/About';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<div>
          <Hero />
          <About id='about' />
          <Testimonials />
        </div>} />
        <Route path="/home-search" element={<HomeSearch />} />
      </Routes>
    </Router>
  );
};

export default App;