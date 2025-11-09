import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import camera from "../css/css/assets/images/camera-surveillance1.jpg";
import domotique from "../css/css/assets/images/domotique1.png";
import panneaux from "../css/css/assets/images/panneaux-solaires.jpeg";
import fournitures from "../css/css/assets/images/equipements.png";
import systemes from "../css/css/assets/images/system.png";



const Activites = () => {
  const slides = [
    {
      title: "Fourniture d’Équipements",
      description:
        "Nous mettons à votre disposition une large gamme d’équipements professionnels et techniques pensés pour répondre aux besoins de tous les secteurs d’activité. Chaque produit que nous proposons allie performance, durabilité et innovation, pour vous offrir une expérience à la hauteur de vos ambitions.",
      img: fournitures,
    },
    {
      title: "Solutions Informatiques",
      description:
        "De la conception à la maintenance, nous créons des solutions informatiques sur mesure qui s’adaptent parfaitement à vos besoins et à votre environnement professionnel. Notre équipe vous accompagne à chaque étape pour digitaliser vos processus, automatiser vos tâches et booster votre productivité au quotidien.",
      img: systemes,
    },
    {
      title: "Sécurité",
      description:
        "Nous assurons la vente et l’installation de caméras de surveillance modernes et performantes, adaptées aussi bien aux entreprises qu’aux particuliers. Nos experts interviennent également pour la pose de barbelés électriques afin de renforcer la protection de vos sites sensibles, entrepôts ou résidences.",
      img: camera,
    },
    {
      title: "Domotique",
      description:
        "Protégez et automatisez vos espaces grâce à nos systèmes intelligents de sécurité et de domotique, conçus pour allier fiabilité, simplicité et contrôle à distance. Nos solutions connectées vous permettent de surveiller, gérer et sécuriser vos locaux en temps réel, où que vous soyez.",
      img: domotique,
    },
    {
      title: "Énergie Photovoltaïque",
      description:
        "Passez au solaire et profitez d’une énergie propre, renouvelable et économique. Grâce à nos solutions photovoltaïques, vous réduisez significativement vos factures d’électricité tout en préservant la planète. 🌍 Nos experts vous accompagnent de l’étude de faisabilité à l’installation complète de vos panneaux solaires, en passant par le suivi et la maintenance de votre système.",
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
          <div className="flex-column">
            <div style={{display:"flex", alignItems:"flex-start"}}>
            <div className="flex flex-center">
                <div><FontAwesomeIcon icon={faMedal} size="3x"/></div>
                <div style={{paddingTop:"17px"}}>
                  <p style={{marginBottom: "0px"}}><strong>Une satisfaction garantie!</strong></p>
                  <p>Allez voir <NavLink to="/references" style={{textDecoration:"underline"}}>nos références</NavLink></p>
                </div>
            </div>
            </div>
            <h1 className="text-primary">{slides[current].title}</h1>
            <div className="separateur2" ></div>
            <p className="text-primary">{slides[current].description}</p>
            <div className="separateur2" ></div>
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