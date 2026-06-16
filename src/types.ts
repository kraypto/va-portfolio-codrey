export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  tools: string[];
  status: "In Progress" | "Concept" | "Prototype" | "In Planning";
  useCase: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  automated?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  highlighted: boolean;
  icon?: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: "P1 - Critical" | "P2 - High" | "P3 - Moderate" | "P4 - Low";
  status: "New" | "In Progress" | "Resolved";
  slaTimeRemain: string;
}

