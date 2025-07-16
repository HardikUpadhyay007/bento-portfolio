# 🎨 Bento Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring a beautiful bento-style layout that showcases projects, skills, and contact information in an elegant grid design.

## ✨ Features

-   **Bento Grid Layout**: Modern, card-based design inspired by iOS widgets
-   **Responsive Design**: Seamlessly adapts to all screen sizes
-   **Interactive Animations**: Smooth transitions powered by Framer Motion
-   **Project Showcase**: Display projects with live demos and source code links
-   **Contact Form**: Functional contact section for potential clients/employers
-   **Education Timeline**: Visual representation of educational background
-   **Technology Stack**: Interactive display of skills and technologies
-   **Dark/Light Mode**: Toggle between themes for better user experience
-   **Performance Optimized**: Built with Next.js 14 App Router for optimal performance

## 🚀 Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) with App Router
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [NextUI](https://nextui.org/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Deployment**: [Vercel](https://vercel.com/)
-   **Analytics**: Vercel Analytics
-   **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Installation

### Prerequisites

-   Node.js 18+
-   npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/bento-portfolio.git
    cd bento-portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🛠️ Build and Deploy

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm run start
```

### Lint the code

```bash
npm run lint
```

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── about/           # About section components
│   │   ├── tabSection/      # Tab navigation components
│   │   │   ├── Home.tsx     # Home tab content
│   │   │   ├── Projects.tsx # Projects showcase
│   │   │   └── Contact.tsx  # Contact form
│   │   ├── ui/              # Reusable UI components
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Form.tsx         # Contact form component
│   │   └── Project.tsx      # Individual project card
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions and data
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/
│   └── videos/              # Project demo videos
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Adding New Projects

1. Edit `app/utils/projectList.tsx` to add your project data
2. Add project images/videos to the `public/` directory
3. Update the project types in `app/types/project.ts` if needed

### Updating Personal Information

-   **About Section**: Edit `app/utils/whoAmIData.ts`
-   **Education**: Update `app/utils/educationList.ts`
-   **Contact Info**: Modify `app/utils/contactData.ts`
-   **Technologies**: Update `app/utils/technologyIconList.tsx`

### Styling

-   **Global Styles**: Edit `app/globals.css`
-   **Tailwind Config**: Customize `tailwind.config.ts`
-   **Animations**: Modify animation utilities in `app/utils/`

## 🌟 Key Components

-   **Bento Grid**: Main layout component with responsive grid system
-   **Tab Navigation**: Smooth transitions between different sections
-   **Project Cards**: Interactive cards with hover effects and video previews
-   **Contact Form**: Functional form with validation and notifications
-   **Education Timeline**: Animated timeline component
-   **Technology Icons**: Interactive skill showcase

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

-   **Mobile**: 320px and up
-   **Tablet**: 768px and up
-   **Desktop**: 1024px and up
-   **Large Screens**: 1440px and up

## 🚀 Performance

-   **Core Web Vitals**: Optimized for excellent performance scores
-   **Image Optimization**: Next.js Image component for optimal loading
-   **Code Splitting**: Automatic code splitting for faster page loads
-   **SEO Optimized**: Meta tags and structured data for better search visibility

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Your Name**

-   Portfolio: [Live Demo](https://your-portfolio.vercel.app/)
-   GitHub: [@yourusername](https://github.com/yourusername)
-   LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
-   Email: your.email@example.com

## 🙏 Acknowledgments

-   [NextUI](https://nextui.org/) for the beautiful UI components
-   [Framer Motion](https://www.framer.com/motion/) for smooth animations
-   [Vercel](https://vercel.com/) for hosting and analytics
-   [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

⭐ Star this repository if you found it helpful!
