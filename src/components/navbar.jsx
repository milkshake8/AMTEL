// components/Navbar.jsx
import { useState, useRef, useEffect  } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className='top'>
        <div><i className="fa-solid fa-house"></i>  Ouvert:  Lundi - Vendredi | 8h:00 - 18h:30</div>
        <div><i className="fa-solid fa-phone"></i>  +221 77 619 89 74 | <i className="fa-solid fa-envelope"></i>  cresus@argent.fiidunya </div>
    </div>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand"><NavLink to="/" >
              AMTEL
            </NavLink></div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`} ref={dropdownRef}>
          <li>
            <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink to="/a-propos" className="nav-link" onClick={() => setMenuOpen(false)}>
              Qui sommes-nous ?
            </NavLink>
          </li>

          <li className="dropdown" >
            <span className="dropdown-toggle " onClick={toggleDropdown}>
              Nos services ▾
            </span>
            <ul className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <li>
                <NavLink to="/services/#fourniture-equipements" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Fourniture d’équipements
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/#solutions-informatiques" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Solutions informatiques
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/#securite-domotique" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Sécurité & domotique
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/#energie-photovoltaique" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Énergie & photovoltaïque
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/references" className="nav-link" onClick={() => setMenuOpen(false)}>
              Nos Références
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
