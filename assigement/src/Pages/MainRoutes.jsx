import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Homepage from './Homepage'
import Mountain from './Mountain'
import Road from './Road'
import Truck from './Truck'
// import style from "./style.module.css"


function MainRoutes() {
  return (
    <div >
    <Navbar/>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/mountain" element={<Mountain />} />
    <Route path="/road" element={<Road />} />
    <Route path="/truck" element={<Truck/>} />
  </Routes>
  </div>
  )
}

export default MainRoutes