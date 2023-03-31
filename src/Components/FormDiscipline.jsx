import './FormDiscipline.css'
import { useState } from 'react'

const FormDiscipline = () => {
    const [disciplineInput, setDisciplineInput] = useState("")
    const [gradesInput, setGradesInput] = useState("")
    const [dateInput, setDateInput] = useState("")

    function onSubmitForm(){
        // let discipline = {name: disciplineInput, grades:gradesInput, date: dateInput}
    }
    return (
        <form className='form-box' onSubmit={onSubmitForm}>
            <div className="form-box-data">
                <label>Disciplina</label>
                <input type={"text"} value={disciplineInput} onChange={(e) => setDisciplineInput(e.target.value)}></input>
            </div>
            <div className="form-box-data">
                <label>Nota</label>
                <input type={"number"} min={0} max={20} value={gradesInput} onChange={(e) => setGradesInput(e.target.value)}></input>
            </div>
            <div className="form-box-data">
                <label>Data</label>
                <input type={"date"} value={dateInput} onChange={(e) => setDateInput(e.target.value)}></input>
            </div>
            <button className='form-submit-button' type='submit'>Adicionar</button>
        </form>
    )
}

export default FormDiscipline