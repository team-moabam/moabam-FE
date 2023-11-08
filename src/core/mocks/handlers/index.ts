import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomHandlers from './room';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomHandlers
];

export default handlers;
