import { ThemeToggle } from "@/components/ui/theme-toggle";
import { IdCard } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl shadow-sm">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
            <IdCard className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">DigitalCard</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
