import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="hero-left">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/salugu-rajesh/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/salugurajesh" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="mailto:rajeshsalugu0206@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
        <h2>Hi, I'm <span className="highlight">Salugu Rajesh.</span></h2>
        <h3>I'm a <span className="highlight">SAP Basis Engineer & Cloud Operations Specialist</span></h3>
        <p>
          SAP Basis Administrator with 3+ years of experience in SAP S/4HANA, release management,
          ChaRM, transport management, and Azure-hosted SAP landscapes.
          Skilled in production deployments, kernel upgrades, system refreshes,
          troubleshooting, and operational support across enterprise SAP environments.
          Certified in Microsoft Azure for SAP Workloads (AZ-120) with strong interest in cloud operations and DevOps.
        </p>
        <div className="hero-buttons">
          <a href="#projects">View Enterprise Projects</a>
          <a href="#contact">Contact Me</a>
          <a href="RAJESH_RESUME (20).pdf" download="Salugu_Rajesh_Resume.pdf">Download CV</a>
        </div>
      </div>
      <div className="profile-slider">
        <motion.div
          className="slider-track"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <img src="https://i.ibb.co/wNpJvhns/IMG-9125.jpg" alt="Salugu Rajesh Profile" />
        </motion.div>
      </div>
    </motion.section>
  )
}
