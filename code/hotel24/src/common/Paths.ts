/**
 * Express router paths go here.
 */

export default {
  Base: '/api',
  Reservations: {
    Base: '/reservations',
    Get: '/',
    Add: '/',
    Update: '/',
    Delete: '/delete/:id',
  },
} as const;
