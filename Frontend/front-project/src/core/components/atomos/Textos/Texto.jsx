import React from 'react'
import classnames from 'classnames'
import './style.css'

const Texto = ({ level, texto, variante}) => {
    const textosClassnames = classnames('texto', {
        orange: variante === 'orange',
        green: variante === 'green',
        white: variante === 'white',
        tituloFooter: variante === 'tituloFooter',
    })

    return (
        <>
            {level === 'h1' && <h1 className={textosClassnames}>{texto}</h1>}
            {level === 'h2' && <h2 className={textosClassnames}>{texto}</h2>}
            {level === 'h3' && <h3 className={textosClassnames}>{texto}</h3>}
            {level === 'p' && <p className={textosClassnames}>{texto}</p>}
        </>
    )
}
export default Texto;