import React from 'react'
import "./DisciplineCard.css"

const DisciplineCard = ({ name, grade, date }) => {
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return (
    <div className="discipline-container">
      <div className="date-container">
        <p className='date-day'>{date.getDay()}</p>
        <p className='date-month'>{monthNames[date.getMonth()]}</p>
        <p className='date-year'>{date.getFullYear()}</p>
      </div>
      <h3 className='discipline-name'>{name}</h3>
      <h3 className='discipline-grade'>{grade}</h3>
    </div>
  )
}

export default DisciplineCard