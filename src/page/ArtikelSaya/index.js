import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import {  ToastContainer } from 'react-toastify'
import {  Button, Gap, SartikelItem } from '../../components'
import ReactLoading from "react-loading";
import './ArtikelSaya.scss'
import { useHistory } from 'react-router-dom';
import { getSartikel } from '../../config/Redux/getApi';
import { Store } from '../../config/Redux/store';

const ArtikelSaya = () => {
    const dataArtikel = useSelector((state)=>state)
    const history = useHistory();
    useEffect(()=>{
        if(!dataArtikel.payload){
            console.log('WAIT')
        }else{
            Store.dispatch(getSartikel({_id:dataArtikel.payload._id,name:dataArtikel.payload.name}))
        }
    },[dataArtikel.payload])
    return (
        <div className="home-page">
            <div className="button-wrapper">
                <Button onClick={()=>history.push('/create-artikel')} title="Create Artikel"/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
            {dataArtikel.sartikel ? dataArtikel.sartikel.map((artikel,i)=>{
                    return <SartikelItem key={i}
                                    _id={artikel._id}
                                    image={artikel.image}
                                    title={artikel.title}
                                    body={artikel.body}
                                    author={artikel.author.name}
                                    uid={artikel.author.uid}
                                    date={artikel.createdAt}/>
                }) : <ReactLoading type='spin' color='grey'/>}
            </div>
            <Gap height={20}/>
            <ToastContainer/>
        </div>
    )
}

export default ArtikelSaya
