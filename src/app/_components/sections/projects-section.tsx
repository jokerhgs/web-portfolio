"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PetConnect",
    description:
      "A modern platform for pet adoption, lost-and-found, and registration. Connects enthusiasts and shelters, supporting seamless pet management and owner verification for communities.",
    image: "/pet-connect-preview.png",
    technologies: [
      "Expo",
      "React Native",
      "Laravel",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Morph AI",
    description:
      "A wellness app using AI to track exercise, sleep, and nutrition. Integrates wearables to deliver real-time, personalized health recommendations for users’ everyday goals.",
    image: "/morph-ai-preview.png",
    technologies: [
      "React Native",
      "Expo",
      "Hono",
      "Supabase",
      "OpenAI API",
      "Zustand",
    ],
  },
  {
    title: "Workify",
    description:
      "A digital job marketplace for tech professionals. Streamlines job discovery, candidate matching, and portfolio review in a modern, design-focused employment experience.",
    image: "/workify-preview.png",
    technologies: ["React.js", "Typescript", "Laravel", "Tailwind", "Firebase"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="group flex flex-col bg-background rounded-lg border border-border shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-lg w-full mx-auto"
      tabIndex={0}
    >
      <div className="relative aspect-[3/1] w-full h-[180px]">
        <Image
          src={project.image}
          alt={`${project.title} preview image`}
          fill
          className="object-cover w-full h-full rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          priority={index === 0}
          sizes="(max-width: 640px) 100vw, 600px"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between px-6 py-6 gap-2">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center mb-1">
          {project.title}
        </h3>
        <p className="text-secondary-foreground text-center text-sm sm:text-base leading-relaxed mb-1">
          {project.description}
        </p>
        {project.technologies && (
          <ul className="flex flex-wrap justify-center gap-2 mt-1 mb-0">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-primary/10 border border-primary rounded px-2 py-0.5 text-xs text-primary font-medium tracking-wide"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-background"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center"
          id="projects-heading"
        >
          Recent Projects
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4 mt-10" />
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          Explore my latest projects on web development, design, and technology.
        </p>
        <div
          className="
            grid grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8
            justify-items-center
            w-full
            mx-auto
          "
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
