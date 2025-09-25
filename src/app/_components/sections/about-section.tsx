"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 w-full min-h-screen flex flex-col items-center justify-center bg-background px-2 sm:px-4 py-12 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl w-full flex flex-col items-center gap-6"
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary mb-2 text-center">
          About Me
        </h2>
        <div className="h-px w-20 sm:w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full justify-between">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-2 items-center md:items-start justify-center md:justify-start">
            <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center">
              <Image
                src="/profile-picture.png"
                alt="Kier Hagos"
                width={300}
                height={300}
                className="rounded-md object-cover object-top shadow-lg mb-2 w-full max-h-[350px] aspect-square h-auto min-h-[180px] sm:min-h-[220px]"
                priority
              />
            </div>
            <span className="text-xs text-gray-400 mt-1 italic text-center md:text-left">
              *Image enhanced by AI
            </span>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-center">
            <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed text-center lg:text-left w-full">
              Hello! I'm <span className="text-primary">Kier Hagos</span>, a
              passionate software developer and tech enthusiast. I love building
              innovative solutions that make a difference and enjoy exploring
              new technologies. With a strong background in software
              engineering, I strive to create clean, efficient, and impactful
              digital experiences. When I'm not coding, you can find me learning
              about the latest trends in tech or collaborating on exciting
              projects.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed text-center lg:text-left w-full mt-4">
              I specialize in full-stack web and mobile development, with a
              focus on modern frameworks and integrating AI to improve user
              experiences. I'm committed to continuous learning and delivering
              high-quality results.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
