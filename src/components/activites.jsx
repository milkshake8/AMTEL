import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import camera from "../css/css/assets/images/camera-surveillance1.jpg";
import domotique from "../css/css/assets/images/domotique1.png";
import panneaux from "../css/css/assets/images/panneaux-solaires.png";
import fournitures from "../css/css/assets/images/fournitures.png";
import systemes from "../css/css/assets/images/system.png";



const Activites = () => {
  const slides = [
    {
      title: "Fourniture d’Équipements",
      description:
        "Nous proposons une large gamme d’équipements professionnels et techniques adaptés à tous les secteurs, alliant performance, durabilité et innovation.",
      img: fournitures,
    },
    {
      title: "Solutions Informatiques",
      description:
        "De la conception à la maintenance, nous développons des solutions informatiques sur mesure pour optimiser vos processus et booster votre productivité.",
      img: systemes,
    },
    {
      title: "Sécurité",
      description:
        "Vente et installation de caméra de surveillance, vente et installation de barbelés électriques, Mises à disposition d’agents de sécurité (court, moyen et long terme)",
      img: camera,
    },
    {
      title: "Domotique",
      description:
        "Protégez et automatisez vos espaces grâce à nos systèmes de sécurité et de domotique intelligents, fiables et faciles à contrôler à distance.",
      img: domotique,
    },
    {
      title: "Énergie Photovoltaïque",
      description:
        "Passez au solaire et réduisez vos factures tout en protégeant la planète.",
      img: panneaux,
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const delay = 10000; // 7 secondes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, delay);
    return () => clearInterval(interval);
  }, [length]);


  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
      progressBar.classList.remove("animate");
      void progressBar.offsetWidth; // reset animation trick
      progressBar.classList.add("animate");
    }
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section className="section bg-light">
      <div
        className="flex-between degradation"
        style={{ flexWrap: "wrap", alignItems: "center", }}
      >
        {/* --- Partie gauche : texte et CTA --- */}
        <div style={{ flex: "1 1 45%", padding: "1rem" }}>
          <h1 className="text-primary">{slides[current].title}</h1>
          <p className="text-primary">{slides[current].description}</p>

          <div className="flex" style={{ gap: "1rem" }}>
            <NavLink to="/services"><button
              className="btn btn-primary"
            >
              En savoir plus <i className="fa-solid fa-arrow-right"></i>
            </button></NavLink>
            <NavLink to="/contact"><button
              className="btn btn-outline"
              >
              <i className="fa-solid fa-phone"></i>  Nous contacter
            </button></NavLink>
          </div>
        </div>

        {/* --- Partie droite : carousel --- */}
        <div
          style={{
            flex: "1 1 50%",
            minWidth: "300px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "inherit",
              transition: "transform 0.4s ease-in-out",
            }}
          />

          {/* --- Contrôles --- */}
          <button
            onClick={prevSlide}
            className="bg-primary"
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="bg-primary"
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            ›
          </button>

          {/* --- Barre de progression --- */}
          <div className="progress-container">
            <div className="progress-bar animate"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activites;