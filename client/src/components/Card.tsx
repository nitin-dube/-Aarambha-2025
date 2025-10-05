import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card = ({ children, className = '', hover = true, onClick }: CardProps) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg transition-all duration-300'
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  const clickableClasses = onClick ? 'cursor-pointer' : ''
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`
  
  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}

export default Card
