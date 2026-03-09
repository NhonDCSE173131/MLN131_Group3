/* ============================================
   ZONE 3 - Topic Page (Policy Dossier)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- SIDEBAR SCROLL-SPY ---
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const topicBlocks = document.querySelectorAll('.topic-block');

    function updateSidebar() {
        if (!document.getElementById('zone3').classList.contains('active')) return;

        let current = '';
        topicBlocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top <= 150) current = block.id;
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.block === current) link.classList.add('active');
        });
    }

    window.addEventListener('scroll', updateSidebar);

    // Sidebar click: smooth scroll to block
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.block;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- PILLAR EXPAND/COLLAPSE ---
    document.querySelectorAll('#zone3 .pillar').forEach(pillar => {
        pillar.addEventListener('click', () => {
            pillar.classList.toggle('open');
        });
    });

    // --- EXPANDABLE NOTE ---
    const expandBtn = document.getElementById('expandBlockC');
    const expandBody = document.getElementById('expandBodyC');
    if (expandBtn && expandBody) {
        expandBtn.addEventListener('click', () => {
            expandBody.classList.toggle('show');
            expandBtn.textContent = expandBody.classList.contains('show')
                ? '📖 Ẩn tổng hợp'
                : '📖 Tổng hợp ý nghĩa 4 trụ cột';
        });
    }
});
