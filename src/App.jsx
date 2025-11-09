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
import Footer from './components/footer.jsx';

function App() {


  return (
    <>
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
          <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
