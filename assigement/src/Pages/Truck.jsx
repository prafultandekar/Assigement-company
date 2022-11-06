import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getFailure3,  getRequest3, getSuccess3 } from "../Redux/action";
import axios from "axios"
import style from "./style.module.css"


const Truck = () => {
 
  const dispatch = useDispatch()
 
  const profile = useSelector((oldState)=>oldState.Track)
  console.log(profile)

  const getData =()=>{
 dispatch(getRequest3())
 return axios.get("http://localhost:8080/Track")
 .then((r)=>{
  dispatch(getSuccess3(r.data))
  console.log(r.data)
 })
 .catch((e)=>{
  dispatch(getFailure3())
 })
    
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className={style.main}>
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

export default Truck;