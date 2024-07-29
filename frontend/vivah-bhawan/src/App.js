import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import Venue from './Components/Venue';
import Booking from './Components/Booking';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
