import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import CertModal from './components/CertModal'
import BackgroundEffects from './components/BackgroundEffects'

function App(){
  const [projectModal, setProjectModal] = useState(null)
  const [certModal, setCertModal] = useState(null)

  const openProjectModal = (project) => setProjectModal(project)
  const closeProjectModal = () => setProjectModal(null)

  const openCertModal = (cert) => setCertModal(cert)
  const closeCertModal = () => setCertModal(null)

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Projects onOpenProject={openProjectModal} />
      <Skills />
      <Experience />
      <Certifications onOpenCert={openCertModal} />
      <Contact />
      <Footer />

      <ProjectModal project={projectModal} onClose={closeProjectModal} />
      <CertModal cert={certModal} onClose={closeCertModal} />
    </>
  )
}

export default App
