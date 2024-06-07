document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.animated-images img');
    
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform += ` translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`;
        }, index * 500);
    });
});