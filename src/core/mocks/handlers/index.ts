import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';
import bugsHandlers from './bugs';
import couponsHandlers from './coupons';
import myBirdHandlers from './myBird';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers,
  ...bugsHandlers,
  ...couponsHandlers,
  ...myBirdHandlers
];

export default handlers;
