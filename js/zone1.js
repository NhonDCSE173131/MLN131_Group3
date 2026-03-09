/* ============================================
   ZONE 1 - Knowledge Map
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // --- CONCEPT CARDS (Left Panel) ---
    document.querySelectorAll('.concept-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('open');
        });
    });

    // --- KNOWLEDGE MAP NODES ---
    const moduleMap = {
        'kmNode1': 'module1',
        'kmNode2': 'module2',
        'kmNode3': 'module3',
        'kmNode4': 'module4'
    };

    document.querySelectorAll('.km-node').forEach(node => {
        node.addEventListener('click', () => {
            const moduleId = moduleMap[node.id];
            if (moduleId) {
                const panel = document.getElementById(moduleId);
                if (panel) {
                    const isOpen = panel.classList.contains('open');

                    if (!isOpen) {
                        // Open and scroll into view
                        panel.classList.add('open');
                        node.classList.add('active');

                        // Track exploration
                        const modNum = panel.dataset.module;
                        AppState.zone1Explored.add(modNum);
                        updateZ1Progress();

                        // Smooth scroll to the panel
                        setTimeout(() => {
                            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    } else {
                        // Close — stay in place, don't scroll
                        panel.classList.remove('open');
                        node.classList.remove('active');
                    }
                }
            }
        });
    });

    // --- MODULE PANELS ---
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', () => {
            const panel = header.parentElement;
            panel.classList.toggle('open');

            // Track exploration
            if (panel.classList.contains('open')) {
                const modNum = panel.dataset.module;
                AppState.zone1Explored.add(modNum);
                updateZ1Progress();

                // Also activate corresponding km-node
                const nodeId = 'kmNode' + modNum;
                const kmNode = document.getElementById(nodeId);
                if (kmNode) kmNode.classList.add('active');
            } else {
                // Deactivate km-node
                const modNum = panel.dataset.module;
                const nodeId = 'kmNode' + modNum;
                const kmNode = document.getElementById(nodeId);
                if (kmNode) kmNode.classList.remove('active');
            }
        });
    });

    function updateZ1Progress() {
        const count = AppState.zone1Explored.size;
        const fill = document.getElementById('z1ProgressFill');
        const text = document.getElementById('z1ProgressText');
        if (fill) fill.style.width = (count / 4 * 100) + '%';
        if (text) text.textContent = count + '/4 nội dung đã khám phá';
    }

    // --- RELATION TAGS ---
    document.querySelectorAll('.relation-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            // Toggle tooltip visibility on click (for mobile)
            tag.classList.toggle('show-tooltip');
        });
    });
});

