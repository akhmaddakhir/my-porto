"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = "2026";
  const { t } = useLanguage();

  return (
    <footer className="bg-[#071322] pt-16 sm:pt-20 pb-12 text-[#8892b0] border-t-2 border-[#233554] font-sans">
      <div className="app-container">
        {/* Top 3-Columns Layout (Struktur desain Anda diselaraskan dengan tema cyber-terminal) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">
          
          {/* Kolom 1: Brand & Bio & Email (span 6) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <h3 className="font-sans font-bold text-2xl text-[#ccd6f6] tracking-tight mb-4">
              Kirkur<span className="text-[#00e5ff]">.</span>
            </h3>
            <p className="text-sm text-[#8892b0] max-w-sm leading-relaxed mb-6 font-normal">
              {t(
                "Portofolio pribadi Akhmad Dakhir, siswa SMK Negeri 4 Malang jurusan Rekayasa Perangkat Lunak (RPL).",
                "Personal portfolio of Akhmad Dakhir, a Software Engineering student at SMK Negeri 4 Malang."
              )}
            </p>
            <a
              href="mailto:akhmaddaqiqulm@gmail.com"
              className="text-sm font-semibold text-[#ccd6f6] hover:text-[#00e5ff] transition-colors inline-block"
            >
              akhmaddaqiqulm@gmail.com
            </a>
          </div>

          {/* Kolom 2: LINKS (span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#00e5ff] uppercase mb-4">
              LINKS
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#ccd6f6] hover:text-[#00e5ff] transition-colors"
                >
                  {t("Beranda", "Home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#ccd6f6] hover:text-[#00e5ff] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#ccd6f6] hover:text-[#00e5ff] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#ccd6f6] hover:text-[#00e5ff] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: STATUS (span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#00e5ff] uppercase mb-4">
              STATUS
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="text-[#ccd6f6] font-medium">
                {t("Siswa SMK (Jurusan RPL)", "Vocational Student (RPL)")}
              </li>
              <li className="text-[#8892b0]">
                SMK Negeri 4 Malang
              </li>
              <li className="text-[#8892b0]">
                Malang, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Separator & Copyright */}
        <div className="border-t border-[#233554]/70 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8892b0]">
          <p>
            © {currentYear} Akhmad Dakhir. All rights reserved.
          </p>
          <p>
            {t("Dibangun dengan Next.js & Tailwind CSS", "Built with Next.js & Tailwind CSS")}
          </p>
        </div>
      </div>
    </footer>
  );
}
