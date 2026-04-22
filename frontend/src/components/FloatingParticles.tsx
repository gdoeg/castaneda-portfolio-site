import { motion } from 'framer-motion'

type Particle = {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
  color: string
}

const COLORS = [
  'rgba(255, 179, 255, 0.55)',
  'rgba(160, 232, 255, 0.45)',
  'rgba(255, 232, 163, 0.4)',
]

function buildParticles(count: number): Particle[] {
  const rng = (seed: number) => {
    const x = Math.sin(seed + 1) * 10000
    return x - Math.floor(x)
  }
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${rng(i * 3) * 100}%`,
    top: `${rng(i * 3 + 1) * 100}%`,
    size: rng(i * 3 + 2) * 3 + 1.5,
    duration: rng(i * 5) * 8 + 12,
    delay: -(rng(i * 7) * 15),
    color: COLORS[i % COLORS.length],
  }))
}

const particles = buildParticles(14)

function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
          }}
          animate={{
            y: [0, -22, 4, 0],
            x: [0, 6, -5, 0],
            opacity: [0.12, 0.28, 0.1, 0.12],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
