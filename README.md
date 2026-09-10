# PrepClone — Enterprise-Grade Free NCERT Learning Platform

> **Mission**: Right to Education — 100% Free, Zero-Paywall, Zero-Subscription NCERT Practice & Mastery Platform for NEET & JEE Aspirants.

PrepClone is a client-first, offline-capable clone and enhancement of [PrepPage](https://preppage.in), built to give students across India unrestricted access to the complete NCERT science curriculum, paragraph-anchored question banks, authentic NCERT PDFs, an NTA CBT Mock Simulator, spaced repetition flashcards, and active recall tools.

## 🌐 Live Website (24/7 — No PC Required)

**https://xkiller2006y.github.io/prepclone/**

Open on any device: PC, Mac, Android, iPhone, tablet. Install as a PWA from your browser's "Add to Home Screen" option for offline access.

- GitHub Repository: https://github.com/XKILLER2006Y/prepclone
- Local development: `python3 -m http.server 8000` then open `http://localhost:8000/`
- Local + live tunnel: `./host.sh start` (uses Cloudflare tunnel)

---

## 🆚 PrepClone vs PrepPage Pro

| Feature | PrepPage Pro (Paid) | PrepClone (100% Free Forever) |
|---|:---:|:---:|
| **Paywalls / Subscriptions** | ₹₹₹ Monthly / Annual | **Zero (100% Free Forever)** |
| **User Accounts / Tracking** | Required | **No Account (Local-first)** |
| **NCERT Curriculum Coverage** | Gated past Page 5 | **10 Books · 79 Chapters · 1,690 Pages** |
| **Question Bank** | Restricted | **7,136 Questions (6,326 MCQs + 810 PYQs)** |
| **Official NCERT PDFs** | 403 without login | **79 Offline PDFs bundled locally** |
| **Reader Modes** | Single mode | **3 Modes: Sheet, PDF.js Canvas, Google Embed** |
| **Highlighter Precision** | Broad overlay | **Sentence-level golden Stabilo marker pen** |
| **Exam Patterns** | Standard MCQs | **A/R, Statements I & II, Match-the-Columns** |
| **Formula Reference** | None | **Instant Drawer (Alt+F) · 60 verified formulas** |
| **Printable Notes** | None | **One-click print-optimized revision sheet** |
| **CBT Simulator** | Limited | **Full NTA-spec 200-min NEET simulator** |
| **Active Recall** | None | **SuperMemo SM-2 spaced repetition · 60 cards** |
| **PYQ Badges (Inline)** | None | **MemoNeet-style inline sentence badges** |
| **Mistake Buckets** | None | **5-bucket categorization + practice drills** |
| **Pacing Analytics** | None | **Darwin EffortDNA per-question timer** |
| **Audio TTS Reader** | None | **NeetPrep-style NCERT podcast (Web Speech API)** |
| **Cloze Blanks** | None | **MemoNeet-style active recall masking** |
| **Cross-Device Sync** | Cloud login required | **Zero-Cloud Profile Sync & One-Click Code** |
| **Personal Margin Notes** | None | **Inline Paragraph Sticky Notes + Export Sheet** |
| **Custom Test Studio** | Locked presets | **Custom CBT Builder + Weak-Chapter Targeting** |
| **Formula Solvers** | None | **6 Interactive Solvers (Carnot, Coulomb, etc.)** |
| **Focus Audio & Beats** | None | **10Hz Alpha / 6Hz Theta Waves + Pomodoro** |
| **Daily Target Goals** | None | **Configurable MCQ Goal + Streak Engine** |
| **Offline Capability** | Online only | **100% Offline PWA (Service Worker v2.3.0)** |
| **Keyboard Navigation** | None | **Arrow keys, A-D, H, S, Space, Ctrl+K, Alt+F** |

---

## 📚 Complete Curriculum (10 Books · 79 Chapters · 1,690 Pages)

| Book | Chapters | Pages | Questions | PDFs |
|---|:---:|:---:|:---:|:---:|
| Biology Class XI | 19 | 252 | 1,142 | 19 |
| Biology Class XII | 13 | 228 | 889 | 13 |
| Chemistry Class XI Part 1 | 6 | 220 | 944 | 6 |
| Chemistry Class XI Part 2 | 3 | 93 | 368 | 3 |
| Chemistry Class XII Part 1 | 5 | 140 | 643 | 5 |
| Chemistry Class XII Part 2 | 5 | 144 | 628 | 5 |
| Physics Class XI Part 1 | 7 | 143 | 599 | 7 |
| Physics Class XI Part 2 | 7 | 133 | 588 | 7 |
| Physics Class XII Part 1 | 8 | 214 | 869 | 8 |
| Physics Class XII Part 2 | 6 | 123 | 471 | 6 |
| **Total** | **79** | **1,690** | **7,136** | **79** |

> Full per-chapter breakdown with exact page counts and PDF paths: see [`CHAPTER_MAP.md`](./CHAPTER_MAP.md).

---

## 🚀 Features

### 1. Authentic Split-View NCERT Reader
Three switchable left-pane modes:
- **📖 NCERT Book**: Verbatim textbook sheet with running head, topic subheadings, and paragraph layout.
- **📄 PDF Canvas**: Mozilla PDF.js v3.11.174 canvas rendering with zoom and coordinate highlight overlay.
- **🌐 Embed**: Native NCERT PDF iframe, falls back to Google Drive mirror automatically.

Right pane: interactive question stream for the active page (options, difficulty, exam tags, explanations, NCERT anchors).

### 2. Sentence-Level Golden Stabilo Marker Pen
Clicking **💡 Hint & NCERT Anchor** on a question:
1. Scores every sentence in the target paragraph by keyword overlap with the question, options, and answer.
2. Wraps the winning sentence in `<mark class="ncert-sentence-marker sweep">`.
3. Plays a Web Audio API marker-sweep sound.
4. Smooth-scrolls the textbook to center the highlighted sentence.

### 3. Modern Exam Pattern Filters
- `⚡ Assertion-Reason (A/R)` · `📋 Statements I & II` · `🔗 Match-the-Columns` · `◉ Standard MCQ`
- Filter by difficulty (Easy / Medium / Hard / PYQs) and exam (ALL / NEET / JEE).

### 4. Formula & Concept Drawer (`Alt+F`)
- Slide-out drawer accessible anywhere via `Alt+F` or the toolbar button.
- 60 verified formulas across Physics XI, Physics XII, Chemistry, Biology.
- Real-time global search (searches all subject tabs simultaneously).

### 5. Printable Revision Notes
- `exportRevisionNotes()` generates a print-optimized chapter summary.
- Includes: syllabus overview, verbatim textbook anchors, relevant formulas, high-yield questions + solutions.
- Clean `@media print` CSS — works with browser's "Print to PDF".

### 6. NTA CBT Mock Simulator
Replicates the NTA NEET/JEE exam interface:
- **Presets**: Full NEET (200 min · 720 marks), Physics/Chemistry/Biology Drills (45 min · 45 Qs), Quick Mix (15 min · 10 Qs).
- **5-state palette**: ⚪ Not Visited · 🔴 Not Answered · 🟢 Answered · 🟣 Marked for Review · 🟣🟢 Answered+Marked.
- **Scorecard**: section-wise marks, accuracy %, +4/−1 marking, full solution review.

### 7. SuperMemo SM-2 Flashcards
- 60 high-yield NCERT cards covering Physics, Chemistry, and Biology.
- SM-2 algorithm: rate recall (Again / Hard / Good / Easy) → dynamically adjusts intervals and ease factor.

### 8. Analytics & NEET Score Predictor
- KPIs: Total Answered, Platform Accuracy, Study Streak, Predicted NEET Score (out of 720).
- Subject mastery bars (Physics, Chemistry, Botany, Zoology) + 7-day heatmap.
- EffortDNA™ pacing matrix: speed distribution with per-subject benchmarks.

### 9. Mistakes & Starred Notebook
- Auto-captures incorrect answers into a revision notebook.
- 5-bucket error classification: 🟡 Silly · 🔴 Conceptual · 🟣 Formula/Fact · ⚪ Guess.
- Bucket filter chips + targeted "Practice Bucket Quiz".
- Starred questions for pre-exam revision.

### 10. Global Omnisearch (`Ctrl+K`)
- Instant cross-book search across 7,136+ questions, 79 chapters, formulas.
- Question banks preloaded in background on first open.

### 11. Inline NCERT PYQ Badges
- `🎯 NEET '23`, `🎯 JEE '21` badges embedded beside exact textbook sentences.
- Click → highlight sentence in gold + scroll question panel to that PYQ.

### 12. EffortDNA Pacing & Question Timer
- Per-question live timer vs NEET benchmarks (Biology 35s, Chemistry 60s, Physics 80s).
- Speed tags: 🟢 Optimal · 🟡 Moderate · 🔴 Time Sink (>90s) · ⚡ Rushed (<8s).

### 13. Audio NCERT Podcast
- Web Speech API TTS reads each sentence aloud with a real-time scrolling cursor.
- Controls: Play/Pause, Skip ⏮️/⏭️, Speed (0.85×, 1.0×, 1.25×, 1.5×).

### 14. Cloze Deletion Active Recall
- `🧠 Cloze Recall` toggle masks scientific keywords with `[ ????? ]` interactive blanks.
- Tap any blank to reveal the verbatim NCERT term.
- Dynamic extraction: works across all 1,690 pages, not a static word list.

### 15. Cross-Device Backup & Sync Hub (`☁️ Sync`)
- **Zero-Cloud Privacy**: Transfer your complete study history between PC, laptop, phone, and tablet without external databases or accounts.
- **Export / Import**: 1-click JSON backup bundling progress, mistake buckets, notes, and streak.
- **One-Click Sync String**: Base64 encoded payload to copy & paste across devices in seconds.
- **Local Snapshots**: Automatic rotating local backups to prevent accidental cache loss.

### 16. Personal NCERT Margin Notes ("My Notes")
- `✏️ Note` button attached directly to every textbook paragraph in the authentic reader view.
- Persistent sticky note card with timestamps, editing, and inline deletion.
- Dedicated **"📝 My Notes"** tab in Notebook view with subject filters and search.
- 1-click `📖 Open in NCERT ➔` button navigates directly to the textbook paragraph with a golden pulse.
- `🖨️ Export My Notes` generates a clean printable revision sheet for offline study.

### 17. Custom CBT Practice Test Studio
- Build custom timed tests across any combination of Physics, Chemistry, Botany, and Zoology.
- **Target Weak Areas**: Automatically prioritizes chapters with mistakes or accuracy under 70%.
- **PYQs Only**: Instant marathon test using real NEET/JEE questions from 2010–2025.
- Selectable question counts (15, 30, 45, 90, 180 Qs) and customizable timer modes.

### 18. Interactive Formula Solvers
- Mode switch in Formula Drawer (`Alt+F`): `⚡ Reference Cards` ⇄ `🧮 Interactive Solvers (6)`.
- Real-time numerical solvers with live step-by-step substitution:
  - Carnot Heat Engine Efficiency ($\eta = 1 - T_C / T_H$)
  - Coulomb's Electrostatic Force ($F = k |q_1 q_2| / r^2$)
  - Electron De Broglie Wavelength ($\lambda = 12.27 / \sqrt{V}\ \text{Å}$)
  - Radioactive Decay & Half-Life ($N = N_0 (1/2)^{t / t_{1/2}}$)
  - Henderson-Hasselbalch Buffer pH ($\text{pH} = \text{pK}_a + \log\frac{[\text{Salt}]}{[\text{Acid}]}$)
  - Hardy-Weinberg Population Genetics ($p + q = 1, p^2 + 2pq + q^2 = 1$)

### 19. Focus Mode & Binaural Beats Audio (`🎧 Focus`)
- 100% client-side synthesized study sounds using Web Audio API (zero audio files, zero streaming bandwidth).
- **Binaural Beats**: 🧠 Alpha Waves (10 Hz) for active recall & alertness; 🌙 Theta Waves (6 Hz) for deep memory consolidation.
- **Soft Pink Noise**: Continuous smooth noise to drown out background ambient chatter.
- **Integrated Pomodoro Timer**: 25-minute study / 5-minute break countdown with gentle Tibetan singing bowl chime (528 Hz).

### 20. Daily Question Target & Streak Engine
- Configurable daily MCQ goal: 20, 50, or 100 questions per day.
- Top navigation progress pill (`🎯 0/50 Qs`) with live updating counter.
- Celebratory canvas confetti particle burst when target is reached for the day.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+K` / `Cmd+K` | Open Global Omnisearch |
| `Alt+F` | Toggle Formula Drawer |
| `Esc` | Close modal / drawer |
| `←` / `→` | Previous / Next NCERT page (reader mode) |
| `1`–`4` or `A`–`D` | Select answer option |
| `H` | Toggle Hint & Sentence Marker |
| `S` | Toggle Star/Bookmark |
| `Space` | Flip Flashcard |

---

## 🛠️ Setup & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/XKILLER2006Y/prepclone.git
cd prepclone

# 2. Serve locally (any HTTP server works)
python3 -m http.server 8000
# → open http://localhost:8000/

# 3. Or use the hosting script (starts server + Cloudflare live tunnel)
./host.sh start      # Start server + live tunnel
./host.sh status     # Show live URL
./host.sh stop       # Stop everything
```

### Running the Test Suite
```bash
# Core Platform Suite (62 assertions)
NODE_PATH=/tmp/opencode/node_modules node /tmp/opencode/pwtest/test.js

# Deep Live Audit (46 assertions)
NODE_PATH=/tmp/opencode/node_modules node scratch/deep_live_audit.js

# Enterprise Features Suite (14 assertions)
NODE_PATH=/tmp/opencode/node_modules node scratch/test_enterprise_features.js
```
**Current status: 122/122 tests passing · 0 JS errors · 0 404s**

---

## 📁 Project Structure

```
preppage-clone/
├── index.html          # Entire SPA: router, all views, all JS (4,570 lines)
├── styles.css          # All styles: themes, animations, print CSS (64 KB)
├── sw.js               # Service Worker: offline precache (prepclone-v2.1.0)
├── manifest.json       # PWA manifest: name, icons, theme color
├── host.sh             # One-click server + Cloudflare tunnel manager
├── data/
│   ├── biology-11.json         # 252 pages, 1,142 questions
│   ├── biology-12.json         # 228 pages, 889 questions
│   ├── chemistry-11-part-1.json# 220 pages, 944 questions
│   ├── chemistry-11-part2.json # 93 pages, 368 questions
│   ├── chemistry-12-part-1.json# 140 pages, 643 questions
│   ├── chemistry-12-part-2.json# 144 pages, 628 questions
│   ├── physics-11-part-1.json  # 143 pages, 599 questions
│   ├── physics-11-part-2.json  # 133 pages, 588 questions
│   ├── physics-12-part-1.json  # 214 pages, 869 questions
│   ├── physics-12-part-2.json  # 123 pages, 471 questions
│   ├── pyq.json                # 810 real PYQs (NEET & JEE 2010–2025)
│   └── formulas.json           # 60 formula reference cards
├── books/
│   ├── biology-11/     # kebo101.pdf – kebo119.pdf (19 PDFs)
│   ├── biology-12/     # lebo101.pdf – lebo113.pdf (13 PDFs)
│   ├── chemistry-11-part-1/  # kech101–kech106 (6 PDFs)
│   ├── chemistry-11-part2/   # kech201–kech203 (3 PDFs)
│   ├── chemistry-12-part-1/  # lech101–lech105 (5 PDFs)
│   ├── chemistry-12-part-2/  # lech201–lech205 (5 PDFs)
│   ├── physics-11-part-1/    # keph101–keph107 (7 PDFs)
│   ├── physics-11-part-2/    # keph201–keph207 (7 PDFs)
│   ├── physics-12-part-1/    # leph101–leph108 (8 PDFs)
│   └── physics-12-part-2/    # leph201–leph206 (6 PDFs)
├── vendor/pdfjs/       # Mozilla PDF.js v3.11.174 (bundled, offline)
├── images/             # PWA icons (SVG)
├── CHANGELOG.md        # Full version history of every change
├── CHAPTER_MAP.md      # Per-chapter inventory: pages, Qs, PDF paths
├── ARCHITECTURE.md     # Technical deep-dive: state model, schemas, algorithms
├── PROGRESS.md         # Test results and content verification ledger
├── RESEARCH.md         # PYQ source chains and competitor analysis
└── ROADMAP.md          # Milestone tracker
```

---

## 🔒 Privacy & Philosophy

- **Zero Remote Tracking**: All progress, bookmarks, CBT scores, and streaks stay on your device in `localStorage`.
- **Zero Data Collection**: No cookies, no analytics, no external login.
- **Offline-First**: Service Worker precaches all 10 books and 810 PYQs on install.
- **Fair-Use Educational**: Built for non-commercial educational empowerment under the right to free education.
