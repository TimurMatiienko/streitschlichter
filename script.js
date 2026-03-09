const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearSpan = document.getElementById('jahr');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('open');
        });
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.main-nav a[href="#${id}"]`);
            if (navLink) {
                navLink.classList.toggle('active', entry.isIntersecting);
            }
        });
    }, {
        threshold: 0.6
    });

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
