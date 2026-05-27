import React from 'react'

export default function ProjectModal({ project, onClose }){
  if (!project) return null
  return (
    <div
      id="modal"
      className="modal"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content">
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <h3 id="modal-title">{project.title}</h3>
        <img id="modal-image" src={project.image} alt={project.title || 'Project image'} />
        <p id="modal-desc" className="modal-desc">{project.desc}</p>
      </div>
    </div>
  )
}
