import { Routes, Route, Navigate, useLocation  } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import { Home } from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import Maintenance from './pages/maintenance.jsx';
import Footer from './components/footer.jsx';

function App() {
  const location = useLocation();

  const hideFooterRoutes = ["/a-propos", "/services", "/references"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/a-propos' element={<Maintenance />} />
          <Route path='/services' element={<Maintenance />} />
          <Route path='/references' element={<Maintenance />} />
          <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  )
}

export default App
