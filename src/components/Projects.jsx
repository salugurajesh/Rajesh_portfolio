import React from 'react'
import { projects } from '../data/projects'

export default function Projects({ onOpenProject }){
  return (
    <section id="projects" className="projects">
      <h2>Enterprise Projects</h2>
      <div className="project-grid" id="projectGrid">
        {projects.map((project) => (
          <div key={project.title} className="card" onClick={() => onOpenProject && onOpenProject(project)}>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
