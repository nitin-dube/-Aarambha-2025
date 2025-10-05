import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TimelineItem {
  time: string
  title: string
  description: string
  icon?: ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const Timeline = ({ items, className = '' }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-start space-x-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center">
              {item.icon || (
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
