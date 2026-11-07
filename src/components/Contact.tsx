"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
  ExternalLink,
} from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  DiscordIcon,
} from "@/components/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const emailAddress = "akhmaddaqiqulm@gmail.com";
  const discordUsername = "mulyadisapusapu";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const contactChannels = [
    {
      code: "COMM_01",
      name: "GitHub",
      handle: "@akhmaddakhir",
      description: t(
        "Jelajahi kode sumber, repositori open-source, dan aktivitas pengembangan saya.",
        "Explore my source code, open-source repositories, and developer activity."
      ),
      badge: "CODEBASE",
      icon: GithubIcon,
      href: "https://github.com/akhmaddakhir",
      isExternal: true,
      buttonText: "Visit GitHub",
    },
    {
      code: "COMM_02",
      name: "LinkedIn",
      handle: "Akhmad Daqiqul",
      description: t(
        "Terhubung untuk jaringan profesional, kesempatan magang, atau peluang kerja sama.",
        "Connect for professional networking, internships, or engineering opportunities."
      ),
      badge: "PROFESSIONAL",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/akhmad-daqiqul-64304444a/",
      isExternal: true,
      buttonText: "Connect LinkedIn",
    },
    {
      code: "COMM_03",
      name: "Discord",
      handle: discordUsername,
      description: t(
        "Obrolan komunitas langsung, ruang suara, atau diskusi santai seputar teknologi.",
        "Direct community chat, voice rooms, or casual real-time tech discussions."
      ),
      badge: "COMMUNITY",
      icon: DiscordIcon,
      isDiscordCopy: true,
    },
    {
      code: "COMM_04",
      name: "Instagram",
      handle: "@dakirkurkirkur",
      description: t(
        "Pembaruan personal dan kreatif, keseharian di balik layar, serta inspirasi desain.",
        "Personal and creative updates, life behind the screen, and design inspirations."
      ),
      badge: "SOCIAL",
      icon: InstagramIcon,
      href: "https://www.instagram.com/dakirkurkirkur/",
      isExternal: true,
      buttonText: "Follow Instagram",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0a192f] border-t-2 border-[#233554] relative scroll-mt-20">
      <div className="app-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 pb-4 border-b-2 border-[#233554] gap-4">
          <div>
            <div className="font-mono text-xs sm:text-sm text-[#00e5ff] mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#00e5ff]" />
              <span>{t("[HUBUNGI_SAYA]", "[INITIATE_CONTACT]")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#ccd6f6] tracking-tight">
              {t("Mari Terhubung & Berkolaborasi", "Get in Touch & Connect")}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e5ff] bg-[#00add0]/10 px-3 py-1.5 border border-[#00add0]/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {t("SALURAN: LANGSUNG", "CHANNELS: DIRECT_ONLY")}
          </div>
        </div>

        {/* Featured Comms Banner / Email Priority Card */}
        <div className="bg-[#112240] border-2 border-[#233554] shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] p-6 sm:p-10 mb-8 relative group hover:border-[#00e5ff] transition-all duration-300">
          {/* Tech Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00e5ff] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00e5ff] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-[#00add0]/10 border-2 border-[#00add0] flex items-center justify-center text-[#00e5ff] shrink-0 group-hover:bg-[#00e5ff] group-hover:text-[#0a192f] transition-all">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1.5 font-mono text-xs">
                  <span className="text-[#00e5ff] font-bold">
                    {t("[EMAIL_UTAMA]", "[PRIMARY_INBOX]")}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#ccd6f6] mb-1">
                  {emailAddress}
                </h3>
                <p className="text-[#8892b0] text-xs sm:text-sm max-w-xl font-sans">
                  {t(
                    "Cara paling andal untuk terhubung untuk kolaborasi, diskusi proyek, atau pertanyaan. Silakan salin atau kirim email secara langsung.",
                    "The most reliable way to reach out for collaborations, project discussions, or questions. Feel free to copy or send an email directly."
                  )}
                </p>
              </div>
            </div>

            {/* Email Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center font-mono font-bold text-xs uppercase px-5 py-3 border-2 border-[#233554] bg-[#0a192f] text-[#ccd6f6] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all gap-2 cursor-pointer w-full sm:w-auto">
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#00add0]" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center font-mono font-bold text-xs uppercase px-6 py-3 border-b-4 border-r-4 border-[#0a6f88] bg-[#00e5ff] hover:bg-[#4ce1fd] hover:translate-y-[2px] hover:translate-x-[2px] hover:border-b-2 hover:border-r-2 active:border-b-0 active:border-r-0 text-white transition-all gap-2 cursor-pointer w-full sm:w-auto">
                <span>SEND EMAIL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Modular Social & Developer Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.code}
                className="bg-[#112240] border-2 border-[#233554] p-6 relative group hover:border-[#00add0] transition-all duration-300 flex flex-col justify-between shadow-[6px_6px_0_0_rgba(0,0,0,0.5)]">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#233554] font-mono text-[11px]">
                    <span className="text-[#00e5ff] font-bold">
                      [{channel.code}]
                    </span>
                    <span className="text-[#8892b0] bg-[#0a192f] px-2 py-0.5 border border-[#233554]">
                      {channel.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#0a192f] border border-[#233554] flex items-center justify-center text-[#00e5ff] group-hover:bg-[#00add0]/20 group-hover:border-[#00e5ff] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-[#ccd6f6] text-base group-hover:text-[#00e5ff] transition-colors">
                        {channel.name}
                      </h4>
                      <span className="font-mono text-xs text-[#00add0]">
                        {channel.handle}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#8892b0] text-xs leading-relaxed mb-6 font-sans">
                    {channel.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-[#233554]">
                  {channel.isDiscordCopy ? (
                    <button
                      onClick={handleCopyDiscord}
                      className="w-full inline-flex items-center justify-center font-mono font-bold text-xs uppercase px-4 py-2.5 border border-[#233554] bg-[#0a192f] text-[#ccd6f6] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all gap-1.5 cursor-pointer">
                      {copiedDiscord ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">{t("ID TERSALIN!", "COPIED ID!")}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#00add0]" />
                          <span>{t("Salin ID Discord", "Copy Discord ID")}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center font-mono font-bold text-xs uppercase px-4 py-2.5 border border-[#233554] bg-[#0a192f] text-[#ccd6f6] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all gap-1.5">
                      <span>{channel.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cyber Command Line Callout */}
        <div className="mt-8 bg-[#071322] border-2 border-[#233554] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2.5 text-[#8892b0]">
            <Terminal className="w-4 h-4 text-[#00e5ff]" />
            <span>
              STATUS: <span className="text-[#ccd6f6]">{t("SIAP_KOMUNIKASI", "TRANSMISSION_READY")}</span>
            </span>
          </div>
          <div className="text-[#00add0] text-[11px]">
            {t("RESPON: <24 JAM", "LATENCY: <24H RESPONSE TIME")}
          </div>
        </div>
      </div>
    </section>
  );
}
