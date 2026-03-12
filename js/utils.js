/* ============================================
   UTILITIES
   ============================================ */

// Shuffle array
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Create element helper
function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

// Animate on scroll using IntersectionObserver
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Generate hero particles
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 6 + 2;
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
            animation-duration: ${Math.random() * 8 + 6}s;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(p);
    }
}

// Drag and Drop helpers
function makeDraggable(element) {
    element.setAttribute('draggable', 'true');

    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', element.dataset.id || element.textContent);
        element.classList.add('dragging');
        setTimeout(() => element.style.opacity = '0.5', 0);
    });

    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
        element.style.opacity = '1';
    });

    // Touch support
    let touchStartX, touchStartY;
    element.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        element.classList.add('dragging');
    }, { passive: true });

    element.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        element.style.position = 'fixed';
        element.style.zIndex = '9999';
        element.style.left = (touch.clientX - element.offsetWidth / 2) + 'px';
        element.style.top = (touch.clientY - element.offsetHeight / 2) + 'px';
    }, { passive: false });

    element.addEventListener('touchend', (e) => {
        element.classList.remove('dragging');
        element.style.position = '';
        element.style.zIndex = '';
        element.style.left = '';
        element.style.top = '';

        const touch = e.changedTouches[0];
        const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        if (dropTarget) {
            const zone = dropTarget.closest('.drop-zone') || dropTarget.closest('.spectrum-zone');
            if (zone) {
                zone.appendChild(element);
                zone.classList.remove('drag-over');
                // Trigger custom event
                const evt = new CustomEvent('itemDropped', { detail: { item: element, zone: zone }});
                document.dispatchEvent(evt);
            }
        }
    });
}

function makeDropZone(zone) {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const dragging = document.querySelector('.dragging');
        if (dragging) {
            zone.appendChild(dragging);
            // Trigger custom event
            const evt = new CustomEvent('itemDropped', { detail: { item: dragging, zone: zone }});
            document.dispatchEvent(evt);
        }
    });
}

// App state
const AppState = {
    currentSection: 'home',
    zone1Explored: new Set(),
    scenarioResults: [],
    spectrumScore: undefined,
    classifierScore: undefined,
    spectrumPlaced: 0,
    classifierPlaced: 0,
    totalClassifierItems: 8,
    totalSpectrumItems: 6,

    updateProgress() {
        // Progress tracking (internal only)
    }
};

