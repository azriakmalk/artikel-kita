import Axios from "axios"
import { API } from "../GlobalApi"

export const putArtikel = async (id,data) =>{
    const {image,imageFile,title,body} = data
    const fd = new FormData();  
        
        fd.append('title',title)
        fd.append('body',body)    
        fd.append('imageFile',imageFile)
        fd.append('image[id]',image.id)
        fd.append('image[url]',image.url)
               
    try{
        await Axios.put(`${API}/artikel/${id}`,fd)
        window.location.reload();
    }catch(err){
        console.log(err)
    }
}
