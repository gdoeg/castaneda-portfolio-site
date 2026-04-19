function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-cards" role="list" aria-label="Contact links">
        <a
          className="contact-card"
          href="https://github.com/gdoeg"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
        >
          <h2>GitHub</h2>
          <p>View my projects</p>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/gabriela-castaneda-4aa04019a/"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
        >
          <h2>LinkedIn</h2>
          <p>Connect with me</p>
        </a>

        <a className="contact-card" href="mailto:gabrielacastanedagc@gmail.com" role="listitem">
          <h2>Email</h2>
          <p>Send me an email</p>
        </a>
      </div>
    </section>
  )
}

export default Contact