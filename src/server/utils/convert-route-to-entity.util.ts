const mapping: Record<string, string> = {
  administrators: 'administrator',
  clients: 'client',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
