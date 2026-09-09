# Research Dossier — source chains & product landscape

Methods used: web search (Exa), page scraping (Firecrawl markdown/links/query), PDF discovery, sitemap harvesting, verbatim cross-matching, slug forensics, official-paper PDF checks, community-signal triangulation. Every chain below was hands-on tested, not just Googled.

## 1. Source chains (ranked by extraction value)

### Tier 1 — transcribe directly (Qs + options + keys + years inline)
| Chain | Format | Covers | Notes |
|---|---|---|---|
| BYJU'S NEET (`byjus.com/neet/neet-questions-<slug>/`) | 10 Qs, A–D, answer-key table, year tags | All 32 bio chapters (hub map scraped) | Occasional key-table errors (caught: excretory Na, cell-cycle 4C, Went) |
| BYJU'S JEE (`byjus.com/jee/jee-main-<slug>-previous-year-questions-with-solutions/`) | 12–35 Qs, worked solutions, stated answers | 30 chem/phys chapters (hub map scraped) | NO year tags; occasional key errors (caught: d/f Q9 dual-key, bonding Q2/Q17/Q18/Q22, HC poly-yne/vinyl) |
| careers360 NEET articles | Full Q&A + solutions, recent years | Gap-filler (Solutions/Coordination/Amines), recency layer | Format varies per article |
| cracku JEE chapter PYQs (`cracku.in/jee-<slug>-pyq/`) | Full Qs + `correct answer:- N`, per-Q explanation URLs embed year+shift | All chem chapters (2021–2026 era) | Integer-type items unusable for MCQ schema; physics/chem slug collision (thermodynamics = physics!) |
| **eSaral JEE chapter PYQs** (`esaral.com/<slug>-jee-main-previous-year-questions-with-solutions/`) | Qs + options + `[TAG]` year + `Ans. (N)` inline, no login | All chem chapters (URL map harvested) | Newest Tier-1: 6/6 redox keys matched our bank exactly |

### Tier 2 — verify against (verbatim + years, keys gated)
| Chain | Use |
|---|---|
| MedicNEET chapter banks | Verbatim Q text + year tags; answers app-gated |
| MedicNEET concept pages | NCERT para mapping (bio only; 1 credit markdown beats 5-credit query mode) |
| MedicNEET marked-NCERT chemistry | Ch1 free on web (10 mole Qs mapped); Ch2–19 app-gated |
| ExamSIDE chapter listings | Year/shift tags via slug forensics; answers interaction-gated |
| NEET MIND chapter banks | Verbatim + years + difficulty (2024–2026 rich); ~10 free/chapter, rest signup-walled |
| Vedantu/Exemplar/PW pages | Q&A format with stated answers; topic-mixed, good spot-checks |
| EduRev 35-year tests | Detailed solutions; JS-gated rendering |
| NEETprep practice pages | Community accuracy % = weak signal only |

### Tier 3 — walled/heavy (documented, not used)
SelfStudys PDFs · AglaSem PDFs · Allen chapter PDFs · RankUpp PDFs (20k-Q claim) · askiitians downloads · SATHEE/Embibe/NTA Abhyas (login) · Teachmint mirrors (JS wall) · Scribd (JS wall) · careers360 PDF downloads (login-gated)

### Dead ends (probed, rejected)
- ncert.nic.in direct fetch (blocked on all egress; verified via search-index content instead)
- BYJU'S bio hub outage window (502/504s; pivoted to MedicNEET, resumed later)
- Firecrawl query-mode flakiness (fails under parallel load; markdown fallback proven)
- Physics-thermodynamics slug collision on cracku (wrong subject entirely)

## 2. Similar products (checked hands-on)
| Product | Bank | Model | Our edge vs them |
|---|---|---|---|
| TopAll | 60k AI-generated MCQs | Free, no signup | Ours are real PYQs + verified keys, not AI-written |
| MedicNEET | 2,596 real PYQs 2016–2026 | Web free, answers app-gated | Our answers + explanations are open, no login |
| NEET MIND | 938 chem PYQs (+bio/phys) | ~10 free/chapter, signup wall | Fully open, zero login, NCERT para links |
| ExQuizMe | 39,387 NCERT-mapped | Free solved sets | Verified keys + source traceability per Q |
| RankUpp | 20,000+ claimed (1988–2026) | Free PDFs | Structured app > PDFs; frequency analysis idea stolen (weightage strips) |
| Embibe / SATHEE / NTA Abhyas | Official-grade | Login-walled | No-login instant practice |
| eSaral / Allen / PW / Vedantu | Coaching content | App/video-gated | Open text, link-out to officials |
| Examophobia | 2026 papers + answers | Free | We skip 2026 (single-source recency policy) |

## 3. Standing policies (non-negotiable)
- No paywall circumvention (PrepPage Pro, app-gated answers stay ungated-around).
- No guessed years/keys/lines — generic tags + documented skips instead.
- No 2026/ReNEET keys without dual sources.
- No re-hosting PDFs/papers — link to officials.
- Every key needs 2+ independent sources or first-principles certainty + spot check.
- Counts/years in UI always compute from data, never hardcoded.
