"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Trophy,
  Calendar,
  Cloud,
  Building2,
  Crown,
  Gamepad2,
  LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface EvidenceThumbnailProps {
  src: string;
  alt: string;
  code: string;
  fallbackIcon: LucideIcon;
  hintPath: string;
}

function EvidenceThumbnail({
  src,
  alt,
  code,
  fallbackIcon: Icon,
  hintPath,
}: EvidenceThumbnailProps) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-[#071322] border-b-2 border-[#233554] overflow-hidden group/thumb flex items-center justify-center">
      {/* Corner Code Tag */}
      <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
        <span className="font-mono text-[10px] font-bold bg-[#0a192f]/90 border border-[#00add0]/40 text-[#00e5ff] px-2 py-0.5">
          [{code}]
        </span>
      </div>

      {/* Tech Corner Brackets */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00e5ff]/60 z-20 pointer-events-none"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00e5ff]/60 z-20 pointer-events-none"></div>

      {!error ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
            onError={() => setError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent pointer-events-none"></div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#112240] to-[#0a192f] relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
          <div className="w-10 h-10 rounded-none bg-[#00add0]/10 border border-[#00add0]/30 flex items-center justify-center text-[#00e5ff] mb-2 group-hover/thumb:bg-[#00add0]/20 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs font-semibold text-[#ccd6f6] mb-0.5">
            {alt}
          </span>
          <span className="font-mono text-[10px] text-[#8892b0]">
            Evidence file: {hintPath}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ExperienceAndAwards() {
  const { t } = useLanguage();

  const experiences = [
    {
      code: "EXP_01",
      period: "2025",
      role: t("Anggota Ekstrakurikuler Cloud Computing", "Cloud Computing Extracurricular Member"),
      company: "SMK Negeri 4 Malang",
      desc: t(
        "Mempelajari prinsip dasar infrastruktur cloud serta cara deployment layanan modern dalam ekosistem yang scalable.",
        "Learning the fundamental principles of cloud infrastructure while exploring how modern services are deployed in scalable ecosystems."
      ),
      image: "/images/cloud_computing.jpeg",
      hintPath: "public/images/cloud_computing.jpeg",
      icon: Cloud,
    },
    {
      code: "EXP_02",
      period: "2025",
      role: t("Peserta Kunjungan Industri", "Industrial Visit Participant"),
      company: "Teka Teki World",
      desc: t(
        "Mengunjungi perusahaan teknologi dan hiburan untuk melihat alur kerja perangkat lunak nyata serta implementasi digital kreatif.",
        "Visiting a technology-driven entertainment company while observing real-world software workflows and creative digital implementations."
      ),
      image: "/images/industrial_visit.jpeg",
      hintPath: "public/images/industrial_visit.jpeg",
      icon: Building2,
    },
  ];

  const awards = [
    {
      code: "ACHV_01",
      year: "GLOBAL RANK",
      title: t("Top 853 Global Leaderboard", "Top 853 Global Leaderboard Holder"),
      organizer: "Chess Rush",
      desc: t(
        "Menembus leaderboard top global game strategi melalui analisis taktis dan resource management yang matang.",
        "Breaking into the global top leaderboard in a strategy game while mastering advanced analytical planning and complex resource management."
      ),
      image: "/images/chess_rush.jpeg",
      hintPath: "public/images/chess_rush.jpeg",
      icon: Crown,
    },
    {
      code: "ACHV_02",
      year: "TIER IMMORTAL",
      title: "Mythical Immortal Rank Achiever",
      organizer: "Mobile Legends",
      desc: t(
        "Mencapai tier tertinggi Mobile Legends melalui gameplay mekanik tinggi, pengambilan keputusan cepat, serta koordinasi tim.",
        "Reaching one of the highest tiers in the game while demonstrating exceptional mechanical skills, rapid decision-making, and strong team coordination."
      ),
      image: "/images/mobile_legend.jpeg",
      hintPath: "public/images/mobile_legend.jpeg",
      icon: Gamepad2,
    },
  ];

  return (
    <section
      id="experience-awards"
      className="py-20 md:py-28 bg-[#0a192f] border-t-2 border-[#233554] relative scroll-mt-20">
      <div className="app-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 pb-4 border-b-2 border-[#233554] gap-4">
          <div>
            <div className="font-mono text-xs sm:text-sm text-[#00e5ff] mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#00e5ff]" />
              <span>[EXPERIENCE_&_AWARDS]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#ccd6f6] tracking-tight">
              {t("Pengalaman & Prestasi", "Experience & Achievements")}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-3 py-1.5 border border-[#00add0]/30">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
            TIMELINE: 2024 - 2026
          </div>
        </div>

        {/* Dual Column Layout: Left = Experience, Right = Awards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Kolom Kiri: Pengalaman Kegiatan & Industri */}
          <div className="bg-[#112240] border-2 border-[#233554] p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between pb-5 mb-6 border-b-2 border-[#233554]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00add0]/10 border border-[#00add0]/40 flex items-center justify-center text-[#00e5ff]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-[#ccd6f6] uppercase tracking-tight">
                    {t("Pengalaman & Aktivitas", "Experience & Activities")}
                  </h3>
                  <span className="font-mono text-xs text-[#64748b]">
                    // ACTIVITIES_TIMELINE
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-2.5 py-1 border border-[#00add0]/30">
                {t("2 LOG", "2 LOGS")}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {experiences.map((exp) => {
                const ExpIcon = exp.icon;
                return (
                  <div
                    key={exp.code}
                    className="bg-[#0a192f] border-2 border-[#233554] overflow-hidden group hover:border-[#00e5ff] transition-all duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.4)]">
                    {/* Photo / Thumbnail Preview */}
                    <EvidenceThumbnail
                      src={exp.image}
                      alt={exp.role}
                      code={exp.code}
                      fallbackIcon={exp.icon}
                      hintPath={exp.hintPath}
                    />

                    {/* Text Content */}
                    <div className="p-5 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-[#00e5ff] font-bold bg-[#00add0]/10 px-2 py-0.5 border border-[#00add0]/30">
                          {exp.period}
                        </span>
                        <span className="text-[#8892b0] flex items-center gap-1.5">
                          <ExpIcon className="w-3.5 h-3.5 text-[#00e5ff]" />
                          {exp.company}
                        </span>
                      </div>

                      <h4 className="font-sans font-bold text-base sm:text-lg text-[#ccd6f6] group-hover:text-[#00e5ff] transition-colors">
                        {exp.role}
                      </h4>

                      <p className="text-[#8892b0] text-xs sm:text-sm leading-relaxed font-sans">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Prestasi & Penghargaan */}
          <div className="bg-[#112240] border-2 border-[#233554] p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between pb-5 mb-6 border-b-2 border-[#233554]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00add0]/10 border border-[#00add0]/40 flex items-center justify-center text-[#00e5ff]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-[#ccd6f6] uppercase tracking-tight">
                    {t("Prestasi & Penghargaan", "Honors & Achievements")}
                  </h3>
                  <span className="font-mono text-xs text-[#64748b]">
                    // COMPETITIVE_AWARDS
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-2.5 py-1 border border-[#00add0]/30">
                {t("2 PENGHARGAAN", "2 AWARDS")}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {awards.map((award) => {
                const AwardIcon = award.icon;
                return (
                  <div
                    key={award.code}
                    className="bg-[#0a192f] border-2 border-[#233554] overflow-hidden group hover:border-[#00e5ff] transition-all duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.4)]">
                    {/* Photo / Thumbnail Preview */}
                    <EvidenceThumbnail
                      src={award.image}
                      alt={award.title}
                      code={award.code}
                      fallbackIcon={award.icon}
                      hintPath={award.hintPath}
                    />

                    {/* Text Content */}
                    <div className="p-5 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-[#00e5ff] font-bold bg-[#00add0]/10 px-2 py-0.5 border border-[#00add0]/30">
                          {award.year}
                        </span>
                        <span className="text-[#8892b0] flex items-center gap-1.5">
                          <AwardIcon className="w-3.5 h-3.5 text-[#00e5ff]" />
                          {award.organizer}
                        </span>
                      </div>

                      <h4 className="font-sans font-bold text-base sm:text-lg text-[#ccd6f6] group-hover:text-[#00e5ff] transition-colors">
                        {award.title}
                      </h4>

                      <p className="text-[#8892b0] text-xs sm:text-sm leading-relaxed font-sans">
                        {award.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
