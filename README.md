# Tech Blog

## What is It

A personal tech blog built to share thoughts on software development, web technologies, clean architecture, and the craft of programming. The blog displays posts on the home page, allows reading individual posts, and includes personal profile, about, and login pages. Data is served through a repository layer that reads from a local JSON file.

---

## Stack

- **Next.js 16** — App Router, file-based routing, server components
- **React 19** — UI rendering
- **TypeScript 5** — static typing across the entire codebase
- **Tailwind CSS 4** — utility-first styling
- **Geist / Geist Mono** — fonts loaded via `next/font`

---

## Purposes

- Study and practice modern Next.js patterns (App Router, layouts, server vs client components)
- Apply clean architecture concepts with a repository pattern separating data access from the UI
- Build a real-world project from scratch, iterating on UI and features over time
- Serve as a living portfolio piece documenting learning in public

---

## Latest Changes

- Introduced **Repository Pattern** — `PostRepository` interface with a `JsonPostRepository` implementation reading from a local JSON file, replacing direct data access in UI components
- Added **Personal page** (`/personal`) with user profile card (name, email, bio, post count) and a filtered list of the user's own posts
- Added **404 Not Found page** (`/[postId]/not-found.tsx`) with consistent design system styling
- Refactored `posts.tsx` and `[postId]/page.tsx` to consume data via `postRepository` instead of raw fetch helpers
- Navbar updated with a **Profile** link

---

## Install and Setup

**Prerequisites:** Node.js 18 or later

1. Clone the repository:

```bash
git clone <repo-url>
cd blog_nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:3000`

---

**Other scripts**

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run build` | Build for production        |
| `npm run start` | Start the production server |
| `npm run lint`  | Run ESLint                  |