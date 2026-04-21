# TODO: Convert Food App to Medical Report Analysis

## Plan Summary
Change theme/logic from food ordering (orderItems, cartItems, menu, orders) to medical reports (reports, testResults, upload/analysis, patient dashboard).

**Files analyzed:**
- src/App.js: NepaleseFoodUI, orderItems/cartItems -> rename to reports/testResults; functions addToOrder -> addReport etc.
- src/Home.js: Food hero/logo/emoji/img/text -> Medical Report Analysis, doctor/MRI img, emojis.
- src/style.css: Food orange gradients/food-card -> medical blue/green/report-card.
- public/index.html: Title/desc "Nepalese Food" -> "Medical Report Analysis".
- src/Dashboard.js: Food cards/stats/emoji ("Browse Menu", "Shopping Cart") -> Report Upload/Analysis/Profile.
- Other components (Menu, Orders, Cart) repurpose to Analysis, Reports, Test History.

**Dependent Files:**
- src/App.js, src/Home.js, src/Dashboard.js, src/style.css, public/index.html, src/Menu.js, src/Cart.js, src/Orders.js, src/UserProfile.js.

**Plan:**
1. Update public/index.html title/desc.
2. src/App.js: Rename component/state/functions to medical (MedicalReportApp, reportsList, testResults, addReport, analyzeTest).
3. src/Home.js: Medical theme (logo, hero text, img to medical e.g. /Crispy.jpg or external, emojis).
4. src/style.css: Medical colors/classes (.report-card).
5. src/Dashboard.js: Medical dashboard (Upload Report, AI Analysis, Patient Profile cards).
6. Repurpose Menu/Orders/Cart: Analysis page, Reports history, Test history.
7. Update index.js import.

**Followup:** `npm start`, test upload/login/analysis flow.

Confirm this plan before edits?

