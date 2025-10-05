import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CTACountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
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
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="max-w-xl mx-auto mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
        <div className="text-center mb-3">
          <h4 className="text-lg font-bold text-white mb-1">⏰ Time Remaining</h4>
          <p className="text-primary-100 text-sm">Registration closes soon!</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div 
              key={item.label} 
              className="bg-white/20 rounded-lg p-2 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-lg font-bold text-white">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-primary-100">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default CTACountdown
