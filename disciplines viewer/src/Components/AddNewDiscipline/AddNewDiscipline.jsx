import DisciplineForm from "../DisciplineForm/DisciplineForm"

import "./AddNewDiscipline.css"
const AddNewDiscipline = ({OnNewDiscipline}) => {
  function saveDiscipline(disciplineInfo){
    OnNewDiscipline(disciplineInfo)
  }
  return (
    <div className="new-discipline-container">
        <DisciplineForm onSaveForm={saveDiscipline}/>
    </div>
  )
}

export default AddNewDiscipline