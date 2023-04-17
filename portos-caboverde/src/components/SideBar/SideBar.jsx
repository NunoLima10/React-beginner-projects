import React, { useState } from 'react'

import Arrow from '../icons/Arrow'
import SantoAntao from '../icons/islands/SantoAntao'
import SaoVicente from '../icons/islands/SaoVicente'
import SaoNicolao from '../icons/islands/SaoNicolao'
import Sal from '../icons/islands/Sal'
import Maio from '../icons/islands/Maio'
import Santiago from '../icons/islands/Santiago'
import Fogo from '../icons/islands/Fogo'
import Brava from '../icons/islands/Brava'
import "./SideBar.css"
import BoaVista from '../icons/islands/BoaVista'

const SideBar = ({ onSelect, onClose }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={isOpen ? "side-bar-open" : "side-bar-close"}>
      <Arrow isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <div className='islands-container'>
        <SantoAntao onSelect={() => onSelect(0)} />
        <SaoVicente onSelect={() => onSelect(1)} />
        <SaoNicolao onSelect={() => onSelect(2)} />
        <Sal onSelect={() => onSelect(3)} />
        <BoaVista onSelect={() => onSelect(4)} />
        <Maio onSelect={() => onSelect(5)} />
        <Santiago onSelect={() => onSelect(6)} />
        <Fogo onSelect={() => onSelect(7)} />
        <Brava onSelect={() => onSelect(8)} />
      </div>
    </div>

  )
}

export default SideBar