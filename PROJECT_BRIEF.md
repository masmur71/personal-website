# Project Brief: Personal Portfolio Website

## 1. Overview

A static personal portfolio for an Information Systems fresh graduate, showcasing solo-built projects in two tracks: software engineering and data analytics/science. The site must communicate who I am and what I can do within 30 to 60 seconds and lead visitors to contact me or download my resume.

## 2. Goals

- **Primary goal:** Job hunting (entry-level roles in software engineering and data analytics)
- Present 3 projects with clear context: problem, my role, decisions, result
- Make my resume and contact details reachable in one click
- Load fast and work well on mobile
- Be easy to extend when I finish new projects

## 3. Target Audience

- Recruiters and hiring managers screening quickly
- Technical interviewers who will open my GitHub and project pages
- No location restriction; the site will not include a "where I want to work" section

## 4. Positioning

**Draft one-liner (placeholder, to be rewritten once projects are final):**
> Information Systems graduate who builds web applications and data analysis projects.

**Rules for the final version:**
- Name the real things I have built, not adjectives like "scalable" or "data-driven"
- Do not claim anything the projects cannot prove


**Track strategy (decision needed):** [Software engineering first / Data analytics first / Equal weight]
- Tracks are shown as two filters or labeled sections on the projects page
- Each track should have at least one strong project, otherwise lead with the stronger track only

## 5. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Rendering | Fully static (`output: 'export'`) |
| Hosting | Cloudflare Pages (static) |
| Source control | GitHub |
| Content | Hybrid: local data file plus build-time GitHub fetch |
| Language | English only |

**Static export constraints:**
- `next/image` optimization is not available; set `images.unoptimized: true` and pre-optimize images manually (WebP, sensible dimensions)
- No API routes, middleware, or server components that need a runtime
- Dynamic routes (`/projects/[slug]`) need `generateStaticParams`

**GitHub content strategy (hybrid):**
- **Local data file (curated, manual):** title, one-line summary, track, tech tags, demo link, case study text (problem, role, decisions, result), display order
- **Fetched from GitHub at build time:** README content, last updated date, optional repo stats
- Reason: READMEs alone do not contain case study content, and fetching everything live makes the site depend on repo quality and API availability
- Use a GitHub token in the Cloudflare build environment, since unauthenticated API requests are rate limited
- Fetch at build time only, never in the browser, and fail the build gracefully (fall back to local data) if the API is unreachable
- Rebuild is triggered by pushing to the site repo. Changes in a project repo will not update the site until a rebuild unless I add a deploy hook

## 6. Site Structure

| Route | Purpose |
|---|---|
| `/` | Hero, featured projects, compact skills, contact CTA |
| `/projects` | All projects, filterable by track |
| `/projects/[slug]` | Case study per project |
| `/about` | Short bio and photo |
| `/contact` | Email, GitHub, LinkedIn (can be a home page section) |
| `/resume` | Link to the downloadable PDF |

No experience section (no work experience to show). No blog.

## 7. Content Requirements

**Hero**
- Name, final one-liner, two buttons: View Projects, Download Resume

**Projects (3, details to be provided)**

Each project needs:
- Thumbnail or screenshot
- One-line summary and track label (Software Engineering or Data Analytics/Science)
- Tech stack tags
- GitHub link
- **Demo or visual proof (strongly required):**
  - Software projects: deploy on Cloudflare Pages or another free host
  - Data projects: published dashboard or notebook, or at minimum real screenshots of outputs
- Case study: problem, my role (solo), key decisions, result or findings

**Skills**
- 8 to 15 items grouped by category (for example Languages, Frameworks, Data tools, Tools)
- Only skills I can discuss in an interview
- No percentages or skill bars
- Shown on the home page; each project also carries its own tech tags

**About**
- A few short paragraphs: background in Information Systems, what I am looking for, what I have built
- Photo (already available)

**Contact**
- Visible email, GitHub, LinkedIn
- No contact form (static site, out of scope)