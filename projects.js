// projects.js
const projects = [
    { title: "Lodan Market", date: "23 septembre 2025", description: "Lodan Market est une plateforme en ligne moderne et conviviale, offrant une expérience fluide, sécurisée et écoresponsable.", link: "https://lodanmarket.fr" },
    { title: "PokeDex", date: "01 decembre 2024", description: "Un Pokédex interactif en Flutter permettant de consulter les détails des Pokémon avec une interface moderne, mode sombre et gestion des données via API externes.", link: "https://github.com/Ou2seyne/Pokedex" },
    { title: "Forum API APP", date: "10 mars 2025", link: "https://github.com/Ou2seyne/Forum" },
];

const projectList = document.querySelector('.project-list');

function renderProjects() {
    projectList.innerHTML = '';
    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
    <div class="project-number">${(index + 1).toString().padStart(2, '0')}</div>
    <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description || 'Description du projet'}</p>
        <div class="project-meta">
            <i class="far fa-calendar-alt"></i> ${project.date}
        </div>
        <a href="${project.link}" target="_blank" class="btn">Voir le projet</a>
    </div>
`;
        projectList.appendChild(projectDiv);
    });
}

// Animation pour l'arrière-plan en grille
document.addEventListener('mousemove', (e) => {
    const gridBackground = document.querySelector('.grid-background');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gridBackground.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

// Rendu initial
renderProjects();