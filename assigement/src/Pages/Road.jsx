import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFailure, getFailure1, getFailure2, getRequest, getRequest1, getRequest2, getSuccess, getSuccess1, getSuccess2 } from "../Redux/action";
import axios from "axios"
import style from "./style.module.css"


const Road = () => {
 
  const dispatch = useDispatch()
 
  const profile = useSelector((oldState)=>oldState.Road)
  console.log(profile)

  const getData =()=>{
 dispatch(getRequest2())
 return axios.get("http://localhost:8080/Road")
 .then((r)=>{
  dispatch(getSuccess2(r.data))
  console.log(r.data)
 })
 .catch((e)=>{
  dispatch(getFailure2())
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

        <div className={style.days2}>
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

export default Road;