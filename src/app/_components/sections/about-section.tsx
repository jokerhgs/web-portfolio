import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          About Me
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed">
          Hello! I'm Kier Hagos, a passionate software developer and tech
          enthusiast. I love building innovative solutions that make a
          difference and enjoy exploring new technologies. With a strong
          background in software engineering, I strive to create clean,
          efficient, and impactful digital experiences. When I'm not coding, you
          can find me learning about the latest trends in tech or collaborating
          on exciting projects.
        </p>
      </motion.div>
    </section>
  );
};
