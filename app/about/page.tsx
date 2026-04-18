export default function AboutPage() {
  return (
    <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
          About
        </h1>

        <div className="w-12 h-0.5 bg-zinc-300 rounded-full" />

        <p className="text-zinc-600 leading-relaxed">
          Welcome to Tech Blog — a place where I write about software
          development, technology, and the process of building things.
        </p>

        <p className="text-zinc-600 leading-relaxed">
          I&apos;m a developer interested in web technologies, clean
          architecture, and sharing what I learn along the way. This blog is
          where those ideas land.
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm border-l-4 border-l-zinc-300">
          <h2 className="text-base font-semibold text-zinc-900 mb-3">
            What you&apos;ll find here
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-zinc-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
              Deep dives into web frameworks and tooling
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
              Notes on software architecture and design patterns
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
              Thoughts on the craft of programming
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
