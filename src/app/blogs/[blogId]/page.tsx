import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchBlogPost } from "./_actions";
import { ThemeSwitch } from "../../_components/theme-switch";
import "./_styles/index.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="mx-auto pb-12 px-4 w-full bg-background min-h-screen flex flex-col items-center pt-20">
        <div className="max-w-5xl flex flex-col items-center">
          <a
            href="/blogs"
            className="inline-block mb-6 text-primary hover:text-accent transition-colors text-sm font-medium self-start"
            aria-label="Back to all blog posts"
          >
            &larr; Back to all posts
          </a>
          <article className="w-full flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div
              className="rich-text text-left w-full"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <div className="fixed bottom-8 right-8 z-50">
        <ThemeSwitch />
      </div>
    </>
  );
}
