import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteArtikel } from '../../../config/Redux/deleteApi'
import { putArtikel } from '../../../config/Redux/putApi'
import { Button, Gap, Input, Textarea } from '../../atoms'
import "./modal.scss"

const Modal = (props) => {
    const state = useSelector(state=>state)
    const [data,setData] = useState({
        title:'',
        body:'',
        image:'',
        _id:'',
    })
    const {title,body,image,_id} = data
    useEffect(()=>{
        if(!state.dsartikel){
            console.log("WAIT")
        }else{
            setData(state.dsartikel)
        }
    },[state.dsartikel])
    return (
        <div className="card">
            <div className="content">
                <label className="modal-open modal-label" htmlFor="modal-open2"><p onClick={props.tombol}>Lihat</p></label>
                <input type="radio" name="modal" value="open" id="modal-open2" className="modal-radio" />

                <div className="modal modal2">
                    <label className="modal-label overlay"><input type="radio" name="modal" value="close" className="modal-radio"/></label>
                    <div className="content">
                        <div className="top">
                            <h2>Artikel Saya </h2>
                            <div>
                                <img className="img-artikel-item" src={image} alt="gambar"/>
                                <label className="modal-label close-btn"><input type="radio" name="modal" value="close" className="modal-radio"/></label>
                                <Input placeholder="Title" value={title} onChange={(e)=>{setData({...data,title:e.target.value})}}/>
                                <Gap height={20}/>
                                <Textarea value={body} onChange={(e)=>{setData({...data,body:e.target.value})}}/>
                                <div className="btn-wrap">
                                    <div className="btn">
                                    <Button title="Update" onClick={()=>putArtikel(_id,data)}/>
                                    </div>
                                    <div className="btn">
                                    <Button title="Hapus" onClick={()=>deleteArtikel(_id)} style={{backgroundColor:'red'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal
