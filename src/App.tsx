import React, { useState } from 'react';
import { AboutSkills } from './components/AboutSkills';
import { ContactSection } from './components/ContactSection';
import { CoursesCertifications } from './components/CoursesCertifications';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { RecruiterValue } from './components/RecruiterValue';
import { ResumeModal } from './components/ResumeModal';
import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-obsidian-950 text-zinc-100">
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        <main id="inicio" className="flex-1">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <AboutSkills />
          <ExperienceSection />
          <CoursesCertifications />
          <ProjectsShowcase />
          <RecruiterValue />
          <ContactSection />
        </main>

        <Footer />

        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </LanguageProvider>
  );
};

export default App;
