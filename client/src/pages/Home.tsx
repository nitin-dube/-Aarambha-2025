import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, UserPlus, Star, Clock, MapPin, Phone, Heart, Music, Crown, CheckCircle } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Modal from '../components/Modal'
import CountdownTimer from '../components/CountdownTimer'
import CTACountdown from '../components/CTACountdown'
import { content } from '../config/content'

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isPassModalOpen, setIsPassModalOpen] = useState(false)

  useEffect(() => {
    // Show confetti on first load (respect reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 600)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                top: '50%',
                backgroundColor: ['#dc2626', '#0ea5e9', '#facc15', '#10b981'][Math.floor(Math.random() * 4)]
              }}
              initial={{ opacity: 1, y: 0, rotate: 0 }}
              animate={{ opacity: 0, y: -100, rotate: 360 }}
              transition={{ duration: 0.6, delay: Math.random() * 0.2 }}
            />
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* University Name */}
            <motion.p
              className="text-lg text-white/80 mb-2"
              variants={itemVariants}
            >
              {content.university} Presents
            </motion.p>

            {/* Department Focus */}
            <motion.div
              className="mb-4"
              variants={itemVariants}
            >
              <Badge variant="primary" size="lg" className="glass text-white border-white/30 neon-glow">
                🎓 {content.departmentFocus}
              </Badge>
            </motion.div>

            {/* Event Name */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight text-shadow-lg"
              variants={itemVariants}
            >
              {content.eventName}
            </motion.h1>

            {/* Hindi Title */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-300 hindi-text mb-6 leading-tight text-shadow"
              variants={itemVariants}
            >
              {content.eventNameHindi}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 px-4"
              variants={itemVariants}
            >
              {content.tagline}
            </motion.p>

            {/* Department Notice */}
            <motion.div
              className="mb-8 px-4"
              variants={itemVariants}
            >
              <div className="glass border-white/30 rounded-xl p-4 max-w-2xl mx-auto neon-glow">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-lg font-bold text-white">Exclusively for CSE & CA Students</h3>
                </div>
                <p className="text-white/90 text-sm text-center">
                  This event is specifically designed for Computer Science Engineering (CSE) and Computer Applications (CA) department students only.
                </p>
              </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div className="mb-6" variants={itemVariants}>
              <Badge variant="success" size="lg" className="glass text-white border-white/30 neon-glow">
                {content.eventStatus}
              </Badge>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className="max-w-2xl mx-auto mb-8 px-4"
              variants={itemVariants}
            >
              <CountdownTimer />
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
              variants={itemVariants}
            >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] text-base"
              onClick={() => setIsPassModalOpen(true)}
            >
              Grab Your Slot Now!
            </Button>
              <Link to="/events" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto min-h-[48px] text-base">
                  View Events
                </Button>
              </Link>
              <Link to="/registration" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px] text-base">
                  Register Now
                </Button>
              </Link>
            </motion.div>

            {/* Event Details */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center space-x-2 text-white glass border-white/30 rounded-lg py-3 px-4 neon-glow">
                <Calendar size={18} />
                <span className="font-medium text-sm sm:text-base">{content.eventDetails.date}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white glass border-white/30 rounded-lg py-3 px-4 neon-glow">
                <Clock size={18} />
                <span className="font-medium text-sm sm:text-base">{content.eventDetails.time}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white glass border-white/30 rounded-lg py-3 px-4 sm:col-span-1 col-span-1 neon-glow">
                <MapPin size={18} />
                <span className="font-medium text-sm sm:text-base">SBU Auditorium</span>
              </div>
            </motion.div>

            {/* Event Video */}
            <motion.div
              className="max-w-4xl mx-auto px-4"
              variants={itemVariants}
            >
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl glass border-white/30 neon-glow">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/fa_FdTN7wD4?si=2Vnzedilv6p7oJKS&autoplay=1&mute=1&loop=1&playlist=fa_FdTN7wD4&controls=1&modestbranding=1&rel=0"
                  title="Aarambha Mahotsava 2025 - Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-white/80 mt-4 text-sm px-4">
                Watch the official Aarambha Mahotsava 2025 video
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Date Promotion Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-max relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 text-shadow-lg">
                11th
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-shadow">
                OCTOBER
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 text-shadow">
                2025
              </div>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🎉 GET READY FOR IT! 🎉
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              The most awaited event of the year is coming!<br />
              <span className="font-bold text-yellow-300">Aarambha Mahotsava 2025</span>
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass border-white/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">⏰</div>
                <p className="font-semibold text-sm">9:00 AM</p>
                <p className="text-xs text-white/80">Entrance Opens</p>
              </div>
              <div className="glass border-white/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎭</div>
                <p className="font-semibold text-sm">3.5 Hours</p>
                <p className="text-xs text-white/80">Non-Stop Fun</p>
              </div>
              <div className="glass border-white/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎓</div>
                <p className="font-semibold text-sm">CSE & CA</p>
                <p className="text-xs text-white/80">Students Only</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center space-x-2"
                onClick={() => setIsPassModalOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🎫</span>
                <span>Get Your Pass Now!</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center space-x-2"
                onClick={() => window.open('https://chat.whatsapp.com/D200VuSVQ987iJa7XakBMB', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>Join WhatsApp Group</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-8 p-4 glass border-white/30 rounded-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-center text-white/90">
                <strong>📍 Venue:</strong> Sarala Birla University Auditorium<br />
                <strong>🎯 For:</strong> 1st Year CSE & CA Students Only<br />
                <strong>💰 Pass:</strong> ₹300 Only • <strong>📅 Deadline:</strong> 7th October 2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Experience the magic of Aarambha Mahotsava 2025 with these amazing events
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 rounded-lg p-3 max-w-xl mx-auto">
              <p className="text-blue-800 text-sm font-medium text-center">
                🎓 <strong>CSE & CA Departments Only</strong> - Join your fellow computer science students for an unforgettable experience!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.eventHighlights.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {event.description}
                  </p>
                  <Badge variant="primary">
                    {event.time}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mr. & Ms. Fresher Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.mrMsFresher.headline}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {content.mrMsFresher.subtext}
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Rules & Information
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {content.mrMsFresher.rules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone size={20} className="text-primary-600" />
                          <div>
                            <p className="font-medium">{content.contacts.akash.name}</p>
                            <p className="text-sm text-gray-600">{content.contacts.akash.role}</p>
                            <a
                              href={`tel:${content.contacts.akash.phone}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {content.contacts.akash.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone size={20} className="text-primary-600" />
                          <div>
                            <p className="font-medium">{content.contacts.chandra.name}</p>
                            <p className="text-sm text-gray-600">{content.contacts.chandra.role}</p>
                            <a
                              href={`tel:${content.contacts.chandra.phone}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {content.contacts.chandra.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone size={20} className="text-primary-600" />
                          <div>
                            <p className="font-medium">{content.contacts.kunal.name}</p>
                            <p className="text-sm text-gray-600">{content.contacts.kunal.role}</p>
                            <a
                              href={`tel:${content.contacts.kunal.phone}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {content.contacts.kunal.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone size={20} className="text-primary-600" />
                          <div>
                            <p className="font-medium">{content.contacts.nitin.name}</p>
                            <p className="text-sm text-gray-600">{content.contacts.nitin.role}</p>
                            <a
                              href={`tel:${content.contacts.nitin.phone}`}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {content.contacts.nitin.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                  <div className="mt-6 space-y-3">
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => window.open(content.mrMsFresher.formUrl, '_blank')}
                    >
                      Register Now
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      Handle: {content.mrMsFresher.handle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> {content.mrMsFresher.volunteerNote}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Surprise Events Section */}
      <section className="section-padding bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎪 Surprise Open Floor Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Get ready for spontaneous fun and interactive experiences!
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-purple-800 text-sm font-medium text-center">
                🎵 <strong>11:00 AM - 12:00 PM (1 HOUR)</strong> - Extended open floor events with music, dance battles, and interactive games!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.surpriseEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-4 bg-gradient-to-br from-white to-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{event.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-xs">
                    {event.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Activities Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Activities & Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some amazing moments from our previous events and activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-br from-white to-blue-50 border-blue-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💃</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Open Floor Dance Performance
                  </h3>
                  <p className="text-gray-600">
                    Watch the amazing open floor dance performance from our last event
                  </p>
                </div>
                
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/nmAtBIVXfVE?si=owsoH9YqHCn6MYZY&controls=1&modestbranding=1&rel=0"
                    title="Open Floor Dance Performance - Aarambha Mahotsava"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Experience the energy and excitement of our open floor dance sessions!
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Other Activities Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.otherActivities.slice(1).map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center p-6 bg-gradient-to-br from-white to-indigo-50 border-indigo-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-4">{activity.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {activity.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Registration & Participation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Choose your registration type and join the grand celebration of Aarambha Mahotsava 2025
            </p>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg p-4 max-w-2xl mx-auto mb-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl">🎯</span>
                <h3 className="text-lg font-bold text-green-800">Department Eligibility</h3>
              </div>
              <p className="text-green-700 text-sm text-center">
                <strong>Computer Science Engineering (CSE)</strong> and <strong>Computer Applications (CA)</strong> students are exclusively invited to participate in this grand celebration.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl">⏰</span>
                <h3 className="text-lg font-bold text-yellow-800">Registration Timeline</h3>
              </div>
              <div className="text-yellow-700 text-sm text-center space-y-1">
                <p><strong>1st Year Students:</strong> Register now (closes 7th October 2025)</p>
                <p><strong>2nd, 3rd, 4th Year Students:</strong> New link coming after 7th October 2025</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {content.registrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-4 sm:p-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      {index === 0 && <UserPlus size={24} className="text-primary-600 sm:w-8 sm:h-8" />}
                      {index === 1 && <Heart size={24} className="text-secondary-600 sm:w-8 sm:h-8" />}
                      {index === 2 && <Music size={24} className="text-accent-600 sm:w-8 sm:h-8" />}
                      {index === 3 && <Crown size={24} className="text-green-600 sm:w-8 sm:h-8" />}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4">
                      {type.description}
                    </p>
                  </div>

                  {type.benefits && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {type.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle size={12} className="text-green-600 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                            <span className="text-gray-600 text-xs">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {type.note && (
                    <div className="mb-4 sm:mb-6 p-2 sm:p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 text-xs">
                        <strong>Note:</strong> {type.note}
                      </p>
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full min-h-[44px] text-sm sm:text-base"
                      onClick={() => window.open(type.formUrl, '_blank')}
                    >
                      {type.buttonText}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Students Registration Info */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-white to-yellow-50 border-yellow-200">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎓</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {content.seniorStudentsInfo.title}
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  {content.seniorStudentsInfo.description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-2xl">⏰</span>
                  <h3 className="text-lg font-bold text-yellow-800">Important Notice</h3>
                </div>
                <p className="text-yellow-800 text-center mb-4">
                  <strong>{content.seniorStudentsInfo.note}</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Timeline:</strong> {content.seniorStudentsInfo.timeline}
                    </p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Status:</strong> {content.seniorStudentsInfo.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Eligible Students:</strong> {content.seniorStudentsInfo.departments}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  Stay tuned for the registration link announcement after 7th October 2025!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Important Notices Section */}
      <section className="section-padding bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.importantNotices.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these important notices carefully before proceeding with any registration or payment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {content.importantNotices.notices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full p-6 ${
                  notice.type === 'warning' 
                    ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200' 
                    : notice.type === 'critical'
                    ? 'bg-gradient-to-br from-red-100 to-pink-50 border-red-300'
                    : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl flex-shrink-0">
                      {notice.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-lg font-bold mb-2 ${
                        notice.type === 'warning' ? 'text-red-800' 
                        : notice.type === 'critical' ? 'text-red-900'
                        : 'text-green-800'
                      }`}>
                        {notice.title}
                      </h3>
                      <p className={`text-sm mb-3 ${
                        notice.type === 'warning' ? 'text-red-700' 
                        : notice.type === 'critical' ? 'text-red-800'
                        : 'text-green-700'
                      }`}>
                        {notice.message}
                      </p>
                      {notice.type === 'critical' && notice.formUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => window.open(notice.formUrl, '_blank')}
                          className="w-full"
                        >
                          📋 Download Declaration Form
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Warning Box */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  CRITICAL WARNING
                </h3>
                <p className="text-red-700 text-lg mb-4">
                  <strong>Do not trust any unofficial sources or rumors about pass collection, registration, or event details.</strong>
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    <strong>Official Sources Only:</strong> This website, class CRs, official WhatsApp group, and Instagram handle (@sbu_dayz). 
                    Any other links or information should be verified with the authorized coordinators before taking any action.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Declaration Form Section */}
      <section className="section-padding bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-white to-red-50 border-red-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📋</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Declaration Form - MANDATORY
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  After registration, you must complete this step to enter the event
                </p>
              </div>

              <div className="bg-red-100 border border-red-300 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <h3 className="text-lg font-bold text-red-800">Important Notice</h3>
                </div>
                <p className="text-red-800 text-center mb-4">
                  <strong>Once registration has been done, sign and submit this declaration form to the DSW office. 
                  Only then will you be allowed to enter for the event.</strong>
                </p>
                <div className="text-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.open('https://drive.google.com/file/d/1Zs3vsj1jcW-pOQ6tAWbYZXxXjaQzzp4D/view?usp=sharing', '_blank')}
                    className="mb-4"
                  >
                    📋 Download Declaration Form
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-semibold text-blue-800 mb-2">Register Online</h4>
                  <p className="text-blue-700 text-sm">Complete your registration and payment</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Download Form</h4>
                  <p className="text-yellow-700 text-sm">Download and print the declaration form</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-semibold text-green-800 mb-2">Submit to DSW</h4>
                  <p className="text-green-700 text-sm">Sign and submit to DSW office for approval</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Updates Section */}
      <section className="section-padding bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated & Connected
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community channels for the latest updates, announcements, and event information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-6">{content.socialMedia.whatsapp.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {content.socialMedia.whatsapp.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {content.socialMedia.whatsapp.description}
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open(content.socialMedia.whatsapp.url, '_blank')}
                  >
                    Join WhatsApp Group
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-6">{content.socialMedia.instagram.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {content.socialMedia.instagram.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {content.socialMedia.instagram.description}
                  </p>
                  <p className="text-pink-600 font-semibold mb-6">
                    {content.socialMedia.instagram.handle}
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open(content.socialMedia.instagram.url, '_blank')}
                  >
                    Follow on Instagram
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <span className="text-2xl">📢</span>
                <h3 className="text-lg font-bold text-blue-800">Important Updates</h3>
              </div>
              <p className="text-blue-700 text-sm">
                <strong>Stay connected for:</strong> Registration announcements, event updates, schedule changes, 
                and exclusive behind-the-scenes content from Aarambha Mahotsava 2025!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't Miss Out!
            </h2>
                <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
                  🚀✨ IT'S OFFICIAL ✨🚀 Limited slots only! Register now and grab your slots as they are filling out fast! Don't miss the most exciting welcome of the year!
                </p>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl">🎓</span>
                <h3 className="text-lg font-bold text-white">CSE & CA Students Only</h3>
              </div>
              <p className="text-primary-100 text-sm text-center">
                This exclusive event is designed specifically for Computer Science Engineering and Computer Applications department students.
              </p>
            </div>

            {/* Countdown Timer in CTA */}
            <CTACountdown />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setIsPassModalOpen(true)}
                  >
                    Grab Your Slot Now!
                  </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pass Modal */}
      <Modal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        title="Get Your Pass"
        size="lg"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ₹{content.eventDetails.passesPrice} - Fresher Pass
            </h3>
            <p className="text-gray-600">
              For 1st year CSE & CA students only - Registration & Payment
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Date: {content.eventDetails.registrationDeadline}
            </p>
          </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Registration & Payment:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Online registration and payment available</li>
                  <li>• Only for Semester I (Freshers)</li>
                  <li>• CSE & CA departments only</li>
                  <li>• Senior batches: Separate link coming soon</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-800 mb-2">🚨 Urgent Notice:</h4>
                <p className="text-sm text-red-700">
                  <strong>Register now and grab your slots as they are filling out fast!</strong> 
                  Limited slots available - Book your pass today to secure your spot at Aarambha Mahotsava 2025.
                </p>
              </div>

              <div className="bg-red-100 border border-red-400 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-900 mb-2">📋 MANDATORY: Declaration Form</h4>
                <p className="text-sm text-red-800 mb-3">
                  <strong>After registration, you MUST sign and submit the declaration form to the DSW office.</strong> 
                  This is required for event entry - no exceptions!
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open('https://drive.google.com/file/d/1Zs3vsj1jcW-pOQ6tAWbYZXxXjaQzzp4D/view?usp=sharing', '_blank')}
                  className="w-full"
                >
                  📋 Download Declaration Form
                </Button>
              </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Contact Coordinators:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-gray-900">
                  {content.contacts.akash.name}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  {content.contacts.akash.role}
                </p>
                <a
                  href={`tel:${content.contacts.akash.phone}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {content.contacts.akash.phone}
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-gray-900 text-sm">
                    {content.contacts.chandra.name}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    {content.contacts.chandra.role}
                  </p>
                  <a
                    href={`tel:${content.contacts.chandra.phone}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    {content.contacts.chandra.phone}
                  </a>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-gray-900 text-sm">
                    {content.contacts.kunal.name}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    {content.contacts.kunal.role}
                  </p>
                  <a
                    href={`tel:${content.contacts.kunal.phone}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    {content.contacts.kunal.phone}
                  </a>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 sm:col-span-2">
                  <p className="font-semibold text-gray-900 text-sm">
                    {content.contacts.nitin.name}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    {content.contacts.nitin.role}
                  </p>
                  <a
                    href={`tel:${content.contacts.nitin.phone}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    {content.contacts.nitin.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(content.eventDetails.paymentLink, '_blank')}
                >
                  Grab Your Slot & Pay Now!
                </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => setIsPassModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Home
