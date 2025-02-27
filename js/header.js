const header = document.createElement('header')
const navbar = document.createElement('div');
navbar.className = 'navbar';

const navList = document.createElement('ul')

const items = [
    { className: 'home', href: 'index.html', icon: '<i class="fa-solid fa-house"></i>', text: 'Inicio'},
    { href: '/CV-portfolio/pages/info.html', text: 'Datos Personales' },
    { href: '/CV-portfolio/pages/education.html', text: 'Educación' },
    { href: '/CV-portfolio/pages/knowledge.html', text: 'Conocimientos' },
    { href: '/CV-portfolio/pages/projects.html', text: 'Proyectos' },
    { href: '/CV-portfolio/pages/workExperience.html', text: 'Experiencia Laboral' }
];

items.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a');
    a.href = item.href;

    if (item.icon) {
        a.innerHTML = item.icon;
    } else {
        a.textContent = item.text; 
    }

    li.appendChild(a);
    if (item.className) {
        li.className = item.className;
    }
    
    navList.appendChild(li);
});

navbar.appendChild(navList);
header.appendChild(navbar);

document.body.insertBefore(header, document.body.firstChild);
