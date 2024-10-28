import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Components/Home'
import FindJob from "./Components/FindJob";
// import HeroSection from "./HeroSection";
// import SearchBar from "./SearchBar";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findJob" element={<FindJob />} />
        </Routes>
    </Router>
  );
}
// {/* <div className="App">
//       <NavBar />
//       {/* <HeroSection />
//       <SearchBar /> */}
//     </div>
//   );
// } */}
export default App;