// Backend service: border_info_admin
// Data managed through Django Admin
// API exposed via frontier_consult gateway

import apiClient from '../api/apiClient';
import type { FAQItem } from '../types';

export const faqService = {
  /**
   * Fetch FAQ list
   * TODO: Connect to GET /api/faq on frontier_consult → routes to border_info_admin
   */
  async getFAQs(): Promise<FAQItem[]> {
    // TODO: Replace mock with actual API call
    // const response = await apiClient.get<FAQItem[]>('/faq');
    // return response.data;

    await new Promise((resolve) => setTimeout(resolve, 600));
    return [
      {
        id: 1,
        question: 'How does the system work?',
        answer:
          'The system uses distributed microservices managed by the frontier_consult API gateway. Each service handles a specific domain: border_info_admin manages FAQ content, ai_for_chatbot handles AI interactions, and release-orchestrator-idp manages deployments.',
      },
      {
        id: 2,
        question: 'How do I deploy the system?',
        answer:
          'Deployment is orchestrated by the release-orchestrator-idp service. It manages CI/CD pipelines, environment configurations, and rollback strategies across all microservices.',
      },
      {
        id: 3,
        question: 'How is FAQ content managed?',
        answer:
          'FAQ content is managed through the Django Admin interface provided by the border_info_admin service. Administrators can create, edit, and organize FAQ entries which are served via the frontier_consult gateway.',
      },
      {
        id: 4,
        question: 'What authentication method is used?',
        answer:
          'The system uses JWT-based authentication handled by the frontier_consult API gateway. Tokens are issued on login/registration and must be included in all subsequent API requests.',
      },
      {
        id: 5,
        question: 'How does the AI assistant work?',
        answer:
          'The AI assistant is powered by the ai_for_chatbot service. User questions are sent via the frontier_consult gateway, processed by the AI model, and responses are returned in real-time.',
      },
    ];
  },
};
