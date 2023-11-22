import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';
import membersHandlers from './members';
import bugsHandlers from './bugs';
import couponsHandlers from './coupons';
import reportsHandlers from './reports';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers,
  ...membersHandlers,
  ...bugsHandlers,
  ...couponsHandlers,
  ...reportsHandlers
];

export default handlers;
