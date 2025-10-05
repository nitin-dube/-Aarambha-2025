import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Download } from 'lucide-react'
import Timeline from '../components/Timeline'
import ScheduleCard from '../components/ScheduleCard'
import Button from '../components/Button'
import { content } from '../config/content'

const Events = () => {
  const timelineItems = content.eventHighlights.map((event) => ({
    time: event.time,
    title: event.title,
    description: event.description,
    icon: <span className="text-lg">{event.icon}</span>
  }))

  const downloadICS = () => {
    const eventDate = '20251011T090000' // 11th October 2025, 9:00 AM
    const endDate = '20251011T123000'   // 11th October 2025, 12:30 PM
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aarambha Mahotsava 2025//EN
BEGIN:VEVENT
UID:aarambha2025@sbu.ac.in
DTSTAMP:20250101T000000Z
DTSTART:${eventDate}
DTEND:${endDate}
SUMMARY:Aarambha Mahotsava 2025
DESCRIPTION:Unleashing Vibrance - A Grand Celebration of New Beginnings at Sarala Birla University
LOCATION:Sarala Birla University Auditorium (Tentative - GD Birla or BK Birla Auditorium)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'aarambha-mahotsava-2025.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Event Schedule
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Join us for an unforgettable day of celebration, culture, and fun
            </p>
            
            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={20} />
                <span className="font-medium">{content.eventDetails.venue}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock size={20} />
                <span className="font-medium">{content.eventDetails.time}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar size={20} />
                <span className="font-medium">{content.eventDetails.date}</span>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                onClick={downloadICS}
                className="inline-flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Add to Calendar</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Event Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow the exciting schedule of events throughout the day
            </p>
          </motion.div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Detailed Schedule Section */}
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
              Detailed Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete breakdown of all events with timings and descriptions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {content.detailedSchedule.map((item, index) => (
              <ScheduleCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Cards */}
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
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each event is carefully planned to give you the best experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.eventHighlights.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Join the Celebration?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on this amazing opportunity to be part of Aarambha Mahotsava 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Your Pass Now
              </Button>
              <Button variant="outline" size="lg">
                Register for Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events
