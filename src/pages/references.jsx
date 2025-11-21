import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Aside from '../components/aside.jsx';
import ContactezNous from "../components/contactezNous.jsx";
import aboutBanner from "../css/css/assets/images/bureau2.webp";
import bis from "../css/css/assets/logos/bis.webp";
import infractive from "../css/css/assets/logos/infractive.webp";
import sonatel from "../css/css/assets/logos/logo-sonatel.svg";
import mtoa from "../css/css/assets/logos/MTOA.webp";
import onu from "../css/css/assets/logos/ONUDC.webp";
import orange from "../css/css/assets/logos/orange-logo.webp";
import seeco from "../css/css/assets/logos/SEECO.webp";
import solarcom from "../css/css/assets/logos/SOLARCOM.webp";
import telenco from "../css/css/assets/logos/telenco.webp";
import batteriesPanneauxSolaires from "../css/css/assets/images/galerie/BATTERIES-PANNEAUX-SOLAIRES.webp";
import batteriesPanneauxSolaires2 from "../css/css/assets/images/galerie/BATTERIES-PANNEAUX-SOLAIRES-2.webp";
import boitierPanneauxSolaires from "../css/css/assets/images/galerie/BOITIER-PANNEAUX SOLAIRES.webp";
import boitierPanneauxSolaires2 from "../css/css/assets/images/galerie/BOITIER-PANNEAUX SOLAIRES-2.webp";
import chambreFibresOptiques from "../css/css/assets/images/galerie/CHAMBRE-FIBRES-OPTIQUES.webp";
import chambreFibresOptiques2 from "../css/css/assets/images/galerie/CHAMBRE-FIBRES-OPTIQUES-2.webp";
import formationAmtel from "../css/css/assets/images/galerie/formation-amtel-technologie-dakar.webp";
import installationPanneauxSolaires from "../css/css/assets/images/galerie/INSTALLATION-PANNEAUX-SOLAIRES.webp";
import installationPanneauxSolaires2 from "../css/css/assets/images/galerie/INSTALLATION-PANNEAUX-SOLAIRES-2.webp";
import installationPanneauxSolaires3 from "../css/css/assets/images/galerie/INSTALLATION-PANNEAUX-SOLAIRES-3.webp";
import installationPanneauxSolaires4 from "../css/css/assets/images/galerie/INSTALLATION-PANNEAUX-SOLAIRES-4.webp";
import installationPanneauxSolaires5 from "../css/css/assets/images/galerie/INSTALLATION-PANNEAUX-SOLAIRES-5.webp";
import installationSolaires from "../css/css/assets/images/galerie/projet-installation-panneaux-solaires-amtel-technologie-dakar.webp";
import magasin from "../css/css/assets/images/galerie/Magasin.webp";
import maintenanceBts from "../css/css/assets/images/galerie/projet-maintenance-antennes-radio-BTS-amtel-technologie-dakar.webp";
import maintenanceBts2 from "../css/css/assets/images/galerie/projet2-maintenance-antennes-radio-BTS-amtel-technologie-dakar.webp";
import maintenanceBts3 from "../css/css/assets/images/galerie/projet3-maintenance-antennes-radio-BTS-amtel-technologie-dakar.webp";
import maintenanceBts4 from "../css/css/assets/images/galerie/projet4-maintenance-antennes-radio-BTS-amtel-technologie-dakar.webp";
import pbo1 from "../css/css/assets/images/galerie/PBO-1.webp";
import pbo2 from "../css/css/assets/images/galerie/PBO-2.webp";
import pboOuvert from "../css/css/assets/images/galerie/PBO-OUVERT.webp";
import poteauxPbo from "../css/css/assets/images/galerie/POTEAUX-PBO.webp";
import projetMtoa from "../css/css/assets/images/galerie/projet-mtoa-amtel-technologie-dakar.webp";
import projetRadioBts from "../css/css/assets/images/galerie/PROJET-RADIO-BTS.webp";
import projetRadioBts2 from "../css/css/assets/images/galerie/PROJET-RADIO-BTS-2.webp";
import pylonesRadioBts from "../css/css/assets/images/galerie/PYLONES-RADIO-BTS.webp";
import radio from "../css/css/assets/images/galerie/RADIO.webp";
import stockEquipements from "../css/css/assets/images/galerie/stock-equipements.webp";
import stockageAntennesBts from "../css/css/assets/images/galerie/STOCKAGE-ANTENNES-BTS.webp";
import stockageAntennesBts2 from "../css/css/assets/images/galerie/STOCKAGE-ANTENNES-BTS-2.webp";
import technicienIntervention from "../css/css/assets/images/galerie/Technicien-dintervention-projet-maintenance-antennes-radio-BTS-amtel-technologie-dakar.webp";
import technicienIntervention2 from "../css/css/assets/images/galerie/Technicien-dintervention2-projet-maintenance-antennes-radio-BTS-amtel-technologie-dakar.webp";

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

const autreItems = [
  { id: 1, image: formationAmtel, title: "Formation Amtel Technologie Dakar" },
  { id: 4, image: projetMtoa, title: "Projet MTOA" },
  { id: 9, image: technicienIntervention, title: "Technicien d'intervention" },
  { id: 10, image: technicienIntervention2, title: "Technicien d'intervention 2" },
];

const energieItems = [
  { id: 2, image: installationSolaires, title: "Installation de panneaux solaires" },
  { id: 12, image: batteriesPanneauxSolaires, title: "Batteries et panneaux solaires" },
  { id: 13, image: batteriesPanneauxSolaires2, title: "Batteries et panneaux solaires 2" },
  { id: 14, image: boitierPanneauxSolaires, title: "Boitier panneaux solaires" },
  { id: 15, image: boitierPanneauxSolaires2, title: "Boitier panneaux solaires 2" },
  { id: 18, image: installationPanneauxSolaires, title: "Installation panneaux solaires - site" },
  { id: 19, image: installationPanneauxSolaires2, title: "Installation panneaux solaires - 2" },
  { id: 20, image: installationPanneauxSolaires3, title: "Installation panneaux solaires - 3" },
  { id: 21, image: installationPanneauxSolaires4, title: "Installation panneaux solaires - 4" },
  { id: 22, image: installationPanneauxSolaires5, title: "Installation panneaux solaires - 5" },

  
]

const telecomsItems = [
  { id: 24, image: pbo1, title: "PBO - vue 1" },
  { id: 25, image: pbo2, title: "PBO - vue 2" },
  { id: 26, image: pboOuvert, title: "PBO ouvert" },
  { id: 27, image: poteauxPbo, title: "Poteaux PBO" },
  { id: 16, image: chambreFibresOptiques, title: "Chambre fibres optiques" },
  { id: 17, image: chambreFibresOptiques2, title: "Chambre fibres optiques 2" },
]

const radioItems = [
  { id: 3, image: maintenanceBts, title: "Maintenance antennes radio BTS" },
  { id: 5, image: maintenanceBts2, title: "Maintenance antennes radio BTS - 2" },
  { id: 6, image: maintenanceBts3, title: "Maintenance antennes radio BTS - 3" },
  { id: 7, image: maintenanceBts4, title: "Maintenance antennes radio BTS - 4" },
  { id: 31, image: radio, title: "Equipements radio" },
  { id: 32, image: stockageAntennesBts, title: "Stockage antennes BTS" },
  { id: 33, image: stockageAntennesBts2, title: "Stockage antennes BTS - 2" },
  { id: 28, image: projetRadioBts, title: "Projet radio BTS" },
  { id: 29, image: projetRadioBts2, title: "Projet radio BTS - 2" },
  { id: 30, image: pylonesRadioBts, title: "Pylones radio BTS" },
  { id: 8, image: stockEquipements, title: "Stock equipements" },
  { id: 23, image: magasin, title: "Magasin Amtel" },
]



const References = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const isModalOpen = activeIndex !== null;

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const showNext = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length
    );
  };
  const showPrevious = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % galleryItems.length
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isModalOpen]);

  return (
    <div className="about-page">
      <Helmet>
          <title>Nos references - Amtel Technologies</title>
          <meta name="description" content="Parcourez nos references et une selection de projets illustres par Amtel Technologies." />
          <link rel="canonical" href="https://amtel.sn/references" />
          <meta property="og:title" content="References clients Amtel Technologies" />
          <meta property="og:description" content="Partenaires et realisations phares d'Amtel Technologie." />
          <meta property="og:url" content="https://amtel.sn/references" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Amtel Technologie" />
          <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
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
                    loading="lazy"
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
              découvrir les activités realisées sur le terrain.
            </p>
            <h2 className="text-primary mb-sm">Radio</h2>
            <div
              className="gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {radioItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => {openModal(index) 
                                setGalleryItems(radioItems)}}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
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
                </button>
              ))}
            </div>
            <h2 className="text-primary mb-sm" style={{marginTop:'25px'}}>Télécoms</h2>
            <div
              className="gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {telecomsItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => {openModal(index)
                                  setGalleryItems(telecomsItems)
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
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
                </button>
              ))}
            </div>
            <h2 className="text-primary mb-sm" style={{marginTop:'25px'}}>Enérgie</h2>
            <div
              className="gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {energieItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => {openModal(index)
                                  setGalleryItems(energieItems)
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
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
                </button>
              ))}
            </div>
            <h2 className="text-primary mb-sm" style={{marginTop:'25px'}}>Formation & Solutions informatiques</h2>
            <div
              className="gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {autreItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => {openModal(index)
                                  setGalleryItems(autreItems)
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
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
                </button>
              ))}
            </div>
          </article>
        </div>

        <Aside />
      </section>
      {isModalOpen && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            zIndex: 9999,
          }}
        >
          <button
            onClick={closeModal}
            aria-label="Fermer la galerie"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "transparent",
              color: "#fff",
              border: "2px solid rgba(255,255,255,0.8)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <button
            onClick={showPrevious}
            aria-label="Image precedente"
            style={{
              position: "absolute",
              left: "1rem",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#fff",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ‹
          </button>
          <img
            src={galleryItems[activeIndex].image}
            alt={galleryItems[activeIndex].title}
            style={{
              maxWidth: "90%",
              maxHeight: "85%",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          />
          <button
            onClick={showNext}
            aria-label="Image suivante"
            style={{
              position: "absolute",
              right: "1rem",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#fff",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}
      <ContactezNous />
    </div>
  );
};

export default References;
