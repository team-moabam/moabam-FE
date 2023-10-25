import { setupWorker } from 'msw/browser';
import { postHandlers, commentHandlers } from './handlers';

export const worker = setupWorker(...postHandlers, ...commentHandlers);
