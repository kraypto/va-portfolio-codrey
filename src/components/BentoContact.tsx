import React from "react";
import { Mail, Phone, Linkedin, Zap, Cpu, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BentoContactProps {
  contactName: string;
  setContactName: (val: string) => void;
  contactEmail: string;
  setContactEmail: (val: string) => void;
  contactCompany: string;
  setContactCompany: (val: string) => void;
  contactService: string;
  setContactService: (val: string) => void;
  contactMessage: string;
  setContactMessage: (val: string) => void;
  contactLoading: boolean;
  contactSuccess: boolean;
  setContactSuccess: (val: boolean) => void;
  latestContactLog: any;
  submitContactForm: (e: React.FormEvent) => void;
}

export default function BentoContact({
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactCompany,
  setContactCompany,
  contactService,
  setContactService,
  contactMessage,
  setContactMessage,
  contactLoading,
  contactSuccess,
  setContactSuccess,
  latestContactLog,
  submitContactForm
}: BentoContactProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-24" id="contact">
      
      {/* CONTACT INFO CARD */}
      <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between min-h-[460px] hover:border-slate-750 transition duration-300">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <h2 className="text-xl font-bold font-display tracking-tight text-slate-100 uppercase">
              Contact Me
            </h2>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
            Are you interested in hiring a highly skilled, remote, client-facing VA supporting enterprise cloud infrastructure? Let's discuss an active retainer partnership!
          </p>

          {/* Description of real email forwarding */}
          <div className="bg-slate-950/60 border border-slate-850 rounded-2xl p-4.5 space-y-2.5 text-xs text-slate-400 mb-6 leading-relaxed">
            <p className="font-bold text-slate-200 flex items-center gap-1.5 text-xs">
              <Zap className="w-4 h-4 text-cyan-400" /> 📩 Direct Inbox Forwarding
            </p>
            <p>
              When anyone submits an inquiry through this form, it routes directly to Jan's email inbox so you can check and respond to potential contract offers immediately.
            </p>
          </div>
        </div>

        {/* Raw information details */}
        <div className="space-y-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-850 truncate">
            <Mail className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
            <span className="truncate">jancodrey.delosreyes@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-850 truncate">
            <Phone className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
            <span>09703031945</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-850 truncate">
            <Linkedin className="w-4.5 h-4.5 text-cyan-450 shrink-0" />
            <a href="https://linkedin.com/in/jcodreydelosreyes" target="_blank" rel="noreferrer" className="hover:underline text-cyan-400 truncate">
              in/jcodreydelosreyes
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT FORM & LIVE TRACES */}
      <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between min-h-[460px] hover:border-slate-750 transition duration-300">
        <div>
          <form onSubmit={submitContactForm} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-mono uppercase font-bold">Your Full Name</label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400 font-mono uppercase font-bold">Business Email</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="sarah@skynet.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400 font-mono uppercase font-bold">Corporate Company (Optional)</label>
                <input
                  type="text"
                  value={contactCompany}
                  onChange={(e) => setContactCompany(e.target.value)}
                  placeholder="e.g. Skynet Systems"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-mono uppercase font-bold">Required Professional Service</label>
              <select
                value={contactService}
                onChange={(e) => setContactService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition"
              >
                <option value="Technical VA & Support">Technical Virtual Assistant (VA) support</option>
                <option value="AI Automation Setup">n8n / Zapier Automated Workflows setup</option>
                <option value="Cloud Systems Support">L1 / L2 App & Cloud Support Engineering</option>
                <option value="Full Retainer Partnership">Full Professional Contract Partnership</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-mono uppercase font-bold">Strategic Request Requirements</label>
              <textarea
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Describe your IT workflow bottlenecks or VA requirements here..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-100 placeholder-slate-605 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 h-28 resize-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={contactLoading}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs tracking-wider font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md uppercase"
            >
              {contactLoading ? (
                <>
                  <Cpu className="w-4.5 h-4.5 animate-spin text-white" />
                  <span>Sending message to Jan...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Real Gmail delivery success confirmation */}
          <AnimatePresence>
            {contactSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-sans text-xs text-left leading-relaxed shadow-xl space-y-4 mt-5 text-slate-300"
              >
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold border-b border-slate-850 pb-3 mb-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex flex-center items-center justify-center text-emerald-400 text-xs font-bold font-mono">✓</div>
                  <span className="uppercase tracking-wider">Inquiry Submitted!</span>
                </div>
                
                <div className="space-y-2.5">
                  <p>
                    Thank you, <strong className="text-white">{contactName || "there"}</strong>! Your message was received and logged.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900 flex justify-end">
                  <button 
                    type="button" 
                    className="text-slate-500 hover:text-slate-350 text-[11px] font-mono hover:underline cursor-pointer"
                    onClick={() => setContactSuccess(false)}
                  >
                    Close & Send Another Message
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
