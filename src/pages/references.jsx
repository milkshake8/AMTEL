import { Helmet } from "react-helmet-async";
import Aside from '../components/aside.jsx';
import ContactezNous from "../components/contactezNous.jsx";
import aboutBanner from "../css/css/assets/images/bureau2.jpg";
import bis from "../css/css/assets/logos/bis.png";
import infractive from "../css/css/assets/logos/infractive.png";
import sonatel from "../css/css/assets/logos/logo-sonatel.svg";
import mtoa from "../css/css/assets/logos/MTOA.jpg";
import onu from "../css/css/assets/logos/ONUDC.png";
import orange from "../css/css/assets/logos/orange-logo.png";
import seeco from "../css/css/assets/logos/SEECO.png";
import solarcom from "../css/css/assets/logos/SOLARCOM.jpg";
import telenco from "../css/css/assets/logos/telenco.jpg";
import formationAmtel from "../css/css/assets/images/galerie/formation-amtel-technologie-dakar.jpeg";
import installationSolaires from "../css/css/assets/images/galerie/projet-installation-panneaux-solaires-amtel-technologie-dakar.jpeg";
import maintenanceBts from "../css/css/assets/images/galerie/projet-maintenance-antennes-radio-BTS-amtel-technologie-dakar.jpeg";
import projetMtoa from "../css/css/assets/images/galerie/projet-mtoa-amtel-technologie-dakar.jpeg";
import maintenanceBts2 from "../css/css/assets/images/galerie/projet2-maintenance-antennes-radio-BTS-amtel-technologie-dakar.jpeg";
import maintenanceBts3 from "../css/css/assets/images/galerie/projet3-maintenance-antennes-radio-BTS-amtel-technologie-dakar.jpeg";
import maintenanceBts4 from "../css/css/assets/images/galerie/projet4-maintenance-antennes-radio-BTS-amtel-technologie-dakar.jpeg";
import stockEquipements from "../css/css/assets/images/galerie/stock-equipements.jpeg";
import technicienIntervention from "../css/css/assets/images/galerie/Technicien-dintervention-projet-maintenance-antennes-radio-BTS-amtel-technologie-dakar.jpeg";
import technicienIntervention2 from "../css/css/assets/images/galerie/Technicien-dintervention2-projet-maintenance-antennes-radio-BTS-amtel-technologie-dakar.jpeg";

const referenceLogos = [
  { id: 1, logo: bis, name: "Banque Islamique du Senegal" },
  { id: 2, logo: infractive, name: "Infractive" },
  { id: 3, logo: mtoa, name: "MTOA" },
  { id: 4, logo: onu, name: "ONUDC" },
  { id: 5, logo: sonatel, name: "Sonatel" },
  { id: 6, logo: orange, name: "Orange" },
  { id: 7, logo: seeco, name: "SEECO" },
  { id: 8, logo: solarcom, name: "Solarcom" },
  { id: 9, logo: telenco, name: "Telenco" },
];

const galleryItems = [
  { id: 1, image: formationAmtel, title: "Formation Amtel Technologie Dakar" },
  { id: 2, image: installationSolaires, title: "Installation de panneaux solaires" },
  { id: 3, image: maintenanceBts, title: "Maintenance antennes radio BTS" },
  { id: 4, image: projetMtoa, title: "Projet MTOA" },
  { id: 5, image: maintenanceBts2, title: "Maintenance antennes radio BTS - 2" },
  { id: 6, image: maintenanceBts3, title: "Maintenance antennes radio BTS - 3" },
  { id: 7, image: maintenanceBts4, title: "Maintenance antennes radio BTS - 4" },
  { id: 8, image: stockEquipements, title: "Stock equipements" },
  { id: 9, image: technicienIntervention, title: "Technicien d'intervention" },
  { id: 10, image: technicienIntervention2, title: "Technicien d'intervention 2" },
];

const References = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>Nos references - Amtel Technologies</title>
        <meta
          name="description"
          content="Parcourez nos references et une selection de projets illustres par Amtel Technologies."
        />
        <link rel="canonical" href="https://amtel.sn/references" />
      </Helmet>

      <section
        className="about-banner"
        style={{ backgroundImage: `url(${aboutBanner})`, marginTop: "6px" }}
      >
        <div className="about-banner__overlay">
          <h1
            style={{
              color: "white",
              backgroundColor: "#259BAF",
              borderRadius: "11px",
              padding: "0 10px",
            }}
          >
            Nos references
          </h1>
        </div>
      </section>

      <section className="section about-content">
        <div className="about-main">
          <article className="about-block">
            <h2 className="text-primary mb-sm">No references</h2>
            <div className="separateur" style={{ width: "235px" }}></div>
            <p>
              Une selection des organisations qui nous accompagnent et nous font confiance
              sur des missions strategiques et operationnelles.
            </p>
            <div
              className="references-logos-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1.5rem",
                alignItems: "center",
                justifyItems: "center",
                marginTop: "1.5rem",
              }}
            >
              {referenceLogos.map((ref) => (
                <figure key={ref.id} style={{ margin: 0, textAlign: "center" }}>
                  <img
                    src={ref.logo}
                    alt={ref.name}
                    title={ref.name}
                    style={{ maxHeight: "70px", objectFit: "contain" }}
                  />
                  <figcaption style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                    {ref.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>

          <article className="about-block">
            <h2 className="text-primary mb-sm">Gallerie</h2>
            <div className="separateur" style={{ width: "127px" }}></div>
            <p>
              Cliquez sur une vignette pour afficher le visuel en grand format et
              decouvrir les activites realisees sur le terrain.
            </p>
            <div
              className="gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {galleryItems.map((item) => (
                <a
                  key={item.id}
                  href={item.image}
                  className="gallery-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                  />
                  <span
                    style={{
                      padding: "0.75rem",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      borderTop: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </article>
        </div>

        <Aside />
      </section>
      <ContactezNous />
    </div>
  );
};

export default References;
