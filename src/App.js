import React from "react"
import "./App.css"
import Layout from "./components/Layout"
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
      <nav>
        <div>
          <h3>Welcome back {locum.firstName}!</h3>
        </div>
      </nav>
      <Layout>
        <h1>Available locum shifts</h1>
        <LocumShiftList locum={locum} />
      </Layout>
    </div>
  )
}

export default App
