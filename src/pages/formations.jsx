import { Helmet } from "react-helmet-async";
import ActivitiesDetails from "../components/serviceDetails";
import aboutBanner from "../css/css/assets/images/bureau3.jpg";
import formationsVisuel from "../css/css/assets/images/Formations.png";
import Aside from "../components/aside.jsx";

const service = {
  title: "Formations",
  img: formationsVisuel,
  imgDescription: "Illustration du service formations",
  description: `<p>
      Chez <strong>Amtel Technologie</strong>, nous croyons que la performance durable passe par le 
      <strong>développement des compétences</strong>.  
      C’est pourquoi nous proposons des <strong>parcours de formation complets</strong> 
      alliant théorie et pratique autour des métiers de l’<em>informatique</em>, de la 
      <em>sécurité électronique</em>, de l’<em>énergie</em> et de la <em>domotique</em>.
    </p>

    <p>
      Nos programmes sont conçus pour répondre aux besoins spécifiques des 
      <strong>équipes techniques</strong>, des <strong>exploitants</strong> et des 
      <strong>décideurs</strong>.  
      Chaque module associe des ateliers sur site, des démonstrations concrètes, 
      des supports pédagogiques adaptés et une <strong>certification finale</strong> 
      valorisant les acquis.
    </p>

    <p>
      L’objectif de nos formations est clair&nbsp;: 
      <strong>transférer nos savoir-faire</strong> pour accélérer 
      l’autonomie, la productivité et la performance de vos équipes.  
      Nous mettons un point d’honneur à créer une expérience d’apprentissage 
      enrichissante, participative et centrée sur la pratique.
    </p>

    <p>
      Avec Amtel Technologie, la formation devient un levier de croissance, 
      d’innovation et de réussite collective.
    </p>`,
};

const Formations = () => {
  return (
    <div className="about-page">
      <Helmet>
          <title>Formations - Amtel Technologies</title>
          <meta name="description" content="Formations techniques personnalisees dans les domaines IT, securite, energie et domotique par Amtel Technologies." />
          <link rel="canonical" href="https://amtel.sn/services/formations" />
          <meta property="og:title" content="Formations techniques Amtel Technologies" />
          <meta property="og:description" content="Programmes personnalises en IT, securite, energie et domotique." />
          <meta property="og:url" content="https://amtel.sn/services/formations" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Amtel Technologie" />
          <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>
      <section className="about-banner" style={{ backgroundImage: `url(${aboutBanner})`, marginTop: "6px" }}>
        <div className="about-banner__overlay">
          <h1 style={{ color: "white", backgroundColor: "#259BAF", borderRadius: "11px", padding: "0 35px" }}>
            Formations
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

export default Formations;
