import { Helmet } from "react-helmet-async";
import NosReferences from "../components/nosReferences";
import Aside from '../components/aside.jsx';
import aboutBanner from "../css/css/assets/images/bureau.webp";
import ceoPortrait from "../css/css/assets/images/galerie/ceo-amtel.webp";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>A propos - Amtel Technologies</title>
        <meta
          name="description"
          content="Decouvrez la mission, l'approche et l'equipe d'Amtel Technologies, integrateur de solutions IT, securite et energie."
        />
        <link rel="canonical" href="https://amtel.sn/a-propos" />
        <meta property="og:title" content="A propos d'Amtel Technologies" />
        <meta property="og:description" content="Histoire, mission et valeurs d'Amtel Technologie au Senegal." />
        <meta property="og:url" content="https://amtel.sn/a-propos" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Amtel Technologie" />
        <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
      </Helmet>

      <section
        className="about-banner"
        style={{ backgroundImage: `url(${aboutBanner})`, marginTop:"6px" }}
      >
        <div className="about-banner__overlay">
          <h1 style={{color:"white",backgroundColor:"#259BAF", borderRadius:"11px", padding:"0 10px"}}>Qui sommes-nous ?</h1>
        </div>
      </section>

      <section className="section about-content">
        <div className="about-main">
          <article className="about-block">
              <h2 className="text-primary mb-sm">Mots du CEO</h2>
              <div className="separateur" style={{width:'216px'}}></div>
              <img
                src={ceoPortrait}
                alt="CEO d'Amtel Technologie"
                className="ceo-portrait"
                loading="lazy"
              />
              <p>
                Animés par le désir d’apprendre et de grandir, nous avons suivi un parcours académique classique 
                jusqu’à l’obtention de notre licence, avant de poursuivre nos études en école de commerce en France, au niveau Master.<br/>
                Ces années d’apprentissage et d’expériences dans le secteur privé nous ont permis d’acquérir une vision globale du monde de l’entreprise, 
                une rigueur professionnelle et un sens aigu de la qualité du service.
              </p>

              <p>
                Fort de ce bagage, nous avons fait le choix de revenir au pays, convaincus que le Sénégal regorge de talents et d’opportunités.<br/>
                Notre ambition&nbsp;: contribuer, à notre manière, à ce grand projet collectif qu’est 
                <strong> l’émergence du Sénégal</strong>.
              </p>

              <p>
                L’intégration dans le marché local n’a pas été facile. Les défis étaient nombreux, mais notre persévérance, notre passion 
                et notre foi en notre mission nous ont permis de franchir chaque obstacle, d’obtenir nos premiers marchés et de nous faire une place parmi les acteurs du secteur.
              </p>

              <p>
                Aujourd’hui, nous avançons avec la même énergie, portés par une vision claire&nbsp;: 
                <strong> apporter une nouvelle façon de travailler, plus moderne, plus exigeante et plus proche des besoins réels des clients</strong>.<br/>
                Chez <strong>Amtel Technologie</strong>, la satisfaction du client n’est pas une option — c’est 
                <strong> le cœur même de notre métier</strong>.
              </p>

              <p>
                Notre ambition est grande&nbsp;: nous imposer durablement sur le marché sénégalais, rayonner dans la sous-région 
                et devenir, à terme, <strong>l’un des leaders de la transformation technologique en Afrique de l’Ouest</strong>.
              </p>
            </article>

          <article className="about-block">
              <h2 className="text-primary mb-sm">Notre philosophie</h2>
              <div className="separateur" style={{width:'291px'}}></div>
              <p>
                Chez <strong>Amtel Technologie</strong>, nous croyons que la technologie est avant tout un levier d’émancipation et de progrès.<br/>
                Notre vision est celle d’un Sénégal — et plus largement d’une Afrique — où l’innovation n’est plus un luxe, 
                mais un moteur de développement durable, inclusif et accessible à tous.
              </p>

              <p>
                Nous voulons bâtir un écosystème où les entreprises, les institutions et les citoyens s’appuient sur des solutions 
                fiables, intelligentes et adaptées à leurs réalités.<br/>
                Chaque projet que nous réalisons est une pierre de plus à l’édifice d’un avenir connecté, performant et humain.
              </p>

              <p>
                Notre ambition dépasse la simple prestation de services&nbsp;: nous voulons être 
                <strong> des partenaires de confiance</strong>, <strong>des bâtisseurs d’avenir</strong> 
                et <strong>des catalyseurs de changement</strong>.<br/>
                C’est dans cet esprit que nous œuvrons chaque jour — avec rigueur, passion et engagement — 
                pour faire d’<strong>Amtel Technologie</strong> un acteur clé de la transformation numérique et énergétique du continent.
              </p>
            </article>

            <article className="about-block">
              <h2 className="text-primary mb-sm">Nos valeurs</h2>
              <div className="separateur" style={{width:'193px'}}></div>
              <p>
                Chez <strong>Amtel Technologie</strong>, nos actions reposent sur trois piliers fondamentaux&nbsp;: 
                <strong> le respect</strong>, <strong>l’engagement</strong> et <strong>l’intégrité</strong>.<br/>
                Ces valeurs guident chacune de nos décisions et façonnent la manière dont nous collaborons 
                avec nos clients, nos partenaires et nos équipes.
              </p>

              <h3>Respect</h3>
              <p>
                Nous croyons qu’aucun progrès n’est possible sans respect — respect des personnes, des idées, des délais et des engagements pris.<br/>
                Chez nous, chaque client, chaque collaborateur et chaque projet mérite écoute, considération et bienveillance.
              </p>

              <h3>Engagement</h3>
              <p>
                Nous mettons tout notre cœur et notre énergie dans ce que nous faisons.<br/>
                Notre engagement se traduit par une volonté constante d’aller au-delà des attentes, 
                de relever les défis avec détermination et d’offrir des solutions durables, performantes et adaptées aux besoins de nos partenaires.
              </p>

              <h3>Intégrité</h3>
              <p>
                Nous agissons toujours avec honnêteté, transparence et responsabilité.<br/>
                Pour nous, l’intégrité n’est pas une option&nbsp;: c’est une exigence.<br/>
                C’est elle qui fonde la confiance que nos clients nous accordent 
                et qui nous pousse à demeurer fidèles à nos principes, même face aux défis.
              </p>
            </article>

            <article className="about-block">
              <h2 className="text-primary mb-sm">FAQ</h2>
              <div className="separateur" style={{ width: "86px" }}></div>
              <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <p style={{ fontWeight: 600 }}>Q1 : Quels services propose AMTEL ?</p>
                  <p>
                    AMTEL fournit des solutions informatiques, domotiques, de securite electronique et d'energie solaire,
                    adaptees aux besoins des particuliers comme des entreprises.
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Q2 : Intervenez-vous dans tout le Senegal ?</p>
                  <p>
                    Oui. Basee a Dakar, AMTEL intervient partout au Senegal et peut accompagner des projets dans la sous-region.
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Q3 : Proposez-vous un diagnostic ou un devis gratuit ?</p>
                  <p>
                    Oui, chaque projet commence par un diagnostic detaille et un devis gratuit.
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Q4 : Que se passe-t-il en cas de panne ou probleme technique ?</p>
                  <p>
                    Nos equipes assurent un support rapide et peuvent intervenir sur site pour resoudre vos problemes dans les
                    meilleurs delais.
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Q5 : Installez-vous des systemes de securite pour les entreprises ?</p>
                  <p>
                    Oui. Nous installons des solutions de videosurveillance, controle d'acces, alarmes, systemes de gestion et
                    dispositifs anti-intrusion.
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Q6 : Offrez-vous une garantie sur vos installations ?</p>
                  <p>
                    Oui. Tous nos equipements et installations beneficient d'une garantie constructeur plus une garantie
                    d'installation AMTEL.
                  </p>
                </div>
              </div>
            </article>

            <article className="about-block">
              <h2 className="text-primary mb-sm">Recrutement</h2>
              <div className="separateur" style={{width:'193px'}}></div>
              <p>
                Vous êtes <strong>jeune motive et dynamique?</strong><br />
                Vous êtes prêt à <strong> faire valoir votre talent?</strong><br />
                Rejoignez notre équipe grandissante et <strong> faites évoluer votre carrière!</strong><br />
                Envoyez-nous votre CV et lettre de motivation  <NavLink to="/recrutement"> ici.</NavLink>
              </p>
            </article>
        </div>

        <Aside />
      </section>
      <NosReferences />
    </div>
  );
};

export default AboutUs;
