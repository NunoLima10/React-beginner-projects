import { useState } from "react";
import AddNewDiscipline from "./Components/AddNewDiscipline/AddNewDiscipline";
import DisciplineList from "./Components/DisciplineList/DisciplineList";

function App() {
 
  const [disciplines, setDisciplines] = useState([
    { name: "Engenharia de Software", grade: 20, date: new Date(Date.now())},
  ])

  function OnAddNewDiscipline(disciplineInfo){
      setDisciplines((prev) => [disciplineInfo,...prev])
  }

  return (
    <div className="App">
      <AddNewDiscipline OnNewDiscipline={OnAddNewDiscipline}/>
      <DisciplineList disciplines={disciplines}/>

    </div>
  );
}

export default App;
