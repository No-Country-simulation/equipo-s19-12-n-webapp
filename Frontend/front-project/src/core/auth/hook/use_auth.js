import { useContext } from "react"
import { Context } from "../../context/Context";

export const useAuth = ()=>{
    const auth = useContext(Context);
    // hay que desestructurar y retornarlo cuando este el login
    return auth;
}