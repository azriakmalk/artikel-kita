import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'
import 'react-toastify/dist/ReactToastify.css';
import {PostRegister} from '../../config/Redux/postApi'
import { useDispatch, useSelector } from 'react-redux'
import { actionType } from '../../config/Redux/actionType'
import ReactLoading from "react-loading";


const Register = () => {    
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        confPassword:''
    })
    const loading = useSelector(state=>state.loading)
    const dispatch = useDispatch();
    let history = useHistory();   
    const {name,email,password,confPassword} = data;

    const handleChange = (e)=>{
        let tid = e.target.id
        let value = e.target.value
        setData({...data,[tid]:value})
    }
    const handleSubmit = (e)=>{      
        if(password !== confPassword){
            toast.error("Password Tidak Sama")
        }else if (!name||!email||!password){
            toast.error("Harap isi semua kolom")
        }else{
            dispatch({type:actionType.REGISTER_PROCESS}) 
            dispatch(PostRegister({name,email,password}))     
        }
    }
    
    
    return (
        <div className="register-page">
            <div className="container">
                <p className="title-page">Register</p>
                <Input label="Nama"
                 type="text"
                 id="name"
                 placeholder="Nama"
                 onChange={(e)=>handleChange(e)}
                 />
                <Gap height={10}/>
                <Input label="Email"
                 type="email" 
                 id="email" 
                 placeholder="Email"
                 onChange={(e)=>handleChange(e)}
                 />
                <Gap height={10}/>
                <Input label="Password"
                 type="password" 
                 id="password" 
                 placeholder="Password"
                 onChange={(e)=>handleChange(e)}
                 />
                <Gap height={10}/>
                <Input label="Confirm Password"
                 type="password" 
                 id="confPassword" 
                 placeholder="Confirm Password"
                 onChange={(e)=>handleChange(e)}
                 />
                <Gap height={20}/>
                <div className="register-button"> 
                {loading ? <ReactLoading type='spin' color='grey'/>:<Button title="Register" onClick={e=>{handleSubmit(e)}}/>}                   
                </div>
                <Link onClick={()=>history.push("/login")} title="Kembali ke Login"/>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Register
