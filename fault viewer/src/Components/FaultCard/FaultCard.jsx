import React from 'react'

import "./FautCard.css"
export const FaultCard = ({name, faultNumber}) => {
  return (
    <div className="fault-container">
        <p className='student-name'>{name}</p>
        <p className='fault-number'>{faultNumber}</p>
    </div>
  )
}
