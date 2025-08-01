import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/ui/sonner";

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const helvetica = localFont({
    src: [
        {
            path: "../../public/fonts/helvetica/Helvetica-Light.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-helvetica",
});
const helveticaNeue = localFont({
    src: [
        {
            path: "../../public/fonts/helvetica-neue/HelveticaNeue-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-neue/HelveticaNeue-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-neue/HelveticaNeue-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-neue/HelveticaNeue-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
    ],
    variable: "--font-helveticaNeue",
});
const helveticaNowDisplay = localFont({
    src: [
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowDisplay-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/helvetica-now/HelveticaNowDisplay-Medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-helveticaNowDisplay",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
        ${interSans.variable} 
        ${helvetica.variable} 
        ${helveticaNeue.variable} 
        ${helveticaNowDisplay.variable} 
        antialiased`}
            >
                {children}
                <Toaster
                    position={"bottom-right"}
                    expand={true}
                    toastOptions={{
                        classNames: {
                            description: "text-text-muted",
                        },
                    }}
                />
            </body>
        </html>
    );
}
