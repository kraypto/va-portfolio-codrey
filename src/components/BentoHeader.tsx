import React from "react";
import { Brain, Mail, Download } from "lucide-react";

interface BentoHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setShowResumeModal: (show: boolean) => void;
}

export default function BentoHeader({ activeTab, setActiveTab, setShowResumeModal }: BentoHeaderProps) {
  return (
    <header className="sticky top-0 w-full z-50 bg-[#05070a]/80 backdrop-blur-md border-b border-slate-900/50 px-4 sm:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white italic text-sm">
          JC
        </div>
        <div>
          <span className="text-sm font-bold font-display tracking-tight text-slate-100 block leading-tight uppercase">
            Jan Codrey M. Delos Reyes
          </span>
          <span className="text-[10px] text-cyan-400 font-mono tracking-wider">
            AI Automation & IT Support Builder
          </span>
        </div>
      </div>

      {/* Navigation anchors */}
      <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono">
        <a 
          href="#about" 
          onClick={() => setActiveTab("about")} 
          className={`hover:text-cyan-400 transition pb-0.5 ${activeTab === "about" ? "text-cyan-400 border-b border-cyan-400" : ""}`}
        >
          About
        </a>
        <a 
          href="#ai-skills" 
          onClick={() => setActiveTab("ai-skills")} 
          className={`hover:text-cyan-400 transition pb-0.5 ${activeTab === "ai-skills" ? "text-cyan-400 border-b border-cyan-400" : ""}`}
        >
          AI Workflows
        </a>
        <a 
          href="#experience" 
          onClick={() => setActiveTab("experience")} 
          className={`hover:text-cyan-400 transition pb-0.5 ${activeTab === "experience" ? "text-cyan-400 border-b border-cyan-400" : ""}`}
        >
          Experience
        </a>
        <a 
          href="#projects" 
          onClick={() => setActiveTab("projects")} 
          className={`hover:text-cyan-400 transition pb-0.5 ${activeTab === "projects" ? "text-cyan-400 border-b border-cyan-400" : ""}`}
        >
          Projects
        </a>
        <a 
          href="#certifications" 
          onClick={() => setActiveTab("certifications")} 
          className={`hover:text-cyan-400 transition pb-0.5 ${activeTab === "certifications" ? "text-cyan-400 border-b border-cyan-400" : ""}`}
        >
          Credentials
        </a>
      </nav>

      {/* Right CTA */}
      <div className="flex items-center gap-3">
        <a 
          href="#contact" 
          className="hidden sm:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-[11px] px-3.5 py-2 rounded-xl transition duration-200 font-bold uppercase tracking-wider font-mono"
        >
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>Contact Me</span>
        </a>
        <button
          onClick={() => setShowResumeModal(true)}
          className="bg-cyan-600 hover:bg-cyan-500 text-slate-50 text-[11px] px-3.5 py-2 rounded-xl transition font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer font-mono"
          type="button"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>
      </div>
    </header>
  );
}
