// Smooth cursor movement
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Add hover effect for all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('expanded');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('expanded');
    });
});

// Keep existing click animation
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

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add cursor-following gradient effect
document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
});

// Reset gradient position when mouse leaves
document.querySelector('.hero').addEventListener('mouseleave', (e) => {
    e.currentTarget.style.setProperty('--mouse-x', '50%');
    e.currentTarget.style.setProperty('--mouse-y', '50%');
});

// Add current year to footer
document.getElementById('year').textContent = new Date().getFullYear();