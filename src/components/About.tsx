"use client";

import {
  Terminal,
  GraduationCap,
  Smartphone,
  Bot,
  User,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#0a192f] border-t-2 border-[#233554] relative overflow-hidden scroll-mt-20"
    >
      <div className="app-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 pb-4 border-b-2 border-[#233554] gap-4">
          <div>
            <div className="font-mono text-xs sm:text-sm text-[#00e5ff] mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-[#00e5ff]" />
              <span>[ABOUT_DEVELOPER]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#ccd6f6] tracking-tight">
              {t("Perjalanan & Profil Singkat", "A Closer Look at My Journey")}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-3 py-1.5 border border-[#00add0]/30">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
            STATUS: ACTIVE_STUDENT
          </div>
        </div>

        {/* Bio Showcase: Terminal Window (8 cols) + Highlight Metadata (4 cols) */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Terminal Text Window */}
          <div className="lg:col-span-8 bg-[#112240] border-2 border-[#233554] shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] flex flex-col">
            {/* Window Header */}
            <div className="h-10 bg-[#0a192f] border-b-2 border-[#233554] flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 bg-emerald-500/80 inline-block"></span>
                <span className="font-mono text-xs text-[#00e5ff] font-bold tracking-wider ml-2">
                  [BIO_PROFILE.TXT]
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#64748b]">UTF-8</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-[#8892b0] font-sans">
              <div className="font-mono text-xs text-[#00add0] flex items-center gap-2 mb-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>system.read_bio(&quot;akhmaddakhir&quot;)</span>
              </div>

              <p className="text-[#ccd6f6] font-medium leading-relaxed">
                {t(
                  "Halo, saya ",
                  "Hi, I'm "
                )}
                <span className="text-[#00e5ff] font-bold">Dakhir</span>
                {t(
                  ", siswa jurusan Rekayasa Perangkat Lunak di ",
                  ", a Software Engineering student at "
                )}
                <span className="text-[#ccd6f6] font-semibold underline decoration-[#00add0]/60 underline-offset-4">
                  SMK Negeri 4 Malang
                </span>
                {t(
                  ". Saat ini, saya fokus mendalami pengembangan aplikasi mobile, khususnya memahami bagaimana membangun arsitektur aplikasi yang responsif dan terstruktur.",
                  ". Currently, I am focusing on learning and deepening my skills in mobile application development, especially in understanding how to build responsive mobile architectures."
                )}
              </p>

              <p className="leading-relaxed">
                {t(
                  "Bagi saya, proses belajar bukan sekadar membuat aplikasi yang berfungsi, tetapi juga bagaimana menulis ",
                  "For me, the learning process is not just about making a functional application, but also about how to write "
                )}
                <span className="text-[#ccd6f6] font-semibold">
                  {t("kode yang rapi dan terstruktur", "clean and well-structured code")}
                </span>
                {t(
                  " agar aplikasi nyaman digunakan dalam jangka panjang.",
                  " so that the application is comfortable and seamless to use."
                )}
              </p>

              <p className="leading-relaxed">
                {t(
                  "Selain mobile development, saya juga memiliki rasa ingin tahu yang besar terhadap ",
                  "Beside my focus on mobile development, I also have a great curiosity about "
                )}
                <span className="text-[#00e5ff] font-semibold">
                  {t("kecerdasan buatan (AI)", "artificial intelligence")}
                </span>
                {t(
                  ". Saat ini saya mulai mempelajari dasar-dasar AI agar ke depannya dapat mengintegrasikan teknologi cerdas ke dalam aplikasi mobile yang saya kembangkan.",
                  ". Right now, I am starting a journey to learn the basics of AI so that I can integrate intelligent technologies into the mobile applications I develop in the future."
                )}
              </p>
            </div>
          </div>

          {/* Right: Quick Profile Highlights & Focus Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            <div className="bg-[#112240] border-2 border-[#233554] p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] group hover:border-[#00add0]/60 transition-colors">
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#00e5ff] uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4 text-[#00add0]" />
                <span>[EDUCATION_BASE]</span>
              </div>
              <div className="text-base font-bold text-[#ccd6f6] mb-1">
                SMK Negeri 4 Malang
              </div>
              <div className="text-xs text-[#8892b0] font-mono">
                {t("Rekayasa Perangkat Lunak (RPL)", "Software Engineering (Vocational Major)")}
              </div>
            </div>

            <div className="bg-[#112240] border-2 border-[#233554] p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] group hover:border-[#00add0]/60 transition-colors">
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#00e5ff] uppercase tracking-wider mb-2">
                <Smartphone className="w-4 h-4 text-[#00add0]" />
                <span>[PRIMARY_FOCUS]</span>
              </div>
              <div className="text-base font-bold text-[#ccd6f6] mb-1">
                Mobile Dev &amp; Architecture
              </div>
              <div className="text-xs text-[#8892b0]">
                {t(
                  "UI responsif, clean code & arsitektur mobile yang scalable.",
                  "Responsive UI, clean codebase & scalable mobile structure."
                )}
              </div>
            </div>

            <div className="bg-[#112240] border-2 border-[#233554] p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] group hover:border-[#00add0]/60 transition-colors">
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#00e5ff] uppercase tracking-wider mb-2">
                <Bot className="w-4 h-4 text-[#00add0]" />
                <span>[FUTURE_VISION]</span>
              </div>
              <div className="text-base font-bold text-[#ccd6f6] mb-1">
                AI-Powered Mobile Apps
              </div>
              <div className="text-xs text-[#8892b0]">
                {t(
                  "Eksplorasi integrasi machine learning pada aplikasi mobile masa depan.",
                  "Exploring smart machine learning integrations on mobile."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
