// Función para abrir las ventanas modales
function openModal(company) {
    var modal = document.getElementById(company + '-modal');
    modal.style.display = "block";
}

// Función para cerrar las ventanas modales
function closeModal(company) {
    var modal = document.getElementById(company + '-modal');
    modal.style.display = "none";
}

// Cerrar la modal si el usuario hace clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal('intouch');
        closeModal('sonda');
    }
}

// Obtener el header
const header = document.querySelector('header');

// Variable para la última posición de desplazamiento
let lastScrollTop = 0;

// Detectamos el scroll en la página
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si estamos desplazándonos hacia abajo
    if (currentScroll > lastScrollTop) {
        // Desaparece el header
        header.classList.add('hidden');
    } else {
        // Vuelve a aparecer el header
        header.classList.remove('hidden');
    }

    // Actualizamos la última posición de desplazamiento
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// Definir los colores rosados que cambiarán al pasar el mouse
const pinkTones = [
    '#fce4ec', // Rosa suave
    '#f8bbd0', // Rosa claro
    
];

let currentColorIndex = 0;

// Función para cambiar el color del fondo
function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % pinkTones.length;
    document.body.style.backgroundColor = pinkTones[currentColorIndex];
}

// Event listener para cambiar el fondo al pasar el mouse sobre el body
document.body.addEventListener('mousemove', changeBackgroundColor);



   