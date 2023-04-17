import React from 'react'
import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./MapContainer.css"
import SeaPortInfo from "../SeaPortInfo/SeaPortInfo"
import SideBar from '../SideBar/SideBar';
import { getSeaPortByIndex} from '../../data/SeaPortData'


const MapContainer = () => {
  const mapDefaultCenter = [-24.152475, 15.883365]
  const mapDefaultZoom = 7
  const onSelectZoom = 14.5
  // const TOKEN = process.env.REACT_APP_PORTOS_CABO_VERDE
  mapboxgl.accessToken = "pk.eyJ1IjoibnVub2xpbWEiLCJhIjoiY2xnaTBraWxuMGZoMzNjcGdudHJqMjJmdiJ9.k9XSmJL2X8Ll9siU1z0YeQ"
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [selectedSeaPort, setSelectedSeaPort] = useState({
    islandName: null,
    seaPortName: null,
    lat: null,
    log: null,
    numberOfPier: null,
    maxSeaDepth: null,
    numberOfEquipments: null
  })

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: mapDefaultCenter,
      zoom: mapDefaultZoom,
    }
    );
  }
  )



  function onSelectIsland(index) {
    const seaPortData = getSeaPortByIndex(index)
    const markerPoint = [seaPortData.log, seaPortData.lat]
    setSelectedSeaPort(seaPortData)
    // const maker = new mapboxgl.Marker({ color: '#c21c2a', scale: 1 }).setLngLat(markerPoint)
    // maker.addTo(map.current)
    map.current.flyTo(
      {
        center: markerPoint,
        zoom: onSelectZoom
      }
    )
    


  }
  function onCloseSidebar() {
    setSelectedSeaPort(
      {
        islandName: null,
        seaPortName: null,
        lat: null,
        log: null,
        numberOfPier: null,
        maxSeaDepth: null,
        numberOfEquipments: null
      })
  }


  return (
    <div className='map' ref={mapContainer}>
      <header className='map-title'>Portos de Cabo Verde</header>
      <SideBar onSelect={onSelectIsland} onClose={onCloseSidebar} />
      <SeaPortInfo selectedSeaPort={selectedSeaPort} />
    </div>
  )
}

export default MapContainer