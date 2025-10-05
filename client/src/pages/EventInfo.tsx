import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, FileText, HelpCircle } from 'lucide-react'
import Accordion from '../components/Accordion'
import Card from '../components/Card'
import { content } from '../config/content'

const EventInfo = () => {
  const faqItems = content.faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))

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
              <FileText size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Event Information
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Everything you need to know about Aarambha Mahotsava 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
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
              Event Details
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key information about the venue, timing, and event logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Venue</h3>
                <p className="text-gray-600">{content.eventDetails.venue}</p>
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
                  <Clock size={24} className="text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Time</h3>
                <p className="text-gray-600">{content.eventDetails.time}</p>
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
                  <Calendar size={24} className="text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Date</h3>
                <p className="text-gray-600">{content.eventDetails.date}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rules & Guidelines */}
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
              Rules & Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please follow these guidelines to ensure a safe and enjoyable event for everyone
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    General Rules
                  </h3>
                  <ul className="space-y-3">
                    {content.rules.slice(0, 4).map((rule, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Additional Guidelines
                  </h3>
                  <ul className="space-y-3">
                    {content.rules.slice(4).map((rule, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <HelpCircle size={24} className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about the event
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact our event coordinators for any additional information or clarifications
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.chandra.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.chandra.role}</p>
                <a
                  href={`tel:${content.contacts.chandra.phone}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.kunal.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.kunal.role}</p>
                <a
                  href={`tel:${content.contacts.kunal.phone}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.contacts.nitin.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{content.contacts.nitin.role}</p>
                <a
                  href={`tel:${content.contacts.nitin.phone}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  {content.contacts.nitin.phone}
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventInfo
