"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
  index: number;
}

export const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  technologies,
  logo,
  index
}: ExperienceCardProps) => {
  return (
    <div className="flex gap-4 relative">
      {/* Timeline dot and line */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-gray-600 z-10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
        {index !== 2 && (
          <div className="w-1 grow bg-gray-600 experience-timeline opacity-0"></div>
        )}
      </div>
      
      {/* Card content */}
      <Card 
        className="experience-card opacity-0 experience-mobile-animation w-full md:w-[90%] mb-8"
        shadow="md"
      >
        <CardHeader className="flex gap-3 items-center">
          {logo && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={logo}
                alt={company}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col">
            <p className="text-lg font-bold">{title}</p>
            <div className="flex flex-col md:flex-row md:gap-2">
              <p className="text-small text-default-500">{company}</p>
              <p className="hidden md:block text-small text-default-500">•</p>
              <p className="text-small text-default-500">{location}</p>
            </div>
          </div>
          <div className="ml-auto px-2 py-1 rounded bg-gray-600 text-white text-xs">
            {period}
          </div>
        </CardHeader>
        <CardBody className="gap-4">
          <ul className="list-disc pl-5 space-y-2">
            {description.map((item, i) => (
              <li key={i} className="experience-detail opacity-0 experience-mobile-animation">
                {item}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-2 experience-tech opacity-0 experience-mobile-animation">
            {technologies.map((tech, i) => (
              <Chip key={i} variant="flat" className="bg-gray-600 text-white border-none" size="sm">
                {tech}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
