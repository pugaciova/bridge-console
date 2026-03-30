// Shared microservice schemas

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
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
