import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import VisionMission from './pages/VisionMission'
import PrincipalMessage from './pages/PrincipalMessage'
import MandatoryDisclosures from './pages/MandatoryDisclosures'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Faculty from './pages/Faculty'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Downloads from './pages/Downloads'
import Contact from './pages/Contact'
import NotFound from './pages/Home'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visionmission" element={<VisionMission />} />
          <Route path="/principalmessage" element={<PrincipalMessage />} />
          <Route path="/mandatorydisclosures" element={<MandatoryDisclosures />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
