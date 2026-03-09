/* ============================================
   ZONE 2 - Rule of Law Laboratory
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // MODULE 2.1 - Power Control Simulation
    // ==========================================
    const sliders = document.querySelectorAll('.sim-slider');

    function updateSimulation() {
        const values = {};
        sliders.forEach(s => {
            const val = parseInt(s.value);
            values[s.dataset.var] = val;
            s.nextElementSibling.textContent = val;
        });

        const avg = (values.transparency + values.accountability + values.oversight + values.conflict + values.discipline) / 5;

        // Calculate results (inverse for risks, direct for positives)
        const corruption = Math.max(0, Math.min(100, 100 - avg * 0.9 - Math.random() * 5));
        const bribery = Math.max(0, Math.min(100, 100 - avg * 0.85 - Math.random() * 5));
        const trust = Math.max(0, Math.min(100, avg * 0.95 + Math.random() * 5));
        const stability = Math.max(0, Math.min(100, avg * 0.9 + Math.random() * 5));

        // Update meters
        updateMeter('meterCorruption', corruption, true);
        updateMeter('meterBribery', bribery, true);
        updateMeter('meterTrust', trust, false);
        updateMeter('meterStability', stability, false);

        // Update status
        const status = document.getElementById('simStatus');
        const statusIcon = status.querySelector('.status-icon');
        const statusText = status.querySelector('.status-text');

        status.classList.remove('danger', 'safe');

        if (avg >= 70) {
            statusIcon.textContent = '✅';
            statusText.textContent = 'Hệ thống kiểm soát tốt — quyền lực được giám sát chặt chẽ';
            status.classList.add('safe');
        } else if (avg >= 40) {
            statusIcon.textContent = '⚖️';
            statusText.textContent = 'Hệ thống đang ở trạng thái cân bằng — cần duy trì và cải thiện';
        } else {
            statusIcon.textContent = '🚨';
            statusText.textContent = 'CẢNH BÁO: Kiểm soát yếu — nguy cơ tha hóa quyền lực cao!';
            status.classList.add('danger');
        }
    }

    function updateMeter(id, value, isRisk) {
        const meter = document.getElementById(id);
        if (!meter) return;

        const fill = meter.querySelector('.meter-fill');
        const valEl = meter.querySelector('.meter-value');

        fill.style.width = Math.round(value) + '%';
        valEl.textContent = Math.round(value) + '%';

        // Color coding
        fill.classList.remove('good', 'warning');
        if (isRisk) {
            if (value > 60) {
                fill.style.background = 'linear-gradient(90deg, #e53e3e, #c53030)';
            } else if (value > 30) {
                fill.style.background = 'linear-gradient(90deg, #d69e2e, #ed8936)';
            } else {
                fill.style.background = 'linear-gradient(90deg, #38a169, #48bb78)';
            }
        } else {
            if (value > 60) {
                fill.style.background = 'linear-gradient(90deg, #38a169, #48bb78)';
            } else if (value > 30) {
                fill.style.background = 'linear-gradient(90deg, #d69e2e, #ed8936)';
            } else {
                fill.style.background = 'linear-gradient(90deg, #e53e3e, #c53030)';
            }
        }
    }

    sliders.forEach(s => {
        s.addEventListener('input', updateSimulation);
    });

    // Presets
    const presets = {
        strong: { transparency: 90, accountability: 85, oversight: 95, conflict: 80, discipline: 90 },
        weak: { transparency: 15, accountability: 10, oversight: 20, conflict: 15, discipline: 10 },
        balanced: { transparency: 50, accountability: 50, oversight: 50, conflict: 50, discipline: 50 }
    };

    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = presets[btn.dataset.preset];
            if (!preset) return;

            sliders.forEach(s => {
                const key = s.dataset.var;
                if (preset[key] !== undefined) {
                    s.value = preset[key];
                }
            });

            updateSimulation();
        });
    });

    // Info popup
    const infoBtn = document.getElementById('simInfoBtn');
    const infoPopup = document.getElementById('simInfoPopup');

    if (infoBtn && infoPopup) {
        infoBtn.addEventListener('click', () => {
            infoPopup.classList.toggle('show');
        });

        const closePopup = infoPopup.querySelector('.close-popup');
        if (closePopup) {
            closePopup.addEventListener('click', () => {
                infoPopup.classList.remove('show');
            });
        }
    }

    // Initial calculation
    updateSimulation();


    // ==========================================
    // MODULE 2.3 - Evidence Wall
    // ==========================================
    const evidenceData = {
        suythoai: {
            title: '📉 Suy thoái',
            content: `
                <h3>Suy thoái tư tưởng chính trị, đạo đức, lối sống</h3>
                <p><strong>Khái niệm:</strong> Suy thoái là quá trình một bộ phận cán bộ, đảng viên dần xa rời lý tưởng, mất niềm tin, phai nhạt mục tiêu phục vụ nhân dân.</p>
                <p><strong>Mối quan hệ:</strong> Suy thoái là <em>mắt xích đầu tiên</em> trong chuỗi dẫn đến tham nhũng. Khi tư tưởng suy thoái, hành vi sai trái sẽ theo sau.</p>
                <p><strong>Ý nghĩa chương học:</strong> Đây là lý do Tổng Bí thư nhấn mạnh "chống suy thoái là chống cái gốc".</p>
            `
        },
        thahoa: {
            title: '⚠️ Tha hóa quyền lực',
            content: `
                <h3>Tha hóa quyền lực</h3>
                <p><strong>Khái niệm:</strong> Tha hóa quyền lực xảy ra khi người được giao quyền lực biến quyền lực công thành quyền lực tư, phục vụ lợi ích cá nhân.</p>
                <p><strong>Mối quan hệ:</strong> Là hệ quả trực tiếp của suy thoái và là bước tiền đề dẫn đến vụ lợi, tham nhũng.</p>
                <p><strong>Ý nghĩa chương học:</strong> Minh chứng cho sự cần thiết của kiểm soát quyền lực — "nhốt quyền lực vào lồng cơ chế".</p>
            `
        },
        vuloi: {
            title: '💰 Vụ lợi',
            content: `
                <h3>Vụ lợi</h3>
                <p><strong>Khái niệm:</strong> Lợi dụng chức vụ, quyền hạn để thu lợi bất chính cho bản thân hoặc người thân.</p>
                <p><strong>Mối quan hệ:</strong> Vụ lợi là biểu hiện cụ thể của tha hóa quyền lực, là bước chuyển từ suy thoái tư tưởng sang hành vi tham nhũng.</p>
                <p><strong>Ý nghĩa chương học:</strong> Cho thấy tham nhũng không tự nhiên sinh ra mà có quá trình, và mỗi mắt xích đều có thể ngăn chặn.</p>
            `
        },
        thamnhung: {
            title: '🕳️ Tham nhũng',
            content: `
                <h3>Tham nhũng</h3>
                <p><strong>Khái niệm:</strong> Hành vi lạm dụng quyền lực được giao để tư lợi, vi phạm pháp luật, gây thiệt hại cho Nhà nước và nhân dân.</p>
                <p><strong>Mối quan hệ:</strong> Là kết quả cuối cùng của chuỗi suy thoái → tha hóa → vụ lợi. Đồng thời gây ra suy giảm niềm tin và tổn hại pháp quyền.</p>
                <p><strong>Ý nghĩa chương học:</strong> Tham nhũng không phải bản chất mà là hiện tượng — có nguyên nhân, có quá trình, và có thể ngăn chặn.</p>
            `
        },
        niemtin: {
            title: '💔 Suy giảm niềm tin',
            content: `
                <h3>Suy giảm niềm tin xã hội</h3>
                <p><strong>Khái niệm:</strong> Khi tham nhũng lan rộng, nhân dân mất niềm tin vào Đảng, Nhà nước và hệ thống chính trị.</p>
                <p><strong>Mối quan hệ:</strong> Là hệ quả nghiêm trọng của tham nhũng, đồng thời tạo vòng xoáy tiêu cực: mất niềm tin → giảm giám sát → tham nhũng tăng.</p>
                <p><strong>Ý nghĩa chương học:</strong> Đây là lý do chống tham nhũng gắn với bảo vệ chế độ — vì mất niềm tin là mất tất cả.</p>
            `
        },
        pqtn: {
            title: '🏚️ Tổn hại Nhà nước Pháp quyền',
            content: `
                <h3>Tổn hại Nhà nước Pháp quyền</h3>
                <p><strong>Khái niệm:</strong> Khi tham nhũng xói mòn nền tảng pháp luật, pháp quyền trở thành hình thức, luật pháp bị bẻ cong.</p>
                <p><strong>Mối quan hệ:</strong> Là hệ quả tổng hợp của toàn bộ chuỗi suy thoái. Khi pháp quyền bị tổn hại, mọi nỗ lực xây dựng Nhà nước pháp quyền XHCN đều bị đe dọa.</p>
                <p><strong>Ý nghĩa chương học:</strong> Khẳng định mối liên hệ hữu cơ: phòng chống tham nhũng = xây dựng Nhà nước pháp quyền.</p>
            `
        }
    };

    const evidenceModal = document.getElementById('evidenceModal');
    const evidenceModalBody = document.getElementById('evidenceModalBody');

    document.querySelectorAll('.evidence-card').forEach(card => {
        card.addEventListener('click', () => {
            const caseKey = card.dataset.case;
            const data = evidenceData[caseKey];
            if (data && evidenceModalBody && evidenceModal) {
                evidenceModalBody.innerHTML = data.content;
                evidenceModal.classList.add('show');
            }
        });
    });

    // Close modal
    if (evidenceModal) {
        evidenceModal.addEventListener('click', (e) => {
            if (e.target === evidenceModal || e.target.classList.contains('close-modal')) {
                evidenceModal.classList.remove('show');
            }
        });
    }
});

