export default {
  Base: '/api',
  Chenil: {
    Base: '/animaux',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
