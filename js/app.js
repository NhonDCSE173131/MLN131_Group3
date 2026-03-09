/* ============================================
   APP - Router & Navigation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();

    // Init scroll animations
    initScrollAnimations();

    // --- NAV INDICATOR ---
    const navIndicator = document.getElementById('navIndicator');
    const navLinksContainer = document.getElementById('navLinks');

    function moveIndicator() {
        const activeLink = navLinksContainer.querySelector('.nav-link.active');
        if (!activeLink || !navIndicator) return;
        // Only show indicator on desktop
        if (window.innerWidth <= 768) {
            navIndicator.style.opacity = '0';
            return;
        }
        const containerRect = navLinksContainer.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        navIndicator.style.left = (linkRect.left - containerRect.left) + 'px';
        navIndicator.style.width = linkRect.width + 'px';
        navIndicator.style.opacity = '1';
    }

    // Initial position (no transition on first load)
    setTimeout(() => {
        navIndicator.style.transition = 'none';
        moveIndicator();
        // Re-enable transition after positioning
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                navIndicator.style.transition = '';
            });
        });
    }, 100);

    window.addEventListener('resize', moveIndicator);

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

        // Slide indicator to active tab
        moveIndicator();

        // Close mobile menu
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('hamburger').classList.remove('active');

        // Update page dots (mobile)
        document.querySelectorAll('.swipe-dot').forEach(dot => {
            dot.classList.toggle('active', dot.dataset.section === sectionId);
        });

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

    // Close menu on mobile when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // --- THEME TOGGLE ---
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = 'light_mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
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

    // --- SWIPE HINT TOAST (show once on mobile) ---
    if (window.innerWidth <= 768 && !sessionStorage.getItem('swipeHintShown')) {
        const toast = document.getElementById('swipeHintToast');
        if (toast) {
            setTimeout(() => {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 3500);
            }, 1200);
            sessionStorage.setItem('swipeHintShown', '1');
        }
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

// ============================================
//  SWIPE TO NAVIGATE (mobile only)
// ============================================
(function initSwipeNav() {
    const SECTIONS = ['home', 'zone1', 'zone2', 'zone3', 'zone4', 'ai'];
    const SWIPE_THRESHOLD = 60;   // px minimum horizontal swipe distance
    const SWIPE_MAX_VERT = 80;    // px max vertical drift allowed
    const VELOCITY_MIN = 0.3;     // px/ms — ignore very slow lazy drags

    let touchStartX = 0, touchStartY = 0, touchStartTime = 0;

    document.addEventListener('touchstart', (e) => {
        // Only activate on mobile widths
        if (window.innerWidth > 768) return;
        const t = e.touches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        if (window.innerWidth > 768) return;

        // Ignore if a drag-and-drop game element is being used
        if (e.target.closest('.spectrum-zone, .drop-zone, .classify-item, .spectrum-item')) return;
        // Ignore if inside the nav menu
        if (e.target.closest('#navLinks')) return;

        const t = e.changedTouches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        const dt = Date.now() - touchStartTime;
        const velocity = Math.abs(dx) / dt;

        if (Math.abs(dx) < SWIPE_THRESHOLD) return;
        if (Math.abs(dy) > SWIPE_MAX_VERT) return;
        if (velocity < VELOCITY_MIN) return;

        const current = AppState.currentSection || 'home';
        const idx = SECTIONS.indexOf(current);
        if (idx === -1) return;

        let nextIdx;
        if (dx < 0) {
            // Swipe left → next page
            nextIdx = Math.min(idx + 1, SECTIONS.length - 1);
        } else {
            // Swipe right → previous page
            nextIdx = Math.max(idx - 1, 0);
        }

        if (nextIdx !== idx) {
            location.hash = '#' + SECTIONS[nextIdx];
        }
    }, { passive: true });
})();

