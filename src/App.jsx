import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customers from './customers'
import AppointmentList from './appointmentList'
import NewAppointment from './addAppointment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Manager from './manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
      {/* <AppointmentList/>
      <NewAppointment/> */}
     {/* <Customers/> */}
      {/* <Manager/> */}
      
      
    </>
  )
}

export default App
