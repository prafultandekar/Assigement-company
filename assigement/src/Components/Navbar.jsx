import React from 'react'
import {Link} from "react-router-dom"
import style from "../Pages/style.module.css"
function Navbar() {
  return (
    <div className={style.nav}>
  
  <Link to="/" >BMX</Link>
        <Link to="/mountain" >Mountain</Link>
        <Link to="/road"> Road</Link>
        <Link to="/truck"> Track</Link>
 
  

    </div>
  )
}

export default Navbar