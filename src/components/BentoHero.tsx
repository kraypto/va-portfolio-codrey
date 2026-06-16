import React from "react";
import { Brain, Cloud, Workflow, Mail, ArrowUpRight, Download } from "lucide-react";

const janProfile = "/src/assets/images/jan_profile.jpg";

interface BentoHeroProps {
  setShowResumeModal: (show: boolean) => void;
}

export default function BentoHero({ setShowResumeModal }: BentoHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in" id="home">
      
      {/* LEFT COMPONENT: HERO TEXT CARD */}
      <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-750/50 flex flex-col justify-center relative overflow-hidden min-h-[380px]">
        <div className="absolute -right-10 -top-10 w-44 h-44 bg-cyan-500/10 blur-[80px] rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-44 h-44 bg-purple-500/5 blur-[80px] rounded-full"></div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <Brain className="w-3.5 h-3.5 text-cyan-400" /> AI-Enabled VA
          </span>
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <Cloud className="w-3.5 h-3.5 text-purple-400" /> Cloud Specialist
          </span>
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-blue-400 animate-pulse" /> Automation Architect
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5.5xl font-bold font-display text-slate-100 tracking-tight leading-none mb-4">
          AI Automation Builder & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
            IT Infrastructure Expert.
          </span>
        </h1>

        <p className="text-slate-350 text-sm max-w-xl leading-relaxed mb-6 font-sans">
          Combining enterprise cloud experienced delivery support at Accenture with advanced prompt engineering and node-based tool serialization to build self-healing business workflows, optimize Incident Queues, and automate remote operations.
        </p>

        <div className="flex flex-wrap gap-3 items-center">
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-2 tracking-wide uppercase font-mono"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
          <a 
            href="#projects" 
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700/60 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 tracking-wide uppercase font-mono"
          >
            <span>Explore Workflows</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>

      {/* RIGHT COMPONENT: USER RESUME/PROFILE PANEL */}
      <div className="lg:col-span-4 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col items-center justify-between text-center relative overflow-hidden min-h-[380px] hover:border-slate-750 transition duration-300">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="relative mb-4 mt-2">
          <div className="w-24 h-24 rounded-full bg-gradient-to-b from-slate-700 to-slate-850 border-2 border-cyan-500/30 overflow-hidden flex items-center justify-center p-0.5 shadow-lg">
            <img 
              src={janProfile} 
              alt="Jan Codrey M. Delos Reyes" 
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full animate-pulse" title="Available Remote"></div>
        </div>

        <div className="space-y-1.5 mb-6 w-full text-center">
          <h3 className="font-bold font-display text-lg text-slate-100">Jan Codrey M. Delos Reyes</h3>
          <p className="text-xs text-slate-400 font-mono">jancodrey.delosreyes@gmail.com</p>
          
          <div className="pt-3.5 flex flex-col items-center gap-2 border-t border-slate-800/80 w-full mt-2.5">
            <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-cyan-950/20 px-2.5 py-1 rounded-full border border-cyan-900/40">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span>Philippines (Remote)</span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-normal text-center">
              Schedules: PST, EST, UTC & European hubs
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2.5 mt-auto">
          <button 
            type="button"
            onClick={() => setShowResumeModal(true)}
            className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 uppercase tracking-wider font-mono"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
          <a 
            href="#contact"
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-750/70 rounded-xl text-xs font-bold transition-all block text-center uppercase tracking-wider font-mono"
          >
            Hire Me
          </a>
        </div>
      </div>
      
    </div>
  );
}
