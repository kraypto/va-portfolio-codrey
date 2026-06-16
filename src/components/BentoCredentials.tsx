import React from "react";
import { Award } from "lucide-react";

export default function BentoCredentials() {
  return (
    <div className="space-y-6 scroll-mt-24" id="certifications">
      <div className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
          <Award className="w-4.5 h-4.5" />
        </div>
        <div>
          <h2 className="text-lg font-bold font-display tracking-tight text-slate-100 uppercase">
            Certifications & Credentials
          </h2>
          <p className="text-xs text-slate-400 font-mono">Verified badges validating technical cloud & AI capability</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
        
        {/* Cert 1 */}
        <div className="bg-gradient-to-tr from-cyan-950/25 to-purple-950/25 rounded-3xl border border-cyan-500/20 p-6 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
          <div className="absolute -right-3 -top-3 w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 rotate-12 font-bold text-lg">
            ⭐
          </div>
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] text-cyan-400 font-bold uppercase tracking-wider font-mono inline-block">
              Primary Code
            </span>
            <h3 className="text-sm font-bold text-slate-100 font-display">
              Google Generative AI Leader
            </h3>
            <p className="text-xs text-slate-455 leading-relaxed">
              Enterprise credentials awarded for mastery in Gemini models configuration, structured prompt designs, and AI workflow automation integrations.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-cyan-400 flex justify-between items-center mt-4">
            <span>Google Cloud</span>
            <span className="font-bold">✓ Verified Code</span>
          </div>
        </div>

        {/* Cert 4 - New Accenture Agentic AI Credential */}
        <div className="bg-gradient-to-tr from-slate-900 to-indigo-950/15 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/30 transition duration-250 min-h-[220px]">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[9px] text-indigo-400 font-bold uppercase tracking-wider font-mono inline-block">
              Agentic Workflows
            </span>
            <h3 className="text-sm font-bold text-slate-100 font-display">
              Reinvention with Agentic AI
            </h3>
            <p className="text-xs text-slate-455 leading-relaxed">
              Professional credential evaluating model reasoning pipelines, planning patterns, dynamic tool usage, and collaborative multi-agent workflow systems.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex justify-between items-center mt-4 text-indigo-400">
            <span>Accenture</span>
            <span>Active Credentials</span>
          </div>
        </div>

        {/* Cert 2 */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-755 transition duration-200 min-h-[220px]">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 bg-slate-950 border border-slate-850 rounded text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono inline-block">
              GCP Architecture
            </span>
            <h3 className="text-sm font-bold text-slate-100 font-display">
              Google Cloud Digital Leader
            </h3>
            <p className="text-xs text-slate-455 leading-relaxed">
              Fundamental validator of enterprise cloud nodes: explaining virtualization networks, GCP storage, serverless structures, and security layers.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex justify-between items-center mt-4">
            <span>Google Cloud</span>
            <span>Active Credentials</span>
          </div>
        </div>

        {/* Cert 3 */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-755 transition duration-200 min-h-[220px]">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 bg-slate-950 border border-slate-850 rounded text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono inline-block">
              CRM Management
            </span>
            <h3 className="text-sm font-bold text-slate-100 font-display">
              Salesforce Trailhead Essentials
            </h3>
            <p className="text-xs text-slate-455 leading-relaxed">
              Detailed training covering customer lifecycle records management, sales pipelines automation, and client record CRM updates.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex justify-between items-center mt-4">
            <span>Salesforce</span>
            <span>Completed modules</span>
          </div>
        </div>

      </div>
    </div>
  );
}
