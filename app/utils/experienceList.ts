import { Experience } from "@/app/types";

export const experienceList: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer (Freelance)",
    company: "Joy Junction",
    location: "Jaipur, Rajasthan (Remote)",
    period: "June 2025 - July 2025",
    description: [
      "Converted an existing WordPress website to Next.js to improve scalability and performance",
      "Implemented modern frontend architecture with TypeScript and Tailwind CSS for maintainable code",
      "Reduced page load times by 60% through static generation and image optimization techniques",
      "Integrated headless CMS for seamless content management while maintaining the original site's design"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    logo: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1700603685/portfolio/tech-innovations_cwmb7p.png"
  },
  {
    id: 2,
    title: "Frontend Developer (Freelance)",
    company: "Jyoti Automobiles",
    location: "Kanpur, Uttar Pradesh (Remote)",
    period: "Jan 2025 - Feb 2025",
    description: [
      "Designed and developed a modern, responsive landing page for an automobile business using Next.js",
      "Implemented a clean, performance-optimized UI with Tailwind CSS for flexible and rapid styling",
      "Created interactive components for vehicle showcase with smooth animations and transitions",
      "Optimized for mobile devices and implemented SEO best practices to increase local search visibility"
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    logo: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1700603685/portfolio/digital-solutions_tqnvbp.png"
  }
];
