import { Helmet } from "react-helmet-async";
import ActivitiesDetails from "../components/serviceDetails";
import aboutBanner from "../css/css/assets/images/bureau3.jpg";
import fournitures from "../css/css/assets/images/fournitures.png";
import Aside from '../components/aside.jsx';

const service = {
    title: "Equipementier",
    img: fournitures,
    imgDescription: "Image illustrant le service d'équipementier",
    description: `<p>
      En tant qu’<strong>équipementier technologique</strong>, 
      <strong>Amtel Technologie</strong> se spécialise dans la fourniture et l’installation 
      de <strong>matériels de pointe</strong> destinés à un large éventail de secteurs industriels et professionnels. 
      Notre objectif est d’accompagner chaque client dans le choix de solutions fiables, durables et 
      parfaitement adaptées à ses besoins opérationnels.
    </p>

    <p>
      Nous collaborons avec des <strong>fabricants internationaux de renom</strong> afin d’offrir des produits 
      alliant innovation, performance et qualité. Nos équipements couvrent une vaste gamme de domaines&nbsp;: 
      <em>systèmes de sécurité, infrastructures réseau, équipements informatiques, solutions énergétiques, 
      outils de communication et automatisation industrielle</em>.
    </p>

    <p>
      Grâce à une <strong>équipe de professionnels qualifiés</strong> et rigoureux, nous assurons une installation 
      soignée, un accompagnement personnalisé et un <strong>support technique continu</strong>. 
      Notre engagement&nbsp;: garantir à chaque client un déploiement efficace, une maintenance réactive 
      et une satisfaction totale à chaque étape de son projet.
    </p>

    <p>
      Chez Amtel Technologie, nous ne livrons pas seulement du matériel&nbsp;: 
      nous fournissons la <strong>confiance</strong>, la <strong>fiabilité</strong> et 
      l’<strong>excellence technologique</strong> qui permettent à nos partenaires 
      de réussir leurs ambitions dans un monde toujours plus connecté.
    </p>`,};

const Equipementier = () => {
  return (
    <div className="about-page">
        <Helmet>
            <title>Équipementier — Amtel Technologies — Fourniture, IT, Sécurité, Énergie à Dakar</title>
            <meta name="description" content="Amtel Technologies, votre équipementier de confiance à Dakar pour des solutions technologiques complètes." />
            <link rel="canonical" href="https://amtel.sn/equipementier" />
        </Helmet>
        <section className="about-banner" style={{ backgroundImage: `url(${aboutBanner})`, marginTop:"6px" }}>
            <div className="about-banner__overlay">
                <h1 style={{color:"white",backgroundColor:"#259BAF", borderRadius:"11px", padding:"0 35px"}}>Équipementier</h1>
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

export default Equipementier;