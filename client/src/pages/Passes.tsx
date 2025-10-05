import { motion } from 'framer-motion'
import { useState } from 'react'
import { Ticket, Phone, Check } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Counter from '../components/Counter'
import Modal from '../components/Modal'
import { content } from '../config/content'

const Passes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-max section-padding">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Ticket size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Pass
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Join the celebration with our all-access pass for Aarambha Mahotsava 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 text-center">
              {/* Price */}
              <div className="mb-8">
                <div className="text-6xl md:text-7xl font-bold text-primary-600 mb-2">
                  ₹<Counter end={content.eventDetails.passesPrice} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {content.passes.title}
                </h2>
                <p className="text-xl text-gray-600">
                  One pass for all events and experiences
                </p>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {content.passes.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check size={20} className="text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Important Information
                </h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="space-y-3 text-sm text-yellow-700">
                    {content.passes.importantInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-yellow-600">•</span>
                        <span>{info}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* CTA Button */}
              <div className="mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full md:w-auto"
                >
                  Get Your Pass Now
                </Button>
              </div>

              {/* Passes Left Counter */}
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Ticket size={24} className="text-primary-600" />
                  <span className="text-lg font-semibold text-primary-800">
                    <Counter end={content.eventDetails.passesLeft} /> Passes Left
                  </span>
                </div>
                <p className="text-primary-700 text-sm">
                  🎉 Limited passes available! Get yours today! 🎉
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact for Passes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our coordinators for pass collection and any queries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.akash.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.akash.role}</p>
                <a
                  href={`tel:${content.contacts.akash.phone}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  {content.contacts.akash.phone}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone size={24} className="text-secondary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.chandra.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.chandra.role}</p>
                <a
                  href={`tel:${content.contacts.chandra.phone}`}
                  className="text-secondary-600 hover:text-secondary-700 font-medium text-sm"
                >
                  {content.contacts.chandra.phone}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone size={24} className="text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.kunal.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.kunal.role}</p>
                <a
                  href={`tel:${content.contacts.kunal.phone}`}
                  className="text-accent-600 hover:text-accent-700 font-medium text-sm"
                >
                  {content.contacts.kunal.phone}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.nitin.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.nitin.role}</p>
                <a
                  href={`tel:${content.contacts.nitin.phone}`}
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  {content.contacts.nitin.phone}
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pass Collection Information"
        size="lg"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Ticket size={24} className="text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ₹{content.eventDetails.passesPrice} - All Access Pass
            </h3>
            <p className="text-gray-600">
              Valid for all departments of SARALA BIRLA UNIVERSITY
            </p>
          </div>


          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Got it! I'll collect my pass
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Passes
