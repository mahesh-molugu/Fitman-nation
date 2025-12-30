import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programs from './pages/Programs.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Events from './pages/Events.jsx'
import OnlineClasses from './pages/OnlineClasses.jsx'
import SuccessStories from './pages/SuccessStories.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/online-classes" element={<OnlineClasses />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
