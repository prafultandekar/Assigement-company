import { GET_FAILURE, GET_FAILURE1, GET_REQUEST, GET_REQUEST1, GET_SUCCESS, GET_SUCCESS1 } from "./actionTypes";


const initialState = {
    profileData: [],
    mountain:[],
    isLoading: false,
    isError: false,
  };
  
  const reducer = (oldState = initialState,{type,payload}) => {
   
    switch(type){
  
      case GET_REQUEST:
  
      return{
        ...oldState,
        isLoading:true,
        isError:false
      }
  
      case GET_SUCCESS:
  
        return{
          ...oldState,
          isLoading:false,
          isError:false,
          profileData: [...payload]
  
        }
  
        case GET_FAILURE:
  
      return{
        ...oldState,
        isLoading:false,
        isError:true,
        
      }


      ///// 1st ///

      case GET_REQUEST1:
  
        return{
          ...oldState,
          isLoading:true,
          isError:false
        }
    
        case GET_SUCCESS1:
    
          return{
            ...oldState,
            isLoading:false,
            isError:false,
            mountain: [...payload]
    
          }
    
          case GET_FAILURE1:
    
        return{
          ...oldState,
          isLoading:false,
          isError:true,
          
        }

   default: return oldState;
  
    }
  
  
    
  };
  
  export { reducer };