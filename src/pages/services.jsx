import { Helmet } from "react-helmet-async";
import NosReferences from "../components/nosReferences";
import Aside from '../components/aside.jsx';
import ActivitiesCard from '../components/activitiesCard.jsx';
import aboutBanner from "../css/css/assets/images/bureau3.jpg";

const Services = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>Services — Équipements, IT, Sécurité, Énergie — Dakar</title>
        <meta
          name="description"
          content="Découvrez nos solutions en informatique, sécurité, domotique et énergie solaire à Dakar. Installation et support professionnel."
        />
        <link rel="canonical" href="https://amtel.sn/about" />
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
