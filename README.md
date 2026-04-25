# Tech Blog

## What is It

A personal tech blog built to share thoughts on software development, web technologies, and the craft of programming. Users can read posts on the home page, view individual post details, create new posts, edit existing ones, and browse a personal profile page. Data is persisted in a PostgreSQL database via Prisma ORM, with a secondary JSON-based repository available for local development.

---

## Stack

- **Next.js 16** — App Router, file-based routing, server and client components
- **React 19** — UI rendering with `useActionState` for form state management
- **TypeScript 5** — static typing across the entire codebase
- **Tailwind CSS 4** — utility-first styling
- **Prisma ORM** — database access layer with schema-first modelling
- **PostgreSQL** — production database
- **Zod** — form input validation in controllers
- **Geist / Geist Mono** — fonts via `next/font`

---

## Purposes

- Study and practice modern Next.js patterns (App Router, server actions, layouts, server vs client components)
- Apply clean architecture concepts — Repository, Service, and Controller layers separating data access, business logic, and input validation
- Work with a real relational database (PostgreSQL + Prisma) including migrations and seeding
- Build a real-world project from scratch, iterating on UI and features over time
- Serve as a living portfolio piece documenting learning in public

---

## Latest Changes

- **Controllers layer** — `post-controller.ts` and `user-controller.ts` added as the entry point for form submissions, delegating to services after Zod validation
- **Services layer** — `post-service.ts` and `user-service.ts` encapsulate business logic between controllers and repositories
- **PostgreSQL repository** — `PostgressPostRepository` replaces the JSON repository as the default, connecting to a real database via Prisma (`prisma.post.create`, `findMany`, `findUnique`, `update`)
- **Create post** — `/post/create` page with a validated form that persists new posts and redirects back to the home feed
- **Edit post** — `/[postId]/edit` page with a prefilled form to update an existing post
- **Zod validation** — all form submissions validate required fields before hitting the database, returning structured field-level errors
- **Prisma migrations** — initial migration creating `User` and `Post` tables with proper foreign key constraints

---

## Install and Setup

**Prerequisites:** Node.js 18 or later, a running PostgreSQL instance

1. Clone the repository:

```bash
git clone <repo-url>
cd tech_blog
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables — create a `.env` file at the project root:

```env
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. (Optional) Seed the database:

```bash
npx prisma migrate dev --seed
```

6. Run the development server:

```bash
npm run dev
```

7. Open your browser at `http://localhost:3000`

---

**Other scripts**

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run build`     | Build for production               |
| `npm run start`     | Start the production server        |
| `npm run lint`      | Run ESLint                         |
| `npx prisma studio` | Open Prisma Studio to browse the DB |
