const header = document.createElement('header')
const navbar = document.createElement('div');
navbar.className = 'navbar';

const navList = document.createElement('ul')

const items = [
    { className: 'home', href: 'index.html', icon: '<i class="fa-solid fa-house"></i>' },
    { href: 'pages/info.html', text: 'Datos Personales' },
    { href: 'pages/education.html', text: 'Educación' },
    { href: 'pages/knowledge.html', text: 'Conocimientos' },
    { href: 'pages/projects.html', text: 'Proyectos' },
    { href: 'pages/workExperience.html', text: 'Experiencia Laboral' }
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

// Agregar la lista a la navbar
navbar.appendChild(navList);

// Agregar la navbar al header
header.appendChild(navbar);

document.body.insertBefore(header, document.body.firstChild);

// Finalmente, agregar el header al body o a otro contenedor
//document.body.appendChild(header);