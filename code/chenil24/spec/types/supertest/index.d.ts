import { IAnimal } from '@src/models/Animal';
import 'supertest';

declare module 'supertest' {
  export interface Response {
    headers: Record<string, string[]>;
    body: {
      error?: string;
      errors?: Error.ValidationError;
      animaux: IAnimal[];
    };
  }
}
