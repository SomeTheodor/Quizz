const botonVolverAtras = document.getElementById('botonVolverAtras');

if (highestCategory == "Programacion" || highestCategory == "Web" || highestCategory == "Database") {
    botonVolverAtras.addEventListener('click', function() {
        window.location.href = 'cont_programacion.html'; // Cambia el enlace para la categoría "programacion" al hacer clic en el botón
    });
}