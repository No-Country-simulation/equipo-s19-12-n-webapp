import React, {useState} from "react"
import "./style.css"
import Menu_nav from "../../moleculas/Menu_navegacion/Menu_nav"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping"
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars"

const Navbar = () => {

    const [isMenuVisible, setIsMenuVisible] = useState (false);

    const toggleMenu = () => {
        setIsMenuVisible (!isMenuVisible);
    };

    return (
        <div className="organismo_header">
            <div className="icono_bars">
                <FontAwesomeIcon icon={faBars} className="icono_navbar" onClick={toggleMenu}/>
            </div>
            <div className={`menu_nav_container ${isMenuVisible ? "visible" : "hidden"}`}>
                <Menu_nav />
            </div>
            <div className="icono_cart">
                <FontAwesomeIcon icon={faCartShopping} className="icono_navbar"/>
            </div>
        </div>
    )
}

//     return (
//         <div className="organismo_header">
//             <FontAwesomeIcon icon={faBars} className="icono_navbar menu_icono" onClick={toggleMenu}/>
//             <Menu_nav className={`menu_nav ${isMenuVisible ? "visible" : "hidden"}`} />
//             <FontAwesomeIcon icon={faCartShopping} className="icono_navbar"/>
//         </div>
//     )
// };

export default Navbar;