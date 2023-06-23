import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../Images/menu.png'
// import { ReactComponent as Brand } from '../Images/logo.svg'
import logo from "../Images/logo.png"
import './Nav.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="logodiv">
        <NavLink to="/">
          <img src={logo} alt="Activ Realty" className="logo" width={"60%"}/>
        </NavLink>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar