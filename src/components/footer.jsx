import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-light" style={{ padding: "3rem 0" }}>
      <div
        className="container grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* === A propos === */}
        <div>
          <h3 className="text-secondary mb-sm">À propos</h3>
          <p style={{ lineHeight: "1.6", opacity: 0.9, color: "white" }}>
            Amtel Technologie SARL est une société de services spécialisée dans
            la fourniture d’équipements, les solutions informatiques, la
            sécurité, la domotique et l’énergie solaire. Nous mettons l’innovation
            et la fiabilité au cœur de chaque projet.
          </p>
        </div>

        {/* === Pourquoi nous choisir === */}
        <div>
          <h3 className="text-secondary mb-sm">Pourquoi nous choisir</h3>
          <ul style={{ lineHeight: "1.8", opacity: 0.9 }}>
            <li>✔ Expertise technique reconnue</li>
            <li>✔ Solutions sur mesure et durables</li>
            <li>✔ Service client réactif et disponible</li>
            <li>✔ Engagement et intégrité à chaque étape</li>
          </ul>
        </div>

        {/* === Nos activités === */}
        <div>
          <h3 className="text-secondary mb-sm">Nos activités</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              <NavLink className="links" to="/services">
                <i className="fa-solid fa-arrow-right"></i> Fourniture d’équipements
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="links">
                <i className="fa-solid fa-arrow-right"></i> Solutions informatiques
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/services">
                <i className="fa-solid fa-arrow-right"></i> Sécurité et Domotique
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="links">
                <i className="fa-solid fa-arrow-right"></i> Energie
              </NavLink>
            </li>
            <li>
            </li>
          </ul>
        </div>

        {/* === Contact === */}
        <div>
          <h3 className="text-secondary mb-sm">Contact</h3>
          <p style={{ lineHeight: "1.8", opacity: 0.9, color: "white" }}>
            📍 Ouest Foire, Dakar, Sénégal  
            <br />
            📞 <a href="tel:+221 77 619 89 74" className="links">+221 77 619 89 74</a>  
            <br />
            ✉️ <a href="mailto:diop79.malick@gmail.com" className="links">contact@amtel-technologie.com</a>
          </p>
          <NavLink to="/contact">
          <button
            className="bg-secondary rounded-md p-md shadow-md mt-md"
            style={{
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.85")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Nous contacter
          </button></NavLink>
        </div>
      </div>

      {/* === Bas de page === */}
      <div
        className="text-center mt-lg"
        style={{
          marginTop: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "1rem",
          fontSize: "0.9rem",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Amtel Technologie SARL — Cyborg Gen — Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
