import React, { useState } from "react";
import { Play, Sparkles, Terminal, Cpu, Mail, FileText, CheckCircle2, RefreshCw, Layers, ArrowRight, Settings } from "lucide-react";
import { Project } from "../types";

export default function ProjectShowcase() {
  const projects: Project[] = [
    {
      id: "proj-1",
      title: "AI-Powered IT Ticket Automation System",
      description: "An AI-driven incident management pipeline that listens for ServiceNow webhooks, auto-summarizes user complaints, and categorizes tickets dynamically to slash L1 response times.",
      skills: ["Prompt engineering", "Workflow automation design", "Incident routing logic"],
      tools: ["n8n", "ChatGPT / Gemini", "ServiceNow API (Concept)"],
      status: "In Progress",
      useCase: "IT Support Queue Efficiency Improvement"
    },
    {
      id: "proj-2",
      title: "AI Email Assistant for Virtual Assistants",
      description: "A smart NLP assistant mapping incoming mail client webhooks to generative LLMs, auto-generating perfectly formatted, context-aware executive drafts based on key prompts.",
      skills: ["Natural Language Processing", "Structured prompting", "Email automation workflows"],
      tools: ["Zapier", "ChatGPT / Claude", "Gmail API"],
      status: "In Progress",
      useCase: "Executive Assistant Productivity Automation"
    },
    {
      id: "proj-3",
      title: "AI Knowledge Base Generator",
      description: "Converts solved ServiceNow incidents and troubleshooting logs directly into formatted, highly legible Knowledge Base Articles (KBAs) for internal wikis or Notion catalogs.",
      skills: ["AI summarization", "Documentation automation", "KBA structuring"],
      tools: ["ChatGPT", "Notion API", "ServiceNow ITIL Concepts"],
      status: "Prototype",
      useCase: "Enterprise IT Knowledge Management System"
    },
    {
      id: "proj-4",
      title: "AI Workflow Automation Dashboard",
      description: "A centralized operational control board syncing VA task queues and IT support infrastructure metrics with self-healing background automation scripts.",
      skills: ["AI orchestration", "Distributed workflow design", "System thinking"],
      tools: ["n8n", "Custom Webhooks", "Generative LLMs"],
      status: "In Planning",
      useCase: "Remote Assistant Operations Optimization"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<string>("proj-1");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  
  // Simulation States for Project 1 (IT ticket)
  const [ticketInput, setTicketInput] = useState<string>("VPN connection times out when I am on the Linux server or trying to authenticate from my remote router.");
  const [ticketResult, setTicketResult] = useState<any>(null);

  // Simulation States for Project 2 (Email)
  const [emailPurpose, setEmailPurpose] = useState<string>("meeting-reschedule");
  const [emailTopic, setEmailTopic] = useState<string>("Reschedule the weekly operations sync from Monday 10am to Tuesday 2pm due to server migration times.");
  const [emailResult, setEmailResult] = useState<string>("");

  // Simulation States for Project 3 (KBA)
  const [selectedIncident, setSelectedIncident] = useState<string>("inc-db-deadlock");
  const [kbaResult, setKbaResult] = useState<any>(null);

  // Simulation States for Project 4 (System Dashboard)
  const [dashActiveWebhooks, setDashActiveWebhooks] = useState<number>(14);
  const [dashboardLogs, setDashboardLogs] = useState<string[]>([
    "[13:02:18] Webhook receiver initialized on route /api/v1/tickets",
    "[13:05:40] Zapier task triggered - client contact updated",
    "[13:10:11] LLM parsed 14 incoming mail updates successfully"
  ]);

  const runProjectSimulation = () => {
    setIsRunning(true);
    setSimulationStep(1);

    if (selectedProject === "proj-1") {
      // Step through of n8n nodes
      setTimeout(() => setSimulationStep(2), 800); // Parsing nodes
      setTimeout(() => setSimulationStep(3), 1600); // LLM categorization
      setTimeout(() => {
        setSimulationStep(4);
        setTicketResult({
          assignment_group: "L2 - Cloud & Linux Support",
          priority: "P2 - High",
          category: "Infrastructure - VPN & Network",
          summary: "Remote user experiencing VPN termination issues specifically on Linux nodes and router interfaces.",
          confidence: "98.4%",
          automated_action: "SLA response clock initialized to 2 Hours. Assigned technician: CloudOps Engineer."
        });
        setIsRunning(false);
      }, 2400);

    } else if (selectedProject === "proj-2") {
      // Zapier mock flow triggered
      setTimeout(() => setSimulationStep(2), 700);
      setTimeout(() => setSimulationStep(3), 1400);
      setTimeout(() => {
        setSimulationStep(4);
        let draft = "";
        if (emailPurpose === "meeting-reschedule") {
          draft = `Dear Operations Team,\n\nI hope this email finds you well.\n\nOn behalf of Jan, I would like to request that we reschedule our upcoming weekly operations sync, originally slated for Monday at 10:00 AM, to Tuesday at 2:00 PM.\n\nThis change is required as our cloud systems are undergoing a routine server migration window at that earlier period, and we want to ensure full service continuity before we report out.\n\nPlease let us know if this slot works on your calendar.\n\nBest regards,\nAdministrative Assistant Clone (Jan Codrey Support)`;
        } else if (emailPurpose === "client-followup") {
          draft = `Dear Client,\n\nThanks for reaching out! We received your request regarding: "${emailTopic.substring(0, 40)}...".\n\nOur system has assigned this as a critical ticket. Jan and the infrastructure team are already reviewing the metrics. We will follow up with complete incident response metrics within the next 4 hours.\n\nThank you for your patience and collaborative support.\n\nSincerely,\nAI-Support System (on behalf of Jan Codrey)`;
        } else {
          draft = `Hello Team,\n\nThis is a friendly update regarding current tasks: ${emailTopic}.\n\nAll tasks have been updated in ServiceNow, SLA levels are clear, and workflows are in progress.\n\nWarm regards,\nJan's Automation Hub`;
        }
        setEmailResult(draft);
        setIsRunning(false);
      }, 2100);

    } else if (selectedProject === "proj-3") {
      setTimeout(() => setSimulationStep(2), 800);
      setTimeout(() => setSimulationStep(3), 1600);
      setTimeout(() => {
        setSimulationStep(4);
        if (selectedIncident === "inc-db-deadlock") {
          setKbaResult({
            article_id: "KB-004128",
            title: "PostgreSQL Deadlock Mitigation during Bulk Write Transactions",
            audience: "L1 Support & Cloud Engineers",
            symptom: "Services return 500 Server Errors with logs showing 'deadlock detected' during scheduled nightly db writes.",
            root_cause: "Simultaneous bulk updates occurred on the 'order_records' and 'fulfillment_queues' tables without standardized index ordering.",
            resolution_steps: [
              "Review order parameters and enforce record lock ordering (A first, then B).",
              "Execute VACUUM ANALYZE in PostgreSQL node commands to optimize indexes.",
              "Adjust the statement timeout to 5000ms internally."
            ]
          });
        } else {
          setKbaResult({
            article_id: "KB-004129",
            title: "Windows Server IIS Web Application Pool Intermittent Crash",
            audience: "L2 Application Support Specialists",
            symptom: "Web app suddenly displays 503 Service Unavailable, and IIS App Pool goes to Stopped state.",
            root_cause: "High memory leak in sub-threads exceeding configured Private Memory Limits of IIS App Pool.",
            resolution_steps: [
              "Log on to the App Server, open IIS Manager.",
              "Select Application Pools -> Select target app -> Application Pool Recycling Settings.",
              "Set recycling window to occur during off-hours or increase Private memory limit by 15%."
            ]
          });
        }
        setIsRunning(false);
      }, 2400);

    } else if (selectedProject === "proj-4") {
      setTimeout(() => {
        // Toggle simulated spike
        setDashActiveWebhooks((prev) => prev + 1);
        setDashboardLogs((prev) => [
          `[${new Date().toLocaleTimeString()}] INCOMING: Triggered API webhook root call`,
          `[${new Date().toLocaleTimeString()}] COMPLETED: Router automation verified`,
          ...prev
        ]);
        setSimulationStep(4);
        setIsRunning(false);
      }, 1200);
    }
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "In Progress": return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      case "Prototype": return "bg-brand-purple/10 text-brand-purple border-brand-purple/20";
      case "Concept": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "In Planning": return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="ai-projects-grid">
      {/* Visual Workspace Selection Section (Left Side - 5 cols) */}
      <div className="lg:col-span-5 space-y-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => {
              if (!isRunning) {
                setSelectedProject(proj.id);
                setSimulationStep(0);
                setTicketResult(null);
                setEmailResult("");
                setKbaResult(null);
              }
            }}
            className={`p-5 rounded-xl border transition-all duration-300 text-left cursor-pointer group ${
              selectedProject === proj.id
                ? "bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/20"
                : "bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/30"
            }`}
          >
            <div className="flex items-center justify-between gap-2.5 mb-2.5">
              <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono font-medium border ${getStatusColor(proj.status)}`}>
                {proj.status}
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">{proj.useCase}</span>
            </div>

            <h4 className="text-sm font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors font-display">
              {proj.title}
            </h4>
            
            <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {proj.tools.map((t, i) => (
                <span key={i} className="text-[10px] bg-slate-900/80 border border-slate-800/80 text-slate-300 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Simulation Sandbox Screen (Right Side - 7 cols) */}
      <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden h-[540px]">
        {/* Absolute ambient backgrounds */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
            <div className="flex items-center gap-2.5">
              <Terminal className="text-indigo-400 w-5 h-5 animate-pulse" />
              <div>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wide font-mono">
                  Automation Live Sandbox
                </h3>
                <p className="text-[11px] font-mono text-slate-500">
                  Interactive Node Execution & Output Test
                </p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>
          </div>

          {/* SIMULATION FOR PROJECT 1: IT Ticket */}
          {selectedProject === "proj-1" && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-indigo-400 font-mono tracking-wider uppercase font-semibold">
                  Step 1: Input Simulated IT Incident Complaint
                </label>
                <textarea
                  value={ticketInput}
                  onChange={(e) => setTicketInput(e.target.value)}
                  placeholder="Enter a mock user error complain..."
                  disabled={isRunning}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 h-16 resize-none transition"
                />
              </div>

              {/* Node diagram list */}
              <div className="grid grid-cols-4 gap-2 items-center text-center">
                <div className={`p-2 rounded-lg border text-[10px] font-mono ${simulationStep >= 1 ? "bg-indigo-950/30 border-indigo-500/60 text-indigo-300" : "bg-slate-900/40 border-slate-800/50 text-slate-500"}`}>
                  <div className="truncate font-semibold">1: Hook Trigger</div>
                  <div className="text-[8px] opacity-80">{simulationStep >= 1 ? "Webhook Recv" : "Awaiting"}</div>
                </div>
                <div className="text-slate-600 flex justify-center text-xs">→</div>
                <div className={`p-2 rounded-lg border text-[10px] font-mono ${simulationStep >= 2 ? "bg-indigo-950/30 border-indigo-500/60 text-indigo-300" : "bg-slate-900/40 border-slate-800/50 text-slate-500"}`}>
                  <div className="truncate font-semibold">2: NLP Parsing</div>
                  <div className="text-[8px] opacity-80">{simulationStep >= 2 ? "Entities Extr" : "Queueing"}</div>
                </div>
                <div className="text-slate-600 flex justify-center text-xs">→</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center text-center">
                <div className="text-slate-600 flex justify-center text-xs opacity-0">→</div>
                <div className="text-slate-600 flex justify-center text-xs">↕</div>
                <div className="text-slate-600 flex justify-center text-xs opacity-0">→</div>
                <div className="text-slate-600 flex justify-center text-xs">↕</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center text-center">
                <div className={`p-2 rounded-lg border text-[10px] font-mono col-span-2 ${simulationStep >= 4 ? "bg-emerald-950/30 border-emerald-500/60 text-emerald-300" : "bg-slate-900/40 border-slate-800/50 text-slate-500"}`}>
                  <div className="font-semibold">4: ServiceNow Router</div>
                  <div className="text-[8px] opacity-80">{simulationStep >= 4 ? "Incident Dispatched" : "Awaiting AI Flag"}</div>
                </div>
                <div className="text-slate-600 flex justify-center text-xs">←</div>
                <div className={`p-2 rounded-lg border text-[10px] font-mono ${simulationStep >= 3 ? "bg-indigo-950/30 border-indigo-500/60 text-indigo-300" : "bg-slate-900/40 border-slate-800/50 text-slate-500"}`}>
                  <div className="truncate font-semibold">3: Gemini LLM</div>
                  <div className="text-[8px] opacity-80">{simulationStep >= 3 ? "Audit & Classify" : "In Queue"}</div>
                </div>
              </div>

              {/* Computed Ticket JSON Output */}
              {ticketResult && (
                <div className="bg-slate-900/80 border border-slate-850 p-4 rounded-xl space-y-1.5 font-mono text-[10px] animate-fade-in text-left max-h-[160px] overflow-y-auto">
                  <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Output: SERVICE_INCIDENT_PAYLOAD_READY
                  </div>
                  <p><span className="text-slate-500">priority:</span> <span className="text-slate-200 font-semibold">{ticketResult.priority}</span></p>
                  <p><span className="text-slate-500">assignment_group:</span> <span className="text-indigo-300">{ticketResult.assignment_group}</span></p>
                  <p><span className="text-slate-500">ai_determined_category:</span> <span className="text-slate-300">{ticketResult.category}</span></p>
                  <p><span className="text-slate-500">automated_llm_summary:</span> <span className="text-slate-300 italic">"{ticketResult.summary}"</span></p>
                  <div className="pt-1.5 border-t border-slate-800 mt-1.5 text-slate-400 uppercase text-[9px] tracking-wider text-glow-cyan bg-slate-950/40 px-2 py-1 rounded">
                    {ticketResult.automated_action}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SIMULATION FOR PROJECT 2: AI Email Assistant */}
          {selectedProject === "proj-2" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] text-indigo-400 font-mono uppercase font-semibold">Draft Purpose</label>
                  <select
                    value={emailPurpose}
                    onChange={(e) => {
                      setEmailPurpose(e.target.value);
                      if (e.target.value === "meeting-reschedule") {
                        setEmailTopic("Reschedule the weekly operations sync from Monday 10am to Tuesday 2pm due to cloud data migration times.");
                      } else if (e.target.value === "client-followup") {
                        setEmailTopic("Inform target client we identified their SQL DB latency spike and assigned an incident team.");
                      } else {
                        setEmailTopic("Remind the remote VA team to complete their ServiceNow ticket audits before the end of the shift.");
                      }
                    }}
                    disabled={isRunning}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="meeting-reschedule">Weekly Sync Reschedule</option>
                    <option value="client-followup">Client Crash Follow-up</option>
                    <option value="va-audit-reminder">VA Audit General Tasks</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-cyan-400 font-mono uppercase font-semibold">Workflow Target</label>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-400 flex items-center justify-between font-mono">
                    <span>Zapier: Webhook → Gmail API</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10">Active</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-indigo-400 font-mono uppercase font-semibold">Core Bullet Info</label>
                <input
                  type="text"
                  value={emailTopic}
                  onChange={(e) => setEmailTopic(e.target.value)}
                  disabled={isRunning}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
                />
              </div>

              {emailResult && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-left font-sans text-xs flex flex-col h-[180px] max-h-[180px] animate-fade-in shadow-inner">
                  <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between font-mono text-[9px] text-slate-400">
                    <span>Draft stored instantly: Gmail / Drafts</span>
                    <span className="text-indigo-400 flex items-center gap-1"><Mail className="w-3 h-3" /> Ready for review</span>
                  </div>
                  <pre className="p-3 bg-slate-900 text-slate-300 overflow-y-auto whitespace-pre-wrap font-sans leading-relaxed text-[10px] select-all">
                    {emailResult}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* SIMULATION FOR PROJECT 3: KBA Generator */}
          {selectedProject === "proj-3" && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-indigo-400 font-mono uppercase font-semibold">
                  Select Incident Root Cause Source (ITIL Lifecycle)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { setSelectedIncident("inc-db-deadlock"); setKbaResult(null); }}
                    className={`p-3 rounded-xl border font-mono text-left text-xs flex flex-col justify-between h-20 transition ${
                      selectedIncident === "inc-db-deadlock" ? "bg-slate-900 border-indigo-500" : "bg-slate-900/40 border-slate-800"
                    }`}
                  >
                    <span className="font-semibold text-slate-200">Incident #INC-4091</span>
                    <span className="text-[9px] text-indigo-400">PostgreSQL DB Deadlock deadlock detected</span>
                  </button>
                  <button
                    onClick={() => { setSelectedIncident("inc-iis-crash"); setKbaResult(null); }}
                    className={`p-3 rounded-xl border font-mono text-left text-xs flex flex-col justify-between h-20 transition ${
                      selectedIncident === "inc-iis-crash" ? "bg-slate-900 border-indigo-500" : "bg-slate-900/40 border-slate-800"
                    }`}
                  >
                    <span className="font-semibold text-slate-200">Incident #INC-4122</span>
                    <span className="text-[9px] text-indigo-400">IIS Apppool crash 503 Private Limit Exceeded</span>
                  </button>
                </div>
              </div>

              {kbaResult && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-left font-mono text-[10px] leading-relaxed max-h-[220px] overflow-y-auto text-slate-350 space-y-2">
                  <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2 mb-2 text-[11px]">
                    <span className="text-indigo-400 font-bold flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" /> Structured Wiki Document: {kbaResult.article_id}
                    </span>
                    <span className="text-slate-500 text-[9px]">{kbaResult.audience}</span>
                  </div>
                  <div><span className="text-slate-500">TITLE:</span> <span className="text-slate-100 font-semibold">{kbaResult.title}</span></div>
                  <div><span className="text-slate-500 flex items-center gap-1">SYMPTOM:</span> <span className="text-slate-300 italic">"{kbaResult.symptom}"</span></div>
                  <div><span className="text-slate-500">ROOT CAUSE:</span> <span className="text-slate-300">{kbaResult.root_cause}</span></div>
                  <div>
                    <span className="text-indigo-400 font-semibold uppercase tracking-wider block mt-1">Resolution Execution Matrix:</span>
                    <ol className="list-decimal pl-4 space-y-1 mt-1 text-slate-300">
                      {kbaResult.resolution_steps.map((step: string, id: number) => (
                        <li key={id}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SIMULATION FOR PROJECT 4: System Dashboard */}
          {selectedProject === "proj-4" && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[9px] text-slate-400 font-mono">ACTIVE INTEGRATIONS</div>
                  <div className="text-lg font-bold text-slate-100 mt-1 font-display">4 Core Tasks</div>
                  <div className="text-[8px] text-emerald-400 font-mono mt-0.5">● Dynamic Status</div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[9px] text-slate-400 font-mono">WEBHOOK WORKFLOWS</div>
                  <div className="text-lg font-bold text-slate-100 mt-1 font-display">{dashActiveWebhooks} Channels</div>
                  <div className="text-[8px] text-indigo-400 font-mono mt-0.5">Active Listeners</div>
                </div>
                <div className="bg-slate-925 p-3 rounded-xl border border-slate-800">
                  <div className="text-[9px] text-slate-400 font-mono">SAVED TO CLOUD MEMORY</div>
                  <div className="text-lg font-bold text-slate-100 mt-1 font-display">12,189 Recs</div>
                  <div className="text-[8px] text-cyan-400 font-mono mt-0.5">No latency delay</div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-indigo-400 font-mono uppercase font-semibold">
                  Orchestrated logs feed (Visual Flow execution)
                </label>
                <div className="bg-slate-950 p-3.5 border border-slate-850 rounded-xl font-mono text-[9px] h-32 overflow-y-auto space-y-1 text-slate-400 text-left">
                  {dashboardLogs.map((log, idx) => (
                    <div key={idx} className="flex gap-2.5">
                      <span className="text-indigo-500/80 shrink-0">info</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Button & Loading diagnostics */}
        <div className="mt-6 border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left">
            {isRunning ? (
              <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-2 animate-pulse">
                <Cpu className="w-3.5 h-3.5 animate-spin" />
                <span>
                  {simulationStep === 1 && "Ingesting API headers..."}
                  {simulationStep === 2 && "Triggering prompt logic parameters..."}
                  {simulationStep === 3 && "Executing text summarization metrics..."}
                </span>
              </div>
            ) : (
              <div className="text-[10px] font-mono text-slate-500">
                Click trigger to run simulated automation. It will fire all workflow nodes.
              </div>
            )}
          </div>
          <button
            onClick={runProjectSimulation}
            disabled={isRunning}
            type="button"
            className="bg-indigo-600 hover:bg-indigo-500 text-slate-100 text-xs font-semibold font-mono tracking-wider px-5 py-2.5 rounded-xl transition flex items-center justify-center gap-2 select-none shrink-0 cursor-pointer disabled:opacity-50 duration-200 shadow-md"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Running Node...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Trigger Automation Workflow</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
