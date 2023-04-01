import "./DisciplineForm.css"
import { useState } from 'react'

const DisciplineForm = ({ onSaveForm }) => {
    const [disciplineInput, setDisciplineInput] = useState("")
    const [gradesInput, setGradesInput] = useState("")
    const [dateInput, setDateInput] = useState("")

    const [isOpen, setIsOpen] = useState(false)

    function SubmitForm(event) {
        event.preventDefault();
        let discipline = { name: disciplineInput, grade: gradesInput, date: new Date(dateInput) }
        setDisciplineInput("")
        setGradesInput("")
        setDateInput("")
        onSaveForm(discipline)
        setIsOpen(false)
    }
    return (
        isOpen ? 
        <form className='form-box' onSubmit={SubmitForm}>
            <div className="form-inputs">
                <div className="input-container">
                    <label>Disciplina</label>
                    <input type={"text"} value={disciplineInput} onChange={(e) => setDisciplineInput(e.target.value)}></input>
                </div>
                <div className="input-container">
                    <label>Nota</label>
                    <input type={"number"} min={0} max={20} value={gradesInput} onChange={(e) => setGradesInput(e.target.value)}></input>
                </div>
                <div className="input-container">
                    <label>Data</label>
                    <input type={"date"} value={dateInput} onChange={(e) => setDateInput(e.target.value)}></input>
                </div>
            </div>
            <div className="form-actions">
                <button className="form-submit-button" type='submit'>Adicionar</button>
                <button className="form-cancel-button" onClick={()=> setIsOpen(!isOpen)}> Cancelar</button>
            </div>
        </form>
        :
        <div className="close-container">
            <button className="create-button" onClick={()=> setIsOpen(!isOpen)}>Criar disciplina</button>
        </div>
    )
}

export default DisciplineForm