
import { NavLink } from "react-router-dom"
import "../NavBar/NavBarStyle.css"
import { useState, useEffect,useRef } from "react"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflowX = 'hidden'
  }
  const menuRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="header" ref={menuRef}>
        <div>
            <NavLink to="/"><img src='/assets/imgs/Logo.png' alt="FortaFit Logo"/></NavLink>
        </div>
        <div className={`menu-icon`} onClick={toggleMenu}>
            <img src='src/assets/imgs/burgerMenu.png' alt="Menu Icon" />
        </div>
        <nav className={`navLinks ${isMenuOpen && "open"}`} >
          <div className="loginMobile">
            <NavLink className='loginBtn'to='/login' onClick={toggleMenu}>Log in</NavLink>
            <NavLink><img src="public/assets/imgs/UserIcon.png" alt="" /></NavLink>
          </div>
          <ul>
            <li><NavLink to='/' className={'linksMobile'} onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to='/calculator' className={'linksMobile'} onClick={toggleMenu}>Calculator</NavLink></li>
            <li><NavLink to='/routine' className={'linksMobile'} onClick={toggleMenu}>Routine</NavLink></li>
            <li><NavLink to='/schedule' className={'linksMobile'} onClick={toggleMenu}>Schedule</NavLink></li>
            <li><NavLink to='/trainer' className={'linksMobile'} onClick={toggleMenu}>Trainer</NavLink></li>
            <li><NavLink to='/contact' className={'linksMobile'} onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
          <div className="login">
            <NavLink className='loginBtn'to='/login'>Log in</NavLink>
            <NavLink><img src="src/assets/imgs/UserIcon.png" alt="" /></NavLink>
          </div>
        </nav>
    </div>
  )
}

export default NavBar