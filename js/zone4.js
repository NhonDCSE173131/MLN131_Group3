/* ============================================
   ZONE 4 - Citizen & Choices
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // SCENARIO CAROUSEL
    // ==========================================
    const baseScenarios = [
        {
            id: 1,
            title: 'Câu 1: Đại án Vạn Thịnh Phát và SCB',
            desc: 'Bà Trương Mỹ Lan đã lôi kéo, mua chuộc hàng loạt cán bộ thanh tra, giám sát ngân hàng (điển hình là Đỗ Thị Nhàn nhận hối lộ 5,2 triệu USD) để che giấu sai phạm. Vụ án này cho thấy khi quyền lực của cơ quan thanh tra bị “mua chuộc” và thiếu sự giám sát chéo, đó là biểu hiện của điều gì?',
            correctOption: 'B',
            options: [
                { key: 'A', text: 'A. Đảng đang lãnh đạo tuyệt đối.', profileType: 'avoid', label: 'Hiểu sai bản chất', feedback: 'Không đúng. Đây không phải biểu hiện của lãnh đạo đúng đắn, mà là sự <strong>tha hóa quyền lực</strong> trong khâu thanh tra, giám sát.' },
                { key: 'B', text: 'B. Sự buông lỏng quản lý và lỗ hổng trong cơ chế kiểm soát quyền lực.', profileType: 'active', label: 'Nhận diện đúng cơ chế', feedback: 'Chính xác. Vụ án cho thấy khi cơ quan có chức năng kiểm soát lại bị mua chuộc, đó là dấu hiệu của <strong>buông lỏng quản lý và lỗ hổng trong kiểm soát quyền lực</strong>.' },
                { key: 'C', text: 'C. Sự phối hợp nhịp nhàng giữa doanh nghiệp và nhà nước.', profileType: 'avoid', label: 'Ngụy biện nguy hiểm', feedback: 'Sai. Đây không phải phối hợp hợp pháp mà là <strong>cấu kết, mua chuộc và che giấu sai phạm</strong>.' },
                { key: 'D', text: 'D. Tính ưu việt của hệ thống ngân hàng tư nhân.', profileType: 'avoid', label: 'Đánh tráo vấn đề', feedback: 'Sai trọng tâm. Vấn đề nằm ở <strong>kiểm soát quyền lực bị vô hiệu hóa</strong>, không phải ở việc ca ngợi mô hình ngân hàng tư nhân.' }
            ]
        },
        {
            id: 2,
            title: 'Câu 2: Vụ Việt Á',
            desc: 'Trong vụ Việt Á, Tổng Giám đốc Phan Quốc Việt đã cấu kết với nhiều cán bộ tại Bộ Y tế và Bộ KH&CN để thổi giá kit xét nghiệm, sau đó chi “hoa hồng” hàng trăm tỷ đồng. Việc xử lý cả Bộ trưởng và các lãnh đạo cấp cao trong vụ án này khẳng định quyết tâm nào của Đảng?',
            correctOption: 'B',
            options: [
                { key: 'A', text: 'A. Chỉ xử lý những người trực tiếp đưa tiền, không xử lý người nhận.', profileType: 'avoid', label: 'Bao che một phần', feedback: 'Sai. Phòng, chống tham nhũng không thể chỉ xử lý một phía mà phải xử lý <strong>cả người đưa, người nhận và người lợi dụng quyền lực</strong>.' },
                { key: 'B', text: 'B. Kiên quyết đấu tranh phòng, chống tham nhũng “không có vùng cấm, không có ngoại lệ”.', profileType: 'active', label: 'Hiểu đúng quan điểm PCTN', feedback: 'Đúng. Việc xử lý cán bộ cấp cao cho thấy quyết tâm <strong>“không có vùng cấm, không có ngoại lệ”</strong> trong đấu tranh PCTN.' },
                { key: 'C', text: 'C. Ưu tiên bảo vệ uy tín của ngành Y tế nên sẽ xử lý nội bộ.', profileType: 'passive', label: 'Né xử lý công khai', feedback: 'Sai. Nếu chỉ xử lý nội bộ thì không thể bảo đảm <strong>tính nghiêm minh của pháp luật</strong> và niềm tin của nhân dân.' },
                { key: 'D', text: 'D. Tham nhũng trong đại dịch là lỗi của cơ chế, không phải do cá nhân.', profileType: 'avoid', label: 'Phủ nhận trách nhiệm cá nhân', feedback: 'Không đúng. Cơ chế có thể có kẽ hở, nhưng hành vi tham nhũng vẫn gắn với <strong>trách nhiệm cá nhân cụ thể</strong>.' }
            ]
        },
        {
            id: 3,
            title: 'Câu 3: Dự án “đất vàng” và Tập đoàn Phúc Sơn',
            desc: 'Lãnh đạo một số tỉnh đã nhận những khoản tiền lớn từ Tập đoàn Phúc Sơn để giao các dự án “đất vàng” không qua đấu giá, gây thất thoát tài sản nhà nước. Theo lý luận của Tổng Bí thư Nguyễn Phú Trọng, để ngăn chặn tình trạng này, giải pháp then chốt là gì?',
            correctOption: 'C',
            options: [
                { key: 'A', text: 'A. Cấm các doanh nghiệp tư nhân tham gia dự án nhà nước.', profileType: 'avoid', label: 'Giải pháp cực đoan', feedback: 'Sai. Vấn đề không nằm ở việc có doanh nghiệp tư nhân tham gia hay không, mà ở chỗ <strong>quyền lực và quy trình phân bổ dự án phải được kiểm soát</strong>.' },
                { key: 'B', text: 'B. Xóa bỏ chế độ một đảng lãnh đạo.', profileType: 'avoid', label: 'Lệch khung lý luận', feedback: 'Sai. Câu hỏi đang xét theo khung lý luận về <strong>kiểm soát quyền lực</strong>, không phải thay đổi mô hình chính trị bằng một kết luận giản lược.' },
                { key: 'C', text: 'C. “Nhốt quyền lực vào trong lồng quy chế” bằng các quy định pháp luật chặt chẽ.', profileType: 'active', label: 'Nắm đúng giải pháp then chốt', feedback: 'Chính xác. Muốn ngăn ngừa lợi dụng dự án công để trục lợi, phải <strong>nhốt quyền lực vào lồng cơ chế</strong> bằng pháp luật, đấu giá minh bạch và giám sát chặt chẽ.' },
                { key: 'D', text: 'D. Tăng lương cho cán bộ cao gấp 10 lần hiện tại.', profileType: 'passive', label: 'Giải pháp phiến diện', feedback: 'Sai. Tăng thu nhập có thể hỗ trợ, nhưng không thể thay thế cho <strong>thiết chế kiểm soát quyền lực</strong>.' }
            ]
        },
        {
            id: 4,
            title: 'Câu 4: Sai phạm đấu thầu của AIC',
            desc: 'Nhiều sai phạm trong đấu thầu của Công ty AIC tại các bệnh viện chỉ bị phanh phui sau khi có đơn thư phản ánh và sự vào cuộc quyết liệt của báo chí, quần chúng nhân dân. Điều này thể hiện trách nhiệm nào của công dân trong phòng, chống tham nhũng?',
            correctOption: 'B',
            options: [
                { key: 'A', text: 'A. Công dân chỉ nên đứng ngoài cuộc vì đây là việc của Nhà nước.', profileType: 'avoid', label: 'Thụ động', feedback: 'Sai. Công dân không đứng ngoài mà có quyền và trách nhiệm <strong>giám sát, phản ánh và tố giác</strong> sai phạm.' },
                { key: 'B', text: 'B. Công dân thực hiện quyền giám sát, phát hiện và tố giác hành vi tham nhũng.', profileType: 'active', label: 'Thực hiện đúng trách nhiệm công dân', feedback: 'Đúng. Đây là biểu hiện rõ của trách nhiệm công dân trong <strong>giám sát quyền lực và phát hiện tham nhũng</strong>.' },
                { key: 'C', text: 'C. Công dân có quyền tự ý bắt giữ cán bộ khi nghi ngờ tham nhũng.', profileType: 'passive', label: 'Có phản ứng nhưng sai pháp lý', feedback: 'Sai. Chống tham nhũng phải đi kèm <strong>hành động đúng pháp luật</strong>, không phải tự ý áp dụng biện pháp trái thẩm quyền.' },
                { key: 'D', text: 'D. Công dân chỉ có trách nhiệm đóng thuế, không cần quan tâm đến PCTN.', profileType: 'avoid', label: 'Thu hẹp vai trò công dân', feedback: 'Sai. Công dân còn có vai trò <strong>giám sát, phản biện và lên tiếng</strong> trước các biểu hiện tiêu cực.' }
            ]
        },
        {
            id: 5,
            title: 'Câu 5: Lợi ích phi vật chất qua người thân',
            desc: 'Một cán bộ lãnh đạo không nhận tiền mặt, không nhận nhà đất, nhưng lại để doanh nghiệp chi trả toàn bộ chi phí cho con cái đi du học nước ngoài hoặc sắp xếp cho người thân vào các vị trí “ngồi mát ăn bát vàng”. Đây có được coi là hành vi tham nhũng không?',
            correctOption: 'B',
            options: [
                { key: 'A', text: 'A. Không, vì không có giao dịch tiền mặt trực tiếp cho cán bộ.', profileType: 'avoid', label: 'Hiểu quá hẹp về tham nhũng', feedback: 'Sai. Tham nhũng không chỉ tồn tại dưới dạng tiền mặt trực tiếp, mà còn có thể thông qua <strong>lợi ích gián tiếp</strong>.' },
                { key: 'B', text: 'B. Có, đây là hình thức tham nhũng lợi ích phi vật chất hoặc thông qua người thân.', profileType: 'active', label: 'Nhận diện đúng bản chất', feedback: 'Chính xác. Đây là dạng <strong>trục lợi thông qua người thân hoặc lợi ích phi vật chất</strong>, vẫn thuộc bản chất của hành vi tham nhũng.' },
                { key: 'C', text: 'C. Chỉ là quan hệ giúp đỡ cá nhân thông thường.', profileType: 'avoid', label: 'Bình thường hóa sai phạm', feedback: 'Sai. Khi lợi ích gắn với chức vụ, quyền lực và đổi lấy ưu ái, đó không còn là giúp đỡ cá nhân thông thường.' },
                { key: 'D', text: 'D. Không vi phạm vì pháp luật chỉ xử lý khi thu được tiền mặt.', profileType: 'avoid', label: 'Sai căn cứ pháp lý', feedback: 'Sai. Pháp luật không giới hạn tham nhũng ở tiền mặt; nhiều hành vi <strong>nhận lợi ích khác, qua trung gian hoặc người thân</strong> vẫn bị xử lý.' }
            ]
        }
    ];

    function buildScenarioSet() {
        return shuffleArray(baseScenarios).map(scenario => ({
            ...scenario,
            options: shuffleArray(scenario.options).map(option => ({ ...option }))
        }));
    }

    function getScenarioDisplayTitle(scenario, idx) {
        const cleanTitle = scenario.title.replace(/^Câu\s+\d+:\s*/i, '');
        return `Câu ${idx + 1}: ${cleanTitle}`;
    }

    let scenarios = buildScenarioSet();
    let currentScenario = 0;
    const slideArea = document.getElementById('scenarioSlideArea');
    const counterEl = document.getElementById('scenarioCounter');
    const progressFill = document.getElementById('scenarioProgressFill');

    function renderScenario(idx) {
        if (!slideArea) return;
        const s = scenarios[idx];
        const optionsHTML = s.options.map((opt, i) =>
            `<button class="scenario-option" data-key="${opt.key}" data-type="${opt.profileType}" data-idx="${i}">${opt.text}</button>`
        ).join('');

        slideArea.innerHTML = `
            <div class="scenario-slide" id="scenarioSlide">
                <div class="scenario-title">${getScenarioDisplayTitle(s, idx)}</div>
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
        const opt = scenario.options[Number(btn.dataset.idx)];
        const isCorrect = opt.key === scenario.correctOption;

        // Mark options
        slide.querySelectorAll('.scenario-option').forEach(b => {
            b.disabled = true;
            if (b.dataset.key === scenario.correctOption) b.classList.add('option-correct');
            else if (b === btn && !isCorrect) b.classList.add('option-wrong');
        });

        // Show feedback
        const fbEl = document.getElementById('scenarioFeedback');
        if (fbEl) {
            fbEl.innerHTML = `
                <div class="feedback-verdict ${isCorrect ? 'verdict-correct' : 'verdict-wrong'}">
                    ${isCorrect ? '✅ Đúng!' : `❌ Chưa chính xác — đáp án đúng là ${scenario.correctOption}`}
                </div>
                <p><strong>📌 Phân tích:</strong> ${opt.feedback}</p>
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
        scenarios = buildScenarioSet();

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

