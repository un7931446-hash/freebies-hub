// Enhanced particle effect
function createParticles() {
    const particlesContainer = document.querySelector('.intro-particles');
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 12 + 6;
        particle.style.width = particle.style.height = size + 'px';
        particle.style.top = '50%';
        particle.style.left = '50%';
        const angle = Math.random() * 360;
        const distance = Math.random() * 300 + 150;
        particle.style.setProperty('--dx', `${Math.cos(angle * Math.PI / 180) * distance}px`);
        particle.style.setProperty('--dy', `${Math.sin(angle * Math.PI / 180) * distance}px`);
        particlesContainer.appendChild(particle);
    }
}

createParticles();

setTimeout(() => {
    document.getElementById('intro').style.opacity = '0';
    document.getElementById('intro').style.transition = 'opacity 1.2s ease';
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 1200);
}, 4500);

function showSection(id, element) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-card').forEach(c => c.classList.remove('active'));
    
    document.getElementById(id).classList.add('active');
    element.classList.add('active');

    const scrollPos = document.querySelector('.nav-grid').offsetTop - 100;
    window.scrollTo({top: scrollPos, behavior: 'smooth'});
}