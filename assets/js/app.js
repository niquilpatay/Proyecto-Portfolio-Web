var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo Nombre es obligatorio',
        });
        return;
    }

    if (correo.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo Correo es obligatorio',
        });
        return;
    }

    if (asunto.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo Asunto es obligatorio',
        });
        return;
    }

    if (mensaje.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo Mensaje es obligatorio',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Formulario enviado correctamente',
        timer: 1500,
        showConfirmButton: false
    }).then(function() {
        contactForm.submit();
        location.reload();
    });
});