export default {
  Base: '/api',
  Auteur: {
    Base: '/auteurs',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
