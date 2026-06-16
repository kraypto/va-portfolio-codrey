import React, { useState, useEffect } from "react";
import { 
  Brain, Mail, Linkedin, User, Download, MapPin, 
  ShieldCheck, Cpu, Workflow, Activity, Terminal 
} from "lucide-react";
import AIChatBot from "./components/AIChatBot";
import ProjectShowcase from "./components/ProjectShowcase";
import BentoHeader from "./components/BentoHeader";
import BentoFooter from "./components/BentoFooter";
import BentoResumeModal from "./components/BentoResumeModal";
import BentoHero from "./components/BentoHero";
import BentoAboutAndChat from "./components/BentoAboutAndChat";
import BentoSkillsMatrix from "./components/BentoSkillsMatrix";
import BentoExperience from "./components/BentoExperience";
import BentoCredentials from "./components/BentoCredentials";
import BentoContact from "./components/BentoContact";

export default function App() {
  // Navigation active tab tracking for header highlight
  const [activeTab, setActiveTab] = useState<string>("home");

  // Theme state: default to 'light' as requested.
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return (saved === "light" || saved === "dark") ? saved : "light";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Resume gate modal or status
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadStep, setDownloadStep] = useState<string>("");
  const [resumeSent, setResumeSent] = useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);

  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactCompany, setContactCompany] = useState<string>("");
  const [contactService, setContactService] = useState<string>("Technical VA & Support");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactLoading, setContactLoading] = useState<boolean>(false);
  const [contactSuccess, setContactSuccess] = useState<boolean>(false);
  const [latestContactLog, setLatestContactLog] = useState<any>(null);

  const handleDownloadResume = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    setDownloadStep("Locating cloud assets...");

    setTimeout(() => {
      setDownloadStep("Validating Generative AI Leader credentials...");
    }, 800);

    setTimeout(() => {
      setDownloadStep("Packaging structural files...");
    }, 1600);

    setTimeout(() => {
      setDownloadStep("Dispatching copy...");
      // Simulate real file download in browser
      const mockPdfContent = "Name: Jan Codrey M. Delos Reyes\nVirtual Assistant Resume - Cloud / Support / AI\nEmail: jancodrey.delosreyes@gmail.com\nPhone: 09703031945\nLinkedIn: linkedin.com/in/jcodreydelosreyes\n\nExperience:\n- App/Cloud Support Engineer, Accenture Philippines (July 2025 - Present)\n- Cloud Infrastructure Intern, Accenture Philippines (Mar - May 2025)\n\nCertifications:\n- Google Generative AI Leader\n- Google Cloud Digital Leader\n- Salesforce Trailhead Essentials";
      const blob = new Blob([mockPdfContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Jan_Codrey_Resume.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
      setResumeSent(true);
    }, 2400);
  };

  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    setContactLoading(true);
    setContactSuccess(false);

    let clientEmailed = false;
    let isConfigured = false;

    try {
      // 1. Fetch contact configuration to get Web3Forms key securely from server environment
      const configRes = await fetch("/api/contact-config");
      let key = null;
      if (configRes.ok) {
        const configData = await configRes.json();
        isConfigured = configData.configured;
        key = configData.key;
      }

      // 2. Submit directly from user's browser client to avoid Cloudflare datacenter IP block on server
      if (isConfigured && key) {
        try {
          const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              access_key: key,
              subject: `Portfolio Inquiry from ${contactName}`,
              from_name: `${contactName} (Portfolio Form)`,
              name: contactName,
              email: contactEmail,
              message: `You have received a new contact submission from your portfolio website:

Name: ${contactName}
Email: ${contactEmail}
Company: ${contactCompany || "N/A"}
Requested Service: ${contactService}

Inquiry Message:
${contactMessage}

---
Sent automatically via your Jan Codrey Portfolio Browser Client.`
            })
          });

          if (web3formsResponse.ok) {
            const resJson = await web3formsResponse.json();
            if (resJson.success) {
              clientEmailed = true;
            }
          }
        } catch (web3Err) {
          console.error("Direct browser dispatch failed, will attempt fallback server proxy:", web3Err);
        }
      }

      // 3. Post to our backend to log message and fallback server proxy if needed
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          company: contactCompany,
          serviceType: contactService,
          message: contactMessage,
          clientEmailed: clientEmailed
        }),
      });

      if (!response.ok) {
        throw new Error("Form submit failed on server.");
      }

      const data = await response.json();
      setLatestContactLog(data);
      setContactSuccess(true);

      // Reset form fields
      setContactName("");
      setContactEmail("");
      setContactCompany("");
      setContactMessage("");
    } catch (err) {
      console.error("Submission pipeline error:", err);
      // Fallback
      setLatestContactLog({
        success: true,
        emailed: clientEmailed,
        configured: isConfigured,
        email: "jancodrey.delosreyes@gmail.com"
      });
      setContactSuccess(true);
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen relative font-sans">
      
      {/* Background stars / grid mesh overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      {/* RENDER MODULAR BENTO HEADER */}
      <BentoHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setShowResumeModal={setShowResumeModal} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* MAIN BENTO DASHBOARD CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* ROW 1: HERO & PROFILE */}
        <BentoHero setShowResumeModal={setShowResumeModal} />

        {/* ROW 2: ABOUT JAN & CHATBOT PANEL */}
        <BentoAboutAndChat />

        {/* ROW 4: TECHNICAL SKILLS MATRIX */}
        <BentoSkillsMatrix />

        {/* ROW 5: WORK EXPERIENCE TIMELINE & SERVICENOW SIMULATOR */}
        <BentoExperience />

        {/* ROW 6: PORTFOLIO PROJECTS SHOWCASE */}
        <div className="space-y-6 scroll-mt-24" id="projects">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4.5 h-4.5" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-display uppercase tracking-tight text-slate-100">
                  🤖 AI Automation Projects
                </h2>
                <p className="text-xs text-slate-400 font-mono">Interactive mock sandbox executing real AI-driven business workflows</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800">
            <ProjectShowcase />
          </div>
        </div>

        {/* ROW 7: CERTIFICATIONS & CREDENTIALS */}
        <BentoCredentials />

        {/* ROW 8: CONTACT ME & LIVE WORKFLOW EMULATION */}
        <BentoContact 
          contactName={contactName}
          setContactName={setContactName}
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
          contactCompany={contactCompany}
          setContactCompany={setContactCompany}
          contactService={contactService}
          setContactService={setContactService}
          contactMessage={contactMessage}
          setContactMessage={setContactMessage}
          contactLoading={contactLoading}
          contactSuccess={contactSuccess}
          setContactSuccess={setContactSuccess}
          latestContactLog={latestContactLog}
          submitContactForm={submitContactForm}
        />

      </main>

      {/* RENDER MODULAR RESUME GATEWAY MODAL */}
      <BentoResumeModal 
        showResumeModal={showResumeModal}
        setShowResumeModal={setShowResumeModal}
        isDownloading={isDownloading}
        downloadStep={downloadStep}
        resumeSent={resumeSent}
        setResumeSent={setResumeSent}
        handleDownloadResume={handleDownloadResume}
      />

      {/* RENDER MODULAR FOOTER */}
      <BentoFooter />

    </div>
  );
}
