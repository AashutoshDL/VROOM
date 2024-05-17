import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import { useNavigate } from 'react-router-dom';
import './Map.css';

const Map = () => {
  const mapRef = useRef(null);
  const pickupMarkerRef = useRef(null);
  const dropoffMarkerRef = useRef(null);
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [27.71229, 85.33048],
        zoom: 10,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);

      pickupMarkerRef.current = L.marker([27.71229, 85.33048], { draggable: true }).addTo(mapRef.current);
      dropoffMarkerRef.current = L.marker([27.71229, 85.33048], { draggable: true, icon: L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }) }).addTo(mapRef.current);

      const pickupSearchControl = L.Control.geocoder({
        defaultMarkGeocode: false,
        placeholder: 'Search Pickup Location',
      }).addTo(mapRef.current);

      const dropoffSearchControl = L.Control.geocoder({
        defaultMarkGeocode: false,
        placeholder: 'Search Drop-Off Location',
      }).addTo(mapRef.current);

      pickupSearchControl.on('markgeocode', function (event) {
        const address = event.geocode.name;
        const { center } = event.geocode;
        setPickupAddress(address);
        pickupMarkerRef.current.setLatLng(center);
        mapRef.current.setView(center, 10);
        alert(`Pickup location selected: ${address}`);
      });

      dropoffSearchControl.on('markgeocode', function (event) {
        const address = event.geocode.name;
        const { center } = event.geocode;
        setDropoffAddress(address);
        dropoffMarkerRef.current.setLatLng(center);
        mapRef.current.setView(center, 10);
        alert(`Drop-off location selected: ${address}`);
      });

      pickupMarkerRef.current.on('dragend', function (event) {
        const { lat, lng } = event.target.getLatLng();
        updateAddressFromLatLng(lat, lng, setPickupAddress);
      });

      dropoffMarkerRef.current.on('dragend', function (event) {
        const { lat, lng } = event.target.getLatLng();
        updateAddressFromLatLng(lat, lng, setDropoffAddress);
      });
    }
  }, []);

  const updateAddressFromLatLng = (lat, lng, setAddress) => {
    L.Control.Geocoder.nominatim().reverse(
      { lat, lng },
      mapRef.current.getZoom(),
      function (results) {
        const result = results[0];
        if (result) {
          setAddress(result.name);
        }
      }
    );
  };

  const redirectToHome = () => {
    if (pickupAddress && dropoffAddress) {
      navigate('/', {
        state: {
          pickupAddress,
          dropoffAddress,
        },
      });
    } else {
      alert('Please select both pickup and dropoff locations.');
    }
  };

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <div>
        <h3>Selected Locations</h3>
        <p>Pickup Address: {pickupAddress || 'Not available'}</p>
        <p>Drop-Off Address: {dropoffAddress || 'Not available'}</p>
        <button onClick={redirectToHome} disabled={!pickupAddress || !dropoffAddress}>Confirm and Go Back</button>
      </div>
    </div>
  );
};  

export default Map;
