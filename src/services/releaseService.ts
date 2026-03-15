// Backend service: release-orchestrator-idp
// API routed via frontier_consult

import apiClient from '../api/apiClient';
import type { ReleaseEvent } from '../types';

export const releaseService = {
  /**
   * Fetch latest release events
   * TODO: Connect to GET /api/releases on frontier_consult → routes to release-orchestrator-idp
   *
   * // EVENT: RELEASE_REQUESTED
   * // Backend publishes event to message broker (RabbitMQ/Kafka)
   */
  async getReleases(): Promise<ReleaseEvent[]> {
    // TODO: Replace mock with actual API call
    // const response = await apiClient.get<ReleaseEvent[]>('/releases');
    // return response.data;

    await new Promise((resolve) => setTimeout(resolve, 400));
    return [
      { id: 1, status: 'SUCCESS', timestamp: '2026-03-15T10:30:00Z' },
      { id: 2, status: 'SUCCESS', timestamp: '2026-03-14T15:45:00Z' },
      { id: 3, status: 'IN_PROGRESS', timestamp: '2026-03-15T12:00:00Z' },
    ];
  },
};
