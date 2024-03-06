const img = document.getElementById('fly-personage-01');

function animate() {
    const y = Math.sin(Date.now() / 850) *15;
    img.style.transform =  `translateY(${y}px)`;
    requestAnimationFrame(animate);
}

animate();