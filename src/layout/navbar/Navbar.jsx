import logo from '../../assets/images/logo.webp'
import style from './Navbar.module.css'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false)
    const navigate = useNavigate()

    const openNav = () => {
      setNavExpanded(!navExpanded)
  }
  const closeNav = () => setNavExpanded(false)


  return (
    <header>
      <nav className={style.nav}>
        <Link to={'/'}>
          <img 
            className={style.logo} 
            src={logo} 
            alt={logo} 
          />
        </Link>
        <ul className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}>
          <li>
            <span
              onClick={() => { 
                  // setShowLogin(true), 
                  // setShowSignup(false), 
                  closeNav() 
                }}
            >Login</span>
          </li>
          <li>
            <span
              onClick={() => { 
                // setShowSignup(true), 
                // setShowLogin(false), 
                closeNav() 
              }}
            >SignUp</span>
          </li>
          <li>
            <span
              onClick={() => { 
                closeNav(),
                navigate('/') 
            }}
            >Home</span>
          </li>
          <li>
            <span
              onClick={() => { 
                // setShowSignup(false), 
                // setShowLogin(false),
                // setUser(false),
                // window.sessionStorage.removeItem('userName');, // Clear user name
                // window.sessionStorage.removeItem('userId');, // Clear user ID
                closeNav(),
                navigate('/')
            }}
            >Logout</span>
          </li>
        </ul>
        <div 
            className={navExpanded ? `${style['icon-three']} ${style['active-three']}` : style['icon-three']}
            onClick={openNav}
        >
            <div className={`${style['hamburger']} ${style['hamburger-three']}`}></div>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
