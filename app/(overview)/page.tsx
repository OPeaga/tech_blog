import Posts from "@/app/ui/posts";
import PageHeader from "@/app/ui/page-header";

export default function Page() {
  return (
    <main className="flex-1">
      <PageHeader
        heading="Latest Posts"
        subheading="Thoughts on software, technology, and building things."
      />
      <Posts />
    </main>
  );
}
