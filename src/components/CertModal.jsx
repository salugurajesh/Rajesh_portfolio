import React from 'react'

export default function CertModal({ cert, onClose }){
  if (!cert) return null
  const isPdf = /\.pdf(\?.*)?$/i.test(cert.url)
  return (
    <div
      id="certModal"
      className="modal"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content">
        <button className="close" aria-label="Close" onClick={onClose}>×</button>
        <h3 id="cert-modal-title">{cert.title}</h3>
        <div id="cert-media">
          <img id="cert-img" alt="Certification image" style={{ display: isPdf ? 'none' : 'block' }} src={isPdf ? undefined : cert.url} />
          <embed id="cert-pdf" type="application/pdf" style={{ display: isPdf ? 'block' : 'none' }} src={isPdf ? cert.url : undefined} />
          {isPdf && (
            <div className="pdf-fallback">
              <p>If the PDF does not display, you can open it directly here:</p>
              <a href={cert.url} target="_blank" rel="noreferrer">Open certification document</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
