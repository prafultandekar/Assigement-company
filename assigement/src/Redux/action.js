import { GET_FAILURE, GET_FAILURE1, GET_FAILURE2, GET_FAILURE3, GET_REQUEST, GET_REQUEST1, GET_REQUEST2, GET_REQUEST3, GET_SUCCESS, GET_SUCCESS1, GET_SUCCESS2, GET_SUCCESS3 } from "./actionTypes"




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

  //  1st ///

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

  // 2nd ///  ///

  const getRequest2 =()=>{
    return {
        type:GET_REQUEST2
    }
  }

  const getSuccess2 =(payload)=>{
    return {
        type:GET_SUCCESS2,
        payload
    }
  }

  const getFailure2 =()=>{
    return {
        type:GET_FAILURE2
    }
  }


   ///// 3rd ///
   const getRequest3 =()=>{
    return {
        type:GET_REQUEST3
    }
  }

  const getSuccess3 =(payload)=>{
    return {
        type:GET_SUCCESS3,
        payload
    }
  }

  const getFailure3 =()=>{
    return {
        type:GET_FAILURE3
    }
  }

  export {getFailure,getRequest,getSuccess,getFailure1,getRequest1,getSuccess1,getFailure2,getFailure3,getRequest2,getRequest3,getSuccess2,getSuccess3}