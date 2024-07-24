// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './section/Body'; // Asumsi Body adalah halaman utama
import AboutUs from './components/AboutUs.jsx'; // Impor halaman About Us
import Layanan from './components/Layanan.jsx'
import Tim_media from './components/Tim_media.jsx';
import { Artikel } from './components/Artikel.jsx';
import Kontak from './components/Kontak.jsx';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} /> {/* Rute untuk halaman utama */}
        <Route path="/aboutus" element={<AboutUs />} /> {/* Rute untuk halaman About Us */}
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tim_media" element={<Tim_media />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
}

export default App;