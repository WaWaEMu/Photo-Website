import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/photo-webist" element={<Homepage />}/>
        <Route path ="/photo-webist/about" element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
