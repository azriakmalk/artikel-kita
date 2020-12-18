import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { Link } from '../../components'
import "./detail.scss"

const DetailArtikel = () => {
    const history=useHistory();
    const state = useSelector(state=>state)

    if(!state.dartikel){
        return <Redirect to='/'/>
    }else{
        const {author,body,date,image,title} = state.dartikel
        return (
            <div className="detail-artikel-page">
                <img className="img-cover" src={`https://artikelkuaak.herokuapp.com/${image}`} alt="gedung"/>
        <p className="detail-title">{title}</p>
        <p className="detail-author">{author} - {date.substr(0,10)}</p>
                <p className="detail-body">{body}</p>
                <Link title="Kembali ke Home" onClick={()=>history.push("/")}/>
            </div>
        )
    }
}

export default DetailArtikel
