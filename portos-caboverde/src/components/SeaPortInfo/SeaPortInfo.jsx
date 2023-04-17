import React from 'react'
import "./SeaPortInfo.css"
import SeaPort from "../icons/Info/SeaPort"
import SeaDepth from "../icons/Info/SeaDepth"
import Equipments from "../icons/Info/Equipments"


const SeaPortInfo = ({selectedSeaPort}) => {
  return (
    <div className={selectedSeaPort.islandName ? "info-container" : "info-container-close" }>
      <h2 className='island-name'>{selectedSeaPort.islandName} - {selectedSeaPort.seaPortName}</h2>
      <div className="itens-container">
        <p className='itens'> <SeaPort/>N° de Cais {selectedSeaPort.numberOfPier}</p>
        <p className='itens'> <SeaDepth/>Profundidade maxima {selectedSeaPort.maxSeaDepth} m</p>
        <p className='itens'> <Equipments/>Equipamentos {selectedSeaPort.numberOfEquipments}</p>
      </div>
    </div>
  )
}

export default SeaPortInfo