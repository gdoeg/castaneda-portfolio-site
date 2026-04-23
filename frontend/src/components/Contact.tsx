import { motion } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants, viewportOptions } from '../animations'

function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.h1 variants={fadeUpVariants}>Contact Me</motion.h1>
      <div className="contact-cards" role="list" aria-label="Contact links">
        <motion.a
          className="contact-card"
          href="https://github.com/gdoeg"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          variants={fadeUpVariants}
          whileHover={{ y: -4 }}
        >
          <h2>GitHub</h2>
          <p>View my projects</p>
        </motion.a>

        <motion.a
          className="contact-card"
          href="https://www.linkedin.com/in/gabriela-castaneda-4aa04019a/"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          variants={fadeUpVariants}
          whileHover={{ y: -4 }}
        >
          <h2>LinkedIn</h2>
          <p>Connect with me</p>
        </motion.a>

        <motion.a
          className="contact-card"
          href="mailto:gabrielacastanedagc@gmail.com"
          role="listitem"
          variants={fadeUpVariants}
          whileHover={{ y: -4 }}
        >
          <h2>Email</h2>
          <p>Send me an email</p>
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Contact