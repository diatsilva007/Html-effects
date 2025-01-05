const glitch = document.querySelector('.glitch');

glitch.addEventListener('mouseover', () => {
    glitch.style.animation = 'glitch-animation 0.2s infinite';
});

glitch.addEventListener('mouseout', () => {
    glitch.style.animation = 'glitch-animation 2s infinite';
});