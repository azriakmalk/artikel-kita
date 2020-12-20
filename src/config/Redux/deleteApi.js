import Axios from "axios"
import { API } from "../GlobalApi"

export const deleteArtikel = async (id) =>{
        try{
            const res = await Axios.get(`${API}/artikel/${id}`)
            const imgid = res.data.data.image.id
            Axios.delete(`${API}/artikel/${id}`,{
                headers:{
                    imgid:imgid
                }
            })
            .then(res=>{
                window.location.reload();
            })
            .catch((err)=>{
            console.log("ERROR DELETE : ",err)
            })
        }catch(err){
            console.log("ERROR GET",err)
        }
}
