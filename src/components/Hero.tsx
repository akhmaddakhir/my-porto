"use client";

import { ArrowRight, Code2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-16 md:py-20 lg:py-24 bg-[#0a192f]">
      {/* Background Grid Pattern & Radial Glow (Persis jadibotwa.xyz) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#00add0]/10 rounded-full blur-[140px] -z-10 pointer-events-none mix-blend-screen"></div>

      <div className="app-container w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Kolom Kiri: Headline & Intro */}
          <div className="lg:col-span-7 max-w-xl lg:max-w-2xl relative z-10">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl 3xl:text-8xl font-sans font-extrabold text-[#ccd6f6] leading-[1.05] tracking-tight mb-6 sm:mb-8">
              {t("Halo, saya", "Hi, I'm")} <br />
              <span className="text-[#00e5ff]">
                akhmaddakhir
              </span>
            </h1>

            {/* Sub-headline / Deskripsi */}
            <p className="text-base sm:text-lg lg:text-xl text-[#8892b0] leading-relaxed mb-10 sm:mb-12 max-w-xl font-sans font-medium">
              {t(
                "Fokus mengembangkan keahlian dalam arsitektur aplikasi mobile dan memulai perjalanan mendalami kecerdasan buatan (AI).",
                "Focused on developing skills in mobile application architecture and starting a journey to learn more about artificial intelligence."
              )}
            </p>

            {/* Action Buttons: Primary Explore & Secondary Download CV */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              {/* Primary Button: EXPLORE */}
              <a href="#projects" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center font-mono font-bold tracking-wider rounded-none uppercase border-b-4 border-r-4 border-[#0a6f88] bg-[#00e5ff] hover:bg-[#4ce1fd] hover:translate-y-[2px] hover:translate-x-[2px] hover:border-b-2 hover:border-r-2 active:border-b-0 active:border-r-0 active:translate-y-[4px] active:translate-x-[4px] text-white px-8 sm:px-9 py-4 text-base sm:text-lg gap-2.5 min-h-[52px] w-full group transition-all cursor-pointer">
                  <span>{t("JELAJAHI", "EXPLORE")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </button>
              </a>

              {/* Secondary Button: DOWNLOAD CV */}
              <a href="/cv.pdf" download="CV.pdf" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center font-mono font-bold tracking-wider rounded-none uppercase bg-transparent text-[#8892b0] border-2 border-[#233554] hover:border-[#00e5ff] hover:text-[#00e5ff] px-8 sm:px-9 py-4 text-base sm:text-lg gap-2.5 min-h-[52px] w-full group transition-all cursor-pointer">
                  <Code2 className="w-4 h-4 shrink-0 text-[#8892b0] group-hover:text-[#00e5ff] transition-colors" />
                  <span>{t("UNDUH CV", "DOWNLOAD CV")}</span>
                </button>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Character / Portrait Showcase Card (Dibuat Lebih Lebar & Proporsional/Tidak Terlalu Tinggi) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Glowing Ambient Glow di Sekitar Card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00add0]/20 to-[#00e5ff]/10 rounded-2xl blur-2xl -z-10 pointer-events-none"></div>

            <div className="w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[470px] bg-[#112240] border-2 border-[#233554] shadow-[16px_16px_0_0_rgba(0,229,255,0.14)] relative z-10 font-sans flex flex-col">
              
              {/* Window Header */}
              <div className="h-11 sm:h-12 bg-[#0a192f] border-b-2 border-[#233554] flex items-center px-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-rose-500/80 border border-rose-600 inline-block"></span>
                  <span className="w-3 h-3 bg-amber-500/80 border border-amber-600 inline-block"></span>
                  <span className="w-3 h-3 bg-emerald-500/80 border border-emerald-600 inline-block"></span>
                  <span className="font-mono text-xs sm:text-sm text-[#00e5ff] font-bold tracking-wider ml-2 sm:ml-3">
                    [CHARACTER_PROFILE.EXE]
                  </span>
                </div>
              </div>

              {/* Main Photo Area (Lebar Tetap, Height Disesuaikan Lebih Proporsional & Gambar Lebih Besar) */}
              <div className="p-3.5 sm:p-4 flex flex-col">
                <div className="relative w-full aspect-[4/3.8] sm:aspect-[4/3.8] bg-black border-2 border-[#233554] overflow-hidden group flex items-center justify-center">
                  
                  {/* Decorative High-tech Corner Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00e5ff] z-20 pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00e5ff] z-20 pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00e5ff] z-20 pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00e5ff] z-20 pointer-events-none"></div>

                  {/* Decorative Center Crosshair Ticks */}
                  <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-[2px] bg-[#00e5ff]/60 z-20 pointer-events-none"></div>
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 w-2 h-[2px] bg-[#00e5ff]/60 z-20 pointer-events-none"></div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-[#00e5ff]/60 z-20 pointer-events-none"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-[#00e5ff]/60 z-20 pointer-events-none"></div>

                  {/* Foto / Karakter Pengguna (Terskalakan Penuh Tanpa Terpotong) */}
                  {!imageError ? (
                    <div className="relative w-full h-full p-1.5 sm:p-2">
                      <Image
                        src="/images/profile.png"
                        alt="Profile Showcase"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImageError(true)}
                        priority
                      />
                      {/* Cyber vignette gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 border-2 border-dashed border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff]">
                      <span className="w-3 h-3 bg-[#00e5ff] animate-ping"></span>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
