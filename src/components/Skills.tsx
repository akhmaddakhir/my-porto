"use client";

import { Cpu, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  // Technical & Development Skills (Max: 100)
  const technicalSkills = [
    { name: "JS / TS (JavaScript & TypeScript)", value: 69 },
    { name: "React", value: 67 },
    { name: "Next.js", value: 67 },
    { name: "Flutter", value: 75 },
    { name: "PHP / SQL", value: 66 },
    { name: "C++", value: 66 },
    { name: "UX Design / Figma", value: 90 },
  ];

  // Tools, Languages & Soft Skills (Max: 100)
  const auxiliarySkills = [
    { name: "Git / GitHub", value: 84 },
    { name: "Docker / Firebase", value: 72 },
    { name: t("Bahasa: Indonesia (Native)", "Language: Indonesian (Native)"), value: 100 },
    { name: t("Bahasa: Inggris", "Language: English"), value: 85 },
    { name: "Problem Solving", value: 91 },
    { name: t("Teamwork & Kolaborasi", "Teamwork & Collaboration"), value: 92 },
    { name: t("Komunikasi", "Communication"), value: 90 },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-[#0a192f] border-t-2 border-[#233554] relative overflow-hidden scroll-mt-20"
    >
      <div className="app-container relative z-10">
        {/* Skills Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 pb-4 border-b-2 border-[#233554] gap-4">
          <div>
            <div className="font-mono text-xs sm:text-sm text-[#00e5ff] mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00e5ff]" />
              <span>[SKILLS_&_METRICS]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#ccd6f6] tracking-tight">
              {t("Kompetensi Teknis & Keahlian", "Technical Competence & Mastery")}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-3 py-1.5 border border-[#00add0]/30">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
            METRIC_SCALE: 0 - 100
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Column 1: Technical & Development Skills */}
          <div className="bg-[#112240] border-2 border-[#233554] p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] relative group hover:border-[#00add0]/60 transition-colors">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#233554]">
              <div className="flex items-center gap-2.5 text-[#ccd6f6] font-mono font-bold text-sm sm:text-base uppercase">
                <Code2 className="w-5 h-5 text-[#00e5ff]" />
                <span>Technical &amp; Development</span>
              </div>
              <span className="font-mono text-[11px] text-[#8892b0] bg-[#0a192f] px-2 py-0.5 border border-[#233554]">
                7 MODULES
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-mono">
                    <span className="text-[#ccd6f6] font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00e5ff] shrink-0"></span>
                      {skill.name}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#00e5ff] font-bold">
                        {skill.value}
                      </span>
                      <span className="text-[#64748b] text-[11px]">
                        / 100
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-[#0a192f] border border-[#233554] h-2.5 sm:h-3 rounded-full p-[2px] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00add0] to-[#00e5ff] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.4)] transition-all duration-700"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tools, Languages & Soft Skills */}
          <div className="bg-[#112240] border-2 border-[#233554] p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] relative group hover:border-[#00add0]/60 transition-colors">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#233554]">
              <div className="flex items-center gap-2.5 text-[#ccd6f6] font-mono font-bold text-sm sm:text-base uppercase">
                <Sparkles className="w-5 h-5 text-[#00e5ff]" />
                <span>{t("Alat, Bahasa & Kompetensi", "Tools, Language & Competencies")}</span>
              </div>
              <span className="font-mono text-[11px] text-[#8892b0] bg-[#0a192f] px-2 py-0.5 border border-[#233554]">
                {t("7 MODUL", "7 MODULES")}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {auxiliarySkills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-mono">
                    <span className="text-[#ccd6f6] font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00add0] shrink-0"></span>
                      {skill.name}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#00e5ff] font-bold">
                        {skill.value}
                      </span>
                      <span className="text-[#64748b] text-[11px]">
                        / 100
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-[#0a192f] border border-[#233554] h-2.5 sm:h-3 rounded-full p-[2px] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00add0] to-[#00e5ff] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.4)] transition-all duration-700"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
