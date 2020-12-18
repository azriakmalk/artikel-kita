import Axios from "axios"
import { API } from "../GlobalApi"

export const deleteArtikel = async (id) =>{
    try{
        await Axios.delete(`${API}/artikel/${id}`)
        window.location.reload();
    }catch(err){
        console.log(err)
    }
}
