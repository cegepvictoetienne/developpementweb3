/**
 * Express router paths go here.
 */

import { Immutable } from '@src/other/types';

const Paths = {
  Base: '/api',
  Reservations: {
    Base: '/reservations',
    Get: '/',
    Add: '/',
    Update: '/',
    Delete: '/delete/:id',
  },
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
