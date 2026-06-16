import React from "react";
import { User, ArrowUpRight } from "lucide-react";
import AIChatBot from "./AIChatBot";

export default function BentoAboutAndChat() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-24" id="about">
      
      {/* ABOUT TEXT CARD */}
      <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden min-h-[540px] hover:border-slate-750 transition duration-305">
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full"></div>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-503/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <User className="w-4.5 h-4.5" />
            </div>
            <h2 className="text-xl font-bold font-display tracking-tight text-slate-100 uppercase">
              About Jan Codrey
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
            <p>
              I am a professional, tech-forward <strong className="text-slate-100">AI-Enabled Virtual Assistant</strong> with a robust foundation in <strong className="text-slate-100">enterprise cloud systems and IT infrastructure</strong>. My career journey began inside enterprise service delivery circles at Accenture Philippines, where I supported complex incidents, Windows and Linux systems configuration, virtual machine virtualization stacks, and SLA-bound networks.
            </p>
            <p>
              Recognizing the paradigm shift introduced by Generative AI, I have strategically paired my deep IT infrastructure skills with modern <strong className="text-slate-200 font-medium">prompt engineering, workflow serialization, and AI automation tooling (concept modeling under n8n and Zapier)</strong>. This transition allows me to serve international business clients not merely as a traditional virtual assistant, but as a specialized high-tier digital operator.
            </p>
            <p>
              Whether diagnosing application handshake errors, auditing ServiceNow queues against SLA deadlines, or designing automated markdown knowledge bases using AI processors, my primary focus remains constant: <strong className="text-slate-100 font-semibold font-display">unclogging business operational bottlenecks and providing flawless remote infrastructure efficiency.</strong>
            </p>
          </div>
        </div>

        {/* Support metrics parameters */}
        <div className="mt-6 bg-slate-950/60 rounded-2xl border border-slate-800/60 p-5">
          <h4 className="text-xs font-bold uppercase text-slate-400 font-mono tracking-wider mb-3">
            Contract Support Parameters
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 truncate">
              <span className="w-1.5 h-1.5 bg-cyan-450 rounded-full shrink-0"></span>
              <span className="text-slate-550 mr-1 shrink-0">Email:</span>
              <a href="mailto:jancodrey.delosreyes@gmail.com" className="text-cyan-400 hover:underline truncate">jancodrey.delosreyes@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-450 rounded-full shrink-0"></span>
              <span className="text-slate-550 mr-1 shrink-0">Contact:</span>
              <span className="text-slate-150">09703031945</span>
            </div>
            <div className="flex items-center gap-2 font-sans truncate">
              <span className="w-1.5 h-1.5 bg-cyan-450 rounded-full font-mono shrink-0"></span>
              <span className="text-slate-550 mr-1 font-mono shrink-0">LinkedIn:</span>
              <a href="https://linkedin.com/in/jcodreydelosreyes" target="_blank" rel="noreferrer" className="text-cyan-450 hover:underline flex items-center gap-1.5 truncate">
                in/jcodreydelosreyes
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-450 rounded-full shrink-0"></span>
              <span className="text-slate-550 mr-1 shrink-0">Rate Strategy:</span>
              <span className="text-slate-150">Flexible Retainer</span>
            </div>
          </div>
        </div>
      </div>

      {/* CHATBOT COMPONENT EMBEDDED */}
      <div className="lg:col-span-5 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-md opacity-35 pointer-events-none"></div>
        <AIChatBot />
      </div>

    </div>
  );
}
