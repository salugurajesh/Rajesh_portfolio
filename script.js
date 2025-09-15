/* ========= Projects data ========= */
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
    title: 'Full Stack Weather Application',
    image: 'https://i.ibb.co/wNDfjr7Q/Weather-App-Interface-Screenshots.png',
    desc: `• Angular front-end + Spring Boot back-end.
• Real-time weather data via API.
• MongoDB for user data; SQL for authentication.`
  }
];

/* ========= Init ========= */
document.addEventListener('DOMContentLoaded', () => {
  // build project cards
  const grid = document.getElementById('projectGrid');
  if (grid) {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${project.title}</h3>`;
      card.addEventListener('click', () =>
        openModal(project.title, project.image, project.desc)
      );
      grid.appendChild(card);
    });
  }

  // overlay click to close (projects modal)
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  }

  // overlay click to close (cert modal)
  const certModal = document.getElementById('certModal');
  if (certModal) {
    certModal.addEventListener('click', (e) => { if (e.target === certModal) closeCertModal(); });
  }

  // Esc closes whichever modal is open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeCertModal(); }
  });
});

/* ========= Project -Modal helpers ========= */
function openModal(title, imageUrl, desc) {
  const modal  = document.getElementById('modal');
  const imgEl  = document.getElementById('modal-image');
  const titleEl= document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');
  if (!modal || !imgEl || !titleEl || !descEl) return;

  titleEl.textContent = title;
  imgEl.src = imageUrl;
  imgEl.alt = title;
  descEl.textContent = desc;

  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'none';
}

/* ========= Certification Modal (supports PDF or image) ========= */
function openCertModal(title, url) {
  const modal   = document.getElementById('certModal');
  const titleEl = document.getElementById('cert-modal-title');
  const imgEl   = document.getElementById('cert-img');
  const pdfEl   = document.getElementById('cert-pdf');
  const dlEl    = document.getElementById('cert-download'); // may not exist if hidden/removed

  if (!modal || !titleEl || !imgEl || !pdfEl) return;

  titleEl.textContent = title;
  if (dlEl) dlEl.href = url; // safe even if the button is removed

  const isPdf = /\.pdf(\?.*)?$/i.test(url);

  if (isPdf) {
    pdfEl.src = url;
    pdfEl.style.display = 'block';
    imgEl.style.display = 'none';
  } else {
    imgEl.src = url;
    imgEl.style.display = 'block';
    pdfEl.style.display = 'none';
  }

  modal.style.display = 'flex';
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) modal.style.display = 'none';
}
