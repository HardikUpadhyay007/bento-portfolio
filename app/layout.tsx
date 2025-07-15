import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
    title: "Hardik Upadhyay",
    description: "Hardik Upadhyay | Web developer portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="bg-black">
            <body className={`${inter.className} bg-black overflow-x-hidden`}>
                <main className="dark text-foreground bg-background min-h-screen overflow-x-hidden max-w-full">
                    <NavbarSection />
                    <Providers>
                        <div className="bg-black min-h-screen">
                            {children}
                        </div>
                    </Providers>
                    <Analytics />
                </main>
            </body>
        </html>
    );
}
