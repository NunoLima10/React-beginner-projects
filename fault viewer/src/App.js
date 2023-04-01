import { useState } from "react";
import AddFault from "./Components/AddFault/AddFault";
import FaultList from "./Components/FaultList/FaultList";

function App() {
  const [faults, setFaults] = useState([])

  function AddNewFault(faultInfo){
    setFaults((prev) => [faultInfo, ...prev])
  }
  return (
    <div className="App">
      <AddFault onAddFault={AddNewFault}/>
      <FaultList faultsList={faults}/>
    </div>
  );
}

export default App;
