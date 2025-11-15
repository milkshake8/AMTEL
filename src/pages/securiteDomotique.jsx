import { Helmet } from "react-helmet-async";
import ActivitiesDetails from "../components/serviceDetails";
import aboutBanner from "../css/css/assets/images/bureau3.webp";
import securiteVisuel from "../css/css/assets/images/camera-surveillance2.webp";
import Aside from "../components/aside.jsx";

const service = {
  title: "Securite et domotique",
  img: securiteVisuel,
  imgDescription: "Illustration du service securite et domotique",
  description: `<p>
      Chez <strong>Amtel Technologie</strong>, nous unissons les technologies de 
      <strong>sécurité</strong> et de <strong>domotique intelligente</strong> pour créer des environnements 
      sûrs, connectés et confortables. Notre mission&nbsp;: protéger vos biens et vos proches 
      tout en simplifiant votre quotidien grâce à des solutions fiables, performantes et évolutives.
    </p>

    <p>
      <strong>Vidéosurveillance IP, alarmes, contrôle d’accès, interphonie, automatisation de l’éclairage 
      ou de la climatisation</strong>&nbsp;: nous intégrons des équipements de dernière génération, 
      entièrement connectés et supervisés à distance. Chaque système est conçu pour répondre à vos besoins 
      spécifiques et assurer une <em>protection 24h/24 et 7j/7</em>.
    </p>

    <p>
      Nos équipes de techniciens qualifiés assurent l’installation, la configuration et la maintenance 
      de vos dispositifs, garantissant une <strong>fiabilité totale</strong> et une <strong>sécurité durable</strong>.
      Nous privilégions des solutions évolutives et économes en énergie, afin de conjuguer 
      <strong>protection</strong>, <strong>confort</strong> et <strong>efficience énergétique</strong>.
    </p>

    <p>
      En choisissant Amtel Technologie, vous optez pour un partenaire de confiance, engagé à vos côtés 
      pour bâtir des espaces intelligents où la technologie se met véritablement au service de votre sérénité.
    </p>`,
};

const SecuriteDomotique = () => {
  return (
    <div className="about-page">
      <Helmet>
          <title>Securite et domotique - Amtel Technologies</title>
          <meta name="description" content="Solutions de videosurveillance, alarmes, controle d'acces et domotique intelligente deployees par Amtel Technologies." />
          <link rel="canonical" href="https://amtel.sn/services/securite-domotique" />
          <meta property="og:title" content="Solutions securite et domotique Amtel Technologies" />
          <meta property="og:description" content="Videosurveillance, alarmes et controle d'acces deployes au Senegal." />
          <meta property="og:url" content="https://amtel.sn/services/securite-domotique" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Amtel Technologie" />
          <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>
      <section className="about-banner" style={{ backgroundImage: `url(${aboutBanner})`, marginTop: "6px" }}>
        <div className="about-banner__overlay">
          <h1 style={{ color: "white", backgroundColor: "#259BAF", borderRadius: "11px", padding: "0 35px" }}>
            Securite et domotique
          </h1>
        </div>
      </section>
      <section className="section about-content">
        <div className="about-main">
          <ActivitiesDetails service={service} />
        </div>
        <Aside />
      </section>
    </div>
  );
};

export default SecuriteDomotique;
