import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Gap, Input, Link, Textarea, Upload } from '../../components'
import {PostArtikel} from '../../config/Redux/postApi'
import ReactLoading from 'react-loading'
import './createartikel.scss'
import { Store } from '../../config/Redux/store';
import { actionType } from '../../config/Redux/actionType';


const CreateArtikel = () => {
    const state = useSelector(state=>state)
    const history = useHistory()
    const [data,setData]=useState({
        title:'',
        body:'',
        image:'',
        author:''
    })
    const uploadGambar = (e)=>{
        let gambar = {...data}
        gambar['image'] = e.target.files[0]
        gambar['author']={
            uid:state.payload._id,
            name:state.payload.name
        }
        setData(gambar)   
        let reader = new FileReader();
        reader.onload= function(){
            let output = document.getElementById("output")
            output.src =reader.result;
            }
        reader.readAsDataURL(e.target.files[0])
        
    }

    const onChange =(e)=>{   
        let dataa = {...data}
        dataa[e.target.id] = e.target.value
        setData(dataa)
    }

    const submitArtikel = async ()=>{          
        const {title,body,image} = data
        if(!title ||!body||!image){
            toast.error("Harap isi semua kolom")
        }else{
            Store.dispatch({type:actionType.CREATE_ARTIKEL_PROCESS})
            Store.dispatch(PostArtikel(data))
        }
    }
    
    return (
        <div className="create-artikel-page">
            <p className="title">Create Artikel</p>           
            <Input label="Title" id="title" onChange={(e)=>onChange(e)}/>
            <Upload onChange={(e)=>uploadGambar(e)} accept="image/png, image/jpeg"/>
            <Textarea id='body' onChange={(e)=>onChange(e)}/>
            <Gap height={20}/>
            <div className="button-wrap">
                <Link onClick={()=>history.push('/')} title="Kembali ke menu"/>
                <div className="button-save">
                {state.loading ? <ReactLoading type='spin' color='grey'/>:<Button onClick={()=>{submitArtikel();}} title="Save"/>}
                </div>
            </div>
            <Gap height={20}/>
            <ToastContainer/>
        </div>
    )
}

export default CreateArtikel
