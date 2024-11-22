import React from 'react'
import './style.css'

const Texto = ({ level, texto}) => {
    return (
        <>
            {level === 'h1' && <h1>{texto}</h1>}
            {level === 'h2' && <h2>{texto}</h2>}
            {level === 'h3' && <h3>{texto}</h3>}
            {level === 'p' && <p>{texto}</p>}
        </>
    )
}
export default Texto;