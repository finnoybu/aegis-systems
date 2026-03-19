# CLAUDE.md — aegis-constitution

*Instructions for Claude Code — 2026-03-15*

---

## What This Repository Is

`aegis-initiative/aegis-constitution` is the canonical public home of the AEGIS™
Constitution — the supreme law governing every AEGIS-compliant system. It is a
versioned, citable, openly licensed document set deployed as a public website at
`aegissystems.app` via Cloudflare Pages (Astro Starlight).

This repo contains **no implementation code**. It contains constitutional doctrine.
Every edit here has downstream citation consequences. Treat it accordingly.

The aggregate citable document is `CONSTITUTION.md` at repo root. The site content
lives in `src/content/docs/`. These are not the same thing and must not be conflated.

---

## For Claude Code

### Always

- Read a file before editing it
- Check `CONSTITUTION.md` before editing any article file — the root document is authoritative
- Maintain exact consistency between `CONSTITUTION.md` and the split article files in `src/content/docs/constitution/`
- Verify article numbers, titles, and one-liners match across all files before committing
- Update `README.md` article table whenever articles change
- Run `npm run build` before committing content changes — build errors block deployment

### Never

- Edit `CONSTITUTION.md` without making the corresponding change in the relevant article file(s)
- Edit article files without making the corresponding change in `CONSTITUTION.md`
- Modify `CONSTITUTION.md` structure or split it — it is the DOI anchor document
- Add new articles, rename articles, or renumber articles without explicit instruction
- Describe `aegissystems.live`, `aegis-initiative.com`, or `aegis-labs.dev` as live or deployed
- Lock domain assignments in any published document — they are being finalized
- Commit directly to `main` — all changes via PR

---

## Repo Structure

```
.                                ← Root
├── CONSTITUTION.md              ← Aggregate citable document — DO NOT SPLIT OR MODIFY STRUCTURE
├── REFERENCES.md                ← Normative bibliography — all cited works go here
├── README.md                    ← GitHub landing page — keep article table current
├── CLAUDE.md                    ← This file
├── astro.config.mjs             ← Starlight site config — sidebar defined here
├── src/
│   ├── assets/                  ← Brand assets (SVGs)
│   │   ├── AEGIS_logo_aegis-constitution.svg
│   │   ├── AEGIS_wordmark.svg
│   │   ├── AEGIS_wordmark_dark.svg
│   │   └── AEGIS_wordmark_light.svg
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx        ← Site home (splash page)
│   │       ├── constitution/    ← 15 files — see table below
│   │       ├── doctrine/        ← Pending content
│   │       ├── principles/      ← Pending content
│   │       ├── protocols/       ← Pending content
│   │       └── sub-specs/       ← Pending content
│   ├── content.config.ts        ← Astro content collection config — do not edit
│   └── styles/
│       └── custom.css           ← Brand color and font stubs
└── wrangler.toml                ← Cloudflare Pages config — do not edit
```

### Constitution Content Files

| File | Article | Status |
|---|---|---|
| `constitution/index.md` | Preamble + article table | Live |
| `constitution/article-i.md` | Bounded Capability | Live |
| `constitution/article-ii.md` | Authority Binding | Live |
| `constitution/article-iii.md` | Deterministic Enforcement | Live |
| `constitution/article-iv.md` | Human Oversight | Live |
| `constitution/article-v.md` | Information Sovereignty | Live |
| `constitution/article-vi.md` | Governance Transparency | Live |
| `constitution/article-vii.md` | Auditability | Live |
| `constitution/article-viii.md` | Collective Defense | Live |
| `constitution/article-ix.md` | Deny by Default | Live |
| `constitution/article-x.md` | Constitutional Supremacy | Live |
| `constitution/article-xi.md` | Escalation Discipline | Live |
| `constitution/compliance.md` | Constitutional Compliance | Live |
| `constitution/amendments.md` | Amendments + version history | Live |
| `constitution/interpretation.md` | Interpretation rules | Live |

---

## Terminology: Critical Distinctions

Do not conflate these terms.

| Term | Definition | Do Not Confuse With |
|---|---|---|
| CONSTITUTION.md | Aggregate citable root document — DOI anchor | Individual article files in src/content/docs/ |
| Article files | Starlight site content — one file per article | CONSTITUTION.md |
| Tamper-evident | Detectable alteration via append-only + hash-chaining | Immutable — do not use "immutable" for audit records |
| v0.1.0 | Eight-article constitution — NIST submission anchor | v0.2.0 |
| v0.2.0 | Current — eleven articles | v0.1.0 |
| Ratified | Status after Snapshot #2 publication | Draft — current status |

**"Immutable" is prohibited for audit records.** The correct term is **tamper-evident**.
This was corrected in v0.2.0. Do not reintroduce "immutable" in any content.

---

## Single Source of Truth

| Topic | Canonical location |
|---|---|
| Constitutional text | `CONSTITUTION.md` (root) |
| Site content | `src/content/docs/constitution/` |
| Article table | `README.md` + `constitution/index.md` |
| Version history | `constitution/amendments.md` |
| Normative bibliography | `REFERENCES.md` |
| Site config / sidebar | `astro.config.mjs` |
| Brand assets | `src/assets/` |

---

## Frozen & Protected Documents

| Document | Status | Rule |
|---|---|---|
| `CONSTITUTION.md` | DOI anchor — Snapshot #2 pending | No structural changes. Content edits require corresponding article file update. |
| v0.1.0 tag on `finnoybu/aegis-systems` | Snapshot #1 — locked | Do not reference as current. |

---

## Version Model

The constitution follows semantic versioning:

| Increment | Meaning |
|---|---|
| X.0.0 | Breaking changes to constitutional principles |
| 0.X.0 | New articles or non-breaking clarifications |
| 0.0.X | Editorial corrections |

**Current version:** v0.2.0 (Draft — pending Snapshot #2 tag and Zenodo DOI)

v0.1.0 remains the version of record for the NIST AI RMF position statement submitted
March 7, 2026. Those citations are valid and unaffected by v0.2.0.

---

## Snapshot Sequencing

**Snapshot #1** (blocking — must complete before March 21–22):
- Tag `finnoybu/aegis-systems` v0.1.0
- Tag `finnoybu/aegis-governance` v0.2.0
- Mint Zenodo DOIs for both
- Use Snapshot #1 DOIs in NIST follow-up only

**Snapshot #2** (IEEE submission anchor):
- Tag `aegis-initiative/aegis-constitution` v0.2.0
- Change constitution status: Draft → Ratified
- Mint Zenodo DOI (Snapshot #2)
- Update IEEE paper citations to Snapshot #2 DOIs

Do not announce `aegis-initiative/aegis-constitution` publicly until Snapshot #2.

---

## Article Integrity Rules

All eleven article names and one-liners are **locked**. The NIST submission pins
all eight original articles by name and number. Do not change without explicit instruction.

| # | Article | One-liner |
|---|---|---|
| I | Bounded Capability | AI systems may only access capabilities explicitly defined and granted — undefined capabilities are denied by default |
| II | Authority Binding | Every action must be attributable to a verified, authorized actor — unbound execution is constitutionally invalid |
| III | Deterministic Enforcement | Governance decisions are enforced by architecture, not by model compliance or voluntary adherence |
| IV | Human Oversight | Autonomous systems remain subordinate to human authority — escalation pathways are a constitutional requirement, not a feature |
| V | Information Sovereignty | Information access is a governed capability — AI systems may not transfer information across trust boundaries without explicit authorization |
| VI | Governance Transparency | Governance logic must be inspectable, auditable, and understandable — opaque enforcement is constitutionally impermissible |
| VII | Auditability | Every governance decision and executed action must produce a tamper-evident, append-only audit record — audit failure blocks execution |
| VIII | Collective Defense | Governance at scale requires shared intelligence — AEGIS-compliant systems must be capable of federated governance participation |
| IX | Deny by Default | In the presence of ambiguity — unclear threat posture, missing scope, unverifiable authority, or unavailable audit — execution does not proceed |
| X | Constitutional Supremacy | Governance architecture takes precedence over model reasoning — no AI output may override a constitutional governance decision |
| XI | Escalation Discipline | Escalation requires explicit request, reclassification, approval, and documentation — escalation by inference is prohibited |

Articles II, IV, V, and VIII were renamed in v0.2.0. Each article file notes its prior title.
Articles IX, X, and XI are new in v0.2.0.

---

## Normative References

All citations in constitutional content must appear in `REFERENCES.md`.
Use IEEE style for academic papers. Inline footnotes use `[^N]` syntax.

Key normative sources currently cited in constitutional articles:

| Footnote | Source | Article(s) |
|---|---|---|
| [^1] | Anderson (1972) — capability-based authorization | I, III |
| [^2] | Schneider (2000) — enforceable security policies | III |
| [^3] | Saltzer & Schroeder (1975) — least privilege | V |
| [^4] | AEGIS Canon — Transparency Before Trust | VI |
| [^5] | AEGIS Canon — State Dump Protocol §5 | VII |
| [^6] | Leveson (2011) — fail-safe design | IX |

When adding citations, verify the full entry exists in `REFERENCES.md` before
adding the inline footnote.

---

## Relationship to aegis-governance

`aegis-initiative/aegis-constitution` is the **public face** of constitutional doctrine.
`finnoybu/aegis-governance` is the **full technical specification corpus**.

Constitutional articles provide the "what" and "why." The governance RFCs provide the
"how." Do not duplicate technical specification content from aegis-governance here —
link to it instead.

Do not copy, restate, or paraphrase content from aegis-governance RFCs into
constitutional articles. Cross-reference only.

---

## Git Workflow

```
git checkout -b <type>/<short-description>
git add <specific files>
git commit -m "Type: description

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push -u origin <branch>
gh pr create ...
gh pr merge <number> --squash --auto
```

Branch naming: `docs/topic`, `feat/topic`, `fix/topic`\
Merge strategy: squash merge always\
Never force-push. Never commit directly to `main`.

---

## Build & Deploy

```bash
npm run dev      # Local dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build locally
```

Deployment is automatic via Cloudflare Pages on push to `main`.
Build command: `npm run build` | Output: `dist/` | Root: `` (repo root)

Always verify `npm run build` passes cleanly before merging a PR.

---

## Markdown Conventions

- Frontmatter required on all content files: `title`, `description`, `sidebar.order`
- Line breaks in frontmatter: backslash `\` at end of line — not trailing spaces
- Blockquotes `>` for notices and pull quotes — not fenced code blocks
- Tables for structured data — not bullet lists
- Do not use "immutable" — use "tamper-evident"

---

## Brand

| Element | Value |
|---|---|
| Primary blue | `#0084e7` |
| Dark navy | `#0a1628` |
| Accent gold | `#C9A84C` |
| Display font | Barlow Condensed |
| Body font | Poppins |
| Logo (navbar) | `src/assets/AEGIS_logo_aegis-constitution.svg` |
| Wordmark (neutral) | `src/assets/AEGIS_wordmark.svg` |
| Wordmark (dark bg) | `src/assets/AEGIS_wordmark_dark.svg` |
| Wordmark (light bg) | `src/assets/AEGIS_wordmark_light.svg` |

Typography and color stubs live in `src/styles/custom.css`. Do not finalize
brand styling without explicit instruction.

---

## Footer (all pages)

*AEGIS™* | *"Capability without constraint is not intelligence"™*\
*AEGIS Initiative — Finnoybu IP LLC*