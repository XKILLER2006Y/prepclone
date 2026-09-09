# PrepClone — Enterprise-Grade Free NCERT Learning Platform

> **Mission**: Right to Education — 100% Free, Zero-Paywall, Zero-Subscription NCERT Practice & Mastery Platform for NEET & JEE Aspirants.

PrepClone is a client-first, offline-capable clone and enhancement of [PrepPage](https://preppage.in), built to provide students across India with unrestricted access to NCERT textbook curriculum, paragraph-anchored question banks, authentic PDF scans, interactive Computer-Based Testing (CBT), and active recall spaced repetition systems.

---

## 🌟 Key Highlights & Comparison

| Feature | PrepPage Pro (Paid) | PrepClone (100% Free Forever) |
|---|:---:|:---:|
| **Paywalls / Subscriptions** | ₹₹₹ Monthly / Annual Paywall | **Zero (100% Free Forever)** |
| **User Accounts / Tracking** | Required (Clerk / Auth gated) | **No Account Required** (Local-first persistence) |
| **NCERT Curriculum Coverage** | Gated past Page 5 | **All 10 Books · 79 Chapters · 1,690 Pages (100% Complete)** |
| **Question Bank Size** | Restricted | **7,136 Verified NCERT High-Yield Questions + PYQs** |
| **Official NCERT PDFs** | 403 Forbidden without login | **79 Offline PDFs Bundled Locally (1,690 Pages Total)** |
| **Textbook Reading Modes** | Single mode | **3 Modes**: Authentic Sheet, Mozilla PDF.js Canvas, Google Embed |
| **Highlighter Precision** | Broad box overlay | **Exact Sentence-Level Stabilo Golden Marker Pen** |
| **Modern Exam Patterns** | Standard MCQs only | **Assertion-Reason (A/R), Statements I & II, Match-the-Columns** |
| **Formula Cheat Sheets** | None / Add-on | **Instant Slide-Out Drawer (`Alt+F`) with 50+ Verified Formulas** |
| **Printable Revision Sheets** | None | **One-Click Export to Clean PDF / Printable Revision Notes** |
| **NTA NEET/JEE CBT Simulator**| Limited drills | **Full NTA-Spec 200-Min 720-Mark Exam Simulator with Scorecards** |
| **Active Recall Flashcards** | None | **SuperMemo SM-2 Spaced Repetition Engine** |
| **Competitor Superpowers** | Paid extras | **Audio NCERT Podcast, Cloze Deletion Blanks, EffortDNA Pacing, Mistake Buckets** |
| **Offline Capability** | Online Only | **100% Offline PWA (Service Worker Cached)** |
| **Audio Feedback** | None | **Web Audio API Synth (Click, Success, Marker Pen Swish)** |

---

## 📚 Complete Curriculum Coverage (100% Authentic NCERT)

PrepClone covers all 10 core NCERT science textbooks for Classes XI and XII across Physics, Chemistry, and Biology from Page 1 to the final page of every single chapter:

1. **Biology Class XI** (`biology-11`): 19 Chapters · 252 Pages · 1,142 Questions · Official PDF `kebo101`–`kebo119`
2. **Biology Class XII** (`biology-12`): 13 Chapters · 228 Pages · 889 Questions · Official PDF `lebo101`–`lebo113`
3. **Chemistry Class XI Part 1** (`chemistry-11-part-1`): 6 Chapters · 220 Pages · 944 Questions · Official PDF `kech101`–`kech106`
4. **Chemistry Class XI Part 2** (`chemistry-11-part2`): 3 Chapters · 93 Pages · 368 Questions · Official PDF `kech201`–`kech203`
5. **Chemistry Class XII Part 1** (`chemistry-12-part-1`): 5 Chapters · 140 Pages · 643 Questions · Official PDF `lech101`–`lech105`
6. **Chemistry Class XII Part 2** (`chemistry-12-part-2`): 5 Chapters · 144 Pages · 628 Questions · Official PDF `lech201`–`lech205`
7. **Physics Class XI Part 1** (`physics-11-part-1`): 7 Chapters · 143 Pages · 599 Questions · Official PDF `keph101`–`keph107`
8. **Physics Class XI Part 2** (`physics-11-part-2`): 7 Chapters · 133 Pages · 588 Questions · Official PDF `keph201`–`keph207`
9. **Physics Class XII Part 1** (`physics-12-part-1`): 8 Chapters · 214 Pages · 869 Questions · Official PDF `leph101`–`leph108`
10. **Physics Class XII Part 2** (`physics-12-part-2`): 6 Chapters · 123 Pages · 471 Questions · Official PDF `leph201`–`leph206`

**Grand Total**: **10 Books · 79 Chapters · 1,690 NCERT Textbook Pages · 7,136 Questions (6,326 Textbook MCQs + 810 PYQs) · 79 Bundled NCERT Chapter PDFs**.

---

## 🚀 Core Features

### 1. Authentic Split-View NCERT Reader
- **Left Pane**: Features three switchable reading modes:
  - **📖 NCERT Book**: Verbatim textbook sheet replicating the official NCERT running head, typography, topic subheadings, and paragraph layout.
  - **📄 PDF Canvas**: Native Mozilla PDF.js v3.11.174 client-side rendering with zoom, pan, and coordinate overlay bounding boxes.
  - **🌐 Embed**: Native NCERT PDF iframe with automatic fallbacks to Google Drive mirrors.
- **Right Pane**: Interactive questions for the active page, with options, difficulty badges, exam tags, instant checking, and detailed NCERT conceptual explanations.

### 2. Sentence-Level Golden Stabilo Marker Pen
- Clicking **💡 Hint & NCERT Anchor** on any question card dynamically identifies the **exact sentence or clause** within the target NCERT textbook paragraph that directly answers the question.
- Highlights the text with an animated golden fluorescent marker pen effect (`<mark class="ncert-sentence-marker">`) and plays an authentic soft marker pen swish sound via the Web Audio API.

### 3. Modern Exam Pattern Filters (NEET 2024–2026)
- Filter chapter questions by examination pattern:
  - `⚡ Assertion-Reason (A/R)`
  - `📋 Statements I & II`
  - `🔗 Match-the-Columns`
  - `◉ Standard NCERT MCQ`
- Filter by difficulty (`Easy`, `Medium`, `Hard`, `PYQs`) and target exam (`ALL`, `NEET`, `JEE`).

### 4. Formula & Concept Reference Drawer (`Alt+F`)
- Instant slide-out drawer accessible from anywhere in the app or via `Alt+F`.
- Categorized by **Physics XI**, **Physics XII**, **Chemistry**, and **Biology**.
- Includes verified formulas, SI units, dimensional formulas, thermodynamic equations, optics laws, and genetic ratios.
- Real-time search filter for equations, laws, and constants.

### 5. Printable Revision Notes Exporter
- Click **🖨️ Revision Notes** in any chapter header to generate a print-optimized revision sheet.
- Contains the chapter syllabus summary, verbatim core textbook anchors with highlighted key statements, relevant formulas, and high-yield questions with worked explanations.
- Formatted with clean CSS `@media print` rules for direct export to PDF or physical printout.

### 6. NTA Computer-Based Test (CBT) Simulator
- Replicates the official National Testing Agency (NTA) exam interface.
- Presets for:
  - **Full NEET Mock Test** (200 minutes · 720 marks · Physics, Chemistry, Botany, Zoology)
  - **Physics Drill** (45 mins · 45 Qs)
  - **Chemistry Drill** (45 mins · 45 Qs)
  - **Biology Drill** (45 mins · 45 Qs)
  - **Quick Mix Drill** (15 mins · 10 Qs)
- Features official 5-state question palette:
  - ⚪ Not Visited
  - 🔴 Not Answered
  - 🟢 Answered
  - 🟣 Marked for Review
  - 🟣🟢 Answered & Marked for Review
- Comprehensive performance scorecard with section-wise marks (+4/−1 marking scheme), accuracy percentage, and review solutions.

### 7. SuperMemo SM-2 Active Recall Flashcards
- Spaced Repetition System (SRS) based on the scientifically proven SM-2 algorithm.
- Displays high-yield concept prompts with 3D flip card animation.
- Rate your recall (`Again <1m`, `Hard 1d`, `Good 3d`, `Easy 6d`) to dynamically adjust repetitions, ease factors (EF), and intervals.

### 8. Analytics & NEET Score Predictor
- Live KPI cards: Total Answered, Platform Accuracy, Study Streak, and Predicted NEET Score (out of 720).
- Subject mastery breakdown bars for Physics, Chemistry, Botany, and Zoology.
- 7-day study activity heatmap.

### 9. Mistakes & Starred Notebook
- Automatically captures every incorrectly answered question into a dedicated revision notebook.
- Re-attempt mistakes with single-click answer clearing.
- Star questions anytime with the `★` bookmark button for targeted pre-exam revision.

### 10. Global Omnisearch (`Ctrl+K`)
- Instant keyword search across all 79 chapters, 2,785 questions, and formulas with keyboard navigation.

### 11. MemoNeet-Style Inline NCERT PYQ Badges
- Interactive badges (e.g. `🎯 NEET '23`, `🎯 NEET '21`) embedded directly beside textbook sentences in the authentic reader.
- Clicking any badge instantly highlights the sentence in gold, scrolls the question panel to the exact PYQ, and triggers an attention pulse.

### 12. Marks-Style Mistake Categorization Buckets & Revision Vault
- When an answer is submitted incorrectly, a 1-click mistake categorization bar appears:
  - 🟡 **Silly Mistake** (Misread question, calculation slip)
  - 🔴 **Conceptual Trap** (Theory misconception)
  - 🟣 **Formula / Fact Slip** (Forgot constant or equation)
  - ⚪ **Wild Guess**
- In the **Notebook**, dedicated bucket filters allow students to isolate specific error types and launch targeted **"Practice Bucket Quizzes"**.

### 13. Darwin-Style EffortDNA Pacing & Question Timer
- Discreet live question timer tracking seconds per question against standard NEET pacing benchmarks (Biology 35s, Chemistry 60s, Physics 80s).
- Tags each attempt: 🟢 **Optimal Speed**, 🟡 **Moderate**, 🔴 **Time Sink (>90s)**, ⚡ **Rushed Guess (<8s)**.
- Integrated **EffortDNA™ Matrix** on the Analytics dashboard with speed distributions and actionable pacing coaching.

### 14. Neetprep-Style Audio NCERT Podcast Reader (Native Web Speech API)
- 100% free, client-side text-to-speech engine that reads textbook sentences aloud.
- Real-time reading cursor: highlights and scrolls each sentence as it is spoken.
- Controls for `Play/Pause`, `Skip Sentences (⏮️/⏭️)`, and `Speed (0.85x, 1.0x, 1.25x, 1.5x)`.

### 15. MemoNeet-Style Cloze Deletion Active Recall Mode
- `🧠 Cloze Recall` toggle in the reader toolbar masks high-yield scientific names, enzymes, chemical formulas, and constants with interactive `[ ????? ]` blanks.
- Tapping any blank flips it to reveal the verbatim term for rapid active recall drills.

---

## ⌨️ Keyboard Shortcuts Cheatsheet

| Shortcut | Action |
|---|---|
| `Ctrl + K` or `Cmd + K` | Open Global Omnisearch |
| `Alt + F` | Toggle Formula & Constants Drawer |
| `Esc` | Close Omnisearch, Formula Drawer, or Modal |
| `1` / `2` / `3` / `4` or `A` / `B` / `C` / `D` | Select Question Option (Chapter & Quiz views) |
| `H` | Toggle Hint & Sentence Marker Highlight |
| `S` | Toggle Bookmark / Star Question |
| `Space` | Flip Flashcard (in Flashcards mode) |

---

## 🛠️ Architecture & Local Setup

PrepClone is intentionally built as a lightweight, zero-dependency static Progressive Web Application (PWA).

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge, Chromium).
- Optional: Python 3, Node.js, or any static HTTP server.

### Running Locally
```bash
# Clone or navigate to the repository
cd preppage-clone

# Start a local HTTP server using Python:
python3 -m http.server 8000

# Or using Node.js:
npx serve .
```
Visit `http://localhost:8000/` in your browser.

### Running Automated Playwright Test Suite
```bash
# Run the 62-test automated end-to-end suite:
NODE_PATH=/tmp/opencode/node_modules node /tmp/opencode/pwtest/test.js
```

---

## 🔒 Privacy & Philosophy

- **Zero Remote Tracking**: All study history, bookmarks, CBT scores, and streak data remain strictly on your device in `localStorage`.
- **Zero Data Collection**: No cookies, no analytics tracking, no external login providers.
- **Fair Use Educational Clone**: Developed for non-commercial educational empowerment, research, and offline learning under the fundamental right to free education.
