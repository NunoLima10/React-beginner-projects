import React from 'react'
import './FaultList.css'
import { FaultCard } from '../FaultCard/FaultCard'

const FaultList = ({ faultsList }) => {
  return (
    <div className='fault-list'>
      
      {
      faultsList.length > 0 ?
        faultsList.map((faultInfo) =>
        <FaultCard name={faultInfo.name} faultNumber={faultInfo.faultNumber} />
      )
      :
      <h2 className='warning-no-data'>Sem dados</h2>
    }
    </div>
  )
}

export default FaultList