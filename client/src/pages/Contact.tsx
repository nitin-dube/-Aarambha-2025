import { motion } from 'framer-motion'
import { Phone, Clock, MessageCircle, Users } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import { content } from '../config/content'

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} className="text-primary-600" />,
      title: 'Phone',
      description: 'Call our coordinators for immediate assistance',
      contacts: [
        { name: content.contacts.akash.name, number: content.contacts.akash.phone, role: content.contacts.akash.role },
        { name: content.contacts.chandra.name, number: content.contacts.chandra.phone, role: content.contacts.chandra.role },
        { name: content.contacts.kunal.name, number: content.contacts.kunal.phone, role: content.contacts.kunal.role },
        { name: content.contacts.nitin.name, number: content.contacts.nitin.phone, role: content.contacts.nitin.role }
      ]
    }
  ]

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
              <MessageCircle size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Get in touch with our team for any questions, support, or information about Aarambha Mahotsava 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to contact us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {method.description}
                  </p>
                  
                  <div className="space-y-4">
                    {method.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="text-left">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {contact.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {contact.role}
                        </p>
                        {contact.number && (
                          <a
                            href={`tel:${contact.number}`}
                            className="text-primary-600 hover:text-primary-700 font-medium"
                          >
                            {contact.number}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Coordinators */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users size={24} className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Coordinators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated coordinators are here to help you with all event-related queries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {content.contacts.akash.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {content.contacts.akash.role}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  For general event information, pass collection, and registration queries
                </p>
                <a
                  href={`tel:${content.contacts.akash.phone}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {content.contacts.chandra.name}
                </h3>
                <p className="text-secondary-600 font-medium mb-3">
                  {content.contacts.chandra.role}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  For technical support, special requests, and general assistance
                </p>
                <a
                  href={`tel:${content.contacts.chandra.phone}`}
                  className="text-secondary-600 hover:text-secondary-700 font-medium"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {content.contacts.kunal.name}
                </h3>
                <p className="text-accent-600 font-medium mb-3">
                  {content.contacts.kunal.role}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  For event coordination, logistics, and participant support
                </p>
                <a
                  href={`tel:${content.contacts.kunal.phone}`}
                  className="text-accent-600 hover:text-accent-700 font-medium"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {content.contacts.nitin.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {content.contacts.nitin.role}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  For event management, coordination, and student support
                </p>
                <a
                  href={`tel:${content.contacts.nitin.phone}`}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  {content.contacts.nitin.phone}
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coordinator Availability */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock size={24} className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coordinator Availability
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Best times to reach our coordinators
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Phone Support:</strong> 9:00 AM – 8:00 PM</p>
                  <p><strong>Emergency:</strong> Available 24/7</p>
                  <p><strong>Response Time:</strong> Within 2 hours</p>
                  <p><strong>Best Contact:</strong> Call any of the coordinators listed above</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Common actions you might need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Event Pass
              </Button>
              <Button variant="outline" size="lg">
                View Event Schedule
              </Button>
              <Button variant="secondary" size="lg">
                Register for Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
