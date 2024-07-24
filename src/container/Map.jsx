import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FadeInOnScroll from './FadeInOnScroll';

const Map = () => {
  const position = [-1.4208591286450383, 120.28541712722968]; // Koordinat pusat peta (latitude, longitude)

  return (
    <div className="w-[100%] h-[40vh] border border-blue-600">
      <MapContainer center={position} zoom={18} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
