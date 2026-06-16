import React from "react";
import { Brain, Mail, Linkedin } from "lucide-react";

export default function BentoFooter() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/60 py-10 px-4 sm:px-8 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Brain className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
            Jan Codrey Portfolio Space
          </span>
        </div>

        <div className="text-[10px] text-slate-650 font-mono">
          Designed for highest SLA performance. © 2026 Jan Codrey M. Delos Reyes. All systems online.
        </div>

        <div className="flex items-center gap-4 text-slate-500 list-none">
          <a href="mailto:jancodrey.delosreyes@gmail.com" className="hover:text-cyan-400 transition" title="Email Jan">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/jcodreydelosreyes" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition" title="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
