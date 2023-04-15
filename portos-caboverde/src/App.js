
// import { useState, useRef, useEffect } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapContainer from './components/MapContainer/MapContainer';
import SideBar from './components/SideBar/SideBar';

// const TOKEN = process.env.REACT_APP_PORTOS_CABO_VERDE
// mapboxgl.accessToken = "pk.eyJ1IjoibnVub2xpbWEiLCJhIjoiY2xnaTBraWxuMGZoMzNjcGdudHJqMjJmdiJ9.k9XSmJL2X8Ll9siU1z0YeQ"
// const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-24.152475);
// const [lat, setLat] = useState(15.883365);
// const [zoom, setZoom] = useState(7);
// useEffect(() => {
//   if (map.current) return; // initialize map only once
//   map.current = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: 'mapbox://styles/nunolima/clgi1gdzj005401qq1rck678j',
//     center: [lng, lat],
//     zoom: zoom,
//     transition: {
//       duration: 300,
//       delay: 0
//     }
//   }
//   );
// });


function App() {
  return (
    <>
      <SideBar />
      <MapContainer />
    </>
  );
}

export default App;
