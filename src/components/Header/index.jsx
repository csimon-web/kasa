import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/main_logo.svg'
import '../../styles/Header.css'

function Header() {
  const location = useLocation()
  const homeClassName =
    location.pathname === '/' || location.pathname.startsWith('/logement/')
      ? 'active'
      : ''
  const aboutClassName = location.pathname === '/a-propos' ? 'active' : ''

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="kasa" className="header__logo__main_logo" />
      </div>
      <nav className="header__nav">
        <Link to="/" className={`header__nav__nav_element ${homeClassName}`}>
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={`header__nav__nav_element ${aboutClassName}`}
        >
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
