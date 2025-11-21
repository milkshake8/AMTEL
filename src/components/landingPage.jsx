import { NavLink } from 'react-router-dom';
import heroBackground from '../css/css/assets/images/galerie/projet-installation-panneaux-solaires-amtel-technologie-dakar.webp';

const whatsappLink = 'https://wa.me/221776198974?text=Bonjour%20Amtel%20Technologie%20!';

export default function LandingPage() {
  return (
    <section
      className="landing-hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="landing-hero__content">
        <h1 className="landing-hero__title">
          AMTEL - Réinventons l'énergie, perfectionnons la qualité.
        </h1>
        <p className="landing-hero__subtitle">
          <em>Services de qualité exceptionnelle et innovante!</em>
        </p>
        <div className="landing-hero__actions">
          <NavLink to="/contact" className="btn btn-primary btn-lg hero-btn">
            Demander un devis
          </NavLink>
          <a
            href={whatsappLink}
            className="btn btn-whatsapp btn-lg hero-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
