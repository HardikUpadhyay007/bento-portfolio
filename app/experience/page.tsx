"use client";
import { useEffect } from "react";
import { ExperienceCard } from "../components/ExperienceCard";
import { experienceList } from "../utils";
import { Experience } from "../types";
import experienceAnimation from "../utils/experienceAnimations";

export default function ExperiencePage() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      // Desktop animations
      experienceAnimation.experienceHeaderAnimation();
      experienceAnimation.experienceCardAnimation();
      experienceAnimation.experienceTimelineAnimation();
      experienceAnimation.experienceDetailAnimation();
      experienceAnimation.experienceTechAnimation();
    } else {
      // Mobile animations
      experienceAnimation.mobileAnimation();
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-8 overflow-hidden bg-black">
      <h1 className="text-4xl font-bold mb-2 opacity-0 experience-header experience-mobile-animation">
        Work Experience
      </h1>
      <p className="text-gray-400 mb-12 opacity-0 experience-header experience-mobile-animation">
        A timeline of my professional journey and the skills I&apos;ve acquired along the way
      </p>
      
      <div className="pl-3">
        {experienceList.map((experience: Experience, index) => (
          <ExperienceCard
            key={experience.id}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            period={experience.period}
            description={experience.description}
            technologies={experience.technologies}
            logo={experience.logo}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
