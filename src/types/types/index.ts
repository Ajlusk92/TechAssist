export interface MachineInfo {
  type: string;
  make: string;
  model: string;
  year?: string;
  serial?: string;
  hours?: string;
}

export interface DiagnosticStep {
  id: string;
  instruction: string;
  tools?: string[];
  expectedReading?: string;
  safetyNote?: string;
  isCompleted: boolean;
  result?: 'pass' | 'fail' | 'na';
}

export interface Job {
  id: string;
  customerName: string;
  machine: MachineInfo;
  complaint: string;
  faultCodes: string[];
  status: 'active' | 'completed';
  steps: DiagnosticStep[];
  timestamp: number;
  notes: string;
}

export type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: number;
};