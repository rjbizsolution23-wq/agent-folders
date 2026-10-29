export interface ServiceHealth {
  status: 'healthy' | 'degraded';
  uptimeSeconds: number;
  timestamp: string;
}

export function checkHealth(startTime: number): ServiceHealth {
  return {
    status: 'healthy',
    uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString()
  };
}
