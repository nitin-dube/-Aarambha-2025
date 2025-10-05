import { motion } from 'framer-motion'
import { Clock, Users, Mic, Trophy, Gamepad2 } from 'lucide-react'
import Card from './Card'
import Badge from './Badge'

interface ScheduleItem {
  time: string
  event: string
  description: string
  duration: string
  type: string
}

interface ScheduleCardProps {
  item: ScheduleItem
  index: number
}

const ScheduleCard = ({ item, index }: ScheduleCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'logistics':
        return <Users size={24} className="text-blue-600" />
      case 'ceremony':
        return <Mic size={24} className="text-green-600" />
      case 'performance':
        return <Users size={24} className="text-purple-600" />
      case 'competition':
        return <Trophy size={24} className="text-yellow-600" />
      case 'surprise':
        return <Gamepad2 size={24} className="text-pink-600" />
      default:
        return <Clock size={24} className="text-gray-600" />
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'logistics':
        return 'blue'
      case 'ceremony':
        return 'green'
      case 'performance':
        return 'purple'
      case 'competition':
        return 'yellow'
      case 'surprise':
        return 'pink'
      default:
        return 'gray'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 border-l-4 border-l-primary-500">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {getIcon(item.type)}
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.event}
              </h3>
              <Badge variant={getBadgeColor(item.type) as any} size="sm">
                {item.duration}
              </Badge>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Clock size={16} className="text-gray-500" />
              <span className="text-lg font-bold text-primary-600">
                {item.time}
              </span>
            </div>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ScheduleCard
