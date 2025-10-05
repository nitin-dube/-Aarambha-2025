import { motion } from 'framer-motion'
import { UserPlus, Music, CheckCircle, Crown, Heart } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import { content } from '../config/content'

const Registration = () => {
  const registrationTypes = [
    {
      ...content.registrationTypes[0],
      icon: <UserPlus size={32} className="text-primary-600" />,
      color: 'primary'
    },
    {
      ...content.registrationTypes[1],
      icon: <Heart size={32} className="text-secondary-600" />,
      color: 'secondary'
    },
    {
      ...content.registrationTypes[2],
      icon: <Music size={32} className="text-accent-600" />,
      color: 'accent'
    },
    {
      ...content.registrationTypes[3],
      icon: <Crown size={32} className="text-green-600" />,
      color: 'green'
    }
  ]

  const handleRegistration = (type: any) => {
    if (type.formUrl) {
      window.open(type.formUrl, '_blank')
    } else {
      alert('Registration form coming soon! Please contact the coordinators for now.')
    }
  }

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
              <UserPlus size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Registration
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Join Aarambha Mahotsava 2025 and be part of the grand celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Types */}
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
              Choose Your Registration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the type of registration that best fits your interests and participation level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {registrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600">
                      {type.description}
                    </p>
                  </div>

                  {type.benefits && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {type.note && (
                    <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 text-sm">
                        <strong>Note:</strong> {type.note}
                      </p>
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => handleRegistration(type)}
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

      {/* Registration Process */}
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
              Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get registered for Aarambha Mahotsava 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Registration Type',
                description: 'Select the type of registration that matches your interests'
              },
              {
                step: '2',
                title: 'Fill Registration Form',
                description: 'Complete the registration form with your details'
              },
              {
                step: '3',
                title: 'Pay Registration Fee',
                description: 'Pay the required registration fee (if applicable)'
              },
              {
                step: '4',
                title: 'Get Confirmation',
                description: 'Receive confirmation and event details via email/SMS'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Important Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Registration Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Valid university ID card</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Completed registration form</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Registration fee (if applicable)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Contact information</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact for Registration
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">{content.contacts.akash.name}</p>
                      <p className="text-sm text-gray-600">{content.contacts.akash.role}</p>
                      <a
                        href={`tel:${content.contacts.akash.phone}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {content.contacts.akash.phone}
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{content.contacts.chandra.name}</p>
                      <p className="text-sm text-gray-600">{content.contacts.chandra.role}</p>
                      <a
                        href={`tel:${content.contacts.chandra.phone}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {content.contacts.chandra.phone}
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{content.contacts.kunal.name}</p>
                      <p className="text-sm text-gray-600">{content.contacts.kunal.role}</p>
                      <a
                        href={`tel:${content.contacts.kunal.phone}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {content.contacts.kunal.phone}
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{content.contacts.nitin.name}</p>
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
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Registration forms are currently being prepared. 
                  Please contact the coordinators directly for immediate registration assistance.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Registration
