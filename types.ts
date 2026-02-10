
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: Date;
}

export enum Page {
  Dashboard = 'dashboard',
  Intelligence = 'intelligence',
  Forge = 'forge',
  Settings = 'settings'
}
