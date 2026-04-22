"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/app/ui/page-header";
import { btn, input } from "@/app/ui/templates/classnames";
import { useActionState } from "react";
import { post } from "@/app/types/blog";

export default function EditPostForm({ post }: { post: post }) {
  const router = useRouter();

  const updatePost = () => {
    return { message: "ok", errors: {} };
  };

  const initialState = { message: "", errors: {} };

  const [state, formAction] = useActionState(updatePost, initialState);

  return (
    <main className="flex-1">
      <PageHeader
        heading="Edit Post"
        subheading="Update your post."
      />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <form onSubmit={formAction} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className={input.wrapper}>
              <label htmlFor="theme" className={input.label}>
                Theme <span className="text-red-500">*</span>
              </label>
              <input
                id="theme"
                name="theme"
                type="text"
                placeholder="e.g. JavaScript"
                defaultValue={post.theme}
                className={input.field}
              />
            </div>

            <div className={input.wrapper}>
              <label htmlFor="subtheme" className={input.label}>
                Subtheme
              </label>
              <input
                id="subtheme"
                name="subtheme"
                type="text"
                placeholder="e.g. React Hooks"
                defaultValue={post.subtheme ?? ""}
                className={input.field}
              />
              <span className={input.hint}>Optional</span>
            </div>
          </div>

          <div className={input.wrapper}>
            <label htmlFor="text" className={input.label}>
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="text"
              name="text"
              rows={10}
              placeholder="Write your post here..."
              defaultValue={post.text}
              className={input.textarea}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.back()}
              className={btn.ghost}
            >
              Cancel
            </button>
            <button type="submit" className={btn.primary}>
              Save changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
