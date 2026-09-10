# PrepClone Enterprise — Roadmap & Milestone Tracker

---

## ✅ Milestone 1: Core Experience (COMPLETE)
- [x] Authentic NCERT split-view reader with verbatim paragraph anchors and running head.
- [x] Question practice interface: options, hints, answers, explanations, NCERT references.
- [x] Sentence-level golden Stabilo marker pen with contextual relevance scoring.
- [x] Starred / bookmarked questions with `localStorage` persistence.
- [x] Mistakes notebook: auto-logging incorrect answers + re-attempt with cleared state.
- [x] Dark, Light, OLED, and Warm Sepia high-contrast theme system.
- [x] Year weightage strip computed live from the PYQ bank.
- [x] Web Audio API synth: click, correct-answer, marker-pen sweep sounds.

## ✅ Milestone 2: Full Curriculum Scaling (COMPLETE)
- [x] Biology Class XI — 19 chapters, 252 pages, 1,142 questions, 19 PDFs.
- [x] Biology Class XII — 13 chapters, 228 pages, 889 questions, 13 PDFs.
- [x] Chemistry Class XI Part 1 — 6 chapters, 220 pages, 944 questions, 6 PDFs.
- [x] Chemistry Class XI Part 2 — 3 chapters, 93 pages, 368 questions, 3 PDFs.
- [x] Chemistry Class XII Part 1 — 5 chapters, 140 pages, 643 questions, 5 PDFs.
- [x] Chemistry Class XII Part 2 — 5 chapters, 144 pages, 628 questions, 5 PDFs.
- [x] Physics Class XI Part 1 — 7 chapters, 143 pages, 599 questions, 7 PDFs.
- [x] Physics Class XI Part 2 — 7 chapters, 133 pages, 588 questions, 7 PDFs.
- [x] Physics Class XII Part 1 — 8 chapters, 214 pages, 869 questions, 8 PDFs.
- [x] Physics Class XII Part 2 — 6 chapters, 123 pages, 471 questions, 6 PDFs.
- [x] 810 real PYQs from NEET & JEE Main (2010–2025) in `data/pyq.json`.
- [x] All 79 official NCERT chapter PDFs downloaded locally to `books/`.

## ✅ Milestone 3: Enterprise Tooling & Simulator (COMPLETE)
- [x] NTA NEET/JEE CBT Simulator: presets, 5-state palette, timer, section scorecards.
- [x] SuperMemo SM-2 spaced repetition flashcards deck (60 high-yield cards).
- [x] Performance analytics: KPI cards, NEET score predictor (out of 720).
- [x] Subject mastery bars (Physics, Chemistry, Botany, Zoology) + 7-day heatmap.
- [x] Global Omnisearch (`Ctrl+K`) across 7,136+ questions with background preloading.
- [x] PWA manifest + Service Worker with full offline precache (prepclone-v2.1.0).

## ✅ Milestone 4: Precision Learning & Exam Patterns (COMPLETE)
- [x] Sentence-level golden Stabilo highlighter pen (exact sentence isolation).
- [x] Modern exam pattern filters: Assertion-Reason, Statements I & II, Match-the-Columns.
- [x] Formula & Concept Drawer (`Alt+F`) with global search across all subjects.
- [x] Printable NCERT revision notes generator (`exportRevisionNotes()`).
- [x] Arrow-key (←/→) keyboard navigation for NCERT reader page turning.
- [x] 3-mode PDF viewer cycle: Drive Embed → Native NCERT PDF → Google Viewer.

## ✅ Milestone 5: Competitor-Beating Enterprise Features (COMPLETE)
- [x] **MemoNeet-style Inline PYQ Badges**: click → gold highlight + question scroll.
- [x] **Marks-style Mistake Categorization Buckets**: 5 error types + targeted drills.
- [x] **Darwin-style EffortDNA Pacing**: per-question timer + speed tags + matrix.
- [x] **NeetPrep-style Audio Podcast**: Web Speech API TTS with real-time cursor.
- [x] **MemoNeet-style Cloze Deletion**: dynamic keyword blanking on all 1,690 pages.

## ✅ Milestone 6: Quality Assurance & Audit (COMPLETE)
- [x] 122/122 automated Playwright end-to-end tests passing.
- [x] 46-assertion Deep Live Audit: every modal, drawer, interaction verified.
- [x] 79/79 exact chapter last-page data matches.
- [x] Zero JS console errors across full test session.
- [x] Zero HTTP 404s across all asset requests.
- [x] CHAPTER_MAP.md regenerated: per-chapter pages, questions, PDF paths.

## ✅ Milestone 7: 24/7 Live Hosting (COMPLETE)
- [x] Git repository initialized and all 107 files committed.
- [x] Public GitHub repo created: https://github.com/XKILLER2006Y/prepclone
- [x] 255 MB pushed to GitHub (79 PDFs + 10 data files + full app).
- [x] GitHub Pages enabled and built successfully.
- [x] Site live at **https://xkiller2006y.github.io/prepclone/**.
- [x] PWA installable on mobile/tablet via "Add to Home Screen".
- [x] `host.sh` script: `start` / `stop` / `status` / `restart` for local dev.

## ✅ Milestone 8: Cross-Device Sync, Notes, Custom CBT Studio, Solvers & Focus Audio (COMPLETE)
- [x] **Cross-Device Backup & Sync Hub**: Zero-cloud profile transfer via JSON backup and one-click base64 sync code with merge capability.
- [x] **Inline NCERT Sticky Notes**: Personal margin notes on every paragraph with persistence, 3rd "My Notes" tab in Notebook, and printable export sheet.
- [x] **Custom CBT Practice Test Studio**: Build custom mock exams across Physics, Chemistry, Botany, and Zoology with weak-chapter targeting and custom question counts.
- [x] **6 Interactive Formula Solvers**: Real-time numerical calculators for Carnot engine, Coulomb's law, De Broglie wavelength, radioactive decay, buffer pH, and Hardy-Weinberg equilibrium.
- [x] **Focus Mode & Binaural Beats Audio**: 100% offline client-side synthesized 10Hz Alpha / 6Hz Theta waves, pink noise, and Pomodoro study timer with 528Hz singing bowl chime.
- [x] **Daily Question Goal & Streak Engine**: Configurable MCQ targets (20/50/100 Qs/day) with navbar progress ring and celebratory canvas confetti.
- [x] **159/159 automated Playwright test assertions passing** (46 audit + 62 core + 14 enterprise + 37 milestone 8).

---

## 🔮 Possible Future Enhancements

- [ ] **NEET Rank Predictor**: percentile estimation using historical cutoff curves.
- [ ] **Handwriting Margin Notes**: Canvas-based stylus annotations on PDF pages.
- [ ] **2026 NEET PYQs**: add once dual-source verification is complete.
- [ ] **Tamil Nadu & State Board Variant**: extend data schema for state syllabi.
