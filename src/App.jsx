import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import About from "./components/About";
import HomeSearch from "./components/HomeSearch";
import FetchDataTest from "./components/FetchDataTest";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
      </div>
      <HomeSearch />
      <About id='about'/>
      <FetchDataTest />
    </BrowserRouter>
  );
};

export default App
