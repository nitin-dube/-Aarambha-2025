import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isEventStarted, setIsEventStarted] = useState(false)

  useEffect(() => {
    // Set the event date to October 11, 2025 at 9:00 AM
    const eventDate = new Date('2025-10-11T09:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsEventStarted(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsEventStarted(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isEventStarted) {
    return (
      <motion.div
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold mb-2">🎉 Event Started!</div>
        <div className="text-lg">Aarambha Mahotsava 2025 is now live!</div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-6"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold mb-2">⏰ Event Countdown</h3>
        <p className="text-primary-100 text-sm">Aarambha Mahotsava 2025 starts in:</p>
      </div>
      
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-2xl sm:text-3xl font-bold mb-1">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-primary-100 font-medium">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <p className="text-primary-100 text-sm">
          📅 <strong>Event Date:</strong> 11th October 2025, 9:00 AM
        </p>
        <p className="text-primary-100 text-xs mt-1">
          🎓 CSE Department Only
        </p>
      </div>
    </motion.div>
  )
}

export default CountdownTimer
