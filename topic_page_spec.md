# topic_page_spec.md

## Mục tiêu của trang
Trang **Chủ đề tranh luận** là một **hồ sơ tranh luận học thuật** nằm bên trong web tài liệu học tập. Trang này **không phải Presentation Tour** và **không phải khu khám phá tự do**. Nó được thiết kế để:

- bám sát đề tài thuyết trình: **"Liệu có phải một Đảng đẻ ra tham nhũng?"**
- đi đúng mạch kịch bản nói trước lớp
- cho người xem đọc/đối chiếu các luận điểm chính ngay trên màn hình
- hỗ trợ thuyết trình nhưng không biến toàn bộ web thành slide deck

## Nguyên tắc triển khai
1. **Không dùng poll, quiz, slider, verdict cá nhân hóa** trong trang này.
2. **Không làm kiểu click-tour qua nhiều trang web**. Đây là **một trang hồ sơ chuyên đề** với các section nối tiếp nhau.
3. Tương tác chỉ nên là:
   - click mở block nội dung sâu hơn
   - expand/collapse phần giải thích
   - chuyển giữa các anchor section trong cùng một trang
4. Mỗi block phải đọc được **như tài liệu**, nhưng khi thuyết trình bạn vẫn có thể bám đúng từng block để nói.
5. Giọng điệu: học thuật, rõ, dứt khoát, không khẩu hiệu hóa.

---

# 1. CẤU TRÚC TRANG

## 1.1 Header mini của trang
- Breadcrumb nhỏ:
  - `Trang chủ / Chủ đề tranh luận`
- Eyebrow text:
  - `Hồ sơ tranh luận học thuật`
- Title lớn:
  - `Liệu có phải “một Đảng đẻ ra tham nhũng”?`
- Subtitle:
  - `Phân tích từ quan điểm về phòng, chống tham nhũng theo Tổng Bí thư Nguyễn Phú Trọng và từ yêu cầu xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.`

### Ảnh hero đề xuất
- Primary visual:
  - `/assets/images/svg/debate_room_cover.svg`
- Secondary visual (nếu muốn thêm ảnh thật ở góc/phía dưới):
  - `/assets/images/book_nguyen_phu_trong_cover.jpg`
  - `/assets/images/toa_dam_ban_noi_chinh_2024.jpg`

### Bố cục hero
- Trái: title + subtitle + meta chips
- Phải: visual hero

### Meta chips dưới subtitle
- `Chủ đề trọng tâm`
- `Khung lý luận`
- `Quyền lực và kiểm soát`
- `Kết luận học thuật`

---

# 2. SIDEBAR / MỤC LỤC TRONG TRANG

Sidebar cố định bên trái hoặc sticky bên phải, gồm các anchor:
1. Mở vấn đề
2. Vì sao nhận định này dễ thuyết phục?
3. Khung lý luận để phân tích
4. Quyền lực và nguy cơ tham nhũng
5. Ranh giới giữa lãnh đạo và buông lỏng
6. Kết luận học thuật
7. Tài liệu tham khảo

> Lưu ý: Sidebar chỉ dùng để nhảy trong trang, không chuyển route sang trang khác.

---

# 3. NỘI DUNG CHI TIẾT TỪNG BLOCK

## BLOCK A — MỞ VẤN ĐỀ

### Tiêu đề block
`Mở vấn đề`

### Heading lớn
`Có phải “một Đảng” là nguyên nhân sinh ra tham nhũng?`

### Nội dung chữ
Có ý kiến cho rằng tham nhũng xuất phát từ chính trong Đảng cầm quyền, nên có thể kết luận rằng “một Đảng đã sinh ra tham nhũng”. Nhận định này nghe có vẻ mạnh và trực diện, nhưng cũng vì vậy mà dễ biến một vấn đề chính trị – pháp lý phức tạp thành một kết luận quá giản lược.

Muốn trả lời đúng, cần đổi cách đặt vấn đề. Câu hỏi không nên chỉ dừng ở chỗ “một Đảng hay nhiều Đảng”, mà phải đi sâu hơn vào bản chất của quyền lực: quyền lực được sử dụng như thế nào, có bị kiểm soát hay không, có gắn với minh bạch, giải trình và kỷ luật hay không.

### Pull quote ngắn
`Vấn đề không chỉ là ai nắm quyền, mà là quyền lực đó có bị kiểm soát hay không.`

### Visual đề xuất
- `/assets/images/svg/hero_power_integrity_map.svg`
- hoặc đặt nền mờ bằng:
  - `/assets/images/quochoi_vietnam_2018.jpg`

### Layout
- Trái: text
- Phải: visual

---

## BLOCK B — VÌ SAO NHẬN ĐỊNH NÀY DỄ THUYẾT PHỤC?

### Tiêu đề block
`Vì sao nhận định này dễ thuyết phục?`

### Layout
3 cards ngang

### Card 1
#### Title
`Quyền lực luôn mang rủi ro`
#### Text
Ở bất kỳ đâu có quyền lực, ở đó luôn tồn tại nguy cơ lạm dụng quyền lực nếu thiếu cơ chế ràng buộc. Đây là điểm khiến nhiều người dễ nối quyền lực với tham nhũng.

### Card 2
#### Title
`Hiện tượng dễ bị quy thành bản chất`
#### Text
Khi tham nhũng xảy ra trong bộ máy cầm quyền, người ta rất dễ từ hiện tượng sai phạm của một bộ phận đi đến kết luận về bản chất của cả tổ chức.

### Card 3
#### Title
`Kết luận ngắn thường lan nhanh hơn phân tích dài`
#### Text
Một nhận định mạnh, ngắn và dứt khoát thường dễ tạo cảm giác thuyết phục hơn một phân tích nhiều điều kiện. Nhưng trong học thuật, điều dễ nhớ chưa chắc là điều đúng.

### Dòng chốt dưới 3 card
Những quan sát trên không hoàn toàn vô căn cứ. Nhưng chúng mới chỉ chạm vào bề mặt của vấn đề.

### Visual đề xuất
- background shape:
  - `/assets/images/svg/section_bg_debate.svg`

---

## BLOCK C — KHUNG LÝ LUẬN ĐỂ PHÂN TÍCH

### Tiêu đề block
`Khung lý luận để phân tích`

### Intro text
Để trả lời đúng đề tài, cần đi từ khung lý luận về phòng, chống tham nhũng theo Tổng Bí thư Nguyễn Phú Trọng. Trên nền đó, mới có thể phân tích quyền lực, nguy cơ tham nhũng và ranh giới giữa lãnh đạo với buông lỏng.

### Layout
4 pillar cards (2x2)

### Card 1
#### Title
`1. Phòng, chống tham nhũng gắn với xây dựng, chỉnh đốn Đảng`
#### Text
Chống tham nhũng không được hiểu như hoạt động đứng ngoài hệ thống để phủ định hệ thống. Nó được đặt trong tổng thể xây dựng, chỉnh đốn Đảng và làm trong sạch bộ máy, giữ kỷ luật, kỷ cương và củng cố niềm tin của nhân dân.

### Card 2
#### Title
`2. Muốn chống tham nhũng phải kiểm soát quyền lực`
#### Text
Quyền lực nếu không được kiểm soát rất dễ bị lạm dụng. Kiểm soát quyền lực chính là điểm bản lề nối giữa lý luận về Đảng cầm quyền, nhà nước pháp quyền và phòng ngừa tham nhũng.

### Card 3
#### Title
`3. Không có vùng cấm, không có ngoại lệ`
#### Text
Xử lý sai phạm phải nghiêm minh và không thể chọn đối tượng theo cảm tính. Nguyên tắc này cho thấy chống tham nhũng là quá trình siết kỷ luật quyền lực, chứ không phải chấp nhận quyền lực tự miễn trừ cho chính mình.

### Card 4
#### Title
`4. Chống suy thoái là chống cái gốc`
#### Text
Tham nhũng không chỉ là hành vi vụ lợi về vật chất. Sâu hơn, nó gắn với suy thoái tư tưởng chính trị, đạo đức, lối sống trong một bộ phận cán bộ, đảng viên. Muốn chống tham nhũng bền vững phải chống từ gốc của sự tha hóa.

### Visual đề xuất
- main visual:
  - `/assets/images/svg/four_pillars_nguyen_phu_trong.svg`
- optional side image:
  - `/assets/images/book_nguyen_phu_trong_cover.jpg`
  - `/assets/images/toa_dam_nxbctqg_2023.jpg`

### Expandable note dưới block
`Từ 4 trụ này, có thể thấy: quan điểm về phòng, chống tham nhũng không xem tham nhũng là bản chất của Đảng, mà xem đó là nguy cơ phải được ngăn chặn bằng chỉnh đốn Đảng, kiểm soát quyền lực, kỷ luật nghiêm minh và chống suy thoái.`

---

## BLOCK D — QUYỀN LỰC VÀ NGUY CƠ THAM NHŨNG

### Tiêu đề block
`Quyền lực và nguy cơ tham nhũng`

### Lead text
Tham nhũng có liên quan trực tiếp đến quyền lực, nhưng không thể nói một cách giản đơn rằng cứ có quyền lực là tất yếu có tham nhũng. Câu phải nói cho đúng là: quyền lực nếu không được kiểm soát thì rất dễ bị tha hóa và từ đó dẫn đến tham nhũng.

### Layout
- Trái: sơ đồ chuỗi nguyên nhân – hệ quả
- Phải: 2 đoạn giải thích

### Sơ đồ chữ
`Quyền lực`
→ `thiếu kiểm soát`
→ `tha hóa`
→ `lợi ích nhóm / vụ lợi`
→ `tham nhũng, tiêu cực`

Đối xứng bên dưới:

`Quyền lực`
→ `được kiểm soát`
→ `minh bạch`
→ `giải trình`
→ `giám sát`
→ `củng cố Nhà nước pháp quyền`

### Đoạn giải thích 1
Quyền lực tự thân không phải là cái xấu. Trong một nhà nước, quyền lực là điều kiện để tổ chức xã hội, thực thi pháp luật và bảo đảm lợi ích chung. Vấn đề chỉ phát sinh khi quyền lực vượt khỏi khuôn khổ pháp luật, không chịu giám sát và không gắn với trách nhiệm.

### Đoạn giải thích 2
Điểm cần nhấn mạnh không phải là phủ nhận nguy cơ tham nhũng, mà là xác định đúng điều kiện làm phát sinh nó. Khi xác định sai nguyên nhân, người ta dễ đi đến kết luận cực đoan; khi xác định đúng nguyên nhân, người ta mới có thể đề xuất giải pháp đúng.

### Pull quote
`Không phải cứ có quyền lực là có tham nhũng; quyền lực thiếu kiểm soát mới là điều kiện trực tiếp làm tăng nguy cơ tham nhũng.`

### Visual đề xuất
- main visual:
  - `/assets/images/svg/integrity_chain_cause_effect.svg`
- optional support:
  - `/assets/images/svg/rule_of_law_features.svg`

---

## BLOCK E — RANH GIỚI GIỮA “ĐẢNG LÃNH ĐẠO” VÀ “ĐẢNG BUÔNG LỎNG”

### Tiêu đề block
`Ranh giới giữa “Đảng lãnh đạo” và “Đảng buông lỏng”`

### Intro text
Nếu tham nhũng bắt nguồn từ quyền lực, vậy đâu là giới hạn để phân biệt giữa lãnh đạo và buông lỏng? Theo hướng phân tích của trang này, ranh giới ấy không nằm ở danh nghĩa lãnh đạo, mà nằm ở cách quyền lực được tổ chức, kiểm soát và chịu trách nhiệm.

### Layout
Bảng đối chiếu 2 cột

| Đảng lãnh đạo | Đảng buông lỏng |
|---|---|
| Quyền lực được đặt trong cơ chế kiểm soát | Quyền lực không được ràng buộc chặt chẽ |
| Có công khai, minh bạch | Thông tin khép kín, mờ ám |
| Có giải trình, giám sát | Giải trình hình thức, giám sát yếu |
| Sai phạm bị xử lý nghiêm minh | Nể nang, né tránh, dung túng sai phạm |
| Tổ chức có khả năng tự chỉnh đốn | Suy thoái trong đội ngũ kéo dài, không được ngăn chặn kịp thời |

### Đoạn chốt dưới bảng
Nói cách khác, “lãnh đạo” là dùng quyền lực để tổ chức, dẫn dắt và chịu trách nhiệm trước nhân dân; còn “buông lỏng” là để quyền lực trượt khỏi khuôn khổ, bị tha hóa và tạo điều kiện cho tham nhũng nảy sinh.

### Visual đề xuất
- main visual:
  - `/assets/images/svg/leadership_vs_looseness.svg`
- optional image:
  - `/assets/images/toa_dam_ban_noi_chinh_2024.jpg`

---

## BLOCK F — KẾT LUẬN HỌC THUẬT

### Tiêu đề block
`Kết luận học thuật`

### Nội dung lớn (highlight block)
Tham nhũng không phải là bản chất của Đảng, mà là hiện tượng thoái hóa, biến chất của một bộ phận cán bộ, đảng viên khi quyền lực bị tha hóa và không được kiểm soát chặt chẽ.

Vì vậy, đấu tranh phòng, chống tham nhũng không phải là phủ định chế độ, mà là để xây dựng, chỉnh đốn Đảng, làm trong sạch bộ máy, củng cố Nhà nước pháp quyền xã hội chủ nghĩa và bảo vệ niềm tin của nhân dân.

### Dòng chốt cuối cùng
`Muốn chống tham nhũng, không thể chỉ nói về đạo đức; phải kiểm soát quyền lực.`

### Visual đề xuất
- `/assets/images/svg/source_panel.svg`
- hoặc nền nhẹ:
  - `/assets/images/svg/section_bg_debate.svg`

---

## BLOCK G — TÀI LIỆU THAM KHẢO Ở CUỐI TRANG

### Tiêu đề block
`Tài liệu tham khảo cho hồ sơ tranh luận`

### Danh sách nguồn nên hiển thị
1. **Nhà xuất bản Chính trị quốc gia Sự thật** – giới thiệu cuốn sách của Tổng Bí thư Nguyễn Phú Trọng:  
   https://www.nxbctqg.org.vn/kien-quyet-kien-tri-dau-tranh-phong-chong-tham-nhung-tieu-cuc-gop-phan-xay-dung-dang-va-nha-nuoc-ta-ngay-cang-trong-sach-vung-manh.html

2. **Ban Nội chính Trung ương** – bài nghiên cứu về kiểm soát quyền lực trong tác phẩm của Tổng Bí thư Nguyễn Phú Trọng:  
   https://noichinh.vn/nghien-cuu-trao-doi/202204/van-de-kiem-soat-quyen-luc-trong-tac-pham-cua-tong-bi-thu-nguyen-phu-trong-310864/

3. **Tạp chí Cộng sản** – nguyên tắc “không có vùng cấm, không có ngoại lệ” trong phòng, chống tham nhũng:  
   https://www.tapchicongsan.org.vn/web/guest/hoat-ong-cua-lanh-ao-ang-nha-nuoc/-/2018/827344/tong-bi-thu-nguyen-phu-trong%E2%80%93khong-co-vung-cam%2C-ngoai-le-trong-phong-chong-tham-nhung.aspx

4. **Ban Nội chính Trung ương** – chống suy thoái là chống cái gốc của tham nhũng, tiêu cực:  
   https://noichinh.vn/nghien-cuu-trao-doi/202409/bai-1-quan-diem-chong-suy-thoai-ve-tu-tuong-chinh-tri-dao-duc-loi-song-cai-goc-cuatham-nhung-tieu-cuc-van-dung-quan-diem-cua-co-tong-bi-thu-nguyen-phu-trong-trong-dau-tranh-phong-chong-tham-nhung-tieu-314161/

5. **Luật Phòng, chống tham nhũng 2018** – bản phổ biến pháp luật:  
   https://pbgdpl.moj.gov.vn/qt/tl-pbgdpl/Lists/DeCuong/Attachments/268/Lu%E1%BA%ADt%20ph%C3%B2ng%2C%20ch%E1%BB%91ng%20tham%20nh%C5%A9ng.pdf

### Tài liệu nội bộ nên hiển thị thêm
- `/assets/images/textbook/giao_trinh_page_82.png`
- `/assets/images/textbook/giao_trinh_page_83.png`
- `/assets/images/textbook/giao_trinh_page_84.png`
- `/assets/images/textbook/giao_trinh_page_85.png`

### Caption cho nhóm ảnh giáo trình
`Các trang giáo trình được dùng để đối chiếu nội dung về Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam, phòng chống tham nhũng và trách nhiệm công dân.`

---

# 4. CÁCH DÙNG TRANG NÀY KHI THUYẾT TRÌNH

## Mục đích
Trang này phải hỗ trợ bạn nói, nhưng không ép bạn phải “click show”.

## Cách dùng đúng
- Bạn mở trang ở đầu phần tranh luận.
- Khi nói đến đâu, chỉ cần cuộn hoặc click anchor tới block đó.
- Không bấm tương tác kiểu chơi game.
- Không chuyển route sang các khu khác của web trong lúc đang nói đề tài.

## Mạch nói tương ứng
- Block A → mở vấn đề
- Block B → vì sao nhận định dễ thuyết phục
- Block C → khung lý luận của Tổng Bí thư Nguyễn Phú Trọng
- Block D → quyền lực và nguy cơ tham nhũng
- Block E → ranh giới giữa lãnh đạo và buông lỏng
- Block F → kết luận học thuật

---

# 5. GỢI Ý COMPONENT CHO COPILOT

## Component tree
- `TopicHero`
- `TopicSidebar`
- `DebateQuestionBlock`
- `SurfaceReasonCards`
- `TheoryFrameworkGrid`
- `PowerRiskChain`
- `LeadershipBoundaryTable`
- `AcademicConclusionBlock`
- `TopicReferences`

## Props/asset mapping gợi ý
- `heroImage="/assets/images/svg/debate_room_cover.svg"`
- `coverBookImage="/assets/images/book_nguyen_phu_trong_cover.jpg"`
- `causeEffectImage="/assets/images/svg/integrity_chain_cause_effect.svg"`
- `boundaryImage="/assets/images/svg/leadership_vs_looseness.svg"`
- `backgroundShape="/assets/images/svg/section_bg_debate.svg"`

---

# 6. TINH CHỈNH CUỐI CÙNG

## Trang này phải tạo cảm giác gì?
- giống một **policy dossier** hoặc **debate file**
- không giống slide
- không giống blog dài
- không giống khu khám phá mở

## Điều tuyệt đối tránh
- poll đầu vào
- quiz đúng/sai
- slider mô phỏng
- verdict cá nhân hóa
- click sang nhiều trang nhỏ

## Điều cần giữ
- bố cục sạch
- block rõ
- lý luận chắc
- ảnh vừa đủ
- nguồn rõ ràng

