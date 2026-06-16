import React from "react";
import { Briefcase } from "lucide-react";

export default function BentoExperience() {
  return (
    <div className="scroll-mt-24" id="experience">
      
      {/* TIMELINE */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-750 transition duration-300 w-full">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Briefcase className="w-4.5 h-4.5" />
            </div>
            <h2 className="text-xl font-bold font-display tracking-tight text-slate-100 uppercase">
              Work History
            </h2>
          </div>

          <div className="space-y-8 relative border-l border-slate-850 pl-5 ml-2.5">
            
            {/* Accenture app cloud Support */}
            <div className="relative space-y-2">
              <div className="absolute left-[-26px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <h3 className="text-sm font-bold text-slate-100 font-display">
                  App/Cloud Support Engineer
                </h3>
                <span className="text-[9px] font-mono bg-slate-950 text-cyan-400 px-2 py-0.5 rounded border border-slate-850">
                  July 2025 – Present
                </span>
              </div>
              <div className="text-[11px] font-bold text-cyan-400 font-mono">
                Accenture Philippines | Service Management
              </div>
              <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-400 leading-relaxed font-sans">
                <li>Provided Level 1 & Level 2 cloud platform and infrastructure operational support to clients.</li>
                <li>Managed entire incident lifecycle using <strong className="text-slate-350">ServiceNow</strong>, maintaining strict triage SLA compliance.</li>
                <li>Troubleshot application failures, connection gateway hangs, and server OS configs.</li>
                <li>Audited incident queues & calculated performance metrics for continuous process improvements.</li>
                <li>Created formatted Knowledge Base Articles (KBAs) for cross-department troubleshooting.</li>
              </ul>
            </div>

            {/* Internship */}
            <div className="relative space-y-2 opacity-80 hover:opacity-100 transition duration-200">
              <div className="absolute left-[-26px] top-1.5 w-3 h-3 rounded-full bg-slate-700"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <h3 className="text-sm font-bold text-slate-300 font-display">
                  Cloud Infrastructure Intern
                </h3>
                <span className="text-[9px] font-mono bg-slate-950 text-slate-500 px-2 py-0.5 rounded border border-slate-850">
                  Mar – May 2025
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-400 font-mono">
                Accenture Philippines
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic font-sans pl-4">
                Trained under enterprise VM support engineers in active Windows Server & Linux system configurations. Monitored alert pools, practiced active directory user permissions, and configured virtualization layers.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
