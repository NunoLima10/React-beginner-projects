import React from 'react'
import './YearFilter.css'

const YearFilter = ({ defaultYear, onSelectNewYear }) => {
    function onChangeYear(event){
        onSelectNewYear(event.target.value)
    }

    return (
        <div className='filter-container'>
            <p className='filter-title'>Filtrar por ano</p>
            <select value={defaultYear} className='filter-select' onChange={onChangeYear}>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
            </select>
        </div>
    )
}

export default YearFilter