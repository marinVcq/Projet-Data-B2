import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

// Import assets
import NavbarIcon from '../assets/shared/dna-icon.png'
import BurgerBtn from '../assets/shared/menu-icon.png'

const NavbarMobile = () => {
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const { currentUser, logout } = useContext(AuthContext);

  // Check for bodyScroll avoid unpredictible behavior 
  useEffect(() => {
    navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
    if(!bodyScroll){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'scroll';
    }      
  }, [navbarExpand, bodyScroll]) 
  
  const handleToggle = () => {
    setNavbarExpand(prev => !prev);
  }

    return (
      <>
        <div className={`navbar-container-mobile ${navbarExpand ? "expand" : ""}`}>

          <div className='top-container'>
            <div className='navbar-title-container'>
              <img className='navbar-icon' src={NavbarIcon} alt="navigation icon"></img>
              <div>
                <h2 className='navbar-title'>Fortunato</h2>
                <p className='navbar-subtitle'>Pharmaceuticals</p>                 
              </div>
            </div>
            <img className='navbar-btn' src={BurgerBtn} alt="burger menu button" onClick={handleToggle}></img>
          </div>

          <div className="links-container-mobile">
            <Link to='/' className='navbar-link'>Home</Link>
            <Link to='/about' className='navbar-link'>About Us</Link>
            <Link to='/contact' className='navbar-link'>Contact</Link>
            { currentUser ? <Link to='/dashboard' className='navbar-link'>Dashboard</Link> : ""}
            { currentUser ? <Link to='/ressources' className='navbar-link'>Ressources</Link> : ""}
            { currentUser ? <Link to='/projects' className='navbar-link'>Projects</Link> : ""}
            {currentUser ? <span onClick={logout} className='navbar-link logout-btn'>Logout</span> :  <Link to='/login' className='navbar-link login-btn'>Connexion</Link>}
          </div>
          

        </div>
        <div className={`navbar-bg ${navbarExpand ? "expand" : ""}`}></div> 
      </>

  )
}

// Desktop Navbar
const NavbarDesktop = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return(
    <div className="navbar-container-desktop">

      <div className='left-container'>
        <img className='navbar-icon' src={NavbarIcon} alt="navigation icon"></img>
        <div>
          <h2 className='navbar-title'>Fortunato</h2>
          <p className='navbar-subtitle'>Pharmaceuticals</p>                 
        </div>
      </div>

      <div className="links-container">
        <Link to='/' className='navbar-link'>Home</Link>
        <Link to='/about' className='navbar-link'>About Us</Link>
        <Link to='/contact' className='navbar-link'>Contact</Link>
        { currentUser ? <Link to='/dashboard' className='navbar-link'>Dashboard</Link> : ""}
        {currentUser ? <span onClick={logout} className='navbar-link logout-btn'>Logout</span> :  <Link to='/login' className='navbar-link login-btn'>Connexion</Link>}
      </div>
  </div>
  )
}

const Navbar = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  return (
    <>
      {screenWidth > 1000 ? <NavbarDesktop/> : <NavbarMobile/>  }
    </>
  )
}

export default Navbar