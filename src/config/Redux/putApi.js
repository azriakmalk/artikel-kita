import Axios from "axios"
import { API } from "../GlobalApi"

export const putArtikel = async (id,data) =>{
    const {image,title,body,uid,name} = data
    const fd = new FormData();  
        fd.append('image',image,image.name)
        fd.append('title',title)
        fd.append('body',body)
        fd.append('author[uid]',uid)   
        fd.append('author[name]',name) 
    try{
        await Axios.put(`${API}/artikel/${id}`,fd)
        window.location.reload();
    }catch(err){
        console.log(err)
    }
}
