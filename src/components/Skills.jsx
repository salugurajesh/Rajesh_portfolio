import React from 'react'

export default function Skills(){
  return (
    <div className="skills-section-wrapper">
      <section id="skills" className="skills">
        <h2>Skills & Tools</h2>
        <div className="skills-grid">
          <div className="skill-box"><i className="fas fa-desktop" style={{ color: '#0A66C2' }}></i> SAP GUI</div>
          <div className="skill-box"><i className="fas fa-magic" style={{ color: '#A020F0' }}></i> STMS & ChaRM</div>
          <div className="skill-box"><i className="fas fa-cogs" style={{ color: '#FF6F00' }}></i> SAP Basis</div>
          <div className="skill-box"><i className="fab fa-java" style={{ color: '#007396' }}></i>Microsoft Azure</div>
          <div className="skill-box"><i className="fas fa-leaf" style={{ color: '#6DB33F' }}></i> SAP S/4HANA</div>
          <div className="skill-box"><i className="fab fa-angular" style={{ color: '#DD0031' }}></i> Oracle DB</div>
          <div className="skill-box"><i className="fas fa-code" style={{ color: '#3178C6' }}></i> Docker</div>
          <div className="skill-box"><i className="fab fa-html5" style={{ color: '#E34F26' }}></i> HTML & CSS</div>
          <div className="skill-box"><i className="fab fa-js" style={{ color: '#F7DF1E' }}></i> System Refresh & Kernel Upgrades</div>
          <div className="skill-box"><i className="fas fa-database" style={{ color: '#4DB33D' }}></i> SQL</div>
          <div className="skill-box"><i className="fab fa-github" style={{ color: '#181717' }}></i> Git & GitHub</div>
        </div>
      </section>
    </div>
  )
}
