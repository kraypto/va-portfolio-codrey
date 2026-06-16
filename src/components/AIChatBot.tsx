import React, { useState, useRef, useEffect } from "react";
import { Send, User, MessageSquare, Sparkles, AlertCircle, RefreshCw, Bot } from "lucide-react";
import { ChatMessage } from "../types";

export default function AIChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am Jan's AI Assistant Clone. I have been trained on Jan's specific technical skills, cloud experience at Accenture, and automation tools. Ask me anything about how Jan can help streamline your business operations!",
      timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const quickPrompts = [
    { label: "What are your services?", query: "What technical support and virtual assistant services do you offer?" },
    { label: "Highlight your AI skills", query: "Can you list your AI, Prompt Engineering, and Automation skills?" },
    { label: "Accenture cloud background", query: "Can you tell me about your experience at Accenture Philippines?" },
    { label: "Google GAIL certification?", query: "What is your Google Generative AI Leader (GAIL) certification?" },
    { label: "How to hire you?", query: "How can I contact or hire Jan and what is his location?" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setErrorStatus(null);
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          chatHistory: messages.slice(-5) // Pass recent conversations for context
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from proxy server.");
      }

      const data = await response.json();
      
      const botMessage: ChatMessage = {
        id: `msg-bot-${Date.now()}`,
        sender: "bot",
        text: data.text,
        timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
        automated: data.automated
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus("Connection timeout or server key not initialized. Falling back into offline mock mode.");
      
      // Highly context-aware mock fallback in case of strict network failures
      setTimeout(() => {
        const fallbackAnswer = generateSimulatedReply(textToSend);
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-fallback-${Date.now()}`,
            sender: "bot",
            text: fallbackAnswer,
            timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
            automated: true
          }
        ]);
        setErrorStatus(null);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSimulatedReply = (userInput: string): string => {
    const term = userInput.toLowerCase();
    if (term.includes("accenture") || term.includes("experience") || term.includes("job")) {
      return "Jan has outstanding cloud experience as an App/Cloud Support Engineer at Accenture Philippines (July 2025 - Present), troubleshooting systems in ServiceNow. He also completed his Cloud Internship there in early 2025 configuring Active Directory, G-Suite, Windows/Linux Servers, and VMware!";
    }
    if (term.includes("cert") || term.includes("google") || term.includes("gail")) {
      return "Jan is certified as a Google Generative AI Leader (GAIL), certified Google Cloud Digital Leader, and Salesforce Trailhead student. He understands LLM prompt engineering and AI strategy at an enterprise level.";
    }
    if (term.includes("skill") || term.includes("tool") || term.includes("stack")) {
      return "Jan's core technical focus integrates: n8n & Zapier workflow automation, prompt engineering (GPT models, Claude, Gemini), ServiceNow Incident compliance, Windows/Linux server management, DHCP/DNS routing, and data operational report automation.";
    }
    if (term.includes("hire") || term.includes("contact") || term.includes("email") || term.includes("linkedin")) {
      return "You can contact Jan natively via email at jancodrey.delosreyes@gmail.com or mobile on 09703031945. His LinkedIn profile URL is linkedin.com/in/jcodreydelosreyes. He is eager to take on cross-border business work!";
    }
    return "Thank you for asking! As an AI-Enabled Virtual Assistant, Jan automates task queuing, constructs custom LLM workflow pipelines, designs ticket triggers, and audits operational reporting to scale remote agency operations efficiently.";
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "System reboot complete. Greetings! I am Jan's Virtual Assistant AI Clone. I can detail Jan's capability in cloud infrastructures, ServiceNow triage, LLM operations, or n8n workflow designs. Go ahead and test my responses!",
        timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <div className="w-full flex flex-col bg-slate-900/60 rounded-2xl border border-slate-800/80 backdrop-blur-md overflow-hidden shadow-2xl h-[540px]" id="jan-ai-agent">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div className="absolute right-0 bottom-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950"></div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-1.5 font-display">
              Jan's AI Digital Clone
              <span className="text-[10px] bg-indigo-500/15 text-indigo-300 px-1.5 py-0.5 rounded font-mono border border-indigo-500/20">Active</span>
            </h4>
            <p className="text-[11px] text-slate-400 font-mono">Powered by Gemini 3.5 Flash</p>
          </div>
        </div>
        
        <button 
          onClick={handleReset} 
          title="Reset conversation" 
          type="button"
          className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800/50 rounded-lg transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={chatContainerRef} className="flex-1 p-5 overflow-y-auto space-y-4 max-h-[340px] min-h-[220px]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            {msg.sender === "bot" && (
              <div className="w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 select-none">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            )}
            <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs ${
              msg.sender === "user"
                ? "bg-indigo-600 text-slate-50 font-medium rounded-tr-none shadow-md"
                : "bg-slate-950/80 border border-slate-800/80 text-slate-300 rounded-tl-none leading-relaxed"
            }`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text }}></div>
              <div className={`mt-1.5 text-[9px] font-mono tracking-wider ${msg.sender === "user" ? "text-indigo-200 text-right" : "text-slate-500 flex items-center gap-1.5 justify-start"}`}>
                <span>{msg.timestamp}</span>
                {msg.sender === "bot" && (
                  <span className="text-[8px] px-1 bg-slate-900 border border-slate-800 rounded text-slate-400">
                    {msg.automated ? "Simulation Rule Engine" : "LLM Live Dynamic AI"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl rounded-tl-none px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300"></span>
              </span>
              <span>AI is thinking about Jan's skills...</span>
            </div>
          </div>
        )}
        {errorStatus && (
          <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl flex items-start gap-2.5 text-[11px] text-indigo-300">
            <AlertCircle className="w-4 h-4 shrink-0 text-indigo-400 mt-0.5" />
            <span>{errorStatus}</span>
          </div>
        )}
      </div>

      {/* Suggested Prompts Grid */}
      <div className="px-5 py-2.5 bg-slate-950/40 border-t border-slate-800/50">
        <label className="text-[10px] text-indigo-400 font-mono tracking-wider uppercase mb-1.5 block">Explore Quick Queries</label>
        <div className="flex flex-wrap gap-1.5 max-h-[80px] overflow-y-auto pr-1">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p.query)}
              disabled={isLoading}
              type="button"
              className="text-[10px] bg-slate-900 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/30 text-slate-300 hover:text-indigo-300 px-2 py-1 rounded-lg transition-all duration-150 text-left whitespace-nowrap cursor-pointer disabled:opacity-50"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Send Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputText);
        }}
        className="p-3.5 bg-slate-950 border-t border-slate-800/80 flex gap-2 items-center"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask Jan's AI clone (e.g., 'What is his Accenture experience?')..."
          disabled={isLoading}
          className="flex-1 bg-slate-900 border border-slate-800/80 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 text-xs px-3.5 py-2.5 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none disabled:opacity-60 transition"
        />
        <button
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 text-slate-100 p-2.5 rounded-xl transition disabled:opacity-50 flex items-center justify-center cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
