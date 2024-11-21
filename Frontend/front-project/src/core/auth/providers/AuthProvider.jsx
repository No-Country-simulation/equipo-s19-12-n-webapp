import { Context } from "../../context/Context"

export const AuthProvider = ({children})=>{

    return <>
        <Context.Provider value={{}}>{children}</Context.Provider>
    </>

}