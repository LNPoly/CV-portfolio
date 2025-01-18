const footer = document.createElement('footer')

const p1 = document.createElement('p')
p1.className = 'subtitle'
p1.textContent = 'Paula M. Domínguez'

const p2 = document.createElement('p')
p2.textContent = 'Programadora backend | 2025'

const socialLinksList = document.createElement('ul')
socialLinksList.className = 'social'

const iconsfooter = [
    { href: 'https://github.com/LNPoly', icon: '<i class="fab fa-github"></i>' },
    { href: 'https://www.linkedin.com/in/paula-dominguez', icon: '<i class="fab fa-linkedin"></i>' }
];

iconsfooter.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = item.href;
    a.innerHTML = item.icon; 

    li.appendChild(a)
    socialLinksList.appendChild(li)
});


footer.appendChild(p1)
footer.appendChild(p2)
footer.appendChild(socialLinksList)


document.body.appendChild(footer)