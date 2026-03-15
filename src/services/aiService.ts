// Backend service: ai_for_chatbot
// API routed via frontier_consult

import apiClient from '../api/apiClient';
import type { AIQuestionRequest, AIAnswerResponse } from '../types';

export const aiService = {
  /**
   * Send a question to the AI assistant
   * TODO: Connect to POST /api/ai/question on frontier_consult → routes to ai_for_chatbot
   *
   * // EVENT: USER_QUESTION_SUBMITTED
   * // Backend publishes event to message broker (RabbitMQ/Kafka)
   */
  async askQuestion(question: string): Promise<AIAnswerResponse> {
    // TODO: Replace mock with actual API call
    // const response = await apiClient.post<AIAnswerResponse>('/ai/question', { question });
    // return response.data;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockResponses: Record<string, string> = {
      deploy:
        'Deployment is handled by the release-orchestrator-idp service. It coordinates the CI/CD pipeline across all microservices.',
      auth: 'Authentication is managed by the frontier_consult API gateway using JWT tokens.',
      faq: 'FAQ content is managed through the border_info_admin Django admin interface.',
    };

    const key = Object.keys(mockResponses).find((k) =>
      question.toLowerCase().includes(k)
    );

    return {
      answer:
        key
          ? mockResponses[key]
          : `Based on the system architecture, here's what I found: The Frontier ecosystem uses a distributed microservice architecture with frontier_consult as the API gateway. Your question "${question}" relates to the overall system design. Please refer to the documentation for detailed information.`,
    };
  },
};
