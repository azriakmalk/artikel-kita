import React from 'react'
import './SartikelItem.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionType } from '../../../config/Redux/actionType'
import { Modal } from '..'
import { Store } from '../../../config/Redux/store'

const SartikelItem = ({_id,image,title,body,author,date,uid}) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const dartikel = {
        image,title,body,author,date
    }
    const dsartikel = {
        _id,image,title,body,author,date,uid

    }
    const rbody = body.substr(0,100)
    const rdate = date.substr(0,10)
    return (
        <div className="artikel-item">
            <img className="img-artikel-item" src ={image.url} alt="gambar"/>
            <div className="content-artikel-item">
                <div className="form">
                    <p className="title" onClick={()=>{dispatch({type:actionType.DETAIL_ARTIKEL,dartikel});history.push("/detail-artikel")}}>{title}</p>
                    <p className="author">{author} - {rdate}</p>
                    <p className="body">{rbody}</p>
                </div>
                <div className="btn-wrapp">
                <Modal tombol={()=>Store.dispatch({type:actionType.SARTIKEL,dsartikel})}/>
                </div>
            </div>      
        </div>
    )
}

export default SartikelItem
