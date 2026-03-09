/* ============================================
   PRESENTATION TOUR
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Tour step navigation
    document.querySelectorAll('.tour-go').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = btn.dataset.target;
            if (target) {
                // Switch to tour mode
                AppState.mode = 'tour';
                const modeTour = document.getElementById('modeTour');
                const modeExplore = document.getElementById('modeExplore');
                if (modeTour) modeTour.classList.add('active');
                if (modeExplore) modeExplore.classList.remove('active');

                // Navigate
                location.hash = '#' + target;

                // Mark step as visited
                const step = btn.closest('.tour-step');
                if (step) {
                    step.style.borderColor = '#38a169';
                    step.querySelector('.tour-step-num').style.background = 'linear-gradient(135deg, #38a169, #48bb78)';
                }
            }
        });
    });
});

