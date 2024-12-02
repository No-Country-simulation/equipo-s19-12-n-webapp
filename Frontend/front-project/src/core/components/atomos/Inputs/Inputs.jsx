import './style.css'

const Inputs = ({ type, placeholder }) => {

    return(
        <>
            <input type= {type} placeholder= {placeholder} required />
        </>
    )
}

export default Inputs;