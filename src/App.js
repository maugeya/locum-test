import React from "react"
import "./App.css"
import Layout from "./components/layout/Layout"
import LocumShiftList from "./components/locumShiftList/LocumShiftList"

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
      <nav name="nav">
        <h3>Welcome back {locum.firstName}!</h3>
      </nav>
      <Layout>
        <h1>Available locum shifts</h1>
        <LocumShiftList locum={locum} />
      </Layout>
    </div>
  )
}

export default App
