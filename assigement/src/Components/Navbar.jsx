import React from 'react'
import {Link} from "react-router-dom"
import style from "../Pages/style.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Navbar() {
  return (
    <div>
    
   <div className={style.font}>
   <div className={style.div}>
   <span className={style.start} ><i  class="fa-solid fa-star"></i></span></div> 

   <div className={style.div}>
   <span className={style.start} > <i class="fa-light fa-person-biking"></i></span></div> 

   <div className={style.div}>
   <span className={style.start} > <i class="fa-solid fa-bicycle"></i></span></div> 

   <div className={style.div}>
   <span className={style.start} > <i class="fa-regular fa-person-skiing"></i></span></div> 


   <div className={style.div}>
   <span className={style.start} > <i className="fa-solid fa-golf-ball-tee"></i></span></div> 
  
  
  
   
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