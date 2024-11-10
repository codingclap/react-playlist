import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

function App() {
  
 
return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
    <Footer />
  </Router>
)

}

export default App
