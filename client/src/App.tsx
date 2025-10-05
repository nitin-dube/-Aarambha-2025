import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Events from './pages/Events'
import Passes from './pages/Passes'
import Registration from './pages/Registration'
import EventInfo from './pages/EventInfo'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/passes" element={<Passes />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/event-info" element={<EventInfo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  )
}

export default App
