import { Helmet } from "react-helmet-async";
import ActivitiesDetails from "../components/serviceDetails";
import aboutBanner from "../css/css/assets/images/bureau3.webp";
import systemes from "../css/css/assets/images/system2.webp";
import Aside from "../components/aside.jsx";

const service = {
  title: "Integration informatique",
  img: systemes,
  imgDescription: "Illustration du service d'integration informatique",
  description: `<p>
      Les équipes d’<strong>Amtel Technologie</strong> orchestrent l’ensemble des projets 
      d’<strong>intégration informatique</strong>, en conjuguant expertise technique, 
      rigueur et innovation.  
      Nous intervenons dès la phase d’audit pour comprendre vos environnements existants 
      et concevoir des architectures performantes, <strong>résilientes</strong> et 
      <strong>évolutives</strong>.
    </p>

    <p>
      Nos prestations couvrent tout le cycle d’intégration&nbsp;: 
      <em>déploiement des infrastructures réseaux, serveurs, solutions cloud, logiciels métiers 
      et outils collaboratifs</em>.  
      Nous mettons un point d’honneur à proposer des solutions adaptées à la taille, 
      aux contraintes et aux ambitions de chaque organisation.
    </p>

    <p>
      En complément, nos équipes assurent la <strong>cybersécurité</strong>, 
      la <strong>supervision</strong> et le <strong>support technique</strong> 
      afin de garantir une expérience fluide et sécurisée de bout en bout.  
      Cette approche intégrée permet d’unifier vos systèmes, de simplifier la gestion IT 
      et d’améliorer la disponibilité de vos environnements critiques.
    </p>

    <p>
      Avec Amtel Technologie, vous bénéficiez d’un partenaire de confiance 
      capable de transformer vos infrastructures informatiques en leviers de 
      <strong>performance</strong>, de <strong>sécurisation</strong> 
      et de <strong>scalabilité</strong>.
    </p>`,
};

const IntegrationInformatique = () => {
  return (
    <div className="about-page">
      <Helmet>
          <title>Integration informatique - Amtel Technologie</title>
          <meta name="description" content="Conception, integration et maintenance d'infrastructures informatiques sur mesure par Amtel Technologies." />
          <link rel="canonical" href="https://amtel.sn/services/integration-systemes" />
          <meta property="og:title" content="Integration informatique par Amtel Technologies" />
          <meta property="og:description" content="Architecture reseaux, serveurs, cloud et support par Amtel Technologie." />
          <meta property="og:url" content="https://amtel.sn/services/integration-systemes" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Amtel Technologie" />
          <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>
      <section className="about-banner" style={{ backgroundImage: `url(${aboutBanner})`, marginTop: "6px" }}>
        <div className="about-banner__overlay">
          <h1 style={{ color: "white", backgroundColor: "#259BAF", borderRadius: "11px", padding: "0 35px" }}>
            Integration informatique
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

export default IntegrationInformatique;
