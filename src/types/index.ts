// Shared microservice schemas

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface AIQuestionRequest {
  question: string;
}

export interface AIAnswerResponse {
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ReleaseEvent {
  id: number;
  status: 'SUCCESS' | 'FAILURE' | 'IN_PROGRESS';
  timestamp: string;
}
