import { motion } from 'framer-motion'
import FloatingParticles from './FloatingParticles'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { fadeUpVariants, staggerContainerVariants } from '../animations'

const PHRASES = [
  'Full-Stack Software Engineer',
  'AI & Multi-Agent Systems',
  'Building Scalable Backends',
] as const

function Hero() {
  const subtitle = useTypingEffect(PHRASES)

  return (
    <section id="home" className="hero">
      <FloatingParticles />
      <motion.div
        className="hero-inner"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={fadeUpVariants}>Welcome to My Portfolio</motion.h2>
        <motion.p variants={fadeUpVariants}>
          Hi, I&apos;m Gabriela Castaneda and welcome to my portfolio website ✨
        </motion.p>
        <motion.p className="hero-subtitle" variants={fadeUpVariants} aria-live="polite">
          {subtitle}
          <span className="typing-cursor" aria-hidden="true">|</span>
        </motion.p>
        <motion.a
          href="#about"
          className="btn"
          variants={fadeUpVariants}
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.96 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero