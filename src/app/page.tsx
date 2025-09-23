"use client";

import { NavBar } from "./_components/nav-bar";
import {
  HomeSection,
  AboutSection,
  ServicesSection,
  TechnologiesSection,
  BlogsSection,
  ContactSection,
} from "./_components/sections";
import { ThemeSwitch } from "./_components/theme-switch";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <BlogsSection />
      <ContactSection />
      <ThemeSwitch />
    </>
  );
}
