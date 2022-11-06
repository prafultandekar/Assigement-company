import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFailure, getFailure1, getRequest, getRequest1, getSuccess, getSuccess1 } from "../Redux/action";
import axios from "axios"
import style from "./style.module.css"


const Mountain = () => {
 
  const dispatch = useDispatch()
 
  const profile = useSelector((oldState)=>oldState.mountain)
  console.log(profile)

  const getData =()=>{
 dispatch(getRequest1())
 return axios.get("http://localhost:8080/mountain")
 .then((r)=>{
  dispatch(getSuccess1(r.data))
  console.log(r.data)
 })
 .catch((e)=>{
  dispatch(getFailure1())
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

        <div className={style.days1}>
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

export default Mountain;