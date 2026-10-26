---
title: "Examance"
excerpt: "Write LaTeX exams, grade them anonymously, and keep student data end-to-end encrypted"
header:
  image: examance/banner.jpg
  teaser: examance/overview.jpg
---

# Anonymous exam grading, privacy first

Teachers write exams in LaTeX, print them with QR codes, and grade the answers against a pseudonym instead of a name. Names, scans and grades are encrypted in the browser before they are stored. The server only sees ciphertext.

**Beta at** [examance.valentin-herrmann.com](https://examance.valentin-herrmann.com) (people I know personally can request an account)

**Code at Github:** [ValentinHerrmann/Examance](https://github.com/ValentinHerrmann/Examance) (MIT license, self-hostable)

**Pitch slides (German):** [Screenshot tour](https://github.com/ValentinHerrmann/Examance/blob/main/docs/pitches/examance-ui.pdf) · [How it works, privacy and security](https://github.com/ValentinHerrmann/Examance/blob/main/docs/pitches/examance-info.pdf)

## Why

- **Fair grading:** you do not know whose exam you grade, so there is no halo effect.
- **Paper stays paper:** students write on paper as usual. Scanning is an option; you can also grade on paper and only type in the points.
- **Less work:** reuse exercises, let points add up and crosses be read automatically, get results without spreadsheets.
- **Data protection:** built for German schools (DSGVO). Even the server admin cannot read names or grades.

## Features

**Create exams**
- **Exercise library** with a LaTeX editor, building blocks by click and live preview. Each `\BE` is one point, `\hBE` half a point, so the total counts itself.
- **One source, two sheets:** the student sheet shows grids, lines or gaps; the solution sheet shows the answers.
- **Variants** (group A/B) and **versions**: old exams stay unchanged when you improve an exercise.
- **Multiple choice:** single or multiple answers, optional penalty for wrong crosses (never below zero).
- **Exam builder:** tick exercises and variants, add header (subject, class, date, school logo) and grading scale (linear, upper school, or custom). Exam and marking scheme are typeset together, ready to print.
- **Share with colleagues:** a shared exercise pool for the department. Others work on a copy and can propose improvements back, like pull requests; the author decides.

**Grade**
- **QR-coded booklets:** the QR code carries a pseudonym and the variant, never a name.
- **Scan import:** one PDF for the whole stack. Pages are split and assigned automatically; unreadable codes go to a review list.
- **Anonymous grading** on screen: tick stamps on the scan add up the points. Names appear only after grading.
- **MC detection with teacher review:** crosses are read automatically. Withdrawn, painted-over or faint crosses are flagged as unsure and shown to you, plus random samples of sure ones. You always have the final say.
- **No scanner? No problem:** grade on paper as usual and type in the points, or paste them from Excel.

**Analyse**
- **Results** as soon as the points are in: grade distribution, average, borderline cases.
- **Variant comparison:** flags a variant when groups differ by 15 percentage points or more.
- **Exercise quality over the years**, class statistics only from five submissions on.
- **Export** as a table or as an encrypted archive.

<details>
<summary><b>Screenshot tour</b> (real UI, demo data)</summary>

<figure class="half">
  <a href="/examance/t-exercise-editor.jpg"><img src="/examance/t-exercise-editor.jpg" alt="Exercise editor" style="border-radius:10px;"></a>
  <a href="/examance/t-mc-editor.jpg"><img src="/examance/t-mc-editor.jpg" alt="Multiple choice editor" style="border-radius:10px;"></a>
  <figcaption><b>Create:</b> LaTeX exercise editor with live preview, points counted from the text (left). Multiple choice: tick the correct options, choose the penalty (right).</figcaption>
</figure>

<figure class="half">
  <a href="/examance/t-exam-builder.jpg"><img src="/examance/t-exam-builder.jpg" alt="Exam builder" style="border-radius:10px;"></a>
  <a href="/examance/t-grading.jpg"><img src="/examance/t-grading.jpg" alt="Anonymous grading" style="border-radius:10px;"></a>
  <figcaption><b>Build and grade:</b> pick exercises and variants in minutes (left). Grade anonymously: a QR sticker instead of a name, tick stamps on the scan add up the points (right).</figcaption>
</figure>

<figure class="half">
  <a href="/examance/t-mc-review.jpg"><img src="/examance/t-mc-review.jpg" alt="MC review" style="border-radius:10px;"></a>
  <a href="/examance/t-paper-entry.jpg"><img src="/examance/t-paper-entry.jpg" alt="Paper score entry" style="border-radius:10px;"></a>
  <figcaption><b>Scanner or paper:</b> crosses are read automatically, unsure marks are flagged and you decide (left). Or type in points from paper grading, or paste them from Excel (right).</figcaption>
</figure>

<figure class="half">
  <a href="/examance/t-results.jpg"><img src="/examance/t-results.jpg" alt="Results" style="border-radius:10px;"></a>
  <a href="/examance/09b-variant-comparison.jpg"><img src="/examance/09b-variant-comparison.jpg" alt="Variant comparison" style="border-radius:10px;"></a>
  <figcaption><b>Results:</b> grade distribution, average and borderline cases (left). Variant comparison: unfair variants stand out, here group B scores 24 percentage points lower (right).</figcaption>
</figure>

</details>

<details>
<summary><b>LaTeX Snippets Demo</b> (template vs. solution side-by-side)</summary>

{% include synced-pdf-viewer.html
  left_pdf="/examance/snippets_template.pdf"
  right_pdf="/examance/snippets_solution.pdf"
  left_title="Template (Student Sheet)"
  right_title="Solution (Teacher Sheet)"
  id="examance-snippets-viewer"
%}

</details>

## Privacy and security

- **End-to-end encrypted:** names, scans, points and annotations are encrypted in the browser with AES-256-GCM before they are stored.
- **The key stays with you:** a random 256-bit key, unlocked by your password (Argon2id) or passkey. It never leaves your device.
- **The server sees only ciphertext.** Admins manage accounts, but cannot read grades or names.
- **Anonymous from the start:** names appear only after grading, decrypted on your device.
- **You choose where results live:** encrypted on the school server, or only in your browser.
- **Two-factor sign-in** with an authenticator app or a passkey.
- **Recovery code** resets a forgotten password without losing data. An admin reset is no backdoor.
- **School in control:** the school decides who gets an account and which features (server storage, sharing) are enabled. Self-hosting with Docker, and templates for the DSGVO paperwork (DPIA, records of processing, data processing agreement).

**What it is not:** no online exam tool, no school administration software, no AI grading. The teacher always grades.

## Tech

SvelteKit (Svelte 5) frontend that does all crypto, scan processing and QR/MC recognition in the browser; FastAPI, PostgreSQL and Redis backend in Docker. LaTeX is compiled in the browser (XeLaTeX as WebAssembly) or on the server (Tectonic). German and English UI.

## Posters (German)

Click a page to enlarge it.

<figure class="half">
  <a href="/examance/poster-ui-1.jpg"><img src="/examance/poster-ui-1.jpg" alt="Poster screenshot tour, page 1" style="border-radius:10px;"></a>
  <a href="/examance/poster-ui-2.jpg"><img src="/examance/poster-ui-2.jpg" alt="Poster screenshot tour, page 2" style="border-radius:10px;"></a>
  <figcaption><b>Screenshot tour</b> for everyone: creating exams, grading on paper or screen, results. <a href="https://github.com/ValentinHerrmann/Examance/blob/main/docs/posters/examance-ui.pdf">PDF (A3)</a></figcaption>
</figure>

<figure class="half">
  <a href="/examance/poster-info-1.jpg"><img src="/examance/poster-info-1.jpg" alt="Poster how it works, page 1" style="border-radius:10px;"></a>
  <a href="/examance/poster-info-2.jpg"><img src="/examance/poster-info-2.jpg" alt="Poster how it works, page 2" style="border-radius:10px;"></a>
  <figcaption><b>How it works, privacy and security</b> for CS teachers, school leadership, data protection and IT. <a href="https://github.com/ValentinHerrmann/Examance/blob/main/docs/posters/examance-info.pdf">PDF (A3)</a></figcaption>
</figure>
