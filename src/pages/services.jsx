import { Helmet } from "react-helmet-async";
import NosReferences from "../components/nosReferences";
import Aside from '../components/aside.jsx';
import ActivitiesCard from '../components/activitiesCard.jsx';
import aboutBanner from "../css/css/assets/images/bureau3.jpg";

const Services = () => {
  return (
    <div className="about-page">
      <Helmet>
          <title>Services - Equipements, IT, securite, energie a Dakar</title>
          <meta name="description" content="Vue d'ensemble des services Amtel Technologies: equipements, integration systemes, securite, domotique et energie." />
          <link rel="canonical" href="https://amtel.sn/services" />
          <meta property="og:title" content="Services Amtel Technologies" />
          <meta property="og:description" content="Solutions IT, securite, domotique et energie offertes par Amtel Technologie a Dakar." />
          <meta property="og:url" content="https://amtel.sn/services" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Amtel Technologie" />
          <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>

      <section
        className="about-banner"
        style={{ backgroundImage: `url(${aboutBanner})`, marginTop:"6px" }}
      >
        <div className="about-banner__overlay">
          <h1 style={{color:"white",backgroundColor:"#259BAF", borderRadius:"11px", padding:"0 35px"}}>Services</h1>
        </div>
      </section>

      <section className="section about-content">
        <div className="about-main">
          <div className="services-intro">
            <h2>Nos services</h2>

            <p>
              Chez <strong>Amtel Technologie</strong>, nous mettons notre expertise multidisciplinaire au service 
              des entreprises, des institutions et des particuliers à la recherche de solutions technologiques 
              fiables, performantes et durables.  
            </p>

            <p>
              De la <strong>fourniture d’équipements</strong> à l’<strong>intégration de systèmes informatiques</strong>, 
              en passant par la <strong>sécurité électronique</strong>, la <strong>domotique</strong> 
              et les <strong>solutions énergétiques</strong>, nous accompagnons nos clients à chaque étape de leur projet 
              avec rigueur, innovation et engagement.
            </p>

            <p>
              Notre approche repose sur une conviction forte&nbsp;: la technologie doit être au service de la performance, 
              du confort et du progrès durable.  
              Chaque service que nous proposons s’inscrit dans cette vision — celle d’un avenir connecté, sécurisé et responsable.
            </p>
          </div>

          <ActivitiesCard />
        </div>

        <Aside />
      </section>
      <NosReferences />
    </div>
  );
};

export default Services;
