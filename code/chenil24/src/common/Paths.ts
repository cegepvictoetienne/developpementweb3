/**
 * Express router paths go here.
 */

export default {
  Base: '/',
  Animaux: {
    Base: '/animaux',
    Get: '/',
    Add: '/',
    Update: '/',
    Delete: '/:id',
  },
} as const;
