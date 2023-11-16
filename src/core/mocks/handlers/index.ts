import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';
import bugsHandlers from './bugs';
import couponsHandlers from './coupons';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers,
  ...bugsHandlers,
  ...couponsHandlers
];

export default handlers;
