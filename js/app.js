/* ============================================
   APP - Router & Navigation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();

    // Init scroll animations
    initScrollAnimations();

    // --- ROUTER ---
    function navigate(hash) {
        const sectionId = hash.replace('#', '') || 'home';

        // Hide all sections
        document.querySelectorAll('.section').forEach(s => {
            s.classList.remove('active');
        });

        // Show target section
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');
            AppState.currentSection = sectionId;

            // Re-trigger animations
            target.querySelectorAll('.fade-in-up').forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; // reflow
                el.style.animation = '';
            });
        }

        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });

        // Close mobile menu
        document.getElementById('navLinks').classList.remove('open');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        navigate(location.hash);
    });

    // Initial navigation
    if (location.hash) {
        navigate(location.hash);
    }

    // --- HAMBURGER ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });

    // --- THEME TOGGLE ---
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // --- NAVBAR AUTO-HIDE ON SCROLL ---
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;
    let navHidden = false;
    let hoverZoneActive = false;

    // Hover zone at top of page to reveal navbar
    const hoverZone = document.createElement('div');
    hoverZone.className = 'nav-hover-zone';
    document.body.appendChild(hoverZone);

    hoverZone.addEventListener('mouseenter', () => {
        hoverZoneActive = true;
        navbar.classList.remove('nav-hidden');
    });

    navbar.addEventListener('mouseenter', () => {
        hoverZoneActive = true;
        navbar.classList.remove('nav-hidden');
    });

    navbar.addEventListener('mouseleave', () => {
        hoverZoneActive = false;
        if (navHidden) {
            setTimeout(() => {
                if (!hoverZoneActive && navHidden) {
                    navbar.classList.add('nav-hidden');
                }
            }, 300);
        }
    });

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Add glass effect when scrolled
        if (currentScrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Auto-hide: hide when scrolling down past 200px, show when scrolling up
        if (currentScrollY > 200 && currentScrollY > lastScrollY) {
            navHidden = true;
            if (!hoverZoneActive) {
                navbar.classList.add('nav-hidden');
            }
        } else if (currentScrollY < lastScrollY) {
            navHidden = false;
            navbar.classList.remove('nav-hidden');
        }

        // Always show at top
        if (currentScrollY < 50) {
            navHidden = false;
            navbar.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    });

    // --- ACCORDION ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('open');
        });
    });

    // --- BACK TO TOP ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Textbook lightbox (global scope)
function openTextbook(thumb) {
    const img = thumb.querySelector('img');
    const lightbox = document.getElementById('textbookLightbox');
    const lightboxImg = document.getElementById('textbookLightboxImg');
    if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('show');
    }
}

function closeTextbook() {
    const lightbox = document.getElementById('textbookLightbox');
    if (lightbox) lightbox.classList.remove('show');
}
