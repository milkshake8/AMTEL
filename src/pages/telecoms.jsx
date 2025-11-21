import { Helmet } from "react-helmet-async";
import ActivitiesDetails from "../components/serviceDetails";
import Aside from "../components/aside.jsx";
import aboutBanner from "../css/css/assets/images/bureau3.webp";
import telecomVisuel from "../css/css/assets/images/guide-fibre-optique-vignette.webp";

const service = {
  title: "Télécoms et Réseaux",
  img: telecomVisuel,
  imgDescription: "Illustration des services telecoms Amtel",
  description: `<p>
      <strong>Amtel Technologie</strong> accompagne ses clients dans la conception,
      le déploiement et la supervision de leurs <strong>infrastructures télécoms</strong>.
      Nous intégrons des solutions de <em>transmission</em>, de <em>fibre optique</em>,
      de <em>réseaux sans fil</em> et de <em>connectivité IP</em> adaptées aux enjeux
      des entreprises publiques et privées.
    </p>

    <p>
      Nos équipes assurent les <strong>etudes de sites</strong>, la cartographie
      des besoins, l'installation sur le terrain et la mise en service des équipements.
      Nous mobilisons des techniciens certifiés pour garantir un <strong>haut niveau
      de disponibilité</strong>, la sécurisation des données et une exploitation
      simplifiée via des outillages de supervision.
    </p>

    <p>
      Nous proposons aussi des services de <strong>maintenance proactive</strong>,
      d'optimisation radio, de gestion d'armoires PBO/OLT ainsi que des opérations
      de migration et d'interconnexion multi-sites. Chaque intervention est documentée
      et suivie avec des indicateurs de performance clairs.
    </p>

    <p>
      Avec Amtel Technologie, vos réseaux télécom deviennent un véritable accélérateur
      de productivité et de transformation numérique.
    </p>`,
};

const Telecoms = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>Telecoms et Reseaux - Amtel Technologies</title>
        <meta
          name="description"
          content="Solutions de reseaux et telecommunications : fibre optique, radio, IP et maintenance deployees par Amtel Technologies."
        />
        <link rel="canonical" href="https://amtel.sn/services/telecoms" />
        <meta property="og:title" content="Services Telecoms Amtel Technologies" />
        <meta
          property="og:description"
          content="Conception, integration et maintenance d'infrastructures telecoms et reseaux professionnels."
        />
        <meta property="og:url" content="https://amtel.sn/services/telecoms" />
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
              padding: "0 35px",
            }}
          >
            Télécoms & Réseaux
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

export default Telecoms;
