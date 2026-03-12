/* ============================================
   ZONE 4 - Citizen & Choices
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // SCENARIO CAROUSEL
    // ==========================================
    const scenarios = [
        {
            id: 1, title: 'Tình huống 1: "Bồi dưỡng" để hồ sơ nhanh hơn',
            desc: 'Bạn đi làm thủ tục hành chính. Cán bộ gợi ý: "Em bồi dưỡng chút thì hồ sơ nhanh hơn". Bạn sẽ làm gì?',
            options: [
                { text: '💰 Đưa tiền để xong nhanh', type: 'avoid', label: 'Thỏa hiệp' },
                { text: '🤷 Im lặng bỏ đi', type: 'passive', label: 'Né tránh' },
                { text: '📝 Từ chối, phản ánh đường dây nóng', type: 'active', label: 'Hành động pháp lý' }
            ],
            correctType: 'active',
            feedback: {
                avoid: 'Đưa tiền = dung dưỡng <strong>hối lộ</strong>. Bạn có quyền từ chối.',
                passive: 'Im lặng giúp sai phạm tiếp diễn. Công dân có quyền <strong>phản ánh, tố cáo</strong>.',
                active: 'Phản ứng phù hợp nhất. Bạn bảo vệ quyền lợi bản thân và thực hiện <strong>trách nhiệm công dân</strong>.'
            }
        },
        {
            id: 2, title: 'Tình huống 2: Xung đột lợi ích',
            desc: 'Một cán bộ can thiệp phân bổ dự án để ưu ái công ty của người thân. Bạn sẽ làm gì?',
            options: [
                { text: '🙈 Không liên quan đến mình', type: 'avoid', label: 'Né tránh' },
                { text: '🗣️ Khuyên riêng họ dừng', type: 'passive', label: 'Nhận diện nhưng chưa đủ' },
                { text: '📋 Phản ánh cơ quan kiểm tra', type: 'active', label: 'Giám sát pháp lý' }
            ],
            correctType: 'active',
            feedback: {
                avoid: '<strong>Xung đột lợi ích</strong> — thờ ơ là môi trường cho tham nhũng.',
                passive: 'Nhận diện đúng, nhưng giải quyết riêng tư không ngăn hành vi hệ thống.',
                active: 'Phản ánh kênh chính thức = thực hiện quyền <strong>giám sát</strong> công dân.'
            }
        },
        {
            id: 3, title: 'Tình huống 3: Quà tặng công vụ dịp lễ',
            desc: 'Dịp Tết, cơ quan nhận nhiều quà biếu từ đối tác, doanh nghiệp. Bạn sẽ làm gì?',
            options: [
                { text: '🎁 Bình thường, ai cũng vậy', type: 'avoid', label: 'Thỏa hiệp' },
                { text: '🤔 Khó chịu nhưng không nói', type: 'passive', label: 'Im lặng' },
                { text: '📢 Đề xuất công khai quà tặng', type: 'active', label: 'Đề xuất minh bạch' }
            ],
            correctType: 'active',
            feedback: {
                avoid: 'Quà biếu vượt quy định = <strong>hối lộ trá hình</strong>.',
                passive: 'Quà vượt mức phải <strong>kê khai và nộp lại</strong>.',
                active: 'Đề xuất công khai = <strong>xây dựng văn hóa minh bạch</strong>.'
            }
        },
        {
            id: 4, title: 'Tình huống 4: Tài sản tăng bất thường',
            desc: 'Cán bộ trong cơ quan có tài sản tăng bất thường, thu nhập không tương xứng. Bạn sẽ làm gì?',
            options: [
                { text: '🏠 Chắc họ kinh doanh riêng', type: 'avoid', label: 'Biện minh' },
                { text: '💬 Bàn tán với đồng nghiệp', type: 'passive', label: 'Phản ánh không chính thức' },
                { text: '📝 Kiến nghị xác minh tài sản', type: 'active', label: 'Hành động pháp lý' }
            ],
            correctType: 'active',
            feedback: {
                avoid: 'Biện minh hộ = vô tình bảo vệ sai phạm.',
                passive: 'Bàn tán không giải quyết vấn đề. Hãy dùng <strong>kênh chính thức</strong>.',
                active: 'Luật PCTN quy định <strong>kê khai, xác minh tài sản</strong>. Kiến nghị = quyền công dân.'
            }
        },
        {
            id: 5, title: 'Tình huống 5: Sợ bị trù dập khi tố cáo',
            desc: 'Bạn có bằng chứng tham nhũng của cấp trên nhưng lo sợ bị trù dập. Bạn sẽ làm gì?',
            options: [
                { text: '😶 Im lặng vì sợ', type: 'avoid', label: 'Né tránh' },
                { text: '🕵️ Tìm hiểu cơ chế bảo vệ trước', type: 'passive', label: 'Chuẩn bị' },
                { text: '📋 Tố cáo kèm bằng chứng, yêu cầu bảo vệ', type: 'active', label: 'Hành động pháp lý' }
            ],
            correctType: 'active',
            feedback: {
                avoid: 'Im lặng cho phép tham nhũng tiếp diễn. Pháp luật có <strong>cơ chế bảo vệ người tố cáo</strong>.',
                passive: 'Bước đi khôn ngoan! Tìm hiểu <strong>Luật Tố cáo 2018</strong> trước khi hành động.',
                active: 'Phản ứng <strong>dũng cảm và đúng pháp lý</strong>. Điều 47 Luật Tố cáo 2018 bảo vệ người tố cáo.'
            }
        }
    ];

    let currentScenario = 0;
    const slideArea = document.getElementById('scenarioSlideArea');
    const counterEl = document.getElementById('scenarioCounter');
    const progressFill = document.getElementById('scenarioProgressFill');

    function renderScenario(idx) {
        if (!slideArea) return;
        const s = scenarios[idx];
        const optionsHTML = s.options.map((opt, i) =>
            `<button class="scenario-option" data-type="${opt.type}" data-idx="${i}">${opt.text}</button>`
        ).join('');

        slideArea.innerHTML = `
            <div class="scenario-slide" id="scenarioSlide">
                <div class="scenario-title">${s.title}</div>
                <div class="scenario-desc">${s.desc}</div>
                <div class="scenario-options">${optionsHTML}</div>
                <div class="scenario-feedback" id="scenarioFeedback"></div>
                <div class="scenario-nav" id="scenarioNav" style="display:none;">
                    ${idx < scenarios.length - 1
                        ? '<button class="btn btn-primary" id="scenarioNext">Câu tiếp theo →</button>'
                        : '<button class="btn btn-primary" id="scenarioDone">Hoàn thành ✓</button>'}
                </div>
            </div>
        `;

        if (counterEl) counterEl.textContent = `Câu ${idx + 1} / ${scenarios.length}`;
        if (progressFill) progressFill.style.width = ((idx) / scenarios.length * 100) + '%';

        // Bind option clicks
        slideArea.querySelectorAll('.scenario-option').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(s, btn, idx));
        });

        // Bind next
        const nextBtn = document.getElementById('scenarioNext');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentScenario++;
                renderScenario(currentScenario);
            });
        }
        const doneBtn = document.getElementById('scenarioDone');
        if (doneBtn) {
            doneBtn.addEventListener('click', () => {
                if (progressFill) progressFill.style.width = '100%';
                if (counterEl) counterEl.textContent = `Hoàn thành ${scenarios.length} / ${scenarios.length}`;
                // Auto scroll to game 2 (classifier)
                const mod2 = document.getElementById('z4mod2');
                if (mod2) {
                    setTimeout(() => mod2.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
                }
                checkAllComplete();
            });
        }
    }

    function handleAnswer(scenario, btn, idx) {
        const slide = document.getElementById('scenarioSlide');
        if (!slide || slide.classList.contains('answered')) return;
        slide.classList.add('answered');

        const type = btn.dataset.type;
        const opt = scenario.options[btn.dataset.idx];
        const isCorrect = type === scenario.correctType;

        // Mark options
        slide.querySelectorAll('.scenario-option').forEach(b => {
            b.disabled = true;
            if (b.dataset.type === scenario.correctType) b.classList.add('option-correct');
            else if (b === btn && !isCorrect) b.classList.add('option-wrong');
        });

        // Show feedback
        const fbEl = document.getElementById('scenarioFeedback');
        if (fbEl) {
            fbEl.innerHTML = `
                <div class="feedback-verdict ${isCorrect ? 'verdict-correct' : 'verdict-wrong'}">
                    ${isCorrect ? '✅ Đúng!' : '❌ Chưa phải lựa chọn tốt nhất'}
                </div>
                <p><strong>📌 Phân tích:</strong> ${scenario.feedback[type]}</p>
                <p class="feedback-label"><strong>🏷️ Thái độ:</strong> ${opt.label}</p>
            `;
            fbEl.classList.add('show');
        }

        // Show nav
        const navEl = document.getElementById('scenarioNav');
        if (navEl) navEl.style.display = 'flex';

        // Track
        AppState.scenarioResults.push({ id: scenario.id, type, correct: isCorrect });
    }

    if (slideArea) renderScenario(0);

    // ==========================================
    // CLASSIFIER (moved from Zone 2)
    // ==========================================
    const classifierData = [
        { text: 'Có giải trình', correct: 'leader' },
        { text: 'Né tránh kiểm tra', correct: 'loose' },
        { text: 'Công khai minh bạch', correct: 'leader' },
        { text: 'Lợi ích nhóm chen vào lợi ích công', correct: 'loose' },
        { text: 'Xử lý không có ngoại lệ', correct: 'leader' },
        { text: 'Dung túng sai phạm', correct: 'loose' },
        { text: 'Kiểm soát quyền lực', correct: 'leader' },
        { text: 'Giám sát yếu', correct: 'loose' }
    ];

    const classifierContainer = document.getElementById('classifierItems');
    const checkClassifierBtn = document.getElementById('checkClassifier');
    const classifierFeedback = document.getElementById('classifierFeedback');

    if (classifierContainer) {
        shuffleArray(classifierData).forEach((item, idx) => {
            const el = createElement('div', 'classify-item', item.text);
            el.dataset.id = 'cls-' + idx;
            el.dataset.correct = item.correct;
            makeDraggable(el);
            classifierContainer.appendChild(el);
        });
    }

    document.querySelectorAll('#z4mod2 .drop-zone').forEach(zone => makeDropZone(zone));

    let classifierDropCount = 0;
    document.addEventListener('itemDropped', (e) => {
        const { item, zone } = e.detail;
        if (item.classList.contains('classify-item') && zone.classList.contains('drop-zone')) {
            classifierDropCount++;
            if (classifierDropCount >= classifierData.length && checkClassifierBtn) {
                checkClassifierBtn.style.display = 'inline-flex';
            }
        }
    });

    if (checkClassifierBtn) {
        checkClassifierBtn.addEventListener('click', () => {
            let correct = 0;
            const wrongItems = [];

            document.querySelectorAll('.classify-item').forEach(item => {
                const parentZone = item.closest('.drop-zone');
                if (!parentZone) return;
                const target = parentZone.dataset.target;
                const correctTarget = item.dataset.correct;
                if (target === correctTarget) {
                    item.classList.add('correct');
                    item.classList.remove('incorrect');
                    correct++;
                } else {
                    item.classList.add('incorrect');
                    item.classList.remove('correct');
                    wrongItems.push(item.textContent);
                }
            });

            AppState.classifierScore = correct;

            if (classifierFeedback) {
                classifierFeedback.classList.add('show');
                if (correct === classifierData.length) {
                    classifierFeedback.className = 'classifier-feedback show success';
                    classifierFeedback.innerHTML = `<p><strong>🎉 Xuất sắc!</strong> ${correct}/${classifierData.length} đúng. Bạn hiểu rõ ranh giới giữa lãnh đạo và buông lỏng.</p>`;
                } else {
                    classifierFeedback.className = 'classifier-feedback show partial';
                    classifierFeedback.innerHTML = `<p><strong>📝 Kết quả:</strong> ${correct}/${classifierData.length} đúng. Nhầm: ${wrongItems.join(', ')}.</p><p>Có kiểm soát = lãnh đạo, không kiểm soát = buông lỏng.</p>`;
                }
            }

            // Auto scroll to game 3 (spectrum)
            const mod3 = document.getElementById('z4mod3');
            if (mod3) {
                setTimeout(() => mod3.scrollIntoView({ behavior: 'smooth', block: 'start' }), 600);
            }

            checkAllComplete();
        });
    }

    // ==========================================
    // SPECTRUM (Drag & Drop)
    // ==========================================
    const spectrumData = [
        { text: 'Thấy sai nhưng mặc kệ', correct: 0, id: 'sp1' },
        { text: 'Đưa tiền cho xong', correct: 1, id: 'sp2' },
        { text: 'Nhận ra đây là hối lộ', correct: 2, id: 'sp3' },
        { text: 'Báo với đường dây nóng', correct: 3, id: 'sp4' },
        { text: 'Theo dõi, thu thập bằng chứng', correct: 4, id: 'sp5' },
        { text: 'Tố cáo theo quy định pháp luật', correct: 5, id: 'sp6' }
    ];

    const spectrumItemsContainer = document.getElementById('spectrumItems');
    const checkSpectrumBtn = document.getElementById('checkSpectrum');
    const spectrumFeedback = document.getElementById('spectrumFeedback');

    if (spectrumItemsContainer) {
        shuffleArray(spectrumData).forEach(item => {
            const el = createElement('div', 'spectrum-item', item.text);
            el.dataset.id = item.id;
            el.dataset.correct = item.correct;
            makeDraggable(el);
            spectrumItemsContainer.appendChild(el);
        });
    }

    document.querySelectorAll('.spectrum-zone').forEach(zone => makeDropZone(zone));

    let spectrumDropCount = 0;
    document.addEventListener('itemDropped', (e) => {
        const { item, zone } = e.detail;
        if (item.classList.contains('spectrum-item') && zone.classList.contains('spectrum-zone')) {
            spectrumDropCount++;
            if (spectrumDropCount >= spectrumData.length && checkSpectrumBtn) {
                checkSpectrumBtn.style.display = 'inline-flex';
            }
        }
    });

    if (checkSpectrumBtn) {
        checkSpectrumBtn.addEventListener('click', () => {
            let correct = 0;
            document.querySelectorAll('.spectrum-item').forEach(item => {
                const parentZone = item.closest('.spectrum-zone');
                if (!parentZone) return;
                if (parseInt(parentZone.dataset.pos) === parseInt(item.dataset.correct)) {
                    item.classList.add('correct'); item.classList.remove('incorrect'); correct++;
                } else {
                    item.classList.add('incorrect'); item.classList.remove('correct');
                }
            });
            AppState.spectrumScore = correct;
            if (spectrumFeedback) {
                spectrumFeedback.classList.add('show');
                spectrumFeedback.innerHTML = `<p><strong>${correct >= 5 ? '🎉 Xuất sắc!' : correct >= 3 ? '👍 Khá tốt!' : '📝 Cần xem lại!'}</strong> ${correct}/${spectrumData.length} đúng.</p>`;
            }
            checkAllComplete();
        });
    }

    // ==========================================
    // CHECK ALL & GENERATE PROFILE
    // ==========================================
    function checkAllComplete() {
        const scenarioDone = AppState.scenarioResults.length >= scenarios.length;
        const classifierDone = AppState.classifierScore !== undefined;
        const spectrumDone = AppState.spectrumScore !== undefined;
        if (scenarioDone && classifierDone && spectrumDone) generateCitizenProfile();
    }

    function generateCitizenProfile() {
        const profileDiv = document.getElementById('citizenProfile');
        if (!profileDiv) return;

        const results = AppState.scenarioResults;
        const counts = { avoid: 0, passive: 0, active: 0 };
        let scenarioCorrect = 0;
        results.forEach(r => { counts[r.type]++; if (r.correct) scenarioCorrect++; });

        const total = results.length;
        const avoidPct = Math.round((counts.avoid / total) * 100);
        const passivePct = Math.round((counts.passive / total) * 100);
        const activePct = Math.round((counts.active / total) * 100);

        const clsScore = AppState.classifierScore || 0;
        const clsTotal = classifierData.length;
        const specScore = AppState.spectrumScore || 0;
        const specTotal = spectrumData.length;

        const overallScore = Math.round(
            (scenarioCorrect / total * 45) + (clsScore / clsTotal * 30) + (specScore / specTotal * 25)
        );

        let tendency = '', tendencyDesc = '', tendencyColor = '';
        if (counts.active >= 3) {
            tendency = 'Công dân chủ động'; tendencyColor = 'var(--green)';
            tendencyDesc = 'Bạn hành động đúng pháp lý, dũng cảm đối mặt với sai phạm.';
        } else if (counts.passive >= 3) {
            tendency = 'Công dân nhận thức'; tendencyColor = 'var(--gold)';
            tendencyDesc = 'Bạn nhận diện được vấn đề nhưng chưa sẵn sàng hành động.';
        } else if (counts.avoid >= 3) {
            tendency = 'Công dân thụ động'; tendencyColor = 'var(--accent)';
            tendencyDesc = 'Bạn có xu hướng né tránh — vô tình tạo điều kiện cho sai phạm.';
        } else {
            tendency = 'Công dân đang định hình'; tendencyColor = 'var(--primary)';
            tendencyDesc = 'Bạn phản ứng linh hoạt nhưng chưa nhất quán.';
        }

        let stars = overallScore >= 90 ? 5 : overallScore >= 75 ? 4 : overallScore >= 55 ? 3 : overallScore >= 35 ? 2 : 1;

        profileDiv.innerHTML = `
            <div class="profile-result">
                <h4>📋 Hồ sơ Nhận thức Công dân</h4>
                <div class="profile-overall">
                    <div class="profile-overall-score">${overallScore}<span>%</span></div>
                    <div class="profile-overall-stars">${'⭐'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
                    <div class="profile-overall-label">Điểm tổng hợp</div>
                </div>
                <div class="profile-stats">
                    <div class="profile-stat"><div class="stat-label">Xu hướng</div><div class="stat-value" style="color:${tendencyColor}">${tendency}</div></div>
                    <div class="profile-stat"><div class="stat-label">Tình huống đúng</div><div class="stat-value">${scenarioCorrect}/${total}</div></div>
                    <div class="profile-stat"><div class="stat-label">Phân loại đúng</div><div class="stat-value">${clsScore}/${clsTotal}</div></div>
                    <div class="profile-stat"><div class="stat-label">Xếp phổ đúng</div><div class="stat-value">${specScore}/${specTotal}</div></div>
                </div>
                <div class="profile-bars">
                    <div class="profile-bar-item"><span class="bar-label">Né tránh</span><div class="bar-track"><div class="bar-fill bar-red" style="width:${avoidPct}%"></div></div><span class="bar-val">${avoidPct}%</span></div>
                    <div class="profile-bar-item"><span class="bar-label">Nhận diện</span><div class="bar-track"><div class="bar-fill bar-yellow" style="width:${passivePct}%"></div></div><span class="bar-val">${passivePct}%</span></div>
                    <div class="profile-bar-item"><span class="bar-label">Hành động</span><div class="bar-track"><div class="bar-fill bar-green" style="width:${activePct}%"></div></div><span class="bar-val">${activePct}%</span></div>
                </div>
                <div class="profile-summary">
                    <p><strong>📝 Nhận xét:</strong> ${tendencyDesc}</p>
                    <p><strong>🎯 Đề xuất:</strong> ${overallScore >= 75 ? 'Bạn có nền tảng tốt. Duy trì thái độ giám sát.' : overallScore >= 50 ? 'Bạn đang hình thành thái độ tích cực. Hãy kiên quyết hơn.' : 'Hãy đọc lại phần Hồ sơ chương học, đặc biệt mục Trách nhiệm công dân.'}</p>
                </div>
                <div class="profile-retry-wrap">
                    <button class="btn btn-retry" id="retryZone4">
                        <span class="material-symbols-rounded btn-icon">replay</span> Thử lại từ đầu
                    </button>
                </div>
            </div>
        `;
        profileDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Bind retry button
        const retryBtn = document.getElementById('retryZone4');
        if (retryBtn) retryBtn.addEventListener('click', resetZone4);
    }

    // ==========================================
    // RESET / RETRY ZONE 4
    // ==========================================
    function resetZone4() {
        // Reset AppState
        AppState.scenarioResults = [];
        AppState.classifierScore = undefined;
        AppState.spectrumScore = undefined;
        currentScenario = 0;
        classifierDropCount = 0;
        spectrumDropCount = 0;

        // ---- Reset Game 1: Scenario carousel ----
        if (counterEl) counterEl.textContent = `Câu 1 / ${scenarios.length}`;
        if (progressFill) progressFill.style.width = '0%';
        renderScenario(0);

        // ---- Reset Game 2: Classifier ----
        if (classifierContainer) {
            classifierContainer.innerHTML = '';
            shuffleArray([...classifierData]).forEach((item, idx) => {
                const el = createElement('div', 'classify-item', item.text);
                el.dataset.id = 'cls-' + idx;
                el.dataset.correct = item.correct;
                makeDraggable(el);
                classifierContainer.appendChild(el);
            });
        }
        // Clear drop zones for classifier
        document.querySelectorAll('#z4mod2 .drop-zone').forEach(zone => {
            zone.innerHTML = '';
            makeDropZone(zone);
        });
        if (checkClassifierBtn) checkClassifierBtn.style.display = 'none';
        if (classifierFeedback) {
            classifierFeedback.className = 'classifier-feedback';
            classifierFeedback.innerHTML = '';
        }

        // ---- Reset Game 3: Spectrum ----
        if (spectrumItemsContainer) {
            spectrumItemsContainer.innerHTML = '';
            shuffleArray([...spectrumData]).forEach(item => {
                const el = createElement('div', 'spectrum-item', item.text);
                el.dataset.id = item.id;
                el.dataset.correct = item.correct;
                makeDraggable(el);
                spectrumItemsContainer.appendChild(el);
            });
        }
        // Clear spectrum drop zones
        document.querySelectorAll('.spectrum-zone').forEach(zone => {
            zone.innerHTML = '';
            makeDropZone(zone);
        });
        if (checkSpectrumBtn) checkSpectrumBtn.style.display = 'none';
        if (spectrumFeedback) {
            spectrumFeedback.classList.remove('show');
            spectrumFeedback.innerHTML = '';
        }

        // ---- Reset Profile ----
        const profileDiv = document.getElementById('citizenProfile');
        if (profileDiv) {
            profileDiv.innerHTML = `
                <div class="profile-placeholder">
                    <p><span class="material-symbols-rounded inline-icon">lock</span> Hoàn thành tình huống thực tế và phân loại ở trên để xem hồ sơ công dân của bạn</p>
                </div>
            `;
        }

        // Scroll back to top of zone 4 game 1
        const mod1 = document.getElementById('z4mod1');
        if (mod1) setTimeout(() => mod1.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
});

