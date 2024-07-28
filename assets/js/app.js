//Validador de datos Formulario

document.getElementById('send').addEventListener('click', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var asunto = document.getElementById('asunto').value;
    var message = document.getElementById('message').value;

    if (!name || !asunto || !message) {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Mensaje enviado correctamente.');

    }
});

//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
