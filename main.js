const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");

    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    }
})

// Animación de corazones cayendo
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-fall';

    // Posición aleatoria
    heart.style.left = Math.random() * 100 + '%';

    // Duración y tamaño aleatorios
    const duration = 8 + Math.random() * 4;
    const size = 10 + Math.random() * 10;
    heart.style.animationDuration = duration + 's';
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    document.body.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Crear corazones cada 1.5 segundos
setInterval(createHeart, 1500);

// Crear algunos corazones iniciales
setTimeout(() => {
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 300);
    }
}, 100);