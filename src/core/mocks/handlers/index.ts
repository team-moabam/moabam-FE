import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';
import membersHandlers from './members';
import bugsHandlers from './bugs';
import couponsHandlers from './coupons';
import userHandlers from './user';
import notificationsHandlers from './notifications';
import timeHandler from './time';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers,
  ...membersHandlers,
  ...bugsHandlers,
  ...couponsHandlers,
  ...userHandlers
  ...notificationsHandlers,
  timeHandler
];

export default handlers;
