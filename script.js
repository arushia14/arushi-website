const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

document.addEventListener('click', () => {
    cursor.style.animation = 'clickEffect 0.3s ease';
    setTimeout(() => {
        cursor.style.animation = '';
    }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero h1');
    
    title.addEventListener('mousemove', (e) => {
        const rect = title.getBoundingClientRect();
        
        // Calculate mouse position in percentage
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        
        // Update background position based on mouse movement
        title.style.backgroundPosition = `${x}% ${y}%`;
    });
});