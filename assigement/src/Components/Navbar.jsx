import React from 'react'
import {Link} from "react-router-dom"
import style from "../Pages/style.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Navbar() {
  return (
    <div>
    
   <div className={style.font}>
   <i className={style.start} class="fa-solid fa-star"></i>
   <i class="fa-light fa-person-biking"></i>
   <i class="fa-regular fa-person-skiing"></i>
   <i className="fa-solid fa-golf-ball-tee"></i>
   
   </div>
   
   <div className={style.nav}>
    <Link to="/" >BMX</Link>
        <Link to="/mountain" >Mountain</Link>
        <Link to="/road"> Road</Link>
        <Link to="/truck"> Track</Link>
 
  

    </div>
    </div>
  )
}

export default Navbar