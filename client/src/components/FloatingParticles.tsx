import { useEffect, useState } from 'react'

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        size: Math.random() * 6 + 2
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
