import { setupWorker } from 'msw/browser';
import { handlers } from './handlers/posts';

export const worker = setupWorker(...handlers);
