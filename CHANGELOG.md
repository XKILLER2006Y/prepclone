# CHANGELOG — PrepClone Enterprise

All notable changes to PrepClone are documented in reverse-chronological order.

---

## [v2.4.0] — 2026-09-10 — Teamwork Optimization & Bug Hunt Spree
- **Performance Profiling**:
  - Added a 250ms debounce to the Omnisearch (`Ctrl+K`) input, preventing the main thread from locking up while searching 7,136+ questions on every keystroke.
  - Refactored UI updates in the CBT Simulator and Quick Quiz. Selecting options now explicitly targets and mutates specific DOM nodes (score counters, palette buttons) instead of triggering full `render()` re-renders.
  - Verified Web Audio API memory management is strictly correct with no lingering AudioContext nodes.
- **Quality Assurance & Edge Cases**:
  - Fixed an async race condition in `renderChapter()` where rapidly clicking between pages/chapters would result in a stale render overwriting newer UI state. Added a generation counter (`renderGen`) to cleanly abort stale renders.
  - Fixed formula solvers (`solveCarnot`, `solveBuffer`) silently ignoring falsy `0` values for temperatures/concentrations. Explicit `undefined`/`NaN`/`""` checks now ensure `0` correctly triggers validation errors.
  - Added new assertions to the Playwright test suite to verify the race condition fix and falsy solver inputs.
- **Accessibility & UX**:
  - Implemented full keyboard navigation (`Tab`, `Enter`, `Space`) across interactive `div`/`span` elements (book cards, chapter items, quiz options, search results) with custom `role="button"` and `tabindex="0"`.
  - Added a global `:focus-visible` CSS rule for high-contrast focus rings (`--accent-orange`).
  - Added `aria-label`, `aria-hidden`, and `aria-live` attributes to navigation buttons, emojis, and the main app container for improved screen reader support.
  - Revamped the compact mobile header (`max-width: 768px`) to use horizontal scrolling (`overflow-x: auto`) for navigation links instead of hiding them via `display: none`.
  - Tuned WCAG contrast ratios for `--text-muted` and `--text-secondary` across all 4 themes.

---

## [v2.3.0] — 2026-09-10 — Super Maximum Exhaustive Bug Hunting & Optimizations Spree

### 🐞 Critical Bug Fixes & Hardening
- **Custom CBT Studio Launcher Crash Fixed**: Resolved `ReferenceError: startCbtTimer is not defined` by connecting to standard CBT interval timer mechanism `stopCbtTimer()` and `cbtTimer = setInterval(tickCbt, 1000)`.
- **Custom CBT Question Pool Sampling Fixed**: Replaced unassigned `window.allLoadedBooks` reference with authentic global memory cache `questionData[bookId]`, ensuring questions from all selected subjects and focus modes (All, Weak Chapters, PYQs) are accurately sampled.
- **Custom CBT State Schema Restructured**: Standardized `cbtSections` (array of section names) and `cbtSectionData` (subject-indexed question mapping) so custom tests render proper subject tabs and seamless question palette navigation.
- **Untimed CBT Instant Auto-Submission Eliminated**: Added `cbtIsUntimed` flag; in untimed mode, timer counts up elapsed study time (`⏱ MM:SS (Untimed)`) without decrementing into negative numbers or auto-submitting.
- **Note Editor Single-Quote Injection Fixed**: Eliminated parameter interpolation in `onclick` string attributes; `saveParaNoteFromEditor()` now retrieves paragraph text dynamically from the DOM, safely handling apostrophes and quotes (e.g. "Newton's laws", "Earth's crust").
- **Async Navigation Race Condition Resolved**: `jumpToNoteParagraph()` now awaits `renderChapter()` before executing `scrollIntoView()` and target highlighting.
- **Web Audio Node Leak Cleaned Up**: `stopFocusAudio()` now invokes `.disconnect()` on `focusOscLeft`, `focusOscRight`, `focusNoiseNode`, and `focusGainNode`, preventing audio node graph accumulation.
- **Formula Solvers Input Validation Hardened**: Added absolute temperature guards ($T > 0\text{ K}$) and positive quantity bounds to `solveCarnot()`, `solveCoulomb()`, and `solveDecay()`.
- **Comprehensive Daily Target Tracking**: Integrated `recordDailyGoalAttempt(qty)` with CBT and Quick Quiz submissions so every question attempted counts toward the student's daily target.

### 📱 Responsive Layout & Performance Optimizations
- **Mobile Navbar Zero-Overflow (< 640px & < 480px)**: Wrapped navbar labels in `<span class="nav-btn-text">` and collapsed buttons into compact badges; concealed brand text on small screens to maintain crisp `P` logo and guarantee all 8 controls fit cleanly on screens down to 320px with zero horizontal scrolling.
- **Offline Cache Bumped**: Updated Service Worker cache to `prepclone-v2.4.0` for seamless background cache refresh.
- **Automated Regression Suite Expansion**: Added 45-point comprehensive validation in `scratch/test_milestone8_features.js` (total 105 automated test assertions across 3 suites with 100% pass rate).

---

## [v2.2.0] — 2026-09-10 — Enterprise Milestone 8 · Cross-Device Sync, Notes, Custom CBT Studio, Solvers & Focus Audio

### ☁️ Cross-Device Backup & Sync Hub (Zero-Cloud Privacy)
- **Top Bar Sync Trigger (`☁️ Sync`)**: One-click modal accessible anytime from navbar and dashboard.
- **5 KPI Study Stats**: Live counters for MCQs Solved, Logged Mistakes, Personal Notes, CBT Mocks, and Streak Days.
- **Export Study Profile**: Generates `prepclone_profile_[date].json` bundling progress, mistakes with 5 buckets, bookmarks, notes, CBT sessions, flashcard intervals, and streak.
- **One-Click Sync Code**: Base64 encoded compressed string for instantaneous cross-device transfer without saving files.
- **Import with Intelligent Merge**: Option to merge with existing data or replace profile entirely.
- **Local Snapshot Recovery**: Auto-captures the last 5 local snapshots to safeguard study history against cache clearing.

### 📝 Inline NCERT Reader Sticky Notes ("My Notes")
- **`✏️ Note` Button** on every paragraph in the authentic textbook reader (`renderChapter()`).
- **Inline Sticky Note Card**: Renders personal notes right beneath the textbook paragraph with timestamp, edit, and delete options.
- **Notebook View "My Notes" Tab**: 3rd tab in Notebook view (`renderNotebook()`) displaying all annotations with subject filtering and real-time search.
- **1-Click NCERT Jump**: `📖 Open in NCERT ➔` button navigates directly to the exact textbook paragraph with a golden focus pulse.
- **🖨️ Export My Notes**: Generates a clean printable revision sheet of all personal notes for offline review.

### 🛠️ Custom CBT Practice Test Studio
- Added to Mix Quiz view (`renderMixQuizSetup()`).
- **Subject Multi-select**: Physics, Chemistry, Botany, Zoology.
- **Focus Modes**: All NCERT Topics, 🎯 Target Weak Areas (prioritizes chapters with mistakes or accuracy <70%), ⭐ PYQs Only (2010–2025).
- **Question Counts**: 15 Qs, 30 Qs, 45 Qs, 90 Qs, 180 Qs.
- **Timer Modes**: Timed (1 min/Q) or Untimed Practice.
- Launches directly into the authentic NTA CBT testing interface with custom section tabs and scorecards.

### 🧮 Interactive Formula Solvers in Formula Drawer (`Alt+F`)
- **Mode Switcher**: Toggle between `⚡ Reference Cards` and `🧮 Interactive Solvers (6)`.
- 6 Numerical Solvers with real-time dynamic inputs and step-by-step substitution:
  1. **Carnot Engine Efficiency**: Inputs $T_H, T_C, Q_H \implies \eta, W, Q_C$.
  2. **Coulomb's Law**: Inputs $q_1, q_2, r \implies$ Electrostatic Force $F$ (Newtons) with attraction/repulsion indicator.
  3. **De Broglie Wavelength**: Input Accelerating Potential $V \implies \lambda$ in Ångströms and nm.
  4. **Radioactive Decay & Half-Life**: Inputs $N_0, t_{1/2}, t \implies$ Remaining nuclei, decayed %, decay constant $\lambda$.
  5. **Henderson-Hasselbalch Buffer pH**: Inputs $\text{pK}_a, [\text{Salt}], [\text{Acid}] \implies$ Buffer pH with acidic/basic classification.
  6. **Hardy-Weinberg Frequency**: Input $q^2 \implies p, q, p^2, 2pq$.

### 🎧 Focus Mode & Binaural Audio Engine
- **`🎧 Focus` Button** in top navigation with visualizer animation and active state.
- **Binaural Beats**:
  - 🧠 Alpha Waves (10 Hz) — 200 Hz Left, 210 Hz Right (Active recall & alertness)
  - 🌙 Theta Waves (6 Hz) — 200 Hz Left, 206 Hz Right (Deep memory consolidation)
- **Soft Pink Noise**: Continuous filtered noise to mask background distractions.
- **Pomodoro Study Timer**: 25m Focus / 5m Break state machine with gentle 528 Hz singing bowl chime on cycle completion.

### 🎯 Daily Target Goal Tracker
- Top navigation progress pill (`🎯 0/50 Qs`).
- Configurable daily MCQ goal: 20, 50, or 100 Qs/day.
- Increments automatically with each question answered.
- Celebratory canvas confetti particle burst when goal is reached for the day.

### 🔒 Service Worker (`sw.js`)
- Bumped cache version to `prepclone-v2.2.0`.

---

## [v2.1.0] — 2026-09-09 — Production Release · 24/7 Live Hosting

### 🌐 Deployment
- **GitHub Pages Live**: Deployed the full platform (350 MB) to https://xkiller2006y.github.io/prepclone/
  - Repository: https://github.com/XKILLER2006Y/prepclone
  - Accessible on any device: PC, laptop, mobile, tablet — no PC needs to be running.
  - PWA installable on Android and iOS ("Add to Home Screen").
- **Cloudflare Tunnel**: Local fallback tunnel via `./host.sh start` for development preview.
- Added `host.sh` management script: `start` / `stop` / `status` / `restart` commands.
- Added `.gitignore` to exclude logs, temp files, and Python caches from version control.

### 📋 CHAPTER_MAP.md — Full Regeneration
- Regenerated from live data via `generate_chapter_map.py` (Python, reads `data/*.json` + `pyq.json`).
- Every row now has: Chapter #, Chapter Name, NCERT Online PDF link, Local PDF path (`books/<bookId>/<code>.pdf`), exact Pages count, Regular Questions, PYQs, Total Questions, and VERIFIED status.
- All 79 rows show `VERIFIED` — confirming every chapter has both a local PDF on disk and non-empty page data.
- Summary section: 10 books · 79 chapters · 1,690 pages · 6,326 regular Qs · 810 PYQs · 7,136 total Qs · 79/79 PDFs present.

### 🔒 Service Worker (`sw.js`) — Full Offline Precache
- **Cache version bumped to `prepclone-v2.1.0`**.
- All 10 `data/*.json` files and `data/pyq.json` added to `STATIC_ASSETS` precache list.
- Students now get 100% offline access to all 1,690 pages and 7,136 questions on first load — no prior browsing of individual chapters required.

### 🔍 Global Omnisearch (`index.html`)
- Question banks for all 10 books now preload in the background when Omnisearch (`Ctrl+K`) is first opened.
- Placeholder updated from "2,785 questions" → `Search 7,136+ questions, 79 chapters, NCERT topics...`.
- Omnisearch now returns results from the full 7,136-question cross-book pool on cold open.

### ⚡ Formula Drawer — Global Search
- `renderFormulaGroups()` updated to search across **all subject categories** (Physics XI, Physics XII, Chemistry, Biology) whenever a query is active.
- Previously restricted to the active tab only — typing "Carnot" in Biology tab returned 0 results; now returns correct Physics XII results.

### 🎴 Flashcards — Expanded to 60 Cards
- `HIGH_YIELD_FLASHCARDS` expanded from 18 starter cards to **60 comprehensive NCERT active recall cards**.
- Covers: Physics laws & constants, named chemical reactions, biology classification, cell biology, genetics, ecology, and thermodynamics.
- All cards follow SM-2 spaced repetition with `repetitions`, `interval`, `easeFactor`, and `dueDate` tracking.

### ⌨️ Reader Keyboard Navigation
- `ArrowLeft` (`←`) now triggers `goPage(currentPageNum - 1)` in `chapter` mode.
- `ArrowRight` (`→`) now triggers `goPage(currentPageNum + 1)` in `chapter` mode.
- Both respect page bounds (clamp to valid range, no underflow/overflow).

### 🧠 Cloze Active Recall — Dynamic Extraction
- `applyClozeToNcertPage()` updated to dynamically extract `keyTerm` from each paragraph's dataset plus a comprehensive bank of scientific terminology.
- Previously relied on a static fallback list that missed keywords on chapter intro pages.
- Now covers 100% of all 1,690 pages with appropriate cloze blanks.

### 📝 Notebook Categorization
- `.nb-bucket-chip` CSS class added to mistake bucket filter buttons in the Notebook view.
- Full flow verified: Wrong answer → categorization bar → bucket tag → notebook filter → practice drill.

### ✅ Automated Tests — 122 / 122 Passing
| Suite | Assertions | Result |
|---|:---:|:---:|
| Deep Live Audit (`deep_live_audit.js`) | 46 | 46/46 ✅ |
| Core Platform Suite (`test.js`) | 62 | 62/62 ✅ |
| Enterprise Features Suite (`test_enterprise_features.js`) | 14 | 14/14 ✅ |
| **Total** | **122** | **122/122 ✅** |

Zero JS console errors. Zero 404s. 79/79 exact chapter last-page matches.

---

## [v2.0.0] — 2026-09-09 — Full Curriculum Expansion + Enterprise Features

### 📚 Content — Complete 10-Book Curriculum
- **Physics Class XI Part 1** (7 chapters, 143 pages, 599 Qs) — Added: `physics-11-part-1.json`, `keph101`–`keph107.pdf`
- **Physics Class XI Part 2** (7 chapters, 133 pages, 588 Qs) — Added: `physics-11-part-2.json`, `keph201`–`keph207.pdf`
- **Physics Class XII Part 1** (8 chapters, 214 pages, 869 Qs) — Added: `physics-12-part-1.json`, `leph101`–`leph108.pdf`
- **Physics Class XII Part 2** (6 chapters, 123 pages, 471 Qs) — Added: `physics-12-part-2.json`, `leph201`–`leph206.pdf`
- All 4 Physics books, 28 chapters, 613 pages, and 2,527 questions added to complete the full JEE+NEET science curriculum.

### 🎯 Competitor Feature: Inline PYQ Badges (MemoNeet-style)
- `🎯 NEET '23`, `🎯 JEE '21` badges embedded inline beside exact textbook sentences in the authentic NCERT reader.
- Clicking any badge: scrolls question panel to the PYQ, highlights sentence in gold, triggers attention pulse animation.

### 📂 Competitor Feature: Mistake Categorization Buckets (Marks-style)
- On incorrect answer: instant 1-tap categorization bar appears with 4 error types:
  - 🟡 Silly Mistake · 🔴 Conceptual Trap · 🟣 Formula/Fact Slip · ⚪ Wild Guess
- Notebook view: bucket filter chips isolate error types; "Practice Bucket Quiz" launches targeted re-drill.

### ⏱️ Competitor Feature: EffortDNA Pacing & Question Timer (Darwin-style)
- Live per-question timer tracks seconds against NEET pacing benchmarks.
- Speed tags: 🟢 Optimal · 🟡 Moderate · 🔴 Time Sink (>90s) · ⚡ Rushed Guess (<8s)
- EffortDNA™ Matrix on Analytics dashboard: speed distributions and pacing coaching.

### 🎙️ Competitor Feature: Audio NCERT Podcast (NeetPrep-style)
- Client-side Web Speech API TTS reads textbook sentences aloud.
- Real-time reading cursor: highlights and scrolls each sentence as spoken.
- Controls: Play/Pause, Skip Forward/Back sentences, Speed (0.85×, 1.0×, 1.25×, 1.5×).

### 🧩 Competitor Feature: Cloze Deletion Active Recall (MemoNeet-style)
- `🧠 Cloze Recall` toggle in reader toolbar masks scientific terms with `[ ????? ]` blanks.
- Tapping a blank reveals the verbatim term.

### 🧪 NTA CBT Mock Simulator — Full NTA Specification
- Presets: Full NEET (200 min, 720 marks), Physics/Chemistry/Biology Drills (45 min, 45 Qs), Quick Mix (15 min, 10 Qs).
- 5-state question palette (⚪ Not Visited, 🔴 Not Answered, 🟢 Answered, 🟣 Marked, 🟣🟢 Answered+Marked).
- Section tabs: Physics, Chemistry, Botany, Zoology.
- Scorecard: section-wise marks, accuracy %, +4/−1 marking scheme, full solution review.

### 📊 Analytics Dashboard — EffortDNA + Score Predictor
- KPI cards: Total Answered, Platform Accuracy, Study Streak, Predicted NEET Score (out of 720).
- Subject mastery bars + 7-day streak heatmap.
- EffortDNA card: speed distribution, pacing grade, per-subject benchmarks.

### 📖 NCERT Reader — 3 Viewing Modes
- **📖 NCERT Book**: Verbatim textbook sheet with running head, typography, and paragraph anchors.
- **📄 PDF Canvas**: Mozilla PDF.js v3.11.174 native canvas rendering with zoom and coordinate overlay.
- **🌐 Embed**: NCERT PDF iframe with Google Drive mirror fallback. 3-state cycle via mode button.

---

## [v1.5.0] — 2026-09-08 — Google Drive PDF Mirror Integration

- Added `DRIVE` constant with verified Google Drive file IDs for all 79 chapters.
- PDF split-screen now cycles: Drive Embed → Native NCERT PDF → Google Viewer.
- Chapter page load automatically selects the optimal available PDF source.
- Drive IDs sourced from Tiwari Academy NCERT books index (2026-27 rationalised edition).

---

## [v1.0.0] — 2026-09-08 — Initial Platform Launch

### Core Architecture
- Single-file PWA (`index.html` + `styles.css` + `sw.js`): zero dependencies, zero build step.
- Client router with hash-free navigation via `navigate(page, args)`.
- All persistence in `localStorage`: progress, mistakes, starred, CBT history, flashcard SRS states.
- Web Audio API synthesizer: click, correct-answer, and marker-pen sounds — zero audio files.

### Initial Content (6 Books)
- Biology XI (19 chapters), Biology XII (13 chapters).
- Chemistry XI Part 1 (6 chapters), Chemistry XI Part 2 (3 chapters).
- Chemistry XII Part 1 (5 chapters), Chemistry XII Part 2 (5 chapters).
- `data/pyq.json`: 810 real PYQs from NEET & JEE Main (2010–2025).
- `data/formulas.json`: 60 formula reference cards (Physics XI/XII, Chemistry, Biology).

### Core Features Shipped
- Authentic split-view NCERT reader with verbatim textbook paragraphs and concept anchors.
- Sentence-level golden Stabilo marker pen (contextual relevance scoring algorithm).
- Exam pattern filters: Assertion-Reason, Statements I & II, Match-the-Columns, Standard MCQ.
- Formula drawer (`Alt+F`) with real-time search.
- Printable revision notes generator (`exportRevisionNotes()` with `@media print` CSS).
- Quick Quiz (10-question cross-book drill).
- SuperMemo SM-2 Flashcards deck.
- Mistakes Notebook + Starred Questions.
- Global Omnisearch (`Ctrl+K`).
- PWA manifest (`manifest.json`) + Service Worker (`sw.js`) offline caching.
- Dark / Light / OLED / Sepia theme system.
- Keyboard shortcuts: `1-4`/`A-D` (options), `H` (hint), `S` (star), `Space` (flip card).
