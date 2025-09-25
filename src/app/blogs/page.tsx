import { blogPosts } from "./mock";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { ThemeSwitch } from "../_components/theme-switch";

// Improved BlogCard component with modern design
function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden transition-all duration-500 rounded-2xl border border-border/30 bg-background p-6 hover:shadow-2xl hover:border-primary/30 hover:scale-[1.02] backdrop-blur-sm flex flex-col aspect-[3/4] min-h-[320px]">
        {/* Gradient overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex flex-col gap-4 flex-1 z-10">
          <div>
            <a
              href={`/blogs/${post.id}`}
              className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2 hover:underline decoration-2 underline-offset-4"
            >
              {post.title}
            </a>

            <div className="flex items-center gap-3 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-3 h-3 text-accent/80" />
                <span>
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-accent font-semibold">
                {post.readTime} min read
              </span>
            </div>
          </div>

          <div
            className="rich-text text-foreground/70 mb-4 line-clamp-4 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />

          <div className="flex flex-col gap-3 justify-between items-center pt-4 border-t border-border/20 mt-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="p-1 text-xs font-semibold bg-primary/5 text-primary rounded-md border border-primary/10 hover:bg-primary/10 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <a
              href={`/blogs/${post.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 group-hover:translate-x-1 text-sm shadow-lg hover:shadow-xl hover:scale-105"
              aria-label={`Read more about ${post.title}`}
            >
              Read More
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function BlogNavBar() {
  return (
    <nav className="w-full bg-background/90 border-b border-border/30 sticky top-0 z-30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="/"
          className="inline-flex items-center gap-3 text-primary hover:text-accent transition-all duration-300 text-lg font-semibold hover:gap-4 group"
          aria-label="Back to home"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to Home
        </a>
      </div>
    </nav>
  );
}

export default function BlogsPage() {
  return (
    <>
      <BlogNavBar />
      <main
        className="mx-auto py-20 px-6 min-h-screen bg-gradient-to-b from-background to-background/80"
        id="all-posts"
      >
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-6 gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-20 animate-pulse" />
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <HiPencilAlt className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
              All Blog Posts
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover insights, tutorials, and thoughts from our latest writings
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <div className="fixed bottom-8 right-8 z-50">
        <ThemeSwitch />
      </div>
    </>
  );
}
