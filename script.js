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
    desc: `• Monitored system health (CPU, memory, disk) with real-time dashboards and SAP transactions like ST06.
           • Automated job and transport monitoring, ensuring smooth deployments and proactive issue resolution.
           • Analyzed performance trends and optimized system resources through historical and real-time data insights.`
  },
  {
    title: 'Full Stack Weather Application',
    image: 'https://i.ibb.co/wNDfjr7Q/Weather-App-Interface-Screenshots.png',
    desc: `• Angular front-end and Spring Boot back-end.
           • Real-time weather data using APIs.
           • Integrated MongoDB for user data management and SQL for authentication management.`
   
  }
];

window.onload = function () {
  const grid = document.getElementById('projectGrid');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${project.title}</h3>`;
    card.onclick = () => openModal(project.title, project.image, project.desc);
    grid.appendChild(card);
  });
};

function openModal(title, imageUrl, desc) {
  document.getElementById('modal-image').src = imageUrl;
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-desc').innerText = desc;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
