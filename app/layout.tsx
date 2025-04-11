import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";
import { Footer } from "@/components/footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "👨‍💻Portfolio | Creative Designer",
  description: "Portfolio website showcasing creative design work",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#060A0F] text-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <div className="absolute p-2">
              <Image
                src="/images/logo_dark.svg"
                alt="Cipher Dashboard"
                width={100}
                height={100}
                className=""
              />
            </div>
            <Sidebar />
            <main className="flex-1 min-h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white ">
              {children}
            </main>
          </div>

          {/* ✅ Theme Toggle Button */}
          <ThemeToggle />

          {/* ✅ Back to Top Button */}
          <BackToTop />
        </ThemeProvider>
      </body>
      <Footer />
    </html>
  );
}
