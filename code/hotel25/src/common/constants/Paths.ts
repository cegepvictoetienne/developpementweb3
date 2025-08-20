
export default {
  Base: '/api',
  Reservations: {
    Base: '/reservations',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
