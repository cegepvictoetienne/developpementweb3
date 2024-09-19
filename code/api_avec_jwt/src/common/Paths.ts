/**
 * Express router paths go here.
 */

export default {
  Base: '/api',
  GenerateToken: {
    Base: '/generatetoken',
    Get: '/',
  },
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
