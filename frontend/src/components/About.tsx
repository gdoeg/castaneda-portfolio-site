import { motion } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants, viewportOptions } from '../animations'

function About() {
  return (
    <motion.section
      id="about"
      className="content"
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
    >
      <motion.h2 variants={fadeUpVariants}>About Me</motion.h2>
      <motion.p variants={fadeUpVariants}>
        I&apos;m a full-stack software engineer with production experience building AI-driven systems
        and scalable backend services.
      </motion.p>
      <motion.p variants={fadeUpVariants}>
        At Sensatronix, I&apos;ve shipped production features across web and mobile platforms,
        working with Go, React, and cloud infrastructure in a microservices environment. I&apos;ve
        built APIs, designed multi-agent onboarding workflows, and contributed to systems used in
        real-world applications.
      </motion.p>
      <motion.p variants={fadeUpVariants}>
        I&apos;m particularly interested in AI and multi-agent architectures, and I enjoy solving
        complex problems, working on collaborative teams, and shipping features end-to-end.
      </motion.p>
    </motion.section>
  )
}

export default About
