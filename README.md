# Portfolio-Web — Ian Wanderley

Personal portfolio site. Plain HTML/CSS/JS, no build step, no framework.

## Files

- `index.html` — semantic page structure
- `styles.css` — design system (dark theme, cyan accent) and all visuals
- `script.js` — smooth scroll, scroll-spy nav, IntersectionObserver reveals, mobile menu toggle
- `assets/` — images, screenshots, favicon (to be added)

## Running locally

No server needed for a quick look — just open `index.html` in a browser. For full feature parity (some browsers restrict things over `file://`), serve it:

```bash
# Python
python -m http.server 5173

# or Node
npx serve .
```

Then visit `http://localhost:5173`.

## Design

- **Background:** very dark (`#07090f`), with a slightly lighter alternate section (`#0b0e17`)
- **Accent:** cyan `#22d3ee` and a cyan→indigo gradient for highlighted words/buttons
- **Typography:** Inter (Google Fonts), with a system-font fallback
- **Layout:** centered max-width 1180px, generous whitespace
- **Animations:** fade-up reveals via IntersectionObserver; subtle hover lifts on cards/buttons
- **Responsive:** mobile breakpoint at 880px (nav collapses to a hamburger; project cards stack)

## Sections

1. **Nav** — fixed, becomes opaque on scroll. Logo + menu (About, Projects, Experience, Contact) + GitHub/LinkedIn icons.
2. **Hero** — full-viewport. Name eyebrow, "Gameplay Programmer" with gradient on "Programmer", tagline, two CTAs (See projects / Email), social icons, scroll-down arrow.
3. **About** — section heading + lead paragraph; about card with "My journey" prose and a "What I focus on" bullet list; 4-card grid (Engine & language, Player & character, Combat & enemies, Architecture).
4. **Projects** — three cards (Dark Side, Feneco, Survival-Chaos) with badge, screenshot placeholder, role, description, tag row, and source/build links.
5. **Experience** — vertical timeline. Project-as-role entries: Lead Programmer on Dark Side, Gameplay programmer on Feneco, Co-lead on Survival-Chaos. Each card has bullet list of contributions + tag row.
6. **Contact** — email, LinkedIn, GitHub, location. All rows interactive except location.
7. **Footer** — current year + name.

## Open items (do these before going live)

### Content

- [ ] Replace **screenshot placeholders** in the three project cards. The slots in `index.html` are marked `<div class="project__placeholder" data-label="...">`. Drop a screenshot or short looping GIF per project into `assets/projects/` and replace each placeholder with `<img src="assets/projects/dark-side.png" alt="Dark Side of Horror — co-op gameplay" />`.
- [ ] Add a **favicon** at `assets/favicon.svg` (or `.ico`) and link it from `<head>` in `index.html`.
- [ ] Add an **Open Graph image** for link previews (LinkedIn, X, Slack). Recommended: 1200x630px PNG at `assets/og-image.png`, link via `<meta property="og:image">`.
- [ ] Optional: **Resume PDF**. If you want a "Download CV" button in the hero or contact section, drop the PDF at `assets/Ian-Wanderley-Resume.pdf` and add a button that links to it.

### Hosting

- [ ] **Pick a domain.** `ianwanderley.com`, `ian-wb.dev`, or similar. The cheapest path is GitHub Pages with a custom domain (~$10/year for the domain, free hosting).
- [ ] **Deploy.** Three good free options:
  - **GitHub Pages.** Push this folder to a repo; enable Pages on the `main` branch. Custom domain via the repo's Settings → Pages.
  - **Netlify / Vercel.** Drag-and-drop deploy or connect the GitHub repo. Both are free for personal sites and faster than Pages.
  - **Cloudflare Pages.** Same idea, also free.

### Polish (nice to have)

- [ ] Replace placeholder grid pattern in hero backdrop with a real background (Unity editor screenshot, code snippet image, or just keep the grid — it looks fine).
- [ ] Add per-project deep-dive pages at `/projects/<name>.html` for system writeups with code excerpts. Out of scope for the homepage; pull content from `Career/2-evidence/projects/<name>.md` when writing them.
- [ ] Consider adding a small "Now" or "Currently learning" line in the About — only if it doesn't drift into "eager to learn" filler.

## Voice notes (from the Career kit)

This site inherits the voice from `E:\WorkStudy\Career\1-foundation\positioning.md`:

- **Concrete over abstract.** "Built a data-driven weapon framework with five weapon types" beats "worked on weapons."
- **Owned over involved.** Name systems personally implemented. Credit teammates for the rest.
- **Plain over polished.** No "passionate," no "results-driven," no "leveraging cutting-edge solutions."
- **No "in formation."** It's a calque from "em formação"; use "finishing the program" or "Final-year."
- **No inflated stats.** Unlike portfolio templates that lead with "10+ shipped games" or "13+ years experience," this site doesn't fake counts. The 4-card About grid replaces the stats column with focus areas.

If you ever edit the copy, run it past those rules first.

## Cross-references

- **Source of truth for copy:** `E:\WorkStudy\Career\3-outputs\portfolio-web\content.md`
- **Project details (long form):** `E:\WorkStudy\Career\2-evidence\projects\`
- **Voice and positioning:** `E:\WorkStudy\Career\1-foundation\positioning.md`
- **Action items:** `E:\WorkStudy\Career\4-action\plan.md` (Portfolio launch checklist section)
