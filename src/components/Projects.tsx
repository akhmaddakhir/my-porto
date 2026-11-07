"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Terminal, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectThumbnailProps {
  src: string;
  alt: string;
  category: string;
}

function ProjectThumbnail({ src, alt, category }: ProjectThumbnailProps) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] bg-[#071322] border-b-2 border-[#233554] overflow-hidden group/thumb">
      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="font-mono text-[10px] text-[#ccd6f6] bg-[#0a192f]/90 px-2.5 py-1 border border-[#233554] backdrop-blur-sm shadow">
          {category}
        </span>
      </div>

      {/* Tech Corner Brackets */}
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#00e5ff]/70 z-20 pointer-events-none"></div>
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#00e5ff]/70 z-20 pointer-events-none"></div>

      {!error ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent pointer-events-none"></div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#112240] to-[#0a192f] relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
          <div className="w-10 h-10 bg-[#00add0]/10 border border-[#00add0]/30 flex items-center justify-center text-[#00e5ff] mb-2">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs font-semibold text-[#ccd6f6] mb-0.5">
            {alt}
          </span>
          <span className="font-mono text-[10px] text-[#8892b0]">
            Image file: {src}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      code: "SYS_PRJ_01",
      title: "KimiaXplore App",
      category: "Mobile App / Education",
      desc: t(
        "Aplikasi mobile untuk membantu siswa mempelajari ilmu kimia dengan mudah melalui simulasi interaktif dan bantuan asisten AI otomatis.",
        "A mobile application built to help students learn chemistry easily through interactive simulations and automated AI assistance."
      ),
      tags: ["Flutter", "Dart", "Gemini API", "Supabase"],
      image: "/images/kimiaxplore.webp",
      demoUrl: "#",
      githubUrl: "https://github.com/akhmaddakhir/KimiaXplore",
      featured: true,
    },
    {
      code: "SYS_PRJ_02",
      title: "Akhmad Dakhir Portfolio",
      category: "Full-Stack Web App",
      desc: t(
        "Situs web pribadi untuk memperkenalkan diri sebagai pengembang dan menampilkan portofolio karya yang telah dibangun.",
        "A personal website built to introduce myself as a developer and showcase all the projects I have created."
      ),
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "/images/myporto_preview.png",
      demoUrl: "#",
      githubUrl: "https://github.com/akhmaddakhir/my-porto",
      featured: true,
    },
    {
      code: "SYS_PRJ_03",
      title: "Teman Resto App",
      category: "Mobile App / Platform",
      desc: t(
        "Aplikasi mobile kuliner untuk membantu pengguna menemukan tempat makan lokal dengan navigasi peta serta reservasi mitra.",
        "A food discovery mobile app built to help users find local dining spots with map navigation and help partners manage reservations."
      ),
      tags: ["Flutter", "Dart", "Flutter Map", "Firebase"],
      image: "/images/temanresto.webp",
      demoUrl: "#",
      githubUrl: "https://github.com/akhmaddakhir/Teman-Resto",
      featured: false,
    },
    {
      code: "SYS_PRJ_04",
      title: "Teman Singgah Website",
      category: "Full-Stack Web Platform",
      desc: t(
        "Platform perhotelan online untuk membantu wisatawan memesan penginapan serta mempermudah pengelola mengatur properti.",
        "An online hospitality platform built to help travelers book accommodations and help hosts manage their property listings."
      ),
      tags: ["PHP", "JavaScript", "CSS3", "MySQL"],
      image: "/images/temansinggah.png",
      demoUrl: "#",
      githubUrl: "https://github.com/akhmaddakhir/Teman-Singgah",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-[#0a192f] border-t-2 border-[#233554] relative scroll-mt-20">
      <div className="app-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 pb-4 border-b-2 border-[#233554] gap-4">
          <div>
            <div className="font-mono text-xs sm:text-sm text-[#00e5ff] mb-2 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#00e5ff]" />
              <span>[FEATURED_PROJECTS]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#ccd6f6] tracking-tight">
              {t("Proyek Unggulan & Sistem Nyata", "Featured Projects & Real-World Systems")}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-3 py-1.5 border border-[#00add0]/30">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
            REPOSITORIES: 4 DEPLOYED
          </div>
        </div>

        {/* Project Grid with Neo-brutalist tech cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.code}
              className="bg-[#112240] border-2 border-[#233554] relative group hover:border-[#00e5ff] transition-all duration-300 flex flex-col justify-between shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Corner Tech Brackets on Hover */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00e5ff] z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00e5ff] z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Project Image Preview */}
              <ProjectThumbnail
                src={proj.image}
                alt={proj.title}
                category={proj.category}
              />

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-2xl font-sans font-bold text-[#ccd6f6] mb-3 group-hover:text-[#00e5ff] transition-colors">
                    {proj.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-[#8892b0] text-sm leading-relaxed mb-6 font-sans">
                    {proj.desc}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] bg-[#0a192f] text-[#ccd6f6] border border-[#233554] px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#233554] flex items-center gap-3">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-mono font-bold tracking-wider rounded-none uppercase border-b-2 border-r-2 border-[#0a6f88] bg-[#00add0] hover:bg-[#00e5ff] text-[#0a192f] px-4 py-2 text-xs gap-1.5 transition-all">
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-mono font-bold tracking-wider rounded-none uppercase bg-[#0a192f] border border-[#233554] hover:border-[#00e5ff] hover:text-[#00e5ff] text-[#ccd6f6] px-4 py-2 text-xs gap-1.5 transition-all">
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <div className="mt-12 bg-[#112240] border-2 border-dashed border-[#233554] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#00e5ff]" />
            <span className="font-mono text-sm text-[#ccd6f6]">
              {t("Tertarik melihat lebih banyak repositori?", "Interested in exploring more repositories?")}
            </span>
          </div>
          <a
            href="https://github.com/akhmaddakhir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold uppercase tracking-wider text-[#00e5ff] hover:text-[#4ce1fd] flex items-center gap-1.5 shrink-0">
            {t("[LIHAT_GITHUB]", "[VIEW_GITHUB]")}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
