/* eslint-disable n/no-process-env */
import path from 'path';
import dotenv from 'dotenv';

// Configure "dotenv"
const pathToEnv = path.join(__dirname, `../.env.test`);
console.log(`Using environment file: ${pathToEnv}`);
const result1 = dotenv.config({ path: pathToEnv });
if (result1.error) {
  throw result1.error;
}
