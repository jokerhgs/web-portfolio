import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextLoop } from "../text-loop";
import { FaArrowDown, FaEnvelope } from "react-icons/fa";

export const HomeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="scroll-mt-24 relative w-full min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center gap-6 md:gap-8 text-center w-full px-4 sm:px-6 max-w-4xl mx-auto py-[15vh]"
      >
        {/* Greeting */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl sm:text-4xl md:text-5xl leading-tight"
        >
          {`Hi! I'm `}
        </motion.div>

        {/* Profession Loop */}
        <div className="text-2xl sm:text-4xl md:text-6xl font-bold h-16 sm:h-20 md:h-28 flex flex-col items-center justify-center">
          <TextLoop
            className="text-primary text-2xl sm:text-4xl md:text-5xl"
            texts={["Kier Hagos", "Software Developer", "Tech Enthusiast"]}
            transition="fade"
          />
        </div>
        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-md my-4"
        />

        {/* Value Proposition */}
        <motion.div
          className="text-sm sm:text-base md:text-lg text-secondary-foreground max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Helping businesses turn{" "}
          <span className="text-[--primary] font-medium">
            technical challenges
          </span>{" "}
          into{" "}
          <span className="text-[--primary] font-medium">
            growth opportunities
          </span>{" "}
          through clean code and strategic solutions
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px var(--primary)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary font-medium text-sm sm:text-base w-full sm:w-auto transition-all"
          >
            <FaEnvelope size={18} className="flex-shrink-0" />
            Contact Me
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "var(--primary)",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("services")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-border font-medium text-sm sm:text-base w-full sm:w-auto transition-all hover:border-[--primary]"
          >
            My Services
            <FaArrowDown size={18} className="flex-shrink-0" />
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-2 rounded-full bg-[--primary]/10"
        >
          <FaArrowDown className="text-[--text-secondary] w-5 h-5" />
        </motion.div>
        <span className="text-xs text-[--text-secondary] mt-2">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
};
