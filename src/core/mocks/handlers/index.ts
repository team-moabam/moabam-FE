import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers
];

export default handlers;
