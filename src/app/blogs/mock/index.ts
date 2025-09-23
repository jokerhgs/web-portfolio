import { BlogPost } from "../_types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Apps with Next.js",
    date: "2024-06-01",
    description:
      "A guide to building fast, scalable web applications using Next.js.",
    tags: ["Next.js", "React", "Web Development", "SSR"],
    readTime: 5,
    content: `
          <p>Next.js is a powerful React framework for building modern web applications. In this post, we'll explore its core features, including file-based routing, server-side rendering, and API routes.</p>
          <h2>Why Next.js?</h2>
          <ul>
            <li>Easy routing</li>
            <li>Built-in SSR and SSG</li>
            <li>API routes</li>
            <li>Great developer experience</li>
          </ul>
          <p>Get started by running <code>npx create-next-app</code> and explore the documentation for more advanced features!</p>
        `,
  },
  {
    id: "2",
    title: "Integrating AI into Your Projects",
    date: "2024-05-15",
    description:
      "How to leverage AI APIs and tools in your web and mobile projects.",
    tags: ["AI", "APIs", "Machine Learning", "Integration"],
    readTime: 7,
    content: `
          <p>AI is transforming the way we build applications. From chatbots to image recognition, integrating AI is easier than ever.</p>
          <h2>Popular AI APIs</h2>
        <ul>
            <li>OpenAI GPT</li>
            <li>Google Cloud Vision</li>
            <li>Hugging Face Transformers</li>
          </ul>
          <p>Start by identifying your use case and explore the API documentation for integration guides.</p>
        `,
  },
  {
    id: "3",
    title: "Understanding TypeScript Generics",
    date: "2024-04-20",
    description:
      "A deep dive into generics in TypeScript and how they can make your code more flexible.",
    tags: ["TypeScript", "Generics", "Programming", "Type Safety"],
    readTime: 8,
    content: `
          <p>TypeScript generics allow you to write reusable and flexible code. In this post, we'll cover the basics of generics, including generic functions, interfaces, and classes.</p>
          <h2>Benefits of Generics</h2>
          <ul>
            <li>Type safety</li>
            <li>Code reusability</li>
            <li>Better developer experience</li>
          </ul>
          <p>Try creating a generic function like <code>function identity&lt;T&gt;(arg: T): T { return arg; }</code> to see generics in action!</p>
        `,
  },
  {
    id: "4",
    title: "Deploying with Vercel: A Step-by-Step Guide",
    date: "2024-03-10",
    description:
      "Learn how to deploy your web applications quickly and easily using Vercel.",
    tags: ["Vercel", "Deployment", "Hosting", "CI/CD"],
    readTime: 4,
    content: `
          <p>Vercel makes it simple to deploy static sites and serverless functions. In this guide, we'll walk through connecting your GitHub repo and deploying your first project.</p>
          <h2>Key Steps</h2>
          <ol>
            <li>Sign up for a Vercel account</li>
            <li>Connect your repository</li>
            <li>Configure build settings</li>
            <li>Deploy and monitor</li>
          </ol>
          <p>Enjoy instant previews and seamless production deployments with Vercel!</p>
        `,
  },
  {
    id: "5",
    title: "State Management in React: Context vs Redux",
    date: "2024-02-18",
    description:
      "Comparing React Context and Redux for managing state in your applications.",
    tags: ["React", "State Management", "Context", "Redux"],
    readTime: 6,
    content: `
          <p>Choosing the right state management solution is crucial for scalable React apps. This post compares Context API and Redux, highlighting their strengths and use cases.</p>
          <h2>When to Use Each</h2>
          <ul>
            <li><strong>Context:</strong> Great for simple, small-scale state sharing</li>
            <li><strong>Redux:</strong> Better for complex, large-scale applications</li>
          </ul>
          <p>Evaluate your app's needs before choosing a state management approach.</p>
        `,
  },
];
