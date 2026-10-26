---
title: "Examance"
excerpt: "Write LaTeX exams, grade them anonymously, and keep student data end-to-end encrypted"
header:
  image: examance/banner.jpg
  teaser: examance/overview.jpg
---

# Anonymous exam grading, privacy first

Teachers create exams in LaTeX, print booklets with pseudonym QR codes, and grade student submissions anonymously. All personal data, scans, and grades are encrypted directly in the browser (AES-256-GCM) — the server only ever sees ciphertext.

<p>
  <a href="https://examance.valentin-herrmann.com" class="btn btn--primary" target="_blank" rel="noopener"><i class="fas fa-rocket"></i> Try Beta</a>
  <a href="https://github.com/ValentinHerrmann/Examance" class="btn btn--inverse" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
  <a href="https://github.com/ValentinHerrmann/Examance/blob/main/docs/pitches/examance-ui.pdf" class="btn btn--info" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> Pitch Deck (German)</a>
</p>
<small style="opacity:0.8;">*Beta account access available upon request (invite only).*</small>

---

## Why Examance

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-user-secret"></i> Fair &amp; Anonymous</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">QR pseudonyms hide student identities until grading ends, eliminating unconscious bias and halo effects.</p>
  </div>
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-pen-nib"></i> Real Paper Exams</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">Students write by hand. Teachers grade on screen via one-pass batch scans or directly on paper with manual score entry.</p>
  </div>
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-bolt"></i> Automated Assistance</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">Instant point sums (<code>\BE</code>), auto multiple-choice cross detection with teacher confirmation, and real-time grade distributions.</p>
  </div>
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-shield-alt"></i> Zero-Knowledge Privacy</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">Client-side AES-256-GCM encryption built for German schools (DSGVO). Server administrators cannot read student names or marks.</p>
  </div>
</div>

---

## Workflow: From Question Bank to Final Grades

### 1. Create: LaTeX Library &amp; Exam Builder

Write reusable exercises in LaTeX with live WebAssembly rendering. Total marks compute automatically from points declared in code. Generate matched student question papers and teacher marking schemes in seconds.

<figure class="half">
  <a href="/examance/t-exercise-editor.jpg"><img src="/examance/t-exercise-editor.jpg" alt="LaTeX Exercise Editor" style="border-radius:10px;"></a>
  <a href="/examance/t-exam-builder.jpg"><img src="/examance/t-exam-builder.jpg" alt="Exam Builder" style="border-radius:10px;"></a>
  <figcaption><b>Left:</b> Exercise editor with live preview; points tally automatically from LaTeX commands (<code>\BE</code>). <b>Right:</b> Assemble full exams, select variants (A/B), and configure grading scales.</figcaption>
</figure>

* **Modular exercise pool:** department-wide sharing, versioned updates, and variant support (Group A/B).
* **Flexible Multiple Choice:** single- or multiple-select with configurable penalty rules (clamped at zero).
* **Print-ready output:** typesets student booklets, cover sheets, and marking rubrics simultaneously.

#### Interactive Showcase: One Source, Two Sheets
A single LaTeX source file generates both student answer booklets (lines, grids, fill-ins) and teacher solutions (sample answers, marking criteria).

<figure class="full">
  <a href="/examance/snippets.png"><img src="/examance/snippets.png" alt="LaTeX Snippets" style="border-radius:10px;"></a>
  <figcaption><b>LaTeX Snippets:</b> Pre-built formatting blocks for tables, coordinate grids, and code listings.</figcaption>
</figure>

{% include synced-pdf-viewer.html
  left_pdf="/examance/snippets_template.pdf"
  right_pdf="/examance/snippets_solution.pdf"
  left_title="Template (Student Sheet)"
  right_title="Solution (Teacher Sheet)"
  id="examance-snippets-viewer"
%}

---

### 2. Grade: QR Codes &amp; Automated Detection

Students write exams on paper. The entire class stack is scanned into a single PDF, automatically split by QR pseudonyms, and presented for on-screen grading.

<figure class="half">
  <a href="/examance/t-grading.jpg"><img src="/examance/t-grading.jpg" alt="Anonymous On-Screen Grading" style="border-radius:10px;"></a>
  <a href="/examance/t-mc-review.jpg"><img src="/examance/t-mc-review.jpg" alt="Multiple Choice Review" style="border-radius:10px;"></a>
  <figcaption><b>Left:</b> Stamp marks directly onto student scans; points tally in real time under pseudonym IDs. <b>Right:</b> Machine-read multiple choice marks flagged for rapid teacher verification.</figcaption>
</figure>

* **One-pass scan import:** automatically separates booklet pages and pairs them to pseudonym IDs; unreadable pages go to review.
* **Smart tick-stamp grading:** interactive digital stamps on student scans calculate total scores instantly.
* **Human-in-the-loop MC:** computer vision flags ambiguous, faint, or crossed-out marks for teacher confirmation.
* **Paper-only fallback:** grade physical papers traditionally and input scores via quick keyboard entry or Excel paste (<a href="/examance/t-paper-entry.jpg">view paper entry</a>).

---

### 3. Analyze: Real-Time Statistics &amp; Difficulty Drift

Results appear immediately as grading progresses: grade distribution curves, class averages, and borderline candidates are computed on the fly.

<figure class="half">
  <a href="/examance/t-results.jpg"><img src="/examance/t-results.jpg" alt="Exam Results &amp; Grade Distribution" style="border-radius:10px;"></a>
  <a href="/examance/09b-variant-comparison.jpg"><img src="/examance/09b-variant-comparison.jpg" alt="Variant Difficulty Comparison" style="border-radius:10px;"></a>
  <figcaption><b>Left:</b> Instant grade curves and candidate score distributions. <b>Right:</b> Automated statistical check detects unfair difficulty gaps between exam variants (e.g., Group A vs B).</figcaption>
</figure>

* **Fairness checks:** alerts teachers when Group A and B deviate significantly (&ge;15 percentage points).
* **Longitudinal exercise tracking:** historical exercise performance across cohorts to refine question difficulty.
* **Encrypted export:** export anonymized data or full encrypted grade archives into school spreadsheets.

---

## Security &amp; Privacy by Design

Built specifically around German public school compliance (DSGVO / GDPR).

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-lock"></i> Client-Side E2EE</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">Student names, scans, and grades are encrypted via AES-256-GCM in the browser before upload. Keys never leave the teacher's device.</p>
  </div>
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-key"></i> Passkey &amp; 2FA Auth</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">256-bit encryption keys unlocked via WebAuthn Passkeys or Argon2id passwords. Emergency recovery codes prevent accidental data loss.</p>
  </div>
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-server"></i> Zero Server Knowledge</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">The backend stores only ciphertext blobs. Even root server admins cannot view exam grades, student identities, or scanned scripts.</p>
  </div>
  <div class="notice" style="margin:0 !important; padding:1.1rem; border-radius:10px;">
    <h4 style="margin-bottom:0.4rem;"><i class="fas fa-school"></i> School Control (DSGVO)</h4>
    <p style="font-size:0.9rem; line-height:1.4; margin:0;">Self-hosted via Docker with provided compliance documentation (DPIA, processing agreements). <b>No AI grading:</b> teachers retain 100% evaluation control.</p>
  </div>
</div>

---

## Tech Stack

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
  <span class="btn btn--inverse btn--small" style="cursor:default;">Frontend: SvelteKit (Svelte 5)</span>
  <span class="btn btn--inverse btn--small" style="cursor:default;">Browser Crypto: Web Crypto API (AES-256-GCM)</span>
  <span class="btn btn--inverse btn--small" style="cursor:default;">Browser LaTeX: XeLaTeX (WebAssembly)</span>
  <span class="btn btn--inverse btn--small" style="cursor:default;">Backend: FastAPI (Python) &amp; Docker</span>
  <span class="btn btn--inverse btn--small" style="cursor:default;">Database: PostgreSQL &amp; Redis</span>
  <span class="btn btn--inverse btn--small" style="cursor:default;">Server LaTeX: Tectonic</span>
</div>

---

## Information Posters (German A3)

<figure class="half">
  <a href="/examance/poster-ui-1.jpg"><img src="/examance/poster-ui-1.jpg" alt="Poster Screenshot Tour Page 1" style="border-radius:10px;"></a>
  <a href="/examance/poster-ui-2.jpg"><img src="/examance/poster-ui-2.jpg" alt="Poster Screenshot Tour Page 2" style="border-radius:10px;"></a>
  <figcaption><b>Screenshot tour:</b> Overview of creating exams, paper/screen grading, and results. <a href="https://github.com/ValentinHerrmann/Examance/blob/main/docs/posters/examance-ui.pdf" class="btn btn--info btn--small" target="_blank" rel="noopener"><i class="fas fa-download"></i> PDF (A3)</a></figcaption>
</figure>

<figure class="half">
  <a href="/examance/poster-info-1.jpg"><img src="/examance/poster-info-1.jpg" alt="Poster Architecture &amp; Privacy Page 1" style="border-radius:10px;"></a>
  <a href="/examance/poster-info-2.jpg"><img src="/examance/poster-info-2.jpg" alt="Poster Architecture &amp; Privacy Page 2" style="border-radius:10px;"></a>
  <figcaption><b>Architecture &amp; Privacy:</b> Technical breakdown of cryptography and school deployment. <a href="https://github.com/ValentinHerrmann/Examance/blob/main/docs/posters/examance-info.pdf" class="btn btn--info btn--small" target="_blank" rel="noopener"><i class="fas fa-download"></i> PDF (A3)</a></figcaption>
</figure>
