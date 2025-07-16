"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Home, Contact, Projects, Blog, ExperienceSection } from "../tabSection";

export default function TabMenu() {
  return (
    <div className="overflow-hidden bg-black w-full">
      <Tabs className="flex justify-center mt-4 mb-8 overflow-visible">
        <Tab
          key="homme"
          title="Home"
        >
          <Home />
        </Tab>

        <Tab
          key="projects"
          title="Projects"
        >
          <Projects />
        </Tab>

        <Tab
          key="experience"
          title="Experience"
        >
          <ExperienceSection />
        </Tab>

        <Tab
          key="contact"
          title="Contact"
        >
          <Contact />
        </Tab>
        
        <Tab
          key="blog"
          title="Blog"
        >
          <Blog />
        </Tab>
      </Tabs>
    </div>
  );
}
