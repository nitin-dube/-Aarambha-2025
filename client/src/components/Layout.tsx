import { motion } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Calendar, Ticket, UserPlus, Info, Phone, MessageCircle, Instagram } from 'lucide-react'
import FloatingParticles from './FloatingParticles'
import RegistrationPopup from './RegistrationPopup'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Passes', href: '/passes', icon: Ticket },
    { name: 'Register', href: '/registration', icon: UserPlus },
    { name: 'Event Info', href: '/event-info', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Passes', href: '/passes' },
    { name: 'Register', href: '/registration' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <div className="min-h-screen relative">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Social Media Bar */}
      <div className="bg-gradient-to-r from-green-500 to-pink-500 text-white py-2 px-4 relative z-50">
        <div className="container-max flex justify-center items-center space-x-6">
          <motion.a
            href="https://chat.whatsapp.com/D200VuSVQ987iJa7XakBMB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Join WhatsApp Group</span>
          </motion.a>
          <div className="w-px h-4 bg-white/30"></div>
          <motion.a
            href="https://www.instagram.com/sbu_dayz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={16} />
            <span className="text-sm font-medium">Follow @sbu_dayz</span>
          </motion.a>
        </div>
      </div>
      
      {/* Header */}
      <motion.header
        className={`sticky-nav transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #ec4899)",
                      "linear-gradient(45deg, #ec4899, #f59e0b)",
                      "linear-gradient(45deg, #f59e0b, #3b82f6)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.span 
                  className="relative text-white font-bold text-xl z-10"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 10px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  A
                </motion.span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Aarambha 2025
                </motion.h1>
                <motion.p 
                  className="text-xs text-gray-500"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  CSE • Sarala Birla University
                </motion.p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-700 hover:text-white'
                      }`}
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.name}
                      </motion.span>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden glass overflow-hidden"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container-max py-6">
            <nav className="grid grid-cols-2 gap-3">
              {navigation.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0, 
                      y: isMenuOpen ? 0 : -10 
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 group ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white border border-white/30'
                          : 'text-gray-700 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <span className="font-medium text-sm">{item.name}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-white rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </div>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <div className="min-h-screen">
          {children}
        </div>
      </main>

      {/* Registration Popup */}
      <RegistrationPopup />

      {/* Mobile Quick Links */}
      <div className="mobile-quick-links glass" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex justify-around items-center">
          {quickLinks.map((link, index) => {
            const isActive = location.pathname === link.href
            const iconMap = {
              'Home': Home,
              'Events': Calendar,
              'Passes': Ticket,
              'Register': UserPlus,
            }
            const Icon = iconMap[link.name as keyof typeof iconMap]
            
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'text-white bg-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <motion.span 
                    className="text-xs font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      className="w-1 h-1 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-max py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* University Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SBU</span>
                </div>
                <h3 className="text-lg font-semibold">Sarala Birla University</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Birla Campus, Ranchi-Purulia Highway<br />
                Ranchi, Jharkhand 835217
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact & Updates</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Phone: +91 XXX XXX XXXX</p>
                    <div className="pt-2">
                      <p className="font-medium text-white">Event Coordinators:</p>
                      <p className="text-xs">Akash Kumar Singh (Overall): 7255003131</p>
                      <p className="text-xs">Chandra Bhushan: 7979937314</p>
                      <p className="text-xs">Kunal Shahdeo: 6204907239</p>
                      <p className="text-xs">Nitin Dubey: 9835736553</p>
                    </div>
                    <div className="pt-3 border-t border-gray-700">
                      <p className="font-medium text-white mb-2">Stay Updated:</p>
                      <div className="space-y-1">
                        <a 
                          href="https://chat.whatsapp.com/D200VuSVQ987iJa7XakBMB" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors"
                        >
                          💬 WhatsApp Group
                        </a>
                        <br />
                        <a 
                          href="https://www.instagram.com/sbu_dayz/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          📸 @sbu_dayz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Event Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Event Details</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p><strong>Date:</strong> 11th October 2025</p>
                <p><strong>Time:</strong> 9:00 AM - 12:30 PM</p>
                <p><strong>Venue:</strong> SBU Auditorium (Tentative)</p>
                <p><strong>Passes:</strong> ₹300 only</p>
                <p><strong>Departments:</strong> CSE Only</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aarambha Mahotsava | Sarala Birla University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
