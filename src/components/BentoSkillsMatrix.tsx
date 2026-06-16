import React from "react";
import { Brain, Cpu, Workflow, Cloud, Check } from "lucide-react";

export default function BentoSkillsMatrix() {
  return (
    <div className="space-y-6 scroll-mt-24" id="ai-skills">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Brain className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-display uppercase tracking-tight text-slate-100">
              Technical Expertise Matrix
            </h2>
            <p className="text-xs text-slate-400 font-mono">Proven methodologies & tools applied in support networks</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Box 1 */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-755 transition duration-300 relative overflow-hidden min-h-[300px]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">AI & Automation</h4>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Prompt Engineering", "LLM APIs", "Google AI Studio", "Claude / GPT", "Text Summarization", "Dynamic Contexts"].map((badge, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-850 rounded text-[10px] text-cyan-400 font-mono">{badge}</span>
              ))}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400 pl-1 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>Structured Prompt engineering for executive workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>Synthesizing structural reporting summaries.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>Converting server ticketing records into markdown KBAs.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-755 transition duration-300 relative overflow-hidden min-h-[300px]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Workflow className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">Workflows & Pipelines</h4>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["n8n Integration", "Zapier Webhooks", "Trigger Logic", "Email Client Flows", "Queue Escalate", "Google Sheets API"].map((badge, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-850 rounded text-[10px] text-purple-400 font-mono">{badge}</span>
              ))}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400 pl-1 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                <span>Handling webhook events and mapping to APIs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                <span>Designing conditional routing paths of emails.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                <span>Syncing cloud metrics automatically with client spreadsheets.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-755 transition duration-300 relative overflow-hidden min-h-[300px]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Cloud className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">App & Cloud Support</h4>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["ServiceNow queue", "Windows Server", "Linux Shell", "VMware Hyper-V", "DNS / DHCP", "Active Directory"].map((badge, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-850 rounded text-[10px] text-blue-400 font-mono">{badge}</span>
              ))}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400 pl-1 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>SLA incident lifecycle management under ServiceNow.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>Configuring virtualization systems & firewall port rules.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>L1 / L2 server diagnostic troubleshooting parameters.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
