# Zalo Utils Landing Page - Detailed Implementation Plan

## Mục tiêu
Clone hoàn hảo giao diện zca-cli.dev với đầy đủ layout, UI, UX, animation

## Thởi gian dự kiến: 3+ giờ

---

## PHASE 1: ANNOUNCEMENT BAR & NAVIGATION (30 phút)

### Task 1.1: Tạo AnnouncementBar.tsx (10 phút)
- [ ] Tạo component mới src/components/sections/AnnouncementBar.tsx
- [ ] Thêm dòng "🎉 New! Account-Based License — Use on multiple devices with your Zalo account!"
- [ ] Thêm nút "Learn More" và "Dismiss" (X icon)
- [ ] Style: gradient background, text trắng, rounded
- [ ] Animation: slide down khi xuất hiện

### Task 1.2: Update Nav.tsx (15 phút)
- [ ] Thêm logo "Z" trong rounded box
- [ ] Thêm badge "CLI" bên cạnh logo
- [ ] Update menu items: Features, Showcase, How It Works, Pricing, FAQ, Docs
- [ ] Thêm language selector (Tiếng Việt dropdown)
- [ ] Thêm nút "Nhận license" (giống "Get License")
- [ ] Sticky header với backdrop blur khi scroll
- [ ] Animation: fade in khi scroll

### Task 1.3: Kiểm tra trên Browser (5 phút)
- [ ] Mở browser xem announcement bar hiển thị đúng
- [ ] Kiểm tra navigation sticky
- [ ] Chụp screenshot so sánh

---

## PHASE 2: HERO SECTION - PHẦN QUAN TRỌNG NHẤT (45 phút)

### Task 2.1: Phân tích Hero gốc (5 phút)
- [ ] Mở zca-cli.dev trên browser
- [ ] Ghi chú chi tiết layout: 2 cột, tỷ lệ, spacing
- [ ] Chụp screenshot reference

### Task 2.2: Rewrite Hero.tsx - Left Column (20 phút)
- [ ] Badge "CLI Tool for Developers" / "CLI cho Developer"
- [ ] Heading: "Automate Zalo with One Command" (Tiếng Việt)
- [ ] Highlight text "One Command" với gradient/sparkle icon
- [ ] Description paragraph đầy đủ
- [ ] 4 badges: Full automation, Rich messaging, Lightning fast, Production ready
- [ ] 2 buttons: "Bắt đầu" primary, "Xem cách hoạt động" ghost + arrow

### Task 2.3: Rewrite Hero.tsx - Right Column (20 phút)
- [ ] Tab switcher: Video | Terminal (2 nút)
- [ ] Terminal view:
  - [ ] Header với 3 dots (red, yellow, green)
  - [ ] Code rain animation (scroll vertical)
  - [ ] Code examples: zalo-utils auth login, sendMessage(), etc.
  - [ ] Panel phải: "zalo-utils.dev", install command
- [ ] Video view placeholder
- [ ] Animation chuyển tab smooth

### Task 2.4: Kiểm tra Hero (10 phút)
- [ ] Build local
- [ ] Mở browser kiểm tra layout 2 cột
- [ ] Test tab switching Video/Terminal
- [ ] Chụp screenshot so sánh với gốc

---

## PHASE 3: FEATURES GRID (30 phút)

### Task 3.1: Update Features.tsx (25 phút)
- [ ] Heading: "Everything you need for Zalo automation"
- [ ] Subheading đầy đủ
- [ ] Grid 8 items (4x2 hoặc responsive):
  1. QR Code Login - Scan icon
  2. Multi-Account - Users icon
  3. Rich Messaging - Message icon
  4. Real-time Listener - Webhook icon
  5. Group Management - Users icon
  6. Raw JSON Output - Code icon
  7. Auto-Restart - Refresh icon
  8. Batch Operations - Zap icon
- [ ] Mỗi item: icon, title, description
- [ ] Card style: border, hover effect, gradient on hover
- [ ] Animation: stagger fade in

### Task 3.2: Thêm Bottom Banner (5 phút)
- [ ] Banner: "Designed for AI agent / CLI workflows"
- [ ] Icon + text + description

### Task 3.3: Kiểm tra Features (5 phút)
- [ ] Mở browser kiểm tra grid layout
- [ ] Hover test
- [ ] Chụp screenshot

---

## PHASE 4: AI INTEGRATION SECTION - PHẦN PHỨC TẠP (45 phút)

### Task 4.1: Section "Powered by zalo-utils" (20 phút)
- [ ] Badge "Powered by zalo-utils"
- [ ] Heading: "Build Personal AI Assistant with Zalo"
- [ ] Description đầy đủ
- [ ] Left panel:
  - [ ] "Works with Any AI CLI"
  - [ ] Prompt-Driven Zalo Automation
  - [ ] List logos: Claude Code, Cursor, Gemini CLI, Windsurf, Roo Code
  - [ ] 3 features: Send Messages, Receive Replies, Manage Groups
- [ ] Right panel:
  - [ ] Chat mockup
  - [ ] User message
  - [ ] AI response with code block
  - [ ] Webhook listener code

### Task 4.2: Section "Clawd.bot integration" (20 phút)
- [ ] Badge "clawd.bot integration"
- [ ] Right panel: Claude AI Integration info
- [ ] 4 features list với check icons
- [ ] Left panel: 3 steps (1,2,3) với icon số
  - Step 1: Install Plugin
  - Step 2: Login QR
  - Step 3: Configure multi-account

### Task 4.3: Kiểm tra AI Section (10 phút)
- [ ] Build & view
- [ ] Kiểm tra layout 2 cột
- [ ] Chụp screenshot so sánh

---

## PHASE 5: HOW IT WORKS - STEP FLOW (30 phút)

### Task 5.1: Update HowItWorks.tsx (25 phút)
- [ ] Heading: "How it works"
- [ ] Subheading
- [ ] 5 steps horizontal với connector line:
  1. Install zalo-utils - có tab macOS/Linux | Windows
     - Code block: curl command
  2. Get Support Code - command
  3. Purchase License - text
  4. Receive License - text
  5. Activate - command
- [ ] Mỗi step: số (1-5), icon/title, description, (optional) code
- [ ] Animation: step reveal khi scroll

### Task 5.2: Kiểm tra HowItWorks (5 phút)
- [ ] Browser test
- [ ] Test tab switch macOS/Windows
- [ ] Screenshot

---

## PHASE 6: PRICING CARD (20 phút)

### Task 6.1: Update Pricing.tsx (15 phút)
- [ ] Heading: "Simple, one-time pricing"
- [ ] Subheading: "Pay once, use forever"
- [ ] Card centered:
  - [ ] Title: "zalo-utils Pro License"
  - [ ] Price: "2.999.000đ"
  - [ ] "Regular Price" label
  - [ ] 5 features list với checkmarks
  - [ ] CTA button: "Buy License - 2.999.000đ"
  - [ ] Note: "One-time payment..."
- [ ] Card style: gradient border, glow effect, nổi bật

### Task 6.2: Kiểm tra Pricing (5 phút)
- [ ] Browser view
- [ ] Screenshot

---

## PHASE 7: FAQ ACCORDION (25 phút)

### Task 7.1: Update FAQ.tsx (20 phút)
- [ ] Heading: "Frequently Asked Questions"
- [ ] Subheading
- [ ] 9 questions (giống gốc):
  1. License types?
  2. Device Support Code?
  3. Zalo User ID?
  4. One license multiple devices?
  5. Payment methods?
  6. How to activate?
  7. How long to receive?
  8. Refund policy?
  9. Affiliated with Zalo?
- [ ] Accordion style: question + chevron icon (rotate khi mở)
- [ ] Animation: smooth expand/collapse

### Task 7.2: Kiểm tra FAQ (5 phút)
- [ ] Browser test click accordion
- [ ] Screenshot

---

## PHASE 8: FOOTER (20 phút)

### Task 8.1: Update Footer.tsx (15 phút)
- [ ] 4 columns layout:
  - Col 1: Logo + description
  - Col 2: Resources (Support links)
  - Col 3: Legal (Terms, Privacy, Shipping)
  - Col 4: (Optional) Social/Contact
- [ ] Bottom bar:
  - Copyright 2026
  - "Not affiliated with Zalo..."

### Task 8.2: Kiểm tra Footer (5 phút)
- [ ] Browser view
- [ ] Screenshot

---

## PHASE 9: GLOBAL STYLING & ANIMATION (30 phút)

### Task 9.1: Update globals.css (15 phút)
- [ ] Background grid pattern
- [ ] Gradient glow effects
- [ ] Smooth scroll
- [ ] Custom scrollbar
- [ ] Animation keyframes: float, fade-in, slide-up

### Task 9.2: Add Framer Motion (10 phút)
- [ ] Page load animation
- [ ] Scroll reveal cho sections
- [ ] Hover effects
- [ ] Tab transition

### Task 9.3: Responsive Design (5 phút)
- [ ] Mobile menu
- [ ] Stack layout on mobile
- [ ] Test trên mobile viewport

---

## PHASE 10: FINAL TESTING & DEPLOY (20 phút)

### Task 10.1: Local Build Test (10 phút)
- [ ] npm run build
- [ ] Kiểm tra lỗi
- [ ] Fix nếu có

### Task 10.2: Browser Full Check (5 phút)
- [ ] Mở toàn bộ trang
- [ ] Scroll từ trên xuống dưới
- [ ] Test tất cả interactions
- [ ] Chụp full page screenshot

### Task 10.3: Deploy (5 phút)
- [ ] git add, commit, push
- [ ] Check GitHub Actions running
- [ ] Verify live site sau 2-3 phút

---

## CHECKLIST KIỂM TRA TRÊN BROWSER

Sau mỗi Phase, thực hiện:
1. [ ] Mở browser tab zalo-utils
2. [ ] Hard refresh (Cmd+Shift+R)
3. [ ] Chụp screenshot
4. [ ] So sánh side-by-side với zca-cli.dev
5. [ ] Note các điểm chưa giống
6. [ ] Fix ngay hoặc ghi vào todo

## KIỂM TRA CUỐI CÙNG

- [ ] Layout giống 90%+ so với gốc
- [ ] Animation mượt mà
- [ ] Responsive tốt
- [ ] Không có lỗi console
- [ ] Deploy thành công

---

Bắt đầu thực hiện: [Thời gian bắt đầu]
Dự kiến hoàn thành: [Thời gian kết thúc]
