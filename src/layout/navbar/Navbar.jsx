import logo from '../../assets/images/logo.webp'
import style from './Navbar.module.css'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = ({setShowLogin, setShowSignup, user, setId}) => {
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
          {!user && <li>
            <span
              onClick={() => { 
                  setShowLogin(true), 
                  setShowSignup(false), 
                  closeNav() 
                }}
            >Login</span>
          </li>}
          {!user && <li>
            <span
              onClick={() => { 
                setShowSignup(true), 
                setShowLogin(false), 
                closeNav() 
              }}
            >SignUp</span>
          </li>}
          {user && <li>
            <span
              onClick={() => { 
                navigate('/dashboard-page'), 
                closeNav()
            }}
            >Dashboard</span>
          </li>}
          {user && <li>
            <span
              onClick={() => { 
                setShowSignup(false), 
                setShowLogin(false),
                window.sessionStorage.removeItem('userName'), // Clear user name
                window.sessionStorage.removeItem('userId'), // Clear user ID
                setId(window.sessionStorage.getItem('userId')),
                closeNav(),
                navigate('/')
            }}
            >Logout</span>
          </li>}
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
