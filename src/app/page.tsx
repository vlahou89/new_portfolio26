import { Navbar } from "@/app/components/Navbar";
import {HeroSection} from "@/app/components/HeroSection";
import {AboutSection} from "@/app/components/AboutSection";
import {SkillsSection} from "@/app/components/SkillsSection";
import {ProjectsSection} from "@/app/components/ProjectsSection";
import {ExperienceSection} from "@/app/components/ExperienceSection";
import {ContactSection} from "@/app/components/ContactSection";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Index;
