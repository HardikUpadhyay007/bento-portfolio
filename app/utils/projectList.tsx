import {
    AntdSVG,
    CSSSVG,
    ExpressSVG,
    JavascriptSVG,
    MagentaKitchenSVG,
    MongoDBSVG,
    MongooseSVG,
    PrimeReactSVG,
    ReactHookFormSVG,
    ReactSVG,
    SassSVG,
    ShadcnLandingSVG,
    ShadcnSVG,
    ShopApiSVG,
    Sk8terSVG,
    SwaggerSVG,
    TailwindSVG,
    TypescriptSVG,
    VueSVG,
    PostgreSQLSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
    {
        icon: <ShadcnLandingSVG />,
        title: "College Eventify",
        subtitle: "Event management platform",
        technologies: [
            {
                name: "NextJS",
                icon: <VueSVG color="#61DAFB" size={16} />,
            },

            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },

            {
                name: "Tailwind",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "College-Eventify is a Next.js-based platform for college clubs to seamlessly register, log in, and post events. It features dynamic event display, image uploads, secure routing, and a responsive, user-friendly interface.",
        imgUrl: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1746517834/proj1_qfbbrq.jpg",
        videoUrl: "",
        githubUrl: "https://github.com/HardikUpadhyay007/college-eventify",
        websiteUrl: "https://college-eventify.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Bento Portfolio",
        subtitle: "Portfolio website",
        technologies: [
            {
                name: "NextJS",
                icon: <VueSVG color="#61DAFB" size={16} />,
            },

            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },

            {
                name: "Tailwind",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Bento Portfolio is a modern portfolio website built with Next.js and Tailwind CSS. It features a sleek design, responsive layout, and showcases projects and skills effectively. Ideal for developers and creatives looking to present their work.",
        imgUrl: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1746526413/proj4_oqty2l.jpg",
        videoUrl: "",
        githubUrl: "https://github.com/HardikUpadhyay007/portfolio-bento",
        websiteUrl: "https://hardikkupadhyay.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Bookie",
        subtitle: "A digital book store website",
        technologies: [
            {
                name: "NextJS",
                icon: <VueSVG color="#61DAFB" size={16} />,
            },

            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },

            {
                name: "Tailwind",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
            {
                name: "PostgreSQL",
                icon: <PostgreSQLSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Bookie is a digital book store website built with Next.js and Tailwind CSS, featuring a sleek design and responsive layout. It allows users to browse, search, and login to save their favorite books. The site is optimized for performance and provides a seamless user experience.",
        imgUrl: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1750405746/proj6_xv0ztk.jpg",
        videoUrl: "",
        githubUrl: "https://github.com/HardikUpadhyay007/bookie",
        websiteUrl: "https://bookie-inky.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "ItzLinkz",
        subtitle: "Links handler",
        technologies: [
            {
                name: "NextJS",
                icon: <VueSVG color="#61DAFB" size={16} />,
            },

            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },

            {
                name: "Tailwind",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "College-Eventify is a Next.js-based platform for college clubs to seamlessly register, log in, and post events. It features dynamic event display, image uploads, secure routing, and a responsive, user-friendly interface.",
        imgUrl: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1746518565/proj2_rmxdhl.jpg",
        videoUrl: "",
        githubUrl: "https://github.com/HardikUpadhyay007/itzlinkz",
        websiteUrl: "https://itzlinkz.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Landing Page",
        subtitle: "Landing page for a company",
        technologies: [
            {
                name: "ReactJS",
                icon: <VueSVG color="#61DAFB" size={16} />,
            },

            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },

            {
                name: "Tailwind",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Landing page for Jyoti Autmobiles is a sleek React.js-powered landing page designed to showcase automotive services and parts. Fully responsive and optimized for all devices, it delivers a clean UI, smooth navigation, and fast performance for an engaging user experience.",
        imgUrl: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1746525969/sbuprqqd1chup4ot9zm9.jpg",
        videoUrl: "",
        githubUrl: "https://github.com/HardikUpadhyay007/jyotiautomobiles",
        websiteUrl: "https://jyotiautomobiles.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Art-Dome",
        subtitle: "Digital art gallery",
        technologies: [
            {
                name: "NextJS",
                icon: <NextSVG color="#61DAFB" size={16} />,
            },

            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },

            {
                name: "Tailwind",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Art-Dome is a digital art gallery built with Next.js and Tailwind CSS, showcasing a collection of stunning artworks. It features a responsive design, smooth animations, and an intuitive user interface for exploring and appreciating art.",
        imgUrl: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1748188897/proj5_g3cqgg.jpg",
        videoUrl: "",
        githubUrl: "https://github.com/HardikUpadhyay007/art-dome",
        websiteUrl: "https://art-dome.vercel.app/",
    },
];
