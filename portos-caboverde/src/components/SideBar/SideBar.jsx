import React, { useState } from 'react'
import "./SideBar.css"
import Arrow from '../icons/Arrow'
import { SantoAntao } from '../icons/islands/SantoAntao'
import { SaoVicente } from '../icons/islands/SaoVicente'
import SaoNicolao from '../icons/islands/SaoNicolao'
import Sal from '../icons/islands/Sal'
import Maio from '../icons/islands/Maio'
import Santiago from '../icons/islands/Santiago'
import Fogo from '../icons/islands/Fogo'
import Brava from '../icons/islands/Brava'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={isOpen ? "side-bar-open" : "side-bar-close"}>
      <Arrow isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='islands-container'>
      <SantoAntao/>
      <SaoVicente/>
      <SaoNicolao/>
      <Sal/>
      <Maio/>
      <Santiago/>
      <Fogo/>
      <Brava/>

      </div>
    </div>

  )
}

export default SideBar