import React from 'react'
import './style.css'
import classnames from 'classnames'

const Button = ({ texto, variante }) => {
    const buttonClassnames = classnames('button', {
        orange: variante === 'orange',
        green: variante === 'green',
    })
    
    return (
        <>
            <button className={buttonClassnames}>
                {texto}
            </button>
        </>
    )
}
export default Button;