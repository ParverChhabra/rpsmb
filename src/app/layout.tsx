import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../index.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Radiant Public School - Excellence in Education",
    template: "%s | Radiant Public School",
  },
  description: "Radiant Public School offers world-class education with a focus on holistic development, academic excellence, and modern infrastructure.",
  keywords: ["Radiant Public School", "Education", "School", "Academics", "Holistic Development"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://radiant-public-school.com", // Placeholder URL
    title: "Radiant Public School - Excellence in Education",
    description: "Radiant Public School offers world-class education with a focus on holistic development.",
    siteName: "Radiant Public School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiant Public School - Excellence in Education",
    description: "Radiant Public School offers world-class education with a focus on holistic development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
