import { useState } from 'react'

const projects = [
  {
    title: 'Release Management Architecture',
    image: 'https://i.ibb.co/DfGfFG0x/b22ac56c-eceb-4f69-b9c7-6d896df90d47.png',
    desc: `• Handled 200+ transport requests and system checks for go-lives.
• Coordinated weekly minor and monthly major releases.
• Reduced errors with rigorous pre-deployment validations.`
  },
  {
    title: 'SAP Monthly/Weekly Release Management',
    image: 'https://i.ibb.co/6JbGSPth/Chat-GPT-Image-Jul-19-2025-03-05-23-PM-1-page-0001.jpg',
    desc: `• Handled 200+ transport requests and conducted pre-deployment validations for go-lives.
• Planned and coordinated weekly minor and monthly major releases, ensuring zero post-release defects.
• Streamlined deployment processes by automating system checks and transport tracking.`
  },
  {
    title: 'SAP Basis System Monitoring Dashboard',
    image: 'Sap_Monitoring.png',
    desc: `• Monitored system health (CPU, memory, disk) with real-time dashboards (e.g., ST06).
• Automated job and transport monitoring; proactive issue resolution.
• Analyzed trends and optimized resources using historical + real-time data.`
  },
  {
    title: 'SAP Basis Training & Administration',
    image: 'sap_wipro.png',
    desc: ''
  }
]

const certifications = [
  {
    title: 'PL-300: Microsoft Power BI Data Analyst – Microsoft',
    url: 'assets/certifications/PL-300_PowerBI_Certification.pdf',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    alt: 'Microsoft Logo',
    strongText: 'PL-300:',
    description: ' Microsoft Power BI Data Analyst – Microsoft',
    extraClass: ''
  },
  {
    title: 'AZ-120: Planning and Administering Microsoft Azure for SAP Workloads – Microsoft',
    url: 'assets/certifications/AZ-120_SAP_Certification.pdf',
    img: 'https://images.netcomlearning.com/cms/logos/microsoft-az-120.png',
    alt: 'Microsoft AZ-120 Logo',
    strongText: 'AZ-120:',
    description: ' Planning and Administering Microsoft Azure for SAP Workloads – Microsoft',
    extraClass: ''
  },
  {
    title: 'SAP System Administration (SAP BASIS, NetWeaver 7.5) – OpenSAP',
    url: 'assets/certifications/Sap_Basis_Certificate.pdf',
    img: 'https://certificationrecommend.sapforgrowth.com/assets/images/sap-logo.png',
    alt: 'SAP Logo',
    strongText: 'SAP System Administration (SAP BASIS, NetWeaver 7.5)',
    description: ' – OpenSAP',
    extraClass: ''
  },
  {
    title: 'Certificate Program in Java Full Stack – Wipro',
    url: 'assets/certifications/Wipro_javaFullStack_certification.pdf',
    img: 'Wipro_Primary_Logo_Color_RGB.svg.webp',
    alt: 'Wipro Logo',
    strongText: 'Certificate Program in Java Full Stack',
    description: ' – Wipro',
    extraClass: ' wipro-logo'
  }
]

function App() {
  const [projectModal, setProjectModal] = useState(null)
  const [certModal, setCertModal] = useState(null)

  const openProjectModal = (project) => setProjectModal(project)
  const closeProjectModal = () => setProjectModal(null)

  const openCertModal = (cert) => setCertModal({
    ...cert,
    isPdf: /\.pdf(\?.*)?$/i.test(cert.url)
  })
  const closeCertModal = () => setCertModal(null)

  return (
    <>
      <nav>
        <div className="logo">Salugu Rajesh</div>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div
        id="modal"
        className="modal"
        style={{ display: projectModal ? 'flex' : 'none' }}
        onClick={(e) => { if (e.target === e.currentTarget) closeProjectModal() }}
      >
        <div className="modal-content">
          <button className="modal-close" aria-label="Close" onClick={closeProjectModal}>×</button>
          <h3 id="modal-title">{projectModal?.title}</h3>
          <img id="modal-image" src={projectModal?.image} alt={projectModal?.title || 'Project image'} />
          <p id="modal-desc" className="modal-desc">{projectModal?.desc}</p>
        </div>
      </div>

      <div
        id="certModal"
        className="modal"
        style={{ display: certModal ? 'flex' : 'none' }}
        onClick={(e) => { if (e.target === e.currentTarget) closeCertModal() }}
      >
        <div className="modal-content">
          <button className="close" aria-label="Close" onClick={closeCertModal}>×</button>
          <h3 id="cert-modal-title">{certModal?.title}</h3>
          <div id="cert-media">
            <img
              id="cert-img"
              alt="Certification image"
              style={{ display: certModal?.isPdf ? 'none' : 'block' }}
              src={certModal?.isPdf ? undefined : certModal?.url}
            />
            <embed
              id="cert-pdf"
              type="application/pdf"
              style={{ display: certModal?.isPdf ? 'block' : 'none' }}
              src={certModal?.isPdf ? certModal?.url : undefined}
            />
          </div>
        </div>
      </div>

      <section className="hero">
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
          <div className="slider-track">
            <img src="https://i.ibb.co/wNpJvhns/IMG-9125.jpg" alt="Salugu Rajesh Profile" />
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Enterprise Projects</h2>
        <div className="project-grid" id="projectGrid">
          {projects.map((project) => (
            <div key={project.title} className="card" onClick={() => openProjectModal(project)}>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

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

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <div>
            <h3><img src="TCS_wordmark_2020.webp" alt="TCS Logo" className="company-logo" />Tata Consultancy Services – SAP Basis Administrator</h3>
            <p>
              - Managed and migrated changes from Jira tickets to multiple systems using SAP tools and ChaRM.<br />
              - Conducted go-lives by deploying changes to production environments.<br />
              - Performed in-depth analysis of OT issues for smooth operations.<br />
              - Applied PLA descriptions and GEX for streamlined operations.<br />
              - Coordinated client openings, R/3 connections, and led release cycles.<br />
              - Handled 200+ monthly transport requests with 100% SLA compliance.<br />
              - Improved system stability by resolving 95% of OT issues within deadlines.
            </p>
          </div>
        </div>

        <div className="experience-card">
          <div>
            <h3><img src="Wipro_Primary_Logo_Color_RGB.svg.webp" alt="Wipro Logo" className="company-logo" />Wipro – Technical Trainee</h3>
            <p>
              - Worked with STMS, SM37, and ST22 for transport management, job monitoring, and dump analysis activities.<br />
              - Assisted in client copy execution, BDLS activities, and post-refresh validation processes.<br />
              - Supported kernel patching, SPAM and SAINT updates, and basic SAP Basis troubleshooting activities.<br />
              - Used Jira for incident tracking, change management coordination, and activity documentation.
            </p>
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <div className="experience-card">
          <div className="certifications-list">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className={`certification-item${cert.extraClass}`}
                onClick={() => openCertModal(cert)}
              >
                <img src={cert.img} alt={cert.alt} className={`company-logo${cert.extraClass}`} />
                <strong>{cert.strongText}</strong>{cert.description}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <footer>
        <p>&copy; 2025 Salugu Rajesh</p>
      </footer>
    </>
  )
}

export default App
