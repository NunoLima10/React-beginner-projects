import DisciplineForm from "./DisciplineForm"

import "./AddNewDiscipline.css"
const AddNewDiscipline = () => {
  function saveDiscipline(disciplineInfo){
    console.log(disciplineInfo)
  }
  return (
    <div className="new-discipline-container">
        <DisciplineForm onSaveForm={saveDiscipline}/>
    </div>
  )
}

export default AddNewDiscipline