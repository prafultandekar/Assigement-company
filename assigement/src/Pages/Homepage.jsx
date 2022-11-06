import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFailure, getRequest, getSuccess } from "../Redux/action";
import axios from "axios"
import style from "./style.module.css"


const Homepage = () => {
 
  const dispatch = useDispatch()
 
  const profile = useSelector((oldState)=>oldState.profileData)
  console.log(profile)

  const getData =()=>{
 dispatch(getRequest())
 return axios.get("http://localhost:8080/profile")
 .then((r)=>{
  dispatch(getSuccess(r.data))
  console.log(r.data)
 })
 .catch((e)=>{
  dispatch(getFailure())
 })
    
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div
      
    className={style.main}>
         {profile.map((item)=>(
            
            <div> {item.id}
             
             <div className={style.container}> <img src={item.profile_pic} alt="" />

             <div className={style.days}>
               <div>{item.day} </div>
               <div>{item.time} </div>
             </div>

             <div className={style.heat}>
               <button>{item.heats} </button>
               <button> {item.highlight} </button>
             </div>
            
            
            </div>
            </div>
          
         )) } 
      
    </div>
  );
};

export default Homepage;