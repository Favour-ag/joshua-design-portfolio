import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";
import { Footer } from "@/components/footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#060A0F] text-black dark:text-white lg:px-2`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <Sidebar />
            <main className="flex-1 min-h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white">
              {children}
              {/* Move ThemeToggle inside main content */}
              <div className="fixed bottom-4 right-4 z-50">
                <ThemeToggle />
              </div>
              <BackToTop />
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
