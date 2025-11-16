import Activites from "../components/activites";
import Apropos from '../components/apropos.jsx';
import Valeurs from '../components/valeurs.jsx';
import ActivitiesCard from '../components/activitiesCard.jsx';
import NosReferences from '../components/nosReferences.jsx';
import ContactezNous from '../components/contactezNous.jsx';
import LandingPage from '../components/landingPage.jsx';
import { Helmet } from "react-helmet-async";


export const Home = () => {
    return (
        <div>
        <Helmet>
            <title>AMTEL Technologie SARL - Fourniture d'equipements, IT, securite, energie a Dakar</title>
            <meta name="description" content="Decouvrez nos solutions en informatique, securite, domotique et energie solaire a Dakar. Installation et support professionnel." />
            <link rel="canonical" href="https://amtel.sn/" />
            <meta property="og:title" content="Amtel Technologies - Solutions technologiques a Dakar" />
            <meta property="og:description" content="Integrateur a Dakar : equipements, IT, securite et solaire." />
            <meta property="og:url" content="https://amtel.sn/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Amtel Technologie" />
            <meta property="og:image" content="https://amtel.sn/logo-amtel.svg" />
        </Helmet>

            <LandingPage />
            <Activites/>
            <Apropos />
            <Valeurs />
            <ActivitiesCard />
            <NosReferences />
            <ContactezNous />
        </div>
    );
}
