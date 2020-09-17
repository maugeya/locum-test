import React from "react"
import "./App.css"
import LocumShiftList from "./components/LocumShiftList"

const locum = {
  id: "1234",
  firstName: "John",
  lastName: "Doe",
  staffType: "gp",
  staffTypeId: "1",
}

function App() {
  return (
    <div className="App">
      <h2>List of available locum shifts</h2>
      <LocumShiftList locum={locum} />
    </div>
  )
}

export default App
