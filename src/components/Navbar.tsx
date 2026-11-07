"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { id: "about", name: t("Tentang", "About"), href: "#about" },
    { id: "experience-awards", name: t("Pengalaman", "Experience"), href: "#experience-awards" },
    { id: "skills", name: t("Keahlian", "Skills"), href: "#skills" },
    { id: "projects", name: t("Proyek", "Projects"), href: "#projects" },
    { id: "contact", name: t("Kontak", "Contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled to the bottom of the page, activate Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 180;
      const sectionIds = ["contact", "projects", "skills", "experience-awards", "about"];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Default to about when near top
      setActiveSection("about");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 h-20 w-full bg-[#0a192f]/90 backdrop-blur-md border-b-2 border-[#233554] font-sans">
      <div className="app-container h-full flex items-center justify-between">
        {/* Brand / Logo (Tanpa Icon Box) */}
        <a href="#" className="group py-1">
          <span className="font-sans font-bold text-2xl text-[#ccd6f6] tracking-tight group-hover:text-[#00e5ff] transition-colors">
            Kirkur<span className="text-[#00e5ff]">.</span>
          </span>
        </a>

        {/* Center / Navigation Links (Hanya warna teks yang berubah saat aktif) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`font-mono text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-[#00e5ff] font-bold"
                    : "text-[#8892b0] hover:text-[#00e5ff]"
                }`}>
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Section: Language Switcher + Primary [HIRE_ME] Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Tombol Ganti Bahasa (Indo & English) */}
          <div className="flex items-center border-2 border-[#233554] bg-[#112240] p-0.5 font-mono text-xs">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1.5 transition-all font-bold ${
                lang === "id"
                  ? "bg-[#00e5ff] text-[#0a192f]"
                  : "text-[#8892b0] hover:text-[#ccd6f6]"
              }`}
              title="Indonesian">
              ID
            </button>
            <span className="text-[#233554] px-0.5">|</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-all font-bold ${
                lang === "en"
                  ? "bg-[#00e5ff] text-[#0a192f]"
                  : "text-[#8892b0] hover:text-[#ccd6f6]"
              }`}
              title="English">
              EN
            </button>
          </div>

          {/* Tombol Primary: [HIRE_ME] */}
          <a href="#contact" onClick={() => handleNavClick("contact")}>
            <button className="inline-flex items-center justify-center font-mono font-bold tracking-wider rounded-none uppercase border-b-4 border-r-4 border-[#0a6f88] bg-[#00e5ff] hover:bg-[#4ce1fd] hover:translate-y-[2px] hover:translate-x-[2px] hover:border-b-2 hover:border-r-2 active:border-b-0 active:border-r-0 active:translate-y-[4px] active:translate-x-[4px] text-white px-5 py-2.5 text-xs sm:text-sm gap-2 min-h-[44px] transition-all cursor-pointer">
              [HIRE_ME]
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#ccd6f6] border-2 border-[#233554] bg-[#112240] hover:border-[#00e5ff] focus:outline-none"
          aria-label="Toggle Menu">
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a192f] border-b-2 border-[#233554] px-6 py-6 flex flex-col gap-4 font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 border-b border-[#233554]/60 flex items-center justify-between text-sm transition-colors ${
                  isActive
                    ? "text-[#00e5ff] font-bold"
                    : "text-[#8892b0] hover:text-[#00e5ff]"
                }`}
              >
                <span>{link.name}</span>
              </a>
            );
          })}

          {/* Mobile Language Toggle */}
          <div className="flex items-center justify-between pt-3 mt-1">
            <span className="text-xs text-[#8892b0] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#00e5ff]" />
              LANGUAGE:
            </span>
            <div className="flex items-center border border-[#233554] bg-[#112240]">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 text-xs font-bold ${
                  lang === "id"
                    ? "bg-[#00e5ff] text-[#0a192f]"
                    : "text-[#8892b0]"
                }`}>
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-bold ${
                  lang === "en"
                    ? "bg-[#00e5ff] text-[#0a192f]"
                    : "text-[#8892b0]"
                }`}>
                EN
              </button>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="mt-3 text-center uppercase font-mono font-bold py-3 border-b-4 border-r-4 border-[#0a6f88] bg-[#00e5ff] text-white hover:bg-[#4ce1fd] text-xs tracking-wider">
            [HIRE_ME]
          </a>
        </div>
      )}
    </nav>
  );
}
