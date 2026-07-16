# Prompt for Fable 5: Portfolio Redesign for Big Tech / Tech Consulting Recruiters

## Context

You are redesigning my personal portfolio site (React 19 + Vite + Tailwind CSS v4 + react-router-dom v7, with shadcn-style primitives already installed: `@radix-ui/react-toast`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` for icons). The codebase lives at `src/`, single-page app with hash-anchored sections rendered from `src/pages/Home.jsx`: hero (`#home`), professional/bio (`#professional`), experience (`#experience`), education (`#education`), projects (`#projects`), blog (`#blog`), contact (footer).

My content (project metrics, experience bullets, resume) is already strong and quantified — do not rewrite the substance of my accomplishments. Your job is structure, UX, visual design, and interaction design that makes that content land fast with two specific audiences: **big tech recruiters** (scanning for scale, systems impact, technical depth, keywords) and **tech consulting recruiters** (scanning for leadership narrative, client/stakeholder impact, structured problem-solving). Treat this as a portfolio a senior product designer + staff engineer would ship, not a template.

## Goals, in priority order

1. **8-second scan test**: a recruiter must be able to identify my target role, top 2-3 quantified achievements, and how to reach me (resume/LinkedIn/email) without scrolling.
2. **Case-study depth on demand**: recruiters who want to go deeper should be able to expand into full project narratives (problem → approach → result → tech) without leaving the page or losing context.
3. **Signal technical polish through craft, not gimmicks**: motion, transitions, and interactions should feel intentional and performant — no bounce-everything animation libraries, no gratuitous parallax.
4. **Fast and accessible**: Lighthouse 95+ across the board, keyboard-navigable, respects `prefers-reduced-motion` and `prefers-color-scheme`.

## Specific asks

### 1. Navigation & persistent CTAs
- Redesign `Navbar.jsx` to include a resume download button and a compact contact cluster (LinkedIn/GitHub/email icons) — always visible, not buried in the footer.
- Add a command-palette (Cmd+K / Ctrl+K) for quick navigation to sections, projects, and blog posts. Use `lucide-react` icons and Radix primitives already in the project (`cmdk` or a lightweight custom implementation — your call, justify the choice).

### 2. Hero section rework
- Explicit role framing above the fold: name, a one-line positioning statement that signals target track (e.g., SWE / applied ML / technical consulting — pull from my actual background, don't invent), and 2-3 headline metrics as a compact stat row.
- Primary CTA (resume) and secondary CTA (contact/LinkedIn) visible without scrolling.

### 3. Projects as expandable case studies
- Keep the current card grid as the entry point, but make each card expand (modal, drawer, or in-place expansion — your recommendation) into a structured case study: Problem, Approach, Result (with the existing metrics), Tech Stack. Preserve all existing quantified content; restructure its presentation.
- Smooth, GPU-cheap transitions (Framer Motion or CSS view-transitions API — pick one, justify tradeoffs, keep bundle size in mind since no animation library is currently installed).

### 4. Dark / light mode
- Full theme system respecting system preference by default, with a manual toggle in the navbar, persisted via localStorage. Leverage the Tailwind v4 + Radix setup already in place rather than introducing a new UI kit.

### 5. Experience timeline polish
- Scroll-triggered reveal (Intersection Observer, not a heavy scroll library) for timeline entries — subtle, one-directional, respects reduced-motion.
- Company logos already exist in `src/assets/` — make sure they're used consistently in both light/dark themes (add treatment if logos don't work on dark backgrounds).

### 6. Consulting-specific narrative layer
- Since consulting recruiters weight leadership/stakeholder-management narratives heavily, propose (and implement) a subtle way to surface "scope/leadership" signals in experience and project entries — e.g., a small badge or line for team size, stakeholders, cross-functional scope — pulling only from real content I provide, flagging clearly if you need me to supply specifics rather than inventing them.

### 7. Cleanup
- Remove dead/unimplemented placeholders (empty "Theme Toggle" / "Background Effects" comments in `Home.jsx`).
- Investigate `src/pages/Professional.jsx` — determine if it's a duplicate/unused route versus the `#professional` section in `Home.jsx`, and remove if dead.

## Constraints

- Don't add a new component framework/UI kit wholesale — extend what's installed (Tailwind v4, Radix, cva, clsx, lucide-react) unless there's a strong justification, which you should state explicitly before adding any new dependency.
- Don't fabricate metrics, job titles, team sizes, or accomplishments. Where you need real input to make a section credible (e.g., "team size" badges), stop and ask rather than inventing plausible-sounding numbers.
- Preserve all existing routes/anchors used elsewhere (resume.pdf path, blog post URLs) unless you flag a reason to change them.
- Ship incrementally: propose a component-by-component plan first, confirm direction on the hero + navbar before touching the rest, so I can course-correct early rather than after a full rewrite.

## Deliverable format

Start by proposing: (a) the theming/dark-mode architecture, (b) the case-study expansion pattern (modal vs. drawer vs. inline) with a quick tradeoff comparison, and (c) a component-by-component build order. Wait for my go-ahead on those three before writing code.
