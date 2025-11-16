import { Routes, Route, Navigate, useLocation  } from 'react-router-dom';
import ScrollToHashElement from './utilities/ScrollToHashElement.jsx';
import Navbar from './components/navbar.jsx';
import { Home } from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import AboutUs from './pages/aboutUs.jsx';
import Services from './pages/services.jsx';
import Equipementier from './pages/equipementier.jsx';
import IntegrationInformatique from './pages/integrationInformatique.jsx';
import SecuriteDomotique from './pages/securiteDomotique.jsx';
import Energie from './pages/energie.jsx';
import Formations from './pages/formations.jsx';
import References from './pages/references.jsx';
import Recrutement from './pages/recrutement.jsx';
import Footer from './components/footer.jsx';
import { Helmet } from 'react-helmet-async';

function App() {


  return (
    <>
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
      <ScrollToHashElement />
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/a-propos' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/equipementier' element={<Equipementier />} />
          <Route path='/services/integration-systemes' element={<IntegrationInformatique />} />
          <Route path='/services/securite-domotique' element={<SecuriteDomotique />} />
          <Route path='/services/energie' element={<Energie />} />
          <Route path='/services/formations' element={<Formations />} />
          <Route path='/references' element={<References />} />
          <Route path='/recrutement' element={<Recrutement />} />
          <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
