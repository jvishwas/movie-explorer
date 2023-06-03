import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Movie from "./component/Movie" 
import Popular from "./component/popular/Popular";
import Navbar from "./component/Nav/Navbar";
import About from "./component/about/About";
// import Navbar from "./component/Nav/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/about" element={<About/>} />
          
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
