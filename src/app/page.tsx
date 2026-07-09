"use client";

import { BusinessForm } from "@/components/business-card/BusinessForm";
import { CardPreview } from "@/components/business-card/CardPreview";
import { DownloadButtons } from "@/components/business-card/DownloadButtons";
import { useBusinessCard } from "@/hooks/useBusinessCard";

export default function Home() {
  const form = useBusinessCard();

  return (
    <div className="min-h-screen">
      <div className="container py-12 mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-slate-100 dark:to-slate-400 mb-4">
            Digital Business Card
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Create your professional digital identity in minutes. Customize your card, add your details, and download it instantly.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Top Section: Form */}
          <div className="w-full flex flex-col shadow-xl shadow-slate-200/50 dark:shadow-none rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 transition-all">
            <BusinessForm form={form} />
          </div>

          {/* Bottom Section: Preview & Download */}
          <div className="w-full flex flex-col gap-6">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden flex flex-col">
              <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Live Preview</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">See how your card will look before exporting.</p>
                  </div>
                  <div className="hidden sm:block">
                    <DownloadButtons />
                  </div>
                </div>
              </div>
              <div className="flex-1 p-8 flex items-center justify-center min-h-[500px] bg-slate-50/50 dark:bg-slate-950/50">
                <div className="scale-100 transition-transform duration-500 hover:scale-[1.02]">
                  <CardPreview form={form} />
                </div>
              </div>
              <div className="p-6 bg-white/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 sm:hidden">
                <DownloadButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
