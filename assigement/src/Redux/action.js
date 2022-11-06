import { GET_FAILURE, GET_FAILURE1, GET_REQUEST, GET_REQUEST1, GET_SUCCESS, GET_SUCCESS1 } from "./actionTypes"




const getRequest =()=>{
    return {
        type:GET_REQUEST
    }
  }

  const getSuccess =(payload)=>{
    return {
        type:GET_SUCCESS,
        payload
    }
  }

  const getFailure =()=>{
    return {
        type:GET_FAILURE
    }
  }


  const getRequest1 =()=>{
    return {
        type:GET_REQUEST1
    }
  }

  const getSuccess1 =(payload)=>{
    return {
        type:GET_SUCCESS1,
        payload
    }
  }

  const getFailure1 =()=>{
    return {
        type:GET_FAILURE1
    }
  }

  export {getFailure,getRequest,getSuccess,getFailure1,getRequest1,getSuccess1}