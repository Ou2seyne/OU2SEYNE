
       document.addEventListener('mousemove', (e) => {
        const gridBackground = document.querySelector('.grid-background');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gridBackground.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
    
    const codeBackground = document.getElementById('codeBackground');
    const codeLines = [
        'import { ref, onMounted } from "vue"',
        'const count = ref(0)',
        'function setup() {',
        '  const message = ref("Hello")',
        '  return { message }',
        '}',
        '<template>',
        '  <div class="container">',
        '    <h1>{{ message }}</h1>',
        '  </div>',
        '</template>',
        'export default {',
        '  name: "App",',
        '  components: { HelloWorld }',
        '}',
        'const router = createRouter({',
        '  history: createWebHistory(),',
        '  routes: [...]',
        '})'
    ];
    
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.classList.add('code-line');
        line.style.top = `${i * 5}%`;
        line.style.left = `${Math.random() * 50}%`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        line.style.animationDuration = `${30 + Math.random() * 60}s`;
        
        let text = '';
        for (let j = 0; j < 10; j++) {
            text += codeLines[Math.floor(Math.random() * codeLines.length)] + '  ';
        }
        line.textContent = text;
        
        codeBackground.appendChild(line);
    }