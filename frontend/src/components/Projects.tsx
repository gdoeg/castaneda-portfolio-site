type ProjectType = 'project' | 'experience'

type Project = {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
  type?: ProjectType
  highlights?: string[]
}

const projects: Project[] = [
  {
    title: 'Portfolio Pilot',
    description:
      'AI-powered portfolio analysis platform that provides insights into stock performance and user investments.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Groq', 'Finnhub API'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
    type: 'project',
  },
  {
    title: 'Svistas AI Onboarding System',
    description:
      'Contributed to a multi-agent AI onboarding system that automates business listing creation using LLM orchestration and media pipelines.',
    techStack: ['Go', 'React', 'Vertex AI', 'Gemini', 'GCP'],
    type: 'experience',
    highlights: [
      'Built and debugged onboarding agent workflows using Google ADK',
      'Implemented media pipeline for extraction, generation, and attachment',
      'Resolved production issues in INT environment (sessions, payload limits, model errors)',
    ],
  },
  {
    title: 'Emergent Societies',
    description:
      'A multi-agent simulation exploring emergent social behavior from local interactions.',
    techStack: ['Python'],
    githubUrl: '#',
    type: 'project',
  },
]

function Projects() {
  return (
    <section id="projects" className="content projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => {
          const itemType = project.type ?? 'project'

          return (
            <article
              key={project.title}
              className={`project-card${project.featured ? ' project-card-featured' : ''}`}
            >
              <div className="project-card-header">
                <span className="project-type">{itemType === 'experience' ? 'Experience' : 'Project'}</span>
                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <div className="project-tech-stack" aria-label={`${project.title} tech stack`}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {project.highlights ? (
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}

              {project.githubUrl || project.demoUrl ? (
                <div className="project-links">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} className="btn" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a href={project.demoUrl} className="btn" target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects