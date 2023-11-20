import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';
import bugsHandlers from './bugs';
import couponsHandlers from './coupons';
import userHandlers from './user';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers,
  ...bugsHandlers,
  ...couponsHandlers,
  ...userHandlers
];

export default handlers;
