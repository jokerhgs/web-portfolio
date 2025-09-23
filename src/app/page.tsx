"use client";

import { useState, useRef, useEffect } from "react";
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
import { AIChatBox } from "./_components/ai-chatbox";

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
      <AIChatBox />
    </>
  );
}
