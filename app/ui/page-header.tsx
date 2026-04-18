import { title, text } from "@/app/ui/templates/classnames";

interface PageHeaderProps {
  heading: string;
  subheading?: string;
}

export default function PageHeader({ heading, subheading }: PageHeaderProps) {
  return (
    <section className="py-14 px-6 text-center border-b border-zinc-100">
      <h1 className={`${title.page} mb-2`}>{heading}</h1>
      {subheading && (
        <p className={`max-w-md mx-auto ${text.lead}`}>{subheading}</p>
      )}
    </section>
  );
}
