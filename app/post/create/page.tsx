"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/app/ui/page-header";
import { btn, input } from "@/app/ui/templates/classnames";
import { useActionState } from "react";
import { createPostController } from "@/app/controllers/post-controller";

export default function CreatePostPage() {
  const router = useRouter();

  const initialState = { message: "", errors: {} };

  const [state, formAction] = useActionState(
    createPostController,
    initialState,
  );

  return (
    <main className="flex-1">
      <PageHeader
        heading="Create a Post"
        subheading="Share your thoughts with the world."
      />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <form action={formAction} className="flex flex-col gap-6">
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
                className={input.field}
              />
              {state.errors?.theme && (
                <div className={input.fieldError}>
                  {state.errors.theme.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
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
              className={input.textarea}
            />
            {state.errors?.text && (
              <div className={input.fieldError}>
                <ul>
                  {state.errors.text.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
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
              Publish post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
