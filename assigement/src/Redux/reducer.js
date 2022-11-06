import { GET_FAILURE, GET_FAILURE1, GET_FAILURE2, GET_FAILURE3, GET_REQUEST, GET_REQUEST1, GET_REQUEST2, GET_REQUEST3, GET_SUCCESS, GET_SUCCESS1, GET_SUCCESS2, GET_SUCCESS3 } from "./actionTypes";


const initialState = {
    profileData: [],
    mountain:[],
    Road:[],
    Track:[],
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

        // 2nd //////
        case GET_REQUEST2:
  
          return{
            ...oldState,
            isLoading:true,
            isError:false
          }
      
          case GET_SUCCESS2:
      
            return{
              ...oldState,
              isLoading:false,
              isError:false,
              Road: [...payload]
      
            }
      
            case GET_FAILURE2:
      
          return{
            ...oldState,
            isLoading:false,
            isError:true,
            
          }

          //// 3rd ///

          case GET_REQUEST3:
  
            return{
              ...oldState,
              isLoading:true,
              isError:false
            }
        
            case GET_SUCCESS3:
        
              return{
                ...oldState,
                isLoading:false,
                isError:false,
                Track: [...payload]
        
              }
        
              case GET_FAILURE3:
        
            return{
              ...oldState,
              isLoading:false,
              isError:true,
              
            }

   default: return oldState;
  
    }
  
  
    
  };
  
  export { reducer };