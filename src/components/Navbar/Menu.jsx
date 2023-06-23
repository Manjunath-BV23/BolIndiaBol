import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../Images/menu.png'
import logo from "../Images/logo.png"
import './Nav.css';
import "../Home/Home.css"


export const Menu = () => {

    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    return (
        <>
        <div className='container' style={{display:"flex", justifyContent:"space-between"}}>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <img src={menu} alt="menu-icon"  width={"40px"}/>
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                    <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/planet" onClick={handleShowNavbar}>Planet</NavLink>
                    </li>
                    <li>
                    <NavLink to="/people" onClick={handleShowNavbar}>People</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Politics" onClick={handleShowNavbar}>Politics</NavLink>
                    </li> 
                </ul>
            </div>
            <div style={{display:"inline-block",width:"90%", marginLeft:"5%", paddingTop:"10px", zIndex:"-1"}}>
            <marquee>Bol India Bol - News In Shorts - Planet | People | Politics</marquee>
            </div>
        </div>
        </>
    )
}