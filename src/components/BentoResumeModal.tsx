import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, Cpu, FileDown, CheckCircle, Printer, 
  Mail, Phone, Linkedin, MapPin, Download, Eye, ArrowUpRight 
} from "lucide-react";

interface BentoResumeModalProps {
  showResumeModal: boolean;
  setShowResumeModal: (show: boolean) => void;
  isDownloading: boolean;
  downloadStep: string;
  resumeSent: boolean;
  setResumeSent: (sent: boolean) => void;
  handleDownloadResume: (e: React.FormEvent) => void;
}

export default function BentoResumeModal({
  showResumeModal,
  setShowResumeModal,
  isDownloading,
  downloadStep,
  resumeSent,
  setResumeSent,
  handleDownloadResume
}: BentoResumeModalProps) {
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyToClipboard = () => {
    const resumeText = `JAN CODREY M. DELOS REYES
3019 Philippines | 09703031945 | linkedin.com/in/jcodreydelosreyes | jancodrey.delosreyes@gmail.com

PROFESSIONAL SUMMARY
Associate Infrastructure Engineer with experience supporting cloud and enterprise IT environments through infrastructure administration, incident management, troubleshooting, and system support. Hands-on exposure to Windows Server, Linux environments, cloud platforms, ServiceNow, and IT service management practices. Skilled in problem-solving, technical documentation, system monitoring, and supporting business-critical IT operations.

EDUCATION
Bulacan State University (Malolos, Guinhawa Bulacan)
Bachelor of Science in Information Technology (August 2021 – July 2025)
- Magna Cum Laude, Dean's Lister

EXPERIENCE
Accenture Philippines | App/Cloud Support Engineer (Service Management) | July 2025 – Present
- Provided Level 1 and Level 2 support for cloud and infrastructure-related incidents, helping maintain service availability and operational stability.
- Managed incident lifecycles through ServiceNow, ensuring timely resolution, accurate documentation, and compliance with established SLAs.
- Investigated and troubleshot application, connectivity, and system issues, minimizing service disruptions and improving user experience.
- Collaborated with cross-functional and global support teams to identify root causes and implement effective resolutions for recurring issues.
- Conducted ticket quality audits and process reviews to improve service delivery consistency and operational compliance.
- Developed and maintained Knowledge Base Articles (KBAs) that supported knowledge sharing and reduced resolution times for common issues.
- Generated incident and operational reports that enabled stakeholders to monitor service performance and identify improvement opportunities.
- Contributed to continuous improvement initiatives through process documentation, analysis, and operational recommendations.

Accenture Philippines | Cloud Infrastructure Intern (Cloud Infrastructure Academy) | March 2025 – May 2025
- Completed intensive training focused on cloud infrastructure, enterprise IT operations, and systems administration.
- Configured and supported Windows Server and Linux environments in lab-based enterprise simulations.
- Performed system monitoring, user administration, troubleshooting, and infrastructure support activities.
- Gained exposure to Active Directory fundamentals (user management, access control concepts) and Microsoft 365 administration principles.
- Worked with virtualization technologies such as VMware/Hyper-V in simulated environments.
- Learned networking including DNS, DHCP, routing, switching, VPNs, and firewall concepts.
- Applied IT service management principles aligned with ITIL Foundation best practices.

Salesforce | Salesforce Trailblazer (Salesforce Trailhead)
- Completed Salesforce Trailhead learning modules focused on CRM fundamentals, cloud platforms, and business application workflows.

SKILLS & CERTIFICATION
Technical Skills:
- Infrastructure Support & IT Operations
- Active Directory (fundamentals: users, groups, access concepts)
- ServiceNow (Incident Management, Reporting, Ticket Auditing)
- Microsoft 365 (basic administration exposure)
- Cloud Computing (Google and AWS Fundamentals)
- Artificial Intelligence
- System Administration & Computer Programming
- Infrastructure Monitoring & Technical Troubleshooting
- Hardware & Software Support
- Cloud Infrastructure Fundamentals
- Networking Fundamentals (DNS, DHCP, routing, switching, VPN, firewalls)
- Knowledge Base & Documentation Management
- Data Analysis & Reporting (Excel dashboards, trends)

Certification:
- Google Generative AI Leader (GAIL)
- Google Cloud Digital Leader (GDL)`;

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    });
  };

  const handlePrintPdf = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow popups to open the print layout!");
      return;
    }
    
    // Inject the structured CV ready for a beautiful PDF export or printer rendering
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Jan Codrey M. Delos Reyes - Resume</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Inter', sans-serif;
              color: #1e293b;
              background-color: #ffffff;
              line-height: 1.5;
              padding: 40px;
              max-width: 900px;
              margin: 0 auto;
            }
            h1 {
              font-size: 26px;
              font-weight: 800;
              text-align: center;
              letter-spacing: -0.05em;
              text-transform: uppercase;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .contact-info {
              text-align: center;
              font-size: 12px;
              color: #475569;
              margin-bottom: 24px;
              border-bottom: 2px solid #e2e8f0;
              padding-bottom: 12px;
            }
            .contact-info span {
              margin: 0 8px;
            }
            h2 {
              font-size: 14px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #0f172a;
              border-bottom: 1px solid #cbd5e1;
              padding-bottom: 4px;
              margin-top: 24px;
              margin-bottom: 12px;
            }
            .summary {
              font-size: 13px;
              color: #334155;
              text-align: justify;
            }
            .job-header {
              display: flex;
              justify-content: space-between;
              font-size: 13px;
              font-weight: 700;
              color: #0f172a;
              margin-top: 14px;
              margin-bottom: 2px;
            }
            .job-sub {
              font-size: 12px;
              font-weight: 600;
              color: #0284c7;
              margin-bottom: 8px;
            }
            ul {
              margin: 0;
              padding-left: 18px;
              font-size: 12.5px;
              color: #334155;
            }
            li {
              margin-bottom: 5px;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px 24px;
              font-size: 12.5px;
              color: #334155;
              padding-left: 6px;
            }
            .skills-list {
              list-style-type: square;
              padding-left: 16px;
            }
            @media print {
              body {
                padding: 20px 30px;
                background-color: transparent;
              }
              button.print-btn {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div style="text-align: right; margin-bottom: 20px;" class="no-print">
            <button 
              onclick="window.print()" 
              style="background-color: #0284c7; color: white; border: none; padding: 10px 18px; font-size: 13px; font-weight: 600; font-family: sans-serif; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;"
              class="print-btn"
            >
              <span>🖨️ Click to Print or Save as PDF</span>
            </button>
          </div>
          
          <h1>JAN CODREY M. DELOS REYES</h1>
          <div class="contact-info">
            <span>📍 3019 Philippines</span> | 
            <span>📞 09703031945</span> | 
            <span>🔗 linkedin.com/in/jcodreydelosreyes</span> | 
            <span>📧 jancodrey.delosreyes@gmail.com</span>
          </div>

          <h2>Professional Summary</h2>
          <p class="summary">
            Associate Infrastructure Engineer with experience supporting cloud and enterprise IT environments through infrastructure administration, incident management, troubleshooting, and system support. Hands-on exposure to Windows Server, Linux environments, cloud platforms, ServiceNow, and IT service management practices. Skilled in problem-solving, technical documentation, system monitoring, and supporting business-critical IT operations.
          </p>

          <h2>Education</h2>
          <div class="job-header">
            <span>Bulacan State University</span>
            <span>Malolos, Guinhawa Bulacan</span>
          </div>
          <div class="job-sub">Bachelor of Science in Information Technology <span style="font-weight: normal; color: #475569;">| August 2021 – July 2025</span></div>
          <ul style="list-style-type: disc;">
            <li><strong>Magna Cum Laude</strong>, Dean's Lister</li>
          </ul>

          <h2>Experience</h2>
          
          <div class="job-header">
            <span>Accenture Philippines</span>
            <span>July 2025 – Present</span>
          </div>
          <div class="job-sub">App/Cloud Support Engineer (Service Management)</div>
          <ul>
            <li>Provided Level 1 and Level 2 support for cloud and infrastructure-related incidents, helping maintain service availability and operational stability.</li>
            <li>Managed incident lifecycles through ServiceNow, ensuring timely resolution, accurate documentation, and compliance with established SLAs.</li>
            <li>Investigated and troubleshot application, connectivity, and system issues, minimizing service disruptions and improving user experience.</li>
            <li>Collaborated with cross-functional and global support teams to identify root causes and implement effective resolutions for recurring issues.</li>
            <li>Conducted ticket quality audits and process reviews to improve service delivery consistency and operational compliance.</li>
            <li>Developed and maintained Knowledge Base Articles (KBAs) that supported knowledge sharing and reduced resolution times for common issues.</li>
            <li>Generated incident and operational reports that enabled stakeholders to monitor service performance and identify improvement opportunities.</li>
            <li>Contributed to continuous improvement initiatives through process documentation, analysis, and operational recommendations.</li>
          </ul>

          <div class="job-header">
            <span>Accenture Philippines</span>
            <span>March 2025 – May 2025</span>
          </div>
          <div class="job-sub">Cloud Infrastructure Intern (Cloud Infrastructure Academy)</div>
          <ul>
            <li>Completed intensive training focused on cloud infrastructure, enterprise IT operations, and systems administration.</li>
            <li>Configured and supported Windows Server and Linux environments in lab-based enterprise simulations.</li>
            <li>Performed system monitoring, user administration, troubleshooting, and infrastructure support activities.</li>
            <li>Gained exposure to Active Directory fundamentals (user management, access control concepts) and Microsoft 365 administration principles.</li>
            <li>Worked with virtualization technologies such as VMware/Hyper-V in simulated environments.</li>
            <li>Learned networking including DNS, DHCP, routing, switching, VPNs, and firewall concepts.</li>
            <li>Applied IT service management principles aligned with ITIL Foundation best practices.</li>
          </ul>

          <div class="job-header">
            <span>Salesforce</span>
            <span>Salesforce Trailhead</span>
          </div>
          <div class="job-sub">Salesforce Trailblazer</div>
          <ul>
            <li>Completed Salesforce Trailhead learning modules focused on CRM fundamentals, cloud platforms, and business application workflows.</li>
          </ul>

          <h2>Skills & Certification</h2>
          
          <div class="job-sub" style="margin-top: 10px; margin-bottom: 6px;">Technical Skills</div>
          <ul class="skills-list" style="columns: 2; margin-bottom: 16px;">
            <li>Infrastructure Support & IT Operations</li>
            <li>Active Directory (fundamentals)</li>
            <li>ServiceNow Queue Triage & Auditing</li>
            <li>Microsoft 365 Administration</li>
            <li>Cloud Computing (Google & AWS)</li>
            <li>Artificial Intelligence</li>
            <li>System Administration & Code</li>
            <li>Infrastructure Monitoring & Fault Tracing</li>
            <li>Hardware & Software Support</li>
            <li>Cloud Infrastructure Foundations</li>
            <li>Networking (DNS, DHCP, Routing, VPN)</li>
            <li>Knowledge Base (KBA) Management</li>
            <li>Data Analysis & Reporting</li>
          </ul>

          <div class="job-sub" style="margin-bottom: 6px;">Certifications</div>
          <ul>
            <li>Google Generative AI Leader (GAIL)</li>
            <li>Google Cloud Digital Leader (GDL)</li>
          </ul>

          <script>
            // Auto open the printing UI after loading for a fluid user experience
            setTimeout(() => {
              window.print();
            }, 500);
          </script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  return (
    <AnimatePresence>
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
          >
            {/* MODAL HEADER */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur-sm z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 font-display uppercase tracking-wider">
                    Resume Document Hub
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Accenture Support Engineer • Google Certified Generative AI Leader
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrintPdf}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                  title="Print this layout or save directly to PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Save as PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setShowResumeModal(false); setResumeSent(false); }}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors font-mono font-bold leading-none shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* SCROLLABLE HIGH FIDELITY PAPER PREVIEW BLOCK */}
            <div className="p-6 overflow-y-auto bg-slate-950 flex-1 flex justify-center items-start scrollbar-thin">
              <div className="bg-white text-zinc-800 p-8 sm:p-12 max-w-[800px] w-full rounded-2xl shadow-xl min-h-[1000px] text-left relative selection:bg-cyan-100 selection:text-slate-900 border border-zinc-250">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-t-2xl"></div>

                {/* Professional Name Plate Header */}
                <header className="text-center pb-5 border-b-2 border-zinc-200">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight font-display mb-2">
                    JAN CODREY M. DELOS REYES
                  </h1>
                  
                  <div className="flex flex-wrap justify-center items-center gap-y-1 gap-x-3 text-[11px] sm:text-xs text-zinc-500 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      3019 Philippines
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      09703031945
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      jancodrey.delosreyes@gmail.com
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="flex items-center gap-1">
                      <Linkedin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      linkedin.com/in/jcodreydelosreyes
                    </span>
                  </div>
                </header>

                {/* CV Body Content */}
                <div className="space-y-6 pt-5">
                  
                  {/* Summary */}
                  <section>
                    <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-200 pb-1 mb-2.5">
                      Professional Summary
                    </h2>
                    <p className="text-xs sm:text-[12.5px] leading-relaxed text-zinc-600 font-sans text-justify">
                      Associate Infrastructure Engineer with experience supporting cloud and enterprise IT environments through infrastructure administration, incident management, troubleshooting, and system support. Hands-on exposure to Windows Server, Linux environments, cloud platforms, ServiceNow, and IT service management practices. Skilled in problem-solving, technical documentation, system monitoring, and supporting business-critical IT operations.
                    </p>
                  </section>

                  {/* Education */}
                  <section>
                    <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-200 pb-1 mb-2.5">
                      Education
                    </h2>
                    <div className="space-y-2 font-sans text-xs sm:text-[12.5px]">
                      <div className="flex justify-between font-bold text-zinc-800">
                        <span>Bulacan State University</span>
                        <span className="font-normal text-zinc-500">Malolos, Guinhawa Bulacan</span>
                      </div>
                      <div className="flex justify-between text-zinc-600 italic">
                        <span>Bachelor of Science in Information Technology</span>
                        <span className="not-italic text-zinc-500">August 2021 – July 2025</span>
                      </div>
                      <ul className="list-disc pl-4 text-zinc-500">
                        <li><strong className="text-zinc-800">Magna Cum Laude</strong>, Dean’s Lister</li>
                      </ul>
                    </div>
                  </section>

                  {/* Experience */}
                  <section>
                    <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-200 pb-1 mb-2.5">
                      Experience
                    </h2>
                    <div className="space-y-5 font-sans text-xs sm:text-[12.5px]">
                      
                      {/* Accenture Support */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between font-bold text-zinc-800">
                          <span>Accenture Philippines</span>
                          <span className="font-normal text-zinc-500">July 2025 – Present</span>
                        </div>
                        <div className="text-cyan-600 font-semibold text-[11.5px] uppercase tracking-wider">
                          App/Cloud Support Engineer (Service Management)
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-zinc-650 leading-relaxed">
                          <li>Provided Level 1 and Level 2 support for cloud and infrastructure-related incidents, helping maintain service availability and operational stability.</li>
                          <li>Managed incident lifecycles through ServiceNow, ensuring timely resolution, accurate documentation, and compliance with established SLAs.</li>
                          <li>Investigated and troubleshot application, connectivity, and system issues, minimizing service disruptions and improving user experience.</li>
                          <li>Collaborated with cross-functional and global support teams to identify root causes and implement effective resolutions for recurring issues.</li>
                          <li>Conducted ticket quality audits and process reviews to improve service delivery consistency and operational compliance.</li>
                          <li>Developed and maintained Knowledge Base Articles (KBAs) that supported knowledge sharing and reduced resolution times for common issues.</li>
                          <li>Generated incident and operational reports that enabled stakeholders to monitor service performance and identify improvement opportunities.</li>
                          <li>Contributed to continuous improvement initiatives through process documentation, analysis, and operational recommendations.</li>
                        </ul>
                      </div>

                      {/* Accenture Academy */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between font-bold text-zinc-800">
                          <span>Accenture Philippines</span>
                          <span className="font-normal text-zinc-500">March 2025 – May 2025</span>
                        </div>
                        <div className="text-zinc-600 font-semibold text-[11.5px] uppercase tracking-wider">
                          Cloud Infrastructure Intern (Cloud Infrastructure Academy)
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-zinc-650 leading-relaxed">
                          <li>Completed intensive training focused on cloud infrastructure, enterprise IT operations, and systems administration.</li>
                          <li>Configured and supported Windows Server and Linux environments in lab-based enterprise simulations.</li>
                          <li>Performed system monitoring, user administration, troubleshooting, and infrastructure support activities.</li>
                          <li>Gained exposure to Active Directory fundamentals (user management, access control concepts) and Microsoft 365 administration principles.</li>
                          <li>Worked with virtualization technologies such as VMware/Hyper-V in simulated environments.</li>
                          <li>Learned networking including DNS, DHCP, routing, switching, VPNs, and firewall concepts.</li>
                          <li>Applied IT service management principles aligned with ITIL Foundation best practices.</li>
                        </ul>
                      </div>

                      {/* Salesforce */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between font-bold text-zinc-800">
                          <span>Salesforce</span>
                          <span className="font-normal text-zinc-500">Salesforce Trailhead</span>
                        </div>
                        <div className="text-zinc-600 font-semibold text-[11.5px] uppercase tracking-wider">
                          Salesforce Trailblazer
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-zinc-650 leading-relaxed">
                          <li>Completed Salesforce Trailhead learning modules focused on CRM fundamentals, cloud platforms, and business application workflows.</li>
                        </ul>
                      </div>

                    </div>
                  </section>

                  {/* Skills Section */}
                  <section>
                    <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-200 pb-1 mb-2.5">
                      Skills & Certification
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs sm:text-[12px]">
                      
                      {/* Left: Skills */}
                      <div>
                        <h4 className="font-bold text-zinc-800 mb-1.5">Technical Skills</h4>
                        <ul className="list-disc pl-4 space-y-1 text-zinc-600">
                          <li>Infrastructure Support & IT Operations</li>
                          <li>Active Directory Access Control</li>
                          <li>ServiceNow Incident Queue Audits</li>
                          <li>Microsoft 365 Administration</li>
                          <li>Cloud Infrastructure (AWS, Google Cloud)</li>
                          <li>Artificial Intelligence Engineering</li>
                          <li>System Administration & Scripting</li>
                          <li>Network (DNS, DHCP, Routing, VPN)</li>
                          <li>KBA & Documentation Management</li>
                          <li>Data Analysis & Reports</li>
                        </ul>
                      </div>

                      {/* Right: Certifications */}
                      <div>
                        <h4 className="font-bold text-zinc-800 mb-1.5 font-sans">Certifications</h4>
                        <ul className="list-disc pl-4 space-y-2 text-zinc-600">
                          <li>
                            <strong className="text-zinc-800 font-bold">Reinvention with Agentic AI</strong> <span className="text-[10.5px] text-zinc-500">— Accenture</span>
                            <p className="text-[10.5px] text-zinc-500 mt-0.5">Professional credential validating generative AI agent loops, dynamic tool bindings, reasoning workflows, and enterprise optimization.</p>
                          </li>
                          <li>
                            <strong className="text-zinc-800 font-bold">Google Generative AI Leader</strong>
                            <p className="text-[10.5px] text-zinc-500 mt-0.5">Foundational credential for smart workflow prompt orchestration & models governance.</p>
                          </li>
                          <li>
                            <strong className="text-zinc-800 font-bold">Google Cloud Digital Leader</strong>
                            <p className="text-[10.5px] text-zinc-500 mt-0.5">Core assessment covering identity governance, subnetworks, cloud storage, container deployment, and architectures.</p>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </section>

                </div>

                <div className="mt-10 pt-5 border-t border-zinc-200 text-center text-[10px] text-zinc-400 font-mono">
                  Jan Codrey M. Delos Reyes • Verified Portfolios Document Core
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4.5 border-t border-slate-800 bg-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <span className="font-mono text-[10.5px]">
                💡 Tip: Click the <strong className="text-cyan-400">Save as PDF</strong> button to save this beautiful layout directly to your computer.
              </span>
              <button
                type="button"
                onClick={() => { setShowResumeModal(false); setResumeSent(false); }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
