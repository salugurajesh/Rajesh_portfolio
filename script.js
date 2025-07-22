const projects = [
  {
    title: 'Release Management Architecture',
    image: 'https://i.ibb.co/DfGfFG0x/b22ac56c-eceb-4f69-b9c7-6d896df90d47.png',
    desc: 'Managed end-to-end SAP release cycles ensuring zero post-release defects.'
  },
  {
    title: 'SAP Monthly/Weekly Release Management',
    image: 'https://i.ibb.co/6JbGSPth/Chat-GPT-Image-Jul-19-2025-03-05-23-PM-1-page-0001.jpg',
    desc: 'Handled 200+ transport requests and system checks for go-lives.'
  },
  {
    title: 'SAP Basis System Monitoring Dashboard',
    image: 'https://i.ibb.co/DfGfFG0x/b22ac56c-eceb-4f69-b9c7-6d896df90d47.png',
    desc: 'Developed a monitoring dashboard to track system health.'
  },
  {
    title: 'Full Stack Weather Application',
    image: 'https://i.ibb.co/wNDfjr7Q/Weather-App-Interface-Screenshots.png',
    desc: 'Full-stack app with Spring Boot backend & Angular frontend.'
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
