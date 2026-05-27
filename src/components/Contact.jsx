import React from 'react'

export default function Contact(){
  return (
    <section id="about" className="about-contact-wrapper">
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I am Salugu Rajesh, an SAP Basis Administrator with over 3 years of experience
          in SAP S/4HANA administration, release management, transport management,
          ChaRM workflows, and Azure-hosted SAP environments.

          I specialize in maintaining stable enterprise SAP landscapes,
          supporting production deployments, optimizing operational activities,
          and ensuring reliable system performance across large-scale environments.
        </p>
      </div>

      <div className="contact-section" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:rajeshsalugu0206@gmail.com">rajeshsalugu0206@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/salugu-rajesh/" target="_blank" rel="noreferrer">Salugu Rajesh</a></p>
        <p>Phone: <a href="tel:+918332939478">+91 83329 39478</a></p>
        <div className="contact-icons">
          <a href="mailto:rajeshsalugu0206@gmail.com"><i className="fas fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/salugu-rajesh/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/salugurajesh" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  )
}
