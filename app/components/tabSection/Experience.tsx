"use client";
import { useEffect } from "react";
import { ExperienceCard } from "../ExperienceCard";
import { experienceList } from "@/app/utils";
import type { Experience as ExperienceType } from "@/app/types";
import experienceAnimation from "@/app/utils/experienceAnimations";

export const ExperienceSection = () => {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      // Desktop animations
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
    <div className="overflow-hidden bg-black">
      <div className="pl-3">
        {experienceList.map((exp: ExperienceType, index) => (
          <ExperienceCard
            key={exp.id}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            description={exp.description}
            technologies={exp.technologies}
            logo={exp.logo}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
