import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, Crown, AlertTriangle, ExternalLink } from 'lucide-react'
import { content } from '../config/content'

const RegistrationPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMrMsPopup, setShowMrMsPopup] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before
    const popupShown = localStorage.getItem('aarambha-popup-shown')
    const mrMsPopupShown = localStorage.getItem('aarambha-mrms-popup-shown')
    
    if (!popupShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)
      
      return () => clearTimeout(timer)
    } else {
      // Show notification bar instead
      setShowNotification(true)
    }

    if (!mrMsPopupShown && !popupShown) {
      // Show Mr. & Ms. Fresher popup after 8 seconds
      const mrMsTimer = setTimeout(() => {
        setShowMrMsPopup(true)
      }, 8000)
      
      return () => clearTimeout(mrMsTimer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('aarambha-popup-shown', 'true')
    setShowNotification(true)
  }

  const handleMrMsClose = () => {
    setShowMrMsPopup(false)
    localStorage.setItem('aarambha-mrms-popup-shown', 'true')
  }

  const handleNotificationClose = () => {
    setShowNotification(false)
  }

  return (
    <>
      {/* General Registration Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <AlertTriangle size={32} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  🚨 Registration Closing Soon!
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Registration deadline: {content.eventDetails.registrationDeadline}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Don't miss out on Aarambha Mahotsava 2025! Limited slots available for CSE & CA students.
                </p>

                <div className="space-y-3">
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    onClick={() => window.open(content.eventDetails.paymentLink, '_blank')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Clock size={20} />
                    <span>Register Now</span>
                    <ExternalLink size={16} />
                  </motion.button>
                  
                  <button
                    onClick={handleClose}
                    className="w-full text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mr. & Ms. Fresher Popup */}
      <AnimatePresence>
        {showMrMsPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 max-w-md w-full relative shadow-2xl border-2 border-yellow-200"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                onClick={handleMrMsClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Crown size={32} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-orange-800 mb-2">
                  👑 Claim Your Crown!
                </h3>
                <p className="text-orange-700 mb-4">
                  <strong>Mr. & Ms. Fresher Registration Closing Soon!</strong>
                </p>
                <p className="text-sm text-orange-600 mb-6">
                  Showcase your talent and compete for the prestigious Mr. & Ms. Fresher title. 
                  Only for 1st year CSE & CA students!
                </p>

                <div className="space-y-3">
                  <motion.button
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    onClick={() => window.open(content.mrMsFresher.formUrl, '_blank')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Crown size={20} />
                    <span>Register for Mr. & Ms. Fresher</span>
                    <ExternalLink size={16} />
                  </motion.button>
                  
                  <button
                    onClick={handleMrMsClose}
                    className="w-full text-orange-500 hover:text-orange-700 transition-colors text-sm"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Notification Bar */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Desktop Version */}
            <div className="hidden sm:block p-3">
              <div className="container-max flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <AlertTriangle size={20} />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-sm">
                      🚨 Registration Closing Soon! 
                    </p>
                    <p className="text-xs opacity-90">
                      Deadline: {content.eventDetails.registrationDeadline} • Limited slots for CSE & CA students
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1"
                    onClick={() => window.open(content.eventDetails.paymentLink, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Clock size={14} />
                    <span>Register</span>
                  </motion.button>
                  
                  <motion.button
                    className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1"
                    onClick={() => window.open(content.mrMsFresher.formUrl, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Crown size={14} />
                    <span>Mr. & Ms.</span>
                  </motion.button>
                  
                  <button
                    onClick={handleNotificationClose}
                    className="text-white/70 hover:text-white transition-colors ml-2"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Version - Compact */}
            <div className="sm:hidden p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <AlertTriangle size={16} />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-xs truncate">
                      🚨 Registration Closing Soon!
                    </p>
                    <p className="text-xs opacity-90 truncate">
                      Deadline: {content.eventDetails.registrationDeadline}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 ml-2">
                  <motion.button
                    className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1"
                    onClick={() => window.open(content.eventDetails.paymentLink, '_blank')}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Clock size={12} />
                    <span className="hidden xs:inline">Reg</span>
                  </motion.button>
                  
                  <motion.button
                    className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1"
                    onClick={() => window.open(content.mrMsFresher.formUrl, '_blank')}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Crown size={12} />
                    <span className="hidden xs:inline">Crown</span>
                  </motion.button>
                  
                  <button
                    onClick={handleNotificationClose}
                    className="text-white/70 hover:text-white transition-colors ml-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default RegistrationPopup
