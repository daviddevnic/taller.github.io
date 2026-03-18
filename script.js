document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    // Convertimos los hijos en un array real
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');

    let currentIndex = 0;

    // Función para mover el carrusel
    const moveToSlide = (index) => {
        // Manejar límites (carrusel infinito)
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        // Calcular desplazamiento
        // width es 100%, así que movemos 0%, -100%, -200%...
        const amountToMove = -100 * index;
        track.style.transform = `translateX(${amountToMove}%)`;
        
        currentIndex = index;
    };

    // Event Listeners
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    // Opcional: Cambio automático cada 5 segundos
    setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 5000);
});