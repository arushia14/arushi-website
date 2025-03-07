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