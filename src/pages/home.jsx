import Activites from "../components/activites";
import Apropos from '../components/apropos.jsx';
import Valeurs from '../components/valeurs.jsx';
import ActivitiesCard from '../components/activitiesCard.jsx';
import NosReferences from '../components/nosReferences.jsx';
import ContactezNous from '../components/contactezNous.jsx';
import { Helmet } from "react-helmet-async";


export const Home = () => {
    return (
        <>
        <Helmet>
            <title>AMTEL technologies — Fourniture d'équipements, IT, Sécurité, Énergie à Dakar</title>
            <meta name="description" content="Découvrez nos solutions en informatique, sécurité, domotique et énergie solaire à Dakar. Installation et support professionnel." />
            <link rel="canonical" href="https://amtel.sn/" />

            {/* Optionnel : SEO avancé */}
            <meta property="og:title" content="Amtel Technologies — Solutions technologiques à Dakar" />
            <meta property="og:description" content="Intégrateur à Dakar : équipements, IT, sécurité & solaire." />
            <meta property="og:url" content="https://amtel.sn/" />
      </Helmet>

            <Activites />
            <Apropos />
            <Valeurs />
            <ActivitiesCard />
            <NosReferences />
            <ContactezNous />
        </>
    );
}