import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconLocation from '../assets/images/icon-location.svg';

const useFetchMap = (lat: number = 34.04915, lng: number = -118.09462) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([lat, lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance.current);

      const customIcon = L.icon({
        iconUrl: iconLocation,
        iconSize: [46, 56],
        iconAnchor: [23, 28],
        popupAnchor: [0, -28],
      });

      markerRef.current = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance.current);
    } else if (mapInstance.current) {
      mapInstance.current.setView([lat, lng], 13);
      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [lat, lng]); 

  return { mapRef };
};

export default useFetchMap;
