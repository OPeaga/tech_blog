import Posts from "@/app/ui/posts";

export default function Page() {
  return (
    <main className="flex-1">
      <section className=" py-12 px-6 text-cente ">
        <p className="mt-2 text-zinc-500 text-base max-w-md mx-auto">
          Thoughts on software, technology, and building things.
        </p>
      </section>
      <Posts />
    </main>
  );
}
