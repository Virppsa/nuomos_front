import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Baidares from './Components/Baidares';
import Sodybos from './Components/Sodybos';
import Home from './Components/Home';
import Footer from './Components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baidares" element={<Baidares />} />
        <Route path="/sodybos" element={<Sodybos />} />
        <Route path="/kainos" element={<Kainos />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
      </Routes>
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}

function Kainos() {
  return <h2>Kainos Page</h2>;
}

function Kontaktai() {
  return <h2>Kontaktai Page</h2>;
}

export default App;
