import  {globalState}  from "./globalState";
import  {actionType}  from "./actionType";

export const Reducer = (state = globalState, action) => {
    const {type,payload,artikel,dartikel,status,sartikel,total_data,dsartikel} = action
  switch (type) {
    
    case actionType.CREATE_ARTIKEL_PROCESS:
    case actionType.REGISTER_PROCESS:
    case actionType.LOGIN_PROCESS:
        return{
            ...state,
            loading:true
        }

    case actionType.CREATE_ARTIKEL_FAIL:
    case actionType.CREATE_ARTIKEL_SUCCESS:
        return {
            ...state,
            loading:false
        }
    case actionType.REGISTER_SUCCESS:       
    case actionType.LOGIN_SUCCESS:
        localStorage.setItem('token',payload.token)
        return{
            ...state,
            ...payload,
            isAuthenticated:true,
            loading:false
        }

    case actionType.REGISTER_FAIL:
    case actionType.AUTH_ERROR:
    case actionType.LOGIN_FAIL:
    case actionType.LOGOUT:
        localStorage.removeItem('token')
        return{
            ...state,
            token:null,
            isAuthenticated:false,
            loading:false
        }
    case actionType.USER_LOADED:
        return{
            ...state,
            payload,
            isAuthenticated:true,
            loading:false
        }

    case actionType.GET_ARTIKEL:
        return{
            ...state,
            artikel,
            status,
            total_data
        }
    
    case actionType.DETAIL_ARTIKEL:
        return{
            ...state,
            dartikel,
        }
    case actionType.ARTIKEL_SAYA:
        return{
            ...state,
            sartikel
        }
    
    case actionType.SARTIKEL:
        return{
            ...state,
            dsartikel
        }

    default:
      return state;
  }
};


