/* ===NAVBAR SCROLL=== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ===HAMBURGER MENU=== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
    });
});

/* ===ACTIVE NAV VIA INTERSECTION OBSERVER=== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[data-section="${entry.target.id}"]`);
        if (active) active.classList.add('active');
    }
    });
}, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

/* ===REVEAL ON SCROLL=== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
    }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ===PROCESS LINE FILL=== */
const lineFill = document.getElementById('processLineFill');
if (lineFill) {
    const lineObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        lineFill.classList.add('filled');
        lineObserver.disconnect();
    }
    }, { threshold: 0.3 });
    lineObserver.observe(document.getElementById('cara-kerja'));
}

/* ===PROJECT FILTER=== */
const filterBtns = document.querySelectorAll('.filter-btn');
const proyekCards = document.querySelectorAll('.proyek-card');
const showMoreBtn = document.getElementById('showMoreBtn');
const INITIAL_COUNT = 3;
let isExpanded = false;

function updateCardVisibility() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    let matchCount = 0;

    proyekCards.forEach((card) => {
        const cat = card.dataset.category;
        const matchesFilter = activeFilter === 'all' || cat === activeFilter;

        if (!matchesFilter) {
            card.style.display = 'none';
            return;
        }

        if (isExpanded) {
            card.style.display = '';
        } else {
            card.style.display = matchCount < INITIAL_COUNT ? '' : 'none';
        }
        card.classList.add('visible');
        matchCount++;
    });

    updateButtonState();
}

function updateButtonState() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const totalMatch = Array.from(proyekCards).filter(card => {
        const cat = card.dataset.category;
        return activeFilter === 'all' || cat === activeFilter;
    }).length;

    if (totalMatch <= INITIAL_COUNT) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = '';
        showMoreBtn.textContent = isExpanded ? 'Sembunyikan' : 'Lihat proyek lainnya';
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateCardVisibility();
    });
});

showMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateCardVisibility();
});

updateCardVisibility();

/* ===SMOOTH SCROLL JS FALLBACK=== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    });
});