export type MachineInfo = {
  type: string;
  make: string;
  model: string;
  faultCode?: string;
};

export type Message = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

export type Job = {
  id: string;
  date: string;
  machine: MachineInfo;
  complaint: string;
  status: 'Open' | 'Resolved';
  steps: string[];
};