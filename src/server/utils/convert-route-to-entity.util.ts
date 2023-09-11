const mapping: Record<string, string> = {
  deliveries: 'delivery',
  meals: 'meal',
  offers: 'offer',
  orders: 'order',
  'pizza-shops': 'pizza_shop',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
