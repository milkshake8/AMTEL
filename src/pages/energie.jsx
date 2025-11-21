import { Helmet } from "react-helmet-async";
import ActivitiesDetails from "../components/serviceDetails";
import aboutBanner from "../css/css/assets/images/bureau3.webp";
import energieVisuel from "../css/css/assets/images/panneau-solaire2.webp";
import Aside from "../components/aside.jsx";

const service = {
  title: "Énergie",
  img: energieVisuel,
  imgDescription: "Illustration du service energie",
  description: `<p>
      <strong>Amtel Technologie</strong> conçoit et déploie des 
      <strong>solutions énergétiques durables</strong> alliant performance, fiabilité et respect de l’environnement.  
      Nous accompagnons entreprises, institutions et particuliers dans leur transition vers une énergie plus propre 
      et plus efficiente.
    </p>

    <p>
      Nos solutions couvrent l’ensemble des besoins énergétiques&nbsp;: 
      <em>centrales solaires photovoltaïques (PV), onduleurs, systèmes hybrides, stockage par batteries 
      et groupes électrogènes d’appoint</em>.  
      Chaque projet est conçu sur mesure pour offrir une alimentation stable, optimisée et adaptée 
      aux réalités techniques et climatiques du site concerné.
    </p>

    <p>
      Nos <strong>ingénieurs spécialisés</strong> prennent en charge toutes les étapes du processus&nbsp;: 
      études de dimensionnement, installation, mise en service et maintenance préventive.  
      Cette approche intégrée garantit la <strong>sécurité</strong>, la <strong>durabilité</strong> 
      et le <strong>rendement optimal</strong> de chaque installation.
    </p>

    <p>
      Avec Amtel Technologie, vous bénéficiez d’une expertise locale et d’un savoir-faire international 
      pour bâtir des solutions énergétiques fiables, innovantes et tournées vers l’avenir.
    </p>`,
};

const Energie = () => {
  return (
    <div className="about-page">
      <Helmet>
          <title>Energie - Amtel Technologies</title>
          <meta name="description" content="Solutions energetiques solaires et hybrides cle en main signees Amtel Technologies." />
          <link rel="canonical" href="https://amtel.sn/services/energie" />
          <meta property="og:title" content="Solutions energetiques Amtel Technologies" />
          <meta property="og:description" content="Centrales solaires, hybrides et stockage deployes au Senegal." />
          <meta property="og:url" content="https://amtel.sn/services/energie" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Amtel Technologie" />
          <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>
      <section className="about-banner" style={{ backgroundImage: `url(${aboutBanner})`, marginTop: "6px" }}>
        <div className="about-banner__overlay">
          <h1 style={{ color: "white", backgroundColor: "#259BAF", borderRadius: "11px", padding: "0 35px" }}>
            Énergie
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

export default Energie;
