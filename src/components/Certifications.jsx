import React from 'react'
import { certifications } from '../data/certifications'

export default function Certifications({ onOpenCert }){
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="experience-card">
        <div className="certifications-list">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`certification-item${cert.extraClass}`}
              onClick={() => onOpenCert && onOpenCert(cert)}
            >
              <img src={cert.img} alt={cert.alt} className={`company-logo${cert.extraClass}`} />
              <strong>{cert.strongText}</strong>{cert.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
