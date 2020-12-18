import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionType } from '../../../config/Redux/actionType';
import { Gap } from '../../atoms';
import './header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state=>state)
    if(!state.payload){
        return(
            <div className="header-wrapper">
                <p className="logo-header" onClick={()=>history.push('/')}>Artikel Kita</p>                        
                <p onClick={()=>{window.location='/login'}}className="menu-header">Login</p>
                </div>
        )
    }else{    
        return (
            <div className="header-wrapper">
                <p className="logo-header" onClick={()=>history.push('/')}>Artikel Kita</p>                        
                <div className="menu-wrapper">
                        <p className="menu-nama">{state.payload.name}</p>
                        <Gap width={10}/>
                        <p className="menu-header" onClick={()=>{history.push('/artikel-saya')}}>Artikel Saya</p>
                        <Gap width={10}/>
                        <p onClick={()=>{dispatch({type:actionType.LOGOUT});window.location.reload(false)}} className="menu-header">LogOut</p>
                        </div>
                </div>
        )
    }
}

export default Header
