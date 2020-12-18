import React, {  useState } from 'react'
import Loading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Button, Gap, Input, Link} from '../../components'
import { actionType } from '../../config/Redux/actionType'
import { PostLogin } from '../../config/Redux/postApi'
import './login.scss'

const Login = () => {
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const {email,password} = data;
    let history = useHistory();
    const dispatch = useDispatch()
    const loading = useSelector(state=>state)
       
    const handleChange = (e)=>{
        let tid = e.target.id
        let value = e.target.value
        setData({...data,[tid]:value})
    }

    const handleSubmit =async (e)=>{   
        if (!email||!password){
            toast.error("Harap isi semua kolom")
        }else{
            dispatch(PostLogin({email,password}))
            dispatch({type:actionType.LOGIN_PROCESS}) 

        }
    }
    return (
        <div className="login-page">
            <div className="container">
                <p className="title-login">LOGIN</p>
                <Input label="Email" 
                 id="email"
                 type="email"
                 placeholder="Email"
                 onChange={e=>handleChange(e)}
                 />
                <Gap height={18}/>
                <Input label="Password"
                 id="password"
                 type="password" 
                 placeholder="Password"
                 onChange={e=>handleChange(e)}
                 />
                <Gap height={20}/>
                <div>
                    {!loading.loading ? <Button onClick={(e)=>{handleSubmit(e);}} title="Login"/> : <Loading type='spin' color='grey'/> }
                </div>
                <Gap height={20}/>
                <Link onClick={()=>history.push("/register")} title="Belum punya akun? Daftar disini"/>
            </div>
            <ToastContainer/>

        </div>
    )
}

export default Login
