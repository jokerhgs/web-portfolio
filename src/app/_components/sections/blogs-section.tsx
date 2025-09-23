import { motion } from "framer-motion";

type Blog = {
  title: string;
  description: string;
  date: string;
  link: string;
  tags?: string[];
};

const recentBlogs: Blog[] = [
  {
    title: "Building Modern Web Apps with Next.js",
    description:
      "A practical guide to building fast, scalable, and maintainable web applications using Next.js.",
    date: "2024-05-10",
    link: "#",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    title: "Mastering TypeScript for Large Projects",
    description:
      "Tips and best practices for using TypeScript effectively in large-scale codebases.",
    date: "2024-04-22",
    link: "#",
    tags: ["TypeScript", "Best Practices"],
  },
  {
    title: "UI/UX Trends to Watch in 2024",
    description:
      "An overview of the latest UI/UX design trends shaping digital experiences this year.",
    date: "2024-03-30",
    link: "#",
    tags: ["UI/UX", "Design", "Trends"],
  },
];

export const BlogsSection = () => {
  return (
    <section
      id="blogs"
      className="scroll-mt-24 w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          Recent Blogs
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed mb-8">
          Explore my latest articles on web development, design, and technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {recentBlogs.map((blog, idx) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow hover:bg-accent cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground">
                  {new Date(blog.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                {blog.tags && (
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-left">
                {blog.title}
              </h3>
              <p className="text-sm text-secondary-foreground text-left mb-2">
                {blog.description}
              </p>
              <span className="mt-auto text-primary text-sm font-medium hover:underline">
                Read more &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
