const articles = [
    { title: "Vue.js Guide D'installation + Présentation", date: "23 septembre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=actualite-vue-js-novembre-2024" },
    { title: "Nouveautés de Vue.js : Version 3.5", date: "07 octobre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=nouveautes-de-vue-js-version-3-5" },
    { title: "Vue.js Nation 2024 : Les Annonces Clés", date: "21 octobre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=vue-js-nation-2024-les-annonces-cles" },
    { title: "Les Actualités Récentes de Vue.js Novembre 2024", date: "04 novembre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=les-actualites-recentes-de-vue-js-novembre-2024" },
    { title: "Vue.js et Ses Concurrents", date: "18 novembre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=vue-js-et-ses-concurrents" },
    { title: "Introduction à Vue.js avec un Premier Composant", date: "09 décembre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=introduction-a-vue-js-avec-un-premier-composant" },
    { title: "Utiliser les Directives de Vue.js", date: "23 décembre 2024", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=utiliser-les-directives-de-vue-js-pour-rendre-une-liste-dynamique" },
    { title: "Créer une To-Do List avec des Événements Vue.js", date: "06 janvier 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=creer-une-to-do-list-avec-des-evenements-vue-js" },
    { title: "À quoi s'attendre de Vue.js en 2024", date: "20 janvier 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=a-quoi-sattendre-de-vue-js-en-2024" },
    { title: "Deep linking, reactive routes, hidden components", date: "10 février 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=deep-linking-reactive-routes-hidden-components-et-plus-encore-november-2024" },
    { title: "Vue.js et Vite : Une intégration toujours plus poussée", date: "24 février 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=vue-js-et-vite-une-integration-toujours-plus-poussee" },
    { title: "Les nouveaux outils de devtools pour Vue.js", date: "09 mars 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=les-nouveaux-outils-de-devtools-pour-vue-js" },
    { title: "Nuxt.js : Pourquoi il existe et ce qui le rend unique", date: "23 mars 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=nuxt-js-pourquoi-il-existe-et-ce-qui-le-rend-unique" },
    { title: "Nuxt.js 3 : Les dernières évolutions à connaître", date: "23 mars 2025", link: "https://lgm.nuage-pedagogique.fr/?elementor_library=nuxt-js-3-les-dernieres-evolutions-a-connaitre" }
];

const articleList = document.querySelector('.article-list');

function renderArticles() {
    articleList.innerHTML = '';
    articles.forEach((article, index) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <div class="article-number">${(index + 1).toString().padStart(2, '0')}</div>
            <div class="article-content">
                <h3>${article.title}</h3>
                <div class="article-meta">
                    <i class="far fa-calendar-alt"></i> ${article.date}
                </div>
                <a href="${article.link}" target="_blank" class="btn">Lire l'article</a>
            </div>
        `;
        articleList.appendChild(articleDiv);
    });
}

// Animation for grid background
document.addEventListener('mousemove', (e) => {
    const gridBackground = document.querySelector('.grid-background');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gridBackground.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

// Initial render
renderArticles();