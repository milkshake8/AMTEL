// components/Navbar.jsx
import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import amtelLogo from '../css/css/assets/logos/logo-amtel.svg'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`

  const dropdownToggleClass = ({ isActive }) =>
    `dropdown-toggle nav-link${isActive ? ' active' : ''}`

  const handleDropdownBlur = (event) => {
    const nextFocus = event.relatedTarget
    if (nextFocus && !event.currentTarget.contains(nextFocus)) {
      setIsDropdownOpen(false)
    }
  }

  const handleDropdownFocus = () => {
    setIsDropdownOpen(true)
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className='top'>
        <div><FontAwesomeIcon icon={faClock} />&thinsp;&thinsp;Ouvert : Lundi - Vendredi | 8h:00 - 18h:30</div>
        <div><FontAwesomeIcon icon={faPhone} /><a style={{color:"white"}} href="tel: +221 77 619 89 74">&thinsp;&thinsp;+221 77 619 89 74 </a> &thinsp;&thinsp;|&thinsp;&thinsp; <FontAwesomeIcon icon={faEnvelope} /> <a style={{color:"white"}} href="mailto:mouhamadoubn@hotmail.com">&thinsp;&thinsp;contact@amtel-technologies.sn</a> </div>
    </div>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollToSection("home")}><NavLink to="/" >
              AMTEL
            </NavLink></div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/a-propos" className={navLinkClass} onClick={closeMenu}>
                Société
              </NavLink>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onFocus={handleDropdownFocus}
              onBlur={handleDropdownBlur}
            >
              <NavLink
                to="/services"
                className={dropdownToggleClass}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                onClick={closeMenu}
              >
                Nos services&thinsp;&thinsp;
                <span className="dropdown-icon" aria-hidden="true" />
              </NavLink>
              <button className="navbar-toggle-mobile" 
              onClick={() => setIsDropdownOpen(prev => !prev)}
              >
                  ☰
                </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                <li>
                  <NavLink
                    to="/services/equipementier"
                    className={navLinkClass}
                    onClick={() => {
                      closeMenu()
                      setIsDropdownOpen(false)
                    }}
                  >
                    Fourniture d'équipements
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/integration-systemes"
                    className={navLinkClass}
                    onClick={() => {
                      closeMenu()
                      setIsDropdownOpen(false)
                    }}
                  >
                    Solutions Informatiques
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/securite-domotique"
                    className={navLinkClass}
                    onClick={() => {
                      closeMenu()
                      setIsDropdownOpen(false)
                    }}
                  >
                    Sécurité & domotique
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/energie"
                    className={navLinkClass}
                    onClick={() => {
                      closeMenu()
                      setIsDropdownOpen(false)
                    }}
                  >
                    Énergie & photovoltaïque
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/formations"
                    className={navLinkClass}
                    onClick={() => {
                      closeMenu()
                      setIsDropdownOpen(false)
                    }}
                  >
                    Formations
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/references" className={navLinkClass} onClick={closeMenu}>
                Nos références
              </NavLink>
            </li>
          </ul>

        <div>
        <NavLink to="/contact">  <button className="btn btn-primary contact"><i className="fa-solid fa-phone"></i> Contactez nous</button></NavLink>
      </div>
      </div>
    </nav>
    </>
  )
}
