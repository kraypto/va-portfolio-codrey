import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const getDirPath = () => {
  try {
    if (typeof import.meta !== "undefined" && import.meta.url) {
      return path.dirname(fileURLToPath(import.meta.url));
    }
  } catch (e) {
    // Ignore error
  }
  return process.cwd();
};

const currentDir = getDirPath();

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());

// In-memory data structures to hold contact messages and simulated automations
const contactMessages: any[] = [];
const automationLogs: any[] = [];

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
const API_KEY = process.env.GEMINI_API_KEY;

if (API_KEY && API_KEY !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini client successfully initialized.");
  } catch (error) {
    console.error("Error initializing Gemini client:", error);
  }
} else {
  console.log("No valid GEMINI_API_KEY found. Server will run in high-quality fallback automation mode for AI simulation.");
}

// Jan Codrey's Context Information for the AI agent
const JAN_PROFILE_CONTEXT = `
You are the AI Assistant Clone of Jan Codrey M. Delos Reyes ("Jan Codrey").
Your job is to represent Jan Codrey to prospective international clients who are visiting his online portfolio.
Act as his brilliant, helpful, automation-focused virtual assistant. Speak professionally, confidently, with a warm, supportive, and action-oriented tone.

Profile of Jan Codrey M. Delos Reyes:
- Name: Jan Codrey M. Delos Reyes
- Location: Philippines
- Email: jancodrey.delosreyes@gmail.com
- Phone: 09703031945
- LinkedIn: linkedin.com/in/jcodreydelosreyes
- Primary Positioning: AI-Enabled Virtual Assistant | Cloud & IT Support Specialist | AI Automation Builder
- Hourly Rate Concept: Open to freelance contracts, full-time/part-time technical VA roles, or automation retainer contracts. High value-to-cost ratio for overseas clients.

Core Skills:
1. AI & Automation (Developing & Applying):
   - Prompt Engineering: crafting highly effective ChatGPT / LLM inputs for system design.
   - Generative AI Fundamentals: Google AI tools, OpenAI APIs.
   - AI-Assisted Workflows: Documentation, Operational reporting, automated summarization.
   - Automation Platforms: n8n, Zapier, Power Automate (workflow automation, email trigger routing).
2. Cloud & IT Infrastructure Support:
   - ServiceNow: Incident Management lifecycle (L1/L2), SLA compliance, ticket auditing.
   - Operating Systems: Windows Server and Linux troubleshooting.
   - Microsoft 365, Active Directory.
   - Networking Fundamentals: DNS, DHCP, VPNs, firewalls, and routing.
   - Virtualization: VMware / Hyper-V.
3. General & Technical Virtual Assistant (VA):
   - Administrative support, tasks coordinating, structured database updates.
   - Client documentation, operations reporting, email management.

Experience:
1. Accenture Philippines — App/Cloud Support Engineer (Service Management) | July 2025 - Present
   - L1/L2 cloud & infrastructure support. Managed incident lifecycle with ServiceNow.
   - Troubleshot connectivity, systems; conducted ticket auditing for operational metrics and process improvement.
   - Converted client issues into detailed structured Knowledge Base Articles (KBAs).
2. Accenture Philippines — Cloud Infrastructure Intern | March 2025 - May 2025
   - Windows Server/Linux configuration, Active Directory structure, VMware virtualization, DNS/DHCP networking configuration.

Certifications:
⭐ Highlighted: Google Generative AI Leader (GAIL)
- Google Cloud Digital Leader
- Salesforce Trailhead (CRM Fundamentals)

AI Automation Projects Accomplished / Work-in-Progress (Jan can implement these for clients!):
1. AI-Powered IT Ticket Automation: Uses n8n and ChatGPT to categorize and summarize incoming ServiceNow tickets to speed up L1 queues.
2. AI Email Assistant: Drafts context-aware professional email suggestions using Gmail + Zapier API mappings.
3. AI Knowledge Base Generator: Auto-transforms solved tickets into formatted wiki entries/Notion cards using LLM reasoning.
4. AI Workflow Automation Dashboard: Automates repetitive administration tasks, syncing Google Sheets with cloud platforms.

When answering, follow these guidelines:
- Always speak in the 1st person on behalf of Jan's AI digital representative (e.g. "I am Jan's AI clone..." or "Jan is exceptionally skilled in...").
- Give practical answers. If they ask about his hourly rate, say: "Jan is open to contract discussions and would love to provide a custom proposal. You can drop him an email directly at jancodrey.delosreyes@gmail.com to schedule a call!"
- If the Gemini API key is missing, a fallback template handles basic queries, but when Gemini is active, you can provide rich, tailored responses based on this profile. Keep responses concise (under 3 sentences) to remain reader-friendly. Avoid dry essay-like paragraphs.
`;

// API Routes
app.post("/api/chat", async (req, res) => {
  const { message, chatHistory } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  // If Gemini client is active, use it
  if (ai) {
    try {
      // Re-map simple chatHistory to parts format for GoogleGenAI SDK
      const historyParts = (chatHistory || []).map((msg: any) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
      }));

      // Combine text profile context + user input for single generation or chat
      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: JAN_PROFILE_CONTEXT,
          temperature: 0.7,
        },
        history: historyParts
      });

      const response = await chat.sendMessage({ message: message });
      const text = response.text || "I apologize, but I am having trouble forming a response right now. Please try typing that again.";
      return res.json({ text, automated: false });

    } catch (error) {
      console.error("Gemini API Error:", error);
      // Fallback in case of runtime error
    }
  }

  // Intelligent Fallback responses if Gemini API is not setup or fails
  const lowerMessage = message.toLowerCase();
  let text = "I am Jan's automated assistant clone! Currently, my advanced cognitive brain is offline, but I can surely answer your query. Jan Codrey is a high-performing AI-Enabled Virtual Assistant with background in Accenture IT Cloud Support, ServiceNow SLA management, AWS/GCP, and custom n8n automation.";

  if (lowerMessage.includes("hire") || lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
    text = "You can hire or contact Jan directly! His email is <strong>jancodrey.delosreyes@gmail.com</strong> and his phone number is <strong>09703031945</strong>. You can also message him on LinkedIn: linkedin.com/in/jcodreydelosreyes!";
  } else if (lowerMessage.includes("accenture") || lowerMessage.includes("experience") || lowerMessage.includes("work")) {
    text = "Jan operates as an App/Cloud Support Engineer at Accenture Philippines (July 2025 - Present), handling L1/L2 tickets inside ServiceNow. Previously, he interned in Cloud Infrastructure where he handled Windows Server, AD configuration, and networking fundamentals.";
  } else if (lowerMessage.includes("cert") || lowerMessage.includes("certification") || lowerMessage.includes("google")) {
    text = "Jan holds elite credentials including the <strong>Google Generative AI Leader (GAIL)</strong> certificate, Google Cloud Digital Leader certification, and Salesforce Trailhead Fundamentals!";
  } else if (lowerMessage.includes("n8n") || lowerMessage.includes("automation") || lowerMessage.includes("project") || lowerMessage.includes("zapier")) {
    text = "Jan builds real-world automation workflows including an AI-powered IT Ticket Summarization, automated email drafting prompts, and automatic Knowledge Base generators using GPT/n8n/ServiceNow APIs.";
  } else if (lowerMessage.includes("skill") || lowerMessage.includes("cloud") || lowerMessage.includes("it")) {
    text = "Jan's core IT stack consists of ServiceNow ticket administration, DNS/DHCP configuration, Windows & Linux systems handling, and virtual machines (VMware). He excels in prompt engineering and automation scripting with n8n / Zapier.";
  } else {
    text = "That's a fantastic inquiry! As Jan's AI representative, I can guide you through his credentials. He is a specialized AI-powered Virtual Assistant who integrates cloud/IT ticket management with modern LLM prompt engineering. Feel free to contact him at jancodrey.delosreyes@gmail.com to discuss how he can boost your operations.";
  }

  return res.json({ text, automated: true });
});

// Get contact configuration so client-side browser can submit directly to avoid server IP data-center blocks (Cloudflare, etc.)
app.get("/api/contact-config", (req, res) => {
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  const isOk = !!(key && key.trim() !== "" && key !== "YOUR_WEB3FORMS_ACCESS_KEY");
  res.json({
    configured: isOk,
    key: isOk ? key.trim() : null,
    email: "jancodrey.delosreyes@gmail.com"
  });
});

// Post Contact form and forward cleanly to Gmail via Web3Forms proxy if configured (with client-side bypass)
app.post("/api/contact", async (req, res) => {
  const { name, email, company, message, serviceType, clientEmailed } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const newInquiry = {
    id: `inq-${Date.now()}`,
    name,
    email,
    company: company || "N/A",
    serviceType: serviceType || "General VA Assistance",
    message,
    timestamp: new Date().toISOString()
  };

  contactMessages.push(newInquiry);

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  let emailed = !!clientEmailed;

  if (!emailed && key && key.trim() !== "" && key !== "YOUR_WEB3FORMS_ACCESS_KEY") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: key.trim(),
          subject: `Portfolio Inquiry from ${name}`,
          from_name: `${name} (Portfolio Form)`,
          name: name,
          email: email,
          message: `You have received a new contact submission from your portfolio website:

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Requested Service: ${serviceType}

Inquiry Message:
${message}

---
Sent automatically via your Jan Codrey Portfolio Server Proxy.`
        })
      });

      if (response.ok) {
        emailed = true;
      } else {
        const errorMsg = await response.text();
        console.error("Web3Forms submission endpoint returned failure status on server:", response.status, errorMsg);
      }
    } catch (err) {
      console.error("Failed to proxy message through Web3Forms server:", err);
    }
  }

  return res.json({
    success: true,
    message: "Thank you! Your message was received successfully.",
    inquiryId: newInquiry.id,
    emailed: emailed,
    configured: !!(key && key.trim() !== "" && key !== "YOUR_WEB3FORMS_ACCESS_KEY")
  });
});

// Fetch simulated automation workflow logs (demonstrating his AI Builder identity!)
app.get("/api/automation-logs", (req, res) => {
  res.json({ logs: automationLogs });
});

// Vite middleware for dev / express static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();