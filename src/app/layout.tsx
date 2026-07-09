import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Business Card Generator",
  description: "Create and download your professional digital business card.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-foreground relative overflow-x-hidden">
        {/* Background decorative blobs for Glassmorphism */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/30 dark:bg-purple-900/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-cyan-400/30 dark:bg-cyan-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-blue-400/30 dark:bg-blue-900/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
