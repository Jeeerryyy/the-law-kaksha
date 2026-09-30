"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { EnhancedSampleChapterModal } from "./EnhancedSampleChapterModal";

export function HeroSection() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28">
        {/* Soft Organic Right Curved Background from SVG Reference */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none z-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 90% 85% at 85% 45%, rgba(235, 243, 255, 0.75) 0%, rgba(240, 246, 254, 0.4) 60%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Subtle Watermark Flower Petals in Background */}
        <div className="absolute right-[-40px] top-[-30px] w-[380px] h-[380px] opacity-[0.035] pointer-events-none select-none z-0">
          <Image
            src="/assets/element lawkaksha.png"
            alt="Motif"
            width={380}
            height={380}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Authentic 3-Book Visual Cluster & Badges from SVG */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
              <div
                className="relative w-full max-w-[520px] group cursor-pointer"
                onClick={() => setSampleModalOpen(true)}
                title="Click to preview free sample chapter"
              >
                {/* 3D Realistic Books Cluster matching SVG */}
                <div className="relative w-full aspect-square max-h-[520px] transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/assets/hero-books-cluster.png"
                    alt="Indian Constitution, Criminal Law, and Law Notes Book Codices"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                  />
                </div>

                {/* Interactive Floating Quick Reader Badge */}
                <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1E40]/90 text-white text-xs font-medium shadow-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Click to Read Free Sample (6-Page Codex)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Typography, Subtitle, CTAs & Stats from SVG */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-1 lg:order-2">
              {/* Main Headline matching SVG */}
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-[4.15rem] leading-[1.12] tracking-tight text-[#0B1E40]">
                Discover Your Next
                <br />
                <span className="text-[#005FD8] font-bold">Favourite Law Resource</span>
              </h1>

              {/* Subtitle matching SVG */}
              <p className="text-base sm:text-lg lg:text-xl text-[#475569] leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Explore books, notes, legal resources, and study material curated for your law journey.
              </p>

              {/* CTA Action Buttons matching SVG */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-[#004B99] hover:bg-[#003D7A] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-md shadow-blue-900/10 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center border-2 border-[#005FD8] text-[#005FD8] hover:bg-blue-50/80 text-base font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Browse Resources</span>
                </Link>
              </div>

              {/* Stats Counters matching SVG */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 max-w-lg mx-auto lg:mx-0">
                <div className="border-r border-slate-200/90 pr-3 sm:pr-6 text-left">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1E40] font-serif tracking-tight">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#64748B] mt-0.5">
                    Resources
                  </div>
                </div>

                <div className="border-r border-slate-200/90 pr-3 sm:pr-6 text-left">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1E40] font-serif tracking-tight">
                    5K+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#64748B] mt-0.5">
                    Learners
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1E40] font-serif tracking-tight">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#64748B] mt-0.5">
                    Topics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 6-Page Sample Reader Modal */}
        <EnhancedSampleChapterModal
          isOpen={sampleModalOpen}
          onClose={() => setSampleModalOpen(false)}
          bookTitle="Indian Constitution & Corporate Law Codex"
          bookId="ca-inter"
          bookPrice={299}
        />
      </section>
    </>
  );
}
