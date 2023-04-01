import React, { useState } from 'react'
import "./DisciplineList.css"
import DisciplineCard from '../DisciplineCard/DisciplineCard'
import YearFilter from '../YearFilter/YearFilter'

const DisciplineList = ({ disciplines }) => {
  const [currentYearFilter, setCurrentYearFilter] = useState("2023")

  function FilterByYear(year) {
    setCurrentYearFilter(year)
  }
  let filteredDisciplines = disciplines.filter(
    (disciplines_info) =>
      disciplines_info.date.getFullYear() === Number(currentYearFilter)
  )

  return (
    <div className='discipline-list-box'>
      <YearFilter defaultYear={currentYearFilter} onSelectNewYear={FilterByYear} />
      {filteredDisciplines.length > 0 ?
        filteredDisciplines.map(
          (info) =>
            <DisciplineCard name={info.name} grade={info.grade} date={info.date} />
        )
        :
        <h2 className='warning-no-disciplines'>Sem dados</h2>
      }
    </div>
  )
}

export default DisciplineList