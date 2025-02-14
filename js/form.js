document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    let destinatario = "paula.dominguez2205@gmail.com";
    let asunto = "Formulario de Contacto";
    let body = `Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0AMensaje: ${mensaje}`;

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${body}`;
});

//reseteo
document.getElementById("contactForm").addEventListener("submit", function(event) {
    setTimeout(() => {
        this.reset();
    }, 500); 
});