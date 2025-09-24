"use client";

import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaAngular,
  FaRegCircle,
  FaPhp,
  FaLaravel,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiJest,
  SiVercel,
  SiAmazon,
  SiIonic,
  SiSharp,
  SiExpress,
  SiFirebase,
  SiZod,
  SiRedis,
  SiHono,
  SiMysql,
  SiSupabase,
  SiExpo,
  SiReactquery,
  SiVite,
  SiShadcnui,
  SiVitest,
  SiDaisyui,
  SiReacthookform,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { AiFillStar } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";
import { PiWind } from "react-icons/pi";

import { useRef, useEffect } from "react";

// GenericIcon for technologies without a specific icon
const GenericIcon = FaRegCircle;



const summary = ``;

const TECHNOLOGY_CATEGORIES = [
  {
    label: "Languages & Runtime",
    key: "languages",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, starred: true },
      { name: "TypeScript", icon: SiTypescript, starred: true },
      { name: "Node.js", icon: FaNodeJs, starred: true },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: FaPhp },
      { name: "C#", icon: SiSharp },
    ],
  },
  {
    label: "Frontend - Web",
    key: "frontend-web",
    technologies: [
      { name: "React", icon: FaReact, starred: true },
      { name: "Next.js", icon: SiNextdotjs, starred: true },
      { name: "Tailwind CSS", icon: SiTailwindcss, starred: true },
      { name: "shadcn/ui", icon: SiShadcnui, starred: true },
      { name: "DaisyUI", icon: SiDaisyui, starred: true },
      { name: "Angular", icon: FaAngular },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Sass", icon: FaSass },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    label: "Frontend - Mobile",
    key: "frontend-mobile",
    technologies: [
      { name: "React Native", icon: TbBrandReactNative, starred: true },
      { name: "Expo", icon: SiExpo, starred: true },
      { name: "NativeWind", icon: PiWind, starred: true },
      { name: "Ionic", icon: SiIonic },
    ],
  },
  {
    label: "Libraries",
    key: "libraries",
    technologies: [
      { name: "Zustand", icon: GenericIcon, starred: true },
      { name: "React Query", icon: SiReactquery, starred: true },
      { name: "React Hook Form", icon: SiReacthookform, starred: true },
      { name: "Zod", icon: SiZod, starred: true },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    label: "Backend & Databases",
    key: "backend-databases",
    technologies: [
      { name: "Express", icon: SiExpress, starred: true },
      { name: "Supabase", icon: SiSupabase, starred: true },
      { name: "Hono", icon: SiHono, starred: true },
      { name: "Prisma", icon: SiPrisma, starred: true },
      { name: "MongoDB", icon: SiMongodb, starred: true },
      { name: "Mongoose", icon: SiMongoose, starred: true },
      { name: "PostgreSQL", icon: SiPostgresql, starred: true },
      { name: "MySQL", icon: SiMysql },
      { name: "MS SQL Server", icon: DiMsqlServer },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
      { name: "Laravel", icon: FaLaravel },
    ],
  },
  {
    label: "AI, Testing, & Devops",
    key: "ai-testing-devops",
    technologies: [
      { name: "OpenAI", icon: SiOpenai, starred: true },
      { name: "Docker", icon: FaDocker, starred: true },
      { name: "Vercel", icon: SiVercel, starred: true },
      { name: "Git", icon: FaGitAlt, starred: true },
      { name: "Deepseek", icon: FaBrain, starred: true },
      { name: "AWS", icon: SiAmazon, starred: true },
      { name: "Gemini", icon: SiGooglecloud, starred: true },
      { name: "Grok", icon: GenericIcon },
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
    ],
  },
];

// FadeTransition component for smooth transitions
const FadeTransition = ({
  children,
  triggerKey,
}: {
  children: React.ReactNode;
  triggerKey: string;
}) => {
  const [show, setShow] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setShow(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayChildren(children);
      setShow(true);
    }, 180); // match duration-200
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerKey]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-200 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState(TECHNOLOGY_CATEGORIES[0].key);

  const activeCategory = TECHNOLOGY_CATEGORIES.find(
    (cat) => cat.key === activeTab
  );

  return (
    <section
      id="technologies"
      className="scroll-mt-24 w-full py-12 md:py-16 lg:py-20 bg-background"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Technologies
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed mt-8">
          Explore the technologies and tools I use to build robust, scalable,
          and modern solutions.
        </p>
        <div className="max-w-7xl mx-auto px-4 flex flex-col ">
          {/* Tabs */}
          <div className="flex justify-center mt-8 gap-2 flex-wrap">
            {TECHNOLOGY_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-2 rounded-t-lg font-medium border-b-2 transition-colors duration-200
                ${
                  activeTab === cat.key
                    ? "border-primary text-primary bg-primary/10"
                    : "border-transparent text-secondary-foreground hover:text-primary hover:bg-primary/5"
                }
              `}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Technologies Grid with smooth transition */}
          <FadeTransition triggerKey={activeTab}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {activeCategory?.technologies.map(
                ({ name, icon: Icon, starred }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center p-4 bg-primary/5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border w-full relative
                    hover:bg-primary hover:text-primary-foreground hover:border-primary group"
                  >
                    {starred && (
                      <span
                        className="absolute top-2 right-2 text-yellow-400"
                        title="Most used"
                      >
                        <AiFillStar size={18} />
                      </span>
                    )}
                    <div className="mb-2 text-3xl text-primary group-hover:text-background transition-colors">
                      <Icon />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center group-hover:text-background transition-colors">
                      {name}
                    </span>
                  </div>
                )
              )}
            </div>
          </FadeTransition>
        </div>
      </div>
    </section>
  );
};
