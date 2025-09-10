import { beforeAll } from 'vitest';
import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';

import app from '@src/server';

/******************************************************************************
                                    Run
******************************************************************************/

let agent: TestAgent<Test>;

beforeAll(() => {
  agent = supertest.agent(app);
});

/******************************************************************************
                                    Export
******************************************************************************/

export { agent };
