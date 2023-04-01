import React from 'react'
import "./DisciplineList.css"
import DisciplineCard from '../DisciplineCard/DisciplineCard'

const DisciplineList = ({ disciplines }) => {
  return (
    <div className='Discipline-list-box'>
      {disciplines.length > 0 ?
        disciplines.map(
          (info) =>
            <DisciplineCard name={info.name} grade={info.grade} date={info.date} />
        )
        :
        <h2 className='warning-no-disciplines'>Não adicionou disciplinas ainda</h2>
      }
    </div>
  )
}

export default DisciplineList