import PageHeader from "@/app/ui/page-header";
import { text, title } from "@/app/ui/templates/classnames";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        heading="About"
        subheading="A place where I write about software development, technology, and building things."
      />

      <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-6">
        <p className={text.body}>
          I&apos;m a developer interested in web technologies, clean
          architecture, and sharing what I learn along the way. This blog is
          where those ideas land.
        </p>

        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
          <h2 className={`${title.card} mb-4`}>What you&apos;ll find here</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Deep dives into web frameworks and tooling",
              "Notes on software architecture and design patterns",
              "Thoughts on the craft of programming",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" />
                <span className={text.body}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
