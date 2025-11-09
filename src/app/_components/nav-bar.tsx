"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaBookOpen,
} from "react-icons/fa";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "home", name: "Home", icon: <FaHome size={18} /> },
    { id: "about", name: "About", icon: <FaUser size={18} /> },
    { id: "services", name: "Services", icon: <FaCode size={18} /> },
    { id: "blogs", name: "Blogs", icon: <FaBookOpen size={18} /> },
    { id: "contact", name: "Contact", icon: <FaEnvelope size={18} /> },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navbar variants for animation
  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className="fixed w-full backdrop-blur-sm z-50 h-20 flex justify-between items-center px-6 sm:px-8 bg-background text-foreground border-b border-border"
    >
      {/* Logo/Brand */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <span className="text-lg font-medium text-primary">Joe Kier Hagos</span>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 ">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{
              scale: 1.05,
              color: "var(--color-primary)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer text-sm font-medium text-foreground transition-colors duration-200"
            onClick={() => scrollToSection(section.id)}
            style={{}}
          >
            {/* Icon with inherit color */}
            <span className="text-inherit">{section.icon}</span>
            {section.name}
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative border-b ">
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg py-2 px-4 z-50 text-foreground bg-background/90 backdrop-blur-sm"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{
                    x: 5,
                    color: "var(--color-primary)",
                  }}
                  className="flex items-center gap-3 py-3 cursor-pointer last:border-0 text-foreground transition-colors duration-200"
                  onClick={() => scrollToSection(section.id)}
                  style={{}}
                >
                  <span className=" text-foreground">{section.icon}</span>
                  <span className="text-sm text-foreground">
                    {section.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
