import { blogPosts } from "./mock";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

export default function BlogsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      {/* Back link */}
      <div className="mb-6">
        <a
          href="/"
          className="inline-block text-primary hover:text-accent transition-colors text-sm font-medium"
          aria-label="Back to home"
        >
          &larr; Back to home
        </a>
      </div>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4 gap-3">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
            <HiPencilAlt className="w-4 h-4 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text mb-0">
            All Blog Posts
          </h1>
        </div>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Discover insights, tutorials, and thoughts from our latest writings
        </p>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group">
            <div className="transition-all duration-300 rounded-xl border border-border/50 bg-white dark:bg-zinc-900 p-6 hover:shadow-xl hover:border-primary/20 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <a
                    href={`/blogs/${post.id}`}
                    className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2"
                  >
                    {post.title}
                  </a>

                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-3 h-3 text-accent" />
                      <span>
                        {new Date(post.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-accent font-medium">
                      {post.readTime} mins
                    </span>
                  </div>
                </div>

                <div
                  className="rich-text text-foreground/80 mb-3 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />

                <div className="flex justify-between items-center pt-3 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-accent transition-all duration-300 group-hover:translate-x-1 text-xs shadow-md hover:shadow-lg"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
