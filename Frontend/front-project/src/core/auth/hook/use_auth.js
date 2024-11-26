import { useContext } from "react"
import { Context } from "../../context/Context";

export const useAuth = ()=>{
    const {isLoggedIn} = useContext(Context);
    // hay que desestructurar y retornarlo cuando este el login
    return {isLoggedIn};
}