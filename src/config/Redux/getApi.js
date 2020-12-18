import Axios from "axios"
import { API } from "../GlobalApi"
import { actionType } from "./actionType"
import setAuthToken from "./setAuthToken"

export const loadUser = ()=> async(dispatch)=>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try{
        const res = await Axios.get(`${API}/auth/user`)
        dispatch({
            type: actionType.USER_LOADED,
            payload:res.data,
        })
        
    }catch(err){
        dispatch({type:actionType.AUTH_ERROR})
    }
}

export const getArtikel = (page)=> async(dispatch)=>{    
    try{
        const resArtikel = await Axios.get(`${API}/artikel?page=${page}`)      
        dispatch({
            type: actionType.GET_ARTIKEL,
            artikel:resArtikel.data.data,
            status:false,
            total_data:resArtikel.data.total_Data
        })
    }catch(err){
        console.log("ERROR : ",err)
    }    
}

export const getSartikel =({_id,name})=> async(dispatch)=>{    
    try{
       
       const res = await Axios.get(`${API}/artikelku`,{
                headers:{
                    id:_id,
                    name:name
                }
            })
            dispatch({
                type:actionType.ARTIKEL_SAYA,
                sartikel:res.data.data
            })
    }catch(err){
        console.log("ERROR : ",err)
    }
}