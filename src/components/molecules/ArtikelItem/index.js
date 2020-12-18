import React from 'react'
import './ArtikelItem.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionType } from '../../../config/Redux/actionType'

const ArtikelItem = ({image,title,body,author,date}) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const dartikel = {
        image,title,body,author,date
    }
    const rbody = body.substr(0,100)
    const rdate = date.substr(0,10)
    return (
        <div className="artikel-item">
            <img className="img-artikel-item" src ={image} alt="gambar"/>
            <div className="content-artikel-item">
                <p className="title" onClick={()=>{dispatch({type:actionType.DETAIL_ARTIKEL,dartikel});history.push("/detail-artikel")}}>{title}</p>
                <p className="author">{author} - {rdate}</p>
                <p className="body">{rbody}</p>
            </div>      
        </div>
    )
}

export default ArtikelItem
