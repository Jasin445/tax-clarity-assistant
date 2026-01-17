# Contributing

This project is built using **plain HTML, CSS, and JavaScript**.
There are **no frameworks, no build tools, and no abstractions**.

Clarity, simplicity, and maintainability are mandatory.

---

## Branching Strategy

- `main` → stable, protected branch
- `feature/*` → new features (PR → main)
- `fix/*` → bug fixes (PR → main)

❗ Direct commits to `main` are not allowed.

---

## Project Structure Rules

### JavaScript

JavaScript must be split by responsibility:

- **Pure logic** (calculations, rules, decisions)
  - Goes in `js/logic/`
  - Must NOT touch the DOM

- **UI & DOM handling**
  - Lives in `js/app.js`
  - Handles events, rendering, and user interaction only

Example:
- `js/logic/taxRules.js` → tax calculations
- `js/app.js` → reads input, updates UI

❌ Do not mix DOM manipulation with business logic.

---

### CSS

CSS must be organized and reusable:

- `base.css` → resets, variables, typography
- `layout.css` → page structure and layout
- `components.css` → buttons, cards, forms

Rules:
- ❌ No inline styles
- ❌ No duplicated styles
- ✅ Use CSS variables for colors and spacing

---

### HTML

HTML must remain clean and semantic:

- Use semantic tags (`header`, `main`, `section`, `footer`, etc.)
- No inline JavaScript
- No inline CSS
- JavaScript files are loaded at the bottom of the page or with `defer`

---

## Commit Messages

Use clear, conventional commit messages:

- `feat: add income classification logic`
- `fix: correct tax summary rendering`
- `chore: remove unused CSS classes`

Commits should describe **what changed**, not how you felt.

---

## Pull Requests

All changes must go through a Pull Request.

PRs must:
- Target `main`
- Clearly explain **what changed** and **why**
- Include screenshots for any UI-related changes
- Keep changes focused (no unrelated edits)

PRs that break functionality or ignore structure rules will not be merged.
