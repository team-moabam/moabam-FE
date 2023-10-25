import { setupWorker } from 'msw/browser';
import { examplePostHandlers, exampleCommentHandlers } from './handlers';

export const worker = setupWorker(
  ...examplePostHandlers,
  ...exampleCommentHandlers
);
