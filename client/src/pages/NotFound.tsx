import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container-max section-padding">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Animation */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-8xl md:text-9xl font-bold text-primary-600 mb-4">
              404
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-gray-500">
              Don't worry, let's get you back to the celebration!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <Home size={20} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Search size={24} className="text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Popular Pages
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Events', href: '/events' },
                { name: 'Passes', href: '/passes' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="p-3 text-center bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-primary-600 font-medium">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-gray-500 text-sm">
              While you're here, don't forget to check out our amazing event lineup! 🎉
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
