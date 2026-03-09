# copilot_page_mapping.md

Mục đích của file này là giúp GitHub Copilot ghép **layout + assets + nội dung** của toàn bộ web sao cho **khớp với trang “Chủ đề tranh luận”** trong `topic_page_spec.md`.

> Nguyên tắc chung:
> - Web là **web tài liệu học tập sáng tạo**.
> - Trang **Chủ đề tranh luận** là **một chuyên mục học thuật** nằm trong web, không phải một tour click-show.
> - Không dùng poll, slider, verdict cá nhân hóa ở trang chủ đề.
> - Nội dung phải bám đúng kịch bản thuyết trình và logic tranh luận.

---

## 1. Cấu trúc route / section nên dùng

Có 2 cách dựng đều ổn:

### Cách A — One-page nhiều section
- `/` = toàn bộ web
- section id:
  - `#home`
  - `#chapter-dossier`
  - `#visual-library`
  - `#debate-topic`
  - `#citizen-cases`
  - `#ai-usage`

### Cách B — Multi-page nhẹ
- `/` = trang chủ
- `/ho-so-chuong-hoc`
- `/thu-vien-truc-quan`
- `/chu-de-tranh-luan`
- `/cong-dan-va-tinh-huong`
- `/ai-usage`

**Khuyến nghị:**
- Nếu thời gian code ít: dùng **Cách A**.
- Nếu muốn gọn điều hướng và dễ trình bày: dùng **Cách B**.

Để **fit với `topic_page_spec.md`**, route tốt nhất là:
- `/chu-de-tranh-luan`

---

## 2. Thư mục assets giả định

Nếu bạn chép bundle vào project, giả định public path là:

```text
/public/assets/images/...
```

hoặc trong Next.js/Vite có thể dùng trực tiếp:

```text
/assets/images/...
```

Các path dưới đây sẽ viết theo dạng:

```text
/assets/images/...
```

Nếu project dùng `public/`, chỉ cần map sang đúng public path.

---

## 3. Mapping tổng thể giữa các trang và assets

| Trang / Khu | Hero / visual chính | Visual phụ | Ghi chú |
|---|---|---|---|
| Trang chủ | `/assets/images/svg/hero_power_integrity_map.svg` | `/assets/images/quochoi_vietnam_2018.jpg` | Trang chủ phải tạo cảm giác web tài liệu, không phải slide |
| Hồ sơ chương học | `/assets/images/svg/chapter_map_ch4.svg` | `/assets/images/textbook/textbook_chapter_intro_crop.png`, `/assets/images/textbook/textbook_rule_of_law_crop.png`, `/assets/images/svg/rule_of_law_features.svg`, `/assets/images/svg/four_pillars_nguyen_phu_trong.svg` | Nên dùng card + concept map |
| Thư viện trực quan | `/assets/images/svg/integrity_chain_cause_effect.svg` | `/assets/images/svg/timeline_institutions.svg`, `/assets/images/textbook/textbook_anti_corruption_crop.png`, `/assets/images/toa_dam_nxbctqg_2023.jpg` | Khu này thiên visual documentation |
| Chủ đề tranh luận | `/assets/images/svg/debate_room_cover.svg` | `/assets/images/book_nguyen_phu_trong_cover.jpg`, `/assets/images/toa_dam_ban_noi_chinh_2024.jpg`, `/assets/images/svg/leadership_vs_looseness.svg`, `/assets/images/textbook/textbook_anti_corruption_crop.png`, `/assets/images/textbook/textbook_citizen_responsibility_crop.png` | Đây là trang phải khớp chặt với kịch bản thuyết trình |
| Công dân và tình huống | `/assets/images/svg/citizen_responsibility_ladder.svg` | `/assets/images/svg/case_bo_duong.svg`, `/assets/images/svg/case_xung_dot_loi_ich.svg`, `/assets/images/svg/case_qua_tang_cong_vu.svg`, `/assets/images/svg/case_tai_san_bat_thuong.svg`, `/assets/images/svg/case_to_giac_tru_dap.svg`, `/assets/images/ban_thanh_tra_nhan_dan_2023.png` | Nên làm dạng case wall |
| AI Usage & Nguồn | `/assets/images/svg/source_panel.svg` | không cần ảnh thật lớn | Nên tối giản, rõ ràng |

---

## 4. Mapping chi tiết cho từng trang chính

# 4.1 Trang chủ

## Mục tiêu
- Cho người xem hiểu đây là **web học tập số**.
- Không đẩy ngay vào tranh luận.
- Có đường link nổi bật sang trang `Chủ đề tranh luận`.

## Hero layout
- Trái: title + subtitle + 2 CTA
- Phải: visual trung tâm

## Assets nên dùng
- Hero visual chính:
  - `/assets/images/svg/hero_power_integrity_map.svg`
- Ảnh nền phụ hoặc dưới hero:
  - `/assets/images/quochoi_vietnam_2018.jpg`

## CTA
- `Khám phá nội dung chương`
- `Mở chủ đề tranh luận`

## Liên kết bắt buộc sang trang chủ đề
- Nút `Mở chủ đề tranh luận` phải dẫn thẳng đến:
  - `/#debate-topic` hoặc
  - `/chu-de-tranh-luan`

---

# 4.2 Hồ sơ chương học

## Mục tiêu
- Làm rõ web bám đúng nội dung chương học.
- Tạo nền học thuật trước khi người dùng sang khu tranh luận.

## Hero / header của khu
- Background mềm:
  - `/assets/images/svg/section_bg_hosochuong.svg`
- Sơ đồ trung tâm:
  - `/assets/images/svg/chapter_map_ch4.svg`

## Các block nên có và ảnh tương ứng

### Block A — Bản đồ chương
- Asset chính:
  - `/assets/images/svg/chapter_map_ch4.svg`

### Block B — Trích ý từ giáo trình
- Dùng crop để làm bằng chứng học thuật:
  - `/assets/images/textbook/textbook_chapter_intro_crop.png`
  - `/assets/images/textbook/textbook_rule_of_law_crop.png`
  - `/assets/images/textbook/textbook_democracy_monitoring_crop.png`
  - `/assets/images/textbook/textbook_anti_corruption_crop.png`
  - `/assets/images/textbook/textbook_citizen_responsibility_crop.png`

### Block C — 4 trụ quan điểm
- Asset chính:
  - `/assets/images/svg/four_pillars_nguyen_phu_trong.svg`
- Có thể thêm ảnh thật bên cạnh:
  - `/assets/images/book_nguyen_phu_trong_cover.jpg`

### Block D — Đặc trưng Nhà nước pháp quyền
- Asset:
  - `/assets/images/svg/rule_of_law_features.svg`

## Cách nối sang trang chủ đề
Cuối khu này nên có 1 block chuyển tiếp:
- title: `Từ nội dung chương học đến câu hỏi tranh luận`
- button: `Mở hồ sơ tranh luận`
- button dẫn sang `/chu-de-tranh-luan`

---

# 4.3 Thư viện trực quan

## Mục tiêu
- Cho thấy web có tính sáng tạo, trực quan hóa lý thuyết.
- Tạo nền visual để khi sang trang chủ đề không bị đột ngột.

## Background section
- `/assets/images/svg/section_bg_visual.svg`

## Các block nên có và assets tương ứng

### Block A — Chuỗi nguyên nhân – hệ quả
- `/assets/images/svg/integrity_chain_cause_effect.svg`

### Block B — Timeline thể chế
- `/assets/images/svg/timeline_institutions.svg`

### Block C — Ảnh tư liệu / tọa đàm / bìa sách
- `/assets/images/toa_dam_nxbctqg_2023.jpg`
- `/assets/images/book_nguyen_phu_trong_cover.jpg`
- `/assets/images/toa_dam_ban_noi_chinh_2024.jpg`

### Block D — Gallery giáo trình
- `/assets/images/textbook/giao_trinh_page_82.png`
- `/assets/images/textbook/giao_trinh_page_83.png`
- `/assets/images/textbook/giao_trinh_page_84.png`
- `/assets/images/textbook/giao_trinh_page_85.png`
- `/assets/images/textbook/giao_trinh_page_87.png`

## Cách nối sang trang chủ đề
Ở cuối khu này đặt 1 CTA card:
- title: `Lý thuyết đi đến đâu khi gặp một câu hỏi gây tranh cãi?`
- button: `Chuyển sang Chủ đề tranh luận`

---

# 4.4 Trang “Chủ đề tranh luận” — trang quan trọng nhất

> Trang này phải **khớp trực tiếp với `topic_page_spec.md`**.
> Đây là **hồ sơ tranh luận học thuật**, không phải chế độ trình chiếu.

## Route đề xuất
- `/chu-de-tranh-luan`

## Background
- `/assets/images/svg/section_bg_debate.svg`

## Hero của trang chủ đề

### Bố cục
- Trái: title + subtitle + abstract ngắn
- Phải: visual hero của debate room

### Assets
- Hero chính:
  - `/assets/images/svg/debate_room_cover.svg`
- Ảnh phụ nếu muốn thêm chiều sâu:
  - `/assets/images/toa_dam_ban_noi_chinh_2024.jpg`

## Mapping section-by-section của trang chủ đề

### Section 1 — Mở vấn đề
**Nội dung nguồn:** từ `topic_page_spec.md` mục mở hồ sơ tranh luận

**Asset nên dùng:**
- `/assets/images/svg/debate_room_cover.svg`

**Layout gợi ý:**
- H1 lớn
- 1 abstract 3–4 dòng
- 1 quote block nhỏ

**Không dùng:**
- poll
- CTA tương tác kiểu game

---

### Section 2 — Nhận định bề mặt
**Mục tiêu:** giải thích vì sao nhận định “một Đảng đẻ ra tham nhũng” nghe có vẻ đúng.

**Asset nên dùng:**
- nền phụ hoặc minh họa góc phải:
  - `/assets/images/quochoi_vietnam_2018.jpg`

**Cách dựng:**
- 3 argument cards
- mỗi card có icon hoặc số thứ tự
- click mở thêm 1 đoạn giải thích ngắn nếu muốn

**Lưu ý:**
- vẫn phải đọc như hồ sơ tranh luận, không như quiz

---

### Section 3 — Khung lý luận phản biện
**Mục tiêu:** đưa 4 trụ lý luận để phản biện nhận định bề mặt.

**Assets phù hợp nhất:**
- `/assets/images/svg/four_pillars_nguyen_phu_trong.svg`
- `/assets/images/book_nguyen_phu_trong_cover.jpg`

**Layout gợi ý:**
- trái: 4 cards hoặc 4 pillars
- phải: ảnh bìa sách + note học thuật

**Cần fit với `topic_page_spec.md`:**
- card 1: xây dựng, chỉnh đốn Đảng
- card 2: kiểm soát quyền lực
- card 3: không có vùng cấm
- card 4: chống suy thoái là chống cái gốc

---

### Section 4 — Ranh giới giữa lãnh đạo và buông lỏng
**Mục tiêu:** trả lời câu hỏi trọng tâm nhất của đề.

**Assets:**
- `/assets/images/svg/leadership_vs_looseness.svg`

**Layout:**
- bảng 2 cột hoặc split layout
- trái = Đảng lãnh đạo
- phải = Đảng buông lỏng

**Lưu ý:**
- section này phải rõ, sắc, rất dễ nói khi thuyết trình
- không biến thành kéo-thả

---

### Section 5 — Trục bản lề: quyền lực và tham nhũng
**Mục tiêu:** chốt logic quyền lực thiếu kiểm soát → tha hóa → tham nhũng.

**Assets:**
- `/assets/images/svg/integrity_chain_cause_effect.svg`
- có thể thêm crop giáo trình:
  - `/assets/images/textbook/textbook_anti_corruption_crop.png`

**Layout:**
- visual chain ở giữa
- caption ngắn 2 bên

---

### Section 6 — Kết luận học thuật
**Mục tiêu:** chốt đúng như kịch bản nói.

**Assets nên dùng:**
- `/assets/images/toa_dam_ban_noi_chinh_2024.jpg`
  hoặc
- `/assets/images/toa_dam_nxbctqg_2023.jpg`

**Layout:**
- quote block lớn
- dưới là 1 đoạn kết luận 5–7 dòng

**Lưu ý:**
- section này nên có visual trang trọng, ít chi tiết gây rối

---

### Section 7 — Tài liệu liên quan ở cuối trang chủ đề
**Mục tiêu:** để giảng viên thấy trang này có nền tài liệu rõ ràng.

**Assets:**
- `/assets/images/svg/source_panel.svg`

**Nội dung:**
- danh sách bài viết chính thống
- giáo trình
- sách
- link nguồn

---

# 4.5 Công dân và tình huống

## Mục tiêu
- Khu này không phải phần chính của tranh luận, nhưng phải nối tốt với kết luận của trang chủ đề.

## Background
- `/assets/images/svg/section_bg_citizen.svg`

## Hero của khu
- `/assets/images/svg/citizen_responsibility_ladder.svg`

## Mapping case-by-case

### Case 1 — “Bồi dưỡng”
- `/assets/images/svg/case_bo_duong.svg`

### Case 2 — Xung đột lợi ích
- `/assets/images/svg/case_xung_dot_loi_ich.svg`

### Case 3 — Quà tặng công vụ
- `/assets/images/svg/case_qua_tang_cong_vu.svg`

### Case 4 — Tài sản bất thường
- `/assets/images/svg/case_tai_san_bat_thuong.svg`

### Case 5 — Tố giác và sợ bị trù dập
- `/assets/images/svg/case_to_giac_tru_dap.svg`

### Ảnh thật bổ sung
- `/assets/images/ban_thanh_tra_nhan_dan_2023.png`

## Cách nối với trang chủ đề
Ở đầu khu này nên có 1 đoạn:
- `Nếu trang Chủ đề tranh luận trả lời câu hỏi về bản chất của tham nhũng và quyền lực, thì khu này trả lời câu hỏi: công dân phải làm gì trong thực tế?`

---

# 4.6 AI Usage & Nguồn

## Mục tiêu
- Ăn điểm rubric về minh bạch AI và liêm chính học thuật.

## Assets
- `/assets/images/svg/source_panel.svg`

## Layout
- Accordion 3 phần:
  - AI Usage
  - Cam kết liêm chính
  - Nguồn chính thống

## Gợi ý vị trí
- Có thể đặt ở cuối web
- hoặc thành route riêng `/ai-usage`

---

## 5. Mapping giữa trang chủ đề và kịch bản thuyết trình

> Đây là phần quan trọng để Copilot ghép layout không lệch khỏi bài nói.

| Kịch bản thuyết trình | Section trên trang Chủ đề tranh luận | Asset nên thấy trên màn hình |
|---|---|---|
| Mở đầu: nêu câu hỏi | Section 1 — Mở vấn đề | `/assets/images/svg/debate_room_cover.svg` |
| Vì sao nhận định nghe có vẻ đúng | Section 2 — Nhận định bề mặt | `/assets/images/quochoi_vietnam_2018.jpg` |
| Quan điểm của Tổng Bí thư Nguyễn Phú Trọng | Section 3 — Khung lý luận phản biện | `/assets/images/svg/four_pillars_nguyen_phu_trong.svg`, `/assets/images/book_nguyen_phu_trong_cover.jpg` |
| Quyền lực và nguy cơ tham nhũng | Section 5 — Trục bản lề | `/assets/images/svg/integrity_chain_cause_effect.svg` |
| Ranh giới giữa lãnh đạo và buông lỏng | Section 4 — Bảng đối chiếu | `/assets/images/svg/leadership_vs_looseness.svg` |
| Kết luận: tham nhũng không phải bản chất của Đảng | Section 6 — Kết luận học thuật | `/assets/images/toa_dam_ban_noi_chinh_2024.jpg` hoặc `/assets/images/toa_dam_nxbctqg_2023.jpg` |
| Nối sang trách nhiệm công dân | Link xuống Khu 4 | `/assets/images/svg/citizen_responsibility_ladder.svg` |

---

## 6. Thứ tự ưu tiên dựng code để fit nhanh với trang chủ đề

### Ưu tiên 1
Dựng hoàn chỉnh route `/chu-de-tranh-luan` trước.

### Ưu tiên 2
Đảm bảo các section sau đủ đẹp và chắc:
1. Hero debate
2. Nhận định bề mặt
3. 4 trụ lý luận
4. Bảng lãnh đạo / buông lỏng
5. Chuỗi quyền lực → tham nhũng
6. Kết luận

### Ưu tiên 3
Sau khi trang chủ đề chạy ổn mới fit ngược lại các trang còn lại.

Lý do:
- đây là trang bạn dùng để trình bày trực tiếp
- các trang khác có thể mềm hơn, nhưng trang này phải chắc nhất

---

## 7. Quy tắc trình bày để tránh cảm giác “tự khám phá” khi thuyết trình

Copilot cần giữ các quy tắc sau cho trang chủ đề:

- không poll
- không quiz
- không slider
- không drag-drop
- không verdict cá nhân hóa
- không CTA kiểu game hóa

Chỉ dùng:
- section rõ ràng
- card học thuật
- click mở chi tiết nếu thật cần
- quote block
- bảng đối chiếu
- visual chain
- nguồn tài liệu ở cuối trang

Như vậy khi bạn nói trước lớp, màn hình chỉ đóng vai trò **mở đúng ý**, chứ không biến thành buổi “cùng nhau bấm web”.

---

## 8. Snippet path để Copilot dùng nhanh

```ts
const topicAssets = {
  hero: "/assets/images/svg/debate_room_cover.svg",
  bookCover: "/assets/images/book_nguyen_phu_trong_cover.jpg",
  talkNoiChinh: "/assets/images/toa_dam_ban_noi_chinh_2024.jpg",
  talkNXB: "/assets/images/toa_dam_nxbctqg_2023.jpg",
  pillars: "/assets/images/svg/four_pillars_nguyen_phu_trong.svg",
  chain: "/assets/images/svg/integrity_chain_cause_effect.svg",
  compare: "/assets/images/svg/leadership_vs_looseness.svg",
  sourcePanel: "/assets/images/svg/source_panel.svg",
  textbookAntiCorruption: "/assets/images/textbook/textbook_anti_corruption_crop.png",
  textbookCitizen: "/assets/images/textbook/textbook_citizen_responsibility_crop.png",
};
```

---

## 9. Kết luận mapping

Nếu Copilot dựng theo file này thì:
- toàn bộ site vẫn giữ được bản chất **web tài liệu học tập sáng tạo**,
- còn trang **Chủ đề tranh luận** sẽ khớp chặt với `topic_page_spec.md` và kịch bản thuyết trình,
- không bị biến thành tour click-show hay khu khám phá tự do.

