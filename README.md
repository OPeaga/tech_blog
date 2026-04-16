# Tech Blog

## What is It

A personal tech blog built to share thoughts on software development, web technologies, clean architecture, and the craft of programming. The blog displays a list of posts on the home page and includes an About page describing the author's focus areas. A Login page is also present as the foundation for future authentication-protected features.

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
- Build a real-world project from scratch, iterating on UI and features over time
- Serve as a living portfolio piece documenting learning in public

---

## Latest Changes

- Added **Login page** (`/login`) with email and password fields, client-side validation, and an inline error state
- Added **Navbar link** pointing to the Login page
- Added **About page** (`/about`) with a personal description and a list of content categories
- Established base layout with a persistent **Navbar** and global Tailwind styles

---

## Install and Setup

**Prerequisites:** Node.js 18 or later

1. Clone the repository:

```bash
git clone <repo-url>
cd blog
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
