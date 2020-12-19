import Axios from 'axios'
import { toast } from 'react-toastify';
import { API } from '../GlobalApi';
import {actionType} from './actionType';

export const PostRegister = ({name,email,password})=>async (dispatch)=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({name,email,password})
    try{
        await Axios.post(`${API}/auth/user/register`,body,config);
        toast.success(`Selamat! ${name} berhasil register`)
        dispatch({type:actionType.LOGIN_SUCCESS,payload:[]})
    }catch(err){
        const errors = err.response.data.errors
          if(errors){
              errors.forEach(error=>toast.error(error.msg))
          }
          dispatch({type:actionType.REGISTER_FAIL})
    }
}

export const PostLogin = ({email,password})=>async (dispatch)=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email,password})
    try{
        const res = await Axios.post(`${API}/auth/user/login`,body,config);
        dispatch({type:actionType.LOGIN_SUCCESS,payload:res.data})        
        window.location='/'
    }catch(err){
        const errors = err.response.data.errors
          if(errors){
              errors.forEach(error=>toast.error(error.msg))
          }
          dispatch({type:actionType.LOGIN_FAIL})
    }
}

export const PostArtikel = ({title,body,image,author})=> async (dispatch)=>{

    const fd = new FormData();  
        fd.append('image',image)
        fd.append('title',title)
        fd.append('body',body)
        fd.append('author[uid]',author.uid)
        fd.append('author[name]',author.name)  
        
        Axios.post(`${API}/artikel`,fd)
        .then(res=>{
            toast.success("Artikel berhasil ditambahkan!")        
            setTimeout(()=>{
                window.location = '/'
            },1000)
            dispatch({type:actionType.CREATE_ARTIKEL_SUCCESS})
        })
        .catch(err=>{
            console.log("ERROR : ",err)
        })
    try{                
        await Axios.post(`${API}/artikel`,fd)
        toast.success("Artikel berhasil ditambahkan!")        
        setTimeout(()=>{
            window.location = '/'
        },1000)
        dispatch({type:actionType.CREATE_ARTIKEL_SUCCESS})
    }catch(err){
        toast.error(err)
        // const errors = err.response.data.errors
        //   if(errors){
        //       errors.forEach(error=>toast.error(error.msg))
        //   }
          dispatch({type:actionType.CREATE_ARTIKEL_FAIL})
    }
}

