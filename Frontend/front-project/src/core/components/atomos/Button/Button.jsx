import React from 'react'
import './style.css'
import classnames from 'classnames'
import Icon from '../Icon/Icon'


const Button = ({ texto, variante, icon }) => {
    const buttonClassnames = classnames('button', {
        orange: variante === 'orange',
        green: variante === 'green',
        white: variante === 'white',
        conIcono: Icon,
    })
    
    return (
        <>
            <button className={buttonClassnames}>
                {icon && <Icon type={icon} className="button-icon" />}
                {texto}
            </button>
        </>
    )
}
export default Button;