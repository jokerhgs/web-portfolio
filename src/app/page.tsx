import { NavBar } from "./_components/nav-bar";
import {
  HomeSection,
  AboutSection,
  ServicesSection,
  TechnologiesSection,
  BlogsSection,
  ProjectsSection,
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
      <ProjectsSection />
      <ContactSection />
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-8">
        <ThemeSwitch />
        <AIChatBox />
      </div>
    </>
  );
}
